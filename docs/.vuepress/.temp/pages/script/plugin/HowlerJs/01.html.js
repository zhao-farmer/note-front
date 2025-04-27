import comp from "E:/study/blog/note-front/docs/.vuepress/.temp/pages/script/plugin/HowlerJs/01.html.vue"
const data = JSON.parse("{\"path\":\"/script/plugin/HowlerJs/01.html\",\"title\":\"一、认识 howler.js\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"1.1 快速开始\",\"slug\":\"_1-1-快速开始\",\"link\":\"#_1-1-快速开始\",\"children\":[]},{\"level\":2,\"title\":\"1.2 示例\",\"slug\":\"_1-2-示例\",\"link\":\"#_1-2-示例\",\"children\":[]}],\"git\":{\"updatedTime\":1744806830000,\"contributors\":[{\"name\":\"zhao-farmer\",\"username\":\"zhao-farmer\",\"email\":\"857899180@qq.com\",\"commits\":1,\"url\":\"https://github.com/zhao-farmer\"}]},\"filePathRelative\":\"script/plugin/HowlerJs/01.md\"}")
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
