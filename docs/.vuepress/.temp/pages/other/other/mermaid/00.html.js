import comp from "E:/study/blog/note-front/docs/.vuepress/.temp/pages/other/other/mermaid/00.html.vue"
const data = JSON.parse("{\"path\":\"/other/other/mermaid/00.html\",\"title\":\"mermaid基础知识\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"git\":{},\"filePathRelative\":\"other/other/mermaid/00.md\"}")
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
