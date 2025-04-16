import comp from "E:/study/blog/note-front/docs/.vuepress/.temp/pages/script/JavaScript/base/01.html.vue"
const data = JSON.parse("{\"path\":\"/script/JavaScript/base/01.html\",\"title\":\"一、认识javascript\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"1.1 js介绍.\",\"slug\":\"_1-1-js介绍\",\"link\":\"#_1-1-js介绍\",\"children\":[]},{\"level\":2,\"title\":\"1.2 helloword\",\"slug\":\"_1-2-helloword\",\"link\":\"#_1-2-helloword\",\"children\":[]},{\"level\":2,\"title\":\"1.3 编写位置\",\"slug\":\"_1-3-编写位置\",\"link\":\"#_1-3-编写位置\",\"children\":[{\"level\":3,\"title\":\"1.3.1 内部标签\",\"slug\":\"_1-3-1-内部标签\",\"link\":\"#_1-3-1-内部标签\",\"children\":[]},{\"level\":3,\"title\":\"1.3.2 外部引入\",\"slug\":\"_1-3-2-外部引入\",\"link\":\"#_1-3-2-外部引入\",\"children\":[]},{\"level\":3,\"title\":\"1.3.3 利用属性\",\"slug\":\"_1-3-3-利用属性\",\"link\":\"#_1-3-3-利用属性\",\"children\":[]},{\"level\":3,\"title\":\"1.3.4 基本语法\",\"slug\":\"_1-3-4-基本语法\",\"link\":\"#_1-3-4-基本语法\",\"children\":[]}]}],\"git\":{},\"filePathRelative\":\"script/JavaScript/base/01.md\"}")
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
