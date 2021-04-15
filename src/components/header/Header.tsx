import React from 'react'
import styles from './Header.module.less'
import { useHistory, NavLink } from 'react-router-dom'
import { Layout, Input, Menu } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

import logo from '@/asstes/logo.svg'
export const Header: React.FC = () => {
    const history = useHistory()
    return (
        <div className={styles.header}>
            <div className={styles['header-top']}>
                <ul className={styles['header-list']}>
                    <li>关于我们</li>
                    <li>相关协议</li>
                    <li>客服中心</li>
                    <li>管理后台</li>
                </ul>
            </div>
            <div className={styles['header-route-search']}>
                <Layout.Header className={styles['header-bottom']}>
                    <div className={styles['header-bottom-search']}>
                        <span onClick={() => {
                            if (history.location.pathname !== '/') {
                                history.push('/')
                            }
                        }}>
                            <img src={logo} alt="" className={styles['App-logo']} />
                        </span>
                        <Input.Search
                            className={styles['search-input']}
                            placeholder="请输入你想要去哪儿的玩意儿"
                            enterButton={<SearchOutlined />}
                            onSearch={(e) => { console.log(e) }}
                        ></Input.Search>
                    </div>
                    <div className={styles['header-bottom-menu']}>
                        <Menu theme="light" mode="horizontal" defaultSelectedKeys={['1']}>
                            <Menu.Item key="1">首页</Menu.Item>
                            <Menu.Item key="2"><NavLink to="https://www.cnblogs.com/zbbk/p/13571477.html" key="https://www.cnblogs.com/zbbk/p/13571477.html">采购</NavLink></Menu.Item>
                            <Menu.Item key="3">固废交易</Menu.Item>
                            <Menu.Item key="4">碳中和</Menu.Item>
                            <Menu.Item key="5">机构服务</Menu.Item>
                            <Menu.Item key="6">商学院</Menu.Item>
                        </Menu>
                    </div>
                </Layout.Header>
            </div>


        </div>
    )
}