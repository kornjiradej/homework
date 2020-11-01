import React, { useState } from 'react'
import { Button, Divider  } from 'antd'
import * as moment from 'moment'
import { ResponsiveLine } from '@nivo/line'
import { FileTextFilled,
    LikeOutlined, CommentOutlined,
    GiftOutlined, SketchOutlined } from '@ant-design/icons'
import styles from '../Home.module.scss'
import UserIcon from '../../../assets/icons/user_icon.svg'

const TableView = (props) => {
  const { viewMode } = props 
  const [ selectedMenu, setSelectedMenu ] = useState(0)
    const listMenu = [
        {
            id: 0,
            icon:  <LikeOutlined className={styles.icon} />,
            text: 'Like'
        },
        {
          id: 1,
            icon:  <CommentOutlined className={styles.icon} />,
            text: 'Comment'
        },
        {
          id: 2,
            icon:  <GiftOutlined className={styles.icon} />,
            text: 'Point'
        },
        {
          id: 3,
            icon:  <SketchOutlined className={styles.icon} />,
            text: 'Diamond'
        },
    ]
    const data = [
      [{
        "id": moment().format('DD MMM'), 
        "data": [
          {
            "x": 10,
            "y": 60
          },
          {
            "x": 11,
            "y": 50
          },
          {
            "x": 12,
            "y": 40
          },
          {
            "x": 13,
            "y": 80
          },
          {
            "x": 14,
            "y": 60
          },
          {
            "x": 15,
            "y": 50
          },
          {
            "x": 16,
            "y": 50
          },
        ]
      }],
      [{
        "id": moment().format('DD MMM'), 
        "data": [
          {
            "x": 10,
            "y": 40
          },
          {
            "x": 11,
            "y": 30
          },
          {
            "x": 12,
            "y": 80
          },
          {
            "x": 13,
            "y": 45
          },
          {
            "x": 14,
            "y": 50
          },
          {
            "x": 15,
            "y": 35
          },
          {
            "x": 16,
            "y": 40
          },
        ]
      }],
      [{
        "id": moment().format('DD MMM'), 
        "data": [
          {
            "x": 10,
            "y": 30
          },
          {
            "x": 11,
            "y": 40
          },
          {
            "x": 12,
            "y": 50
          },
          {
            "x": 13,
            "y": 45
          },
          {
            "x": 14,
            "y": 30
          },
          {
            "x": 15,
            "y": 35
          },
          {
            "x": 16,
            "y": 80
          },
        ]
      }],
      [{
        "id": moment().format('DD MMM'), 
        "data": [
          {
            "x": 10,
            "y": 50
          },
          {
            "x": 11,
            "y": 28
          },
          {
            "x": 12,
            "y": 40
          },
          {
            "x": 13,
            "y": 45
          },
          {
            "x": 14,
            "y": 30
          },
          {
            "x": 15,
            "y": 35
          },
          {
            "x": 16,
            "y": 50
          },
        ]
      }]
    ]
    const listDataLike = [
      {
        id: 0,
        name: 'Ekarach Sripen',
        career: 'Graphic Designer',
        like: 3,
        comment: 42,
      },
      {
        id: 1,
        name: 'Amanda Ray',
        career: 'HR',
        like: 2,
        comment: 42
      },
      {
        id: 2,
        name: 'Ekarach Sripen',
        career: 'Graphic Designer',
        like: 1,
        comment: 42
      },
      {
        id: 3,
        name: 'Ekarach Sripen',
        career: 'Graphic Designer',
        like: 1,
        comment: 42
      },
      {
        id: 4,
        name: 'Amanda Ray',
        career: 'Graphic Designer',
        like: 9,
        comment: 42
      },
      {
        id: 5,
        name: 'Disapat Klomklong',
        career: 'Graphic Designer',
        like: 6,
        comment: 42
      },
      {
        id: 6,
        name: 'Ekarach Sripen',
        career: 'Graphic Designer',
        like: 4,
        comment: 42
      },
    ]
    return (
       <div className={styles.table_view}>
           <div className={styles.menu_container}>
            {
                listMenu.map((l,i) => {
                    return (
                        <Button 
                          onClick={() => setSelectedMenu(l.id)}
                          type={selectedMenu === l.id ? 'primary' : ''}
                          key={l.text} 
                          className={styles.menu_item}>
                            {l.icon}
                            <span>{l.text}</span>
                        </Button>
                    )
                })
            }
           </div>
           {
             viewMode === 0 ? 
             <div className={styles.graph_container}> 
          <ResponsiveLine
            data={data[selectedMenu]}
            colors={'#3766ff'}
            margin={{ top: 30, right: 10, bottom: 40, left: 30 }}
            xScale={{ type: 'point' }}
            yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
            yFormat=" >-.2f"
            maxValue={80}
            axisTop={null}
            axisRight={null}
            axisBottom={{
                orient: 'bottom',
                tickSize: 0,
                tickPadding: 9,
                tickRotation: 0,
                legend: '',
                legendOffset: 31,
                legendPosition: 'middle'
            }}
            axisLeft={{
                orient: 'left',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: '',
                legendOffset: -40,
                legendPosition: 'middle'
            }}
            enableGridY={false}
            pointSize={10}
            pointColor={{ from: 'color', modifiers: [] }}
            pointBorderWidth={2}
            pointBorderColor={{ from: 'serieColor', modifiers: [] }}
            pointLabel="xFormatted"
            pointLabelYOffset={-12}
            useMesh={true}
            legends={[ ]}
    />
           </div> : 
           <div className={styles.table_container}>
             {
               listDataLike.map((l,i) => {
                 return (
                   <div key={i} onClick={() => props.props.history.push('/detail', { data: l })} className={styles.list_item}>
                     <div className={styles.range}><span>{i+1}</span></div>
                      <div className={styles.list_detail}>
                        <div className={styles.left}>
                          <img src={UserIcon} alt='user'/>
                          <div className={styles.text_content}>
                 <p className={styles.text1}>{l.name}<span>{l.career}</span></p>
                            <p className={styles.text2}><FileTextFilled style={{ marginRight: '2px' }}/>OKRs Report</p>
                          </div>
                        </div>
                        <div className={styles.right}>
                          {/* <Divider type='vertical'/> */}
                          <div className={styles.divider}/>
                          { selectedMenu === 0 ? <LikeOutlined className={styles.icon} /> : <CommentOutlined className={styles.icon}/> }
                          {/* <LikeOutlined className={styles.icon} /> */}
                          {
                            selectedMenu === 0 ? <span className={styles.text3}>{`${l.like} People Likes`}</span> :
                            <span className={styles.text3}>{`${l.comment} Comments`}</span>
                          }
                          
                        </div>
                      </div>
                   </div>
                 )
               })
             }
           </div>
           }
           
       </div>
    )
} 
export default TableView