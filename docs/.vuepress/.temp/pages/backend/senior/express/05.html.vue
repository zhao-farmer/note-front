<template><div><h1 id="五、获取请求参数" tabindex="-1"><a class="header-anchor" href="#五、获取请求参数"><span>五、获取请求参数</span></a></h1>
<h2 id="_5-1-req-query" tabindex="-1"><a class="header-anchor" href="#_5-1-req-query"><span>5.1 req.query</span></a></h2>
<p>req.query()可以用来获取接口请求中拼接在链接&quot;?&quot;后边的参数，主要用于get请求，post请求也适用。 req.query()被express原生支持，并且会自动将参数转换为对象形式返回。</p>
<ul>
<li>
<p>请求： <code v-pre>http://localhost:5050/server?p=user&amp;q=password</code></p>
</li>
<li>
<p>express接口:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'express'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">let</span> server <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">server<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/server'</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span>resp</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>query<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    resp<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">server<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">5050</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'服务器已就绪'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>请求后得到的结果：</p>
<p><img src="/backend/senior/express/001.png" alt=""></p>
</li>
</ul>
<h2 id="_5-2-req-params" tabindex="-1"><a class="header-anchor" href="#_5-2-req-params"><span>5.2 req.params</span></a></h2>
<p>req.params()有些特殊，它适用于在url链接上传递数据参数，需要后台接口用==:变量名==的写法发起请求。</p>
<ul>
<li>
<p>请求：</p>
<p><code v-pre>http://localhost:5050/nums/1000</code></p>
</li>
<li>
<p>express接口:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'express'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">let</span> server <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">server<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/nums/:num'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> resp</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>params<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">resp<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">server<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">5050</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span><span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'服务器已就绪'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>请求后得到的结果：</p>
<p><img src="/backend/senior/express/002.png" alt=""></p>
</li>
</ul>
<p>3 req.body</p>
<p>req.body()被原生express所支持,可以直接使用req.body()获取post请求的表单数据。</p>
<ul>
<li>
<p>请求:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token function">fecth</span><span class="token punctuation">(</span><span class="token string">'http://localhost:5050/people'</span><span class="token punctuation">,</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">'post'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token string-property property">'Content-Type'</span><span class="token operator">:</span> <span class="token string">'application/json'</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">body</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'zhangsan'</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>express接口：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'express'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> server <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//配置解析post参数的-不用下载第三方 ,内置</span></span>
<span class="line"><span class="token comment">//解析post参数-(url-ky格式) username=kerwin&amp;password=1234</span></span>
<span class="line"><span class="token comment">// app.use(express.urlencoded({ extended: false }));</span></span>
<span class="line"><span class="token comment">//解析post参数-(json字符串) {name:"",age:100}</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>express<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">server<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">'/people'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> resp</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>body<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">resp<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">server<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">5050</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'服务器已就绪'</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>请求后得到的结果：</p>
<pre><code>  ![](/backend/senior/express/001.png)
</code></pre>
</li>
</ul>
<h2 id="_5-3-response对象" tabindex="-1"><a class="header-anchor" href="#_5-3-response对象"><span>5.3 response对象</span></a></h2>
<table>
<thead>
<tr>
<th>方法</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>res.download()</td>
<td>提示要下载的文件。</td>
</tr>
<tr>
<td>res.end（）</td>
<td>结束响应过程。</td>
</tr>
<tr>
<td>res.json（）</td>
<td>发送JSON响应。</td>
</tr>
<tr>
<td>res.jsonp（）</td>
<td>发送带有JSONP支持的JSON响应。</td>
</tr>
<tr>
<td>res.redirect（）</td>
<td>重定向请求。</td>
</tr>
<tr>
<td>res.render（）</td>
<td>渲染视图模板。</td>
</tr>
<tr>
<td>res.send（）</td>
<td>发送各种类型的响应。</td>
</tr>
<tr>
<td>res.sendFile（）</td>
<td>将文件作为八位字节流发送。</td>
</tr>
<tr>
<td>res.sendStatus（）</td>
<td>设置响应状态代码，并将其字符串表示形式发送为响应正文。</td>
</tr>
</tbody>
</table>
<ol>
<li>
<p>response.redirect方法</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">response<span class="token punctuation">.</span><span class="token function">redirect</span><span class="token punctuation">(</span><span class="token string">"/hello/anime"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">response<span class="token punctuation">.</span><span class="token function">redirect</span><span class="token punctuation">(</span><span class="token string">"http://www.example.com"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">response<span class="token punctuation">.</span><span class="token function">redirect</span><span class="token punctuation">(</span><span class="token number">301</span><span class="token punctuation">,</span> <span class="token string">"http://www.example.com"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> </span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>response.sendFile方法</p>
<p>response.sendFile方法用于发送文件</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">response<span class="token punctuation">.</span><span class="token function">sendFile</span><span class="token punctuation">(</span><span class="token string">"/path/to/anime.mp4"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p>response.render方法</p>
<p>response.render方法用于渲染网页模板。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">//  使用render方法，将message变量传入index模板，渲染成HTML网页</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"/"</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">request<span class="token punctuation">,</span> response</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    response<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token string">"index"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">"Hello World"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
</div></template>


