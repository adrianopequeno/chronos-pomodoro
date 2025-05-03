import { ComponentProps } from "react";

import styles from "./styles.module.css";

type DefaultInputProps = {
  id: string;
  labelText?: string;
} & ComponentProps<"input">;

export const DefaultInput = ({
  id,
  type,
  labelText,
  ...rest
}: DefaultInputProps) => {
  return (
    <>
      {labelText && <label htmlFor={id}>{labelText}</label>}
      <input className={styles.input} type={type} name="" id={id} {...rest} />
    </>
  );
};
