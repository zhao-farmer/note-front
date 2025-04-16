import comp from "E:/study/blog/note-front/docs/.vuepress/.temp/pages/other/tool/vscode/02.html.vue"
const data = JSON.parse("{\"path\":\"/other/tool/vscode/02.html\",\"title\":\"二、vscode 使用技巧\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[],\"git\":{},\"filePathRelative\":\"other/tool/vscode/02.md\"}")
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
