import { useTaskContext } from "../../contexts/TaskContext";
import styles from "./styles.module.css";

export const CountDown = () => {
  const { state } = useTaskContext();
  return (
    <div className={styles.container}>
      <div>{state.formattedSecondsRemaining}</div>
    </div>
  );
};
