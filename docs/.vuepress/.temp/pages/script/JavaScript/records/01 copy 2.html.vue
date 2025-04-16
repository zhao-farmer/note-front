<template><div><h1 id="一、作用域与作用域链" tabindex="-1"><a class="header-anchor" href="#一、作用域与作用域链"><span>一、作用域与作用域链</span></a></h1>
<h2 id="_1-1-局部作用域" tabindex="-1"><a class="header-anchor" href="#_1-1-局部作用域"><span>1.1 局部作用域</span></a></h2>
<p>局部作于分为函数作用域和块作用域</p>
<h3 id="_1-1-1-函数作用域" tabindex="-1"><a class="header-anchor" href="#_1-1-1-函数作用域"><span>1.1.1 函数作用域</span></a></h3>
<p>在函数内部声明的遍历只能在函数内部访问，外部无法直接访问</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">getSum</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 函数内部是函数作用域 属于局部变量</span></span>
<span class="line">    <span class="token keyword">const</span> num <span class="token operator">=</span> <span class="token number">10</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//此处报错 函数外部不能使用局部作用域变量</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>总结：</p>
<ol>
<li>函数内部声明的变量，在函数外部无法被访问</li>
<li>函数的参数也是函数内部的局部变量</li>
<li>不同函数内部声明的变量无法互相访问</li>
<li>函数执行完毕后，函数内部的变量实际清空了</li>
</ol>
<h3 id="_1-1-2-块级作用域" tabindex="-1"><a class="header-anchor" href="#_1-1-2-块级作用域"><span>1.1.2 块级作用域</span></a></h3>
<p>在javascript中使用{}包裹的代码称为代码块，代码块内部声明的变量外部将[有可能]无法被访问</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> t <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> t <span class="token operator">&lt;</span> <span class="token number">6</span><span class="token punctuation">;</span> t<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>t<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      </span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token comment">// 超出了t的作用域</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>t<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 报错  </span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol>
<li>let声明的变量会产生块作用域，var不会产生块作用域</li>
<li>const声明的变量也会产生块作用域</li>
<li>不同代码块之间的变量无法互相访问</li>
<li>推荐使用let或const</li>
</ol>
<h2 id="_1-2-全局作用域" tabindex="-1"><a class="header-anchor" href="#_1-2-全局作用域"><span>1.2 全局作用域</span></a></h2>
<p><code v-pre>&lt;script&gt;</code>标签和.js文件的【最外层】就是所谓的全局作用域，在此声明的变量在函数内部也可以被访问
全局作用域中声明的变量，任何其他作用域都可以访问</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">    <span class="token comment">// 全局作用域</span></span>
<span class="line">    <span class="token comment">// 全局作用域下声明了 num 变量</span></span>
<span class="line">    <span class="token keyword">const</span> num <span class="token operator">=</span> <span class="token number">10</span></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// 函数内部可以使用全局作用域的变量</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token comment">// 此处全局作用域</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：</p>
<ol>
<li>为window对象动态添加的属性默认也是全局的，不推荐</li>
<li>函数中未使用任何关键字声明的变量为全局变量，不推荐</li>
<li>尽可能少的声明全局变量，防止全局变量被污染</li>
</ol>
<h2 id="_1-3-作用域链" tabindex="-1"><a class="header-anchor" href="#_1-3-作用域链"><span>1.3 作用域链</span></a></h2>
<p>作用域链本质上是底层的变量查找机制</p>
<ul>
<li>在函数被执行时，会优先查找当前函数作用域中查找变量</li>
<li>如果当前作用域查找不到则会依次逐级查找父级作用域直到全局作用域</li>
</ul>
<div class="language-HTML line-numbers-mode" data-highlighter="prismjs" data-ext="HTML" data-title="HTML"><pre v-pre><code><span class="line">&lt;script&gt;</span>
<span class="line">    // 全局作用域</span>
<span class="line">    let a = 1</span>
<span class="line">    let b = 2</span>
<span class="line">    // 局部作用域</span>
<span class="line">    function f(){</span>
<span class="line">        let a = 1</span>
<span class="line">        // 局部作用域</span>
<span class="line">        function g(){</span>
<span class="line">            a = 2</span>
<span class="line">            console.log(a);</span>
<span class="line">        }</span>
<span class="line">        g() //调用g</span>
<span class="line">    }</span>
<span class="line">    f() //调用f</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>总结：</p>
<ol>
<li>嵌套关系的作用域串联起来形成了作用域链</li>
<li>相同作用域链中按着从小到大的规则查找变量</li>
<li>子作用域能够访问父作用域，父级作用域无法访问子作用域</li>
</ol>
</div></template>


