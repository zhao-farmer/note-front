import comp from "E:/study/blog/note-front/docs/.vuepress/.temp/pages/other/document/Jekyll/04.html.vue"
const data = JSON.parse("{\"path\":\"/other/document/Jekyll/04.html\",\"title\":\"四、目录结构\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"4.1 主要目录\",\"slug\":\"_4-1-主要目录\",\"link\":\"#_4-1-主要目录\",\"children\":[]},{\"level\":2,\"title\":\"4.2 其他的约定目录\",\"slug\":\"_4-2-其他的约定目录\",\"link\":\"#_4-2-其他的约定目录\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"other/document/Jekyll/04.md\"}")
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
