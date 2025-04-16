import comp from "E:/study/blog/note-front/docs/.vuepress/.temp/pages/script/ECMAScript/base/02.html.vue"
const data = JSON.parse("{\"path\":\"/script/ECMAScript/base/02.html\",\"title\":\"二、ES7\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"2.1 求幂运算符\",\"slug\":\"_2-1-求幂运算符\",\"link\":\"#_2-1-求幂运算符\",\"children\":[]},{\"level\":2,\"title\":\"2.2 数组的includes\",\"slug\":\"_2-2-数组的includes\",\"link\":\"#_2-2-数组的includes\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"script/ECMAScript/base/02.md\"}")
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
