<template><div><h1 id="前端模块化" tabindex="-1"><a class="header-anchor" href="#前端模块化"><span>前端模块化</span></a></h1>
<h2 id="_1-模块化概述" tabindex="-1"><a class="header-anchor" href="#_1-模块化概述"><span>1 模块化概述</span></a></h2>
<h3 id="_1-1-什么是模块化" tabindex="-1"><a class="header-anchor" href="#_1-1-什么是模块化"><span>1.1 什么是模块化？</span></a></h3>
<ul>
<li>将程序文件依据一定规则拆分成多个文件，这种编码方式就是模块化的编码方式。</li>
<li>拆分出来每个文件就是一个模块，模块中的数据都是私有的，模块之间互相隔离。</li>
<li>同时也能通过一些手段，可以把模块内的指定数据“交出去”，供其他模块使用。</li>
</ul>
<h3 id="_1-2-为什么需要模块化" tabindex="-1"><a class="header-anchor" href="#_1-2-为什么需要模块化"><span>1.2 为什么需要模块化？</span></a></h3>
<p>随着应用的复杂度越来越高，其代码量和文件数量都会急剧增加，会逐渐引发以下问题：</p>
<ol>
<li>全局污染问题</li>
<li>依赖混乱问题</li>
<li>数据安全问题</li>
</ol>
<h2 id="_2-有哪些模块化规范" tabindex="-1"><a class="header-anchor" href="#_2-有哪些模块化规范"><span>2 有哪些模块化规范？</span></a></h2>
<p>历史背景(了解即可)：2009 年，随着 Node.js 的出现，JavaScript 在服务器端的应用逐渐增多，为了让 Node.js 的代码更好维护，就必须要制定一种 Node.js 环境下的模块化规范，来自 Mozilla 的工程师 Kevin Dangoor 提出了 CommonJS 规范（CommonJS 初期的名字叫 ServerJS），随后 Node.js 社区采纳了这一规范。</p>
<p>随着时间的推移，针对 JavaScript 的不同运行环境，相继出现了多种模块化规范，按时间排序，分别为：</p>
<ol>
<li>CommonJS —— 服务端应用广泛</li>
<li>AMD</li>
<li>CMD</li>
<li>ES6 模块化 —— 浏览器端应用广泛</li>
</ol>
<h2 id="_3-导入与导出的概念" tabindex="-1"><a class="header-anchor" href="#_3-导入与导出的概念"><span>3 导入与导出的概念</span></a></h2>
<p>模块化的核心思想就是：模块之间是隔离的，通过导入和导出进行数据和功能的共享。</p>
<ul>
<li>导出（暴露）：模块公开其内部的一部分（如变量、函数等），使这些内容可以被其他模块使用。</li>
<li>导入（引入）：模块引入和使用其他模块导出的内容，以重用代码和功能。</li>
</ul>
<h2 id="_4-commonjs-规范" tabindex="-1"><a class="header-anchor" href="#_4-commonjs-规范"><span>4 CommonJS 规范</span></a></h2>
<h3 id="_4-1-初步体验" tabindex="-1"><a class="header-anchor" href="#_4-1-初步体验"><span>4.1 初步体验</span></a></h3>
<ol>
<li>「创建 school.js」</li>
</ol>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token string">'尚硅谷'</span></span>
<span class="line"><span class="token keyword">const</span> slogan <span class="token operator">=</span> <span class="token string">'让天下没有难学的技术！'</span></span>
<span class="line"> </span>
<span class="line"><span class="token keyword">function</span> <span class="token function">getTel</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token string">'010-56253825'</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"> </span>
<span class="line"><span class="token keyword">function</span> <span class="token function">getCities</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token string">'北京'</span><span class="token punctuation">,</span><span class="token string">'上海'</span><span class="token punctuation">,</span><span class="token string">'深圳'</span><span class="token punctuation">,</span><span class="token string">'成都'</span><span class="token punctuation">,</span><span class="token string">'武汉'</span><span class="token punctuation">,</span><span class="token string">'西安'</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"> </span>
<span class="line"><span class="token comment">// 通过给exports对象添加属性的方式，来导出数据（注意：此处没有导出getCities）</span></span>
<span class="line">exports<span class="token punctuation">.</span>name <span class="token operator">=</span> name</span>
<span class="line">exports<span class="token punctuation">.</span>slogan <span class="token operator">=</span> slogan</span>
<span class="line">exports<span class="token punctuation">.</span>getTel <span class="token operator">=</span> getTel</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>「创建 student.js」</li>
</ol>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token string">'张三'</span></span>
<span class="line"><span class="token keyword">const</span> motto <span class="token operator">=</span> <span class="token string">'相信明天会更好！'</span></span>
<span class="line"> </span>
<span class="line"><span class="token keyword">function</span> <span class="token function">getTel</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token string">'13877889900'</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"> </span>
<span class="line"><span class="token keyword">function</span> <span class="token function">getHobby</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token string">'抽烟'</span><span class="token punctuation">,</span><span class="token string">'喝酒'</span><span class="token punctuation">,</span><span class="token string">'烫头'</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"> </span>
<span class="line"><span class="token comment">// 通过给exports对象添加属性的方式，来导出数据（注意：此处没有导出getHobby）</span></span>
<span class="line">exports<span class="token punctuation">.</span>name <span class="token operator">=</span> name</span>
<span class="line">exports<span class="token punctuation">.</span>motto <span class="token operator">=</span> motto</span>
<span class="line">exports<span class="token punctuation">.</span>getTel <span class="token operator">=</span> getTel</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>「创建 index.js」</li>
</ol>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// 引入school模块暴露的所有内容</span></span>
<span class="line"><span class="token keyword">const</span> school <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'./school'</span><span class="token punctuation">)</span></span>
<span class="line"> </span>
<span class="line"><span class="token comment">// 引入student模块暴露的所有内容</span></span>
<span class="line"><span class="token keyword">const</span> student <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'./student'</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-导出数据" tabindex="-1"><a class="header-anchor" href="#_4-2-导出数据"><span>4.2 导出数据</span></a></h3>
<p>在 CommonJS 标准中，导出数据有两种方式：</p>
<ul>
<li>第一种方式：module.exports = value</li>
<li>第二种方式：exports.name = value</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// 导出属性</span></span>
<span class="line">exports<span class="token punctuation">.</span>name <span class="token operator">=</span> name</span>
<span class="line">exports<span class="token punctuation">.</span>slogan <span class="token operator">=</span> slogan</span>
<span class="line"><span class="token comment">// 通过属性导出全部</span></span>
<span class="line">exports<span class="token punctuation">.</span>object <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">a</span><span class="token operator">:</span>name<span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">b</span><span class="token operator">:</span>slogan</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">// 直接导出全部属性</span></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span>name<span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">slogan</span><span class="token operator">:</span>slogan</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意点如下：</p>
<ol>
<li>
<p>每个模块内部的：this、exports、modules.exports在初始时，都指向同一个空对象，该空对象就是当前模块导出的数据，如下图：</p>
</li>
<li>
<p>无论如何修改导出对象，最终导出的都是<code v-pre>module.exports</code>的值。</p>
</li>
<li>
<p>exports是对<code v-pre>module.exports</code>的初始引用，仅为了方便给导出象添加属性，所以不能使用 <code v-pre>exports = value</code>的形式导出数据，但是可以使用<code v-pre>module.exports = xxxx</code>导出数据</p>
</li>
</ol>
<h3 id="_4-3-导入数据" tabindex="-1"><a class="header-anchor" href="#_4-3-导入数据"><span>4.3 导入数据</span></a></h3>
<p>在CJS模块化标准中，使用内置的require函数进行导入数据</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// 直接引入模块</span></span>
<span class="line"><span class="token keyword">const</span> school <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'./school'</span><span class="token punctuation">)</span></span>
<span class="line"> </span>
<span class="line"><span class="token comment">// 引入同时解构出要用的数据</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token punctuation">{</span> name<span class="token punctuation">,</span> slogan<span class="token punctuation">,</span> getTel <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'./school'</span><span class="token punctuation">)</span></span>
<span class="line"> </span>
<span class="line"><span class="token comment">// 引入同时解构+重命名</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span>stuName<span class="token punctuation">,</span>motto<span class="token punctuation">,</span><span class="token literal-property property">getTel</span><span class="token operator">:</span>stuTel<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'./student'</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-4-扩展理解" tabindex="-1"><a class="header-anchor" href="#_4-4-扩展理解"><span>4.4 扩展理解</span></a></h3>
<p>一个 JS 模块在执行时，是被包裹在一个内置函数中执行的，所以每个模块都有自己的作用域，我们可以通过如下方式验证这一说法：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arguments<span class="token punctuation">)</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arguments<span class="token punctuation">.</span>callee<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>内置函数的大致形式如下：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">exports<span class="token punctuation">,</span> require<span class="token punctuation">,</span> module<span class="token punctuation">,</span> __filename<span class="token punctuation">,</span> __dirname</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token doc-comment comment">/*********************/</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-5-浏览器端运行" tabindex="-1"><a class="header-anchor" href="#_4-5-浏览器端运行"><span>4.5 浏览器端运行</span></a></h3>
<p>Node.js 默认是支持 CommonJS 规范的，但浏览器端不支持，所以需要经过编译，步骤如下：</p>
<ul>
<li>第一步：全局安装 browserify ：npm i browserify -g</li>
<li>第二步：编译<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">browserify index<span class="token punctuation">.</span>js <span class="token operator">-</span>o build<span class="token punctuation">.</span>js</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div>备注：index.js 是源文件，build.js 是输出的目标文件</li>
<li>第三步：页面中引入使用<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token operator">&lt;</span>script type<span class="token operator">=</span><span class="token string">"text/javascript"</span> src<span class="token operator">=</span><span class="token string">"./build.js"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div>默认打印的数据</li>
</ul>
<h2 id="_5-es6-模块化规范" tabindex="-1"><a class="header-anchor" href="#_5-es6-模块化规范"><span>5 ES6 模块化规范</span></a></h2>
<p>ES6 模块化规范是一个官方标准的规范，它是在语言标准的层面上实现了模块化功能，是目前最流行的模块化规范，且浏览器与服务端均支持该规范。</p>
<h3 id="_5-1初步体验" tabindex="-1"><a class="header-anchor" href="#_5-1初步体验"><span>5.1初步体验</span></a></h3>
<h4 id="_5-1-1-浏览器运行" tabindex="-1"><a class="header-anchor" href="#_5-1-1-浏览器运行"><span>5.1.1 浏览器运行</span></a></h4>
<ol>
<li>「创建 school.js」</li>
</ol>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// 导出name</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">let</span> name <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">str</span><span class="token operator">:</span><span class="token string">'尚硅谷'</span><span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">// 导出slogan</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> slogan <span class="token operator">=</span> <span class="token string">'让天下没有难学的技术！'</span></span>
<span class="line"> </span>
<span class="line"><span class="token comment">// 导出name</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">getTel</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token string">'010-56253825'</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"> </span>
<span class="line"><span class="token keyword">function</span> <span class="token function">getCities</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token string">'北京'</span><span class="token punctuation">,</span><span class="token string">'上海'</span><span class="token punctuation">,</span><span class="token string">'深圳'</span><span class="token punctuation">,</span><span class="token string">'成都'</span><span class="token punctuation">,</span><span class="token string">'武汉'</span><span class="token punctuation">,</span><span class="token string">'西安'</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>「创建 student.js」</li>
</ol>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// 导出name</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token string">'张三'</span></span>
<span class="line"><span class="token comment">// 导出motto</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> motto <span class="token operator">=</span> <span class="token string">'相信明天会更好！'</span></span>
<span class="line"> </span>
<span class="line"><span class="token comment">// 导出getTel</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">getTel</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token string">'13877889900'</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"> </span>
<span class="line"><span class="token keyword">function</span> <span class="token function">getHobby</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token string">'抽烟'</span><span class="token punctuation">,</span><span class="token string">'喝酒'</span><span class="token punctuation">,</span><span class="token string">'烫头'</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>「创建 index.js」</li>
</ol>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> school <span class="token keyword">from</span> <span class="token string">'./school.js'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> student <span class="token keyword">from</span><span class="token string">'./student.js'</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>school<span class="token punctuation">)</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>student<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4">
<li>「页面中引入 index.js」</li>
</ol>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token operator">&lt;</span>script type<span class="token operator">=</span><span class="token string">"module"</span> src<span class="token operator">=</span><span class="token string">"./index.js"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="_5-1-2-node直接使用" tabindex="-1"><a class="header-anchor" href="#_5-1-2-node直接使用"><span>5.1.2 node直接使用</span></a></h4>
<ol>
<li>「创建 school.mjs」</li>
</ol>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// 导出name</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">let</span> name <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">str</span><span class="token operator">:</span><span class="token string">'尚硅谷'</span><span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">// 导出slogan</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> slogan <span class="token operator">=</span> <span class="token string">'让天下没有难学的技术！'</span></span>
<span class="line"> </span>
<span class="line"><span class="token comment">// 导出name</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">getTel</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token string">'010-56253825'</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"> </span>
<span class="line"><span class="token keyword">function</span> <span class="token function">getCities</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token string">'北京'</span><span class="token punctuation">,</span><span class="token string">'上海'</span><span class="token punctuation">,</span><span class="token string">'深圳'</span><span class="token punctuation">,</span><span class="token string">'成都'</span><span class="token punctuation">,</span><span class="token string">'武汉'</span><span class="token punctuation">,</span><span class="token string">'西安'</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>「创建 student.mjs」</li>
</ol>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// 导出name</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token string">'张三'</span></span>
<span class="line"><span class="token comment">// 导出motto</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> motto <span class="token operator">=</span> <span class="token string">'相信明天会更好！'</span></span>
<span class="line"> </span>
<span class="line"><span class="token comment">// 导出getTel</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">getTel</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token string">'13877889900'</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"> </span>
<span class="line"><span class="token keyword">function</span> <span class="token function">getHobby</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token string">'抽烟'</span><span class="token punctuation">,</span><span class="token string">'喝酒'</span><span class="token punctuation">,</span><span class="token string">'烫头'</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>「创建 index.mjs」</li>
</ol>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> school <span class="token keyword">from</span> <span class="token string">'./school.js'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> student <span class="token keyword">from</span><span class="token string">'./student.js'</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>school<span class="token punctuation">)</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>student<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-2-node-中运行-es6-模块、" tabindex="-1"><a class="header-anchor" href="#_5-2-node-中运行-es6-模块、"><span>5.2 Node 中运行 ES6 模块、</span></a></h3>
<p>Node.js中运行ES6模块代码有两种方式：</p>
<ul>
<li>方式一：将JavaScript文件后缀从.js 改为.mjs，Node 则会自动识别 ES6 模块。</li>
<li>方式二：在package.json中设置type属性值为module</li>
</ul>
<h3 id="_5-3-导出数据" tabindex="-1"><a class="header-anchor" href="#_5-3-导出数据"><span>5.3 导出数据</span></a></h3>
<p>ES6 模块化提供 3 种导出方式：①分别导出、②统一导出、③默认导出</p>
<ol>
<li>「分别导出」</li>
</ol>
<p>备注：在上方【初步体验中】环节，我们使用的导出方式就是【分别导出】</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// 导出name</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">let</span> name <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">str</span><span class="token operator">:</span><span class="token string">'尚硅谷'</span><span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">// 导出slogan</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> slogan <span class="token operator">=</span> <span class="token string">'让天下没有难学的技术！'</span></span>
<span class="line"> </span>
<span class="line"><span class="token comment">// 导出getTel</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">getTel</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token string">'010-56253825'</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>「统一导出」</li>
</ol>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">str</span><span class="token operator">:</span><span class="token string">'尚硅谷'</span><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">const</span> slogan <span class="token operator">=</span> <span class="token string">'让天下没有难学的技术！'</span></span>
<span class="line"> </span>
<span class="line"><span class="token keyword">function</span> <span class="token function">getTel</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token string">'010-56253825'</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"> </span>
<span class="line"><span class="token keyword">function</span> <span class="token function">getCities</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token string">'北京'</span><span class="token punctuation">,</span><span class="token string">'上海'</span><span class="token punctuation">,</span><span class="token string">'深圳'</span><span class="token punctuation">,</span><span class="token string">'成都'</span><span class="token punctuation">,</span><span class="token string">'武汉'</span><span class="token punctuation">,</span><span class="token string">'西安'</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"> </span>
<span class="line"><span class="token comment">// 统一导出了：name,slogan,getTel</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token punctuation">{</span>name<span class="token punctuation">,</span>slogan<span class="token punctuation">,</span>getTel<span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>「默认导出」</li>
</ol>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token string">'张三'</span></span>
<span class="line"><span class="token keyword">const</span> motto <span class="token operator">=</span> <span class="token string">'走自己的路，让别人五路可走！'</span></span>
<span class="line"> </span>
<span class="line"><span class="token keyword">function</span> <span class="token function">getTel</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token string">'13877889900'</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"> </span>
<span class="line"><span class="token keyword">function</span> <span class="token function">getHobby</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token string">'抽烟'</span><span class="token punctuation">,</span><span class="token string">'喝酒'</span><span class="token punctuation">,</span><span class="token string">'烫头'</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"> </span>
<span class="line"><span class="token comment">//默认导出：name,motto,getTel</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>name<span class="token punctuation">,</span>motto<span class="token punctuation">,</span>getTel<span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>备注 :「上述多种导出方式，可以同时使用」</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// 导出name ———— 分别导出</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">str</span><span class="token operator">:</span><span class="token string">'尚硅谷'</span><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">const</span> slogan <span class="token operator">=</span> <span class="token string">'让天下没有难学的技术！'</span></span>
<span class="line"> </span>
<span class="line"><span class="token keyword">function</span> <span class="token function">getTel</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token string">'010-56253825'</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"> </span>
<span class="line"><span class="token keyword">function</span> <span class="token function">getCities</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token string">'北京'</span><span class="token punctuation">,</span><span class="token string">'上海'</span><span class="token punctuation">,</span><span class="token string">'深圳'</span><span class="token punctuation">,</span><span class="token string">'成都'</span><span class="token punctuation">,</span><span class="token string">'武汉'</span><span class="token punctuation">,</span><span class="token string">'西安'</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"> </span>
<span class="line"><span class="token comment">// 导出slogan ———— 统一导出</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token punctuation">{</span>slogan<span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">// 导出getTel ———— 默认导出</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> getTel</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-4-导入数据" tabindex="-1"><a class="header-anchor" href="#_5-4-导入数据"><span>5.4 导入数据</span></a></h3>
<p>对于 ES6 模块化来说，使用何种导入方式，要根据导出方式决定。</p>
<ol>
<li>「导入全部」(通用)</li>
</ol>
<p>可以将模块中的所有导出内容整合到一个对象中</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> school <span class="token keyword">from</span> <span class="token string">'./school.js'</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="2">
<li>「命名导入」(对应导出方式：分别导出、统一导出)</li>
</ol>
<p>导出数据的模块</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">//分别导出</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">str</span><span class="token operator">:</span><span class="token string">'尚硅谷'</span><span class="token punctuation">}</span> </span>
<span class="line"><span class="token comment">//分别导出</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> slogan <span class="token operator">=</span> <span class="token string">'让天下没有难学的技术！'</span> </span>
<span class="line"> </span>
<span class="line"><span class="token keyword">function</span> <span class="token function">getTel</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token string">'010-56253825'</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"> </span>
<span class="line"><span class="token keyword">function</span> <span class="token function">getCities</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token string">'北京'</span><span class="token punctuation">,</span><span class="token string">'上海'</span><span class="token punctuation">,</span><span class="token string">'深圳'</span><span class="token punctuation">,</span><span class="token string">'成都'</span><span class="token punctuation">,</span><span class="token string">'武汉'</span><span class="token punctuation">,</span><span class="token string">'西安'</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//统一导出</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token punctuation">{</span> getTel <span class="token punctuation">}</span></span>
<span class="line">命名导入：</span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> name<span class="token punctuation">,</span>slogan<span class="token punctuation">,</span>getTel <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./school.js'</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过as重命名:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> name <span class="token keyword">as</span> myName<span class="token punctuation">,</span>slogan<span class="token punctuation">,</span>getTel <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./school.js'</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="3">
<li>「默认导入」(对应导出方式：默认导出)</li>
</ol>
<p>导出数据的模块</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token string">'张三'</span></span>
<span class="line"><span class="token keyword">const</span> motto <span class="token operator">=</span> <span class="token string">'走自己的路，让别人五路可走！'</span></span>
<span class="line"> </span>
<span class="line"><span class="token keyword">function</span> <span class="token function">getTel</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token string">'13877889900'</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"> </span>
<span class="line"><span class="token keyword">function</span> <span class="token function">getHobby</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token string">'抽烟'</span><span class="token punctuation">,</span><span class="token string">'喝酒'</span><span class="token punctuation">,</span><span class="token string">'烫头'</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"> </span>
<span class="line"><span class="token comment">//使用默认导出的方式，导出一个对象，对象中包含着数据</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span> name<span class="token punctuation">,</span>motto<span class="token punctuation">,</span>getTel <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">默认导入</span>
<span class="line"><span class="token comment">// 可以直接导出</span></span>
<span class="line"><span class="token keyword">import</span> qwe <span class="token keyword">from</span> <span class="token string">"./school.js"</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>qwe<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4">
<li>「命名导入 与 默认导入可以混合使用」</li>
</ol>
<p>导出数据的模块</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">//分别导出</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">str</span><span class="token operator">:</span><span class="token string">'尚硅谷'</span><span class="token punctuation">}</span> </span>
<span class="line"><span class="token comment">//分别导出</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> slogan <span class="token operator">=</span> <span class="token string">'让天下没有难学的技术！'</span></span>
<span class="line"> </span>
<span class="line"><span class="token keyword">function</span> <span class="token function">getTel</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token string">'010-56253825'</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"> </span>
<span class="line"><span class="token keyword">function</span> <span class="token function">getCities</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token string">'北京'</span><span class="token punctuation">,</span><span class="token string">'上海'</span><span class="token punctuation">,</span><span class="token string">'深圳'</span><span class="token punctuation">,</span><span class="token string">'成都'</span><span class="token punctuation">,</span><span class="token string">'武汉'</span><span class="token punctuation">,</span><span class="token string">'西安'</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"> </span>
<span class="line"><span class="token comment">//统一导出</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> getTel </span>
<span class="line">「命名导入」与「默认导入」混合使用，且默认导入的内容必须放在前方：</span>
<span class="line"><span class="token keyword">import</span> getTel<span class="token punctuation">,</span><span class="token punctuation">{</span>name<span class="token punctuation">,</span>slogan<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./school.js'</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5">
<li>「动态导入」(通用)</li>
</ol>
<p>html加入按钮</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token operator">&lt;</span>button id<span class="token operator">=</span><span class="token string">"btn"</span><span class="token operator">></span>导入模块<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>允许在运行时按需加载模块，返回值是一个 Promise。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> btn <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'btn'</span><span class="token punctuation">)</span></span>
<span class="line">btn<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">async</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'./school.js'</span><span class="token punctuation">)</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="6">
<li>import 可以不接收任何数据
例如只是让 mock.js 参与运行</li>
</ol>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token string">'./mock.js'</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>此时，我们感受到模块化确实解决了：①全局污染问题、②依赖混乱问题、③数据安全问题。</p>
<h3 id="_5-5-数据引用问题" tabindex="-1"><a class="header-anchor" href="#_5-5-数据引用问题"><span>5.5 数据引用问题</span></a></h3>
<p>思考1： 如下代码的输出结果是什么？（不要想太多，不涉及模块化相关知识）</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> sum <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        sum <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span> sum<span class="token punctuation">,</span> increment <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token punctuation">{</span> sum<span class="token punctuation">,</span> increment <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>sum<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//1</span></span>
<span class="line"><span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>sum<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//1</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>思考2：使用 CommonJS 规范，编写如下代码，输出结果是什么</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> sum <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    sum <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span> sum<span class="token punctuation">,</span> increment <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token punctuation">{</span>sum<span class="token punctuation">,</span>increment<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'./count.js'</span><span class="token punctuation">)</span></span>
<span class="line"> </span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>sum<span class="token punctuation">)</span>    <span class="token comment">//1</span></span>
<span class="line"><span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>sum<span class="token punctuation">)</span>    <span class="token comment">//1</span></span>
<span class="line">思考<span class="token number">3</span>：使用 <span class="token constant">ES6</span> 模块化规范，编写如下代码，输出结果是什么？</span>
<span class="line"><span class="token keyword">let</span> sum <span class="token operator">=</span> <span class="token number">1</span></span>
<span class="line"> </span>
<span class="line"><span class="token keyword">function</span> <span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">  sum <span class="token operator">+=</span> <span class="token number">1</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"> </span>
<span class="line"><span class="token keyword">export</span> <span class="token punctuation">{</span>sum<span class="token punctuation">,</span>increment<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// ES6的导入 所有数据公用一块内存空间  每次改变都会影响另一个</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span>sum<span class="token punctuation">,</span>increment<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./data.js'</span></span>
<span class="line"> </span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>sum<span class="token punctuation">)</span> <span class="token comment">//1</span></span>
<span class="line"><span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>sum<span class="token punctuation">)</span> <span class="token comment">//3</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用原则：导出的常量，务必用const定义</p>
<h2 id="_6-amd-模块化规范-了解" tabindex="-1"><a class="header-anchor" href="#_6-amd-模块化规范-了解"><span>6 AMD 模块化规范（了解）</span></a></h2>
<h3 id="_6-1-准备环境" tabindex="-1"><a class="header-anchor" href="#_6-1-准备环境"><span>6.1 准备环境</span></a></h3>
<p>第一步：准备文件结构：</p>
<p>文件说明：</p>
<ol>
<li>js 文件夹中存放业务逻辑代码，main.js用于汇总各模块。</li>
<li>libs 中存放的是第三方库，例如必须要用的require.js。</li>
</ol>
<p>可进入这里面搜索</p>
<p>https://www.jsdelivr.com/</p>
<p>第二步：在index.html中配置main.js与require.js</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token operator">&lt;</span>script data<span class="token operator">-</span>main<span class="token operator">=</span><span class="token string">"./js/main.js"</span> src<span class="token operator">=</span><span class="token string">"./libs/require.js"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>第三步：在main.js中编写模块配置对象，注册所有模块。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">/*AMD_require.js模块化的入口文件，要编写配置对象，并且有固定的写法*/</span></span>
<span class="line">requirejs<span class="token punctuation">.</span><span class="token function">config</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">//基本路径</span></span>
<span class="line">    <span class="token literal-property property">baseUrl</span><span class="token operator">:</span> <span class="token string">"./js"</span><span class="token punctuation">,</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">//模块标识名与模块路径映射</span></span>
<span class="line">    <span class="token literal-property property">paths</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">school</span><span class="token operator">:</span> <span class="token string">"school"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">student</span><span class="token operator">:</span> <span class="token string">"student"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">welcome</span><span class="token operator">:</span> <span class="token string">"welcome"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-2-导出数据" tabindex="-1"><a class="header-anchor" href="#_6-2-导出数据"><span>6.2 导出数据</span></a></h3>
<p>AMD 规范使用define函数来定义模块和导出数据</p>
<p>student.js</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token function">define</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token string">'张三'</span></span>
<span class="line">    <span class="token keyword">const</span> motto <span class="token operator">=</span> <span class="token string">'走自己的路，让别人五路可走！'</span></span>
<span class="line">   </span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">getTel</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">return</span> <span class="token string">'13877889900'</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">   </span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">getHobby</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token string">'抽烟'</span><span class="token punctuation">,</span><span class="token string">'喝酒'</span><span class="token punctuation">,</span><span class="token string">'烫头'</span><span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token comment">// 导出数据</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span>name<span class="token punctuation">,</span>motto<span class="token punctuation">,</span>getTel<span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-3-导入数据" tabindex="-1"><a class="header-anchor" href="#_6-3-导入数据"><span>6.3 导入数据</span></a></h3>
<p>如需导入数据，则需要define传入两个参数，分别为：依赖项数组、回调函数</p>
<p>school.js</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// ['welcome']表示当前模块要依赖的模块名字</span></span>
<span class="line"><span class="token comment">// 回调接收到的welcome是模块导出的数据</span></span>
<span class="line"> </span>
<span class="line"><span class="token function">define</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'welcome'</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">welcome</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> name <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">str</span><span class="token operator">:</span><span class="token string">'尚硅谷'</span><span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">const</span> slogan <span class="token operator">=</span> <span class="token string">'让天下没有难学的技术！'</span><span class="token operator">+</span> welcome</span>
<span class="line">   </span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">getTel</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">return</span> <span class="token string">'010-56253825'</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">   </span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">getCities</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token string">'北京'</span><span class="token punctuation">,</span><span class="token string">'上海'</span><span class="token punctuation">,</span><span class="token string">'深圳'</span><span class="token punctuation">,</span><span class="token string">'成都'</span><span class="token punctuation">,</span><span class="token string">'武汉'</span><span class="token punctuation">,</span><span class="token string">'西安'</span><span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token comment">// 导出数据</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span>name<span class="token punctuation">,</span>slogan<span class="token punctuation">,</span>getTel<span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>welcome.js</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"欢迎使用require.js"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_6-4-使用模块" tabindex="-1"><a class="header-anchor" href="#_6-4-使用模块"><span>6.4 使用模块</span></a></h3>
<p>main.js</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token function">requirejs</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'school'</span><span class="token punctuation">,</span><span class="token string">'student'</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">school<span class="token punctuation">,</span>student</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'main'</span><span class="token punctuation">,</span>school<span class="token punctuation">)</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'main'</span><span class="token punctuation">,</span>student<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-cmd-模块化规范-了解" tabindex="-1"><a class="header-anchor" href="#_7-cmd-模块化规范-了解"><span>7 CMD 模块化规范（了解）</span></a></h2>
<h3 id="_7-1-环境准备" tabindex="-1"><a class="header-anchor" href="#_7-1-环境准备"><span>7.1 环境准备</span></a></h3>
<p>第一步：准备环境</p>
<p>文件说明：</p>
<ol>
<li>js 文件夹中存放业务逻辑代码，main.js用于汇总各模块。</li>
<li>libs 中存放的是第三方库，例如必须要用的sea.js。</li>
</ol>
<p>https://www.jsdelivr.com/?query=sea.js</p>
<p>第二步：在index.html中配置main.js与sea.js</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text/javascript<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>./libs/sea.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"> </span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text/javascript<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">  seajs<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">'./modules/main.js'</span><span class="token punctuation">)</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-2-导出数据" tabindex="-1"><a class="header-anchor" href="#_7-2-导出数据"><span>7.2 导出数据</span></a></h3>
<p>CMD 中同样使用define函数定义模块并导出数据</p>
<p>student.js</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">/* </span>
<span class="line">  收到的三个参数分别为：require、exports、module</span>
<span class="line">    1. require用于引入其他模块</span>
<span class="line">    2. exports、module用于导出数据</span>
<span class="line">*/</span></span>
<span class="line"><span class="token function">define</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">require<span class="token punctuation">,</span>exports<span class="token punctuation">,</span>module</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token string">'尚硅谷'</span></span>
<span class="line">  <span class="token keyword">const</span> slogan <span class="token operator">=</span> <span class="token string">'让天下没有难学的技术！'</span></span>
<span class="line"> </span>
<span class="line">  <span class="token keyword">function</span> <span class="token function">getTel</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token string">'010-56253825'</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"> </span>
<span class="line">  <span class="token keyword">function</span> <span class="token function">getCities</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token string">'北京'</span><span class="token punctuation">,</span><span class="token string">'上海'</span><span class="token punctuation">,</span><span class="token string">'深圳'</span><span class="token punctuation">,</span><span class="token string">'成都'</span><span class="token punctuation">,</span><span class="token string">'武汉'</span><span class="token punctuation">,</span><span class="token string">'西安'</span><span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token comment">// 导出数据</span></span>
<span class="line">  module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>name<span class="token punctuation">,</span>slogan<span class="token punctuation">,</span>getTel<span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-3-导入数据" tabindex="-1"><a class="header-anchor" href="#_7-3-导入数据"><span>7.3 导入数据</span></a></h3>
<p>CMD 规范中使用收到的require参数进行模块导入</p>
<p>school.js</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token function">define</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">require<span class="token punctuation">,</span>exports<span class="token punctuation">,</span>module</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token string">'张三'</span></span>
<span class="line">  <span class="token keyword">const</span> motto <span class="token operator">=</span> <span class="token string">'相信明天会更好！'</span></span>
<span class="line"> </span>
<span class="line">  <span class="token comment">// 引入welcome模块</span></span>
<span class="line">  <span class="token keyword">const</span> welcome <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'./welcome'</span><span class="token punctuation">)</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>welcome<span class="token punctuation">)</span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">function</span> <span class="token function">getTel</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token string">'13877889900'</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">function</span> <span class="token function">getHobby</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token string">'抽烟'</span><span class="token punctuation">,</span><span class="token string">'喝酒'</span><span class="token punctuation">,</span><span class="token string">'烫头'</span><span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"> </span>
<span class="line">  exports<span class="token punctuation">.</span>name <span class="token operator">=</span> name</span>
<span class="line">  exports<span class="token punctuation">.</span>motto <span class="token operator">=</span> motto</span>
<span class="line">  exports<span class="token punctuation">.</span>getTel <span class="token operator">=</span> getTel</span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>welcome.js</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"欢迎使用sea.js"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_7-4-使用模块" tabindex="-1"><a class="header-anchor" href="#_7-4-使用模块"><span>7.4 使用模块</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token function">define</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">require</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> school <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'./school'</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token keyword">const</span> student <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'./student'</span><span class="token punctuation">)</span></span>
<span class="line"> </span>
<span class="line">  <span class="token comment">// 使用模块</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>school<span class="token punctuation">)</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>student<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


