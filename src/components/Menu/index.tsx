import { HistoryIcon, HomeIcon, SettingsIcon, SunIcon } from "lucide-react";
import styles from "./styles.module.css";

export const Menu = () => {
  return (
    <div className={styles.menu}>
      <a href="#" className={styles.menuLink}>
        <HomeIcon />
      </a>
      <a href="#" className={styles.menuLink}>
        <HistoryIcon />
      </a>
      <a href="#" className={styles.menuLink}>
        <SettingsIcon />
      </a>
      <a href="#" className={styles.menuLink}>
        <SunIcon />
      </a>
    </div>
  );
};
