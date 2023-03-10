const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
    app.use(
        createProxyMiddleware('/api1', {
            target: 'http://localhost:50000',
            changeOrigin: true,
            pathRewrite: { '^/api1': '' }
        })
    )
}
