const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  // 有development模式和production模式两种
  mode: 'development',
  // 打包的入口文件地址
  entry: path.resolve(__dirname, './src/index'),
  output: {
    // 打包输出文件名称
    filename: 'bundle.js',
    // 打包输出地址
    path: path.resolve(__dirname, './dist'),
    // 清除之前的打包文件
    clean: true
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
 },
  module: {
    rules: [
      {
        // 对项目中.js结尾的文件，使用babel-loader进行转义处理
        test: /\.tsx?$/,
        // 排除node_modules
        exclude: /node_modules/,
        use: ['babel-loader', 'ts-loader'],
      },
      {
        test: /\.(css|scss)$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              // 开启css模块化
              modules: true
            }
          },
          "sass-loader"
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset",
        parser: {
          dataUrlCondition: {
            // 模块小于 maxSize，会被作为Base64编码的字符串注入到包中， 
            // 否则模块文件会被生成到输出的目标目录中
            maxSize: 1 * 1024
          }
        },
        generator: {
          filename: 'assets/img/[name].[hash:6][ext]'
        }
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      // 以public/index.html文件为模板
      template: path.resolve(__dirname, './public/index.html'),
      // 生成文件的名称
      filename: 'index.html'
    })
  ],
  devServer: {
    // 支持history模式路由配置
    historyApiFallback: true,
    open: true,
    port: 3000,
    hot: true,
    compress: true,
  }
}