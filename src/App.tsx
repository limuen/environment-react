import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
// import { Dashboard, PolicyDetail } from '@/views'
import { Skeleton } from 'antd';
import SuspenseWithChunkError from '@/components/SuspenseWithChunkError'
import styles from './App.module.less'
import { Login } from '@/api/login'

const Dashboard = React.lazy(() => import('@/views/dashboard'))
const PolicyDetail = React.lazy(() => import('@/views/policydetail'))
const PolicyList = React.lazy(() => import('@/views/policy'))
function App() {
  // useEffect(() => {
  //   // const fatchData = async () => {
  //   //   try {
  //   //     const res = await Login({ username: 'admin', password: '123456', realmId: "qx-manage" })
  //   //     console.log(res, 'login')
  //   //     if (res.data.code === "0") {
  //   //       debugger
  //   //       alert('1111')
  //   //     }
  //   //   } catch (error) {
  //   //   }
  //   // }
  //   Login({
  //     username: 'admin',
  //     password: '123456',
  //     realmId: "qx-manage"
  //   }).then(res => {
  //     console.log(res, '123')
  //   }).catch(error => { })
  //   // fatchData()
  // }, [])
  return (
    <div className={styles.App}>
      <div className={styles['App-body']}>
        <BrowserRouter>
          <Suspense fallback={<Skeleton active title />}>
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route path="/policy" component={PolicyList} />
              <Route path="/policylist/detail/:id" component={PolicyDetail} />
            </Switch>
          </Suspense>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
