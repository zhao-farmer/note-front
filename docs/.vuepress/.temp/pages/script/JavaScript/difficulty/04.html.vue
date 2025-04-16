<template><div><h1 id="四、变量提升" tabindex="-1"><a class="header-anchor" href="#四、变量提升"><span>四、变量提升</span></a></h1>
<p>目标:了解什么是变量提升</p>
<p>变量提升是JavaScript 中比较“奇怪”的现象，它允许在变量声明之前即被访问(仅存在于var声明变量)</p>
<p>注意:</p>
<ol>
<li>变量在未声明即被访问时会报语法错误</li>
<li>变量在var声明之前即被访问，变量的值为 undefined</li>
<li>let/const 声明的变量不存在变量提升</li>
<li>变量提升出现在相同作用域当中</li>
<li>实际开发中推荐先声明再访问变量</li>
</ol>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// 1.把所有var声明的变量提升到 当前作用域的最前面</span></span>
<span class="line"><span class="token comment">// 2.只提升声明，不提升赋值</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 全局作用域</span></span>
<span class="line"><span class="token comment">// 相当于使用 var num;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num <span class="token operator">+</span> <span class="token string">"件"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//undefined件</span></span>
<span class="line"><span class="token keyword">var</span> num <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 局部作用域</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 相当于使用 var num;</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num <span class="token operator">+</span> <span class="token string">"件"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//undefined件</span></span>
<span class="line">    <span class="token keyword">var</span> num <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>说明:</p>
<p>J5初学者经常花很多时间才能习惯变量提升，还经常出现一些意想不到的bug，正因为如此，ES6 引入了块级作用域用let 或者 const声明变量，让代码写法更加规范和人性化。</p>
</div></template>


