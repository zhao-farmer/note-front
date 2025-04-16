import comp from "E:/study/blog/note-front/docs/.vuepress/.temp/pages/other/document/vuePress/04.html.vue"
const data = JSON.parse("{\"path\":\"/other/document/vuePress/04.html\",\"title\":\"四、makdown语法扩展 - 代码块\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":3,\"title\":\"4.1 代码标题\",\"slug\":\"_4-1-代码标题\",\"link\":\"#_4-1-代码标题\",\"children\":[]},{\"level\":3,\"title\":\"4.2 行高亮\",\"slug\":\"_4-2-行高亮\",\"link\":\"#_4-2-行高亮\",\"children\":[]},{\"level\":3,\"title\":\"4.3 行号\",\"slug\":\"_4-3-行号\",\"link\":\"#_4-3-行号\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"other/document/vuePress/04.md\"}")
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
