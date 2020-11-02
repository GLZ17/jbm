// please place file to src/

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://jbm.cn',
            secure: false,
            changeOrigin: true,
            pathRewrite: {
                "^/api": "/api",
            }
        })
    );
};