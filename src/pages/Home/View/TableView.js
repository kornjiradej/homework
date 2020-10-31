import React, { useState } from 'react'
import { Button } from 'antd'
import * as moment from 'moment'
import { ResponsiveLine } from '@nivo/line'
import { 
    LikeOutlined, CommentOutlined,
    GiftOutlined, SketchOutlined } from '@ant-design/icons'
import styles from '../Home.module.scss'

const TableView = (props) => {
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
           </div>
       </div>
    )
} 
export default TableView