import{aq as n,ar as a,as as e,at as i}from"./app-Cok9BT0p.js";const l="/note-front/framework/vue/vue3/001.png",p="/note-front/framework/vue/vue3/002.png",t="/note-front/framework/vue/vue3/003.png",c="/note-front/framework/vue/vue3/004.png",r="/note-front/framework/vue/vue3/005.png",o="/note-front/framework/vue/vue3/006.png",d="/note-front/framework/vue/vue3/007.png",m={};function v(u,s){return i(),a("div",null,s[0]||(s[0]=[e(`<h1 id="二、-创建vue3工程" tabindex="-1"><a class="header-anchor" href="#二、-创建vue3工程"><span>二、 创建Vue3工程</span></a></h1><h2 id="_3-1-【基于-vue-cli-创建】" tabindex="-1"><a class="header-anchor" href="#_3-1-【基于-vue-cli-创建】"><span>3.1 【基于 vue-cli 创建】</span></a></h2><p>点击查看 <a href="https://cli.vuejs.org/zh/guide/creating-a-project.html#vue-create" target="_blank" rel="noopener noreferrer">官方文档</a></p><p>备注：目前vue-cli已处于维护模式，官方推荐基于 Vite 创建项目。</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"><span class="token comment">## 查看@vue/cli版本，确保@vue/cli版本在4.5.0以上</span></span>
<span class="line">vue <span class="token parameter variable">--version</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">## 安装或者升级你的@vue/cli </span></span>
<span class="line"><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> @vue/cli</span>
<span class="line"></span>
<span class="line"><span class="token comment">## 执行创建命令</span></span>
<span class="line">vue create vue_test</span>
<span class="line"></span>
<span class="line"><span class="token comment">##  随后选择3.x</span></span>
<span class="line"><span class="token comment">##  Choose a version of Vue.js that you want to start the project with (Use arrow keys)</span></span>
<span class="line"><span class="token comment">##  &gt; 3.x</span></span>
<span class="line"><span class="token comment">##    2.x</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">## 启动</span></span>
<span class="line"><span class="token builtin class-name">cd</span> vue_test</span>
<span class="line"><span class="token function">npm</span> run serve</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-2-【基于-vite-创建】-推荐" tabindex="-1"><a class="header-anchor" href="#_3-2-【基于-vite-创建】-推荐"><span>3.2 【基于 vite 创建】(推荐)</span></a></h2><p>vite 是新一代前端构建工具，官网地址：https://vitejs.cn，vite的优势如下：</p><ul><li>轻量快速的热重载（HMR），能实现极速的服务启动。</li><li>对 TypeScript、JSX、CSS 等支持开箱即用。</li><li>真正的按需编译，不再等待整个应用编译完成。</li><li>webpack构建 与 vite构建对比图如下：</li></ul><p><img src="`+l+'" alt=""></p><p><img src="'+p+`" alt=""></p><ul><li>具体操作如下（点击查看官方文档）</li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line">    <span class="token comment">## 1.创建命令</span></span>
<span class="line">    <span class="token function">npm</span> create vue@latest</span>
<span class="line">    </span>
<span class="line">    <span class="token comment">## 2.具体配置</span></span>
<span class="line">    <span class="token comment">## 配置项目名称</span></span>
<span class="line">    √ Project name: vue3_test</span>
<span class="line">    <span class="token comment">## 是否添加TypeScript支持</span></span>
<span class="line">    √ Add TypeScript?  Yes</span>
<span class="line">    <span class="token comment">## 是否添加JSX支持</span></span>
<span class="line">    √ Add JSX Support?  No</span>
<span class="line">    <span class="token comment">## 是否添加路由环境</span></span>
<span class="line">    √ Add Vue Router <span class="token keyword">for</span> Single Page Application development?  No</span>
<span class="line">    <span class="token comment">## 是否添加pinia环境</span></span>
<span class="line">    √ Add Pinia <span class="token keyword">for</span> state management?  No</span>
<span class="line">    <span class="token comment">## 是否添加单元测试</span></span>
<span class="line">    √ Add Vitest <span class="token keyword">for</span> Unit Testing?  No</span>
<span class="line">    <span class="token comment">## 是否添加端到端测试方案</span></span>
<span class="line">    √ Add an End-to-End Testing Solution? » No</span>
<span class="line">    <span class="token comment">## 是否添加ESLint语法检查</span></span>
<span class="line">    √ Add ESLint <span class="token keyword">for</span> code quality?  Yes</span>
<span class="line">    <span class="token comment">## 是否添加Prettiert代码格式化</span></span>
<span class="line">    √ Add Prettier <span class="token keyword">for</span> code formatting?  No</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>项目结构说明</li></ul><p><img src="`+t+'" alt=""></p><p>其中env.d.ts 文件是让ts文件认识 各种类型的其他文件点进去可以进行查看</p><p><img src="'+c+'" alt=""></p><p><img src="'+r+'" alt=""></p><ul><li>安装插件（官方插件，只安装这一个）</li></ul><p><img src="'+o+'" alt=""></p><p>总结：</p><ul><li>Vite 项目中，index.html 是项目的入口文件，在项目最外层。</li><li>加载index.html后，Vite 解析 <code>&lt;script type=&quot;module&quot; src=&quot;xxx&quot;&gt;</code> 指向的JavaScript。</li><li>Vue3**中是通过 **createApp 函数创建一个应用实例。</li></ul><h2 id="_3-3-项目工程文件" tabindex="-1"><a class="header-anchor" href="#_3-3-项目工程文件"><span>3.3 项目工程文件</span></a></h2><ol><li>index.html（入口文件）</li></ol><p><img src="'+d+`" alt=""></p><ol start="2"><li>引入了main.ts</li></ol><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre><code><span class="line"><span class="token comment">/* 引入样式 */</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token string">&#39;./assets/main.css&#39;</span></span>
<span class="line"><span class="token comment">/* 创建应用方法 */</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/* 根组件 */</span></span>
<span class="line"><span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App.vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/* 创建后 挂载到index.html中的id为app的div下 */</span></span>
<span class="line"><span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,26)]))}const b=n(m,[["render",v]]),h=JSON.parse('{"path":"/framework/vue/vue3/02.html","title":"二、 创建Vue3工程","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1744806830000,"contributors":[{"name":"zhao-farmer","username":"zhao-farmer","email":"857899180@qq.com","commits":1,"url":"https://github.com/zhao-farmer"}],"changelog":[{"hash":"c70b07d347b059fbe78c7770e7fa611a62f92633","time":1744806830000,"email":"857899180@qq.com","author":"zhao-farmer","message":"前端笔记提交"}]},"filePathRelative":"framework/vue/vue3/02.md"}');export{b as comp,h as data};
