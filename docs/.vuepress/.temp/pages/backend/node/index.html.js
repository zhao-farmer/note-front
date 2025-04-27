import comp from "E:/study/blog/note-front/docs/.vuepress/.temp/pages/backend/node/index.html.vue"
const data = JSON.parse("{\"path\":\"/backend/node/\",\"title\":\"node基础记录\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"node的基础应用\",\"slug\":\"node的基础应用\",\"link\":\"#node的基础应用\",\"children\":[]},{\"level\":2,\"title\":\"npm安装\",\"slug\":\"npm安装\",\"link\":\"#npm安装\",\"children\":[]},{\"level\":2,\"title\":\"日常记录\",\"slug\":\"日常记录\",\"link\":\"#日常记录\",\"children\":[]}],\"git\":{\"updatedTime\":1744806830000,\"contributors\":[{\"name\":\"zhao-farmer\",\"username\":\"zhao-farmer\",\"email\":\"857899180@qq.com\",\"commits\":1,\"url\":\"https://github.com/zhao-farmer\"}]},\"filePathRelative\":\"backend/node/README.md\"}")
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
