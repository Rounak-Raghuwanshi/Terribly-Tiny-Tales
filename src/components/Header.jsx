import React from "react";
import styles from "../styles/Header.module.css";
import Follow from "./Follow";
import Icon from "./Img";
const Header = ({ profile }) => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.bgPhotoDiv}>
        <div className={styles.bgPic}>
          <img src={`./${profile.background_image}`} alt="" />
        </div>
        <div className={styles.profileInfoContainer}>
          <div className={styles.profileInfo}>
            <div className={styles.profilePic}>
              <img src={`./${profile.profile_pic}`} alt="" />
            </div>
            <div className={styles.details}>
              <div className={styles.nameIcon}>
                <h3>{profile.name}</h3>
                <Icon
                  type="diamond"
                  color="#451952"
                  dimentions="20px"
                  imgDimentions="12px"
                />
                <Icon
                  type="tick"
                  color="#2FBE2F"
                  dimentions="20px"
                  imgDimentions="12px"
                />
              </div>
              <div className={styles.number}>
                <Follow subtitle="Followers" number="6482" />
                <Follow subtitle="Following" number="245" />
              </div>
            </div>
          </div>
          <h4>{profile.description}</h4>
          <div className={styles.footer}>
            <div className={styles.insta}>
              <a href={profile.instagram}>{profile.instagram}</a>
            </div>
            <div className={styles.reachDiv}>
              <div className={styles.iconText}>
                <Icon type="star" color="#29ADB2" />
                <p>125</p>
              </div>
              <div className={styles.iconText}>
                <Icon type="like" color="#FFA33C" />
                <p>12</p>
              </div>
              <div className={styles.iconText}>
                <Icon type="views" color="#434242" />
                <p>57.8K</p>
              </div>
              <div className={styles.iconText}>
                <Icon type="heart" color="#D80032" />
                <p>26.0K</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
