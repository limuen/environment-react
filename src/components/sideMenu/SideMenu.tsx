import React from 'react'
import styles from './SideMenu.module.less'
import { Menu, } from 'antd'

export const SideMenu: React.FC = () => {
    return (
        <div className={styles['side-content']}>
            <div className={styles['side-title']}>全部分类</div>
            <Menu className={styles['side-menu']}>
                <Menu.SubMenu key="sub2" title="Navigation Two">
                    <Menu.Item key="5">Option 5</Menu.Item>
                    <Menu.Item key="6">Option 6</Menu.Item>
                    <Menu.SubMenu key="sub3" title="Submenu">
                        <Menu.Item key="7">Option 7</Menu.Item>
                        <Menu.Item key="8">Option 8</Menu.Item>
                    </Menu.SubMenu>
                </Menu.SubMenu>
            </Menu>
        </div>

    )
}