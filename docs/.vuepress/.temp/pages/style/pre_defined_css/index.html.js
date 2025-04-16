import comp from "E:/study/blog/note-front/docs/.vuepress/.temp/pages/style/pre_defined_css/index.html.vue"
const data = JSON.parse("{\"path\":\"/style/pre_defined_css/\",\"title\":\"预定义css学习并记录(未完成)\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[],\"git\":{},\"filePathRelative\":\"style/pre_defined_css/README.md\"}")
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
