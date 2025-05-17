import { Link } from "react-router";
import styles from "./styles.module.css";

export const Footer = () => {
  return (
    <h1 className={styles.footer}>
      <Link to="/about-pomodoro">Entenda como funciona a técnica pomodoro</Link>
      <Link to="/">
        Chronos Pomodoro &copy; {new Date().getFullYear()} - Feito com ❤️
      </Link>
    </h1>
  );
};
