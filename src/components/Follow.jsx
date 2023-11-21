import React from "react";
import styles from "../styles/Follow.module.css";

const Follow = ({ subtitle, number }) => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.rectangle}>{number}</div>
      <div className={styles.text}>{subtitle}</div>
    </div>
  );
};

export default Follow;
