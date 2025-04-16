import comp from "E:/study/blog/note-front/docs/.vuepress/.temp/pages/script/ECMAScript/records/02.html.vue"
const data = JSON.parse("{\"path\":\"/script/ECMAScript/records/02.html\",\"title\":\"02 var与window作用域\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[],\"git\":{},\"filePathRelative\":\"script/ECMAScript/records/02.md\"}")
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
