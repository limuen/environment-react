import React from 'react'
import styles from './Carousel.module.less'
import { Image, Carousel as AntCarousel } from 'antd'
export const Carousel: React.FC = () => {
    return (
        <AntCarousel autoplay className={styles.carousel} dotPosition="bottom">
            <Image src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
            <Image src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg" />
            <Image src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" />
        </AntCarousel>
    )
}