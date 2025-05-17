import styles from './styles.module.css';
import { RouterLink } from '../RouterLink';

export const Footer = () => {
  return (
    <h1 className={styles.footer}>
      <RouterLink href="/about-pomodoro">
        Entenda como funciona a técnica pomodoro
      </RouterLink>
      <RouterLink href="/">
        Chronos Pomodoro &copy; {new Date().getFullYear()} - Feito com ❤️
      </RouterLink>
    </h1>
  );
};
