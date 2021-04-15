import React from 'react'
import styles from './PolicyDetail.module.less'
import { useHistory, useLocation, useParams, useRouteMatch, Link } from 'react-router-dom'
import { MainLayout } from '@/layouts/mainLayout'
// import Nav from '@/components/breadcrumb/Breadcrumb'
// import BreadCrumb from "@/components/breadcrumb/Br";
import { Breadcrumb } from 'antd';
interface MatchParams {
    id: string
}

const PolicyDetail: React.FC<MatchParams> = (props) => {
    const history = useHistory() // 导航操作
    const location = useLocation() // 当前路径信息
    const match = useRouteMatch() // url的参数
    const { id } = useParams<MatchParams>()
    console.log(history, location, match, 'params')
    return (
        <MainLayout>
            <div className={styles.policydetail}>
                <div className={styles['policydetail-breadcrumb']}>
                    {/* <BreadCrumb /> */}
                    <Breadcrumb separator=">">
                        <Breadcrumb.Item key="dashboard"><Link to="/">首页</Link></Breadcrumb.Item>
                        <Breadcrumb.Item key="policy"><Link to="/policy">政策宣传</Link></Breadcrumb.Item>
                        <Breadcrumb.Item key="policydetail">详情</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <div className={styles['policydetail-content']}>
                    <h1>《国家生态环境科普基地管理办法》</h1>
                    <div className={styles['policydetail-content-header']}>
                        <div>来源：生态环境部</div>
                        <div>作者：大闸蟹</div>
                    </div>
                    <div className={styles['policydetail-content-bottom']}>
                        <div className={styles['policydetail-content-bottom-text']}>各省、自治区、直辖市生态环境厅(局)科技厅(委局) , 新疆生产建设兵团生态环境 局、科技局，生态环境部、科技部直属单位,各国家生态环境科普基地: 为贯彻落实习近平生态文明思想,提升全民生态环境意识和科学素质,规范国家特色科普 基地建设和运行管理,提高科普基地设施服务能力,生态环境部会同科技部对原《国家环保科 普基地申报与评审暂行办法》( 环发[2006] 210号)进行了修订,现将修订后的《国家生态 环境科普基地管理办法》印发给你们,请遵照执行。 第一章总则 第一条根据《中华人民共和国环境保护法》《中华人民共和国科学技术普及法》, 为加 强和规范国家生态环境科普基地(以下简称科普基地)的建设与管理,顺应全面加强生态环境 保护和加快建设世界科技强国的有关要求,制定本办法。 第二条本办法适用于科普基地的申报、评议、命名、运行与管理等工作。 第三条科普基地是践行习近平生态文明思想,展示生态环境保护科技成果与生态文明实 践的重要场所,是向公众普及生态环境科技知识、宣传生态文明建设成就、提高全民生态与科 学文化素质的重要阵地,在开展社会性、群众性、经常性的科普活动中具有示范性,是国家特 色科普基地的重要组成部分。主要包括场馆、自然保护地、企业、产业园区、科研院所、教育 培训等类别。 第四条生态环境部会同科技部共负责科普基地的管理,具体工作由生态环境部科技与 财务司和科技部引|进国外智力管理司共同承担。各省、自治区、直辖市生态环境主管部门]会同 科技主管部门负责本行政区域内的科普基地审核、推荐和运行配套保障工作。</div>
                        <div className={styles['policydetail-content-date']}>时间: 2021.04.07 </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default PolicyDetail