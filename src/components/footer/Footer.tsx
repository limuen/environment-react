import React from 'react'
import styles from './Footer.module.less'

export const Footer: React.FC = () => {
    return (
        <div className={styles.footer}>
            <div className={styles['footer-top']}>
                <div className={styles['footer-top-content']}>
                    <div>
                        <div className={styles['footer-title']}>热推产品/PRODUCT</div>
                        <div className={styles['footer-top-content-left']}>
                            <img src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg" alt="" />
                            <div>
                                <p>服务区域：</p>
                                <ul>
                                    <li>青岛</li>
                                    <li>黄岛</li>
                                    <li>美国</li>
                                    <li>日本</li>
                                    <li>澳大利</li>
                                    <li>台湾</li>
                                    <li>日本</li>
                                    <li>哦耶</li>
                                    <li>杭州</li>
                                    <li>杭州</li>
                                    <li>杭州</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={styles['footer-title']}>联系我们/CONTECT</div>
                        <div className={styles['footer-top-content-center']}>
                            <p>公司地址：</p>
                            <p>浙江省宁波市XXXXXXXXXXXX</p>
                            <p>联系电话：</p>
                            <p>123****8910</p>
                        </div>
                    </div>
                    <div className={styles['footer-top-content-right']}>
                        <img src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg" alt="" />
                    </div>
                </div>
            </div>
            <div className={styles['footer-bottom']}>
                版权所有：浙江蓝虹科技有限公司
            </div>
        </div>
    )
}