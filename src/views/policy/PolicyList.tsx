import React from 'react'
import styles from './policyList.module.less'
import { useHistory } from 'react-router-dom'
import { MainLayout } from '@/layouts/mainLayout'
// import Nav from '@/components/breadcrumb/Breadcrumb'
import BreadCrumb from "@/components/breadcrumb/Br";
const PolicyList: React.FC = () => {
    const history = useHistory() // 导航操作
    return (
        <MainLayout>
            <div className={styles.policy}>
                <BreadCrumb />
                <div>
                    <div className={styles['advisory-list']} onClick={() => { history.push(`/policylist/detail/${1}`) }}>
                        <div className={styles['advisory-list-img']}>
                            <img src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" alt="" />
                        </div>
                        <div className={styles['advisory-list-content']}>
                            <p>多亏有了vivo S9手机，才能在夜晚拍出清晰照片 </p>
                            <p>每次在晚上出去的时候。我总是会被沿途各式各样的美景所吸引，这时就忍不住拿出手机拍一下奈何手机的夜拍功能不是很好，就很失望。 我也不可能把相机随身携带，就想着给
                            自己重新换-款夜晚拍照能给力的手机，选来选去最终还是将目光锁定在了vivo手机上，之前一直用的都是它家的，这次新出了S9想必也是不错的，果断选择入手
                        </p>
                            <p>2021-10-10 20:20:34</p>
                        </div>
                    </div>
                    <div className={styles['advisory-list']} >
                        <div className={styles['advisory-list-img']}>
                            <img src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" alt="" />
                        </div>
                        <div className={styles['advisory-list-content']}>
                            <p>多亏有了vivo S9手机，才能在夜晚拍出清晰照片 </p>
                            <p>每次在晚上出去的时候。我总是会被沿途各式各样的美景所吸引，这时就忍不住拿出手机拍一下奈何手机的夜拍功能不是很好，就很失望。 我也不可能把相机随身携带，就想着给
                            自己重新换-款夜晚拍照能给力的手机，选来选去最终还是将目光锁定在了vivo手机上，之前一直用的都是它家的，这次新出了S9想必也是不错的，果断选择入手
                        </p>
                            <p>2021-10-10 20:20:34</p>
                        </div>
                    </div>
                    <div className={styles['advisory-list']}>
                        <div className={styles['advisory-list-img']}>
                            <img src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" alt="" />
                        </div>
                        <div className={styles['advisory-list-content']}>
                            <p>多亏有了vivo S9手机，才能在夜晚拍出清晰照片 </p>
                            <p>每次在晚上出去的时候。我总是会被沿途各式各样的美景所吸引，这时就忍不住拿出手机拍一下奈何手机的夜拍功能不是很好，就很失望。 我也不可能把相机随身携带，就想着给
                            自己重新换-款夜晚拍照能给力的手机，选来选去最终还是将目光锁定在了vivo手机上，之前一直用的都是它家的，这次新出了S9想必也是不错的，果断选择入手
                        </p>
                            <p>2021-10-10 20:20:34</p>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default PolicyList