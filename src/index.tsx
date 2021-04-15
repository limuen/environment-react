import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.module.less'
import App from './App';
import 'antd/dist/antd.less'; // or 'antd/dist/antd.less'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

