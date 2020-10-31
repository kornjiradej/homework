import React, { Fragment } from "react";
import { Input } from 'antd'
import styles from "./Navbar.module.scss";
import WriteMenu from "../../assets/icons/menu/write_menu.svg";
import ApprovalMenu from "../../assets/icons/menu/approval_menu.svg";
import ReportMenu from "../../assets/icons/menu/report_menu.svg";
import StaticMenu from "../../assets/icons/menu/static_menu.svg";
import SettingMenu from "../../assets/icons/menu/setting_menu.svg";
import ImageIconSmall from '../../assets/icons/image_icon_small.svg'
import ClipIcon from '../../assets/icons/clip_icon.svg'
import AssignIcon from '../../assets/icons/assign_icon.svg'
// assign_icon
const Navbar = (props) => {
  const { location } = props.props
  console.log('location ',location.pathname)
  return (
    <Fragment>
      {
        location.pathname === '/detail' ?
        <div className={styles.comment_bar} 
          style={{ display: 'flex', justifyContent: 'space-around' }}>
          <img src={ImageIconSmall} alt='ImageIconSmall'/>
          <img src={ClipIcon} alt='ClipIcon'/> 
          <img style={{ marginBottom: '8px' }} src={AssignIcon} alt='AssignIcon'/>  
          <Input 
            placeholder={'Comment'}
            style={{ 
              borderRadius:' 14.442px',
              border: '.5px solid #939393',
              width: '199px',
              height: '49px',
              overflow: 'hidden',
            }}/>
        </div> 
          :
        <div div className={styles.navbar}> 
          <div className={styles.group_menu}>
            <div className={styles.menu}>
              <img src={WriteMenu} alt="WriteMenu" />
              <p>Write</p>
            </div>
            <div className={styles.menu}>
              <img src={ApprovalMenu} alt="WriteMenu" />
              <p>Approval</p>
            </div>
            <div className={styles.menu}>
              <img src={ReportMenu} alt="WriteMenu" />
              <p>Report</p>
            </div>
            <div className={styles.menu}>
              <img src={StaticMenu} alt="WriteMenu" />
              <p>Static</p>
            </div>
            <div className={styles.menu}>
              <img src={SettingMenu} alt="WriteMenu" />
              <p>Setting</p>
            </div>
          </div>
        </div>
      }
     
    </Fragment>
    
  );
};

export default Navbar;
