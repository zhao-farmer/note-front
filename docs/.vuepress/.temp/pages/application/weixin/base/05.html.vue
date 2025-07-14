<template><div><h1 id="五、wxml-语法" tabindex="-1"><a class="header-anchor" href="#五、wxml-语法"><span>五、wxml 语法</span></a></h1>
<h2 id="_5-1-模板语法" tabindex="-1"><a class="header-anchor" href="#_5-1-模板语法"><span>5.1 模板语法</span></a></h2>
<ol>
<li>
<p>介绍
小程序页面中使用的数据均需要在 <code v-pre>Page()</code>方法的 <code v-pre>data</code> 对象中进行声明定义在将数据声明好以后，在 WXML 使用 <code v-pre>Mustache 语法(双大括号{{}})</code>将变量包起来，从而将数据绑定</p>
<p>在<code v-pre>{{ }}</code>内部可以做一些简单的运算，支持如下几种方式:</p>
<ol>
<li>算数运算</li>
<li>三元运算</li>
<li>逻辑判断</li>
<li>其他...</li>
</ol>
</li>
<li>
<p>代码颜色</p>
<ul>
<li>代码</li>
</ul>
<p>index.wxml</p>
<div class="language-xml line-numbers-mode" data-highlighter="prismjs" data-ext="xml"><pre v-pre><code><span class="line"><span class="token comment">&lt;!-- 如果需要展示数据，在wxml中需要使用双大括号写法 --></span></span>
<span class="line"></span>
<span class="line"><span class="token comment">&lt;!-- 展示内容 --></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">></span></span>{{school}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">></span></span>{{obj.name}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token comment">&lt;!-- 绑定属性值，如果需要动态绑定一个变量，属性值也需要大括号包裹起来 --></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{id}}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>绑定属性值<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token comment">&lt;!-- 如果属性值是布尔值，也需要需要使用双大括号包裹起来 --></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>checkbox</span> <span class="token attr-name">checked</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{ isChecked }}<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token comment">&lt;!-- 算术运算 --></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">></span></span>{{ id + 1 }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">></span></span>{{ id - 1 }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token comment">&lt;!-- 三元运算 --></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">></span></span>{{ id === 1 ? '等于':'不等于'}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token comment">&lt;!-- 逻辑判断 --></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">></span></span>{{ id === 1 }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token comment">&lt;!-- 在双大括号内部，只能写表达式，不能写语句，也不能调用js的方法 --></span></span>
<span class="line"><span class="token comment">&lt;!-- &lt;view>{{ if(id === 1){} }}&lt;/view> --></span></span>
<span class="line"><span class="token comment">&lt;!-- &lt;view>{{ for(const i = 0;i&lt;=10;i++){} }}&lt;/view> --></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">></span></span>{{obj.name.toUppercase()}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>index.js</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// index.js</span></span>
<span class="line"><span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 在小程序页面中所需要使用的数据均来自于 data</span></span>
<span class="line">    <span class="token literal-property property">data</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">id</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">isChecked</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">school</span><span class="token operator">:</span><span class="token string">'尚硅谷'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">obj</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">"tom"</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>运行结果</li>
</ul>
<p><img src="/application/weixin/base/066.png" alt=""></p>
</li>
<li>
<p>注意事项</p>
</li>
</ol>
<p>在<code v-pre>{{}}</code>语法中，只能写表达式，不能写语句，也不能调用js 相关的方法</p>
<h2 id="_5-2-setdata修改数据" tabindex="-1"><a class="header-anchor" href="#_5-2-setdata修改数据"><span>5.2 setData修改数据</span></a></h2>
<p>小程序中修改数据不推荐通过赋值的方式进行修改，通过赋值的方式修改数据无法改变页面的数据而是要通过调用 <code v-pre>setData()</code>方法进行修改，<code v-pre>setData()</code>方法接收对象作为参数，key 是需要修改的数据，value 是最新的值</p>
<p><code v-pre>setData()</code>方法有两个作用:</p>
<ol>
<li>更新数据</li>
<li>驱动视图更新</li>
</ol>
<h3 id="_5-2-1-修改基础数据" tabindex="-1"><a class="header-anchor" href="#_5-2-1-修改基础数据"><span>5.2.1 修改基础数据</span></a></h3>
<ul>
<li>代码</li>
</ul>
<p>cate.wxml</p>
<div class="language-xml line-numbers-mode" data-highlighter="prismjs" data-ext="xml"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">></span></span>{{num}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name"><span class="token namespace">bind:</span>tap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>updateNum<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>更新 num<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>cate.js</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// pages/cate/cate.js</span></span>
<span class="line"><span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line"><span class="token literal-property property">data</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">num</span><span class="token operator">:</span><span class="token number">1</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 更新num</span></span>
<span class="line"><span class="token function">updateNum</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 通过赋值的方式直接修改数据</span></span>
<span class="line">    <span class="token comment">// 能够修改数据，不能改变页面上的数据</span></span>
<span class="line">    <span class="token comment">// this.data.num += 1</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// this.setData 两个作用</span></span>
<span class="line">    <span class="token comment">// 1. 更新数据</span></span>
<span class="line">    <span class="token comment">// 2. 驱动视图（页面）更新</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// key： 是需要更新的数据</span></span>
<span class="line">    <span class="token comment">// value：是最新的值</span></span>
<span class="line">    <span class="token literal-property property">num</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>num <span class="token operator">+</span> <span class="token number">1</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 获取数据</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>运行结果</li>
</ul>
<p><img src="/application/weixin/base/067.gif" alt=""></p>
<h3 id="_5-2-2-修改对象数据" tabindex="-1"><a class="header-anchor" href="#_5-2-2-修改对象数据"><span>5.2.2 修改对象数据</span></a></h3>
<ul>
<li>代码</li>
</ul>
<p>cate.wxml</p>
<div class="language-xml line-numbers-mode" data-highlighter="prismjs" data-ext="xml"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">></span></span>新增->  姓名：{{ userInfo1.name }} 年龄：{{ userInfo1.age }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">></span></span>直接修改->  姓名：{{ userInfo2.name }} 年龄：{{ userInfo2.age }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">></span></span>展开运算符->  姓名：{{ userInfo3.name }} 年龄：{{ userInfo3.age }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">></span></span>Object.assign()->  姓名：{{ userInfo4.name }} 年龄：{{ userInfo4.age }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">></span></span>删除单属性 ->  姓名：{{ userInfo5.name }} 年龄：{{ userInfo5.age }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">></span></span>删除多属性 ->  姓名：{{ userInfo6.name }} 年龄：{{ userInfo6.age }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>warn<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">bind:</span>tap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>updateUserInfo<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>修改对象类型数据<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>cate.js</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// pages/cate/cate.js</span></span>
<span class="line"><span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">data</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">userInfo1</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">    </span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">userInfo2</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">"张三"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">18</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">userInfo3</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">"张三"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">18</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">userInfo4</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">"张三"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">18</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">userInfo5</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">"张三"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">18</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">userInfo6</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">"张三"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">18</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token comment">// 更新 userInfo</span></span>
<span class="line">  <span class="token function">updateUserInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 新增单个 / 多个 属性</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// 如果给对象新增属性，可以将key写成数据路径的方式 a.b.c</span></span>
<span class="line">      <span class="token string-property property">"userInfo1.name"</span><span class="token operator">:</span><span class="token string">"tom"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"userInfo1.age"</span><span class="token operator">:</span><span class="token string">"10"</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 修改单个 / 多个 属性</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// 如果需要修改对象属性，也可以将key写成数据路径的方式 a.b.c</span></span>
<span class="line">      <span class="token string-property property">"userInfo2.name"</span><span class="token operator">:</span><span class="token string">"jerry"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"userInfo2.age"</span><span class="token operator">:</span><span class="token string">"18"</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 目前进行新增和修改都是使用数据路径，如果新增和修改的数据量比较小，还可以;</span></span>
<span class="line">    <span class="token comment">// 如果修改的数据很多，每次都写数据路径，就太麻烦了</span></span>
<span class="line">    <span class="token comment">// 可以使用 ES6 提供的 展开运算符 和 Object.assign()</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// ES6 提供的展开运算符</span></span>
<span class="line">    <span class="token comment">// 通过展开运算符能够将对象的属性复制给另一个对象</span></span>
<span class="line">    <span class="token comment">// 后面的属性会覆盖前面的属性</span></span>
<span class="line">    <span class="token keyword">const</span> userInfo3 <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token operator">...</span><span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>userInfo3<span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'Mia'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">20</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      userInfo3</span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// Object.assign() 将多个对象合并为一个对象</span></span>
<span class="line">    <span class="token keyword">const</span> userInfo4 <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>userInfo4<span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'mary'</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">26</span><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      userInfo4</span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 删除单个属性</span></span>
<span class="line">    <span class="token keyword">delete</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>userInfo5<span class="token punctuation">.</span>age</span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">userInfo5</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>userInfo5</span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 删除多个属性</span></span>
<span class="line">    <span class="token keyword">const</span> <span class="token punctuation">{</span>age<span class="token punctuation">,</span>name<span class="token punctuation">,</span><span class="token operator">...</span>rest<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>userInfo6</span>
<span class="line"></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">userInfo6</span><span class="token operator">:</span>rest</span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>运行结果</li>
</ul>
<p><img src="/application/weixin/base/068.gif" alt=""></p>
<h3 id="_5-2-3-修改数组数据" tabindex="-1"><a class="header-anchor" href="#_5-2-3-修改数组数据"><span>5.2.3 修改数组数据</span></a></h3>
<ul>
<li>代码</li>
</ul>
<p>cate.wxml</p>
<div class="language-xml line-numbers-mode" data-highlighter="prismjs" data-ext="xml"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">></span></span></span>
<span class="line">  基础新增</span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>text</span> <span class="token attr-name"><span class="token namespace">wx:</span>for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{list1}}<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">wx:</span>key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>index<span class="token punctuation">"</span></span><span class="token punctuation">></span></span> {{item}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>text</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">></span></span></span>
<span class="line">  连接删除</span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>text</span> <span class="token attr-name"><span class="token namespace">wx:</span>for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{list2}}<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">wx:</span>key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>index<span class="token punctuation">"</span></span><span class="token punctuation">></span></span> {{item}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>text</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">></span></span></span>
<span class="line">  展开新增</span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>text</span> <span class="token attr-name"><span class="token namespace">wx:</span>for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{list3}}<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">wx:</span>key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>index<span class="token punctuation">"</span></span><span class="token punctuation">></span></span> {{item}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>text</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">></span></span></span>
<span class="line">  基础修改</span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>text</span> <span class="token attr-name"><span class="token namespace">wx:</span>for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{list4}}<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">wx:</span>key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>index<span class="token punctuation">"</span></span><span class="token punctuation">></span></span> {{item}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>text</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">></span></span></span>
<span class="line">  数组对象修改</span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>text</span><span class="token punctuation">></span></span> {{list5[0].name}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>text</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">></span></span></span>
<span class="line">  删除方式一</span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>text</span> <span class="token attr-name"><span class="token namespace">wx:</span>for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{list6}}<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">wx:</span>key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>index<span class="token punctuation">"</span></span><span class="token punctuation">></span></span> {{item}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>text</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">></span></span></span>
<span class="line">  删除方式二</span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>text</span> <span class="token attr-name"><span class="token namespace">wx:</span>for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{list6}}<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">wx:</span>key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>index<span class="token punctuation">"</span></span><span class="token punctuation">></span></span> {{item}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>text</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">bind:</span>tap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>updateList<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>修改数组类型数据<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>cate.js</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// pages/cate/cate.js</span></span>
<span class="line"><span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">data</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">list1</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">list2</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">list3</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">list4</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">list5</span><span class="token operator">:</span><span class="token punctuation">[</span></span>
<span class="line">      <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">"tom"</span><span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">list6</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">list7</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// 更新 list</span></span>
<span class="line">  <span class="token function">updateList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 新增数组元素</span></span>
<span class="line">    <span class="token comment">// 如果直接使用 push 方法，可以直接更新 data , 但是不能更新 页面中的数据</span></span>
<span class="line">    <span class="token comment">// this.data.list.push(4)</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 第一种</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>list1<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">list1</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>list1</span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 第二种</span></span>
<span class="line">    <span class="token keyword">const</span> newList1 <span class="token operator">=</span>  <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>list2<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">list2</span><span class="token operator">:</span>newList1</span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 第三种</span></span>
<span class="line">    <span class="token keyword">const</span> newList2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>list3<span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">]</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">list3</span><span class="token operator">:</span>newList2</span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 修改数组元素</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token string-property property">'list4[1]'</span><span class="token operator">:</span><span class="token number">7</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">'list5[0].name'</span><span class="token operator">:</span><span class="token string">'jerry'</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 删除数组元素</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 第一种</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>list6<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">list6</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>list6</span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 第二种</span></span>
<span class="line">    <span class="token keyword">const</span> newList3 <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>list7<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token operator">=></span> item<span class="token operator">!==</span><span class="token number">2</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">list7</span><span class="token operator">:</span> newList3</span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>运行结果</li>
</ul>
<p><img src="/application/weixin/base/069.gif" alt=""></p>
<h2 id="_5-2-简易双向绑定" tabindex="-1"><a class="header-anchor" href="#_5-2-简易双向绑定"><span>5.2 简易双向绑定</span></a></h2>
<ol>
<li>
<p>介绍</p>
<p>在 WXML 中，普通属性的绑定是单向的，例如:<code v-pre>&lt;input value=&quot;{{value}}&quot;/&gt;</code>如果希望用户输入数据的同时改变 data 中的数据，可以借助简易双向绑定机制。在对应属性之前添加 <code v-pre>model:</code> 前缀即可:例<code v-pre>&lt;input model:value=&quot;{{value}}&quot;</code> /&gt;</p>
</li>
<li>
<p>代码示例</p>
<ul>
<li>代码</li>
</ul>
<p>cart.wxml</p>
<div class="language-xml line-numbers-mode" data-highlighter="prismjs" data-ext="xml"><pre v-pre><code><span class="line"><span class="token comment">&lt;!-- 单向绑定：数据影响页面，但是页面更新不会影响到数据 --></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>text</span><span class="token punctuation">></span></span>单向数据绑定 value值: {{value1}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>text</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{ value1 }}<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span></span>
<span class="line"></span>
<span class="line"><span class="token comment">&lt;!-- 双向绑定：数据能影响页面，页面更新也能影响数据 --></span></span>
<span class="line"><span class="token comment">&lt;!-- 如果想实现简易双向绑定，需要在对应属性之前添加 model: --></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>text</span><span class="token punctuation">></span></span>双向数据绑定 value值: {{value2}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>text</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">model:</span>value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{ value2 }}<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span></span>
<span class="line"></span>
<span class="line"><span class="token comment">&lt;!-- 如果需要获取复选框的选中效果，需要给checked 添加model才可以 --></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>text</span><span class="token punctuation">></span></span>checked值：{{isChecked}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>text</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>checkbox</span> <span class="token attr-name"><span class="token namespace">model:</span>checked</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{ isChecked }}<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span> 绑定复选框</span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token comment">&lt;!-- 注意事项1：属性值只能是一个单一字段的绑定 --></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>text</span><span class="token punctuation">></span></span>测试单一字段 value值: {{value3}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>text</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">model:</span>value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>值为 {{value3}}<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token comment">&lt;!-- 注意事项2：属性值不能写数据路径，也就是不支持对象和数组 --></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>text</span><span class="token punctuation">></span></span>测试对象属性值 value值: {{obj.value}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>text</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">model:</span>value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{obj.value}}<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>cart.js</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// pages/cart/cart.js</span></span>
<span class="line"><span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">data</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">value1</span><span class="token operator">:</span><span class="token number">123</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">value2</span><span class="token operator">:</span><span class="token number">123</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">value3</span><span class="token operator">:</span><span class="token number">123</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">isChecked</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">obj</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">id</span><span class="token operator">:</span><span class="token string">"1"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">value</span><span class="token operator">:</span><span class="token number">123</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>运行结果</li>
</ul>
<p><img src="/application/weixin/base/070.gif" alt=""></p>
</li>
<li>
<p>注意事项:简易双向绑定的属性值如下限制:</p>
<ol>
<li>只能是一个单一字段的绑定，例如:错误用法:<code v-pre>&lt;input model:value=&quot;值为《{value}}&quot;/&gt;</code></li>
<li>尚不能写 data 路径，也就是不支持数组和对象，例如:错误用法:<code v-pre>&lt;input model:value=&quot;{{a.b}}&quot; /&gt;</code></li>
</ol>
</li>
</ol>
<h2 id="_5-3-列表渲染" tabindex="-1"><a class="header-anchor" href="#_5-3-列表渲染"><span>5.3 列表渲染</span></a></h2>
<p>列表渲染 就是指通过循环遍历一个数组或对象，将其中的每个元素渲染到页面上</p>
<h3 id="_5-3-1-基本使用" tabindex="-1"><a class="header-anchor" href="#_5-3-1-基本使用"><span>5.3.1 基本使用</span></a></h3>
<ol>
<li>
<p>介绍</p>
<p>在组件上使用 wx:for 属性绑定一个数组或对象，既可使用每一项数据重复渲染当前组件
每一项的变量名默认为 item，下标变量名默认为 index</p>
<p>在使用 wx:for 进行遍历的时候，<code v-pre>建议加上 wx:key 属性</code>， wx:key 的值以两种形式提供:</p>
<ol>
<li>字符串:代表需要遍历的 array 中item 的某个属性，该属性的值需要是列表中唯一的字符串或数字，且不能动态改变</li>
<li>保留关键字 *this 代表在 for 循环中的 item 本身，当 item 本身是一个唯一的字符串或者数字时可以使用</li>
</ol>
</li>
<li>
<p>代码示例</p>
<ul>
<li>代码</li>
</ul>
<p>cart.wxml</p>
<div class="language-xml line-numbers-mode" data-highlighter="prismjs" data-ext="xml"><pre v-pre><code><span class="line"><span class="token comment">&lt;!-- 如果需要进行列表渲染，需要使用 wx:for 属性 --></span></span>
<span class="line"><span class="token comment">&lt;!-- 属性需要使用双大括号进行包裹 --></span></span>
<span class="line"><span class="token comment">&lt;!-- 每一项的变量默认是 item --></span></span>
<span class="line"><span class="token comment">&lt;!-- 每一项下标（索引）的变量名默认是 intex --></span></span>
<span class="line"></span>
<span class="line"><span class="token comment">&lt;!-- 如果渲染的是数组 item: 数组的每一项，index: 下标--></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name"><span class="token namespace">wx:</span>for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{ numList }}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{ item }} - {{ index }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token comment">&lt;!-- 如果渲染的是数组 item: 对象属性的值，index: 对象属性--></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name"><span class="token namespace">wx:</span>for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{ obj }}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{ item }} - {{ index }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token comment">&lt;!-- wx:key 提升性能 --></span></span>
<span class="line"><span class="token comment">&lt;!-- wx:key 属性值有两种添加形式 --></span></span>
<span class="line"><span class="token comment">&lt;!-- 1. 字符串，需要是遍历的数组种 item 的某个属性，要求该属性是列表种唯一的字符串或者数字，不能进行动态变换 --></span></span>
<span class="line"><span class="token comment">&lt;!-- 2. 保留关键字 *this, *this 代表是 item 本身，item 本身是唯一的字符串或者数字 --></span></span>
<span class="line"></span>
<span class="line"><span class="token comment">&lt;!-- wx:key 的属性值不需要使用双大括号进行包裹，直接写遍历的数组中 item 的某个属性 --></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>text</span> <span class="token attr-name"><span class="token namespace">wx:</span>for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{ fruitList }}<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">wx:</span>key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>id<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{ item.name }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>text</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>text</span> <span class="token attr-name"><span class="token namespace">wx:</span>for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{ fruitList }}<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">wx:</span>key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>index<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{ item.name }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>text</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>text</span> <span class="token attr-name"><span class="token namespace">wx:</span>for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{ numList }}<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">wx:</span>key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>index<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{ item }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>text</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>cart.js</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// pages/profile/profile.js</span></span>
<span class="line"><span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">data</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">numList</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">fruitList</span><span class="token operator">:</span><span class="token punctuation">[</span></span>
<span class="line">      <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">"🍎"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">"🍋"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">"🍅"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">obj</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">"tom"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">18</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>运行结果</li>
</ul>
<p><img src="/application/weixin/base/071.png" alt=""></p>
</li>
<li>
<p>注意事项:</p>
<ol>
<li>如果不加 wx:key，会报一个 warning，如果明确知道该列表是静态，即以后数据不会改变，或者不必关注其顺序，可以选择忽略。</li>
<li>在给 wx:key 添加属性值的时候，不需要使用双大括号语法，直接使用遍历的 array 中 item 的某个属性</li>
</ol>
</li>
</ol>
<h3 id="_5-3-2-进阶用法" tabindex="-1"><a class="header-anchor" href="#_5-3-2-进阶用法"><span>5.3.2 进阶用法</span></a></h3>
<ol>
<li>
<p>介绍</p>
<ol>
<li>
<p>如果需要对默认的变量名和下标进行修改，可以使用wx:for-item和 wx:for-index</p>
<ul>
<li>使用 wx:for-item 可以指定数组当前元素的变量名</li>
<li>使用 wx:for-index 可以指定数组当前下标的变量名</li>
</ul>
</li>
<li>
<p>将 wx:for 用在<code v-pre>&lt;block /&gt;</code>标签上，以渲染一个包含多个节点的结构块</p>
<ul>
<li><code v-pre>&lt;block /&gt;</code>并不是一个组件，它仅仅是一个包装元素，不会在页面中做任何渲染，只接受控制属性</li>
<li><code v-pre>&lt;block /&gt;</code>标签在 wxml中可以用于组织代码结构，支持列表渲染、条件渲染等</li>
</ul>
</li>
</ol>
</li>
<li>
<p>代码示例</p>
<ul>
<li>代码
cart.wxml</li>
</ul>
<div class="language-xml line-numbers-mode" data-highlighter="prismjs" data-ext="xml"><pre v-pre><code><span class="line"><span class="token comment">&lt;!-- 如果需要修改默认的变量名，需要使用 wx:for-item 属性 --></span></span>
<span class="line"><span class="token comment">&lt;!-- 如果需要修改默认的下标变量名，需要使用 wx:for-index 属性 --></span></span>
<span class="line"><span class="token comment">&lt;!-- 两个属性需要和 wx:for 卸载同一个组件上 --></span></span>
<span class="line"><span class="token comment">&lt;!-- 再重命名、修改以后，需要使用最新的变量名 --></span></span>
<span class="line"></span>
<span class="line"><span class="token comment">&lt;!-- 数组 --></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name"><span class="token namespace">wx:</span>for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{ fruitList }}<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">wx:</span>key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>id<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">wx:</span>for-item</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fruitItem<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">wx:</span>for-index</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>i<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">  {{ fruitItem.name }}</span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token comment">&lt;!-- 对象 --></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name"><span class="token namespace">wx:</span>for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{ obj }}<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">wx:</span>key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>index<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">wx:</span>for-item</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>value<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">wx:</span>for-index</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>key<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">  {{ key }} - {{value}}</span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token comment">&lt;!-- block 不是一个组件，只是渲染元素 --></span></span>
<span class="line"><span class="token comment">&lt;!-- 也就是只是包装元素，可以组织代码结构，支持列表渲染 --></span></span>
<span class="line"><span class="token comment">&lt;!-- block 不会在页面中做任何渲染，只接受控制属性 --></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>block</span> <span class="token attr-name"><span class="token namespace">wx:</span>for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{ fruitList }}<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">wx:</span>key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>id<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">wx:</span>for-item</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fruitItem<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">wx:</span>for-index</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>i<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">></span></span>名字：{{ fruitItem.name }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">></span></span>价格：{{ fruitItem.price }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>block</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>cart.js</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// pages/profile/profile.js</span></span>
<span class="line"><span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">data</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">numList</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">fruitList</span><span class="token operator">:</span><span class="token punctuation">[</span></span>
<span class="line">      <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">"🍎"</span> <span class="token punctuation">,</span> <span class="token literal-property property">price</span><span class="token operator">:</span> <span class="token number">66</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">"🍋"</span> <span class="token punctuation">,</span> <span class="token literal-property property">price</span><span class="token operator">:</span> <span class="token number">77</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">"🍅"</span> <span class="token punctuation">,</span> <span class="token literal-property property">price</span><span class="token operator">:</span> <span class="token number">88</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">obj</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">"tom"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">18</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>运行结果</li>
</ul>
<p><img src="/application/weixin/base/072.png" alt=""></p>
</li>
</ol>
<h2 id="_5-4-条件渲染" tabindex="-1"><a class="header-anchor" href="#_5-4-条件渲染"><span>5.4 条件渲染</span></a></h2>
<ol>
<li>
<p>介绍</p>
<ul>
<li>
<p>条件渲染主要用来控制页面结构的展示和隐藏，在微信小程序中实现条件渲染有两种方式:</p>
<ol>
<li>使用 <code v-pre>wx:if</code>、<code v-pre>wx:elif</code>、<code v-pre>wx:else</code> 属性组</li>
<li>使用 <code v-pre>hidden</code> 属性</li>
</ol>
</li>
<li>
<p><code v-pre>wx:if</code> 和 <code v-pre>hidden</code> 二者的区别:</p>
<ol>
<li><code v-pre>wx:if</code>:当条件为 true 时将结构展示出来，否则结构不会进行展示，通过 移除新增节点 的方式来实现</li>
<li><code v-pre>hidden</code> :当条件为 true 时会将结构隐藏，否则结构会展示出来，通过 display 样式属性 来实现的</li>
</ol>
</li>
</ul>
</li>
<li>
<p><code v-pre>wx:if</code>代码示例</p>
<ul>
<li>代码</li>
</ul>
<p>market.wxml</p>
<div class="language-xml line-numbers-mode" data-highlighter="prismjs" data-ext="xml"><pre v-pre><code><span class="line"><span class="token comment">&lt;!-- wx:if 属性组 --></span></span>
<span class="line"><span class="token comment">&lt;!-- wx:if wx:elif wx:else --></span></span>
<span class="line"><span class="token comment">&lt;!-- 只有对应的条件成立，属性所在的组件才会进行展示 --></span></span>
<span class="line"><span class="token comment">&lt;!-- wx:elif wx:else 不能单独使用，在使用的时候，必须结合 wx:if 来使用 --></span></span>
<span class="line"><span class="token comment">&lt;!-- 使用了 wx:if 属性组的组件不能被打断，组件必须连贯才可以 --></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name"><span class="token namespace">wx:</span>if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{ num === 1 }}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>num 等于 {{num}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name"><span class="token namespace">wx:</span>elif</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{ num === 2 }}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>num 等于 {{num}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name"><span class="token namespace">wx:</span>else</span><span class="token punctuation">></span></span>num 大于 2，目前 num 等于  {{num}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>warn<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">bind:</span>tap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>updateNum<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>更新 num<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>market.js</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// pages/market/market.js</span></span>
<span class="line"><span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">data</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">num</span><span class="token operator">:</span><span class="token number">1</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 更新 num</span></span>
<span class="line">  <span class="token function">updateNum</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">num</span><span class="token operator">:</span><span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>num <span class="token operator">+</span> <span class="token number">1</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>运行结果</li>
</ul>
<p><img src="/application/weixin/base/073.gif" alt=""></p>
</li>
<li>
<p><code v-pre>hidden</code>代码示例</p>
<ul>
<li>代码</li>
</ul>
<p>market.wxml</p>
<div class="language-xml line-numbers-mode" data-highlighter="prismjs" data-ext="xml"><pre v-pre><code><span class="line"><span class="token comment">&lt;!-- hidden 属性 --></span></span>
<span class="line"><span class="token comment">&lt;!-- hidden 属性值 如果是 true,就会隐藏结构，如果是false,才会展示结果 --></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">hidden</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{ isFlag }}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>如果isFlag 如果是 true,就会隐藏结构，如果是false,才会展示结果<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">bind:</span>tap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handler<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>hidden测试<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>market.js</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// pages/market/market.js</span></span>
<span class="line"><span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">data</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">isFlag</span><span class="token operator">:</span><span class="token boolean">false</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">  <span class="token function">handler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">isFlag</span><span class="token operator">:</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>isFlag</span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>运行结果</li>
</ul>
<p><img src="/application/weixin/base/074.gif" alt=""></p>
</li>
</ol>
</div></template>


