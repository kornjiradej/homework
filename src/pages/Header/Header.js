import React from "react";
import styles from "./Header.module.scss";
import HomeIcon from "../../assets/icons/home_icon.svg";
import MenuIcon from "../../assets/icons/menu_icon.svg";
import DownArrow from "../../assets/icons/down_arrow_icon.svg";

const Header = (props) => {
  const { location, history } = props.props 
  const isHomePage = location.pathname === '/home' ? true : false
  const onGoBack = () => history.push('/home')
  return (
    <div className={styles.header}>
      <div className={styles.header_bar}>
  { isHomePage ? <img src={HomeIcon} alt="HomeIcon" /> : <span className={styles.go_back_text} onClick={onGoBack}>{`< Back`}</span>  } 
          {
            isHomePage ? <div className={styles.text_center_header}>
            <span>All Report </span>
            <div className={styles.down_arrow}>
              <img src={DownArrow} alt="DownArrow" />
            </div>
          </div> :
          <span className={styles.text_header}>OKRs Report
          </span>
          }
          
          <img src={MenuIcon} alt="MenuIcon" />
        </div>
    </div>
  );
};
export default Header;
