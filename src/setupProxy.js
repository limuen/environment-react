const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    createProxyMiddleware('/qx-oauth2-api', {
      target: 'http://192.168.0.233:9180',
      changeOrigin: true, // needed for virtual hosted sites
      ws: true, // proxy websockets
      secure: false, // 如果是https接口，需要配置这个参数
      // pathRewrite: {
      //   '^/qx-oauth2-api': '',
      // },
    })
  );
};
