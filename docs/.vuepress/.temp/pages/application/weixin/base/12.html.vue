<template><div><h1 id="十二、补充" tabindex="-1"><a class="header-anchor" href="#十二、补充"><span>十二、补充</span></a></h1>
<h2 id="_12-1-通信" tabindex="-1"><a class="header-anchor" href="#_12-1-通信"><span>12.1 通信</span></a></h2>
<h3 id="_12-1-1-全局数据共享-getapp" tabindex="-1"><a class="header-anchor" href="#_12-1-1-全局数据共享-getapp"><span>12.1.1 全局数据共享-getApp()</span></a></h3>
<ol>
<li>
<p>介绍</p>
<p>在小程序中，可以通过 getApp()方法获取到小程序全局唯一的 App 实例</p>
<p>因此在 ApP()方法中添加全局共享的数据、方法，从而实现页面、组件的数据传值</p>
</li>
<li>
<p>代码示例</p>
<p>app.js</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// app.js</span></span>
<span class="line"><span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 全局共享的数据</span></span>
<span class="line">    <span class="token literal-property property">globalData</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">token</span><span class="token operator">:</span><span class="token string">''</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 全局共享的方法</span></span>
<span class="line">    <span class="token function">setToken</span><span class="token punctuation">(</span><span class="token parameter">token</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// 如果想要获取 token，可以使用 this 的方式进行获取</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>globalData<span class="token punctuation">.</span>token <span class="token operator">=</span> token</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>profile.wxml</p>
<div class="language-xml line-numbers-mode" data-highlighter="prismjs" data-ext="xml"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">plain</span> <span class="token attr-name"><span class="token namespace">bind:</span>tap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>login<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>登录<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>profile.js</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// getApp() 方法用来获取全局唯一的 APP() 示例</span></span>
<span class="line"><span class="token keyword">const</span> appInstance <span class="token operator">=</span> <span class="token function">getApp</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">login</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// console.log(appInstance);</span></span>
<span class="line">        appInstance<span class="token punctuation">.</span><span class="token function">setToken</span><span class="token punctuation">(</span><span class="token string">"115151ad5ad1f1a"</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>cart.js</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> appInstance <span class="token operator">=</span> <span class="token function">getApp</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">onLoad</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>appInstance<span class="token punctuation">.</span>globalData<span class="token punctuation">.</span>token<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>注意事项</p>
<ol>
<li>不要在 App()方法中使用 getApp()，使用 this 就可以拿到 app 实例</li>
<li>通过 getApp()获取实例之后，不要私自调用生命周期函数</li>
</ol>
</li>
</ol>
<h3 id="_12-1-2-页面间通信-eventchannel" tabindex="-1"><a class="header-anchor" href="#_12-1-2-页面间通信-eventchannel"><span>12.1.2 页面间通信-eventChannel</span></a></h3>
<ol>
<li>
<p>介绍</p>
<p>如果一页面通过wx.navigateTo打开个新页面，这两个页面间将建立条数据通道</p>
<ol>
<li>在 wx.navigateTo 的 success 回调中通过 EventChannel 对象发射事件</li>
<li>被打开的页面可以通过 this.getOpenerEventchannel()方法来获得一个 EventChannel 对象，进行监听、发射事件</li>
<li>wx.navigateTo 方法中可以定义 events 配置项接收被打开页面发射的事件</li>
</ol>
<p><img src="/application/weixin/base/127.png" alt=""></p>
</li>
<li>
<p>代码示例</p>
<p>index.wxml</p>
<div class="language-xml line-numbers-mode" data-highlighter="prismjs" data-ext="xml"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>warn<span class="token punctuation">"</span></span> <span class="token attr-name">plain</span> <span class="token attr-name">bindtap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handler<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>跳转到列表页面<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>index.js</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 点击按钮触发的事件处理函数</span></span>
<span class="line">    <span class="token function">handler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        wx<span class="token punctuation">.</span><span class="token function">navigateTo</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'/pages/list/list'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">events</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token comment">// key：被打开页面通过 eventChannel 发射的事件</span></span>
<span class="line">            <span class="token comment">// value: 回调函数</span></span>
<span class="line">            <span class="token comment">// 为事件添加一个监听器，获取到被打开页面传递给当前页面的数据据</span></span>
<span class="line">            <span class="token function-variable function">currentevent</span><span class="token operator">:</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span></span>
<span class="line">            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token function">success</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token comment">// 通过 success 回调函数的形参，可以获取 eventChannel对象</span></span>
<span class="line">            <span class="token comment">// eventChannel 对象提供了 emit 方法，可以发射事件，同时携带参数</span></span>
<span class="line"></span>
<span class="line">            res<span class="token punctuation">.</span>eventChannel<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">"myevent"</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">"tom"</span><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>list.js</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">onLoad</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// 通过 this.getOpenerEventChannel() 可以获取 EventChannel 对象</span></span>
<span class="line">        <span class="token keyword">const</span> EventChannel <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getOpenerEventChannel</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">// 通过 EventChannel 提供的 on 方法 监听页面发射的自定义事件</span></span>
<span class="line">        EventChannel<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">"myevent"</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">// 通过 eventChannel 提供的 emit 方法 也可以向上一级页面传递数据</span></span>
<span class="line">        <span class="token comment">// 需要使用 emit 定义自定义事件，携带需要传递的数据</span></span>
<span class="line">        EventChannel<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">"currentevent"</span><span class="token punctuation">,</span><span class="token punctuation">{</span> <span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">10</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h3 id="_12-1-3-事件总线-事件总线" tabindex="-1"><a class="header-anchor" href="#_12-1-3-事件总线-事件总线"><span>12.1.3 事件总线-事件总线</span></a></h3>
<ol>
<li>
<p>介绍</p>
<p>随着项目功能的增加，业务逻辑也会变的很复杂，一个页面可能是由多个组件进行构成，并且这些组件之间需要进行数据的传递。这时候如果使用之前学习的组件传值方式进行数据的传递，就会比较麻烦</p>
<p><img src="/application/weixin/base/128.png" alt=""></p>
<p>事件总线是对发布-订阅模式的一种实现，是一种集中式事件处理机制，允许不同的组件之间进行彼此通信，常用于两个非父子关系组件和兄弟组件之间通讯。我们可以借助第三方的发布订阅 JS 包，来实现事件总线的功能， <a href="https://github.com/mroderick/PubSubJS" target="_blank" rel="noopener noreferrer">PubSubJs</a></p>
</li>
<li>
<p>操作流程</p>
<ol>
<li>
<p>下载npm包</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> <span class="token function">install</span> pubsub-js</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p>构建小程序npm包</p>
<p>菜单栏 -&gt; 工具 -&gt; 构建npm</p>
</li>
<li>
<p>代码使用</p>
<ul>
<li>
<p>父组件
cart.wxml</p>
<div class="language-xml line-numbers-mode" data-highlighter="prismjs" data-ext="xml"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>parent<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>父组件，子租价 a 和 子组件 b 是兄弟关系<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>custom01</span><span class="token punctuation">/></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>custom02</span><span class="token punctuation">/></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>cart.wxss</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token selector">.parent</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">background-color</span><span class="token punctuation">:</span> lightskyblue<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">padding</span><span class="token punctuation">:</span> 20rpx<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.title</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">padding</span><span class="token punctuation">:</span> 10rpx 0<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.container</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">gap</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>子组件1</p>
<p>custom01.wxml</p>
<div class="language-xml line-numbers-mode" data-highlighter="prismjs" data-ext="xml"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>son1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>text</span><span class="token punctuation">></span></span>子组件 a<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>text</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name"><span class="token namespace">bind:</span>tap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>sendData<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>传递数据给兄弟<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>custom01.wxss</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token selector">.son1</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">background-color</span><span class="token punctuation">:</span> lightseagreen<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">height</span><span class="token punctuation">:</span> 200rpx<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">width</span><span class="token punctuation">:</span> 700rpx<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>custom01.js</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> PubSub <span class="token keyword">from</span> <span class="token string">'pubsub-js'</span></span>
<span class="line"></span>
<span class="line"><span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 组件的初始数据</span></span>
<span class="line">    <span class="token literal-property property">data</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">"tom"</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 组件的方法列表</span></span>
<span class="line">    <span class="token literal-property property">methods</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">sendData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// publish 发布、发射自定义事件</span></span>
<span class="line">        <span class="token comment">// 1. 自定义事件的名称</span></span>
<span class="line">        <span class="token comment">// 2. 需要传递的数据</span></span>
<span class="line">        PubSub<span class="token punctuation">.</span><span class="token function">publish</span><span class="token punctuation">(</span><span class="token string">"myevent"</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>name<span class="token punctuation">,</span><span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">10</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>子组件2</p>
<p>custom02.wxml</p>
<div class="language-xml line-numbers-mode" data-highlighter="prismjs" data-ext="xml"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>son2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>text</span><span class="token punctuation">></span></span>子组件 b<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>text</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">></span></span>{{ name }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>custom02.wxss</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token selector">.son2</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">background-color</span><span class="token punctuation">:</span> lightsalmon<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">height</span><span class="token punctuation">:</span> 200rpx<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">width</span><span class="token punctuation">:</span> 700rpx<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>custom02.js</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> PubSub <span class="token keyword">from</span> <span class="token string">'pubsub-js'</span></span>
<span class="line"></span>
<span class="line"><span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">data</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">""</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">    <span class="token literal-property property">lifetimes</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">attached</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">            <span class="token comment">// subscribe 订阅、监听自定义的事件</span></span>
<span class="line">            <span class="token comment">// 1.需要订阅、监听的自定义事件名称</span></span>
<span class="line">            <span class="token comment">// 2.回调函数，回调函数有两个参数</span></span>
<span class="line">            <span class="token comment">//    2.1 msg: 自定义事件的名称</span></span>
<span class="line">            <span class="token comment">//    2.2 data: 传递过来的数据</span></span>
<span class="line">            PubSub<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token string">"myevent"</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">msg<span class="token punctuation">,</span>data</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span></span>
<span class="line">                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>msg<span class="token punctuation">,</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">                <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">                    <span class="token literal-property property">name</span><span class="token operator">:</span>data<span class="token punctuation">.</span>name</span>
<span class="line">                <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
</ol>
</li>
</ol>
<h2 id="_12-2-自定义导航栏" tabindex="-1"><a class="header-anchor" href="#_12-2-自定义导航栏"><span>12.2 自定义导航栏</span></a></h2>
<ol>
<li>
<p>介绍</p>
<p>小程序默认的导航栏与 APP 一样都位于顶部固定位置。但是默认导航栏可能会影响小程序整体风格，且无法满足特定的设计需求，这时候，就需要进行自定义导航栏。</p>
<p>在 app.json 或者 page.json 中，配置 navigationStyle 属性为 custom，即可 自定义导航栏在设置以后，就会移除默认的导航栏，只保留右上角胶囊按钮</p>
</li>
<li>
<p>代码示例</p>
<p>cate.json</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"usingComponents"</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"navigationStyle"</span><span class="token operator">:</span> <span class="token string">"custom"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>cate.wxml</p>
<div class="language-xml line-numbers-mode" data-highlighter="prismjs" data-ext="xml"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>swiper</span> </span>
<span class="line">    <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>custom-swiper<span class="token punctuation">"</span></span> </span>
<span class="line">    <span class="token attr-name">indicator-dots</span></span>
<span class="line">    <span class="token attr-name">autoplay</span></span>
<span class="line">    <span class="token attr-name">interval</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>2000<span class="token punctuation">"</span></span></span>
<span class="line"><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>swiper-item</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>image</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>../../assets/banner/banner-1.png<span class="token punctuation">"</span></span> <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">/></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>swiper-item</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>swiper-item</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>image</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>../../assets/banner/banner-2.png<span class="token punctuation">"</span></span> <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">/></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>swiper-item</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>swiper-item</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>image</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>../../assets/banner/banner-3.png<span class="token punctuation">"</span></span> <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">/></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>swiper-item</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>swiper</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>cate.wxss</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token selector">.custom-swiper</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">height</span><span class="token punctuation">:</span> 440rpx<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.custom-swiper image</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>运行结果</p>
<p><img src="/application/weixin/base/129.gif" alt=""></p>
</li>
</ol>
<h2 id="_12-3-上线发布流程" tabindex="-1"><a class="header-anchor" href="#_12-3-上线发布流程"><span>12.3 上线发布流程</span></a></h2>
<ol>
<li>
<p>介绍</p>
<p>假设我们目前已经完成了小程序的开发，并且通过了本地测试，这时候小程序就需要上线发布</p>
<p><img src="/application/weixin/base/130.png" alt=""></p>
<ul>
<li>开发版本:点击开发者工具上传后的版本，开发版本只保留每人最新的一份上传的代码，是供开发者和团队测试和调试的版本</li>
<li>体验版本:小程序开发者可以将开发版本转换为体验版本，由测试人员以及产品经理进行测试与体验，确认没问题可提交审核</li>
<li>审核版本:小程序开发者可以将开发版本转换为审核版本，由微信的审核团队进行审核，审核周期为1~7天，审核通过可提交发布</li>
<li>线上版本:通过微信小程序平台审核，并由开发者提交发布的正式版本，线上版本是用户可以正常使用的小程序版本</li>
</ul>
</li>
<li>
<p>实际操作</p>
<ol>
<li>上传代码</li>
</ol>
<p><img src="/application/weixin/base/131.png" alt=""></p>
<p><img src="/application/weixin/base/132.png" alt=""></p>
<p><img src="/application/weixin/base/133.png" alt=""></p>
<ol start="2">
<li>
<p>微信中的版本管理</p>
<ul>
<li>
<p>开发版本</p>
<p><img src="/application/weixin/base/134.png" alt=""></p>
</li>
<li>
<p>体验版本</p>
<p><img src="/application/weixin/base/135.png" alt=""></p>
<p><img src="/application/weixin/base/136.png" alt=""></p>
<p><img src="/application/weixin/base/137.png" alt=""></p>
</li>
<li>
<p>审核版本</p>
<p><img src="/application/weixin/base/138.png" alt=""></p>
<p>进入审核列表（1-7后审核成功）</p>
<p><img src="/application/weixin/base/139.png" alt=""></p>
</li>
<li>
<p>线上版本</p>
<p>审核完成后，选择使用审核后的版本</p>
</li>
</ul>
</li>
</ol>
</li>
</ol>
</div></template>


