<template><div><h1 id="八、express脚手架" tabindex="-1"><a class="header-anchor" href="#八、express脚手架"><span>八、Express脚手架</span></a></h1>
<p>使用express-generator安装</p>
<p>使用命令行进入项目目录，依次执行：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> i <span class="token parameter variable">-g</span> express-generator</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>可通过express -h查看命令行的指令含义</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">express <span class="token parameter variable">-h</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">Options:</span>
<span class="line">    --version        输出版本号</span>
<span class="line">-e, --ejs            添加对 ejs 模板引擎的支持</span>
<span class="line">    --pug            添加对 pug 模板引擎的支持</span>
<span class="line">    --hbs            添加对 handlebars 模板引擎的支持</span>
<span class="line">-H, --hogan          添加对 hogan.js 模板引擎的支持</span>
<span class="line">-v, --view &lt;engine>  添加对视图引擎（view） &lt;engine> 的支持 (ejs|hbs|hjs|jade|pug|twig|vash) （默认是 jade 模板引擎）</span>
<span class="line">    --no-view        创建不带视图引擎的项目</span>
<span class="line">-c, --css &lt;engine>   添加样式表引擎 &lt;engine> 的支持 (less|stylus|compass|sass) （默认是普通的 css 文件）</span>
<span class="line">    --git            添加 .gitignore</span>
<span class="line">-f, --force          强制在非空目录下创建</span>
<span class="line">-h, --help           输出使用方法</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建了一个名为 myapp 的 Express 应用，并使用ejs模板引擎</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">express <span class="token parameter variable">--view</span><span class="token operator">=</span>ejs myapp</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>进入app，并安装依赖</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token comment"># 进入目录</span></span>
<span class="line"><span class="token builtin class-name">cd</span> myapp</span>
<span class="line"><span class="token comment"># 安装插件</span></span>
<span class="line"><span class="token function">npm</span> <span class="token function">install</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看启动命令：</p>
<p><img src="/backend/senior/express/004.png" alt=""></p>
<p>命令为： npm start</p>
<p><img src="/backend/senior/express/005.png" alt=""></p>
</div></template>


