import comp from "E:/study/blog/note-front/docs/.vuepress/.temp/pages/backend/quote/index.html.vue"
const data = JSON.parse("{\"path\":\"/backend/quote/\",\"title\":\"包括各种node发布的包\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"测试框架\",\"slug\":\"测试框架\",\"link\":\"#测试框架\",\"children\":[]},{\"level\":2,\"title\":\"爬虫框架\",\"slug\":\"爬虫框架\",\"link\":\"#爬虫框架\",\"children\":[]}],\"git\":{\"updatedTime\":1744806830000,\"contributors\":[{\"name\":\"zhao-farmer\",\"username\":\"zhao-farmer\",\"email\":\"857899180@qq.com\",\"commits\":1,\"url\":\"https://github.com/zhao-farmer\"}]},\"filePathRelative\":\"backend/quote/README.md\"}")
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
