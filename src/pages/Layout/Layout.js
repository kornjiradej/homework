import React from "react";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import styles from "./Layout.module.scss";

const Layout = (props) => {  
  return (
    <div className={styles.layout}>
      <div className={styles.header}>
        <Header props={props.children.props}/>
      </div>
      {props.children}
      <div className={styles.divided} />
      <div className={styles.navbar}>
        <Navbar props={props.children.props}/>
      </div>
    </div>
  );
};

export default Layout;
