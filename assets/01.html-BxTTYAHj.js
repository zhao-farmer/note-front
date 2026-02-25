import{ar as n,as as a,at as e,au as l}from"./app-5nod3Nrs.js";const i="/note-front/framework/solid/solidStart/001.png",p="/note-front/framework/solid/solidStart/002.png",t="/note-front/framework/solid/solidStart/003.png",c={};function d(o,s){return l(),a("div",null,[...s[0]||(s[0]=[e(`<h1 id="一、认识-solid-start" tabindex="-1"><a class="header-anchor" href="#一、认识-solid-start"><span>一、认识 solid start</span></a></h1><h2 id="_1-1-命令创建" tabindex="-1"><a class="header-anchor" href="#_1-1-命令创建"><span>1.1 命令创建</span></a></h2><ol><li><p>创建项目</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 创建项目</span></span>
<span class="line"><span class="token function">npm</span> init solid</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+i+`" alt=""></p></li><li><p>运行项目</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token builtin class-name">cd</span> 01-project <span class="token operator">&amp;</span> <span class="token function">pnpm</span> <span class="token function">install</span></span>
<span class="line"><span class="token function">npm</span> run dev</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>运行结果</p><p><img src="`+p+`" alt=""></p></li></ol><h2 id="_1-2-项目结构" tabindex="-1"><a class="header-anchor" href="#_1-2-项目结构"><span>1.2 项目结构</span></a></h2><div class="language-txt line-numbers-mode" data-highlighter="prismjs" data-ext="txt"><pre><code class="language-txt"><span class="line">my-solidstart-app/</span>
<span class="line">├── public/                     # 静态资源（直接复制到输出目录）</span>
<span class="line">│   ├── favicon.ico</span>
<span class="line">│   └── robots.txt</span>
<span class="line">│</span>
<span class="line">├── src/</span>
<span class="line">│   ├── routes/                 # 核心：文件系统路由（自动生成 URL 路由）</span>
<span class="line">│   │   ├── api/                # API 路由（服务端函数）</span>
<span class="line">│   │   │   ├── hello.ts</span>
<span class="line">│   │   │   └── users/[id].ts</span>
<span class="line">│   │   │</span>
<span class="line">│   │   ├── (group)/            # 路由分组（可选，不影响 URL）</span>
<span class="line">│   │   │   └── admin/</span>
<span class="line">│   │   │       ├── layout.tsx</span>
<span class="line">│   │   │       └── dashboard.tsx</span>
<span class="line">│   │   │</span>
<span class="line">│   │   ├── [param].tsx         # 动态路由（如 /user/123）</span>
<span class="line">│   │   ├── [...spread].tsx     # 通配符路由（如 /files/a/b/c）</span>
<span class="line">│   │   ├── index.tsx           # 根路径 → /</span>
<span class="line">│   │   ├── about.tsx           # → /about</span>
<span class="line">│   │   └── error.tsx           # 全局错误边界</span>
<span class="line">│   │</span>
<span class="line">│   ├── components/             # 可复用组件（非路由组件）</span>
<span class="line">│   │   └── Header.tsx</span>
<span class="line">│   │</span>
<span class="line">│   ├── lib/                    # 工具函数、业务逻辑</span>
<span class="line">│   │   └── auth.ts</span>
<span class="line">│   │</span>
<span class="line">│   ├── styles/                 # 全局样式</span>
<span class="line">│   │   └── global.css</span>
<span class="line">│   │</span>
<span class="line">│   ├── entry-client.tsx        # 客户端入口（hydration）</span>
<span class="line">│   ├── entry-server.tsx        # 服务端入口（SSR 渲染）</span>
<span class="line">│   └── root.tsx                # 应用根组件（包含 Router、Provider 等）</span>
<span class="line">│</span>
<span class="line">├── .solid/                     # 构建产物（自动生成，勿提交）</span>
<span class="line">│   └── start/</span>
<span class="line">│</span>
<span class="line">├── server/                     # 自定义服务器逻辑（可选）</span>
<span class="line">│   └── index.ts</span>
<span class="line">│</span>
<span class="line">├── package.json</span>
<span class="line">├── tsconfig.json</span>
<span class="line">├── vite.config.ts              # Vite 配置（含 SolidStart 插件）</span>
<span class="line">└── middleware.ts               # 全局中间件（可选）</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-3-hello-world" tabindex="-1"><a class="header-anchor" href="#_1-3-hello-world"><span>1.3 hello world</span></a></h2><ol><li><p>修改示例代码</p><div class="language-jsx line-numbers-mode" data-highlighter="prismjs" data-ext="jsx"><pre><code class="language-jsx"><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> createSignal <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;solid-js&quot;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Home</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">const</span> <span class="token punctuation">[</span>name<span class="token punctuation">,</span>setName<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">createSignal</span><span class="token punctuation">(</span><span class="token string">&quot;world&quot;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span><span class="token punctuation">&gt;</span></span><span class="token plain-text"></span>
<span class="line">      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Hello </span><span class="token punctuation">{</span><span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text">!</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span><span class="token plain-text"></span>
<span class="line">    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>运行结果</p><p><img src="`+t+'" alt=""></p></li></ol>',7)])])}const u=n(c,[["render",d]]),v=JSON.parse('{"path":"/framework/solid/solidStart/01.html","title":"一、认识 solid start","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1771996569000,"contributors":[{"name":"zhao-farmer","username":"zhao-farmer","email":"857899180@qq.com","commits":1,"url":"https://github.com/zhao-farmer"}],"changelog":[{"hash":"6456dcf1fd45f82d71ce5dfe3954468d5bf78145","time":1771996569000,"email":"857899180@qq.com","author":"zhao-farmer","message":"新提交"}]},"filePathRelative":"framework/solid/solidStart/01.md"}');export{u as comp,v as data};
