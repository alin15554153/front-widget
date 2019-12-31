module.exports = {
  pages: {
    page1: {
      // page 的入口
      entry: 'src/pages/page1/page1.js',
      // 模板来源
      template: 'src/pages/page1/page1.html',
      // 在 dist/index.html 的输出
      filename: 'page1',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'page1'
    },
    bigScreen: {
      // page 的入口
      entry: 'src/pages/bigScreen/bigScreen.js',
      // 模板来源
      template: 'src/pages/bigScreen/bigScreen.html',
      // 在 dist/index.html 的输出
      filename: 'bigScreen',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'bigScreen'
    },
    navigation: {
      // page 的入口
      entry: 'src/pages/navigation/navigation.js',
      // 模板来源
      template: 'src/pages/navigation/navigation.html',
      // 在 dist/index.html 的输出
      filename: 'navigation',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'navigation'
    },
    // 当使用只有入口的字符串格式时，
    // 模板会被推导为 `public/subpage.html`
    // 并且如果找不到的话，就回退到 `public/index.html`。
    // 输出文件名会被推导为 `subpage.html`。
    subpage: 'src/main.js'
  },
  publicPath: './', //  解决打包之后静态文件路径404的问题
  outputDir: 'output', //  打包后的文件夹名称，默认dist
  devServer: {
    open: true, //  npm run serve 自动打开浏览器
    index: './subpage.html' //  默认启动页面
  }
}
