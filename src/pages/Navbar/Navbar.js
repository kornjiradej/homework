import React from 'react'
import styles from './Navbar.module.scss'
import WriteMenu from '../../assets/icons/menu/write_menu.svg'
import ApprovalMenu from '../../assets/icons/menu/approval_menu.svg'
import ReportMenu from '../../assets/icons/menu/report_menu.svg'
import StaticMenu from '../../assets/icons/menu/static_menu.svg'
import SettingMenu from '../../assets/icons/menu/setting_menu.svg'

const Navbar = () => {
    return (
       <div className={styles.navbar}>
           <div className={styles.menu}>
                <img src={WriteMenu} alt='WriteMenu'/>
               <p>Write</p>
           </div> 
           <div className={styles.menu}>
                <img src={ApprovalMenu} alt='WriteMenu'/>
               <p>Approval</p>
           </div> 
           <div className={styles.menu}>
                <img src={ReportMenu} alt='WriteMenu'/>
               <p>Report</p>
           </div> 
           <div className={styles.menu}>
                <img src={StaticMenu} alt='WriteMenu'/>
               <p>Static</p>
           </div> 
           <div className={styles.menu}>
                <img src={SettingMenu} alt='WriteMenu'/>
               <p>Setting</p>
           </div> 
       </div>
    )
}

export default Navbar