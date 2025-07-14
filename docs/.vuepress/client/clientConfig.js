import { defineClientConfig } from 'vuepress/client'
import { onMounted } from 'vue'
import mermaid from 'mermaid';

export default defineClientConfig({
  enhance({ app, router, siteData }) {

    // 取消默认初始化所有 class='mermaid' 以及添加一些配置
    mermaid.initialize({
      startOnLoad: false,
      theme: 'default',
      flowchart: {
        useMaxWidth: true,
        htmlLabels: true,
        curve: 'basis'
      }
    })
    // 跳转路由后-初始化所有mermaid
    router.afterEach((to) => {      
      if(!to.hash){
        setTimeout(() => {
          // 打包时 也会执行一遍，客户端配置官方没有做隔离
          if (typeof document !== 'undefined'){
              const mermaids = document.querySelectorAll('.mermaid')
              mermaid.run(undefined,mermaids)
          }
        }, 500);
      }
    })
  },
  setup() {
    // 刷新页面-初始化所有mermaid
    onMounted(() => {
        if (typeof document !== 'undefined'){
            const mermaids = document.querySelectorAll('.mermaid')
            mermaid.run(undefined,mermaids)
        }
    })

  },
  layouts: {},
  rootComponents: [],
})