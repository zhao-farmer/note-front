import comp from "E:/study/blog/note-front/docs/.vuepress/.temp/pages/other/document/vuePress/06.html.vue"
const data = JSON.parse("{\"path\":\"/other/document/vuePress/06.html\",\"title\":\"六、github部署\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[],\"git\":{},\"filePathRelative\":\"other/document/vuePress/06.md\"}")
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
