// vue.config.js
const path = require('path')
module.exports = {
  
  chainWebpack: config => {
    // const svgRule = config.module.rule('svg');
    // 清除已有的所有 loader。
    // 如果你不这样做，接下来的 loader 会附加在该规则现有的 loader 之后。
    // svgRule.uses.clear();
    // svgRule
    //   .test(/\.svg$/)
    //   .include.add(path.resolve(__dirname, 'src/svg'))
    //   .end()
    //   .use('svg-sprite-loader')
    //   .loader('svg-sprite-loader')
    //   .options({
    //     symbolId: 'icon-[name]'
    //   });
    // const fileRule = config.module.rule('file');
    // fileRule.uses.clear();
    // fileRule
    //   .test(/\.svg$/)
    //   .exclude.add(path.resolve(__dirname, 'src/svg'))
    //   .end()
    //   .use('file-loader')
    //   .loader('file-loader');

      const htmlRule = config.module.rule('svg');
      htmlRule.uses.clear();
      htmlRule
      .test(/\.svg$/)
      .use('html-loader')
      .loader('html-loader');
  },
  // 选项...
  configureWebpack: {
    devtool: "source-map",

  },
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:15182"
      },
      "/hub": {
        target: "ws://localhost:15182",
        ws: true
      }
    }
  }
};
