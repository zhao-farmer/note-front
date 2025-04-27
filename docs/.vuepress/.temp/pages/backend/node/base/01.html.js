import comp from "E:/study/blog/note-front/docs/.vuepress/.temp/pages/backend/node/base/01.html.vue"
const data = JSON.parse("{\"path\":\"/backend/node/base/01.html\",\"title\":\"一、概述\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"1.1 基本介绍\",\"slug\":\"_1-1-基本介绍\",\"link\":\"#_1-1-基本介绍\",\"children\":[]},{\"level\":2,\"title\":\"1.2 NodeJS架构图\",\"slug\":\"_1-2-nodejs架构图\",\"link\":\"#_1-2-nodejs架构图\",\"children\":[]},{\"level\":2,\"title\":\"1.3 Nodejs 应用场景\",\"slug\":\"_1-3-nodejs-应用场景\",\"link\":\"#_1-3-nodejs-应用场景\",\"children\":[]}],\"git\":{\"updatedTime\":1744806830000,\"contributors\":[{\"name\":\"zhao-farmer\",\"username\":\"zhao-farmer\",\"email\":\"857899180@qq.com\",\"commits\":1,\"url\":\"https://github.com/zhao-farmer\"}]},\"filePathRelative\":\"backend/node/base/01.md\"}")
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
