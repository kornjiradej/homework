import React from 'react'
import { Button } from 'antd'
import styles from './Detail.module.scss'
import UserIcon from '../../assets/icons/user_icon.svg'
import ImageIcon from '../../assets/icons/image_icon.svg'
import { CalendarFilled, ClockCircleFilled,CommentOutlined,
    PaperClipOutlined, GiftOutlined, LikeOutlined
} from '@ant-design/icons'

const Detail = (props) => {
    const { data } = props.location.state
    console.log('data ',data)
    const content = [
        {
            title: 'Content 1',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'
        },
        {
            title: 'Content 1',
            content: 'Ut enim ad minim veniam, quis nostrudyewr Lorem ipsum dolor sit amet, consectetur.'
        },
        {
            title: 'Content 1',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.'
        },
    ]
    const imageFiel = [
        {
            id: 0,
            file: ImageIcon
        },
        {
            id: 1,
            file: ImageIcon
        },
        {
            id: 2,
            file: ImageIcon
        },
    ]
    const commentData = [
        {
            name: 'Anankin Skywalker',
            career: 'Designer',
            profileIcon: null,
            comment: 'Lorem ipsum dolor sit amet, consectetur adipelit, sed do eiusmod'
        },
        {
            name: 'Amanda Ray',
            career: 'Designer',
            profileIcon: null,
            comment: 'Lorem ipsum dolor sit amet, consectetur adipelit, sed do eiusmod'
        },
    ]
    return (
        <div className={styles.detail_container}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.left}>
                        <img src={UserIcon} alt='UserIcon'/>
                        <div className={styles.text_left}>
                            <p className={styles.name}>{data.name}</p>
                            <p className={styles.career}>{data.career}</p>
                        </div>
                    </div>
                    <div className={styles.right}>
                        <p><CalendarFilled className={styles.icon}/>14/01/2020</p>
                        <p><ClockCircleFilled className={styles.icon}/>12:45</p>
                    </div>
                </div>
                {
                    content.map((c,i) => {
                        return (
                            <div key={i} className={styles.content_container}>
                                <p className={styles.title}>{c.title}</p>
                                <p className={styles.content}>{c.content}</p>
                            </div>
                        )
                    })
                }
                <div className={styles.image_container}>
                    <p>Image</p>
                    <div className={styles.image_list}>
                    {
                        imageFiel.map((img,i) => {
                            return ( 
                                <img key={i} className={styles.image_item} src={img.file} alt='image_icon'/>
                            )
                        }) 
                    }
                    </div> 
                </div>
                <div className={styles.attach_container}>
                    <p>Attach File</p>
                    <p className={styles.paper_clip_text}><PaperClipOutlined className={styles.clip_icon}/>Update Design OKRs.pdf</p>
                </div>
            </div>
            <div className={styles.status_container}>
                <div className={styles.left}>
                    <span>Read (12)</span> 
                    <span>|</span>    
                    <span>Unread (25)</span> 
                    <span>|</span>  
                    <span>Likes (2)</span> 
                    <span>|</span>    
                </div>
                <div className={styles.right}>
                    <span>View ></span>
                </div>
            </div>
            <div className={styles.action_container}>
                <Button>
                    <GiftOutlined/>
                    <span>Give Point</span>
                </Button>
                <Button>
                    <LikeOutlined/>
                    <span>Like</span>
                </Button>
            </div>
            <div className={styles.line_horizontal}/>
            {
                commentData.map((c,i) => {
                    return (
                        <div className={styles.comment_container} key={i}>
                            { commentData.length !== i && i !== 0 &&  <div className={styles.line_horizontal}/> }
                            <div className={styles.header_comment}>
                                <img src={UserIcon} alt='user'/> 
                                <div className={styles.text}>
                    <p className={styles.name}>{c.name}</p>
                                    <p className={styles.career}>{c.career}</p>
                                </div>
                            </div>
                            <p className={styles.comment_text}>
                                { c.comment }
                            </p>
                            <div className={styles.detail}>
                                <div className={styles.left}>
                                    <span className={styles.text1}>2 days ago</span>
                                    <span className={styles.text2}>3 People likes</span>
                                </div>
                                <div className={styles.right}>
                                    <span><CommentOutlined className={styles.icon}/>Reply</span>
                                    <span><LikeOutlined className={styles.icon}/>Like</span>
                                </div>
                            </div> 
                        </div>
                    )
                })
            }
            
        </div>
    )
}
export default Detail