import comp from "E:/study/blog/note-front/docs/.vuepress/.temp/pages/other/document/vitePress/02.html.vue"
const data = JSON.parse("{\"path\":\"/other/document/vitePress/02.html\",\"title\":\"二、配置文件\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"2.1 应用配置信息\",\"slug\":\"_2-1-应用配置信息\",\"link\":\"#_2-1-应用配置信息\",\"children\":[]},{\"level\":2,\"title\":\"2.2 主题配置\",\"slug\":\"_2-2-主题配置\",\"link\":\"#_2-2-主题配置\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"other/document/vitePress/02.md\"}")
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
