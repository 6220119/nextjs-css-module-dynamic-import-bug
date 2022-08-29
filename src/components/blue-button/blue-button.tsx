import { FC } from "react";
import { Button } from "../button";

import styles from "./blue-button.module.css";

export const BlueButton: FC = () => {
  return <Button className={styles.blueBtn}>Im Blue</Button>;
};
