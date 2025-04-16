import comp from "E:/study/blog/note-front/docs/.vuepress/.temp/pages/UILibrary/element/index.html.vue"
const data = JSON.parse("{\"path\":\"/UILibrary/element/\",\"title\":\"javaScript学习并记录\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[],\"git\":{},\"filePathRelative\":\"UILibrary/element/README.md\"}")
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
