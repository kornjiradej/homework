import React from "react";
import styles from "./Header.module.scss";
import HomeIcon from "../../assets/icons/home_icon.svg";
import MenuIcon from "../../assets/icons/menu_icon.svg";
import DownArrow from "../../assets/icons/down_arrow_icon.svg";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header_bar}>
          <img src={HomeIcon} alt="HomeIcon" />
          <div className={styles.text_center_header}>
            <span>All Report </span>
            <div className={styles.down_arrow}>
              <img src={DownArrow} alt="DownArrow" />
            </div>
          </div>
          <img src={MenuIcon} alt="MenuIcon" />
        </div>
    </div>
  );
};
export default Header;
