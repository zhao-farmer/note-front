<template><div><h1 id="九、es14" tabindex="-1"><a class="header-anchor" href="#九、es14"><span>九、ES14</span></a></h1>
<h2 id="_9-1-数组和类型化数组的新方法" tabindex="-1"><a class="header-anchor" href="#_9-1-数组和类型化数组的新方法"><span>9.1 数组和类型化数组的新方法</span></a></h2>
<h3 id="_9-1-1-tosorted-comparefn" tabindex="-1"><a class="header-anchor" href="#_9-1-1-tosorted-comparefn"><span>9.1.1 toSorted(compareFn)</span></a></h3>
<ul>
<li>功能：返回一个新数组，其中元素按升序排序，而不改变原始数组。</li>
<li>参数：compareFn（可选）一个用来定义排序顺序的函数。</li>
<li>示例‌：</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> array <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> sortedArray <span class="token operator">=</span> array<span class="token punctuation">.</span><span class="token function">toSorted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=></span> a <span class="token operator">-</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>sortedArray<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [1, 2, 3]</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>array<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [3, 2, 1]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9-1-2-toreversed" tabindex="-1"><a class="header-anchor" href="#_9-1-2-toreversed"><span>9.1.2 toReversed()</span></a></h3>
<ul>
<li>功能：返回一个新数组，该数组的元素顺序被反转，但不改变原始数组。</li>
<li>示例：</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> array <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> reversedArray <span class="token operator">=</span> array<span class="token punctuation">.</span><span class="token function">toReversed</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>reversedArray<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [3, 2, 1]</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>array<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [1, 2, 3]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9-1-3-tospliced-start-deletecount-item1-itemn" tabindex="-1"><a class="header-anchor" href="#_9-1-3-tospliced-start-deletecount-item1-itemn"><span>9.1.3 toSpliced(start, deleteCount, item1..., itemN)</span></a></h3>
<ul>
<li>功能：返回一个新数组，在给定索引处删除和/或替换了一些元素，而不改变原始数组。</li>
<li>参数：
<ul>
<li>start：开始改变数组的位置。</li>
<li>deleteCount：要删除的元素数量（可选，0或负数则不会删除元素）。</li>
<li>item1..., itemN：要添加进数组的元素。</li>
</ul>
</li>
<li>示例：</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> array <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> splicedArray <span class="token operator">=</span> array<span class="token punctuation">.</span><span class="token function">toSpliced</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">'a'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>splicedArray<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [1, 'a', 3, 4]</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>array<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [1, 2, 3, 4]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9-1-4-tospliced-index-value" tabindex="-1"><a class="header-anchor" href="#_9-1-4-tospliced-index-value"><span>9.1.4 toSpliced(index, value)</span></a></h3>
<ul>
<li>功能：with方法接收一个索引和一个值作为参数，并返回一个新数组，该数组在指定索引处的值被修改为给定的值，而原始数组保持不变。</li>
<li>参数：
<ul>
<li>index：要修改的元素的索引。</li>
<li>value：要在指定索引处设置的新值。‌</li>
</ul>
</li>
<li>示例：</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> numbers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> updatedNumbers <span class="token operator">=</span> numbers<span class="token punctuation">.</span><span class="token function">with</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>numbers<span class="token punctuation">)</span><span class="token punctuation">;</span>        <span class="token comment">// 输出: [1, 2, 3, 4, 5]</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>updatedNumbers<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: [1, 2, 10, 4, 5]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9-2-对-注释的支持" tabindex="-1"><a class="header-anchor" href="#_9-2-对-注释的支持"><span>9.2 对#!注释的支持</span></a></h2>
<ul>
<li>1.js</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token shebang important">#!/usr/bin/env node</span></span>
<span class="line">console.log<span class="token punctuation">(</span><span class="token string">'Hello, World!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>index.html</li>
</ul>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>module<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">    <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">"./1.js"</span><span class="token punctuation">)</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9-3-weakmap的扩展" tabindex="-1"><a class="header-anchor" href="#_9-3-weakmap的扩展"><span>9.3 WeakMap的扩展</span></a></h2>
<p>支持 Symbol 作为键</p>
<p>之前WeakMap是只支持对象作为键，现在还支持 Symbol 作为键</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> weak <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WeakMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> key <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">"ref"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">weak<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> <span class="token string">"randy"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>weak<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// randy</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


