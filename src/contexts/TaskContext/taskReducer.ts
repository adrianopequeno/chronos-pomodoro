import { TaskStateModel } from '../../models/TaskStateModel';
import { formatSecondsToMinutes } from '../../utils/formatSecondsToMinutes';
import { getNextCycle } from '../../utils/getNextCycle';
import { initialTaskState } from './initialTaskState';
import { TaskActionModel, TaskActionTypes } from './taskActions';

export const taskReducer = (
  state: TaskStateModel,
  action: TaskActionModel
): TaskStateModel => {
  switch (action.type) {
    case TaskActionTypes.START_TASK: {
      const newTask = action.payload;
      const nextCycle = getNextCycle(state.currentCycle);
      const secondsRemeining = newTask.duration * 60;

      return {
        ...state,
        activeTask: newTask,
        currentCycle: nextCycle,
        secondsRemeining,
        formattedSecondsRemaining: formatSecondsToMinutes(secondsRemeining),
        tasks: [...state.tasks, newTask],
      };
    }
    case TaskActionTypes.INTERRUPT_TASK: {
      return {
        ...state,
        activeTask: null,
        secondsRemeining: 0,
        formattedSecondsRemaining: '00:00',
        tasks: state.tasks.map((task) => {
          if (state.activeTask && state.activeTask.id === task.id) {
            return { ...task, interruptDate: Date.now() };
          }
          return task;
        }),
      };
    }
    case TaskActionTypes.COMPLETE_TASK: {
      return {
        ...state,
        activeTask: null,
        secondsRemeining: 0,
        formattedSecondsRemaining: '00:00',
        tasks: state.tasks.map((task) => {
          if (state.activeTask && state.activeTask.id === task.id) {
            return { ...task, completeDate: Date.now() };
          }
          return task;
        }),
      };
    }
    case TaskActionTypes.RESET_STATE: {
      return { ...initialTaskState };
    }
    case TaskActionTypes.COUNT_DOWN: {
      return {
        ...state,
        secondsRemeining: action.payload.secondsRemeining,
        formattedSecondsRemaining: formatSecondsToMinutes(
          action.payload.secondsRemeining
        ),
      };
    }
    case TaskActionTypes.CHANGE_SETTINGS: {
      return {
        ...state,
        config: {
          ...action.payload,
        },
      };
    }
  }
  // Sempre deve retorna o estado
  return state;
};
