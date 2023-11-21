import React from "react";
import styles from "../styles/Img.module.css";
const Img = ({ type, color, dimentions, imgDimentions }) => {
  return (
    <div
      className={styles.mainContainer}
      style={{
        backgroundColor: `${color}`,
        width: `${dimentions}`,
        height: `${dimentions}`,
      }}
    >
      <img
        style={{
          width: `${imgDimentions}`,
          height: `${imgDimentions}`,
        }}
        src={`./${type}.png`}
        alt=""
      />
    </div>
  );
};

export default Img;
