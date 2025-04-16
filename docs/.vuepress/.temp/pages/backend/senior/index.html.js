import comp from "E:/study/blog/note-front/docs/.vuepress/.temp/pages/backend/senior/index.html.vue"
const data = JSON.parse("{\"path\":\"/backend/senior/\",\"title\":\"node.js web框架\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"express\",\"slug\":\"express\",\"link\":\"#express\",\"children\":[]},{\"level\":2,\"title\":\"koa\",\"slug\":\"koa\",\"link\":\"#koa\",\"children\":[]},{\"level\":2,\"title\":\"egg\",\"slug\":\"egg\",\"link\":\"#egg\",\"children\":[]},{\"level\":2,\"title\":\"nest\",\"slug\":\"nest\",\"link\":\"#nest\",\"children\":[]},{\"level\":2,\"title\":\"其他\",\"slug\":\"其他\",\"link\":\"#其他\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"backend/senior/README.md\"}")
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
