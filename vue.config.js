const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    devServer: {
        port: 3000,
        open: false,
        https: true,
        hot: true,
    },
    publicPath:
        process.env.NODE_ENV === "production" ? process.env.BASE_URL : "/",
    transpileDependencies: true,
})
