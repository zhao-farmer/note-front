<template><div><h1 id="七、express服务端渲染-模板引擎" tabindex="-1"><a class="header-anchor" href="#七、express服务端渲染-模板引擎"><span>七、Express服务端渲染（模板引擎）</span></a></h1>
<p>在Web开发中，模板引擎是一个不可或缺的工具，它允许开发者将HTML模板与JavaScript代码分离，使得页面的渲染更加灵活和高效。Express作为Node.js的流行Web框架，支持多种模板引擎，其中EJS（Embedded JavaScript templating）因其简洁和易用性而广受欢迎。本文将深入解析Express中EJS模板引擎的原理，并通过代码示例展示如何使用EJS来渲染页面。</p>
<h2 id="_7-1-ejs模板引擎的基本原理" tabindex="-1"><a class="header-anchor" href="#_7-1-ejs模板引擎的基本原理"><span>7.1 EJS模板引擎的基本原理</span></a></h2>
<p>EJS是一种简单的模板语言，它允许开发者将JavaScript代码嵌入到HTML模板中。当Express应用接收到一个请求并需要渲染一个页面时，它会查找对应的EJS模板文件，执行其中的JavaScript代码，并将结果插入到HTML中，最终生成完整的HTML页面发送给客户端。</p>
<p>EJS模板使用特殊的标签来标记需要插入JavaScript代码的位置。例如，&lt;% %&gt;用于执行其中的JavaScript代码，&lt;%= %&gt;用于输出表达式的结果到模板中，而&lt;%- %&gt;则用于输出HTML转义的内容。</p>
<h2 id="_7-2-在express中使用ejs" tabindex="-1"><a class="header-anchor" href="#_7-2-在express中使用ejs"><span>7.2 在Express中使用EJS</span></a></h2>
<p>要在Express应用中使用EJS模板引擎，首先需要安装EJS并通过app.set()方法将其设置为应用的模板引擎。然后，可以通过res.render()方法来渲染EJS模板并发送响应给客户端。</p>
<ol>
<li>安装EJS</li>
</ol>
<p>在Express项目中，通过npm安装EJS模板引擎：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">npm install ejs</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="2">
<li>设置EJS为模板引擎</li>
</ol>
<p>在Express应用中，使用app.set()方法将EJS设置为模板引擎：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'express'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> ejs<span class="token operator">=</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"ejs"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//引用ejs</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'views'</span><span class="token punctuation">,</span><span class="token string">"./views"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//设置视图的对应目录</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">"view engine"</span><span class="token punctuation">,</span><span class="token string">"ejs"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>       <span class="token comment">//设置默认的模板引擎</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>创建EJS模板</li>
</ol>
<p>在项目的views目录下创建一个EJS模板文件，例如index.ejs：</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>&lt;%= title %><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>&lt;%= message %><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4">
<li>渲染EJS模板</li>
</ol>
<p>在路由处理函数中，使用res.render()方法来渲染EJS模板并发送响应：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    res<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token string">'index'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'Express EJS'</span><span class="token punctuation">,</span> <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">'Hello, EJS!'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当访问根路由时，Express会渲染index.ejs模板，并将title和message变量的值插入到模板中，最终生成完整的HTML页面发送给客户端。</p>
<h2 id="_7-3-ejs的高级用法" tabindex="-1"><a class="header-anchor" href="#_7-3-ejs的高级用法"><span>7.3 EJS的高级用法</span></a></h2>
<p>EJS不仅支持基本的变量替换和条件判断，还支持循环、包含其他模板、自定义函数等高级功能。这些功能使得EJS在处理复杂页面时更加灵活和强大。</p>
<ol>
<li>基础类型</li>
</ol>
<p>app.js文件：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> express<span class="token operator">=</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"express"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> ejs<span class="token operator">=</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"ejs"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> fs<span class="token operator">=</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"fs"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">var</span> app<span class="token operator">=</span><span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//引用ejs</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'views'</span><span class="token punctuation">,</span><span class="token string">"./views"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//设置视图的对应目录</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">"view engine"</span><span class="token punctuation">,</span><span class="token string">"ejs"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>       <span class="token comment">//设置默认的模板引擎</span></span>
<span class="line"></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"/"</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span>res</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    res<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token string">"index"</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"&lt;h4>express&lt;/h4>"</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">//会去找views目录下的index.ejs文件</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">8080</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ejs文件：</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>utf-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line">        &lt;% for(var i=0;i&lt;10;i++){ %></span>
<span class="line">            &lt;%= i %></span>
<span class="line">        &lt;% } %></span>
<span class="line">        <span class="token comment">&lt;!-- 获取变量 --></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>datas<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>获取变量：<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span></span>
<span class="line">            &lt;%- title %></span>
<span class="line">            &lt;%= title %></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由此可以知道：</p>
<ul>
<li><code v-pre>&lt;%xxx %&gt;</code>：里面写入的是js语法，</li>
<li><code v-pre>&lt;%=xxx %&gt;</code>：里面是服务端发送给ejs模板转义后的变量，输出为原数据</li>
<li><code v-pre>&lt;%-xxx %&gt;</code>：里面也是服务端发送给ejs模板后的变量，解析html</li>
</ul>
<p>如果写html的注释，那样会在源码中显示，下面这种ejs注释不会在源码中显示</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line">&lt;%# 注释标签，不执行、不输出内容 %></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>同理res.render()函数也是支持回调的：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">res<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token string">'user'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Tobi'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> html</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>html<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样我们即可将看到html的内容。</p>
<ol start="2">
<li>关于res.redirect()</li>
</ol>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'express'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> router <span class="token operator">=</span> express<span class="token punctuation">.</span><span class="token function">Router</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">router<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  res<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token string">'login'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">isShow</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">error</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">router<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">'/'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>req<span class="token punctuation">.</span>body<span class="token punctuation">.</span>username <span class="token operator">===</span> <span class="token string">'ds'</span> <span class="token operator">&amp;&amp;</span> req<span class="token punctuation">.</span>body<span class="token punctuation">.</span>password <span class="token operator">===</span> <span class="token string">'123'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'登录成功'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">// res.send("成功")</span></span>
<span class="line">    <span class="token comment">// 重定向到home</span></span>
<span class="line">    res<span class="token punctuation">.</span><span class="token function">redirect</span><span class="token punctuation">(</span><span class="token string">'/index'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'登录失败'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    res<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token string">'login'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">error</span><span class="token operator">:</span> <span class="token string">'用户名密码不匹配'</span><span class="token punctuation">,</span> <span class="token literal-property property">isShow</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> router<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>
<p>ejs 标签各种含义</p>
<ul>
<li>
<p><code v-pre>&lt;%</code>:'脚本'标签，用于流程控制，无输出。</p>
</li>
<li>
<p><code v-pre>&lt;%_</code>: 删除其前面的空格符</p>
</li>
<li>
<p><code v-pre>&lt;%=</code>: 输出数据到模板（输出是转义 HTML标签）</p>
</li>
<li>
<p><code v-pre>&lt;%-</code>: 输出非转义的数据到模板</p>
</li>
<li>
<p><code v-pre>&lt;%#</code>: 注释标签，不执行、不输出内容</p>
</li>
<li>
<p><code v-pre>&lt;%%</code>: 输出字符串 <code v-pre>&lt;%</code></p>
</li>
<li>
<p><code v-pre>%&gt;</code>: 一般结束标签</p>
</li>
<li>
<p><code v-pre>-%&gt;</code>: 删除紧随其后的换行符</p>
</li>
<li>
<p><code v-pre>_%&gt;</code>: 将结束标签后面的空格符删除</p>
</li>
<li>
<p><code v-pre>&lt;% %&gt;</code>: 流程控制标签( 写的是if else，for)</p>
</li>
<li>
<p><code v-pre>&lt;%=%&gt;</code>: 输出标签(原文输出HTML标签)</p>
</li>
<li>
<p><code v-pre>&lt;%- %&gt;</code>: 输出标签(HTML会被浏览器解析)</p>
</li>
<li>
<p><code v-pre>&lt;%# %&gt;</code>: 注释标签</p>
</li>
<li>
<p><code v-pre>&lt;%- include('user/show',{user: user})%&gt;</code> 导入公共的模板内容</p>
</li>
</ul>
</li>
<li>
<p>导入公共模板样式</p>
</li>
</ol>
<p>header.ejs</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token operator">&lt;</span>header<span class="token operator">></span></span>
<span class="line">    我是公共样式</span>
<span class="line">    <span class="token operator">&lt;</span>div<span class="token operator">></span></span>
<span class="line">      <span class="token operator">&lt;</span><span class="token operator">%</span> <span class="token keyword">if</span><span class="token punctuation">(</span>isShowSchool<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token operator">%</span><span class="token operator">></span></span>
<span class="line">      <span class="token operator">&lt;</span>h1<span class="token operator">></span>校园招聘<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span></span>
<span class="line">      <span class="token operator">&lt;</span><span class="token operator">%</span> <span class="token punctuation">}</span> <span class="token operator">%</span><span class="token operator">></span></span>
<span class="line">    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>header<span class="token operator">></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>index.ejs</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line">&lt;%- include("./header.ejs",{ isShowSchool:true }) %> index &lt;%# 我的注释 %></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></div></template>


