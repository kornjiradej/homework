import React, { useEffect, useState } from "react"; 
import { Tabs, Carousel } from "antd";
import * as moment from 'moment'
import { DownOutlined, UploadOutlined, 
  LikeOutlined, CommentOutlined,
  GiftOutlined, SketchOutlined } from '@ant-design/icons'
import styles from "./Home.module.scss";
import GraphIcon from "../../assets/icons/graph_icon.svg";
import GraphIconSelected from "../../assets/icons/graph_icon_selected.svg";
import ListIcon from "../../assets/icons/list_icon.svg";
import ListIconSelected from "../../assets/icons/list_icon_selected.svg";
import GraphView from './View/GraphView'
import TableView from './View/TableView'

const { TabPane } = Tabs;

const Home = (props) => {
  const [menu, setMenu] = useState(0)
  const [viewMode, setViewMode] = useState(0);
  const [dataType,setDataType] = useState('1')
  const [carousel, setCarousel] = useState(null);
  const [daySelected, setDaySelected] = useState(-1)
  const [subScribeDidMount, setSubScribeDidMount] = useState(false)
  const [month, setMonth] = useState([])
  const toDay = moment().format('DD') 
  const dashboardData = [
    {
      icon: <LikeOutlined className={styles.icon} />,
      title: 'Like' ,
      num: 34,
      descript: 'Likes'
    },
    {
      icon: <CommentOutlined className={styles.icon}/>,
      title: 'Comment' ,
      num: 34,
      descript: 'Comments'
    },
    {
      icon: <GiftOutlined className={styles.icon}/>,
      title: 'Point' ,
      num: 34,
      descript: 'Points'
    },
    {
      icon: <SketchOutlined className={styles.icon}/>,
      title: 'Diamond' ,
      num: 34,
      descript: 'Diamond'
    },
  ]
  useEffect(() => {
    const getDaysArrayByMonth = () => {
      var daysInMonth = moment().daysInMonth(); 
      let day = 1
      while(daysInMonth >= day) { 
        month.push(day);
        day++; 
      } 
      setMonth([...month]) 
    }
    if(toDay && !subScribeDidMount) {
      // carousel.goTo(toDay)
      getDaysArrayByMonth()
      setSubScribeDidMount(true)
    } 
    
  },[month, subScribeDidMount, toDay])
  const onChangeTab = (key) => {  
    if(key !== 3) {
      setDataType(key)
    } 
  }   
  const onGoto = () => carousel.goTo(toDay)
  const onNext = () => carousel.next()
  const onPrev = () => carousel.prev()
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
    padding: '1px',
    position: 'absolute',
    top: '1px',
    right: '1px',
    // color: 'black'
  }
  return (
    <div className={styles.home}>
      <div className={styles.home_menu}>
        <span 
          onClick={() => setMenu(0)}
          style={menu === 0 ? { color: '#3766ff' } : {}}>
          Submission
          </span>
        <div className={styles.vertical_line}  />
          <span onClick={() => setMenu(1)}
          style={menu === 1 ? { color: '#3766ff' } : {}}>Engagement</span>
      </div>
      <div className={styles.divided} />
      <div className={styles.date_container}>
        <div className={styles.menu}>
          <Tabs defaultActiveKey="1" onChange={onChangeTab}>
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
          {
            dataType === '1' ? 
            <div className={styles.date_div}>
            <div onClick={onPrev} className={styles.date_item_arrow} >
              <span>{"<"}</span> 
            </div>
            <div className={styles.carousel_container}>
              <Carousel
                ref={(node) => { 
                  // carousel.goTo(toDay)
                  console.log('node ',node)
                  // node.goTo(toDay)
                  setCarousel(node)
                }} 
                slidesToScroll={7}
                slidesToShow={7}
                // swipeToSlide={true}
                dots={false}
                draggable={true}
                infinite={false} 
              >
                {month.map((data, i) => {  
                  return (
                    <div key={i}>
                      {
                        parseInt(daySelected) === data ? 
                        <div 
                        style={{
                          background: '#3766ff', 
                        }}
                        className={styles.date_item}
                        onClick={() => { 
                          setDaySelected(data)
                        }}
                      >
                        <div style={styleSelectedDay}>
                            <span>{data}</span>
                          </div>  
                      </div>  
                    : 
                    <div style={{ 
                      backgroundColor: parseInt(toDay) === data ? '#3766ff' : '#whtie',
                      color: parseInt(toDay) === data ? 'white' : 'black'
                     }}
                     className={styles.date_item}
                     onClick={() => { 
                      setDaySelected(data)
                    }}
                     >
                      <div style={styleUnSelectDay}> 
                        <span className={data > parseInt(toDay) ? styles.future : null}>{data}</span>
                      </div>
                    </div>
                      } 
                    </div>
                  );
                })}
                
              </Carousel>
            </div>
            <div onClick={onNext} className={styles.date_item_arrow} >
              <span>{">"}</span>
            </div>
            <div onClick={onGoto} className={styles.text_div}>
              <span className={styles.text_today}>↓Today</span>
            </div>
          </div> : 
          <div className={styles.date_div}>
          <div onClick={onPrev} className={styles.date_item_arrow} >
            <span>{"<"}</span> 
          </div>
          <div className={styles.carousel_container}>
            <Carousel
              // ref={(node) => setCarousel(node)} 
              slidesToScroll={7}
              slidesToShow={7}
              swipeToSlide={true}
              dots={false}
              // draggable={true}
              infinite={false} 
            >
              {month.map((data, i) => {  
                return (
                  <div key={i} >
                    <div 
                   className={styles.date_item}
                   onClick={() => { 
                    setDaySelected(data)
                  }}
                   >
                    <div style={styleUnSelectDay}>
                      <span>{data}</span>  
                    </div>
                  </div>
                  </div>
                );
              })}  
            </Carousel>
            <div className={styles.high_light}/>
          </div>
          <div onClick={onNext} className={styles.date_item_arrow} >
            <span>{">"}</span>
          </div>
          <div onClick={onGoto} className={styles.text_div}>
            <span className={styles.text_today}>↓Today</span>
          </div>
        </div>
          }
          
        </div> 
      </div>
       
        <div className={styles.load_more}> 
          <div className={styles.divided} />
          <div className={styles.divided_load_more}>
            <div className={styles.inside}>
              <div className={styles.down_arrow}>
                <DownOutlined />
              </div>
            </div>
          </div> 
        </div>
      <div className={styles.dashboard_container}>
        <div className={styles.header}>
              <span>{`${daySelected < 1 ? '' : daySelected} ${moment().format('MMMM')} ${moment().format('YYYY')}`}</span>
          <UploadOutlined className={styles.icon} />
        </div> 
        {
          dataType === '1' ?
          <GraphView data={dashboardData}/>  : <TableView viewMode={viewMode} props={props}/>
        }
      </div>
    </div>
  );
};
export default Home;
