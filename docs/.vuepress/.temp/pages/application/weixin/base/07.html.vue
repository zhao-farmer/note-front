<template><div><h1 id="七、小程序api" tabindex="-1"><a class="header-anchor" href="#七、小程序api"><span>七、小程序API</span></a></h1>
<h2 id="_7-1-介绍" tabindex="-1"><a class="header-anchor" href="#_7-1-介绍"><span>7.1 介绍</span></a></h2>
<p>小程序开发框架提供丰富的微信原生 API，可以方便的调起微信提供的能力，例如:获取用户信息、微信登录、微信支付等，<strong>小程序提供的API几乎都挂载在 wx 对象下</strong>，例如:<code v-pre>wx.request(0)</code>、<code v-pre>wx.setStorage()</code>等，<strong>wx 对象实际上就是小程序的宿主环境微信所提供的全局对象</strong></p>
<p><img src="/application/weixin/base/080.png" alt=""></p>
<p>异步 API支持 callback &amp; Promise 两种调用方式:</p>
<ol>
<li>当接口参数 Object 对象中不包含 success/fail/complete 时将默认返回 Promise</li>
<li>部分接口如 request,uploadFile 本身就有返回值，因此不支持 Promise 风格的调用方式，它们的 promisify 需要开发者自行封装。</li>
</ol>
<h2 id="_7-2-发起网络请求" tabindex="-1"><a class="header-anchor" href="#_7-2-发起网络请求"><span>7.2 发起网络请求</span></a></h2>
<p>发起网络请求获取服务器的数据，需要使用 wx.request()接口 API
wx.request 请求的域名必须在微信公众平台进行配置，如果使用 wx.request 请求未配置的域名，在控制台会有相应的报错。</p>
<ol>
<li>
<p>代码相关</p>
<p>index.wxml</p>
<div class="language-xml line-numbers-mode" data-highlighter="prismjs" data-ext="xml"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>warn<span class="token punctuation">"</span></span> <span class="token attr-name">bindtap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>getData<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>获取数据<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>index.js</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// index.js</span></span>
<span class="line"><span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 获取数据</span></span>
<span class="line">  <span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 如果需要发起网络请求，需要使用wx.request API</span></span>
<span class="line">    wx<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// 接口地址</span></span>
<span class="line">      <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'https://gmall-prod.atguigu.cn/mall-api/index/findBanner'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token comment">// 请求方式</span></span>
<span class="line">      <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">'GET'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token comment">// 请求参数</span></span>
<span class="line">      <span class="token literal-property property">data</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token comment">// 请求头</span></span>
<span class="line">      <span class="token literal-property property">header</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token comment">// API 调用成功以后，执行的回调</span></span>
<span class="line">      <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token comment">// API 调用失败以后，执行的回调</span></span>
<span class="line">      <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token comment">// API 不管调用成功还是失败以后，都会调用</span></span>
<span class="line">      <span class="token function-variable function">complete</span><span class="token operator">:</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>控制台结果</li>
</ul>
<p><img src="/application/weixin/base/084.png" alt=""></p>
</li>
<li>
<p>设置服务器域名</p>
<ul>
<li>选择配置域名</li>
</ul>
<p><img src="/application/weixin/base/081.png" alt=""></p>
<ul>
<li>输入域名并保存</li>
</ul>
<p><img src="/application/weixin/base/082.png" alt=""></p>
<ul>
<li>配置成功</li>
</ul>
<p><img src="/application/weixin/base/083.png" alt=""></p>
</li>
<li>
<p>跳过域名的校验的开发:</p>
<ol>
<li>在微信开发者工具中，点击详情按钮，切换到本地详情，将 不校验合法域名、web-view (业务域名)、TLS版本以及HTTPS证书 勾选上</li>
</ol>
<p><img src="/application/weixin/base/085.png" alt=""></p>
<ol start="2">
<li>在真机上，需要点击胶囊区域的分析按钮，在弹框中选择 开发调试，重启小程序后即可</li>
</ol>
<p><img src="/application/weixin/base/086.png" alt=""></p>
<ol start="3">
<li>注意事项:这两种方式只适用于开发者工具、小程序的开发版和小程序的体验版，项目上线前必须在小程序管理平台进行合法域名的配置</li>
</ol>
</li>
</ol>
<h2 id="_7-3-界面交互" tabindex="-1"><a class="header-anchor" href="#_7-3-界面交互"><span>7.3 界面交互</span></a></h2>
<h3 id="_7-3-1-loading-提示框" tabindex="-1"><a class="header-anchor" href="#_7-3-1-loading-提示框"><span>7.3.1 loading 提示框</span></a></h3>
<ol>
<li>
<p>介绍</p>
<p>小程序提供了一些用于界面交互的 API，例如: loading 提示框、消息提示框、模态对话框等 APIloading 提示框常配合网络请求来使用，用于增加用户体验，对应的API有两个:</p>
<ol>
<li>wx.showLoading()显示loading 提示框</li>
<li>wx.hideLoading()关闭loading 提示框</li>
</ol>
</li>
<li>
<p>代码实例</p>
<ul>
<li>代码</li>
</ul>
<p>index.wxml</p>
<div class="language-xml line-numbers-mode" data-highlighter="prismjs" data-ext="xml"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>warn<span class="token punctuation">"</span></span> <span class="token attr-name">bindtap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>getData<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>获取数据<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>index.js</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// index.js</span></span>
<span class="line"><span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">data</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">list</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// 获取数据</span></span>
<span class="line">  <span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line highlighted">    wx<span class="token punctuation">.</span><span class="token function">showLoading</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line highlighted">      <span class="token comment">// 用来显示提示的内容</span></span>
<span class="line highlighted">      <span class="token comment">// 提示的内容不会自动换行，如果提示的内容比较多，因为在同一行展示</span></span>
<span class="line highlighted">      <span class="token comment">// 多出来的内容就会被覆盖</span></span>
<span class="line highlighted">      <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'数据加载中...'</span><span class="token punctuation">,</span></span>
<span class="line highlighted">      <span class="token comment">// 是否显示透明蒙层，防止触摸穿透</span></span>
<span class="line highlighted">      <span class="token literal-property property">mask</span><span class="token operator">:</span><span class="token boolean">true</span></span>
<span class="line highlighted">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 如果需要发起网络请求，需要使用wx.request API</span></span>
<span class="line">    wx<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// 接口地址</span></span>
<span class="line">      <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'https://gmall-prod.atguigu.cn/mall-api/index/findBanner'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token comment">// 请求方式</span></span>
<span class="line">      <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">'GET'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token comment">// 请求参数</span></span>
<span class="line">      <span class="token literal-property property">data</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token comment">// 请求头</span></span>
<span class="line">      <span class="token literal-property property">header</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token comment">// API 调用成功以后，执行的回调</span></span>
<span class="line">      <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">if</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>data<span class="token punctuation">.</span>code <span class="token operator">===</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">          <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token literal-property property">list</span><span class="token operator">:</span> res<span class="token punctuation">.</span>data<span class="token punctuation">.</span>dta</span>
<span class="line">          <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token comment">// API 调用失败以后，执行的回调</span></span>
<span class="line">      <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token comment">// API 不管调用成功还是失败以后，都会调用</span></span>
<span class="line">      <span class="token function-variable function">complete</span><span class="token operator">:</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span></span>
<span class="line highlighted">        <span class="token comment">// 关闭loading提示框</span></span>
<span class="line highlighted">        <span class="token comment">// hideLoading与showLoading必须结合使用</span></span>
<span class="line highlighted">        wx<span class="token punctuation">.</span><span class="token function">hideLoading</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>运行结果</li>
</ul>
<p><img src="/application/weixin/base/089.gif" alt=""></p>
</li>
</ol>
<h3 id="_7-3-2-模态对话框" tabindex="-1"><a class="header-anchor" href="#_7-3-2-模态对话框"><span>7.3.2 模态对话框</span></a></h3>
<ol>
<li>
<p>介绍</p>
<p><code v-pre>wx.showModal()</code>:模态对话框，常用于询问用户是否执行一些操作</p>
<p>例如:询问用户是否退出登录、是否删除该商品 等</p>
</li>
<li>
<p>代码示例</p>
<ul>
<li>代码</li>
</ul>
<p>index.wxml</p>
<div class="language-xml line-numbers-mode" data-highlighter="prismjs" data-ext="xml"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">bind:</span>tap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>delHandler<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>删除商品<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>index.js</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// index.js</span></span>
<span class="line"><span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 删除商品</span></span>
<span class="line">  <span class="token keyword">async</span> <span class="token function">delHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> wx<span class="token punctuation">.</span><span class="token function">showModal</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'提示'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">'是否删除该商品？'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>      </span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>运行结果</li>
</ul>
<p><img src="/application/weixin/base/087.png" alt=""></p>
</li>
</ol>
<h3 id="_7-3-3-消息提示框" tabindex="-1"><a class="header-anchor" href="#_7-3-3-消息提示框"><span>7.3.3 消息提示框</span></a></h3>
<ol>
<li>
<p>介绍</p>
<p><code v-pre>wx.showToast()</code>:消息提示框，根据用户的某些操作来告知操作的结果</p>
<p>例如:退出成功给用户提示，提示删除成功等</p>
</li>
<li>
<p>代码示例</p>
<ul>
<li>代码</li>
</ul>
<p>index.wxml</p>
<div class="language-xml line-numbers-mode" data-highlighter="prismjs" data-ext="xml"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">bind:</span>tap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>delHandler<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>删除商品<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>index.js</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// index.js</span></span>
<span class="line"><span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 删除商品</span></span>
<span class="line">  <span class="token keyword">async</span> <span class="token function">delHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> <span class="token punctuation">{</span>confirm<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> wx<span class="token punctuation">.</span><span class="token function">showModal</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'提示'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">'是否删除该商品？'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">if</span><span class="token punctuation">(</span>confirm<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// showToast: 消息提示框</span></span>
<span class="line">      wx<span class="token punctuation">.</span><span class="token function">showToast</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'删除成功'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">"none"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token number">2000</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span></span>
<span class="line">      wx<span class="token punctuation">.</span><span class="token function">showToast</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'取消删除'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">"error"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token number">2000</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>运行结果</li>
</ul>
<p><img src="/application/weixin/base/088.png" alt=""></p>
</li>
</ol>
<h2 id="_7-4-本地存储" tabindex="-1"><a class="header-anchor" href="#_7-4-本地存储"><span>7.4 本地存储</span></a></h2>
<ol>
<li>
<p>介绍</p>
<p>小程序本地存储是指在小程序中使用 API将数据存储在用户的设备上以便小程序运行时和下次启动时快速地读取这些数据</p>
<p><img src="/application/weixin/base/090.png" alt=""></p>
</li>
<li>
<p>代码示例</p>
<p>cate.wxml</p>
<div class="language-xml line-numbers-mode" data-highlighter="prismjs" data-ext="xml"><pre v-pre><code><span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">></span></span>同步存储<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mini<span class="token punctuation">"</span></span> <span class="token attr-name">plain</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>warn<span class="token punctuation">"</span></span>  <span class="token attr-name"><span class="token namespace">bind:</span>tap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>setStorageSync<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>存储<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mini<span class="token punctuation">"</span></span> <span class="token attr-name">plain</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">bind:</span>tap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>getStorageSync<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>获取<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mini<span class="token punctuation">"</span></span> <span class="token attr-name">plain</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>warn<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">bind:</span>tap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>removeStorageSync<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>删除<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mini<span class="token punctuation">"</span></span> <span class="token attr-name">plain</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">bind:</span>tap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>clearStorageSync<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>清空<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">></span></span>异步存储<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mini<span class="token punctuation">"</span></span> <span class="token attr-name">plain</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>warn<span class="token punctuation">"</span></span>  <span class="token attr-name"><span class="token namespace">bind:</span>tap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>setStorage<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>存储<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mini<span class="token punctuation">"</span></span> <span class="token attr-name">plain</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">bind:</span>tap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>getStorage<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>获取<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mini<span class="token punctuation">"</span></span> <span class="token attr-name">plain</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>warn<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">bind:</span>tap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>removeStorage<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>删除<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mini<span class="token punctuation">"</span></span> <span class="token attr-name">plain</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">bind:</span>tap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>clearStorage<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>清空<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>cate.wxss</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token selector">button</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">margin</span><span class="token punctuation">:</span> 34rpx<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">view</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">margin</span><span class="token punctuation">:</span> 20rpx<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">background-color</span><span class="token punctuation">:</span> lightcoral<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>cate.js</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 将数据存储到本地</span></span>
<span class="line">  <span class="token function">setStorageSync</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 第一个参数：本地存储中指定的key</span></span>
<span class="line">    <span class="token comment">// 第二个参数：需要存储的数据</span></span>
<span class="line">    wx<span class="token punctuation">.</span><span class="token function">setStorageSync</span><span class="token punctuation">(</span><span class="token string">"num"</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 在小程序中</span></span>
<span class="line">    <span class="token comment">// 如果存储的是对象类型，不需要使用 JSON.stringify 和 JSON.parse 进行转换</span></span>
<span class="line">    <span class="token comment">// 直接使用即可</span></span>
<span class="line">    wx<span class="token punctuation">.</span><span class="token function">setStorageSync</span><span class="token punctuation">(</span><span class="token string">"obj"</span><span class="token punctuation">,</span><span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"tom"</span> <span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">10</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token comment">// 获取本地存储的数据</span></span>
<span class="line">  <span class="token function">getStorageSync</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 从本地存储的数据中获取指定 key 的数据、内容</span></span>
<span class="line">    <span class="token keyword">const</span> num <span class="token operator">=</span> wx<span class="token punctuation">.</span><span class="token function">getStorageSync</span><span class="token punctuation">(</span><span class="token string">'num'</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">const</span> obj <span class="token operator">=</span> wx<span class="token punctuation">.</span><span class="token function">getStorageSync</span><span class="token punctuation">(</span><span class="token string">'obj'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token comment">// 删除本地存储的数据</span></span>
<span class="line">  <span class="token function">removeStorageSync</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 从本地移除指定 key 的数据、内容</span></span>
<span class="line">    wx<span class="token punctuation">.</span><span class="token function">removeStorageSync</span><span class="token punctuation">(</span><span class="token string">"num"</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// 清空本地存储的数据</span></span>
<span class="line">  <span class="token function">clearStorageSync</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    wx<span class="token punctuation">.</span><span class="token function">clearStorageSync</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// ---------------- 异步 API ---------------------</span></span>
<span class="line">  <span class="token comment">// 将数据存储到本地</span></span>
<span class="line">  <span class="token function">setStorage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    wx<span class="token punctuation">.</span><span class="token function">setStorage</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">key</span><span class="token operator">:</span><span class="token string">"num"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">data</span><span class="token operator">:</span><span class="token number">10</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    wx<span class="token punctuation">.</span><span class="token function">setStorage</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">key</span><span class="token operator">:</span><span class="token string">"obj"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"jerry"</span> <span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">18</span> <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token comment">// 获取本地存储的数据</span></span>
<span class="line">  <span class="token keyword">async</span> <span class="token function">getStorage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 从本地存储的数据中获取指定 key 的数据、内容</span></span>
<span class="line">    <span class="token keyword">const</span> <span class="token punctuation">{</span><span class="token literal-property property">data</span><span class="token operator">:</span>num<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> wx<span class="token punctuation">.</span><span class="token function">getStorage</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">key</span><span class="token operator">:</span><span class="token string">"num"</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">const</span> <span class="token punctuation">{</span><span class="token literal-property property">data</span><span class="token operator">:</span>obj<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> wx<span class="token punctuation">.</span><span class="token function">getStorage</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">key</span><span class="token operator">:</span><span class="token string">"obj"</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token comment">// 删除本地存储的数据</span></span>
<span class="line">  <span class="token function">removeStorage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 从本地移除指定 key 的数据、内容</span></span>
<span class="line">    wx<span class="token punctuation">.</span><span class="token function">removeStorage</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">key</span><span class="token operator">:</span><span class="token string">"num"</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// 清空本地存储的数据</span></span>
<span class="line">  <span class="token function">clearStorage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    wx<span class="token punctuation">.</span><span class="token function">clearStorage</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>注意事项</p>
<p>对象类型的数据，可以直接进行存储获取，无需使用 JSON.stringify()、 JSON.parse() 转换</p>
</li>
</ol>
<h2 id="_7-5-路由通信" tabindex="-1"><a class="header-anchor" href="#_7-5-路由通信"><span>7.5 路由通信</span></a></h2>
<ol>
<li>
<p>介绍</p>
<p>在小程序中实现页面的跳转，有两种方式:</p>
<ol>
<li>声明式导航:navigator 组件</li>
<li>编程式导航:使用小程序提供的 API</li>
</ol>
<p><img src="/application/weixin/base/091.png" alt=""></p>
<p>路径后可以带参数，参数与路径之间使用?分隔，参数键与参数值用=相连，不同参数用&amp;分隔，例如: <code v-pre>path?key=value&amp;key2=value2</code></p>
<p>参数需要在跳转到的页面的 onLoad 钩子函数 中通过形参进行接收</p>
</li>
<li>
<p>代码示例</p>
<ul>
<li>跳转页面</li>
</ul>
<p>cart.wxml</p>
<div class="language-xml line-numbers-mode" data-highlighter="prismjs" data-ext="xml"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">plain</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>warn<span class="token punctuation">"</span></span> <span class="token attr-name">bindtap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>navigateTo<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>navigateTo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">plain</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">bindtap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>redirectTo<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>redirectTo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">plain</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>warn<span class="token punctuation">"</span></span> <span class="token attr-name">bindtap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>switchTab<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>switchTab<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">plain</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">bindtap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>reLaunch<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>reLaunch<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>cart.js</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// pages/cart/cart.js</span></span>
<span class="line"><span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">navigateTo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 保留当前页面，跳转到应用中其他页面，不能跳转到TabBar页面</span></span>
<span class="line">    wx<span class="token punctuation">.</span><span class="token function">navigateTo</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'/pages/list/list?id=1&amp;name=tom'</span></span>
<span class="line">      <span class="token comment">// url: '/pages/cate/cate'</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token function">redirectTo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 关闭当前页面，跳转到应用中其他页面，不能跳转到TabBar页面</span></span>
<span class="line">    wx<span class="token punctuation">.</span><span class="token function">redirectTo</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'/pages/list/list?id=1&amp;name=tom'</span></span>
<span class="line">      <span class="token comment">// url: '/pages/cate/cate'</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">  <span class="token function">switchTab</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 跳转到TabBar页面，不能跳转非TabBar页面，后面不能传递参数</span></span>
<span class="line">    wx<span class="token punctuation">.</span><span class="token function">switchTab</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// url: '/pages/list/list'</span></span>
<span class="line">      <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'/pages/cate/cate'</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token function">reLaunch</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 关闭所有页面，然后跳转到应用中某一个页面</span></span>
<span class="line">    wx<span class="token punctuation">.</span><span class="token function">reLaunch</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'/pages/list/list?id=1&amp;name=tom'</span></span>
<span class="line">      <span class="token comment">//  url: '/pages/cate/cate'</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  </span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>返回页面</li>
</ul>
<p>list.wxml</p>
<div class="language-xml line-numbers-mode" data-highlighter="prismjs" data-ext="xml"><pre v-pre><code><span class="line"><span class="token comment">&lt;!--pages/list/list.wxml--></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">plain</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>warn<span class="token punctuation">"</span></span> <span class="token attr-name">bindtap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>navigateBack<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>navigateBack<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>list.js</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// pages/list/list.js</span></span>
<span class="line"><span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">navigateBack</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 关闭当前页面，返回上一页或者返回多级页面</span></span>
<span class="line">    <span class="token comment">// 默认是返回上一页</span></span>
<span class="line">    wx<span class="token punctuation">.</span><span class="token function">navigateBack</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">delta</span><span class="token operator">:</span><span class="token number">1</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token function">onLoad</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h2 id="_7-6-页面处理函数" tabindex="-1"><a class="header-anchor" href="#_7-6-页面处理函数"><span>7.6 页面处理函数</span></a></h2>
<h3 id="_7-6-1-下拉加载" tabindex="-1"><a class="header-anchor" href="#_7-6-1-下拉加载"><span>7.6.1 下拉加载</span></a></h3>
<ol>
<li>
<p>介绍</p>
<p>上拉加载是小程序中常见的一种加载方式，当用户滑动页面到底部时，会自动加载更多的内容，以便用户继续浏炎小程序中实现上拉加载的方式:</p>
<ol>
<li>
<p>在 <code v-pre>app.json</code> 或者 <code v-pre>page.json</code> 中配置距离页面底部距离: <code v-pre>onReachBottomDistance</code>;默认 50pX</p>
</li>
<li>
<p>在 <code v-pre>页面.js</code> 中定义 <code v-pre>onReachBottom</code> 事件监听用户上拉加载</p>
</li>
</ol>
</li>
<li>
<p>代码示例</p>
<ul>
<li>代码</li>
</ul>
<p>market.wxml</p>
<div class="language-xml line-numbers-mode" data-highlighter="prismjs" data-ext="xml"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name"><span class="token namespace">wx:</span>for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{numList}}<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">wx:</span>key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>*this<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{item}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>market.wxss</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token selector">view</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">height</span><span class="token punctuation">:</span> 400rpx<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">view:nth-child(odd)</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">background-color</span><span class="token punctuation">:</span> lightskyblue<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">view:nth-child(even)</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">background-color</span><span class="token punctuation">:</span> lightsalmon<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>market.json</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"usingComponents"</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"onReachBottomDistance"</span><span class="token operator">:</span> <span class="token number">100</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>market.js</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">data</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">numList</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// 监听用户上拉加载</span></span>
<span class="line">  <span class="token function">onReachBottom</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// console.log("监听用户上拉加载");</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 产品需求：</span></span>
<span class="line">    <span class="token comment">// 当用户上拉，需要数字进行累加</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 当用户上拉加载时，需要对数字进行累加，每次累加 3 个数字</span></span>
<span class="line">    <span class="token comment">// 目前是 [1,2,3],[1,2,3,4,5,6]</span></span>
<span class="line">    <span class="token comment">// 获取目前数组中 最后一项 n, n + 1, n + 2, n + 3</span></span>
<span class="line"></span>
<span class="line">    wx<span class="token punctuation">.</span><span class="token function">showLoading</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">title</span><span class="token operator">:</span><span class="token string">"数据加载中..."</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span></span>
<span class="line">      </span>
<span class="line">      <span class="token comment">// 获取数组的最后一项</span></span>
<span class="line">      <span class="token keyword">const</span> lastNum <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>numList<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>numList<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token comment">// 定义需要追加的元素</span></span>
<span class="line">      <span class="token keyword">const</span> newArr <span class="token operator">=</span> <span class="token punctuation">[</span>lastNum <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> lastNum <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">,</span> lastNum <span class="token operator">+</span> <span class="token number">3</span><span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">numList</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>numList<span class="token punctuation">,</span><span class="token operator">...</span>newArr<span class="token punctuation">]</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">      wx<span class="token punctuation">.</span><span class="token function">hideLoading</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">1500</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>运行结果</li>
</ul>
<p><img src="/application/weixin/base/092.gif" alt=""></p>
</li>
</ol>
<h3 id="_7-6-2-下拉刷新" tabindex="-1"><a class="header-anchor" href="#_7-6-2-下拉刷新"><span>7.6.2 下拉刷新</span></a></h3>
<ol>
<li>
<p>介绍</p>
<p>下拉刷新是小程序中常见的一种刷新方式，当用户下拉页面时，页面会自动刷新，以便用户获取最新的内容小程序中实现上拉加载更多的方式:</p>
<ol>
<li>在 app.json 或者 page.json 中开启允许下拉，同时可以配置 窗口、loading 样式等</li>
<li>在 页面.js 中定义 onPullDownRefresh 事件监听用户下拉刷新</li>
</ol>
</li>
<li>
<p>代码示例</p>
<ul>
<li>代码</li>
</ul>
<p>market.wxml</p>
<div class="language-xml line-numbers-mode" data-highlighter="prismjs" data-ext="xml"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name"><span class="token namespace">wx:</span>for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{numList}}<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">wx:</span>key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>*this<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{item}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>market.wxss</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token selector">view</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">height</span><span class="token punctuation">:</span> 400rpx<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">view:nth-child(odd)</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">background-color</span><span class="token punctuation">:</span> lightskyblue<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">view:nth-child(even)</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">background-color</span><span class="token punctuation">:</span> lightsalmon<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>market.json</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"usingComponents"</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"onReachBottomDistance"</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span></span>
<span class="line highlighted">  <span class="token property">"enablePullDownRefresh"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line highlighted">  <span class="token property">"backgroundColor"</span><span class="token operator">:</span> <span class="token string">"#efefef"</span><span class="token punctuation">,</span></span>
<span class="line highlighted">  <span class="token property">"backgroundTextStyle"</span><span class="token operator">:</span><span class="token string">"light"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>market.js</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">  <span class="token literal-property property">data</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">numList</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token comment">// 监听用户上拉加载</span></span>
<span class="line">  <span class="token function">onReachBottom</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// console.log("监听用户上拉加载");</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 产品需求：</span></span>
<span class="line">    <span class="token comment">// 当用户上拉，需要数字进行累加</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 当用户上拉加载时，需要对数字进行累加，每次累加 3 个数字</span></span>
<span class="line">    <span class="token comment">// 目前是 [1,2,3],[1,2,3,4,5,6]</span></span>
<span class="line">    <span class="token comment">// 获取目前数组中 最后一项 n, n + 1, n + 2, n + 3</span></span>
<span class="line">    wx<span class="token punctuation">.</span><span class="token function">showLoading</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">title</span><span class="token operator">:</span><span class="token string">"数据加载中..."</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// 获取数组的最后一项</span></span>
<span class="line">      <span class="token keyword">const</span> lastNum <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>numList<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>numList<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token comment">// 定义需要追加的元素</span></span>
<span class="line">      <span class="token keyword">const</span> newArr <span class="token operator">=</span> <span class="token punctuation">[</span>lastNum <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> lastNum <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">,</span> lastNum <span class="token operator">+</span> <span class="token number">3</span><span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">numList</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>numList<span class="token punctuation">,</span><span class="token operator">...</span>newArr<span class="token punctuation">]</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">      wx<span class="token punctuation">.</span><span class="token function">hideLoading</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">1500</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line highlighted">  <span class="token comment">// 监听用户下拉刷新</span></span>
<span class="line highlighted">  <span class="token function">onPullDownRefresh</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line highlighted">    <span class="token comment">// console.log("监听用户下拉刷新");</span></span>
<span class="line highlighted">    <span class="token comment">// 产品需求:</span></span>
<span class="line highlighted">    <span class="token comment">// 当用户上拉加载在更多以后，如果用户进行了下拉刷新</span></span>
<span class="line highlighted">    <span class="token comment">// 需要将数据进行重置</span></span>
<span class="line highlighted">    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line highlighted">      <span class="token literal-property property">numList</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span></span>
<span class="line highlighted">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line highlighted">    <span class="token comment">// 在下拉刷新以后，loading 效果可能不会弹回去</span></span>
<span class="line highlighted">    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>numList<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line highlighted">      wx<span class="token punctuation">.</span><span class="token function">stopPullDownRefresh</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line highlighted">    <span class="token punctuation">}</span></span>
<span class="line highlighted">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>运行结果</li>
</ul>
<p><img src="/application/weixin/base/093.gif" alt=""></p>
</li>
</ol>
<h2 id="_7-7-增强scroll-view-扩展" tabindex="-1"><a class="header-anchor" href="#_7-7-增强scroll-view-扩展"><span>7.7 增强scroll-view(扩展)</span></a></h2>
<ol>
<li>
<p>目标</p>
<p>使用 scroll-view 实现上拉加载更多和下拉刷新功能</p>
</li>
<li>
<p>代码示例</p>
<ul>
<li>代码</li>
</ul>
<p>profile.wxml</p>
<div class="language-xml line-numbers-mode" data-highlighter="prismjs" data-ext="xml"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scroll-view</span> </span>
<span class="line">  <span class="token attr-name">scroll-y</span> </span>
<span class="line">  <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scroll-y<span class="token punctuation">"</span></span></span>
<span class="line">  <span class="token attr-name">lower-threshold</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100<span class="token punctuation">"</span></span></span>
<span class="line">  <span class="token attr-name">bindscrolltolower</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>getMore<span class="token punctuation">"</span></span></span>
<span class="line">  <span class="token attr-name">enable-back-to-top</span></span>
<span class="line"></span>
<span class="line">  <span class="token attr-name">refresher-enabled</span></span>
<span class="line">  <span class="token attr-name">refresher-default-style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>black<span class="token punctuation">"</span></span></span>
<span class="line">  <span class="token attr-name">refresher-background</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#f7f7f8<span class="token punctuation">"</span></span></span>
<span class="line">  <span class="token attr-name">bindrefresherrefresh</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>refreshHandler<span class="token punctuation">"</span></span></span>
<span class="line">  <span class="token attr-name">refresher-triggered</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{isTriggered}}<span class="token punctuation">"</span></span></span>
<span class="line"><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name"><span class="token namespace">wx:</span>for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{ numList }}<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">wx:</span>key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>*this<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{ item }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scroll-view</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>profile.wxss</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token selector">.scroll-y</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">background-color</span><span class="token punctuation">:</span> #efefef<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">view</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">height</span><span class="token punctuation">:</span> 500rpx<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">view:nth-child(odd)</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">background-color</span><span class="token punctuation">:</span> lightskyblue<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">view:nth-child(even)</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">background-color</span><span class="token punctuation">:</span> lightsalmon<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>profile.js</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">numList</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">isTriggered</span><span class="token operator">:</span><span class="token boolean">false</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token comment">// scoll-view 上拉加载更多事件的事件处理函数</span></span>
<span class="line">  <span class="token function">getMore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    wx<span class="token punctuation">.</span><span class="token function">showLoading</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">title</span><span class="token operator">:</span><span class="token string">"数据加载中..."</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// 获取数组的最后一项</span></span>
<span class="line">      <span class="token keyword">const</span> lastNum <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>numList<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>numList<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token comment">// 定义需要追加的元素</span></span>
<span class="line">      <span class="token keyword">const</span> newArr <span class="token operator">=</span> <span class="token punctuation">[</span>lastNum <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> lastNum <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">,</span> lastNum <span class="token operator">+</span> <span class="token number">3</span><span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">numList</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>numList<span class="token punctuation">,</span><span class="token operator">...</span>newArr<span class="token punctuation">]</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">      wx<span class="token punctuation">.</span><span class="token function">hideLoading</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">1500</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">  <span class="token function">refreshHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    wx<span class="token punctuation">.</span><span class="token function">showToast</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'下拉刷新...'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">numList</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">isTriggered</span><span class="token operator">:</span><span class="token boolean">false</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>运行结果</li>
</ul>
<p><img src="/application/weixin/base/094.gif" alt=""></p>
</li>
</ol>
</div></template>


