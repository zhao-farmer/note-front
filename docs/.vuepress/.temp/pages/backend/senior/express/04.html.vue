<template><div><h1 id="四、中间件" tabindex="-1"><a class="header-anchor" href="#四、中间件"><span>四、中间件</span></a></h1>
<p>Express 是一个自身功能极简，完全是由路由和中间件构成一个的 web 开发框架：从本质上来说，一个 Express 应用就是在调用各种中间件。</p>
<p>中间件（Middleware） 是一个函数，它可以访问请求对象（request object (req)）, 响应对象（response object (res)）, 和 web 应用中处于请求-响应循环流程中的中间件，一般被命名为 next 的变量。</p>
<ul>
<li>
<p>中间件的功能包括：</p>
<ul>
<li>执行任何代码。</li>
<li>修改请求和响应对象。</li>
<li>终结请求-响应循环。</li>
<li>调用堆栈中的下一个中间件。</li>
</ul>
<p>如果当前中间件没有终结请求-响应循环，则必须调用 next() 方法将控制权交给下一个中间件，否则请求就会挂起。</p>
</li>
<li>
<p>Express 应用可使用如下几种中间件：</p>
<ul>
<li>应用级中间件</li>
<li>路由级中间件</li>
<li>错误处理中间件</li>
<li>内置中间件</li>
<li>第三方中间件</li>
</ul>
<p>使用可选则挂载路径，可在应用级别或路由级别装载中间件。另外，你还可以同时装在一系列中间件函数，从而在一个挂载点上创建一个子中间件栈。</p>
</li>
</ul>
<blockquote>
<p>注意: app.use 应用中间件必须在路由前方</p>
</blockquote>
<h2 id="_4-1-应用级中间件" tabindex="-1"><a class="header-anchor" href="#_4-1-应用级中间件"><span>4.1 应用级中间件</span></a></h2>
<p>应用级中间件绑定到 app 对象 使用 app.use() 和 app.METHOD()， 其中， METHOD 是需要处理的 HTTP 请求的方法，例如 GET, PUT, POST 等等，全部小写。例如：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 没有挂载路径的中间件，应用的每个请求都会执行该中间件</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Time:'</span><span class="token punctuation">,</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">具体应用</span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">func1</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span>res<span class="token punctuation">,</span>next</span><span class="token punctuation">)</span> <span class="token operator">=></span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 验证用户token过期，cookie过期</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'验证token'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">const</span> isValid <span class="token operator">=</span> <span class="token boolean">true</span></span>
<span class="line">    <span class="token keyword">if</span><span class="token punctuation">(</span>isValid<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        res<span class="token punctuation">.</span>kerwin <span class="token operator">=</span> <span class="token string">'这是func1计算的结果'</span></span>
<span class="line">        <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// 返回结果</span></span>
<span class="line">        res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">'error'</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">// 全局设置应用中间件</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>func1<span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// 可以加参数限制</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">'home'</span><span class="token punctuation">,</span>func1<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-2-路由级中间件" tabindex="-1"><a class="header-anchor" href="#_4-2-路由级中间件"><span>4.2 路由级中间件</span></a></h2>
<p>路由级中间件和应用级中间件一样，只是它绑定的对象为 express.Router()。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> router <span class="token operator">=</span> express<span class="token punctuation">.</span><span class="token function">Router</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">var</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">var</span> router <span class="token operator">=</span> express<span class="token punctuation">.</span><span class="token function">Router</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 没有挂载路径的中间件，通过该路由的每个请求都会执行该中间件</span></span>
<span class="line">router<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Time:'</span><span class="token punctuation">,</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 一个中间件栈，显示任何指向 /user/:id 的 HTTP 请求的信息</span></span>
<span class="line">router<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">'/user/:id'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Request URL:'</span><span class="token punctuation">,</span> req<span class="token punctuation">.</span>originalUrl<span class="token punctuation">)</span></span>
<span class="line">  <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Request Type:'</span><span class="token punctuation">,</span> req<span class="token punctuation">.</span>method<span class="token punctuation">)</span></span>
<span class="line">  <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 一个中间件栈，处理指向 /user/:id 的 GET 请求</span></span>
<span class="line">router<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/user/:id'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 如果 user id 为 0, 跳到下一个路由</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>req<span class="token punctuation">.</span>params<span class="token punctuation">.</span>id <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token string">'route'</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token comment">// 负责将控制权交给栈中下一个中间件</span></span>
<span class="line">  <span class="token keyword">else</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 渲染常规页面</span></span>
<span class="line">  res<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token string">'regular'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 处理 /user/:id， 渲染一个特殊页面</span></span>
<span class="line">router<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/user/:id'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>params<span class="token punctuation">.</span>id<span class="token punctuation">)</span></span>
<span class="line">  res<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token string">'special'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 将路由挂载至应用</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">'/'</span><span class="token punctuation">,</span> router<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>路由组件挂载可以多种方式</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 默认放的路径下</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">"/"</span><span class="token punctuation">,</span>IndexRouter<span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// 也可以加路径参数</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">"/api"</span><span class="token punctuation">,</span>IndexRouter<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 直接写上对应的路由类型</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">"/home"</span><span class="token punctuation">,</span>HomeRouter<span class="token punctuation">)</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">"/login"</span><span class="token punctuation">,</span>LoginRouter<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-3-错误处理中间件" tabindex="-1"><a class="header-anchor" href="#_4-3-错误处理中间件"><span>4.3 错误处理中间件</span></a></h2>
<p>错误处理中间件和其他中间件定义类似，只是要使用 4 个参数，而不是 3 个，其签名如下： (err, req, res, next)。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>err<span class="token punctuation">.</span>stack<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">"Something broke!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-4-内置的中间件" tabindex="-1"><a class="header-anchor" href="#_4-4-内置的中间件"><span>4.4 内置的中间件</span></a></h2>
<p>express.static 是 Express 唯一内置的中间件。它基于 serve-static，负责在 Express 应用中提托管静态资源。每个应用可有多个静态目录。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>express<span class="token punctuation">.</span><span class="token function">static</span><span class="token punctuation">(</span><span class="token string">'public'</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>express<span class="token punctuation">.</span><span class="token function">static</span><span class="token punctuation">(</span><span class="token string">'uploads'</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>express<span class="token punctuation">.</span><span class="token function">static</span><span class="token punctuation">(</span><span class="token string">'files'</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-5-第三方中间件" tabindex="-1"><a class="header-anchor" href="#_4-5-第三方中间件"><span>4.5 第三方中间件</span></a></h2>
<p>安装所需功能的 node 模块，并在应用中加载，可以在应用级加载，也可以在路由级加载。
下面的例子安装并加载了一个解析 cookie 的中间件： cookie-parser</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> <span class="token function">install</span> cookie-parser</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'express'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">var</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">var</span> cookieParser <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'cookie-parser'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 加载用于解析 cookie 的中间件</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">cookieParser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


