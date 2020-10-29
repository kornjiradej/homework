import React, { useEffect, useState } from "react";
import styles from "./Home.module.scss";
import { Tabs, Carousel } from "antd";
import GraphIcon from "../../assets/icons/graph_icon.svg";
import GraphIconSelected from "../../assets/icons/graph_icon_selected.svg";
import ListIcon from "../../assets/icons/list_icon.svg";
import ListIconSelected from "../../assets/icons/list_icon_selected.svg";
import * as moment from 'moment'

const { TabPane } = Tabs;

const Home = () => {
  const [viewMode, setViewMode] = useState(0);
  const [carousel, setCarousel] = useState(null);
  const [daySelected, setDaySelected] = useState(-1)
  const [ subScribeDidMount, setSubScribeDidMount ] = useState(false)
  const toDay = moment().format('DD')
  useEffect(() => {
    if(carousel && toDay && !subScribeDidMount) {
      carousel.goTo(toDay)
      setSubScribeDidMount(true)
    }
  },[carousel, subScribeDidMount, toDay])
  const callback = (key) => {
    // console.log(key);
  };
  const day = [
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
  ]

  const onNext = () => {
    console.log('onNext',carousel)
    carousel.next()
  }
  const onPrev = () => {
    carousel.prev()
  } 
  const styleDay = (data) => { 
    let selected = false
    if( parseInt(toDay) === data) { 
      selected = true
    } 
    return {
      background: selected ? ' #3766ff' : '#white',
      color: toDay > data ? 'white' : '#d0caca'
    }
  }
  const styleSelectedDay = { 
    width: '25px',
    height: '25px',
    borderRadius: '50%',
    backgroundColor: 'white',
    padding: '1px',
    position: 'absolute',
    top: '1px',
    right: '1px',
    color: 'black'
  }
  const styleUnSelectDay = {
    width: '25px',
    height: '25px',
    // borderRadius: '50%',
    // backgroundColor: 'white',
    padding: '1px',
    position: 'absolute',
    top: '1px',
    right: '1px',
    color: 'black'
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
            <div
              onClick={onPrev}
              className={styles.date_item_arrow}
            >
              <span>{"<"}</span>
              {/* <img src={LeftArrowIcon} alt="LeftArrowIcon" /> */}
              {/* <span>←</span> */}
            </div>
            <div className={styles.carousel_container}>
              <Carousel
                ref={(node) => { 
                  setCarousel(node)
                }}
                // arrows={true}
                slidesToScroll={7}
                slidesToShow={7}
                swipeToSlide={true}
                dots={false}
                draggable={true}
                infinite={false}
                // afterChange={onChangeCarousel}
              // nextArrow={<div className={styles.arrow}>→</div>}
              // prevArrow={<div className={styles.arrow}>←</div>}
              >
                {day.map((data, i) => {
                  return (
                    <div key={i}>
                      {
                        daySelected === data ? 
                        <div 
                        style={{
                          background: '#3766ff',
                          // color: 'black'
                        }}
                        className={styles.date_item}
                        onClick={() => { 
                          setDaySelected(data)
                        }}
                      >
                        <div style={styleSelectedDay}>
                            <span>{data}</span>
                          </div>  
                      </div> :
                      <div
                        style={styleDay(data)}
                        className={styles.date_item}
                        onClick={() => { 
                          setDaySelected(data)
                        }}
                      > 
                      <div style={styleUnSelectDay}>
                        <span>{data}</span>
                      </div>
                    </div>
                      } 
                    </div>
                  );
                })}
                <div></div>
              </Carousel>
            </div>
            <div
              onClick={onNext}
              className={styles.date_item_arrow}
            >
              <span>{">"}</span>
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
