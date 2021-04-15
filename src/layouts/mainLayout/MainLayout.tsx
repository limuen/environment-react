import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom'
import styles from './MainLayout.module.less';
import { Header, Footer } from '@/components';
import { debounce } from '@/utils'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css';
export const MainLayout: React.FC = (props) => {
  const history = useHistory()
  const { children } = props;
  let time = useRef<NodeJS.Timeout>()
  console.log(history, 'history')
  useEffect(() => {
    /* 监听路由的变化 */
    const unlisten = history.listen(() => {
      nprogress.start()
      /*页面回到顶部 */
      if (document.body.scrollTop || document.documentElement.scrollTop > 0) {
        window.scrollTo(0, 0)
      }
      debounce(() => {
        time.current = setTimeout(() => {
          nprogress.done()
          if (time.current !== undefined) {
            clearTimeout(time.current)
          }
        }, 900)
      }, 150)
    })
    return () => {
      unlisten()
    }
  }, [history])
  return (
    <>
      <Header />
      <div className={styles['view-content']}>{children}</div>
      <Footer />
    </>
  );
};
