// const { createProxyMiddleware } = require('http-proxy-middleware');
import { createProxyMiddleware } from 'http-proxy-middleware';

module.exports = function(app) {
  app.use(
    createProxyMiddleware('/qx-region-api', {
      target: 'http://192.168.0.233:9180',
      changeOrigin: true, // needed for virtual hosted sites
      ws: true, // proxy websockets
      secure: false, // 如果是https接口，需要配置这个参数
      // pathRewrite: {
      //   '^/qx-pc-api': '',
      // },
    })
  );
};
