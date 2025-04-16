import{_ as n,c as a,b as s,o as t}from"./app-DzsfPIyd.js";const l="/note-front/backend/node/base/002.png",i={};function o(p,e){return t(),a("div",null,e[0]||(e[0]=[s('<h1 id="二、安装" tabindex="-1"><a class="header-anchor" href="#二、安装"><span>二、安装</span></a></h1><h2 id="_2-1-zip-版本的nodejs安装配置" tabindex="-1"><a class="header-anchor" href="#_2-1-zip-版本的nodejs安装配置"><span>2.1 ZIP 版本的NodeJS安装配置</span></a></h2><h3 id="_2-1-1-下载zip安装包并解压" tabindex="-1"><a class="header-anchor" href="#_2-1-1-下载zip安装包并解压"><span>2.1.1 下载ZIP安装包并解压</span></a></h3><p>本文以nodejs16.20.2版本为例。</p><p>根据系统版本去NodeJS官网下载ZIP安装包</p><p>NodeJS官网：https://nodejs.org/en/</p><p>下载完成，解压到指定路径，如：E:\\node16.20.2</p><h3 id="_2-1-2-配置环境变量" tabindex="-1"><a class="header-anchor" href="#_2-1-2-配置环境变量"><span>2.1.2 配置环境变量</span></a></h3><p>创建环境变狼NODE，node的安装路径</p><p>在Path中添加%NODE%，%NODE%\\node_global</p><p>检查node版本，输入命令node –v</p><h2 id="_2-2-msi安装-zip安装后可省略" tabindex="-1"><a class="header-anchor" href="#_2-2-msi安装-zip安装后可省略"><span>2.2 msi安装(zip安装后可省略)</span></a></h2><h3 id="_2-2-1-进入官网地址下载安装包" tabindex="-1"><a class="header-anchor" href="#_2-2-1-进入官网地址下载安装包"><span>2.2.1 进入官网地址下载安装包</span></a></h3><p>官网：<a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">Node.js — Run JavaScript Everywhere</a></p><p>其他版本下载：<a href="https://nodejs.org/zh-cn/download" target="_blank" rel="noopener noreferrer">Node.js — Download Node.js? (nodejs.org)</a></p><p>选择对应你系统的Node.js版本</p><p><img src="'+l+`" alt=""></p><h3 id="_2-2-2-点击运行" tabindex="-1"><a class="header-anchor" href="#_2-2-2-点击运行"><span>2.2.2 点击运行</span></a></h3><p>选择路径不选C盘就可以</p><h2 id="_2-3-配置node的缓存路径和全模块路径" tabindex="-1"><a class="header-anchor" href="#_2-3-配置node的缓存路径和全模块路径"><span>2.3 配置node的缓存路径和全模块路径</span></a></h2><p>在node安装目录下新建<code>node_cache</code>和<code>node_global</code>两个文件夹</p><p>输入以下命令</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">npm</span> config <span class="token builtin class-name">set</span> prefix <span class="token string">&quot;E:<span class="token entity" title="\\n">\\n</span>ode-v22.12.0<span class="token entity" title="\\n">\\n</span>ode_global&quot;</span></span>
<span class="line"><span class="token function">npm</span> config <span class="token builtin class-name">set</span> cache <span class="token string">&quot;E:<span class="token entity" title="\\n">\\n</span>ode-v22.12.0<span class="token entity" title="\\n">\\n</span>ode_cache&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-4-测试安装" tabindex="-1"><a class="header-anchor" href="#_2-4-测试安装"><span>2.4 测试安装</span></a></h2><p>输入命令<code>npm install express –g</code></p>`,25)]))}const r=n(i,[["render",o],["__file","02.html.vue"]]),c=JSON.parse('{"path":"/backend/node/base/02.html","title":"二、安装","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"2.1 ZIP 版本的NodeJS安装配置","slug":"_2-1-zip-版本的nodejs安装配置","link":"#_2-1-zip-版本的nodejs安装配置","children":[{"level":3,"title":"2.1.1 下载ZIP安装包并解压","slug":"_2-1-1-下载zip安装包并解压","link":"#_2-1-1-下载zip安装包并解压","children":[]},{"level":3,"title":"2.1.2 配置环境变量","slug":"_2-1-2-配置环境变量","link":"#_2-1-2-配置环境变量","children":[]}]},{"level":2,"title":"2.2 msi安装(zip安装后可省略)","slug":"_2-2-msi安装-zip安装后可省略","link":"#_2-2-msi安装-zip安装后可省略","children":[{"level":3,"title":"2.2.1 进入官网地址下载安装包","slug":"_2-2-1-进入官网地址下载安装包","link":"#_2-2-1-进入官网地址下载安装包","children":[]},{"level":3,"title":"2.2.2 点击运行","slug":"_2-2-2-点击运行","link":"#_2-2-2-点击运行","children":[]}]},{"level":2,"title":"2.3 配置node的缓存路径和全模块路径","slug":"_2-3-配置node的缓存路径和全模块路径","link":"#_2-3-配置node的缓存路径和全模块路径","children":[]},{"level":2,"title":"2.4 测试安装","slug":"_2-4-测试安装","link":"#_2-4-测试安装","children":[]}],"git":{"updatedTime":1744806830000,"contributors":[{"name":"zhao-farmer","username":"zhao-farmer","email":"857899180@qq.com","commits":1,"url":"https://github.com/zhao-farmer"}]},"filePathRelative":"backend/node/base/02.md"}');export{r as comp,c as data};
