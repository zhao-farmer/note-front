import comp from "E:/study/blog/note-front/docs/.vuepress/.temp/pages/other/tool/vscode/03.html.vue"
const data = JSON.parse("{\"path\":\"/other/tool/vscode/03.html\",\"title\":\"三、离线装插件\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"3.1 方法一\",\"slug\":\"_3-1-方法一\",\"link\":\"#_3-1-方法一\",\"children\":[]},{\"level\":2,\"title\":\"3.2 方法二\",\"slug\":\"_3-2-方法二\",\"link\":\"#_3-2-方法二\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"other/tool/vscode/03.md\"}")
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
