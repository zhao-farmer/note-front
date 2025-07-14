import comp from "E:/study/blog/note-front/docs/.vuepress/.temp/pages/application/uniapp/base/03.html.vue"
const data = JSON.parse("{\"path\":\"/application/uniapp/base/03.html\",\"title\":\"三、vue3语法复习\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"git\":{\"updatedTime\":1752490925000,\"contributors\":[{\"name\":\"zhao-farmer\",\"username\":\"zhao-farmer\",\"email\":\"857899180@qq.com\",\"commits\":1,\"url\":\"https://github.com/zhao-farmer\"}],\"changelog\":[{\"hash\":\"08d014805d6447d2221b34fe03fdc2ca18411d66\",\"time\":1752490925000,\"email\":\"857899180@qq.com\",\"author\":\"zhao-farmer\",\"message\":\"2025年7月更新\"}]},\"filePathRelative\":\"application/uniapp/base/03.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
