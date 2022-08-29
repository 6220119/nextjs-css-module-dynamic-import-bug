import { FC } from "react";
import { Button } from "../button";

import styles from "./red-button.module.css";

export const RedButton: FC = () => {
  return <Button className={styles.redBtn}>Im Red</Button>;
};
