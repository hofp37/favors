const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = app => {
    app.use(
        '/auth/google',
        createProxyMiddleware({
            target: 'http://localhost:5000',
            changeOrigin: true,
        })
    );
    app.use(
        '/auth/logout',
        createProxyMiddleware({
            target: 'http://localhost:5000',
            changeOrigin: true,
        })
    );
};