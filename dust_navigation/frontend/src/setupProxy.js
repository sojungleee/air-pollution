const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
    console.log('proxy set up');
    app.use(
        createProxyMiddleware("/api", {
            target: "https://naveropenapi.apigw.ntruss.com",
            // 하단 처리 필수
            // 아래의 내용이 없으면 url 경로에 api가 추가되어 찾을 수 없어짐
            changeOrigin: true,
            pathRewrite: { "^/api/": "/" },
        })
    );
};