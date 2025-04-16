import comp from "E:/study/blog/note-front/docs/.vuepress/.temp/pages/other/document/vitePress/04.html.vue"
const data = JSON.parse("{\"path\":\"/other/document/vitePress/04.html\",\"title\":\"四、样式配置\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"4.1 自定义Css\",\"slug\":\"_4-1-自定义css\",\"link\":\"#_4-1-自定义css\",\"children\":[]},{\"level\":2,\"title\":\"4.2 右侧 markdown 标题目录\",\"slug\":\"_4-2-右侧-markdown-标题目录\",\"link\":\"#_4-2-右侧-markdown-标题目录\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"other/document/vitePress/04.md\"}")
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
