import React,{ FC } from "react";
import Link from "next/link";

import styles from "./styles/progamer.module.scss";

type progamerProps = {
  imgPath: string;
  progamerName: string;
  progamerId: string;
};
const Progamer = () => {
  return <div className={styles.progamer}>
    Progamer
    </div>;

};

export default Progamer;
