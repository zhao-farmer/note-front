<template><div><h1 id="三、express-方法" tabindex="-1"><a class="header-anchor" href="#三、express-方法"><span>三、Express 方法</span></a></h1>
<h2 id="_3-1-express路由简介" tabindex="-1"><a class="header-anchor" href="#_3-1-express路由简介"><span>3.1 Express路由简介</span></a></h2>
<p>路由表示应用程序端点 (URI) 的定义以及响应客户端请求的方式。它包含一个请求方时（methods）、路径（path）和路由匹配时的函数（callback）;</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">app<span class="token punctuation">.</span><span class="token function">methods</span><span class="token punctuation">(</span>path<span class="token punctuation">,</span> callback<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="_3-2-express路由方法" tabindex="-1"><a class="header-anchor" href="#_3-2-express路由方法"><span>3.2 Express路由方法</span></a></h2>
<p>Express方法源于 HTTP 方法之一，附加到 express 类的实例。它可请求的方法包括：</p>
<p>get、post、put、head、delete、options、trace、copy、lock、mkcol、move、purge、propfind、proppatch、unlock、report、mkactivity、checkout、merge、m-search、notify、subscribe、unsubscribe、patch、search 和 connect。</p>
<p>路由是指如何定义应用的端点（URIs）以及如何响应客户端的请求。</p>
<blockquote>
<p>路由是由一个 URI、HTTP 请求（GET、POST等）和若干个句柄组成，它的结构如下： app.METHOD(path, [callback...], callback)， app 是 express 对象的一个实例， METHOD 是一个 HTTP 请求方法， path 是服务器上的路径， callback 是当路由匹配时要执行的函数。</p>
</blockquote>
<p>下面是一个基本的路由示例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'express'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">var</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// respond with "hello world" when a GET request is made to the homepage</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">//写完一个send，后面所有跟路由有关的都不会执行</span></span>
<span class="line">  <span class="token comment">//会自动响应对应的数据类型</span></span>
<span class="line">  <span class="token comment">//   res.send([1, 2, 3]);</span></span>
<span class="line">  <span class="token comment">//   res.send({ ok: 1 });</span></span>
<span class="line">  <span class="token comment">//   res.json({ ok: 1 });</span></span>
<span class="line">   <span class="token comment">// 使用混合使用函数数组处理时如果前面有res.send();那么后面和路由处理相关代码都不生效</span></span>
<span class="line">  res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">'hello world'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string"></span>
<span class="line">        &lt;html></span>
<span class="line">            &lt;h1>hello world&lt;/h2></span>
<span class="line">        &lt;/html></span>
<span class="line">    </span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>路由路径和请求方法一起定义了请求的端点，它可以是字符串、字符串模式或者正则表达式。</p>
<h2 id="_3-3-all方法和http动词方法" tabindex="-1"><a class="header-anchor" href="#_3-3-all方法和http动词方法"><span>3.3 all方法和HTTP动词方法</span></a></h2>
<p>针对不同的请求，Express提供了use方法的一些别名。比如，上面代码也可以用别名的形式来写</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"express"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">var</span> http <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"http"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">var</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token string">"*"</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">request<span class="token punctuation">,</span> response<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  response<span class="token punctuation">.</span><span class="token function">writeHead</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token string-property property">"Content-Type"</span><span class="token operator">:</span> <span class="token string">"text/plain"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"/"</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">request<span class="token punctuation">,</span> response</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  response<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">"Welcome to the homepage!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"/about"</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">request<span class="token punctuation">,</span> response</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  response<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">"Welcome to the about page!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"*"</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">request<span class="token punctuation">,</span> response</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  response<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">"404!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">http<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span>app<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">1337</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>上面代码的all方法表示，所有请求都必须通过该中间件，参数中的“*”表示对所有路径有效。get方法则是只有GET动词的HTTP请求通过该中间件，它的第一个参数是请求的路径。由于get方法的回调函数没有调用next方法，所以只要有一个中间件被调用了，后面的中间件就不会再被调用了</li>
<li>除了get方法以外，Express还提供post、put、delete方法，即HTTP动词都是Express的方法</li>
<li>这些方法的第一个参数，都是请求的路径。除了绝对匹配以外，Express允许模式匹配</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"/hello/:who"</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">"Hello, "</span> <span class="token operator">+</span> req<span class="token punctuation">.</span>params<span class="token punctuation">.</span>who <span class="token operator">+</span> <span class="token string">"."</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


