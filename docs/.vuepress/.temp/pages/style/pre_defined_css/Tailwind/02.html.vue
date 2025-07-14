<template><div><h1 id="二、基础语法" tabindex="-1"><a class="header-anchor" href="#二、基础语法"><span>二、基础语法</span></a></h1>
<h2 id="_2-1-原子类的概念" tabindex="-1"><a class="header-anchor" href="#_2-1-原子类的概念"><span>2.1 原子类的概念</span></a></h2>
<p>原子类是Tailwind CSS的核心概念，它提供了一系列的预定义类，可以快速地应用到HTML元素上以实现样式。这些类是“原子”的，因为它们代表单个属性和值，如<code v-pre>text-blue-500</code>或<code v-pre>bg-gray-100</code>。使用原子类可以避免编写大量的CSS代码，并且可以快速地构建和迭代设计。<a href="https://link.juejin.cn/?target=https%3A%2F%2Fcmdragon.cn" title="https://cmdragon.cn" target="_blank" rel="noopener noreferrer">cmdragon's Blog</a></p>
<h2 id="_2-2-常用原子类的使用" tabindex="-1"><a class="header-anchor" href="#_2-2-常用原子类的使用"><span>2.2 常用原子类的使用</span></a></h2>
<p>Tailwind CSS提供了大量的原子类，涵盖了布局、颜色、字体、边距、填充、边框、阴影、动画等各个方面。以下是一些常用的原子类示例：</p>
<ul>
<li>文本颜色：<code v-pre>text-red-500</code>、<code v-pre>text-green-300</code></li>
<li>背景颜色：<code v-pre>bg-blue-400</code>、<code v-pre>bg-yellow-200</code></li>
<li>字体大小：<code v-pre>text-sm</code>、<code v-pre>text-lg</code></li>
<li>边距：<code v-pre>m-2</code>、<code v-pre>mt-4</code>（m是margin的缩写，mt是margin-top的缩写）</li>
<li>填充：<code v-pre>p-3</code>、<code v-pre>pt-5</code>（p是padding的缩写，pt是padding-top的缩写）</li>
<li>边框：<code v-pre>border</code>、<code v-pre>border-2</code>（边框宽度）</li>
<li>阴影：<code v-pre>shadow</code>、<code v-pre>shadow-lg</code></li>
<li>布局：<code v-pre>flex</code>、<code v-pre>flex-wrap</code>、<code v-pre>justify-center</code></li>
<li>动画：<code v-pre>animate-bounce</code>、<code v-pre>animate-pulse</code></li>
</ul>
<h2 id="_2-3-定制化原子类" tabindex="-1"><a class="header-anchor" href="#_2-3-定制化原子类"><span>2.3 定制化原子类</span></a></h2>
<p>Tailwind CSS允许你通过配置文件<code v-pre>tailwind.config.js</code>来自定义原子类。例如，你可以添加自定义的颜色、字体、边距等。以下是一个简单的自定义示例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">extend</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">colors</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token string-property property">'brand'</span><span class="token operator">:</span> <span class="token string">'#ff69b4'</span><span class="token punctuation">,</span> <span class="token comment">// 自定义颜色</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">spacing</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token string-property property">'9'</span><span class="token operator">:</span> <span class="token string">'2.25rem'</span><span class="token punctuation">,</span> <span class="token comment">// 自定义边距</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-4-响应式设计" tabindex="-1"><a class="header-anchor" href="#_2-4-响应式设计"><span>2.4 响应式设计</span></a></h2>
<p>Tailwind CSS内置了响应式设计的支持，允许你根据不同的屏幕尺寸应用不同的样式。响应式设计是通过在原子类前添加断点前缀来实现的。Tailwind CSS预定义了以下几个断点：</p>
<ul>
<li><code v-pre>sm</code>：小于640px</li>
<li><code v-pre>md</code>：大于等于640px</li>
<li><code v-pre>lg</code>：大于等于1024px</li>
<li><code v-pre>xl</code>：大于等于1280px</li>
<li><code v-pre>2xl</code>：大于等于1536px</li>
</ul>
<p>使用响应式设计的原子类示例如下：</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text-sm sm:text-base lg:text-lg xl:text-xl<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>响应式文本大小<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>p-4 sm:p-6 lg:p-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>响应式边距<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的例子中，文本在手机屏幕上显示为小号，在平板上显示为基础大小，在桌面显示器上显示为大号，而在大屏幕显示器上显示为超大号。边距也有类似的响应式变化。</p>
</div></template>


