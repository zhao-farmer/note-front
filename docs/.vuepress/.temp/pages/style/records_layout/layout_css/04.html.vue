<template><div><h1 id="四、css文本处理" tabindex="-1"><a class="header-anchor" href="#四、css文本处理"><span>四、CSS文本处理</span></a></h1>
<h2 id="_4-1-什么是书写模式" tabindex="-1"><a class="header-anchor" href="#_4-1-什么是书写模式"><span>4.1 什么是书写模式</span></a></h2>
<p>书写模式（writing modes）是指文本在页面上书写和排版的方向。不同的书写模式适用于不同的语言和书写系统。CSS 提供了灵活的书写模式设置，以适应不同的排版需求。</p>
<p>常见的书写模式包括：</p>
<ul>
<li>水平书写模式（Horizontal Writing Mode）：文本从左到右或从右到左排列，常用于拉丁字母、阿拉伯字母等语言。</li>
<li>垂直书写模式（Vertical Writing Mode）：文本从上到下排列，常用于中文、日文和韩文。</li>
</ul>
<h3 id="_4-1-1-水平书写模式" tabindex="-1"><a class="header-anchor" href="#_4-1-1-水平书写模式"><span>4.1.1 水平书写模式</span></a></h3>
<p>在水平书写模式下，文本通常按照从左到右（LTR）或从右到左（RTL）的方向排列。</p>
<p>以下是如何在 CSS 中设置水平书写模式的示例：</p>
<p><strong>代码</strong></p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1.0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>水平书写模式<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css"></span>
<span class="line">        <span class="token selector">.ltr</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">writing-mode</span><span class="token punctuation">:</span> horizontal-tb<span class="token punctuation">;</span> <span class="token comment">/* 从左到右 */</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token selector">.rtl</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">writing-mode</span><span class="token punctuation">:</span> horizontal-tb<span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">direction</span><span class="token punctuation">:</span> rtl<span class="token punctuation">;</span> <span class="token comment">/* 从右到左 */</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ltr<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">        这是从左到右的文本。</span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>rtl<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">        这是从右到左的文本。</span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>运行结果</strong></p>
<p><img src="/style/records_layout/layout_css/049.png" alt=""></p>
<h3 id="_4-1-2-垂直书写模式" tabindex="-1"><a class="header-anchor" href="#_4-1-2-垂直书写模式"><span>4.1.2 垂直书写模式</span></a></h3>
<p>在垂直书写模式下，文本从上到下排列。
如果是多行 <code v-pre>vertical-rl</code> <code v-pre>vertical-rtl</code> 才会起作用，可以使用<code v-pre>&lt;br&gt;</code> 或者配合 <code v-pre>white-space: pre-wrap;</code></p>
<p>CSS 允许我们使用 ​​writing-mode​​​ 属性来设置垂直书写模式：</p>
<p><strong>代码</strong></p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1.0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>垂直书写模式<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css"></span>
<span class="line">        <span class="token selector">.vertical-ltr</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">writing-mode</span><span class="token punctuation">:</span> vertical-rl<span class="token punctuation">;</span> <span class="token comment">/* 从右到左垂直书写 */</span></span>
<span class="line">            <span class="token property">background-color</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token selector">.vertical-rtl</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">writing-mode</span><span class="token punctuation">:</span> vertical-lr<span class="token punctuation">;</span> <span class="token comment">/* 从左到右垂直书写 */</span></span>
<span class="line">            <span class="token property">background-color</span><span class="token punctuation">:</span> skyblue<span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span>  <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>vertical-ltr<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">            这是垂直书写模式，</span>
<span class="line">            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span></span>
<span class="line">            从右到左排列的文本。</span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span>  <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>vertical-rtl<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">            这是垂直书写模式，</span>
<span class="line">            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span></span>
<span class="line">            从左到右排列的文本。</span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>运行结果</strong></p>
<p><img src="/style/records_layout/layout_css/050.png" alt=""></p>
<h2 id="_4-2-书写模式、块级布局和内联布局" tabindex="-1"><a class="header-anchor" href="#_4-2-书写模式、块级布局和内联布局"><span>4.2 书写模式、块级布局和内联布局</span></a></h2>
<p>书写模式会影响元素的布局方式，包括块级布局和内联布局。</p>
<h3 id="_4-2-1-块级布局" tabindex="-1"><a class="header-anchor" href="#_4-2-1-块级布局"><span>4.2.1 块级布局</span></a></h3>
<p>块级布局元素会在垂直方向上占据整个行宽，并在页面上显示为块状，通常用于容器元素，如 <code v-pre>​​&lt;div&gt;</code>​​ 和 ​<code v-pre>​&lt;section&gt;​</code>​。</p>
<p><strong>代码</strong></p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1.0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>块级布局<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css"></span>
<span class="line">        <span class="token selector">.block</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">background-color</span><span class="token punctuation">:</span> lightblue<span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">padding</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>block<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">        这是一个块级元素。</span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>运行结果</strong></p>
<p><img src="/style/records_layout/layout_css/051.png" alt=""></p>
<h3 id="_4-2-2-内联布局" tabindex="-1"><a class="header-anchor" href="#_4-2-2-内联布局"><span>4.2.2 内联布局</span></a></h3>
<p>内联布局元素不会占据整个行宽，而是仅占据它们自身的宽度。这些元素通常用于文本内容，如 <code v-pre>​​&lt;span&gt;​</code>​ 和 ​<code v-pre>​&lt;a&gt;</code>​​。</p>
<p><strong>代码</strong></p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"></span>
<span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1.0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>内联布局<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css"></span>
<span class="line">        <span class="token selector">.inline</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">display</span><span class="token punctuation">:</span> inline<span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">background-color</span><span class="token punctuation">:</span> lightgreen<span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">padding</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>inline<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">        这是一个内联元素。</span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>inline<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">        另一个内联元素。</span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>运行结果</strong></p>
<p><img src="/style/records_layout/layout_css/052.png" alt=""></p>
<h2 id="_4-3-方向" tabindex="-1"><a class="header-anchor" href="#_4-3-方向"><span>4.3 方向</span></a></h2>
<p>CSS 的 ​​direction​​ 属性用于设置文本的方向，通常与 ​​writing-mode​​ 属性一起使用，以确保文本在不同书写模式下正确显示。​​direction​​ 属性有两个主要值：</p>
<ul>
<li>ltr（从左到右）：用于大多数拉丁字母书写系统。</li>
<li>rtl（从右到左）：用于阿拉伯字母和希伯来字母书写系统。</li>
</ul>
<p><strong>代码</strong></p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1.0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>方向示例<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css"></span>
<span class="line">        <span class="token selector">.ltr</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">direction</span><span class="token punctuation">:</span> ltr<span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token selector">.rtl</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">direction</span><span class="token punctuation">:</span> rtl<span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ltr<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">        这是从左到右的文本。</span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>rtl<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">        这是从右到左的文本。</span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>运行结果</strong></p>
<p><img src="/style/records_layout/layout_css/053.png" alt=""></p>
<h2 id="_4-4-逻辑属性和逻辑值" tabindex="-1"><a class="header-anchor" href="#_4-4-逻辑属性和逻辑值"><span>4.4. 逻辑属性和逻辑值</span></a></h2>
<p>逻辑属性和逻辑值是 CSS 中用于处理不同书写模式的属性和数值。它们使得在不同的书写模式下，元素的布局和间距能够自动调整，而不需要手动设置每种方向的样式。</p>
<ol>
<li>逻辑属性
逻辑属性是相对于元素的书写模式的属性。常见的逻辑属性包括：</li>
</ol>
<ul>
<li>margin-inline-start​​ 和 ​​margin-inline-end​​：表示元素的内联起始边距和内联结束边距。</li>
<li>​padding-inline-start​​ 和 ​​padding-inline-end​​：表示元素的内联起始内边距和内联结束内边距。</li>
<li>​border-inline-start​​ 和 ​​border-inline-end​​：表示元素的内联起始边框和内联结束边框。</li>
<li>​margin-block-start​​ 和 ​​margin-block-end​​：表示元素的块级起始边距和块级结束边距。</li>
<li>​​padding-block-start​​ 和 ​​padding-block-end​​：表示元素的块级起始内边距和块级结束内边距。</li>
<li>border-block-start​​ 和 ​​border-block-end​​​​：表示元素的块级起始边框和块级结束边框。</li>
</ul>
<ol start="2">
<li>逻辑值</li>
</ol>
<p>逻辑值是与逻辑属性配合使用的数值，它们根据书写模式的方向自动调整。例如：</p>
<blockquote>
<p>​​start​​ 和 ​​end​​：相对于书写模式的起始和结束位置。对于水平书写模式，​​start​​ 通常是左侧，​​end​​ 通常是右侧；对于垂直书写模式，​​start​​ 通常是顶部，​​end​​ 通常是底部。</p>
</blockquote>
<p><strong>代码</strong></p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1.0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>逻辑属性示例<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css"></span>
<span class="line">        <span class="token selector">.logical</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">writing-mode</span><span class="token punctuation">:</span> vertical-rl<span class="token punctuation">;</span> <span class="token comment">/* 垂直书写模式，从右到左 */</span></span>
<span class="line">            <span class="token property">margin-inline-start</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span> <span class="token comment">/* 内联起始边距 */</span></span>
<span class="line">            <span class="token property">margin-inline-end</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>   <span class="token comment">/* 内联结束边距 */</span></span>
<span class="line">            <span class="token property">padding-block-start</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span> <span class="token comment">/* 块级起始内边距 */</span></span>
<span class="line">            <span class="token property">padding-block-end</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>    <span class="token comment">/* 块级结束内边距 */</span></span>
<span class="line">            <span class="token property">border-inline-start</span><span class="token punctuation">:</span> 2px solid black<span class="token punctuation">;</span> <span class="token comment">/* 内联起始边框 */</span></span>
<span class="line">            <span class="token property">border-block-start</span><span class="token punctuation">:</span> 1px solid blue<span class="token punctuation">;</span>  <span class="token comment">/* 块级起始边框 */</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>logical<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">        这是使用逻辑属性的元素。</span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>运行结果</strong></p>
<p><img src="/style/records_layout/layout_css/054.png" alt=""></p>
<h2 id="_4-5-逻辑外边距、边框和内边距属性" tabindex="-1"><a class="header-anchor" href="#_4-5-逻辑外边距、边框和内边距属性"><span>4.5 逻辑外边距、边框和内边距属性</span></a></h2>
<p>逻辑外边距、边框和内边距属性用于设置元素的外边距、边框和内边距，这些属性可以相对于书写模式自动调整。</p>
<ol>
<li>逻辑外边距
逻辑外边距属性包括：</li>
</ol>
<ul>
<li>margin-inline-start​​：设置内联起始边距。</li>
<li>​margin-inline-end​​：设置内联结束边距。</li>
<li>margin-block-start​​：设置块级起始边距。</li>
<li>margin-block-end​​​：设置块级结束边距。</li>
</ul>
<ol start="2">
<li>逻辑边框
逻辑边框属性包括：</li>
</ol>
<ul>
<li>border-inline-start​​：设置内联起始边框。</li>
<li>border-inline-end​​：设置内联结束边框。</li>
<li>border-block-start​​：设置块级起始边框。</li>
<li>border-block-end​​​：设置块级结束边框。</li>
</ul>
<ol start="3">
<li>逻辑内边距
逻辑内边距属性包括：</li>
</ol>
<ul>
<li>padding-inline-start​​：设置内联起始内边距。</li>
<li>padding-inline-end​​：设置内联结束内边距。</li>
<li>padding-block-start​​：设置块级起始内边距。</li>
<li>padding-block-end​​​：设置块级结束内边距。</li>
</ul>
<p>示例代码：</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1.0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>逻辑外边距、边框和内边距示例<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css"></span>
<span class="line">        <span class="token selector">.logical-box</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">writing-mode</span><span class="token punctuation">:</span> horizontal-tb<span class="token punctuation">;</span> <span class="token comment">/* 水平书写模式 */</span></span>
<span class="line">            <span class="token property">margin-inline-start</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span> <span class="token comment">/* 内联起始边距 */</span></span>
<span class="line">            <span class="token property">margin-inline-end</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>   <span class="token comment">/* 内联结束边距 */</span></span>
<span class="line">            <span class="token property">padding-block-start</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span> <span class="token comment">/* 块级起始内边距 */</span></span>
<span class="line">            <span class="token property">padding-block-end</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span>   <span class="token comment">/* 块级结束内边距 */</span></span>
<span class="line">            <span class="token property">border-inline-start</span><span class="token punctuation">:</span> 5px solid green<span class="token punctuation">;</span> <span class="token comment">/* 内联起始边框 */</span></span>
<span class="line">            <span class="token property">border-block-start</span><span class="token punctuation">:</span> 3px dashed red<span class="token punctuation">;</span>   <span class="token comment">/* 块级起始边框 */</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>logical-box<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">        这是一个包含逻辑外边距、边框和内边距的元素。</span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>运行结果</strong></p>
<p><img src="/style/records_layout/layout_css/055.png" alt=""></p>
<h2 id="_4-6-文字换行-white-space" tabindex="-1"><a class="header-anchor" href="#_4-6-文字换行-white-space"><span>4.6 文字换行（white-space）</span></a></h2>
<h3 id="_4-6-1-white-space-nowrap" tabindex="-1"><a class="header-anchor" href="#_4-6-1-white-space-nowrap"><span>4.6.1 white-space:nowrap</span></a></h3>
<p>含义：不换行</p>
<ol>
<li>white-space:nowrap和normal一样，也合并空格，但是不会根据容器大小换行，表示不换行。</li>
</ol>
<p><strong>代码</strong></p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css"></span>
<span class="line">        <span class="token selector">.wscont</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">margin</span><span class="token punctuation">:</span>12px<span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">padding</span><span class="token punctuation">:</span>12px<span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">width</span><span class="token punctuation">:</span>300px<span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">background</span><span class="token punctuation">:</span>#f1f1f1<span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">border</span><span class="token punctuation">:</span>1px solid #bababa<span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">line-height</span><span class="token punctuation">:</span>32px<span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">font-size</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">white-space</span><span class="token punctuation">:</span>nowrap<span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>wscont<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">        没有设置white-space属性，则默认为white-space:normal。normal表示合并空格，多个相邻空格合并成一个空格，在源码中的换行作为空格处理，只会根据容器的大小进行自动换行。</span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>  </span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>运行结果</strong></p>
<p><img src="/style/records_layout/layout_css/056.png" alt=""></p>
<ol start="2">
<li>white-space:nowrap会导致文本不换行，经常和overflow,text-overflow一起使用</li>
</ol>
<p><strong>代码</strong></p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css"></span>
<span class="line">        <span class="token selector">.wscont</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">margin</span><span class="token punctuation">:</span>12px<span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">padding</span><span class="token punctuation">:</span>12px<span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">width</span><span class="token punctuation">:</span>300px<span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">background</span><span class="token punctuation">:</span>#f1f1f1<span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">border</span><span class="token punctuation">:</span>1px solid #bababa<span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">line-height</span><span class="token punctuation">:</span>32px<span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">font-size</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">white-space</span><span class="token punctuation">:</span>nowrap<span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>wscont<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">        没有设置white-space属性，则默认为white-space:normal。normal表示合并空格，多个相邻空格合并成一个空格，在源码中的换行作为空格处理，只会根据容器的大小进行自动换行。</span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>  </span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>运行结果</strong></p>
<p><img src="/style/records_layout/layout_css/057.png" alt=""></p>
<h3 id="_4-6-2-white-space-pre" tabindex="-1"><a class="header-anchor" href="#_4-6-2-white-space-pre"><span>4.6.2 white-space:pre</span></a></h3>
<p>含义：保留空格不换行</p>
<blockquote>
<p>white-space:pre的作用是保持源码中的空格，有几个空格算几个空格显示，同时换行只认源码中的换行和标签。</p>
</blockquote>
<p><strong>代码</strong></p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css"></span>
<span class="line">            <span class="token selector">.wscont</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token property">margin</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span></span>
<span class="line">                <span class="token property">padding</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span></span>
<span class="line">                <span class="token property">background</span><span class="token punctuation">:</span> #f1f1f1<span class="token punctuation">;</span></span>
<span class="line">                <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #bababa<span class="token punctuation">;</span></span>
<span class="line">                <span class="token property">line-height</span><span class="token punctuation">:</span> 32px<span class="token punctuation">;</span></span>
<span class="line">                <span class="token property">font-size</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span></span>
<span class="line">                <span class="token property">white-space</span><span class="token punctuation">:</span> pre<span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>wscont<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">            没有设置white-space属性，则默认为white-space:normal。normal表示合并空格，多个相邻空格合并成一个空格，</span>
<span class="line">            在源码中的换行作为空格处理，</span>
<span class="line">            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>只会根据容器的大小进行自动换行。</span>
<span class="line">           </span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>运行结果</strong></p>
<p><img src="/style/records_layout/layout_css/058.png" alt=""></p>
<p>效果很明显，源码中的换行在显示中也换行了，源码中的多个空格也保留了。并且pre在没有碰到源码换行和
的时候是不换行了，不会去自适应容器换行。</p>
<h3 id="_4-6-3-white-space-pre-wrap" tabindex="-1"><a class="header-anchor" href="#_4-6-3-white-space-pre-wrap"><span>4.6.3 white-space:pre-wrap</span></a></h3>
<p>含义：保留空格换行</p>
<blockquote>
<p>white-space:pre-wrap的作用是保留空格，并且除了碰到源码中的换行和会换行外，还会自适应容器的边界进行换行。</p>
</blockquote>
<p><strong>代码</strong></p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css"></span>
<span class="line">            <span class="token selector">.wscont</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token property">margin</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span></span>
<span class="line">                <span class="token property">padding</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span></span>
<span class="line">                <span class="token property">background</span><span class="token punctuation">:</span> #f1f1f1<span class="token punctuation">;</span></span>
<span class="line">                <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #bababa<span class="token punctuation">;</span></span>
<span class="line">                <span class="token property">line-height</span><span class="token punctuation">:</span> 32px<span class="token punctuation">;</span></span>
<span class="line">                <span class="token property">font-size</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span></span>
<span class="line">                <span class="token property">white-space</span><span class="token punctuation">:</span> pre-wrap<span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>wscont<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">            没有设置white-space属性，则默认为white-space:normal。normal表示合并空格，多个相邻空格合并成一个空格，</span>
<span class="line">            在源码中的换行作为空格处理，</span>
<span class="line">            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>只会根据容器的大小进行自动换行。       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>运行结果</strong></p>
<p><img src="/style/records_layout/layout_css/059.png" alt=""></p>
<h3 id="_4-6-3-white-space-pre-line" tabindex="-1"><a class="header-anchor" href="#_4-6-3-white-space-pre-line"><span>4.6.3 white-space:pre-line</span></a></h3>
<p>含义：不保留空格换行</p>
<blockquote>
<p>white-space:pre-wrap的作用是保留空格，并且除了碰到源码中的换行和会换行外，还会自适应容器的边界进行换行。</p>
</blockquote>
<p><strong>代码</strong></p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css"></span>
<span class="line">            <span class="token selector">.wscont</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token property">margin</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span></span>
<span class="line">                <span class="token property">padding</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span></span>
<span class="line">                <span class="token property">background</span><span class="token punctuation">:</span> #f1f1f1<span class="token punctuation">;</span></span>
<span class="line">                <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #bababa<span class="token punctuation">;</span></span>
<span class="line">                <span class="token property">line-height</span><span class="token punctuation">:</span> 32px<span class="token punctuation">;</span></span>
<span class="line">                <span class="token property">font-size</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span></span>
<span class="line">                <span class="token property">white-space</span><span class="token punctuation">:</span> pre-line<span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>wscont<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">            没有设置white-space属性，则默认为white-space:normal。normal表示合并空格，多个相邻空格合并成一个空格，</span>
<span class="line">            在源码中的换行作为空格处理，</span>
<span class="line">            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>只会根据容器的大小进行自动换行。       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>运行结果</strong></p>
<p><img src="/style/records_layout/layout_css/060.png" alt=""></p>
</div></template>


