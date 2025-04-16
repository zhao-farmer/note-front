<template><div><h1 id="_01-dom对象常用方法知识简记" tabindex="-1"><a class="header-anchor" href="#_01-dom对象常用方法知识简记"><span>01 DOM对象常用方法知识简记</span></a></h1>
<h2 id="_1-获取dom对象方法-基础" tabindex="-1"><a class="header-anchor" href="#_1-获取dom对象方法-基础"><span>1. 获取DOM对象方法-基础</span></a></h2>
<ol>
<li>通过id获取</li>
</ol>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> 变量名 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"id值"</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><blockquote>
<p>注意：getElementById()括号中的不需要在前面加“#”，因为方法就决定了括号中的值是一个元素的id值。该方法返回一个DOM对象。</p>
</blockquote>
<ol start="2">
<li>通过class(类名)获取</li>
</ol>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> 变量名 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementsByClassName</span><span class="token punctuation">(</span><span class="token string">"类名"</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><blockquote>
<p>注意：getElementsByClassName()括号中的不需要在前面加 “.” ，因为方法就决定了括号中的值是一个元素的class值。该方法返回一个集合。不能直接给集合绑定事件，需要获取到集合中的某一个元素，然后再为元素绑定事件。</p>
</blockquote>
<blockquote>
<p>方法：通过class值来获取元素对象集合，通过下标来得到单个元素对象</p>
</blockquote>
<ol start="3">
<li>通过标签名获取</li>
</ol>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> 变量名 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">"p"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><blockquote>
<p>注意: 该方法返回的也是一个集合。</p>
</blockquote>
<ol start="4">
<li>通过name属性获取</li>
</ol>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> 变量名 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementsByName</span><span class="token punctuation">(</span><span class="token string">"name"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><blockquote>
<p>注意：只有含有name属性的元素(表单元素)才能通过name属性获取</p>
</blockquote>
<blockquote>
<p>通过name值来获取元素对象集合，通过下标来得到单个元素对象</p>
</blockquote>
<ol start="5">
<li>通过querySelector（选择器）获取</li>
</ol>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> 变量名 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">".box"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><blockquote>
<p>注意：querySelector()方法括号中的值是元素的选择器，所以前面加了&quot;.&quot;符号，使用的是类选择器。通过选择器获取匹配到第一个元素  唯一。</p>
</blockquote>
<ol start="6">
<li>通过querySelectorAll获取</li>
</ol>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> 变量名 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">".box"</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><blockquote>
<p>注意：querySelector()和querySelectorAll()方法括号中的取值都是选择器，但这两个方法是有区别的。当有多个class相同的元素时，使用querySelector()方法只能获取到第一个class为box的元素，而querySelectorAll()获取到了所有class为box的元素集合。</p>
</blockquote>
<ol start="7">
<li>获取循环中dom对象中的dom对象</li>
</ol>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> toolBtns<span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span> <span class="token punctuation">.</span>tui<span class="token operator">-</span>image<span class="token operator">-</span>editor<span class="token operator">-</span>button'<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">toolBtns<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">btn</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    btn<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"click"</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">let</span> tt <span class="token operator">=</span> btn<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.tui-colorpicker-slider-container'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>tt<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>使用dom对象可以直接使用querySelector继续查询</p>
</blockquote>
<ol start="8">
<li>getElementXXX类型的方法注意事项：</li>
</ol>
<p>getElementXXX类型的方法，除了通过Id获取元素和 document.querySelector(选择器)</p>
<blockquote>
<p>通过选择器获取匹配到第一个元素，其他都返回一个集合，如果需要取到具体的DOM元素，需要加索引，如：document.getElementsByClassName(&quot;box&quot;)[0] =&gt;获取class为box的所有元素中的第一个DOM元素。</p>
</blockquote>
<ol start="9">
<li>获取特殊对象方法</li>
</ol>
<ul>
<li>body</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> 变量名 <span class="token operator">=</span> document<span class="token punctuation">.</span>body <span class="token comment">//获取body元素对象</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>html</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> 变量名 <span class="token operator">=</span> document<span class="token punctuation">.</span>documentElement <span class="token comment">// 返回html元素对象</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="_2-获取或返回元素内容方法" tabindex="-1"><a class="header-anchor" href="#_2-获取或返回元素内容方法"><span>2. 获取或返回元素内容方法</span></a></h2>
<ol>
<li>dom对象.innerHTML</li>
</ol>
<p>获取元素内部的内容 可识别标签  保留空格和换行</p>
<ol start="2">
<li>dom对象.innerText</li>
</ol>
<p>获取元素内部的文本  不识别标签  不保留空格和换行</p>
<ol start="3">
<li>dom对象.value</li>
</ol>
<p>获取表单控件的值 (只能用于input)</p>
<blockquote>
<p>这三个属性是可读写的  可以获取元素里面的内容  也可修改元素内部的内容</p>
</blockquote>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token comment">&lt;!-- innerText --></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>id_innerText<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>原本的值innerText<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>change_innerText<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>修改的值<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token comment">&lt;!-- innerHTML --></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>id_innerHTML<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>原本的值innerHTML<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>change_innerHTML<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>修改的值<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"> </span>
<span class="line">    <span class="token comment">&lt;!-- value --></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>id_value<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>原本的值value<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>change_value<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>修改的值<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">        <span class="token comment">//1.获取值</span></span>
<span class="line">        <span class="token keyword">var</span> div1 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'#id_innerText'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">var</span> div2 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'#id_innerHTML'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">var</span> input3 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.change_value'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>div1<span class="token punctuation">.</span>innerText<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>div2<span class="token punctuation">.</span>innerHTML<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>input3<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token comment">//2.修改值</span></span>
<span class="line">        <span class="token keyword">var</span> span1 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.change_innerText'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">var</span> span2 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.change_innerHTML'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">var</span> input3 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.change_value'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        span1<span class="token punctuation">.</span>innerText <span class="token operator">=</span> <span class="token string">"&lt;strong>我来修改数据innerText &lt;/strong>"</span></span>
<span class="line">        span2<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">"&lt;strong>我来修改数据innerHTML &lt;/strong>"</span></span>
<span class="line">        <span class="token comment">// 无法赋值</span></span>
<span class="line">        input3<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">"&lt;strong>我来修改数据value &lt;/strong>"</span></span>
<span class="line">    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="/script/JavaScript/dom/001.png" alt=""></p>
<h2 id="_3-js与css交互" tabindex="-1"><a class="header-anchor" href="#_3-js与css交互"><span>3. JS与CSS交互</span></a></h2>
<h3 id="_3-1-js添加与修改属性样式" tabindex="-1"><a class="header-anchor" href="#_3-1-js添加与修改属性样式"><span>3.1 js添加与修改属性样式</span></a></h3>
<ul>
<li>单个属性样式添加：
<ul>
<li>dom对象.style.样式属性名 = &quot;属性值&quot;;</li>
</ul>
</li>
<li>多个属性样式添加：
<ul>
<li>dom对象.style = &quot;&quot;;</li>
</ul>
</li>
<li>非常多属性样式添加：
<ul>
<li>dom对象.className = &quot;类名&quot;;</li>
<li>注意可结合多类名方式解决类覆盖</li>
</ul>
</li>
</ul>
<p>修改样式直接给相应样式赋值即可</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">    <span class="token comment">// 样式添加练习</span></span>
<span class="line">    <span class="token keyword">var</span> dom对象 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"dom对象id"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">// 方法一：逐个添加</span></span>
<span class="line">    _yangshi<span class="token punctuation">.</span>style<span class="token punctuation">.</span>fontSize <span class="token operator">=</span> <span class="token string">"60px"</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">//样式为一个单词如width可直接写，但为两个单词如font—size这种则要把—删去，并让"—"后方单词首字母大写（驼峰）</span></span>
<span class="line">    <span class="token comment">// 方法二：统一添加</span></span>
<span class="line">    <span class="token comment">//此方法要注意后续另起一行添加会把上一行的样式覆盖掉</span></span>
<span class="line">    dom对象<span class="token punctuation">.</span>style <span class="token operator">=</span> <span class="token string">"width: 300px; height: 3000px; background-color: #00f"</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">// dom对象.style = "font_size: 60px;"//_yangshi.style被重新赋值  把上一行的样式覆盖掉</span></span>
<span class="line">    <span class="token comment">// 方法三：赋值类（样式较多时直接用此方法即可）//赋值类名会覆盖原本的类，可采用多类名来解决此问题</span></span>
<span class="line">    dom对象<span class="token punctuation">.</span>className <span class="token operator">=</span> <span class="token string">"旧类名 新类名"</span><span class="token punctuation">;</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-样式获取-查询" tabindex="-1"><a class="header-anchor" href="#_3-2-样式获取-查询"><span>3.2 样式获取（查询）</span></a></h3>
<ol>
<li>行内样式</li>
</ol>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// 示例：</span></span>
<span class="line">dom对象<span class="token punctuation">.</span>style<span class="token punctuation">.</span>样式属性名</span>
<span class="line"><span class="token comment">// 如：</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>dom对象<span class="token punctuation">.</span>style<span class="token punctuation">.</span>color<span class="token punctuation">)</span><span class="token punctuation">;</span>  </span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.获取计算的样式</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">window<span class="token punctuation">.</span><span class="token function">getComputedStyle</span><span class="token punctuation">(</span>dom对象<span class="token punctuation">)</span><span class="token punctuation">.</span>样式属性名</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_3-3-类操作" tabindex="-1"><a class="header-anchor" href="#_3-3-类操作"><span>3.3 类操作</span></a></h3>
<ol>
<li>添加类
<ul>
<li>dom对象.className</li>
<li>dom对象.className = &quot;类名1   类名2&quot;</li>
</ul>
</li>
<li>添加一个或多个类
<ul>
<li>dom对象.classList.add(类名1, 类名2, ....)</li>
</ul>
</li>
<li>删除一个或多个类
<ul>
<li>dom对象.classList.remove(类名1, 类名2, ....)</li>
</ul>
</li>
<li>添加/删除一个类 有则删，无则加
<ul>
<li>dom对象.classList.toggle(类名)</li>
</ul>
</li>
<li>判断dom对象是否含有某个类    若含有某个类返回true,否则返回false
<ul>
<li>dom对象.classList.contains(类名)</li>
</ul>
</li>
<li>根据索引返回对应类
<ul>
<li>dom对象.classList.item(索引)</li>
</ul>
</li>
</ol>
<h2 id="_4-dom节点" tabindex="-1"><a class="header-anchor" href="#_4-dom节点"><span>4. DOM节点</span></a></h2>
<h3 id="_4-1-节点属性操作" tabindex="-1"><a class="header-anchor" href="#_4-1-节点属性操作"><span>4.1 节点属性操作</span></a></h3>
<ol>
<li>属性设置
<ul>
<li>设置内置属性值
<ul>
<li>节点对象.属性 = '值';</li>
</ul>
</li>
<li>设置自定义的属性
<ul>
<li>节点对象.setAttribute(“属性名” , &quot;属性值&quot;)</li>
</ul>
</li>
</ul>
</li>
<li>查看属性值
<ul>
<li>获取内置属性值(元素本身自带的属性)
<ul>
<li>节点对象.属性;</li>
</ul>
</li>
<li>获取自定义的属性
<ul>
<li>节点对象.getAttribute(&quot;属性名&quot;)</li>
</ul>
</li>
</ul>
</li>
<li>删除属性
<ul>
<li>节点对象.removeAttribute(&quot;属性名&quot;)</li>
</ul>
</li>
</ol>
<h3 id="_4-2-节点操作-增删复插替" tabindex="-1"><a class="header-anchor" href="#_4-2-节点操作-增删复插替"><span>4.2 节点操作（增删复插替）</span></a></h3>
<ol>
<li>
<p>创建元素节点</p>
<ul>
<li>document.createElement(&quot;元素名&quot;)</li>
</ul>
</li>
<li>
<p>追加（添加）节点</p>
<ul>
<li>父节点.append(节点对象或字符串)</li>
<li>父节点.appendChild(child)
<ul>
<li>将一个节点添加到指定父节点的子节点列表末尾。类似于css里面的after伪元素</li>
</ul>
</li>
<li>node.insertBefore(child , 指定元素)
<ul>
<li>将一个节点添加到父节点的指定子节点前面。类似于css里面的before伪元素</li>
</ul>
</li>
</ul>
</li>
<li>
<p>删除节点</p>
<ul>
<li>父节点.removeChild(删除的子节点对象)</li>
<li>节点对象.remove();//删除指定节点</li>
</ul>
</li>
<li>
<p>克隆节点</p>
<ul>
<li>节点对象.cloneNode(参数)</li>
<li>参数：
<ul>
<li>括号为空或者是里面为false 是浅拷贝 只复制标签不复制里面的内容</li>
<li>括号为true 是深拷贝 复制标签复制里面的内容</li>
</ul>
</li>
</ul>
</li>
<li>
<p>插入节点</p>
<ul>
<li>父节点对象.insertBefore(新节点 , 参照节点)</li>
</ul>
</li>
<li>
<p>替换节点</p>
<ul>
<li>父节点对象.replaceChild(用来替换的新节点 ， 被替换的老节点)</li>
</ul>
</li>
</ol>
<h2 id="_5-父子兄弟节点查找" tabindex="-1"><a class="header-anchor" href="#_5-父子兄弟节点查找"><span>5. 父子兄弟节点查找</span></a></h2>
<h3 id="_5-1-父节点查找子节点方法" tabindex="-1"><a class="header-anchor" href="#_5-1-父节点查找子节点方法"><span>5.1 父节点查找子节点方法</span></a></h3>
<ol>
<li>查找父节点下的第一个子节点 （可能会找文本节点）
<ul>
<li>父节点对象.firstChild</li>
</ul>
</li>
<li>查找父节点下的最后一个子节点 （可能会找文本节点）
<ul>
<li>父节点对象.lastChild</li>
</ul>
</li>
<li>查找父节点下的所有的子节点 （可能会找文本节点）
<ul>
<li>父节点对象.childNodes</li>
</ul>
</li>
<li>查找父节点下的第一个子元素节点
<ul>
<li>父节点对象.firstElementChild</li>
</ul>
</li>
<li>查找父节点下的最后一个子元素节点
<ul>
<li>父节点对象.lastElementChild</li>
</ul>
</li>
<li>查找父节点下的所有的子元素节点
<ul>
<li>父节点对象.children</li>
</ul>
</li>
<li>可使用索引查找具体节点
<ul>
<li>如：父节点对象.children[0]</li>
</ul>
</li>
</ol>
<h3 id="_5-2-子节点查找父节点" tabindex="-1"><a class="header-anchor" href="#_5-2-子节点查找父节点"><span>5.2 子节点查找父节点</span></a></h3>
<ol>
<li>
<p>子节点对象.parentNode</p>
</li>
<li>
<p>子节点对象.parentElement</p>
</li>
</ol>
<h3 id="_5-3-兄弟间节点查找" tabindex="-1"><a class="header-anchor" href="#_5-3-兄弟间节点查找"><span>5.3 兄弟间节点查找</span></a></h3>
<ol>
<li>查找下一个兄弟节点(可能会找到文本节点)
<ul>
<li>节点对象.nextSibling</li>
</ul>
</li>
<li>查找前一个兄弟节点(可能会找到文本节点)
<ul>
<li>节点对象.previousSibling</li>
</ul>
</li>
<li>查找下一个元素兄弟节点
<ul>
<li>节点对象.nextElementSibling</li>
</ul>
</li>
<li>查找前一个元素兄弟节点
<ul>
<li>节点对象.previousElementSibling</li>
</ul>
</li>
</ol>
<h2 id="_6-event事件对象-含有鼠标相对于窗口的位置知识" tabindex="-1"><a class="header-anchor" href="#_6-event事件对象-含有鼠标相对于窗口的位置知识"><span>6. event事件对象(含有鼠标相对于窗口的位置知识)</span></a></h2>
<p>函数中的形参也代指event，所以将下方的event.写为形参.也可行</p>
<ul>
<li>event.target  事件作用的目标</li>
<li>event.type  事件类型（事件名称）</li>
<li>event.clientX  距离浏览器窗口左侧的坐标（水平）受滚动条影响</li>
<li>event.clientY  距离浏览器窗口上侧的坐标（垂直）</li>
<li>event.clientX、event.clientY（不太推荐使用）</li>
</ul>
<p>鼠标相对于浏览器窗口可视区域的X，Y坐标（窗口坐标），可视区域不包括工具栏和滚动条。</p>
<p>IE事件和标准事件都定义了这2个属性</p>
<ol>
<li>
<p>event.pageX 距离文档左侧的坐标(水平)  不受滚动条影响</p>
<ul>
<li>pageX = clientX + scrollLeft</li>
</ul>
</li>
<li>
<p>event.pageY 距离文档上侧的坐标(垂直)</p>
<ul>
<li>pageY = clientY + scrollTop</li>
</ul>
</li>
</ol>
<p>event.pageX、event.pageY（推荐使用）</p>
<p>类似于event.clientX、event.clientY，但它们是鼠标相对于文档坐标而非窗口坐标。这2个属性不是标准属性，但得到了广泛支持。IE事件中没有这2个属性。</p>
<h2 id="_7-offset系列属性-获取元素的长和宽、位置" tabindex="-1"><a class="header-anchor" href="#_7-offset系列属性-获取元素的长和宽、位置"><span>7. offset系列属性（获取元素的长和宽、位置）</span></a></h2>
<p>offset作用：获取元素的长和宽、以及位置，是一个只读属性，不可更改。</p>
<p>offset包括四个属性：offsetWidth、offsetHeight、offsetTop、offsetLeft</p>
<ol>
<li>
<p>offsetTop</p>
<ul>
<li>offsetTop指 obj 相对于页面或由 offsetParent 属性指定的父坐标的计算上侧位置，整型，单位：像素。</li>
<li>offsetTop= offsetParent的padding-top + 中间元素的offsetHeight + 当前元素的margin-top</li>
<li>简单来说，就是offsetParent的边框到该元素边框之间的距离。</li>
<li>操作方式
<ul>
<li>dom对象.offsetTop</li>
</ul>
</li>
</ul>
</li>
<li>
<p>offsetLeft</p>
<ul>
<li>offsetLeft指 obj 相对于页面或由 offsetParent 属性指定的父坐标的计算左侧位置，整型，单位：像素。</li>
<li>offsetLeft= offsetParent的padding-left + 中间元素的offsetWidth + 当前元素的margin-left</li>
<li>简单来说，就是offsetParent的边框到该元素边框之间的距离。</li>
<li>操作方式
<ul>
<li>dom对象.offsetLeft</li>
</ul>
</li>
</ul>
</li>
</ol>
<p>这里有一个offsetParent属性，这是指该元素的父元素（使用定位的父元素，如果上一级父元素没有定位，则向上继续寻找，直至找到根元素body）。</p>
<ol start="3">
<li>
<p>offsetWidth</p>
<ul>
<li>offsetWidth指 obj 控件自身的绝对宽度，不包括因 overflow 而未显示的部分，也就是其实际占据的宽度，整型，单位：像素。</li>
<li>简单来说，就是元素的内容+padding+边框。</li>
<li>操作方式
<ul>
<li>dom对象.offsetWidth</li>
</ul>
</li>
</ul>
</li>
<li>
<p>offsetHeight</p>
<ul>
<li>offsetHeight指 obj 控件自身的绝对高度，不包括因 overflow 而未显示的部分，也就是其实际占据的宽度，整型，单位：像素。</li>
<li>简单来说，就是元素的内容+padding+边框。</li>
<li>操作方式
<ul>
<li>dom对象.offsetHeight</li>
</ul>
</li>
</ul>
</li>
</ol>
<h2 id="_8-client系列-获取对象位置边框宽度等" tabindex="-1"><a class="header-anchor" href="#_8-client系列-获取对象位置边框宽度等"><span>8. client系列（获取对象位置边框宽度等）</span></a></h2>
<p>event.clientX、event.clientY（不推荐使用）</p>
<p>鼠标相对于浏览器窗口可视区域的X，Y位置坐标（窗口坐标），可视区域不包括工具栏和滚动条。IE事件和标准事件都定义了这2个属性</p>
<p>client包括四个属性：clientLeft、clientTop 、clientWidth、clientHeight</p>
<ol>
<li>
<p>clientLeft</p>
<ul>
<li>获取元素左侧边框的宽度</li>
<li>dom对象.clientLeft</li>
</ul>
</li>
<li>
<p>clientTop</p>
<ul>
<li>获取元素上侧边框的宽度</li>
<li>dom对象.clientTop</li>
</ul>
</li>
<li>
<p>clientWidth</p>
<ul>
<li>content + padding  不包含border，不包含滚动条（该元素对象的左内边框至右内边框的距离）</li>
<li>dom对象.clientWidth</li>
</ul>
</li>
<li>
<p>clientHeight</p>
<ul>
<li>content + padding  不包含border，不包含滚动条（该元素对象的上内边框至下内边框的距离）</li>
<li>dom对象.clientHeight</li>
</ul>
</li>
</ol>
<h2 id="_9-getboundingclientrect" tabindex="-1"><a class="header-anchor" href="#_9-getboundingclientrect"><span>9. getBoundingClientRect()</span></a></h2>
<ul>
<li>返回元素的大小和相对于视口的位置</li>
<li>Element.getBoundingClientRect()方法会返回元素的大小和相对于视口的位置</li>
<li>集合中有top,left, right, bottom,等属性</li>
<li>dom对象.getBoundingClientRect()</li>
</ul>
<ol>
<li>元素左边到视窗左边的距离
<ul>
<li>dom对象.getBoundingClientRect().left</li>
</ul>
</li>
<li>元素上边到视窗上边的距离
<ul>
<li>dom对象.getBoundingClientRect().top</li>
</ul>
</li>
<li>元素右边到视窗左边的距离
<ul>
<li>dom对象.getBoundingClientRect().right</li>
</ul>
</li>
<li>元素下边到视窗上边的距离
<ul>
<li>dom对象.getBoundingClientRect().bottom</li>
</ul>
</li>
<li>元素自身宽度（content + padding + border）
<ul>
<li>dom对象.getBoundingClientRect().width</li>
</ul>
</li>
<li>元素自身高度（content + padding + border）
<ul>
<li>dom对象.getBoundingClientRect().height</li>
</ul>
</li>
</ol>
<h2 id="_10-scroll系列属性-滚动条相关属性" tabindex="-1"><a class="header-anchor" href="#_10-scroll系列属性-滚动条相关属性"><span>10. scroll系列属性（滚动条相关属性）</span></a></h2>
<ol>
<li>返回/获取元素垂直方向滚动条滚动距离
<ul>
<li>dom对象.scrollTop</li>
</ul>
</li>
<li>返回/获取元素水平方向滚动条滚动距离
<ul>
<li>dom对象.scrollLeft</li>
</ul>
</li>
<li>返回/获取元素内部实际内容的宽度
<ul>
<li>dom对象.scrollWidth</li>
</ul>
</li>
<li>返回/获取元素内部实际内容的高度
<ul>
<li>dom对象.scrollHeight</li>
</ul>
</li>
<li>dom对象滚动条滚动距离水平方向每次滚动x像素，垂直方向每次滚动y像素
<ul>
<li>dom对象.scrollBy(x , y)</li>
</ul>
</li>
<li>dom对象滚动条水平方向滚动到x像素，垂直方向滚动到y像素
<ul>
<li>dom对象.scrollTo(x , y)</li>
</ul>
</li>
</ol>
<h2 id="_11-dom事件" tabindex="-1"><a class="header-anchor" href="#_11-dom事件"><span>11. DOM事件</span></a></h2>
<h3 id="_11-1-事件流类型" tabindex="-1"><a class="header-anchor" href="#_11-1-事件流类型"><span>11.1 事件流类型</span></a></h3>
<ul>
<li>事件冒泡流（由内向外，由子向父）</li>
<li>事件捕获流（由外向内，由父向子）</li>
</ul>
<h3 id="_11-2-添加监听事件" tabindex="-1"><a class="header-anchor" href="#_11-2-添加监听事件"><span>11.2 添加监听事件</span></a></h3>
<p>添加：dom对象.addEventListener(参数1，参数2，参数3)</p>
<ul>
<li>参数1：事件名   不带on</li>
<li>参数2：函数  事件触发后调用函数</li>
<li>参数3：布尔值 事件流的类型  默认false事件冒泡流  如为true，则是事件捕获流</li>
</ul>
<p>删除：dom对象.removeEventListener(参数1，参数2，参数3)</p>
<ul>
<li>参数1：事件名   不带on</li>
<li>参数2：函数  事件触发后调用函数</li>
<li>参数3：布尔值 事件流的类型  默认false事件冒泡流  如为true，则是事件捕获流</li>
</ul>
<p>很有代表性的一个dom操作案例</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>X-UA-Compatible<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>IE=edge<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1.0<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css"></span>
<span class="line">            <span class="token selector">*</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span></span>
<span class="line">                <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">            <span class="token selector">ul</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token property">list-style</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">            <span class="token selector">.clearfix::after</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span></span>
<span class="line">                <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">""</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token property">clear</span><span class="token punctuation">:</span> both<span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">            <span class="token selector">.box</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span></span>
<span class="line">                <span class="token comment">/* width: 1000px; */</span></span>
<span class="line">                <span class="token property">width</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span></span>
<span class="line">                <span class="token property">margin</span><span class="token punctuation">:</span> 10px auto 0<span class="token punctuation">;</span></span>
<span class="line">                <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>239<span class="token punctuation">,</span> 203<span class="token punctuation">,</span> 140<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">            <span class="token selector">.box .left</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token property">width</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">            <span class="token selector">.box .left .left-top</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span></span>
<span class="line">                <span class="token property">width</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span></span>
<span class="line">                <span class="token property">height</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span></span>
<span class="line">                <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 0 1px #999<span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">            <span class="token selector">.box .left .left-top img</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token property">width</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span></span>
<span class="line">                <span class="token property">height</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">            <span class="token selector">.box .left .left-top .zhezhao</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span></span>
<span class="line">                <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span></span>
<span class="line">                <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span></span>
<span class="line">                <span class="token property">width</span><span class="token punctuation">:</span> 250px<span class="token punctuation">;</span></span>
<span class="line">                <span class="token property">height</span><span class="token punctuation">:</span> 250px<span class="token punctuation">;</span></span>
<span class="line">                <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>253<span class="token punctuation">,</span> 253<span class="token punctuation">,</span> 253<span class="token punctuation">,</span> 0.5<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token property">cursor</span><span class="token punctuation">:</span> move<span class="token punctuation">;</span> <span class="token comment">/*改变鼠标指针样式*/</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">            <span class="token selector">.box .left .left-bottom</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token property">width</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span></span>
<span class="line">                <span class="token property">background-color</span><span class="token punctuation">:</span> #f1f1f1f1<span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">            <span class="token selector">.box .left-bottom ul li</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span></span>
<span class="line">                <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span></span>
<span class="line">                <span class="token property">margin</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">            <span class="token selector">.box .left-bottom ul li img</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">            <span class="token selector">.box .right</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span> <span class="token comment">/*先隐藏掉 */</span></span>
<span class="line">                <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span></span>
<span class="line">                <span class="token property">left</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span></span>
<span class="line">                <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span></span>
<span class="line">                <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span></span>
<span class="line">                <span class="token property">width</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span></span>
<span class="line">                <span class="token property">height</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span></span>
<span class="line">                <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 0 1px #f00<span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">            <span class="token selector">.box .right img</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span></span>
<span class="line">                <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span></span>
<span class="line">                <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span></span>
<span class="line">                <span class="token property">width</span><span class="token punctuation">:</span> 800px<span class="token punctuation">;</span></span>
<span class="line">                <span class="token property">height</span><span class="token punctuation">:</span> 800px<span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>box<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">            <span class="token comment">&lt;!-- 左侧中等图片 --></span></span>
<span class="line">            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>left<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>left-top<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>./images/02.jpg<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>zhezhao<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">                <span class="token comment">&lt;!-- 下方小图片 --></span></span>
<span class="line">                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>left-bottom<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">                    <span class="token comment">&lt;!-- &lt;span>&lt;&lt;/span> --></span></span>
<span class="line">                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>clearfix<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>./images/02.jpg<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span></span>
<span class="line">                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>./images/01.jpg<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span></span>
<span class="line">                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>./imgages/03.jpg<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span></span>
<span class="line">                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span></span>
<span class="line">                    <span class="token comment">&lt;!-- &lt;span>>&lt;/span> --></span></span>
<span class="line">                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">            <span class="token comment">&lt;!-- 右侧大图 --></span></span>
<span class="line">            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>right<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>img/img002.jpg<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">        <span class="token keyword">var</span> box <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">".box"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//获取最外侧div</span></span>
<span class="line">        <span class="token keyword">var</span> leftTop <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">".left-top"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//获取遮罩与中等图的父级</span></span>
<span class="line">        <span class="token keyword">var</span> zhongimg <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">".left-top>img"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//获取中等图片</span></span>
<span class="line">        <span class="token keyword">var</span> _zhezhao <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">".zhezhao"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//获取遮罩层</span></span>
<span class="line">        <span class="token keyword">var</span> _rightDatu <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">".right"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//获取右侧大图</span></span>
<span class="line">        <span class="token keyword">var</span> rightDatu <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">".right>img"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//获取右侧大图</span></span>
<span class="line">        <span class="token keyword">var</span> imgs <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">".left-bottom li"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//获取下方轮播图片的li</span></span>
<span class="line">        <span class="token comment">// 确定好定位关系，利用定位属性的left与top等属性值，结合偏移量数值，再结合鼠标移动事件，来实现让遮罩层随鼠标移动的效果。</span></span>
<span class="line">        <span class="token comment">//再根据偏移量数值来确定 定位的最大值与最小值 从而确定（限制）遮罩层所能移动的范围</span></span>
<span class="line">        _zhezhao<span class="token punctuation">.</span><span class="token function-variable function">onmousemove</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">every</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token comment">//鼠标移动事件</span></span>
<span class="line">            <span class="token comment">//.pageX 的偏移值不受滚动条影响  推荐使用此方法</span></span>
<span class="line">            <span class="token comment">//.clientX 的偏移值受滚动条影响</span></span>
<span class="line">            <span class="token comment">// console.log(every.pageX, every.clientX);</span></span>
<span class="line">            <span class="token keyword">var</span> lf <span class="token operator">=</span> every<span class="token punctuation">.</span>pageX <span class="token operator">-</span> _zhezhao<span class="token punctuation">.</span>offsetWidth <span class="token operator">/</span> <span class="token number">2</span> <span class="token operator">-</span> box<span class="token punctuation">.</span>offsetLeft<span class="token punctuation">;</span> <span class="token comment">//遮罩层距离页面左侧的距离 - 自身内容宽度的一半 - 父元素距离距离页面左侧的距离</span></span>
<span class="line">            <span class="token keyword">var</span> tp <span class="token operator">=</span> every<span class="token punctuation">.</span>pageY <span class="token operator">-</span> _zhezhao<span class="token punctuation">.</span>offsetHeight <span class="token operator">/</span> <span class="token number">2</span> <span class="token operator">-</span> box<span class="token punctuation">.</span>offsetTop<span class="token punctuation">;</span> <span class="token comment">//等式结果为遮罩层在父级元素中的left/top定位置</span></span>
<span class="line">            <span class="token keyword">if</span> <span class="token punctuation">(</span>lf <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token comment">//定位的left数值最小范围</span></span>
<span class="line">                lf <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>lf <span class="token operator">>=</span> leftTop<span class="token punctuation">.</span>offsetWidth <span class="token operator">-</span> _zhezhao<span class="token punctuation">.</span>offsetWidth<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token comment">//父级元素 - 遮罩层自身宽度 = 遮罩层可移动的最大宽度</span></span>
<span class="line">                lf <span class="token operator">=</span> leftTop<span class="token punctuation">.</span>offsetWidth <span class="token operator">-</span> _zhezhao<span class="token punctuation">.</span>offsetWidth<span class="token punctuation">;</span> <span class="token comment">//定位的left数值最大范围</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">            <span class="token comment">//竖直方向与水平方向同理</span></span>
<span class="line">            <span class="token keyword">if</span> <span class="token punctuation">(</span>tp <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token comment">//定位的left数值最小范围</span></span>
<span class="line">                tp <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>tp <span class="token operator">>=</span> leftTop<span class="token punctuation">.</span>offsetHeight <span class="token operator">-</span> _zhezhao<span class="token punctuation">.</span>offsetHeight<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token comment">//父级元素 - 遮罩层自身宽度 = 遮罩层可移动的最大宽度</span></span>
<span class="line">                tp <span class="token operator">=</span> leftTop<span class="token punctuation">.</span>offsetHeight <span class="token operator">-</span> _zhezhao<span class="token punctuation">.</span>offsetHeight<span class="token punctuation">;</span> <span class="token comment">//定位的left数值最大范围</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line"> </span>
<span class="line">            _zhezhao<span class="token punctuation">.</span>style<span class="token punctuation">.</span>left <span class="token operator">=</span> lf <span class="token operator">+</span> <span class="token string">"px"</span><span class="token punctuation">;</span></span>
<span class="line">            _zhezhao<span class="token punctuation">.</span>style<span class="token punctuation">.</span>top <span class="token operator">=</span> tp <span class="token operator">+</span> <span class="token string">"px"</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token comment">//下方让对应大图反方向与小图对应移动   取相对应的负值</span></span>
<span class="line">            rightDatu<span class="token punctuation">.</span>style<span class="token punctuation">.</span>left <span class="token operator">=</span> <span class="token operator">-</span>lf <span class="token operator">*</span> <span class="token number">2</span> <span class="token operator">+</span> <span class="token string">"px"</span><span class="token punctuation">;</span> <span class="token comment">//此处我们设置小图与大图的比例为 1 ：2</span></span>
<span class="line">            rightDatu<span class="token punctuation">.</span>style<span class="token punctuation">.</span>top <span class="token operator">=</span> <span class="token operator">-</span>tp <span class="token operator">*</span> <span class="token number">2</span> <span class="token operator">+</span> <span class="token string">"px"</span><span class="token punctuation">;</span> <span class="token comment">//所以应使大图全部显示同时就要调整大图移动数值的比例</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token comment">//鼠标放在轮播图上时，将相应的中等图片更换</span></span>
<span class="line">        <span class="token comment">// onmouseover  onmouseout 这两个函数会触发事件冒泡（事件冒泡：是指元素内部的子元素同样会触发事件而造成影响）所以需要进行判断</span></span>
<span class="line">        <span class="token comment">// onmouseenter  onmouseleave 而两个函数不会触发事件冒泡（子元素不会触发事件） 这两个则无需判断</span></span>
<span class="line">        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> imgs<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            imgs<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function-variable function">onmouseover</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">every</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token comment">//鼠标移入事件</span></span>
<span class="line">                <span class="token comment">// console.log(every.target.src); //事件作用目标：every.target ; 通过此方法获取小图的src</span></span>
<span class="line">                <span class="token keyword">if</span> <span class="token punctuation">(</span>every<span class="token punctuation">.</span>target<span class="token punctuation">.</span>src <span class="token operator">!=</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                    zhongimg<span class="token punctuation">.</span>src <span class="token operator">=</span> every<span class="token punctuation">.</span>target<span class="token punctuation">.</span>src<span class="token punctuation">;</span> <span class="token comment">//把小图的src值 赋值给 zhongimg的src上</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token comment">//鼠标放在中等图片父级上时，将相应的右侧大图更换</span></span>
<span class="line">        leftTop<span class="token punctuation">.</span><span class="token function-variable function">onmouseover</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token comment">//移入事件</span></span>
<span class="line">            rightDatu<span class="token punctuation">.</span>src <span class="token operator">=</span> zhongimg<span class="token punctuation">.</span>src<span class="token punctuation">;</span> <span class="token comment">//把中等图的src值 赋值给 右侧大图的src上</span></span>
<span class="line">            _rightDatu<span class="token punctuation">.</span>style<span class="token punctuation">.</span>display <span class="token operator">=</span> <span class="token string">"block"</span><span class="token punctuation">;</span> <span class="token comment">//并且把右侧大图显示出来</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">        leftTop<span class="token punctuation">.</span><span class="token function-variable function">onmouseout</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token comment">//移出事件</span></span>
<span class="line">            _rightDatu<span class="token punctuation">.</span>style<span class="token punctuation">.</span>display <span class="token operator">=</span> <span class="token string">"none"</span><span class="token punctuation">;</span> <span class="token comment">//并且把右侧大图显示出来</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


