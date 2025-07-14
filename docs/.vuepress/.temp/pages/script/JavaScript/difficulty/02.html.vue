<template><div><h1 id="二、垃圾回收机制及算法" tabindex="-1"><a class="header-anchor" href="#二、垃圾回收机制及算法"><span>二、垃圾回收机制及算法</span></a></h1>
<h2 id="_2-1-垃圾回收机制" tabindex="-1"><a class="header-anchor" href="#_2-1-垃圾回收机制"><span>2.1 垃圾回收机制</span></a></h2>
<p>垃圾回收机制（Garbage Collection）简称GC</p>
<p>JS中内存的分配和回收都是自动完成的，内存在不使用的时候会被阿吉回收器自动回收</p>
<p>内存的声明周期</p>
<p>JS环境中分配的内存，一般有如下声明周期：</p>
<ol>
<li>内存分配：当我们声明变量、函数、对象的时候，系统会自动为他们分配内存</li>
<li>内存使用：即读写内存，也就是使用变量、函数等</li>
<li>内存回收：使用完毕，由垃圾回收器自动回收不再使用的内存</li>
</ol>
<p>说明：</p>
<p>全局变量一般不会回收（关闭页面回收）</p>
<p>一般情况下局部变量的值，不用了，会被自动回收掉</p>
<p>内存泄漏：</p>
<p>程序中分配的内存由于某种原因程序未释放或无法释放叫做内存泄漏</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 为变量分配内存</span></span>
<span class="line"><span class="token keyword">const</span> age <span class="token operator">=</span> <span class="token number">18</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 为对象分配内存</span></span>
<span class="line"><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">19</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 为函数分配内存</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> age <span class="token operator">=</span> <span class="token number">18</span><span class="token punctuation">;</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-2-js垃圾回收说明" tabindex="-1"><a class="header-anchor" href="#_2-2-js垃圾回收说明"><span>2.2 JS垃圾回收说明</span></a></h2>
<p>堆栈空间分配区别：</p>
<ol>
<li>栈（操作系统）：由操作系统自动分配释放函数的参数值、局部变量等，基本数据类型放在栈里面。</li>
<li>堆（操作系统）：一般由程序员分配释放，若程序员不释放，由垃圾回收机制回收。复杂数据类型放到堆立面。</li>
</ol>
<p>下面介绍两种常见的浏览器垃圾回收算法：引用计数法 和 标记清除法</p>
<h3 id="_2-2-1-应用计数" tabindex="-1"><a class="header-anchor" href="#_2-2-1-应用计数"><span>2.2.1 应用计数</span></a></h3>
<p>IE采用的引用计数算法,定义“内存不再使用”，就是看一个对象是否有指向它的引用，没有引用了就回收对象算法:
1. 跟踪记录被引用的次数
2. 如果被引用了一次，那么就记录次数1,多次引用会累加 ++
3. 如果减少一个引用就减1 --
4. 如果引用次数是0，则释放内存</p>
<p><img src="/script/JavaScript/difficulty/001.png" alt=""></p>
<p><img src="/script/JavaScript/difficulty/002.png" alt=""></p>
<p>但是它存在一个致命的问题：嵌套引用（循环引用）
如果两个对象互相引用，尽管他们已不再使用，垃圾回收器不会进行回收，导致内存泄漏。</p>
<p><img src="/script/JavaScript/difficulty/003.png" alt=""></p>
<h3 id="_2-2-2-标记清除法" tabindex="-1"><a class="header-anchor" href="#_2-2-2-标记清除法"><span>2.2.2 标记清除法</span></a></h3>
<p>现代的浏览器已经不再使用引用计数算法了</p>
<p>现代浏览器通用的大多是基于标记清除算法的某些改进算法，总体思想都是一致的。核心:</p>
<ol>
<li>标记清除算法将“不再使用的对象”定义为“无法达到的对象”</li>
<li>就是从根部(在IS中就是全局对象)出发定时扫描内存中的对象。凡是能从根部到达的对象，都是还需要使用的</li>
<li>那些无法由根部出发触及到的对象被标记为不再使用，稍后进行回收。</li>
</ol>
<p><img src="/script/JavaScript/difficulty/004.png" alt=""></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 函数中的两个对象，无法被外部的window，self 等顶层对象访问</span></span>
<span class="line">    <span class="token comment">// 使用完成后，里面的内容全部清除掉</span></span>
<span class="line">    <span class="token keyword">let</span> o1 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">let</span> o2 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line">    o1<span class="token punctuation">.</span>a <span class="token operator">=</span> o2</span>
<span class="line">    o2<span class="token punctuation">.</span>a <span class="token operator">=</span> o1</span>
<span class="line">    <span class="token keyword">return</span> <span class="token string">"引用计数无法回收"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


