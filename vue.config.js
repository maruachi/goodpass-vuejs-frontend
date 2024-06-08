const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  devServer: {
    proxy : {
      '/admin-user/request': {
        target: 'http://localhost:8081',
        changeOrigin: true,
      },
      '/admin-user/join': {
        target: 'http://localhost:8081',
        changeOrigin: true,
      },
      '/admin/login': {
        target: 'http://localhost:8081',
        changeOrigin: true,
      },
    }
  },
  transpileDependencies: true
})
