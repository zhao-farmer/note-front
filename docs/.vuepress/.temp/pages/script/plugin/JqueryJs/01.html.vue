<template><div><h1 id="一、认识jquery" tabindex="-1"><a class="header-anchor" href="#一、认识jquery"><span>一、认识Jquery</span></a></h1>
<h2 id="_1-1-简介" tabindex="-1"><a class="header-anchor" href="#_1-1-简介"><span>1.1 简介</span></a></h2>
<p>jQuery是一个快速、小巧且功能丰富的JavaScript库。它通过一个易于使用的API使HTML文档遍历和操作、事件处理、动画和Ajax等事情变得更加简单，该API可在多种浏览器上工作。jQuery结合了通用性和可扩展性，改变了数百万人编写JavaScript的方式。</p>
<h2 id="_1-2-下载与引入" tabindex="-1"><a class="header-anchor" href="#_1-2-下载与引入"><span>1.2 下载与引入</span></a></h2>
<ol>
<li>
<p><a href="https://jquery.com/" target="_blank" rel="noopener noreferrer">官网</a></p>
</li>
<li>
<p><a href="https://github.com/jquery/jquery" target="_blank" rel="noopener noreferrer">github下载</a></p>
</li>
<li>
<p>Jquery引入</p>
</li>
</ol>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>../js/jquery.3.7.1.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="_1-3-概述" tabindex="-1"><a class="header-anchor" href="#_1-3-概述"><span>1.3 概述</span></a></h2>
<ol>
<li>
<p>什么是jQuery？</p>
<ul>
<li>js文件，存了很多方法（函数），函数库</li>
<li><code v-pre>$(&quot;&quot;)</code></li>
</ul>
</li>
<li>
<p>代码风格</p>
<ul>
<li>要使用jQuery的时候，首先引入jQuery（）</li>
</ul>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>box<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>Home<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>box<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>jQuery3.7.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1.介绍.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><code v-pre>$</code> 和 <code v-pre>$()</code></p>
<ul>
<li><code v-pre>$</code> ：其实就是一个函数，返回jQuery对象，<code v-pre>$===jQuery</code></li>
<li><code v-pre>$()</code>：调用函数</li>
</ul>
</li>
<li>
<p>jQuery和原生js之间的相互转换</p>
<ul>
<li>jQuery =&gt; 原生节点
<br> <code v-pre>$(&quot;div&quot;)[0]</code>  ----------原生js节点</li>
<li>原生节点 =&gt; jQuery
<br> <code v-pre>let myP=document.getElementById(&quot;myP&quot;)</code>
<br> <code v-pre>$(myP)</code></li>
</ul>
</li>
<li>
<p>链式调用</p>
<ul>
<li>$(selector).action1().action2().action3();</li>
<li>这里的 $(selector) 选取了一组元素，然后 .action1(), .action2(), .action3() 等方法依次被调用，每个方法都返回了 jQuery 对象本身，因此可以继续链式调用。</li>
</ul>
</li>
</ol>
</div></template>


