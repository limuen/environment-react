import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Breadcrumb } from "antd";
import styles from './Breadcrumb.module.less'
const breadcrumbNameMap = {
    "/": "首页",
    "/403": "403",
    "/404": "404",
    "/policy": "政策宣传",
    "/policy/policydetail": "详情",
};

const Nav = withRouter((props) => {
    const { location } = props;
    console.log(props, 'location')
    const pathSnippets = location.pathname.split("/").filter((i) => i && i !== '*');
    const extraBreadcrumbItems = pathSnippets.map((_, index) => {
        const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
        return (
            <Breadcrumb.Item key={url}>
                <Link to={url}>{breadcrumbNameMap[url]}</Link>
            </Breadcrumb.Item>
        );
    });
    const breadcrumbItems = [
        <Breadcrumb.Item key="dashboard"><Link to="/">首页</Link></Breadcrumb.Item>
    ].concat(extraBreadcrumbItems);
    console.log(breadcrumbItems, 'breadcrumbItems')
    return (
        <div className={styles['policydetail-breadcrumb']}>
            <Breadcrumb separator=">">{breadcrumbItems}</Breadcrumb>
        </div>
    );
});
export default Nav;