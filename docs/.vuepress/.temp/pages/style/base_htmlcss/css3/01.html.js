import comp from "E:/study/blog/note-front/docs/.vuepress/.temp/pages/style/base_htmlcss/css3/01.html.vue"
const data = JSON.parse("{\"path\":\"/style/base_htmlcss/css3/01.html\",\"title\":\"一、CSS3 概述\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[],\"git\":{},\"filePathRelative\":\"style/base_htmlcss/css3/01.md\"}")
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
