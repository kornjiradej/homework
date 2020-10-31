import React from 'react'
import styles from '../Home.module.scss'
const GraphView = (props) => {
  const { data } = props
    return (
        <div className={styles.card_list}>
          {
            data.map((d,i) => {
              return (
                <div className={styles.card} key={i}>
                  <div className={styles.title}>
                    { d.icon }
                    <span >{ d.title }</span>
                  </div> 
                  <span className={styles.num}>{d.num}</span ><br/>
                  <span className={styles.descript}>{d.descript}</span>
                </div>
              )
            })
          }
        </div>
    )
} 
export default GraphView