import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCyCleType } from "../../utils/getNextCycleType";
import styles from "./styles.module.css";

export const Cycles = () => {
  const { state } = useTaskContext();
  const cycleStep = Array.from({ length: state.currentCycle });

  const cycleDecriptionMap = {
    workTime: "foco",
    shortBreakTime: "pausa curta",
    longBreakTime: "pausa longa",
  };

  return (
    <div className={styles.cyclesContainer}>
      <span>Ciclos:</span>

      <div className={styles.cycleDots}>
        {cycleStep.map((_, index) => {
          const nextCycle = getNextCycle(index);
          const nextCycleType = getNextCyCleType(nextCycle);
          return (
            <span
              key={nextCycle}
              className={`${styles.cycleDot} ${styles[nextCycleType]}`}
              aria-label={`Indicador de ciclo de ${cycleDecriptionMap[nextCycleType]}`}
              title={`Indicador de ciclo de ${cycleDecriptionMap[nextCycleType]}`}
            ></span>
          );
        })}
      </div>
    </div>
  );
};
