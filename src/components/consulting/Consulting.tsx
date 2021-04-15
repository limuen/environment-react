import React from 'react'
import styles from './Consulting.module.less'
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export const Consulting: React.FC = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 10,
        slidesToScroll: 1,
        vertical: true,
        autoplay: true,
        autoplaySpeed: 2000,
        verticalSwiping: true,
        pauseOnHover: true,
    };
    return (
        <div className={styles.consulting}>
            <div className={styles['consulting-content']}>
                <div className={styles['consulting-content-title']}>最新资讯/</div>
                <div className={styles['consulting-content-text']}>
                    <div className={styles['consulting-content-slide']}>
                        <Slider {...settings}>
                            <p>
                                <span>新</span><span>#关于废止1《环境污染治理设施运行啊啊啊啊啊啊啊啊》</span>
                            </p>
                            <p>
                                <span>新</span><span>#关于废止2《环境污染治理设施运行啊啊啊啊啊啊啊啊》</span>
                            </p>
                            <p>
                                <span>新</span><span>#关于废止3《环境污染治理设施运行啊啊啊啊啊啊啊啊》</span>
                            </p>
                            <p>
                                <span>新</span><span>#关于废止4《环境污染治理设施运行啊啊啊啊啊啊啊啊》</span>
                            </p>
                            <p>
                                <span>新</span><span>#关于废止5《环境污染治理设施运行啊啊啊啊啊啊啊啊》</span>
                            </p>
                            <p>
                                <span>新</span><span>#关于废止6《环境污染治理设施运行啊啊啊啊啊啊啊啊》</span>
                            </p>
                            <p>
                                <span>新</span><span>#关于废止7《环境污染治理设施运行啊啊啊啊啊啊啊啊》</span>
                            </p>
                            <p>
                                <span>新</span><span>#关于废止8《环境污染治理设施运行啊啊啊啊啊啊啊啊》</span>
                            </p>
                            <p>
                                <span>新</span><span>#关于废止9《环境污染治理设施运行啊啊啊啊啊啊啊啊》</span>
                            </p>
                            <p>
                                <span>新</span><span>#关于废止10《环境污染治理设施运行啊啊啊啊啊啊啊啊》</span>
                            </p>
                            <p>
                                <span>新</span><span>#关于废止11《环境污染治理设施运行啊啊啊啊啊啊啊啊》</span>
                            </p>
                            <p>
                                <span>新</span><span>#关于废止12《环境污染治理设施运行啊啊啊啊啊啊啊啊》</span>
                            </p>
                            <p>
                                <span>新</span><span>#关于废止13《环境污染治理设施运行啊啊啊啊啊啊啊啊》</span>
                            </p>
                            <p>
                                <span>新</span><span>#关于废止14《环境污染治理设施运行啊啊啊啊啊啊啊啊》</span>
                            </p>
                            <p>
                                <span>新</span><span>#关于废止15《环境污染治理设施运行啊啊啊啊啊啊啊啊》</span>
                            </p>
                            <p>
                                <span>新</span><span>#关于废止16《环境污染治理设施运行啊啊啊啊啊啊啊啊》</span>
                            </p>
                        </Slider>
                    </div>

                </div>
            </div>
        </div>
    )
}