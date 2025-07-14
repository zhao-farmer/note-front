import comp from "E:/study/blog/note-front/docs/.vuepress/.temp/pages/backend/node/records/02.html.vue"
const data = JSON.parse("{\"path\":\"/backend/node/records/02.html\",\"title\":\"浅谈 nodejs 中间层\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"git\":{\"updatedTime\":1745728691000,\"contributors\":[{\"name\":\"zhao-farmer\",\"username\":\"zhao-farmer\",\"email\":\"857899180@qq.com\",\"commits\":2,\"url\":\"https://github.com/zhao-farmer\"}],\"changelog\":[{\"hash\":\"46fa52c85bcba99bbcf2be91df503023f7f1d2e1\",\"time\":1745728691000,\"email\":\"857899180@qq.com\",\"author\":\"zhao-farmer\",\"message\":\"不属于前端的摘了出去\"},{\"hash\":\"c70b07d347b059fbe78c7770e7fa611a62f92633\",\"time\":1744806830000,\"email\":\"857899180@qq.com\",\"author\":\"zhao-farmer\",\"message\":\"前端笔记提交\"}]},\"filePathRelative\":\"backend/node/records/02.md\"}")
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
