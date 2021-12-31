//引入一个包
const path = require('path')

const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

module.exports = {

  mode: 'development',

  //指定入口文件
  entry: "./src/index.ts",

  output: {
    //指定打包文件目录
    path: path.resolve(__dirname, "./dist"),
    //打包文件的名字
    filename: "bundle.js"
  },

  //指定webpack打包时要使用的模块
  module: {
    //指定加载的规则
    rules: [
      {
        //制定规则生效的文件
        test: /\.ts$/,
        //要使用的loader
        use: [
          // //配置babel
          // {
          //   //指定加载器
          //   loader: "babel-loader",
          //   //设置babel
          //   options: {
          //     //指定预定义的插件
          //     presets: [
          //       [
          //         //指定环境插件
          //         "@babel/preset-env",
          //         //配置信息
          //         {
          //           targets: {
          //             "chrome": "88",
          //           },
          //           //指定corejs版本
          //           "corejs": "3",
          //           //corejs完成按需加载
          //           "useBuiltIns": "usage"
          //         }
          //       ]
          //
          //     ]
          //   }
          // },
          'ts-loader',

        ],
        //要排除的文件
        exclude: /node-modules/
      },
      // 设置less文件处理
      {
        test: /\.less$/i,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'less-loader',
          }
        ]
      }
    ]
  },

  //配置webpack插件
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      //设置html模板
      template: "./src/index.html",
    }),
  ],

  //用来设置哪些模块可以引用
  resolve: {
    extensions: ['.ts', '.js']
  }

}