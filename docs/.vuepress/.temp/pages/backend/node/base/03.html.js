import comp from "E:/study/blog/note-front/docs/.vuepress/.temp/pages/backend/node/base/03.html.vue"
const data = JSON.parse("{\"path\":\"/backend/node/base/03.html\",\"title\":\"三、路由router\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"git\":{\"updatedTime\":1744806830000,\"contributors\":[{\"name\":\"zhao-farmer\",\"username\":\"zhao-farmer\",\"email\":\"857899180@qq.com\",\"commits\":1,\"url\":\"https://github.com/zhao-farmer\"}],\"changelog\":[{\"hash\":\"c70b07d347b059fbe78c7770e7fa611a62f92633\",\"time\":1744806830000,\"email\":\"857899180@qq.com\",\"author\":\"zhao-farmer\",\"message\":\"前端笔记提交\"}]},\"filePathRelative\":\"backend/node/base/03.md\"}")
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
