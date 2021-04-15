import React from 'react'
import styles from './Dashboard.module.less'
import { MainLayout } from '@/layouts/mainLayout'
import { Header, SideMenu, Carousel, Consulting, Propagadan, Advisory, Footer } from '@/components'
const Dashboard: React.FC = () => {
    return (
        <MainLayout>
            <div className={styles['dashboard-banner']}>
                <SideMenu />
                <Carousel />
                <Consulting />
            </div>
            <div className={styles['dashboard-center']}>
                <Propagadan />
                <Advisory />
            </div>
        </MainLayout>
    )
}

export default Dashboard