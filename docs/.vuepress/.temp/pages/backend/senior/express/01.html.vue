<template><div><h1 id="一、express介绍与安装" tabindex="-1"><a class="header-anchor" href="#一、express介绍与安装"><span>一、Express介绍与安装</span></a></h1>
<h2 id="_1-1-什么是-express" tabindex="-1"><a class="header-anchor" href="#_1-1-什么是-express"><span>1.1 什么是 Express？</span></a></h2>
<p>Express 是一个基于 Node.js 的轻量级、灵活的 web 应用框架。它提供了一组强大的功能，帮助开发者快速构建 Web 应用和 API。Express 的设计理念是提供一组最小的核心功能，同时通过中间件和路由机制，使得开发者可以根据需要扩展其功能。自 2010 年由 TJ Holowaychuk 创建以来，Express 已经成为最流行的 Node.js 框架之一，广泛应用于各种规模的应用开发。</p>
<h2 id="_1-2-express-的特点" tabindex="-1"><a class="header-anchor" href="#_1-2-express-的特点"><span>1.2 Express 的特点</span></a></h2>
<ol>
<li>轻量级：
<ul>
<li>核心功能精简：Express 的核心功能非常精简，只提供最基本的功能，如路由、中间件、模板引擎等。</li>
<li>高性能：由于核心功能的精简，Express 的性能非常高，适合处理高并发请求。</li>
</ul>
</li>
<li>灵活性：
<ul>
<li>中间件机制：Express 使用中间件来处理请求和响应，中间件可以是函数、路由处理程序或其他中间件。这种机制使得开发者可以轻松地添加和组合不同的功能。</li>
<li>可扩展性：Express 本身并不强制使用特定的数据库、模板引擎或其他工具，开发者可以根据项目需求自由选择合适的工具和库。</li>
</ul>
</li>
<li>路由系统：
<ul>
<li>简洁的路由定义：Express 提供了简洁的路由定义语法，使得开发者可以轻松地定义和管理路由。</li>
<li>RESTful API 支持：Express 非常适合构建 RESTful API，提供了丰富的 HTTP 方法和路径参数支持。</li>
</ul>
</li>
<li>模板引擎：
<ul>
<li>多种模板引擎支持：Express 支持多种模板引擎，如 EJS、Pug、Handlebars 等，开发者可以根据项目需求选择合适的模板引擎。</li>
<li>视图渲染：Express 提供了方便的视图渲染功能，可以将数据传递给模板引擎，生成 HTML 页面。</li>
</ul>
</li>
<li>错误处理：
<ul>
<li>内置错误处理：Express 提供了内置的错误处理机制，可以捕获和处理未捕获的异常。</li>
<li>自定义错误处理：开发者可以定义自己的错误处理中间件，处理特定类型的错误。</li>
</ul>
</li>
<li>社区支持：
<ul>
<li>丰富的资源：Express 拥有庞大的开发者社区，提供了大量的文档、教程、插件和第三方库。</li>
<li>活跃的生态系统：Express 生态系统非常活跃，不断有新的工具和库涌现，帮助开发者解决各种问题。</li>
</ul>
</li>
</ol>
<h2 id="_1-3-express-的作用" tabindex="-1"><a class="header-anchor" href="#_1-3-express-的作用"><span>1.3 Express 的作用</span></a></h2>
<ol>
<li>快速开发 Web 应用
<ul>
<li>简化开发流程：Express 提供了丰富的功能和工具，使得开发者可以快速搭建和开发 Web 应用。</li>
<li>减少重复工作：通过使用 Express 的路由、中间件和模板引擎，开发者可以避免重复编写常见的功能代码，专注于业务逻辑的实现。</li>
</ul>
</li>
<li>构建 RESTful API
<ul>
<li>支持多种 HTTP 方法：Express 提供了对 GET、POST、PUT、DELETE 等 HTTP 方法的支持，非常适合构建 RESTful API。</li>
<li>路径参数和查询参数：Express 支持路径参数和查询参数，使得开发者可以轻松地处理复杂的 URL 路径和查询条件。</li>
</ul>
</li>
<li>处理静态文件
<ul>
<li>静态文件服务器：Express 内置了静态文件服务器功能，可以轻松地服务于静态文件，如 HTML、CSS、JavaScript 等。</li>
<li>缓存控制：通过配置中间件，可以实现静态文件的缓存控制，提高性能。</li>
</ul>
</li>
<li>中间件机制
<ul>
<li>请求处理：中间件可以处理请求，执行预处理任务，如解析请求体、设置响应头、记录日志等。</li>
<li>响应处理：中间件可以处理响应，执行后处理任务，如压缩响应体、设置响应状态码等。</li>
</ul>
</li>
<li>错误处理
<ul>
<li>全局错误处理：Express 提供了全局错误处理中间件，可以捕获和处理未捕获的异常，确保应用的稳定性。</li>
<li>自定义错误页面：开发者可以定义自定义的错误页面，提供更好的用户体验。</li>
</ul>
</li>
</ol>
<h2 id="_1-4-举例说明" tabindex="-1"><a class="header-anchor" href="#_1-4-举例说明"><span>1.4 举例说明</span></a></h2>
<p><strong>创建一个简单的 Express 应用</strong></p>
<p>假设我们要创建一个简单的 Express 应用，包含一个主页和一个 RESTful API 接口。以下是实现步骤：</p>
<ol>
<li>安装 Express： 使用 npm 安装 Express。</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> <span class="token function">install</span> express</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="2">
<li>创建应用文件： 创建一个名为 app.js 的文件，编写基本的 Express 应用代码。</li>
</ol>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'express'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> port <span class="token operator">=</span> <span class="token number">3000</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line"><span class="token comment">// 主页路由</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">'Hello, World!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line"><span class="token comment">// RESTful API 接口</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/api/users'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> users <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'John Doe'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Jane Smith'</span> <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">    res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span>users<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line"><span class="token comment">// 启动服务器</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span>port<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Server is running on http://localhost:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>port<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>运行应用： 在终端中运行以下命令启动应用。</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">node</span> app.js</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="4">
<li>测试应用： 打开浏览器，访问 <code v-pre>http://localhost:3000</code>， 可以看到 &quot;Hello, World!&quot; 的欢迎消息。 使用 Postman 或浏览器访问 <code v-pre>http://localhost:3000/api/users</code>， 可以看到返回的用户列表 JSON 数据。</li>
</ol>
<h2 id="_1-5-运行原理" tabindex="-1"><a class="header-anchor" href="#_1-5-运行原理"><span>1.5 运行原理</span></a></h2>
<p>底层：http模块</p>
<ol>
<li>Express框架建立在node.js内置的http模块上。http模块生成服务器的原始代码如下</li>
</ol>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> http <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"http"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">var</span> app <span class="token operator">=</span> http<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">request<span class="token punctuation">,</span> response</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  response<span class="token punctuation">.</span><span class="token function">writeHead</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token string-property property">"Content-Type"</span><span class="token operator">:</span> <span class="token string">"text/plain"</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  response<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">"Hello world!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">,</span> <span class="token string">"localhost"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>Express框架的核心是对http模块的再包装。上面的代码用Express改写如下</li>
</ol>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">var express = require('express');</span>
<span class="line"></span>
<span class="line">var app = express();</span>
<span class="line">app.get('/', function (req, res) {</span>
<span class="line">  res.send('Hello world!');</span>
<span class="line">});</span>
<span class="line">app.listen(3000);</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


