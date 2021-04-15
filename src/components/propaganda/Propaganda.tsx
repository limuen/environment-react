import React from 'react'
import { useHistory } from 'react-router-dom'
import styles from './Propaganda.module.less'
// import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import SwiperCore, { Navigation } from 'swiper';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper-bundle.min.css';
import 'swiper/components/navigation/navigation.less';
SwiperCore.use([Navigation]);
export const Propagadan: React.FC = () => {
    const history = useHistory() // 导航操作
    return (
        <div className={styles.propaganda}>
            <div className={styles['propaganda-content']}>
                <div className={styles['propaganda-title']}>
                    <span>政策宣传/</span>
                    <span onClick={() => history.push(`/policy`)}>
                        更多
                    </span>
                </div>
                <div className={styles['propaganda-banner']}>
                    <div className={styles['propaganda-banner-Margin']}>
                        <Swiper
                            spaceBetween={47}
                            slidesPerView={4}
                            navigation
                            loop={true}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                        >
                            {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => {
                                return (
                                    <SwiperSlide
                                        key={item}
                                        className={styles['propaganda-banner-content']}
                                        onClick={() => history.push(`/policylist/detail/${item}`)}
                                    >Slide {item}</SwiperSlide>
                                    // <Link to={`policydetail/${item}`}>
                                    //     <SwiperSlide key={item} className={styles['propaganda-banner-content']} >Slide</SwiperSlide>
                                    //     {/* {item} */}
                                    // </Link>
                                )
                            })}
                        </Swiper>
                    </div>

                </div>
            </div>
        </div >
    )
}