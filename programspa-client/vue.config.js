const webpack = require("webpack");

module.exports = {
//configureWebpack 是Vue CLI3.0 中用于配置 webpack 插件参数的地方，你在这里设置，会新建或者覆盖 webpack 默认配置。
//webpack ProvidePlugin 的含义是创建一个全局的变量，使这个变量在 webpack 各个模块内都可以使用。这里的配置含义是创建 '$'、'jQuery'、'window.jQuery' 三个变量指向 jquery 依赖，创建 'Popper' 变量指向 popper.js 依赖。
    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery',
                Popper: ['popper.js', 'default']
              })
        ]
      },

  // cli3 代理是从指定的target后面开始匹配的，不是任意位置；配置pathRewrite可以做替换


    devServer: {
      open: true, //是否自动弹出浏览器页面
      host: "localhost", 
      port: '8081', 
      https: false,   //是否使用https协议
      hotOnly: false, //是否开启热更新
      proxy: {
           '/api': {
              target: 'http://localhost:4000', //API服务器的地址
              ws: true,  //代理websockets
              changeOrigin: true, // 虚拟的站点需要更管origin
              pathRewrite: {   //重写路径 比如'/api/aaa/ccc'重写为'/aaa/ccc'
                  '^/api': ''
              }
          }
      }
  }
  
}