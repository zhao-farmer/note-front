import comp from "E:/study/blog/note-front/docs/.vuepress/.temp/pages/other/document/vuePress/03.html.vue"
const data = JSON.parse("{\"path\":\"/other/document/vuePress/03.html\",\"title\":\"三、页面\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"3.1 路由\",\"slug\":\"_3-1-路由\",\"link\":\"#_3-1-路由\",\"children\":[]},{\"level\":2,\"title\":\"3.2 Frontmatter\",\"slug\":\"_3-2-frontmatter\",\"link\":\"#_3-2-frontmatter\",\"children\":[]}],\"git\":{\"updatedTime\":1744806830000,\"contributors\":[{\"name\":\"zhao-farmer\",\"username\":\"zhao-farmer\",\"email\":\"857899180@qq.com\",\"commits\":1,\"url\":\"https://github.com/zhao-farmer\"}]},\"filePathRelative\":\"other/document/vuePress/03.md\"}")
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
