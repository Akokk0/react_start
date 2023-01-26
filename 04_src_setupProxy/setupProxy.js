// 代理配置文件
const { createProxyMiddleware } = require('http-proxy-middleware')
// 导出配置好的代理
module.exports = function (app) {
    app.use(
        createProxyMiddleware('/api1', {
            target: 'http://localhost:50000',
            changeOrigin: true,
            pathRewrite: { '^/api1': '' }
        }),
        createProxyMiddleware('/api2', {
            target: 'http://localhost:50001',
            changeOrigin: true,
            pathRewrite: { '^/api2': '' }
        })
    )
}
