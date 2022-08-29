import { FC, HTMLAttributes, PropsWithChildren } from "react";
import clsx from "clsx";

import styles from "./button.module.css";

export const Button: FC<
  PropsWithChildren<HTMLAttributes<HTMLButtonElement>>
> = ({ className, children, ...rest }) => {
  return (
    <button type="button" className={clsx(styles.default, className)} {...rest}>
      {children}
    </button>
  );
};
