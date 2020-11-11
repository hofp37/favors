const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = app => {
    app.use(
        '/api/auth/google',
        createProxyMiddleware({
            target: 'http://localhost:5000',
            changeOrigin: true,
        })
    );
    app.use(
        '/api/auth',
        createProxyMiddleware({
            target: 'http://localhost:5000',
            changeOrigin: true,
        })
    );
};