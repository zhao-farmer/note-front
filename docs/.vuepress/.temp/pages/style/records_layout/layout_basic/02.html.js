import comp from "E:/study/blog/note-front/docs/.vuepress/.temp/pages/style/records_layout/layout_basic/02.html.vue"
const data = JSON.parse("{\"path\":\"/style/records_layout/layout_basic/02.html\",\"title\":\"二、不定项居中布局\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"2.1 旧的实现方式\",\"slug\":\"_2-1-旧的实现方式\",\"link\":\"#_2-1-旧的实现方式\",\"children\":[]},{\"level\":2,\"title\":\"2.2 使用弹性盒子\",\"slug\":\"_2-2-使用弹性盒子\",\"link\":\"#_2-2-使用弹性盒子\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"style/records_layout/layout_basic/02.md\"}")
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
