<template><div><h1 id="八、遍历数组foreach方法" tabindex="-1"><a class="header-anchor" href="#八、遍历数组foreach方法"><span>八、遍历数组foreach方法</span></a></h1>
<ul>
<li>forEach()方法用于调用数组的每个元素，并将元素传递给回调函数</li>
<li>主要使用场景: 遍历数组的每个元素</li>
<li>语法</li>
</ul>
<p><img src="/script/JavaScript/difficulty/005.png" alt=""></p>
<p>注意：</p>
<ol>
<li>foreach主要遍历数组</li>
<li>参数是当前数组元素必须要写的，索引号可选。</li>
</ol>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// foreach 就是遍历</span></span>
<span class="line"><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'red'</span><span class="token punctuation">,</span><span class="token string">'green'</span><span class="token punctuation">,</span><span class="token string">'pink'</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token keyword">const</span> result <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span>index</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 数组元素 red green pink</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 索引号</span></span>
<span class="line">    </span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


