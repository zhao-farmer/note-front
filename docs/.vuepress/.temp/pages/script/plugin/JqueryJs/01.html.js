import comp from "E:/study/blog/note-front/docs/.vuepress/.temp/pages/script/plugin/JqueryJs/01.html.vue"
const data = JSON.parse("{\"path\":\"/script/plugin/JqueryJs/01.html\",\"title\":\"一、认识Jquery\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"1.1 简介\",\"slug\":\"_1-1-简介\",\"link\":\"#_1-1-简介\",\"children\":[]},{\"level\":2,\"title\":\"1.2 下载与引入\",\"slug\":\"_1-2-下载与引入\",\"link\":\"#_1-2-下载与引入\",\"children\":[]},{\"level\":2,\"title\":\"1.3 概述\",\"slug\":\"_1-3-概述\",\"link\":\"#_1-3-概述\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"script/plugin/JqueryJs/01.md\"}")
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
