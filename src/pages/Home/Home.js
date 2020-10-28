import React, { useState } from "react";
import styles from "./Home.module.scss";
import { Tabs } from "antd";
import Slider from "react-slick";
import GraphIcon from '../../assets/icons/graph_icon.svg'
import GraphIconSelected from '../../assets/icons/graph_icon_selected.svg'
import ListIcon from '../../assets/icons/list_icon.svg'
import ListIconSelected from '../../assets/icons/list_icon_selected.svg'

const { TabPane } = Tabs;

const Home = () => {
  const [ viewMode, setViewMode ] = useState(0)
  const callback = (key) => {
    console.log(key);
  } 
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 5,
    swipeToSlide: true,
    afterChange: function(index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    }
  };
  return (
    <div className={styles.home}>
      <div className={styles.home_menu}>
        <span>Submission</span>
        <div className={styles.vertical_line} />
        <span>Engagement</span>
      </div>
      <div className={styles.divided} />
      <div className={styles.date_container}>
        <div className={styles.menu}>
          <Tabs defaultActiveKey="1" onChange={callback} >
            <TabPane tab="Daily" key="1"/>
            <TabPane tab="Weekly" key="2"/>
            <TabPane tab="Monthly" key="3"/>
          </Tabs>
          <div onClick={() => setViewMode(0)} className={styles.icon}>
              <img src={viewMode === 0 ? GraphIconSelected : GraphIcon} alt='GraphIcon'/>
            </div>
            <div onClick={() => setViewMode(1)} className={styles.icon}>
              <img src={viewMode === 1 ? ListIconSelected : ListIcon} alt='ListIcon'/>
            </div>
        </div>
        <div className={styles.date}>
        <div >
        {/* <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
          <div>
            <h3>7</h3>
          </div>
          <div>
            <h3>8</h3>
          </div>
          <div>
            <h3>9</h3>
          </div>
        </Slider> */}
        </div>
        <div className={styles.text_div}>
          <span className={styles.text_today}>Today</span>
        </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
