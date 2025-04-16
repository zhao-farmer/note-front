import comp from "E:/study/blog/note-front/docs/.vuepress/.temp/pages/other/document/index.html.vue"
const data = JSON.parse("{\"path\":\"/other/document/\",\"title\":\"使用这些框架构建静态站点\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"vuePress\",\"slug\":\"vuepress\",\"link\":\"#vuepress\",\"children\":[]},{\"level\":2,\"title\":\"vitePress\",\"slug\":\"vitepress\",\"link\":\"#vitepress\",\"children\":[]},{\"level\":2,\"title\":\"hugo\",\"slug\":\"hugo\",\"link\":\"#hugo\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"other/document/README.md\"}")
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
