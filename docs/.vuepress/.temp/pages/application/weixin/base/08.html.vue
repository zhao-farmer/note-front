<template><div><h1 id="八、自定义组件" tabindex="-1"><a class="header-anchor" href="#八、自定义组件"><span>八、自定义组件</span></a></h1>
<h2 id="_8-1-创建、注册、使用组件" tabindex="-1"><a class="header-anchor" href="#_8-1-创建、注册、使用组件"><span>8.1 创建、注册、使用组件</span></a></h2>
<ol>
<li>
<p>创建</p>
<p>如果是公共组件，建议放在项目根目录的 components 文件夹中如果是页面组件，建议放在对应页面的目录下建议:一个组件一个文件夹</p>
<p><img src="/application/weixin/base/095.png" alt=""></p>
</li>
<li>
<p>注册</p>
<p>开发中常见的组件主要分为 公共组件 和 页面组件 两种，因此注册组件的方式也分为两种:</p>
<ul>
<li>全局注册:在 app.json 文件中配置 usingComponents 进行注册，注册后可以在任意页面使用</li>
<li>局部注册:在页面的json 文件中配置 usingComponents进行注册，注册后只能在当前页面使用</li>
</ul>
<p>在 usingComponents 中进行组件注册时，需要提供 自定义组件的组件名 和 自定义组件文件路径</p>
<p><img src="/application/weixin/base/096.png" alt=""></p>
</li>
<li>
<p>使用</p>
<p>在将组件注册好以后，直接将 自定义组件的组件名 当成 组件标签名 使用即可</p>
<p><img src="/application/weixin/base/097.png" alt=""></p>
</li>
<li>
<p>代码示例</p>
<ol>
<li>
<p>全局注册</p>
<ul>
<li>
<p>创建组件</p>
<p><img src="/application/weixin/base/098.png" alt=""></p>
</li>
<li>
<p>全局注册</p>
<p>app.json</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"usingComponents"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">"custom-checkbox"</span><span class="token operator">:</span> <span class="token string">"./components/custom-checkbox/custom-checkbox"</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>使用组件</p>
<p>index.wxml</p>
<div class="language-xml line-numbers-mode" data-highlighter="prismjs" data-ext="xml"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>custom-checkbox</span> <span class="token punctuation">/></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p>局部注册</p>
<ul>
<li>
<p>创建组件</p>
<p><img src="/application/weixin/base/099.png" alt=""></p>
</li>
<li>
<p>全局注册</p>
<p>index.json</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"usingComponents"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">"custom-swiper"</span><span class="token operator">:</span><span class="token string">"./custom-swiper/custom-swiper"</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>使用组件</p>
<p>index.wxml</p>
<div class="language-xml line-numbers-mode" data-highlighter="prismjs" data-ext="xml"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>custom-swiper</span><span class="token punctuation">/></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
</ul>
</li>
</ol>
</li>
</ol>
<h2 id="_8-2-数据、方法、属性" tabindex="-1"><a class="header-anchor" href="#_8-2-数据、方法、属性"><span>8.2 数据、方法、属性</span></a></h2>
<ol>
<li>
<p>介绍</p>
<p>组件数据和方法需要在 组件.js 的 Component 方法中进行定义， Component 创建自定义组件</p>
<ul>
<li>data: 定义组件的内部数据</li>
<li>methods: 在组件中事件处理程序需要写到 methods 中才可以</li>
<li>Properties: 是指组件的对外属性，主要用来接收组件使用者传递给组件内部的数据，和 data 一同用于组件的模板渲染</li>
</ul>
</li>
<li>
<p>代码示例</p>
<ul>
<li>父组件</li>
</ul>
<p>index.wxml</p>
<div class="language-xml line-numbers-mode" data-highlighter="prismjs" data-ext="xml"><pre v-pre><code><span class="line"></span>
<span class="line"><span class="token comment">&lt;!-- label 文本显示的内容 --></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>custom-checkbox</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>我已阅读并同意 用户协议 和 隐私协议<span class="token punctuation">"</span></span> <span class="token attr-name">position</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>right<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>line<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>custom-checkbox</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>匿名提交<span class="token punctuation">"</span></span> <span class="token attr-name">position</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>left<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>index.wxss</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token selector">page</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">padding</span><span class="token punctuation">:</span> 50rpx<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">.line</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">margin</span><span class="token punctuation">:</span> 40rpx 15rpx<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">height</span><span class="token punctuation">:</span> 10rpx<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">background-color</span><span class="token punctuation">:</span> chartreuse<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>子组件</li>
</ul>
<p>custom-checkbox.wxml</p>
<div class="language-xml line-numbers-mode" data-highlighter="prismjs" data-ext="xml"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>custom-checkbox-container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>custom-checkbox-box {{ position === 'right'?'right':'left' }}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>checkbox</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>custom-checkbox<span class="token punctuation">"</span></span> <span class="token attr-name">checked</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{ isChecked }}<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">bind:</span>tap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>updateChecked<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span></span>
<span class="line"></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">></span></span></span>
<span class="line">            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>text</span><span class="token punctuation">></span></span>{{ label }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>text</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>custom-checkbox.wxss</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token selector">.custom-checkbox-container</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.custom-checkbox-box</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">.custom-checkbox-box.left</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">flex-direction</span><span class="token punctuation">:</span> row-reverse<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">.custom-checkbox-box.right</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">flex-direction</span><span class="token punctuation">:</span>row<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">.custom-checkbox</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">margin-left</span><span class="token punctuation">:</span> 10rpx<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>custom-checkbox.js</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * 组件的属性列表: 组件的对外属性，主要用来接受组件使用者传递给逐渐内部的属性以及数据</span>
<span class="line">    */</span></span>
<span class="line">    <span class="token literal-property property">properties</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// 如果需要接受传递的属性，有两种方式：全写、简写</span></span>
<span class="line">        <span class="token comment">// label:String</span></span>
<span class="line">        <span class="token literal-property property">label</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token comment">// type 组件使用者传递的数据类型</span></span>
<span class="line">            <span class="token comment">// 数据类型：String、Boolean、Object、Array</span></span>
<span class="line">            <span class="token comment">// 也可以设置为null，表示不限制类型</span></span>
<span class="line">            <span class="token literal-property property">type</span><span class="token operator">:</span>String<span class="token punctuation">,</span></span>
<span class="line">            <span class="token comment">// 设置默认值</span></span>
<span class="line">            <span class="token literal-property property">value</span><span class="token operator">:</span><span class="token string">""</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">position</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token literal-property property">type</span><span class="token operator">:</span>String<span class="token punctuation">,</span></span>
<span class="line">            <span class="token literal-property property">value</span><span class="token operator">:</span><span class="token string">"right"</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * 组件的初始数据：用来定义当前组件内部所需要使用的数据</span>
<span class="line">    */</span></span>
<span class="line">    <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">isChecked</span><span class="token operator">:</span><span class="token boolean">false</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * 组件的方法列表：在组件中，所有的事件处理程序都需要写到 methods 方法中</span>
<span class="line">    */</span></span>
<span class="line">    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// 更新复选框的状态</span></span>
<span class="line">        <span class="token function">updateChecked</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">                <span class="token literal-property property">isChecked</span><span class="token operator">:</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>isChecked<span class="token punctuation">,</span></span>
<span class="line">                <span class="token literal-property property">label</span><span class="token operator">:</span><span class="token string">"在组件内部也可以修改 properties 数据"</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">            <span class="token comment">// 在 JS 中可以访问和获取 properties 中的数据</span></span>
<span class="line">            <span class="token comment">// 但是一般情况下，不建议修改，因为会造成数据流的混乱</span></span>
<span class="line">            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>properties<span class="token punctuation">.</span>label<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>运行结果</li>
</ul>
<p><img src="/application/weixin/base/100.png" alt=""></p>
</li>
<li>
<p>注意事项</p>
<p>设置属性类型需要使用 type 属性，属性类型是必填项，value 属性为默认值属性类型可以为 String、Number、Boolean、Object、Array ，也可以为 null 表示不限制类型</p>
</li>
</ol>
<h2 id="_8-3-插槽-slot" tabindex="-1"><a class="header-anchor" href="#_8-3-插槽-slot"><span>8.3 插槽-slot</span></a></h2>
<ol>
<li>
<p>介绍</p>
<p>在使用基础组件时，可以在组件中间写子节点，从而将子节点的内容展示到页面中，自定义组件也可以接收子节点只不过在组件模板中需要定义<code v-pre>&lt;slot/&gt;</code>节点，用于承载组件中间的子节点</p>
<p>默认情况下，一个组件的 wxml 中只能有一个 slot(默认插槽)。需要使用多 slot 时 ，可以在组件 js 中声明启用。</p>
<p>同时需要给 slot 添加 name 属性来区分不同的 slot (具名插槽)</p>
<p>然后给子节点内容添加 slot属性，属性值是对应 slot 的 name 名称，从而将内容插入到 对应的 slot 中</p>
</li>
<li>
<p>代码示例</p>
<ol>
<li>
<p>新建组件</p>
<p><img src="/application/weixin/base/101.png" alt=""></p>
<p>custom01.js</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 配置项</span></span>
<span class="line">    <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">multipleSlots</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">// 启用多插槽功能</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>custom01.wxml</p>
<div class="language-xml line-numbers-mode" data-highlighter="prismjs" data-ext="xml"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>slot-top<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">&lt;!-- slot 就是用来接受、承载子节点内容 --></span></span>
<span class="line">    <span class="token comment">&lt;!-- slot 只是一个占位符，子节点内容会将 slot 进行替换 --></span></span>
<span class="line">    <span class="token comment">&lt;!-- 默认插槽 --></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token punctuation">/></span></span></span>
<span class="line"></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>slot-bottom<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>配置组件</p>
<p>app.json</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"usingComponents"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">"custom-checkbox"</span><span class="token operator">:</span> <span class="token string">"./components/custom-checkbox/custom-checkbox"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"custom01"</span><span class="token operator">:</span> <span class="token string">"./components/custom01/custom01"</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>使用组件</p>
<p>cate.wxml</p>
<div class="language-xml line-numbers-mode" data-highlighter="prismjs" data-ext="xml"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>custom01</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token comment">&lt;!-- 默认情况下，自定义组件的子节点内容不会进行展示 --></span></span>
<span class="line">    <span class="token comment">&lt;!-- 如果想内容进行展示，需要在组件模板中定义 solt 节点 --></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>slot-top<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>我需要显示到顶部<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span></span>
<span class="line">    我是子节点内容</span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>slot-bottom<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>我需要显示到底部<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>custom01</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>运行结果</p>
<p><img src="/application/weixin/base/102.png" alt=""></p>
</li>
</ol>
</li>
</ol>
<h2 id="_8-4-组件样式" tabindex="-1"><a class="header-anchor" href="#_8-4-组件样式"><span>8.4 组件样式</span></a></h2>
<p>定义组件拥有自己的 wxss 样式，组件 wxss 文件的样式，默认只对当前组件生效</p>
<h3 id="_8-4-1-组件样式" tabindex="-1"><a class="header-anchor" href="#_8-4-1-组件样式"><span>8.4.1 组件样式</span></a></h3>
<p>编写组件样式时，需要注意以下几点:</p>
<ol>
<li><code v-pre>app.wxss</code> 或页面的 <code v-pre>wxss</code> 中使用了标签名(vew)选择器(或一些其他特殊选择器)来直接指定样式, <code v-pre>这些选择器会影响到页面和全部组件，通常情况下这是不推荐的做法</code></li>
<li>组件和引用组件的页面不能使用id 选择器<code v-pre>(#a)</code>、属性选择器<code v-pre>([a])</code>和 标签名选择器，请改用 class</li>
<li>选择器组件和引用组件的页面中使用后代选择器<code v-pre>(.a.b)</code>在一些极端情况下会有非预期的表现，如遇，请避免使用</li>
<li>子元素选择器<code v-pre>(.a&gt;.b)</code>只能用于 view 组件与其子节点之间，用于其他组件可能导致非预期的情况。</li>
<li>继承样式，如font、color ，会从组件外继承到组件内。</li>
<li>除继承样式外，全局中的样式、组件所在页面的的样式对自定义组件无效(除非更改组件样式隔离选项)</li>
</ol>
<h3 id="_8-4-2-样式隔离" tabindex="-1"><a class="header-anchor" href="#_8-4-2-样式隔离"><span>8.4.2 样式隔离</span></a></h3>
<p>默认情况下，自定义组件的样式只受自身 wxss 的影响，但是有时候我们需要组件使用者的样式能够影响到组件,这时候就需要指定特殊的样式隔离选项 styelsolation，选择它支持以下取值:</p>
<ol>
<li>
<p>isolated: 表示启用样式隔离，在自定义组件内外，使用 cass 指定的样式将不会相互影响(一般情况下的默认值)</p>
</li>
<li>
<p>apply-shared: 表示页面 wxss 样式将影响到自定义组件，但自定义组件 wxss 中指定的样式不会影响页面</p>
</li>
<li>
<p>shared:表示页面 wxss 样式将影响到自定义组件，自定义组件 wxss 中指定的样式也会影响页面和其他设置了 apply-shared3.或 shared 的自定义组件。</p>
</li>
</ol>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">options</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">styleIsolation</span><span class="token operator">:</span><span class="token string">"shared"</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-5-3-修改组件原本属性" tabindex="-1"><a class="header-anchor" href="#_8-5-3-修改组件原本属性"><span>8.5.3 修改组件原本属性</span></a></h3>
<ol>
<li>找到公共组件的类</li>
</ol>
<p><img src="/application/weixin/base/103.png" alt=""></p>
<ol start="2">
<li>组件内代码</li>
</ol>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">options</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">styleIsolation</span><span class="token operator">:</span><span class="token string">"shared"</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"></span>
<span class="line"><span class="token comment">/* 复选框组件是公共组件 */</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/* 以后需要再多个页面或者需要再多个项目中进行使用 */</span></span>
<span class="line"><span class="token comment">/* 所以呢，需要先给复选框组件准备、设置一些默认样式 */</span></span>
<span class="line"><span class="token comment">/* 如果在其他页面或者其他项目中使用的时候，发现样式不符合产品需求 */</span></span>
<span class="line"><span class="token comment">/* 可以进行修改、对默认的样式进行修改 */</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/* 1.需要给复选框设置默认样式 */</span></span>
<span class="line"><span class="token comment">/* 需要先找到小程序给复选框提供的类名，通过小程序提供的类名修改才可以 */</span></span>
<span class="line"><span class="token comment">/* 需要先打开小程序开发文档，找到复选框文档，审查元素，进行查找 */</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/* 在自定义组件中，不能直接修改复选框的样式 */</span></span>
<span class="line"><span class="token comment">/* 如果需要进行修改，需要设置 styleIsolation 才可以 */</span></span>
<span class="line"><span class="token comment">/* shared：修改其他页面的样式，组件使用者的样式，以及其他使用了 share 以及 apply-share 的组件 */</span></span>
<span class="line"><span class="token comment">/* 这时候，不是想要的结果 */</span></span>
<span class="line"><span class="token comment">/* 需求是：只想影响当前组件，可以添加类名 */</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/* 复选框没有选中时默认的样式 */</span></span>
<span class="line"><span class="token selector">.custom-checkbox .wx-checkbox-input</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">width</span><span class="token punctuation">:</span> 24rpx <span class="token important">!important</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">height</span><span class="token punctuation">:</span> 24rpx <span class="token important">!important</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">border-radius</span><span class="token punctuation">:</span> 50% <span class="token important">!important</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #fda007 <span class="token important">!important</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">margin-top</span><span class="token punctuation">:</span> -6rpx<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span> </span>
<span class="line"><span class="token comment">/* 复选框选中时默认的样式 */</span></span>
<span class="line"><span class="token selector">.custom-checkbox .wx-checkbox-input-checked</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">background-color</span><span class="token punctuation">:</span> #fda007 <span class="token important">!important</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">/* 复选框选中时√的样式 */</span></span>
<span class="line"><span class="token selector">.wx-checkbox-input.wx-checkbox-input-checked::before</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">font-size</span><span class="token punctuation">:</span> 22rpx<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>组件使用者代码</li>
</ol>
<div class="language-xml line-numbers-mode" data-highlighter="prismjs" data-ext="xml"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>custom<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>custom-checkbox</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>匿名提交<span class="token punctuation">"</span></span> <span class="token attr-name">position</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>left<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    匿名提交 - 222</span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>custom-checkbox</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token comment">/* 2.组件使用者也能够修改默认的样式 */</span></span>
<span class="line"><span class="token selector">.custom .custom-checkbox .wx-checkbox-input</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid lightseagreen <span class="token important">!important</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.custom .custom-checkbox .wx-checkbox-input-checked</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">background-color</span><span class="token punctuation">:</span> lightseagreen <span class="token important">!important</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-5-数据监视器" tabindex="-1"><a class="header-anchor" href="#_8-5-数据监视器"><span>8.5 数据监视器</span></a></h2>
<p>开发者进行业务逻辑的处理</p>
<p>数据监听器主要用于监听和响应任何属性(properies)和 数据(data)的变化，当数据发生变化时就会触发对应回调函数，从而方便在组件中如果需要进行数据监听 需要使用 observers 字段</p>
<ol>
<li>组件代码</li>
</ol>
<p>custom04.wxml</p>
<div class="language-xml line-numbers-mode" data-highlighter="prismjs" data-ext="xml"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">></span></span>{{ num }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">></span></span>{{ count }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">></span></span>{{ obj.name }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">></span></span>{{ arr[1] }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">></span></span>{{ label }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>warn<span class="token punctuation">"</span></span> <span class="token attr-name">plain</span> <span class="token attr-name"><span class="token namespace">bind:</span>tap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>updateData<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>更新数据保存<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>custom04.js</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// components/custom04/custom04.js</span></span>
<span class="line"><span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * 组件的属性列表</span>
<span class="line">   */</span></span>
<span class="line">  <span class="token literal-property property">properties</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">label</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">type</span><span class="token operator">:</span>String<span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">value</span><span class="token operator">:</span><span class="token string">"测试"</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * 组件的初始数据</span>
<span class="line">   */</span></span>
<span class="line">  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">num</span><span class="token operator">:</span><span class="token number">10</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">count</span><span class="token operator">:</span><span class="token number">100</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">obj</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">"tom"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">10</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">arr</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token comment">// 监听数据以及属性是否发生了变化</span></span>
<span class="line">  <span class="token literal-property property">observers</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">     <span class="token comment">// key：需要监听的数据</span></span>
<span class="line">    <span class="token comment">// value: 就是一个回调行数，形参：最新的数据</span></span>
<span class="line">    <span class="token function-variable function">num</span><span class="token operator">:</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">newNum</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// 对data 中的数据进行监听，如果数据没有发生改变，监听器不会执行</span></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newNum<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function-variable function">count</span><span class="token operator">:</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">newCount</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newCount<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 同时监听多个数据</span></span>
<span class="line">    <span class="token string-property property">'num,count'</span><span class="token operator">:</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">newNum<span class="token punctuation">,</span>newCount</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newNum<span class="token punctuation">,</span>newCount<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 支持监听属性以及内部数据的变化</span></span>
<span class="line">    <span class="token string-property property">"obj.name"</span><span class="token operator">:</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">newName</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newName<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"arr[1]"</span><span class="token operator">:</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">newItem</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newItem<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 监听对象所有属性的变化</span></span>
<span class="line">    <span class="token comment">// 使用通配符</span></span>
<span class="line">    <span class="token string-property property">'obj.**'</span><span class="token operator">:</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">newObj</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newObj<span class="token punctuation">)</span><span class="token punctuation">;</span>  </span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">    <span class="token function-variable function">label</span><span class="token operator">:</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">newLabel</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// 只要组件使用者传递了数据，这时候在监听器中就能获取传递的数据</span></span>
<span class="line">      <span class="token comment">// 也就是说，监听器立即就执行了</span></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newLabel<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * 组件的方法列表</span>
<span class="line">   */</span></span>
<span class="line">  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 更新数据</span></span>
<span class="line">    <span class="token function">updateData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">num</span><span class="token operator">:</span><span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>num <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">count</span><span class="token operator">:</span><span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>count <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"obj.name"</span><span class="token operator">:</span><span class="token string">"jerry"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"arr[1]"</span><span class="token operator">:</span><span class="token number">5</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">label</span><span class="token operator">:</span><span class="token string">"最新的数据"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>使用者代码</li>
</ol>
<p>cart.wxml</p>
<div class="language-xml line-numbers-mode" data-highlighter="prismjs" data-ext="xml"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>custom04</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>标题<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="3">
<li>运行结果</li>
</ol>
<p>页面变化</p>
<p><img src="/application/weixin/base/104.gif" alt=""></p>
<p>控制台变化</p>
<p><img src="/application/weixin/base/105.png" alt=""></p>
<h2 id="_8-6-组件通信" tabindex="-1"><a class="header-anchor" href="#_8-6-组件通信"><span>8.6 组件通信</span></a></h2>
<h3 id="_8-6-1-父往子传值" tabindex="-1"><a class="header-anchor" href="#_8-6-1-父往子传值"><span>8.6.1 父往子传值</span></a></h3>
<ol>
<li>
<p>介绍</p>
<p>父组件如果需要向子组件传递数据，只需要两个步骤:</p>
<ol>
<li>在父组件 WXML 中使用 数据绑定 的方式向子组件传递动态数据</li>
<li>子组件内部使用 properties 接收父组件传递的数据即可</li>
</ol>
</li>
<li>
<p>父组件代码</p>
</li>
</ol>
<p>index.wxml</p>
<div class="language-xml line-numbers-mode" data-highlighter="prismjs" data-ext="xml"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">></span></span>父组件<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>custom-checkbox</span> <span class="token attr-name">checked</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{ isChecked }}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>复选框</span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>custom-checkbox</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>index.js</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * 页面的初始数据</span>
<span class="line">   */</span></span>
<span class="line">  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">isChecked</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>子组件代码</li>
</ol>
<p>custom-checkbox.wxml</p>
<div class="language-xml line-numbers-mode" data-highlighter="prismjs" data-ext="xml"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">></span></span>子组件<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>checkbox</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>custom-checkbox<span class="token punctuation">"</span></span> <span class="token attr-name">checked</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{ isChecked }}<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">properties</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 复选框组件公共组件</span></span>
<span class="line">    <span class="token comment">// 需要在多个页面，在多个项目中使用</span></span>
<span class="line">    <span class="token comment">// 在有的地方默认时选中的效果.有的地方希望模式是没有被选中的效果</span></span>
<span class="line">    <span class="token comment">// 怎么处理？</span></span>
<span class="line">    <span class="token comment">// 首先让复选框默认还是没有被选中的效果</span></span>
<span class="line">    <span class="token comment">// 如果希望复选框默认被选中，这时候传递属性 {check=true} 到复选框组件</span></span>
<span class="line"></span>
<span class="line">    <span class="token literal-property property">checked</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">type</span><span class="token operator">:</span>Boolean<span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">value</span><span class="token operator">:</span><span class="token boolean">false</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">isChecked</span><span class="token operator">:</span><span class="token boolean">false</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">observers</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 如果需要将 properties 中数据赋值给data</span></span>
<span class="line">    <span class="token comment">// 可以使用 observers 进行处理</span></span>
<span class="line">    <span class="token function-variable function">checked</span><span class="token operator">:</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">newChecked</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">isChecked</span><span class="token operator">:</span>newChecked</span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-6-2-子往父传值" tabindex="-1"><a class="header-anchor" href="#_8-6-2-子往父传值"><span>8.6.2 子往父传值</span></a></h3>
<ol>
<li>
<p>介绍</p>
<p>子组件如果需要向父组件传递数据，可以通过小程序提供的事件系统实现，可以传递任意数据</p>
<ol>
<li>自定义组件内部使用 triggerEvent 方法发射一个自定义的事件，同时可以携带数据</li>
<li>自定义组件标签上通过 bind 方法监听 发射的事件，同时绑定事件处理函数，在事件函数函数中通过事件对象获取传递的数据</li>
</ol>
</li>
<li>
<p>父组件代码</p>
</li>
</ol>
<p>cart.wxml</p>
<div class="language-xml line-numbers-mode" data-highlighter="prismjs" data-ext="xml"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">></span></span>{{num}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token comment">&lt;!-- 需要在自定义组件标签上，使用bind绑定自定义事件 --></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>custom05</span> <span class="token attr-name"><span class="token namespace">bind:</span>myEvent</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>getData<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>cart.js</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">data</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">num</span><span class="token operator">:</span><span class="token number">3</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token function">getData</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 可以通过 事件对象.detail 获取子组件传递父组件的数据</span></span>
<span class="line">    <span class="token comment">// console.log(event);</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">num</span><span class="token operator">:</span>event<span class="token punctuation">.</span>detail</span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>子组件代码</li>
</ol>
<p>custom05.wxml</p>
<div class="language-xml line-numbers-mode" data-highlighter="prismjs" data-ext="xml"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">plain</span> <span class="token attr-name"><span class="token namespace">bind:</span>tap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>sendData<span class="token punctuation">"</span></span> <span class="token punctuation">></span></span>传递数据<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>custom05.js</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">num</span><span class="token operator">:</span><span class="token number">100</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 将数据传递给父组件</span></span>
<span class="line">    <span class="token function">sendData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// 如果需要将数据传递给父组件</span></span>
<span class="line">      <span class="token comment">// 需要使用triggerEvent 发射自定义事件</span></span>
<span class="line">      <span class="token comment">// 第二个参数，是携带的参数</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">triggerEvent</span><span class="token punctuation">(</span><span class="token string">"myEvent"</span><span class="token punctuation">,</span><span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>num<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-6-3-获取组件实例" tabindex="-1"><a class="header-anchor" href="#_8-6-3-获取组件实例"><span>8.6.3 获取组件实例</span></a></h3>
<ol>
<li>
<p>介绍</p>
<p>父组件可以 通过 this.selectComponent方法，获取子组件实例对象，这样就可以直接访问子组件的任意数据和方法</p>
<p>this.selectComponent方法在调用时需要传入一个匹配选择器 selector</p>
</li>
<li>
<p>父组件代码</p>
</li>
</ol>
<p>index.wxml</p>
<div class="language-xml line-numbers-mode" data-highlighter="prismjs" data-ext="xml"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>custom-checkbox</span> </span>
<span class="line">  <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>我已阅读并同意 用户协议 和 隐私协议<span class="token punctuation">"</span></span> <span class="token attr-name">position</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>right<span class="token punctuation">"</span></span> </span>
<span class="line">  <span class="token attr-name">checked</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{ isChecked }}<span class="token punctuation">"</span></span></span>
<span class="line highlighted">  <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>child<span class="token punctuation">"</span></span></span>
<span class="line highlighted">  <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>child<span class="token punctuation">"</span></span></span>
<span class="line">  <span class="token attr-name"><span class="token namespace">bind:</span>changechecked</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>getData<span class="token punctuation">"</span></span></span>
<span class="line"><span class="token punctuation">></span></span></span>
<span class="line">  我已阅读并同意 用户协议 和 隐私协议 - 111</span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>custom-checkbox</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>index.js</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 获取子组件实例对象</span></span>
<span class="line">  <span class="token function">getChild</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// this.selectComponent 方法获取子组件实例对象</span></span>
<span class="line">    <span class="token comment">// 获取到实例对象以后，就能获取子组件所有的数据，也能调用子组件的方法</span></span>
<span class="line">    <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">selectComponent</span><span class="token punctuation">(</span><span class="token string">".child"</span><span class="token punctuation">)</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>data<span class="token punctuation">.</span>isChecked<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-7-生命周期" tabindex="-1"><a class="header-anchor" href="#_8-7-生命周期"><span>8.7 生命周期</span></a></h2>
<h3 id="_8-7-1-组件生命周期" tabindex="-1"><a class="header-anchor" href="#_8-7-1-组件生命周期"><span>8.7.1 组件生命周期</span></a></h3>
<ol>
<li>
<p>介绍</p>
<p>组件的生命周期:指的是组件自身的一些钩子函数，这些函数在特定的时间节点时被自动触发</p>
<p>组件的生命周期函数需要在 lifetimes 字段内进行声明</p>
<p>组件的生命周期函数有5个:created、attached、ready、 moved、detached</p>
<p><img src="/application/weixin/base/106.png" alt=""></p>
</li>
<li>
<p>父组件代码</p>
</li>
</ol>
<p>profile.wxml</p>
<div class="language-xml line-numbers-mode" data-highlighter="prismjs" data-ext="xml"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>custom06</span> <span class="token attr-name"><span class="token namespace">wx:</span>if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{ num === 1 }}<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>warn<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">bind:</span>tap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handler<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>销毁自定义组件<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>profile.js</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// pages/profile/profile.js</span></span>
<span class="line"><span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">data</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">num</span><span class="token operator">:</span><span class="token number">1</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token function">handler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">num</span><span class="token operator">:</span><span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>num<span class="token operator">+</span><span class="token number">1</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>子组件代码</li>
</ol>
<p>custom06.wxml</p>
<div class="language-xml line-numbers-mode" data-highlighter="prismjs" data-ext="xml"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>text</span><span class="token punctuation">></span></span>{{ name }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>text</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>custom06.js</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">data</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">"tom"</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token comment">// 组件生命周期生命对象</span></span>
<span class="line">  <span class="token literal-property property">lifetimes</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// created：组件实例被创建好以后执行</span></span>
<span class="line">    <span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"created"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token comment">// 在created 钩子函数中不能调用setData</span></span>
<span class="line">      <span class="token comment">// 可以给组件添加一些自定义的属性，可以通过this的方式进行添加</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span>test <span class="token operator">=</span> <span class="token string">'测试'</span></span>
<span class="line">      </span>
<span class="line">      <span class="token comment">// this.setData({</span></span>
<span class="line">      <span class="token comment">//   name:"jerry"</span></span>
<span class="line">      <span class="token comment">// })</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token comment">// 组件被初始化完毕，模板解析完成，已经把组件挂载到页面上</span></span>
<span class="line">    <span class="token function">attached</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// 一般页面中交互在 attached 钩子函数中进行执行</span></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"attached"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">"jerry"</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>test<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token comment">// 组件被销毁时</span></span>
<span class="line">    <span class="token function">detached</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"detached"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-7-2-组件所在页面的生命周期" tabindex="-1"><a class="header-anchor" href="#_8-7-2-组件所在页面的生命周期"><span>8.7.2 组件所在页面的生命周期</span></a></h3>
<ol>
<li>
<p>介绍</p>
<p>组件还有一些特殊的生命周期，这类生命周期和组件没有很强的关联</p>
<p>主要用于组件内部监听父组件的展示、隐藏状态，从而方便组件内部执行一些业务逻辑的处理</p>
<p>组件所在页面的生命周期有4个:show、hide、resize、routeDone，需要在 pageLifetimes 字段内进行声明</p>
<p><img src="/application/weixin/base/107.png" alt=""></p>
</li>
<li>
<p>组件中的代码</p>
</li>
</ol>
<p>custom06.js</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 组件所在页面的生命周期</span></span>
<span class="line">  <span class="token literal-property property">pageLifetimes</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 监听组件所在页面展示（后台切前台）状态</span></span>
<span class="line">    <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"组件所在的页面被展示"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 组件所在页面隐藏（前台切后台、点击talbar）状态</span></span>
<span class="line">    <span class="token function">hide</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"组件所在的页面被隐藏"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-7-3-小程序生命周期" tabindex="-1"><a class="header-anchor" href="#_8-7-3-小程序生命周期"><span>8.7.3 小程序生命周期</span></a></h3>
<ol>
<li>
<p>代码示例</p>
<ul>
<li>小程序应用</li>
</ul>
<p>app.js</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// app.js</span></span>
<span class="line"><span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 当小程序初始化完成，会触发 onLanch (全局只触发一次)</span></span>
<span class="line">  <span class="token function-variable function">onLaunch</span><span class="token operator">:</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"🥇小程序应用 - onLaunch"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// 当小程序启动，或从后台进入前台显示，会触发onShow</span></span>
<span class="line">  <span class="token function-variable function">onShow</span><span class="token operator">:</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"🥇小程序应用 - onShow"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// 当小程序从前台进入后台，会触发 onHide</span></span>
<span class="line">  <span class="token function-variable function">onHide</span><span class="token operator">:</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"🥇小程序应用 - onHide"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>小程序页面market</li>
</ul>
<p>market.js</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// pages/market/market.js</span></span>
<span class="line"><span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// 生命周期函数--监听页面加载</span></span>
<span class="line">  <span class="token function">onLoad</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"🥈小程序页面 - market - onLaod"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// 生命周期函数--监听页面初次渲染完成</span></span>
<span class="line">  <span class="token function">onReady</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"🥈小程序页面 - market - onReady"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// 生命周期函数--监听页面显示</span></span>
<span class="line">  <span class="token function">onShow</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"🥈小程序页面 - market - onShow"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// 生命周期函数--监听页面隐藏</span></span>
<span class="line">  <span class="token function">onHide</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"🥈小程序页面 - market - onHide"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// 生命周期函数--监听页面销毁</span></span>
<span class="line">  <span class="token function">onUnload</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"🥈小程序页面 - market - onUnload"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>market.wxml</p>
<div class="language-xml line-numbers-mode" data-highlighter="prismjs" data-ext="xml"><pre v-pre><code><span class="line"><span class="token comment">&lt;!--pages/market/market.wxml--></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>custom07</span><span class="token punctuation">/></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>navigator</span>  <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>open-box<span class="token punctuation">"</span></span> <span class="token attr-name">url</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/pages/list/list<span class="token punctuation">"</span></span> <span class="token attr-name">open-type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>navigate<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>navigate 跳转<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>navigator</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>navigator</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>open-box<span class="token punctuation">"</span></span> <span class="token attr-name">url</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/pages/list/list<span class="token punctuation">"</span></span> <span class="token attr-name">open-type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>redirect<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>redirect 跳转<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>navigator</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>market.wxss</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token selector">.open-box</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">height</span><span class="token punctuation">:</span> 300rpx<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid springgreen<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">font-size</span><span class="token punctuation">:</span> 30rpx<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">margin-top</span><span class="token punctuation">:</span> 20rpx<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>小程序页面list</li>
</ul>
<p>list.js</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// pages/list/list.js</span></span>
<span class="line"><span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// 生命周期函数--监听页面加载</span></span>
<span class="line">  <span class="token function">onLoad</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"🥈小程序页面 - list - onLaod"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// 生命周期函数--监听页面初次渲染完成</span></span>
<span class="line">  <span class="token function">onReady</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"🥈小程序页面 - list - onReady"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// 生命周期函数--监听页面显示</span></span>
<span class="line">  <span class="token function">onShow</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"🥈小程序页面 - list - onShow"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// 生命周期函数--监听页面隐藏</span></span>
<span class="line">  <span class="token function">onHide</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"🥈小程序页面 - list - onHide"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// 生命周期函数--监听页面销毁</span></span>
<span class="line">  <span class="token function">onUnload</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"🥈小程序页面 - list - onUnload"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>小程序组件</li>
</ul>
<p>custom07.js</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// components/custom07/custom07.js</span></span>
<span class="line"><span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">lifetimes</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"🥉小程序组件 - created"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function">attached</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"🥉小程序组件 - attached"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function">detached</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"🥉小程序组件 - detached"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">pageLifetimes</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"🥉小程序组件 - show"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function">hide</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"🥉小程序组件 - hide"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>小程序冷启动，钩子函数执行的顺序</p>
<ul>
<li>执行示例图</li>
</ul>
<p><img src="/application/weixin/base/108.png" alt=""></p>
<ul>
<li>代码执行结果</li>
</ul>
<p><img src="/application/weixin/base/109.png" alt=""></p>
</li>
<li>
<p>保留当前页面与关闭当前页面</p>
<ul>
<li>执行示例图</li>
</ul>
<p><img src="/application/weixin/base/110.png" alt=""></p>
<ul>
<li>navigate执行结果</li>
</ul>
<p><img src="/application/weixin/base/111.png" alt=""></p>
<ul>
<li>redect执行结果</li>
</ul>
<p><img src="/application/weixin/base/112.png" alt=""></p>
</li>
<li>
<p>热启动</p>
<ul>
<li>执行示例图</li>
</ul>
<p><img src="/application/weixin/base/113.png" alt=""></p>
<ul>
<li>离开页面</li>
</ul>
<p><img src="/application/weixin/base/114.png" alt=""></p>
<ul>
<li>进入页面</li>
</ul>
<p><img src="/application/weixin/base/115.png" alt=""></p>
</li>
</ol>
<h2 id="_8-8-扩展" tabindex="-1"><a class="header-anchor" href="#_8-8-扩展"><span>8.8 扩展</span></a></h2>
<h3 id="_8-8-1-使用-component-构造页面" tabindex="-1"><a class="header-anchor" href="#_8-8-1-使用-component-构造页面"><span>8.8.1 使用 Component 构造页面</span></a></h3>
<ol>
<li>
<p>介绍</p>
<p>Component方法用于创建自定义组件</p>
<p>小程序的页面也可以视为自定义组件，因此页面也可以使用Component方法进行创建，从而实现复杂的页面逻辑开发</p>
</li>
<li>
<p>代码示例</p>
<p>profile.wxml</p>
<div class="language-xml line-numbers-mode" data-highlighter="prismjs" data-ext="xml"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>navigator</span> <span class="token attr-name">url</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/pages/detail/detail?id=10&amp;title=测试<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>跳转到详情页面<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>navigator</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>detail.wxml</p>
<div class="language-xml line-numbers-mode" data-highlighter="prismjs" data-ext="xml"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">></span></span>{{name}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>warn<span class="token punctuation">"</span></span> <span class="token attr-name">plain</span> <span class="token attr-name"><span class="token namespace">bind:</span>tap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>updateName<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>更新数据<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>detail.js</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 为什么需要 Component 方法进行构造页面</span></span>
<span class="line">  <span class="token comment">// Component 方法功能比 Page 方法强大很多</span></span>
<span class="line">  <span class="token comment">// 如果使用 Component 方法构造页面，可以实现更加复杂的页面逻辑开发</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// 小程序页面也可以使用 Component 方法进行构造</span></span>
<span class="line">  <span class="token comment">// 注意事项：</span></span>
<span class="line">  <span class="token comment">// 1. 要求 .json 文件中必须包含 usingComponents 字段</span></span>
<span class="line">  <span class="token comment">// 2. 里面的配置项需要和 Component 中的配置项保持一致</span></span>
<span class="line">  <span class="token comment">// 3. 页面中 Page 方法有一些钩子函数、事件监听方法，这些钩子函数，事件监听方法必须放 methods 方法中才可以</span></span>
<span class="line">  <span class="token comment">// 4. 组件的属性 properties 也可以接受页面的参数，在onLoad 钩子函数中可以通过 this.data 进行获取</span></span>
<span class="line"></span>
<span class="line">  <span class="token literal-property property">properties</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">id</span><span class="token operator">:</span>String<span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">title</span><span class="token operator">:</span>String</span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">  <span class="token literal-property property">data</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'tom'</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">methods</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">updateName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">"jerry"</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">    <span class="token function">onLoad</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"页面加载"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token comment">// console.log(options);</span></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>title<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>properties<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h3 id="_8-8-2-组件复制机制-behaviors" tabindex="-1"><a class="header-anchor" href="#_8-8-2-组件复制机制-behaviors"><span>8.8.2 组件复制机制 behaviors</span></a></h3>
<ol>
<li>
<p>介绍</p>
<p>小程序的 behaviors 方法是一种代码复用的方式，可以将一些通用的逻辑和方法提取出来，然后在多个组件中复用，从而减少代码冗余，提高代码的可维护性。</p>
<p>如果需要 behavior 复用代码，需要使用 Behavior()方法，每个 behavior 可以包含一组属性、数据、生命周期函数和方法组件引用它时，它的属性、数据和方法会被合并到组件中，生命周期函数也会在对应时机被调用</p>
<p>组件和它引用的 behavior 中可以包含同名的字段，对这些字段的处理方法如下:</p>
<ol>
<li>如果有同名的属性或方法，采用“就近原则&quot;，组件会覆盖 behavior 中的同名属性或方法</li>
<li>如果有同名的数据字段且都是对象类型，会进行对象合并，其余情况会 采用“就近原则”进行数据覆盖</li>
<li>生命周期函数和 observers 不会相互覆盖，会是在对应触发时机被逐个调用，也就是都会被执行</li>
</ol>
</li>
<li>
<p>代码示例</p>
<ul>
<li>
<p>父组件</p>
<p>profile.wxml</p>
<div class="language-xml line-numbers-mode" data-highlighter="prismjs" data-ext="xml"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>custom08</span><span class="token punctuation">/></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p>子组件</p>
<p>custom08.wxml</p>
<div class="language-xml line-numbers-mode" data-highlighter="prismjs" data-ext="xml"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">></span></span>{{ label }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">></span></span>{{ name }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">></span></span>{{ obj.name }} - {{ obj.age }} <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">plain</span> <span class="token attr-name"><span class="token namespace">bind:</span>tap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>updateName<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>更新数据<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>custom08.js</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> behavior <span class="token keyword">from</span> <span class="token string">"./behavior"</span></span>
<span class="line"></span>
<span class="line"><span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">behaviors</span><span class="token operator">:</span><span class="token punctuation">[</span>behavior<span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// 在以后开发中，使用benaviors 进行代码复用时</span></span>
<span class="line">  <span class="token comment">// 组件 和 behaviors 可能会存在相同的字段</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// 如果存在相同的 properties, 就近原则，使用组件内部的数据</span></span>
<span class="line">  <span class="token literal-property property">properties</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">label</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">type</span><span class="token operator">:</span>String<span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">value</span><span class="token operator">:</span><span class="token string">"匿名提交"</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token comment">// 如果存在相同的data</span></span>
<span class="line">  <span class="token comment">// 如果时对象类型,属性会合并</span></span>
<span class="line">  <span class="token comment">// 如果不是对象类型的数据，就近原则，展示组件内部数据</span></span>
<span class="line">  <span class="token literal-property property">data</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">"组件中的name"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">obj</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// name:"组件中的 obj name",</span></span>
<span class="line">      <span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">100</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token comment">// 如果存在相同的方法，就近原则，调用组件内部方法</span></span>
<span class="line">  <span class="token literal-property property">methods</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">updateName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"我是组件内部的方法"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// 如果存在相同的生命周期函数，生命周期函数都会触发</span></span>
<span class="line">  <span class="token literal-property property">lifetimes</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">attached</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"我是组件内部调用的生命周期函数"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>behavior 文件</p>
<p>behavior.js</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> behavior <span class="token operator">=</span> <span class="token function">Behavior</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">properties</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">"我已同意该协议"</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"tom"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">obj</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Tyke"</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">updateName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"behavior 方法"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"jerry"</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">lifetimes</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">attached</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"我是 behavior 的生命周期函数"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> behavior</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
</ol>
<h3 id="_8-8-3-外部样式类" tabindex="-1"><a class="header-anchor" href="#_8-8-3-外部样式类"><span>8.8.3 外部样式类</span></a></h3>
<ol>
<li>
<p>介绍</p>
<p>默认情况下，组件和组件使用者之间如果存在相同的类名不会相互影响，组件使用者如果想修改组件的样式，需要就解除样式隔离但是解除样式隔离以后，在极端情况下，会产生样式冲突、CSS 嵌套太深等问题，从而给我们的开发带来一定的麻烦。</p>
<p>外部样式类:在使用组件时，组件使用者可以给组件传入CSS类名，通过传入的类名修改组件的样式</p>
<p>如果需要使用外部样式类修改组件的样式，在 Component 中需要用 extemalClasses 定义若千个外部样式类。</p>
<p>外部样式类的使用步骤:</p>
<ol>
<li>在 Component 中用 extemalClasses 定义段定义若干个外部样式类</li>
<li>自定义组件标签通过 属性绑定 的方式提供一个样式类，属性是 exteralClasses 定义的元素，属性值是传递的类名2.</li>
<li>将接受到的样式类用于自定义组件内部</li>
</ol>
</li>
<li>
<p>代码示例</p>
<ul>
<li>
<p>父组件代码</p>
<p>profile.wxml</p>
<div class="language-xml line-numbers-mode" data-highlighter="prismjs" data-ext="xml"><pre v-pre><code><span class="line"><span class="token comment">&lt;!-- 属性名是正在 externalClasses 里面定义的元素 --></span></span>
<span class="line"><span class="token comment">&lt;!-- 属性值必须是一个类名 --></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>custom09</span> <span class="token attr-name">extend-class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>my-class<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>profile.wxss</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token selector">.my-class</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">color</span><span class="token punctuation">:</span> lightseagreen<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>子组件代码</p>
<p>custom09.wxml</p>
<div class="language-xml line-numbers-mode" data-highlighter="prismjs" data-ext="xml"><pre v-pre><code><span class="line"><span class="token comment">&lt;!-- 在同一个节点上，如果存在外部样式类 和 普通样式类 --></span></span>
<span class="line"><span class="token comment">&lt;!-- 两个类的优先级是未定义的 --></span></span>
<span class="line"><span class="token comment">&lt;!-- 建议：在使用外部样式类时，样式需要通过 !important 添加权重 --></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>extend-class box<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>通过外部样式类修改组件的样式<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>custom09.js</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 组件接受的外部样式类</span></span>
<span class="line">  <span class="token literal-property property">externalClasses</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">'extend-class'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>custom09.wxss</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token selector">.box</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">color</span><span class="token punctuation">:</span> lightsalmon<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p>注意事项:</p>
<p>在同一个节点上使用普通样式类和外部样式类时，两个类的优先级是未定义的，因此需要添加 important 以保证外部样式类的优先级</p>
<p>如果 styleIsolation 属性值是 shared ,这时候 externalClasses 会失效</p>
</li>
</ol>
</div></template>


