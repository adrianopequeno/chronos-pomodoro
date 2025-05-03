import { ComponentProps, ReactNode } from "react";

import styles from "./styles.module.css";

type DefaultButtonProps = {
  icon: ReactNode;
  color?: "green" | "red";
} & ComponentProps<"button">;

export const DefaultButton = ({
  icon,
  color = "green",
  ...props
}: DefaultButtonProps) => {
  return (
    <>
      <button className={`${styles.button} ${styles[color]}`} {...props}>
        {icon}
      </button>
    </>
  );
};
