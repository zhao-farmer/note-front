<template><div><h1 id="日常记录" tabindex="-1"><a class="header-anchor" href="#日常记录"><span>日常记录</span></a></h1>
<h2 id="_1-html鼠标" tabindex="-1"><a class="header-anchor" href="#_1-html鼠标"><span>1.html鼠标</span></a></h2>
<h3 id="_1-1-鼠标经过变小手" tabindex="-1"><a class="header-anchor" href="#_1-1-鼠标经过变小手"><span>1.1 鼠标经过变小手</span></a></h3>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token selector">div</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">cursor</span><span class="token punctuation">:</span>pointer<span class="token punctuation">;</span> // <span class="token property">直接给需要改变指针样式的对象添加该属性，不要被误导为</span> <span class="token punctuation">:</span>hover 伪类</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2-cursor属性及属性值介绍" tabindex="-1"><a class="header-anchor" href="#_1-2-cursor属性及属性值介绍"><span>1.2 cursor属性及属性值介绍</span></a></h3>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>utf-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>鼠标经过的各种样例<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>请把鼠标移动到单词上，可以看到鼠标指针发生变化：<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token comment">&lt;!-- 请在此列表的末端始终定义一种普通的光标，以防没有由 URL 定义的可用光标 --></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">cursor</span><span class="token punctuation">:</span><span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>/图片路径<span class="token punctuation">)</span></span><span class="token punctuation">;</span><span class="token property">cursor</span><span class="token punctuation">:</span>default</span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>自定义指针url<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">&lt;!-- 默认 --></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">cursor</span><span class="token punctuation">:</span>auto</span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>默认。浏览器设置的光标<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">cursor</span><span class="token punctuation">:</span>default</span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>默认光标（通常是一个箭头）<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">&lt;!-- 可操作类型 --></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">cursor</span><span class="token punctuation">:</span>pointer</span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>光标呈现为指示链接的指针（一只手）<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">cursor</span><span class="token punctuation">:</span>crosshair</span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>光标呈现为十字线<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">&lt;!-- 方向类 --></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">cursor</span><span class="token punctuation">:</span>move</span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>此光标指示某对象可被移动<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">cursor</span><span class="token punctuation">:</span>e-resize</span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>此光标指示矩形框的边缘可被向右（东）移动<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">cursor</span><span class="token punctuation">:</span>w-resize</span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>此光标指示矩形框的边缘可被向左移动（西）<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">cursor</span><span class="token punctuation">:</span>s-resize</span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>此光标指示矩形框的边缘可被向下移动（南）<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">cursor</span><span class="token punctuation">:</span>n-resize</span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>此光标指示矩形框的边缘可被向上（北）移动<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">cursor</span><span class="token punctuation">:</span>se-resize</span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>此光标指示矩形框的边缘可被向下及向右移动（南/东）<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">cursor</span><span class="token punctuation">:</span>sw-resize</span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>此光标指示矩形框的边缘可被向下及向左移动（南/西）<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">cursor</span><span class="token punctuation">:</span>ne-resize</span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>此光标指示矩形框的边缘可被向上及向右移动（北/东）<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">cursor</span><span class="token punctuation">:</span>nw-resize</span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>此光标指示矩形框的边缘可被向上及向左移动（北/西）<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">&lt;!-- 其他类型 --></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">cursor</span><span class="token punctuation">:</span>help</span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>此光标指示可用的帮助（通常是一个问号或一个气球）<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">cursor</span><span class="token punctuation">:</span>progress</span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>指正携带沙漏<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span>     </span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">cursor</span><span class="token punctuation">:</span>text</span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>此光标指示文本<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">cursor</span><span class="token punctuation">:</span>wait</span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>此光标指示程序正忙（通常是一只表或沙漏）<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-高度属性" tabindex="-1"><a class="header-anchor" href="#_2-高度属性"><span>2.  高度属性</span></a></h2>
<p>offsetHeight、scrollHeight、clientHeight这三个属性我们经常在开发中遇到，如果小伙伴们没有经常使用的话，很容易把这些属性搞混，比如说什么窗口高度、元素高度、内容高度等等。当然，现在的前端框架很多时候帮我们封装了这些属性，但是我们也不能太过依赖框架，底层的原理我们还是需要了解的，今天就来理一理这三个属性分别代表什么？</p>
<h3 id="_2-1-盒子模型" tabindex="-1"><a class="header-anchor" href="#_2-1-盒子模型"><span>2.1 盒子模型</span></a></h3>
<p>介绍这三个属性之前先来了解一下CSS盒子模型，因为面试中如果遇到这道题，面试官通常也是想要考察你盒子模型的相关知识。
盒子模型顾名思义就是盒子的意思，盒子里面可以装很多东西。比如我们的div就可以比作一个盒子，那么组成一个完整的盒子主要包括下面几个部分：</p>
<ul>
<li>width</li>
<li>height</li>
<li>padding</li>
<li>border</li>
<li>margin</li>
<li>box-sizing（用来区别正常盒模型和怪异盒子模型）
一个盒子大概由上面一些属性组成，盒子模型又分为了正常和模型和怪异和模型。</li>
</ul>
<h4 id="_2-1-1-正常盒模型" tabindex="-1"><a class="header-anchor" href="#_2-1-1-正常盒模型"><span>2.1.1 正常盒模型</span></a></h4>
<p>我们借用一张图就可以很清楚的知道什么是正常盒模型：</p>
<p><img src="/style/css_records/日常记录/001.png" alt=""></p>
<p>通过上图可以看出：宽度就是内容的宽度。当我们修改padding或者border属性时，盒子的总宽度会改变。</p>
<h4 id="_2-1-2-怪异盒子模型" tabindex="-1"><a class="header-anchor" href="#_2-1-2-怪异盒子模型"><span>2.1.2 怪异盒子模型</span></a></h4>
<p>同样，我们借助一张图来理解怪异盒子模型：</p>
<p><img src="/style/css_records/日常记录/002.png" alt=""></p>
<p>通过上图可以看出：盒子的宽度 = 内容宽度 + padding + border。
简单了解了CSS中的盒子模型后，我们再来了解这三个高度属性。</p>
<h3 id="_2-2-offsetheight" tabindex="-1"><a class="header-anchor" href="#_2-2-offsetheight"><span>2.2 offsetHeight</span></a></h3>
<p>简单总结为一句话：获取元素的高度，包含padding和border。
需要注意的是，如果我们的盒子是正常盒子，那么高度只有内容高度，所以通常我们需要将盒子模型改为怪异盒子模型，使用box-sizing属性。</p>
<p><strong>代码</strong></p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css"></span>
<span class="line">            <span class="token selector">.box1</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span></span>
<span class="line">                <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span></span>
<span class="line">                <span class="token property">padding</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span></span>
<span class="line">                <span class="token property">margin</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span></span>
<span class="line">                <span class="token property">border</span><span class="token punctuation">:</span> 5px solid yellow<span class="token punctuation">;</span></span>
<span class="line">                <span class="token property">background-color</span><span class="token punctuation">:</span> #ccc<span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>box1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>盒子1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">            <span class="token keyword">const</span> box1 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementsByClassName</span><span class="token punctuation">(</span><span class="token string">"box1"</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">            console<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">"盒子1的offsetHeight"</span><span class="token punctuation">,</span> box1<span class="token punctuation">.</span>offsetHeight<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>展示结果</strong></p>
<p><img src="/style/css_records/日常记录/003.png" alt=""></p>
<p>结果解释：
最终offsetHeight = 150px，我们说过offsetHeight是获取元素的高度，上面代码中我们元素的高度设置为100px，但是offsetHeight却是150px，这就是因为正常盒子模型的宽度等于内容宽度的原因，实际上box1占据的宽度要更宽。
实际上offsetHeight = 100 + 20(padding) + 20(padding) + 5(border) + 5(border)。
在实际项目中，为了获得更准确，或者最真实的元素宽度，我们需要把正常盒子模型转为怪异盒子模型，添加属性box-sizing:border-box.。</p>
<p><strong>代码</strong></p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css"></span>
<span class="line">            <span class="token selector">.box1</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span></span>
<span class="line">                <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span></span>
<span class="line">                <span class="token property">padding</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span></span>
<span class="line">                <span class="token property">margin</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span></span>
<span class="line">                <span class="token property">border</span><span class="token punctuation">:</span> 5px solid yellow<span class="token punctuation">;</span></span>
<span class="line">                <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span></span>
<span class="line">                <span class="token property">background-color</span><span class="token punctuation">:</span> #ccc<span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>box1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>盒子1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">            <span class="token keyword">const</span> box1 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementsByClassName</span><span class="token punctuation">(</span><span class="token string">"box1"</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">            console<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">"盒子1的offsetHeight"</span><span class="token punctuation">,</span> box1<span class="token punctuation">.</span>offsetHeight<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>展示结果</strong></p>
<p><img src="/style/css_records/日常记录/004.png" alt=""></p>
<h3 id="_2-3-clientheight" tabindex="-1"><a class="header-anchor" href="#_2-3-clientheight"><span>2.3 clientHeight</span></a></h3>
<p>简单总结为一句话：获取元素的高度，包含padding。
这个属性和offsetHeight类似，唯一的区别就是它不包含border，具体来看代码演示。</p>
<p><strong>代码</strong></p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css"></span>
<span class="line">            <span class="token selector">.box1</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span></span>
<span class="line">                <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span></span>
<span class="line">                <span class="token property">padding</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span></span>
<span class="line">                <span class="token property">margin</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span></span>
<span class="line">                <span class="token property">border</span><span class="token punctuation">:</span> 5px solid yellow<span class="token punctuation">;</span></span>
<span class="line">                <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span></span>
<span class="line">                <span class="token property">background-color</span><span class="token punctuation">:</span> #ccc<span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">            <span class="token selector">.box2</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span></span>
<span class="line">                <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span></span>
<span class="line">                <span class="token property">padding</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span></span>
<span class="line">                <span class="token property">margin</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span></span>
<span class="line">                <span class="token property">border</span><span class="token punctuation">:</span> 5px solid yellow<span class="token punctuation">;</span></span>
<span class="line">                <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span></span>
<span class="line">                <span class="token property">background-color</span><span class="token punctuation">:</span> #ccc<span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>box1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>盒子1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>box2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>盒子2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">            <span class="token keyword">const</span> box1 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementsByClassName</span><span class="token punctuation">(</span><span class="token string">"box1"</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">const</span> box2 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementsByClassName</span><span class="token punctuation">(</span><span class="token string">"box2"</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">            console<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">"盒子1的offsetHeight"</span><span class="token punctuation">,</span> box1<span class="token punctuation">.</span>offsetHeight<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            console<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">"盒子2的clientHeight"</span><span class="token punctuation">,</span> box2<span class="token punctuation">.</span>clientHeight<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>展示结果</strong></p>
<p><img src="/style/css_records/日常记录/005.png" alt=""></p>
<p>总结：clientHeight = content + padding</p>
<h3 id="_2-4-scrollheight" tabindex="-1"><a class="header-anchor" href="#_2-4-scrollheight"><span>2.4 scrollHeight</span></a></h3>
<p>简单总结为一句话：获取元素的高度，包含padding。
这个属性和clientHeight类似，都不包含border，那么具体有什么不一样呢，我们看代码演示。</p>
<p><strong>代码</strong></p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css"></span>
<span class="line">            <span class="token selector">.box1</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span></span>
<span class="line">                <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span></span>
<span class="line">                <span class="token property">padding</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span></span>
<span class="line">                <span class="token property">margin</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span></span>
<span class="line">                <span class="token property">border</span><span class="token punctuation">:</span> 5px solid yellow<span class="token punctuation">;</span></span>
<span class="line">                <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span></span>
<span class="line">                <span class="token property">background-color</span><span class="token punctuation">:</span> #ccc<span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">            <span class="token selector">.box2</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span></span>
<span class="line">                <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span></span>
<span class="line">                <span class="token property">padding</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span></span>
<span class="line">                <span class="token property">margin</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span></span>
<span class="line">                <span class="token property">border</span><span class="token punctuation">:</span> 5px solid yellow<span class="token punctuation">;</span></span>
<span class="line">                <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span></span>
<span class="line">                <span class="token property">background-color</span><span class="token punctuation">:</span> #ccc<span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span> </span>
<span class="line">            <span class="token selector">.box3</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span></span>
<span class="line">                <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span></span>
<span class="line">                <span class="token property">padding</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span></span>
<span class="line">                <span class="token property">margin</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span></span>
<span class="line">                <span class="token property">border</span><span class="token punctuation">:</span> 5px solid yellow<span class="token punctuation">;</span></span>
<span class="line">                <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span></span>
<span class="line">                <span class="token property">background-color</span><span class="token punctuation">:</span> #ccc<span class="token punctuation">;</span></span>
<span class="line">                <span class="token property">overflow</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>box1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>盒子1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>box2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>盒子2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>box3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>盒子3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">            <span class="token keyword">const</span> box1 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementsByClassName</span><span class="token punctuation">(</span><span class="token string">"box1"</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">const</span> box2 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementsByClassName</span><span class="token punctuation">(</span><span class="token string">"box2"</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">const</span> box3 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementsByClassName</span><span class="token punctuation">(</span><span class="token string">"box3"</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">            console<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">"盒子1的offsetHeight"</span><span class="token punctuation">,</span> box1<span class="token punctuation">.</span>offsetHeight<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            console<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">"盒子2的clientHeight"</span><span class="token punctuation">,</span> box2<span class="token punctuation">.</span>clientHeight<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            console<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">"盒子3的scrollHeight"</span><span class="token punctuation">,</span> box3<span class="token punctuation">.</span>scrollHeight<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>展示结果</strong></p>
<p><img src="/style/css_records/日常记录/006.png" alt=""></p>
<p>可以看到scrollHeight和clientHeight输出结果一样，那么它们之间有什么区别呢？
其实它们的区别就一个：scrollHeight的高度需要更具内容的实际尺寸决定，比如我们修改一下我们的代码。
代码如下：</p>
<p><strong>代码</strong></p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css"></span>
<span class="line">            <span class="token selector">.box1</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span></span>
<span class="line">                <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span></span>
<span class="line">                <span class="token property">padding</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span></span>
<span class="line">                <span class="token property">margin</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span></span>
<span class="line">                <span class="token property">border</span><span class="token punctuation">:</span> 5px solid yellow<span class="token punctuation">;</span></span>
<span class="line">                <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span></span>
<span class="line">                <span class="token property">background-color</span><span class="token punctuation">:</span> #ccc<span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">            <span class="token selector">.box2</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span></span>
<span class="line">                <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span></span>
<span class="line">                <span class="token property">padding</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span></span>
<span class="line">                <span class="token property">margin</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span></span>
<span class="line">                <span class="token property">border</span><span class="token punctuation">:</span> 5px solid yellow<span class="token punctuation">;</span></span>
<span class="line">                <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span></span>
<span class="line">                <span class="token property">background-color</span><span class="token punctuation">:</span> #ccc<span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">            <span class="token selector">.box3</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span></span>
<span class="line">                <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span></span>
<span class="line">                <span class="token property">padding</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span></span>
<span class="line">                <span class="token property">margin</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span></span>
<span class="line">                <span class="token property">border</span><span class="token punctuation">:</span> 5px solid yellow<span class="token punctuation">;</span></span>
<span class="line">                <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span></span>
<span class="line">                <span class="token property">background-color</span><span class="token punctuation">:</span> #ccc<span class="token punctuation">;</span></span>
<span class="line">                <span class="token property">overflow</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>box1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>盒子1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>box2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>盒子2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">height</span><span class="token punctuation">:</span> 300px</span><span class="token punctuation">"</span></span></span>  <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>box3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>盒子3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">            <span class="token keyword">const</span> box1 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementsByClassName</span><span class="token punctuation">(</span><span class="token string">"box1"</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">const</span> box2 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementsByClassName</span><span class="token punctuation">(</span><span class="token string">"box2"</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">const</span> box3 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementsByClassName</span><span class="token punctuation">(</span><span class="token string">"box3"</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">            console<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">"盒子1的offsetHeight"</span><span class="token punctuation">,</span> box1<span class="token punctuation">.</span>offsetHeight<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            console<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">"盒子2的clientHeight"</span><span class="token punctuation">,</span> box2<span class="token punctuation">.</span>clientHeight<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            console<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">"盒子3的scrollHeight"</span><span class="token punctuation">,</span> box3<span class="token punctuation">.</span>scrollHeight<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>展示结果</strong></p>
<p><img src="/style/css_records/日常记录/007.png" alt=""></p>
<p>上段代码中我们在box3中添加了一个div，并且设置高度300px，此时的scrollHeight输出340px，也就代表我们的scrollHeight是需要根据实际的内容尺寸计算的。
总结：scrollHeight = 实际内容尺寸+ padding</p>
<h3 id="_2-5-总结" tabindex="-1"><a class="header-anchor" href="#_2-5-总结"><span>2.5 总结</span></a></h3>
<p>这三个属性虽然都很类似，但是每一个又有一些不一样的地方，总结起来就下面三点：</p>
<ul>
<li>offsetHeight = 内容高度 + padding + border</li>
<li>clientheight = 内容高度 + padding</li>
<li>scrollHeight = 内容实际尺寸 + padding</li>
</ul>
<h2 id="_3-非flex居中" tabindex="-1"><a class="header-anchor" href="#_3-非flex居中"><span>3.非flex居中</span></a></h2>
<p>在居中对齐的方法中常用的一种方法之一，就是使用绝对定位结合 translate、top、left实现居中</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token selector">.out</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.in</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>-50%<span class="token punctuation">,</span> -50%<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解读：由此可见主要是由top、left的百分比和translate百分比实现的，那我们接下来就有必要讲一下两者百分比的原理了：
top、left的百分比的原理
居中对齐的实现是依靠了top/left的的百分比来实现的，而且还是正的百分比，下面我们先给出其百分比和位置的公式：</p>
<blockquote>
<ul>
<li>X（内X轴偏移量） = width（外部的盒子） *  left百分比</li>
<li>Y（内Y轴偏移量） = height（外部的盒子）*  top百分比</li>
</ul>
</blockquote>
<p>translate的百分比的原理</p>
<p>居中对齐的实现是还依靠了translate，而且还是负的百分比，下面我们先给出它百分比和位置的公式：</p>
<blockquote>
<ul>
<li>X（内X轴偏移量） = width（盒子本身） * translateX百分比</li>
<li>Y（内Y轴偏移量） = height（盒子本身） * translateY百分比</li>
</ul>
</blockquote>
<p>从上述的原理解读中可以看出最终的位置的计算公式是：</p>
<blockquote>
<ul>
<li>X（内X轴偏移量） = width（外）  left百分比（内） + width（内）  translateX百分比（内）</li>
<li>Y（内Y轴偏移量） = height（外）  top百分比（内） + height（内）  translateY百分比（内）</li>
</ul>
</blockquote>
<p>具体实战的数据</p>
<blockquote>
<ul>
<li>X（内X轴偏移量） = 300  * 50%  + 100  *  -50% = 100</li>
<li>Y（内X轴偏移量） = 300  * 50% + 100  *  -50% = 100</li>
</ul>
</blockquote>
<h2 id="_4-隐藏元素" tabindex="-1"><a class="header-anchor" href="#_4-隐藏元素"><span>4.隐藏元素</span></a></h2>
<p><strong>隐藏元素的方法</strong></p>
<ul>
<li><code v-pre>display: none</code></li>
<li><code v-pre>visibility: hidden</code></li>
<li><code v-pre>opacity: 0</code></li>
<li><code v-pre>&lt;div hidden&gt;&lt;/div&gt;</code></li>
<li><code v-pre>position: absolute; top: -9999px; left: -9999px;</code></li>
<li><code v-pre>clip-path: polygon(0 0, 0 0, 0 0, 0 0)</code></li>
<li><code v-pre>width: 0; height: 0; overflow: hidden;</code></li>
<li><code v-pre>transform: translate(-9999px, -9999px) || transform: scale(0)</code></li>
</ul>
<h3 id="_4-1-display" tabindex="-1"><a class="header-anchor" href="#_4-1-display"><span>4.1.display</span></a></h3>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token selector">.hide-dispaly</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">display</span><span class="token punctuation">:</span> none</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>特点</strong>：</p>
<ul>
<li>真正意义上的隐藏，元素不会占据任何空间</li>
<li>用户无法与其进行直接的交互</li>
<li>通过DOM依然可以获取到该元素</li>
<li>子孙元素即使重新设置dispaly: block也无法显示</li>
<li>transition动画会失效</li>
</ul>
<h3 id="_4-2-visibility" tabindex="-1"><a class="header-anchor" href="#_4-2-visibility"><span>4.2 visibility</span></a></h3>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token selector">.hide-visibility</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">visibility</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>特点</strong>：</p>
<ul>
<li>隐藏元素依然占据空间，影响其他元素的布局</li>
<li>不会影响任何用户的交互</li>
<li>通过DOM依然可以获取该元素，无法响应DOM事件</li>
<li>其子孙元素可以通过重新设置visibility: visibile来显示</li>
</ul>
<h3 id="_4-3-opacity" tabindex="-1"><a class="header-anchor" href="#_4-3-opacity"><span>4.3 opacity</span></a></h3>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token selector">.hide-opacity</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>特点</strong></p>
<ul>
<li>只是视觉上隐藏，隐藏的元素依然占据着空间，影响其他元素的布局</li>
<li>依然能够响应用户的交互</li>
<li>通过DOM依然可以获取该元素，可以响应DOM事件</li>
<li>其子孙元素即使重新设置了opacity: 1也无法显示</li>
</ul>
<h3 id="_4-4-hidden" tabindex="-1"><a class="header-anchor" href="#_4-4-hidden"><span>4.4 hidden</span></a></h3>
<p>HEML5新增的hidden属性，可以直接隐藏元素。效果与特点与display一致</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">hidden</span><span class="token punctuation">></span></span></span>
<span class="line">  我是被隐藏的元素</span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-5-position" tabindex="-1"><a class="header-anchor" href="#_4-5-position"><span>4.5 position</span></a></h3>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token selector">.hide-position</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">top</span><span class="token punctuation">:</span> -9999px<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">left</span><span class="token punctuation">:</span> -9999px<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>特点</strong>：</p>
<ul>
<li>视觉上隐藏，实际显示在屏幕的可视区之外，不会占据空间，不影响其他元素布局</li>
<li>用户无法与其交互</li>
<li>通过dom可以获得该元素</li>
<li>其子孙元素无法通过重新设置对应的属性来显示</li>
</ul>
<h3 id="_4-6-clip-path" tabindex="-1"><a class="header-anchor" href="#_4-6-clip-path"><span>4.6 clip-path</span></a></h3>
<p>通过裁剪元素来实现隐藏</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token selector">.hide-clip</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">clip-path</span><span class="token punctuation">:</span> <span class="token function">polygon</span><span class="token punctuation">(</span>0 0<span class="token punctuation">,</span> 0 0<span class="token punctuation">,</span> 0 0<span class="token punctuation">,</span> 0 0<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>特点</strong>：</p>
<ul>
<li>视觉隐藏，隐藏元素占据空间，影响其他元素的布局</li>
<li>用户无法与其进行交互</li>
<li>通过dom可以获得该元素</li>
<li>其子孙元素无法重新设置对应属性来显示</li>
</ul>
<h3 id="_4-7-overflow" tabindex="-1"><a class="header-anchor" href="#_4-7-overflow"><span>4.7 overflow</span></a></h3>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token selector">.hide-overflow</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">width</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>特点</strong>：</p>
<ul>
<li>视觉隐藏，不占据空间，不影响其他元素布局</li>
<li>用户无法与其交互</li>
<li>通过DOM可获得该元素</li>
<li>子孙元素无法重新设置该属性来显示</li>
</ul>
<h3 id="_4-8-transfrom" tabindex="-1"><a class="header-anchor" href="#_4-8-transfrom"><span>4.8 transfrom</span></a></h3>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token selector">.hide-transform</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>-9999px<span class="token punctuation">,</span> -9999px<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或者</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token selector">.hide-transform</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>特点</strong>：</p>
<ul>
<li>视觉隐藏，占据空间，影响其他元素布局</li>
<li>用户无法与其交互</li>
<li>通过dom可以获得该元素</li>
<li>其子孙元素无法重新设置该属性来显示</li>
</ul>
<h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h3>
<ul>
<li>真实隐藏
<ul>
<li><code v-pre>display: nono</code></li>
<li><code v-pre>&lt;div hidden&gt;&lt;/div&gt;</code></li>
</ul>
</li>
<li>视觉隐藏
<ul>
<li><code v-pre>visibility: hidden</code></li>
<li><code v-pre>opacity: 0</code></li>
<li><code v-pre>position</code></li>
<li><code v-pre>transform</code></li>
<li><code v-pre>clip-path</code></li>
<li><code v-pre>overflow</code></li>
</ul>
</li>
</ul>
<h2 id="_5-html中空格的方式" tabindex="-1"><a class="header-anchor" href="#_5-html中空格的方式"><span>5.Html中空格的方式</span></a></h2>
<h3 id="_5-1-空格符" tabindex="-1"><a class="header-anchor" href="#_5-1-空格符"><span>5.1 空格符</span></a></h3>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line">大<span class="token entity named-entity" title="&nbsp;">&amp;nbsp;</span><span class="token entity named-entity" title="&nbsp;">&amp;nbsp;</span>家<span class="token entity named-entity" title="&nbsp;">&amp;nbsp;</span><span class="token entity named-entity" title="&nbsp;">&amp;nbsp;</span>好！</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>显示效果为：大 家 好！</p>
<h3 id="_5-2-p标签使用空两格" tabindex="-1"><a class="header-anchor" href="#_5-2-p标签使用空两格"><span>5.2 p标签使用空两格</span></a></h3>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>百度地图API功能<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">text-indent</span><span class="token punctuation">:</span>2em</span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>百度地图API功能<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>效果如下：</p>
<p><img src="/style/css_records/日常记录/008.png" alt=""></p>
<h3 id="_5-3-span标签空格" tabindex="-1"><a class="header-anchor" href="#_5-3-span标签空格"><span>5.3 span标签空格</span></a></h3>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>百度地图API功能<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">/></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">padding-left</span><span class="token punctuation">:</span>30px<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>百度地图API功能<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>效果如下：</p>
<p><img src="/style/css_records/日常记录/009.png" alt=""></p>
<h3 id="_5-4-word-spacing属性" tabindex="-1"><a class="header-anchor" href="#_5-4-word-spacing属性"><span>5.4 word-spacing属性，</span></a></h3>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">word-spacing</span><span class="token punctuation">:</span>30px</span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>Happy new year!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>效果：</p>
<p><img src="/style/css_records/日常记录/010.png" alt=""></p>
<h3 id="_5-5-letter-spacing属性" tabindex="-1"><a class="header-anchor" href="#_5-5-letter-spacing属性"><span>5.5 letter-spacing属性</span></a></h3>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">letter-spacing</span><span class="token punctuation">:</span>30px</span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>Happynewyear!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span> </span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>效果如下：</p>
<p><img src="/style/css_records/日常记录/011.png" alt=""></p>
</div></template>


