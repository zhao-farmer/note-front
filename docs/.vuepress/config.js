import { viteBundler } from "@vuepress/bundler-vite";
import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress";
import { markdownMathPlugin } from '@vuepress/plugin-markdown-math'

import  mermaidPlugin  from './client/mermaidPlugin'
import { getDirname, path } from 'vuepress/utils'
const __dirname = getDirname(import.meta.url)

export default defineUserConfig({

     // markdown-it配置
     extendsMarkdown: (md) => {
        md.use(mermaidPlugin)
    },
    
    // 客户端配置
    clientConfigFile: path.resolve(__dirname, './client/clientConfig.js'),

    // 插件配置
    plugins: [
        // markdown 数学公司插件
        markdownMathPlugin({
            // 使用 KaTeX 启用 TeX 支持
            type: 'katex'
        }),
        
    ],

    bundler: viteBundler(),

    // 部署站点的基础路径
    base: "/note-front",
    // 站点的语言
    lang: "zh-CN",
    // 站点的标题
    title: "赵建辉的前端知识库",
    // 站点的描述
    description: "前端的基础的html,css,js,进阶的ts,es,sass,less,也有vue,react等框架,也包含node.js后端处理",
    

    // dev配置项
    port:8008,
 
    // 主题配置
    theme: defaultTheme({
        // 配置导航栏
        navbar: [
            {
                text: "前端样式",
                children: [
                    {
                        text: "html+css",
                        link: "/style/base_htmlcss/",
                    },
                    {
                        text: "css整理记录",
                        link: "/style/records_css/",
                    },
                    {
                        text: "html整理记录",
                        link: "/style/records_html/",
                    },
                    {
                        text: "页面布局记录",
                        link: "/style/records_layout/",
                    },
                    {
                        text: "CSS 预编译器",
                        link: "/style/pre_compile_css/",
                    },
                    {
                        text: "CSS 预定义",
                        link: "/style/pre_defined_css/",
                    },
                ],
            },
            {
                text: "前端交互",
                children: [
                    {
                        text: "JavaScript相关",
                        link: "/script/JavaScript/",
                    },
                    {
                        text: "ECMAScript相关",
                        link: "/script/ECMAScript/",
                    },
                    {
                        text: "TypeScript相关",
                        link: "/script/TypeScript/",
                    },
                    {
                        text: "JS增强",
                        link: "/script/other/",
                    },
                    {
                        text: "JS记录",
                        link: "/script/record/",
                    },
                ],
            },
            {
                text: "前端框架",
                children: [
                    {
                        text: "Vue框架",
                        link: "/framework/vue/",
                    },
                    {
                        text: "React框架",
                        link: "/framework/react/",
                    },
                    {
                        text: "Angular框架",
                        link: "/framework/angular/",
                    },
                    {
                        text: "Svelte框架",
                        link: "/framework/svelte/",
                    },
                    {
                        text: "Solid框架",
                        link: "/framework/solid/",
                    },
                ],
            },
            {
                text: "前端动画",
                children: [
                    {
                        text: "canvas",
                        link: "/animation/canvas/",
                    },
                    {
                        text: "svg",
                        link: "/animation/svg/",
                    },
                    {
                        text: "Fabric.js",
                        link: "/animation/fabric/",
                    },
                    {
                        text: "pixi.js",
                        link: "/animation/pixi/",
                    },
                    {
                        text: "Echats.js",
                        link: "/animation/echats/",
                    },
                    {
                        text: "antv",
                        link: "/animation/antv/",
                    },
                    {
                        text: "webgl",
                        link: "/animation/webgl/",
                    },
                    {
                        text: "three.js",
                        link: "/animation/three/",
                    },
                ],
            },
            {
                text: "UI相关",
                children: [
                    {
                        text: "icon图标",
                        link: "/ui/icon/",
                    },
                    {
                        text: "UI框架",
                        link: "/ui/framework/",
                    },
                    {
                        text: "web字体",
                        link: "/ui/font/",
                    },
                ],
            },
            {
                text: "前端应用",
                children: [
                    {
                        text: "微信小程序",
                        link: "/application/weixin/",
                    },
                    {
                        text: "uni-app",
                        link: "/application/uniapp/",
                    },
                    {
                        text: "electron桌面",
                        link: "/application/electron/",
                    },
                    {
                        text: "flutter",
                        link: "/application/flutter/",
                    },
                    {
                        text: "react-native",
                        link: "/application/react-native/",
                    },
                    {
                        text: "cocos游戏",
                        link: "/application/cocos/",
                    },
                ],
            },
            {
                text: "node后端",
                children: [
                    {
                        text: "node基础",
                        link: "/backend/node/",
                    },
                    {
                        text: "web后台框架",
                        link: "/backend/senior/",
                    },
                    {
                        text: "web依赖",
                        link: "/backend/quote/",
                    },
                    {
                        text: "node工具",
                        link: "/backend/tool/",
                    },
                ],
            },
            {
                text: "其他知识",
                children: [
                    {
                        text: "前端常识记录",
                        link: "/other/knowledge/",
                    },
                    {
                        text: "微前端",
                        link: "/other/microFront/",
                    },
                    {
                        text: "插件开发",
                        link: "/other/plugin/",
                    },
                    {
                        text: "前端构建工具",
                        link: "/other/construct/",
                    },
                    {
                        text: "其他标记语言",
                        link: "/other/other/",
                    },
                    {
                        text: "开发工具使用",
                        link: "/other/tool/",
                    },
                ],
            },
        ],
        // 侧边栏
        sidebar: {
             /* ============================== 样式相关  =============================== */
            "/style/base_htmlcss/": [
                {
                    text: "CSS2",
                    prefix: 'css2/',
                    children: ["01.md","02.md","03.md","04.md","05.md","06.md","07.md","08.md"],
                },
                {
                    text: "CSS3",
                    prefix: 'css3/',
                    children: ["01.md","02.md","03.md","04.md","05.md","06.md","07.md","08.md","09.md","10.md",
                        "11.md","12.md","13.md","14.md","15.md","16.md"],
                },
                {
                    text: "HTML4",
                    prefix: 'html4/',
                    children: ["01.md","02.md","03.md","04.md","05.md"],
                },
                {
                    text: "HTML5",
                    prefix: 'html5/',
                    children: ["01.md","02.md","03.md","04.md","05.md","06.md"],
                },
            ],
            "/style/records_css/": [
                {
                    text: "css整理记录",
                    children: ["00.md", "01.md", "02.md","03.md","04.md","05.md","06.md","07.md","08.md","09.md","10.md"],
                },
            ],
            "/style/records_html/": [
                {
                    text: "html整理记录",
                    children: ["00.md", "01.md", "02.md","03.md","04.md","05.md","06.md"],
                },
            ],
            "/style/records_layout/": [
                {
                    text: "CSS 布局",
                    prefix: 'layout_css/',
                    children: ["01.md", "02.md","03.md", "04.md"],
                },
                {
                    text: "flex 布局",
                    prefix: 'layout_flex/',
                    children: ["01.md", "02.md","03.md"],
                },
                {
                    text: "grid 布局",
                    prefix: 'layout_grid/',
                    children: ["01.md", "02.md","03.md","04.md","05.md","06.md","07.md","08.md"],
                },
                {
                    text: "css模拟html布局",
                    prefix: 'layout_imitate/',
                    children: ["01.md", "02.md"],
                },
                {
                    text: "移动端布局",
                    prefix: 'layout_phone/',
                    children: ["01.md", "02.md", "03.md"],
                },
                {
                    text: "响应式布局",
                    prefix: 'layout_responsive/',
                    children: ["01.md", "02.md", "03.md"],
                },
                {
                    text: "布局实现-基础",
                    prefix: 'layout_basic/',
                    children: ["01.md", "02.md","03.md","04.md","05.md","06.md","07.md","08.md"],
                },
                {
                    text: "布局实现-复杂",
                    prefix: 'layout_complex/',
                    children: ["01.md"],
                },
            ],
            "/style/pre_compile_css/": [
                {
                    text: "scss/sass",
                    prefix: 'scss/',
                    children: ["01.md", "02.md","03.md","04.md","05.md","06.md","07.md","08.md","09.md","10.md","11.md","12.md"]
                },
                {
                    text: "less",
                    prefix: 'less/',
                    children: ["01.md", "02.md","03.md","04.md","05.md","06.md","07.md","08.md","09.md"],
                },
            ],
            "/style/pre_defined_css/": [
                {
                    text: "Tailwind CSS",
                    prefix: 'Tailwind/',
                    children: ["01.md", "02.md","03.md","04.md","05.md","06.md","07.md","08.md"],
                },
                {
                    text: "UnoCSS",
                    prefix: 'UnoCSS/',
                    children: ["01.md", "02.md","03.md","04.md"],
                },
            ],
            /* ==============================  交互相关  =============================== */
            "/script/JavaScript/": [
                {
                    text: "JavaScript笔记",
                    prefix: 'base/',
                    children: ["01.md", "02.md","03.md","04.md","05.md","06.md","07.md","08.md","09.md","10.md",
                        "11.md","12.md","13.md","14.md"],
                },
                {
                    text: "JavaScript高级",
                    prefix: 'difficulty/',
                    children: ["01.md", "02.md","03.md","04.md","05.md","06.md","07.md","08.md","09.md","10.md",
                        "11.md","12.md","13.md","14.md","15.md","16.md","17.md"],
                },
                {
                    text: "JavaScript日常记录",
                    prefix: 'records/',
                    children:["00.md","01.md", "02.md","03.md","04.md","05.md","06.md","07.md","08.md","09.md","10.md"],
                },
                {
                    text: "操作DOM记录",
                    prefix: 'dom/',
                    children:["00.md","01.md", "02.md","03.md","04.md"],
                },
            ],
            "/script/ECMAScript/": [
                {
                    text: "ECMAScript学习笔记",
                    prefix: 'base/',
                    children: ["01.md", "02.md","03.md","04.md","05.md","06.md","07.md","08.md","09.md","10.md"],
                },
                {
                    text: "ECMAScript日常记录",
                    prefix: 'records/',
                    children:["01.md", "02.md","03.md","04.md"],
                },
            ],
            "/script/TypeScript/": [
                {
                    text: "TypeScript学习笔记1",
                    prefix: 'study1/',
                    children: ["01.md", "02.md"],
                },
                {
                    text: "TypeScript学习笔记2",
                    prefix: 'study2/',
                    children:["01.md", "02.md","03.md","04.md","05.md","06.md","07.md","08.md","09.md","10.md",
                        "11.md","12.md","13.md","14.md","15.md","16.md","17.md","18.md","19.md","20.md",
                        "21.md","22.md","23.md"],
                },
                {
                    text: "TypeScript技巧总结",
                    prefix: 'records/',
                    children:["01.md", "02.md"],
                },
            ],
            "/script/other/": [
                {
                    text: "网络交互 ajax",
                    prefix: 'ajax/',
                    children:["01.md", "02.md","03.md","04.md"],
                },
                {
                    text: "异步编程 promise",
                    prefix: 'promise/',
                    children:["01.md", "02.md","03.md","04.md","05.md"],
                },
                {
                    text: "增强JS Jquery.js",
                    prefix: 'JqueryJs/',
                    children: ["01.md", "02.md","03.md","04.md","05.md"],
                },
                {
                    text: "响应式编程 RxJs",
                    prefix: 'rxjs/',
                    children: ["01.md", "02.md","03.md"],
                },
            ],
            "/script/record/":[
                {
                    text: "工具类",
                    prefix: 'tool/',
                    children:["01.md", "02.md","03.md","04.md"],
                },
                {
                    text: "实现功能",
                    prefix: 'work/',
                    children:["01.md", "02.md","03.md"],
                },
            ],

            /* ==============================  框架相关  =============================== */

            "/framework/vue/": [
                {
                    text: "vue2",
                    prefix: 'vue2/',
                    children: ["01.md", "02.md","03.md","04.md","05.md","06.md"],
                },
                {
                    text: "vue3",
                    prefix: 'vue3/',
                    children:["01.md", "02.md","03.md","04.md","05.md","06.md","07.md", "08.md"],
                },
                {
                    text: "nuxt",
                    prefix: 'nuxt/',
                    children:["01.md", "02.md","03.md","04.md"],
                },
                {
                    text: "vue日常记录",
                    prefix: 'records/',
                    children:["01.md"],
                },
            ],

            "/framework/react/": [
                {
                    text: "react18_基础",
                    prefix: 'react18/',
                    children: ["01.md","02.md","03.md","04.md","05.md","06.md","07.md"],
                },
                {
                    text: "react19+ts+vite",
                    prefix: 'react19/',
                    children: ["01.md","02.md","03.md","04.md","05.md"],
                },
                {
                    text: "next.js框架",
                    prefix: 'next/',
                    children:["01.md","02.md","03.md"],
                },
                {
                    text: "react日常记录",
                    prefix: 'records/',
                    children:["01.md","02.md","03.md"],
                },
            ],

            "/framework/angular/": [
                {
                    text: "angular v16",
                    prefix: 'base16/',
                    children:["01.md", "02.md","03.md","04.md","05.md","06.md","07.md","08.md","09.md"],
                },
                {
                    text: "angular v20",
                    prefix: 'base20/',
                    children:["01.md", "02.md"],
                },
                {
                    text: "angular日常记录",
                    prefix: 'records/',
                    children:["01.md"],
                },
            ],
            "/framework/svelte/": [
                {
                    text: "svelte4",
                    prefix: 'base4/',
                    children:["01.md","02.md","03.md","04.md","05.md"],
                },
                {
                    text: "svelte5",
                    prefix: 'base5/',
                    children:["01.md","02.md","03.md","04.md"],
                },
                {
                    text: "svelteKit",
                    prefix: 'svelteKit/',
                    children:["01.md","02.md","03.md","04.md"],
                },
                {
                    text: "svelte日常记录",
                    prefix: 'records/',
                    children:[],
                },
            ],
            "/framework/solid/": [
                {
                    text: "solid基础",
                    prefix: 'base/',
                    children:["01.md","02.md","03.md","04.md","05.md"],
                },
                {
                    text: "solid Start",
                    prefix: 'solidStart/',
                    children:["01.md","02.md","03.md","04.md"],
                },
                {
                    text: "solid日常记录",
                    prefix: 'records/',
                    children:[],
                },
            ],
            

            /* ==============================  动画相关  =============================== */
            "/animation/canvas/": [
                {
                    text: "canvas基础",
                    prefix: 'base/',
                    children: ["01.md", "02.md","03.md","04.md","05.md","06.md","07.md","08.md","09.md"],
                },
                {
                    text: "canvas进阶",
                    prefix: 'senior/',
                    children: ["01.md","02.md","03.md","04.md","05.md","06.md"],
                },
                {
                    text: "canvas日常记录",
                    prefix: 'records/',
                    children:["01.md","02.md","03.md","04.md","05.md"],
                },
            ],

                        
            "/animation/svg/": [
                {
                    text: "svg基础",
                    prefix: 'base/',
                    children: ["01.md","02.md","03.md","04.md","05.md","06.md","07.md","08.md","09.md","10.md",
                        "11.md","12.md"],
                },
                {
                    text: "svg日常记录",
                    prefix: 'records/',
                    children:["01.md","02.md","03.md"],
                },
            ],

            "/animation/fabric/": [
                {
                    text: "fabric.js v6基础",
                    prefix: 'base/',
                    children: ["01.md","02.md","03.md","04.md","05.md","06.md","07.md","08.md","09.md","10.md",
                        "11.md","12.md","13.md","14.md","15.md"],
                },
                {
                    text: "vue使用fabric.js",
                    prefix: 'vue/',
                    children:["01.md","02.md","03.md"],
                },
            ],

            "/animation/pixi/": [
                {
                    text: "pixi v7 学习",
                    prefix: 'base/',
                    children: ["01.md","02.md","03.md"],
                },
                {
                    text: "pixi v8 官网教程",
                    prefix: 'official/',
                    children: ["01.md","02.md","03.md","04.md","05.md","06.md","07.md","08.md","09.md","10.md",
                        "11.md","12.md","13.md"],
                },
                {
                    text: "pixi v8 官网实例",
                    prefix: 'example/',
                    children: ["01.md","02.md","03.md","04.md","05.md","06.md","07.md","08.md","09.md","10.md",
                        "11.md","12.md"],
                },
                {
                    text: "pixi日常记录",
                    prefix: 'records/',
                    children:[],
                },
            ],
            "/animation/echats/": [
                {
                    text: "Echats学习",
                    prefix: 'base/',
                    children: ["01.md","02.md"],
                },
                {
                    text: "Echats日常记录",
                    prefix: 'records/',
                    children:["01.md","02.md","03.md"],
                },
            ],
            "/animation/antv/": [
                {
                    text: "antv/S2",
                    prefix: 'S2/',
                    children: [],
                },
                {
                    text: "antv/S6",
                    prefix: 'S6/',
                    children: [],
                },
                {
                    text: "antv日常记录",
                    prefix: 'records/',
                    children:[],
                },
            ],
            "/animation/three/": [
                {
                    text: "three",
                    prefix: 'base/',
                    children: [],
                },
                {
                    text: "three日常记录",
                    prefix: 'records/',
                    children:[],
                },
            ],
            /* ==============================  UI相关  =============================== */
            "/ui/icon/": [
                {
                    text: "图标库",
                    prefix: 'library/',
                    children: ["01.md","02.md","03.md"],
                },
                {
                    text: "图标框架",
                    prefix: 'component/',
                    children:["01.md","02.md","03.md","04.md"],
                },
            ],
            "/ui/framework/": [
                {
                    text: "Vue-UI",
                    prefix: 'vue/',
                    children: ["01.md","02.md","03.md"],
                },
                {
                    text: "React-UI",
                    prefix: 'react/',
                    children:["01.md","02.md","03.md"],
                },
                {
                    text: "其他UI",
                    prefix: 'other/',
                    children:["01.md","02.md","03.md"],
                },
                {
                    text: "移动端UI",
                    prefix: 'mobile/',
                    children:["01.md","02.md","03.md"],
                },
            ],
            "/ui/font/": [
                {
                    text: "web字体",
                    children: ["01.md","02.md"],
                },
            ],
            /* ==============================  应用相关  =============================== */

            "/application/weixin/": [
                {
                    text: "微信小程序学习",
                    prefix: 'base/',
                    children: ["01.md","02.md","03.md","04.md","05.md","06.md","07.md","08.md","09.md","10.md",
                        "11.md","12.md"
                    ],
                },
                {
                    text: "小程序日常记录",
                    prefix: 'records/',
                    children:[],
                },
            ],

            "/application/uniapp/": [
                {
                    text: "uniapp基础",
                    prefix: 'base/',
                    children: ["01.md","02.md","03.md","04.md","05.md","06.md"],
                },
                {
                    text: "uniapp日常记录",
                    prefix: 'records/',
                    children:[],
                },
            ],
            "/application/flutter/": [
                {
                    text: "flutter基础",
                    prefix: 'base/',
                    children: ["01.md","02.md","03.md"],
                },
                {
                    text: "flutter日常记录",
                    prefix: 'records/',
                    children:[],
                },
            ],
            
            "/application/react-native/": [
                {
                    text: "react native基础",
                    prefix: 'base/',
                    children: ["01.md","02.md","03.md","04.md"],
                },
                {
                    text: "expo-创建",
                    prefix: 'expo/',
                    children: ["01.md"],
                },
                {
                    text: "RN日常记录",
                    prefix: 'records/',
                    children:[],
                },
            ],
            "/application/electron/": [
                {
                    text: "electron学习",
                    prefix: 'base/',
                    children: ["01.md","02.md","03.md","04.md","05.md","06.md","07.md","08.md"],
                },
                {
                    text: "electron快速入门",
                    prefix: 'fast/',
                    children: ["01.md"],
                },
                {
                    text: "electron日常记录",
                    prefix: 'records/',
                    children:["01.md"],
                },
            ],
            "/application/cocos/": [
                {
                    text: "cocos基础",
                    prefix: 'base/',
                    children: ["01.md","02.md","03.md","04.md","05.md","06.md"],
                },
                {
                    text: "cocos日常记录",
                    prefix: 'records/',
                    children:[],
                },
            ],
            
            
            /* ==============================  JS后端  =============================== */
            "/backend/node/": [
                {
                    text: "node基础",
                    prefix: 'base/',
                    children: ["01.md","02.md","03.md","04.md","05.md","06.md","07.md","08.md","09.md","10.md"],
                },
                {
                    text: "npm使用",
                    prefix: 'npm/',
                    children:["01.md", "02.md","03.md","04.md", "05.md"],
                },
                {
                    text: "指令安装",
                    prefix: 'command/',
                    children:["01.md", "02.md","03.md","04.md", "05.md","06.md","07.md"],
                },
                {
                    text: "node日常记录",
                    prefix: 'records/',
                    children:["01.md", "02.md","03.md"],
                },
            ],
            "/backend/senior/": [
                {
                    text: "egg.js",
                    prefix: 'egg/',
                    children: ["01.md","02.md","03.md","04.md","05.md"],
                },
                {
                    text: "nest.js",
                    prefix: 'nest/',
                    children: ["01.md","02.md","03.md","04.md"],
                },
               
                {
                    text: "框架日常记录",
                    prefix: 'records/',
                    children:[],
                },
            ],
            "/backend/quote/": [
                {
                    text: "前端依赖",
                    prefix: 'front/',
                    children: ["01.md","02.md","03.md","04.md","05.md","06.md","07.md","08.md","09.md"],
                },
                {
                    text: "后端依赖",
                    prefix: 'backend/',
                    children: ["01.md","02.md","03.md","04.md","05.md","06.md","07.md","08.md"],
                },
                {
                    text: "公共依赖",
                    prefix: 'common/',
                    children: ["01.md","02.md","03.md"],
                },
            ],

            "/backend/tool/": [
                {
                    text: "测试相关",
                    prefix: 'test/',
                    children: ["01.md", "02.md"],
                },
                {
                    text: "爬虫相关",
                    prefix: 'crawler/',
                    children: ["01.md", "02.md","03.md"],
                },
                {
                    text: "服务器相关",
                    prefix: 'api/',
                    children: ["01.md","03.md"],
                },
                {
                    text: "系统相关",
                    prefix: 'system/',
                    children: ["01.md"],
                },
            ],
            



            /* ==============================  其他知识  =============================== */

            "/other/knowledge/": [
                {
                    text: "前端公共规范",
                    prefix: 'common/',
                    children: ["01.md", "02.md","03.md"],
                },
                {
                    text: "web新特性",
                    prefix: 'new/',
                    children: ["01.md", "02.md","03.md","04.md"],
                }, 
            ],
            "/other/microFront/":[
                {
                    text: "微前端原理",
                    prefix: 'base/',
                    children: ["01.md", "02.md","03.md"],
                },
                {
                    text: "微前端框架",
                    prefix: 'framework/',
                    children: ["01.md", "02.md","03.md"],
                }, 
            ],

            "/other/plugin/": [
                {
                    text: "chrome插件",
                    prefix: 'chrome/',
                    children: ["01.md", "02.md","03.md", "04.md","05.md"],
                },
                {
                    text: "vscode插件",
                    prefix: 'vscode/',
                    children: ["01.md", "02.md"],
                }, 
            ],
            "/other/construct/": [
                {
                    text: "webpack构建工具",
                    prefix: 'webpack/',
                    children: ["01.md", "02.md","03.md", "04.md"],
                },
                {
                    text: "vite构建工具",
                    prefix: 'vite/',
                    children: ["01.md", "02.md","03.md"],
                },
                {
                    text: "rollup",
                    prefix: 'rollup/',
                    children: ["01.md", "02.md"],
                },
                {
                    text: "esbuild",
                    prefix: 'esbuild/',
                    children: ["01.md"],
                },
            ],

            "/other/other/": [
                {
                    text: "markdown标记语言",
                    prefix: 'markdown/',
                    children: ["01.md", "02.md","03.md","04.md","05.md"],
                },
                {
                    text: "mermaid图表",
                    prefix: 'mermaid/',
                    children: ["01.md", "02.md","03.md","04.md","05.md","06.md","07.md","08.md","09.md","10.md",
                        "11.md","12.md","13.md","14.md","15.md","16.md","17.md","18.md","19.md","20.md",
                        "21.md","22.md"]
                },
            ],

            "/other/tool/": [
                {
                    text: "vscode使用记录",
                    prefix: 'vscode/',
                    children: ["01.md", "02.md","03.md","04.md","05.md","06.md"],
                },
                {
                    text: "HBuilderX使用记录",
                    prefix: 'HBuilderX/',
                    children: ["01.md"],
                },
            ],
        },
    }),
});
