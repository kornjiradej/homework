import React, { useState } from "react";
import styles from "./Home.module.scss";
import { Tabs, Carousel } from "antd";
import GraphIcon from "../../assets/icons/graph_icon.svg";
import GraphIconSelected from "../../assets/icons/graph_icon_selected.svg";
import ListIcon from "../../assets/icons/list_icon.svg";
import ListIconSelected from "../../assets/icons/list_icon_selected.svg";

const { TabPane } = Tabs;

const Home = () => {
  const [viewMode, setViewMode] = useState(0);
  const [ carousel, setCarousel ] = useState(null)
  const callback = (key) => {
    console.log(key);
  }; 
  const onChangeCarousel = async(type) => {  
    if(type === 'next') { 
      await carousel.next() 
    }else { 
      await carousel.prev() 
    } 
  } 
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
          <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab="Daily" key="1" />
            <TabPane tab="Weekly" key="2" />
            <TabPane tab="Monthly" key="3" />
          </Tabs>
          <div onClick={() => setViewMode(0)} className={styles.icon}>
            <img
              src={viewMode === 0 ? GraphIconSelected : GraphIcon}
              alt="GraphIcon"
            />
          </div>
          <div onClick={() => setViewMode(1)} className={styles.icon}>
            <img
              src={viewMode === 1 ? ListIconSelected : ListIcon}
              alt="ListIcon"
            />
          </div>
        </div>
        <div className={styles.date}>
          <div className={styles.date_div}>
            <div onClick={() => onChangeCarousel('prev')} className={styles.date_item_arrow}>
              <span>{'<'}</span>
              {/* <img src={LeftArrowIcon} alt="LeftArrowIcon" /> */}
              {/* <span>←</span> */}
            </div>
            <div className={styles.carousel_container}>
              <Carousel
                ref={node => setCarousel(node)} 
                // arrows={true}
                slidesToShow={7}
                swipeToSlide={true}
                dots={false}
                draggable={true}
                infinite={false}
                afterChange={onChangeCarousel}
                // nextArrow={<div className={styles.arrow}>→</div>}
                // prevArrow={<div className={styles.arrow}>←</div>}
              >
                {[
                  1,
                  2,
                  3,
                  4,
                  5,
                  6,
                  7,
                  8,
                  9,
                  10,
                  11,
                  12,
                  13,
                  14,
                  15,
                  16,
                  17,
                  18,
                  19,
                  20,
                  21,
                  22,
                  23,
                  24,
                  25,
                  26,
                  27,
                  28,
                  29,
                  30,
                ].map((data, i) => {
                  return (
                    <div key={i}>
                      <div className={styles.date_item}>
                        <span>{data}</span>
                      </div>
                    </div>
                  );
                })}
                <div></div>
              </Carousel>
            </div>
            <div onClick={() => onChangeCarousel('next')} className={styles.date_item_arrow}>
              <span>{'>'}</span>
              {/* <img src={RightArrowIcon} alt="RightArrowIcon" /> */}
              {/* <span>→</span> */}
            </div>
            <div className={styles.text_div}>
              <span className={styles.text_today}>↓Today</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
