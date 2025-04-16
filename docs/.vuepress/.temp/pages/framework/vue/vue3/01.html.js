import comp from "E:/study/blog/note-front/docs/.vuepress/.temp/pages/framework/vue/vue3/01.html.vue"
const data = JSON.parse("{\"path\":\"/framework/vue/vue3/01.html\",\"title\":\"一、 Vue3简介\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[],\"git\":{},\"filePathRelative\":\"framework/vue/vue3/01.md\"}")
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
