<template><div><h1 id="十、es15" tabindex="-1"><a class="header-anchor" href="#十、es15"><span>十、ES15</span></a></h1>
<h2 id="_10-1-分组" tabindex="-1"><a class="header-anchor" href="#_10-1-分组"><span>10.1 分组</span></a></h2>
<h3 id="_10-1-1-map-groupby" tabindex="-1"><a class="header-anchor" href="#_10-1-1-map-groupby"><span>10.1.1 Map.groupBy()</span></a></h3>
<ul>
<li>接收两个参数：一个可迭代对象和一个回调函数。</li>
<li>回调函数用于确定每个元素的分组键。</li>
<li>返回一个Map，其中每个键对应一个数组，该数组包含所有具有相同键的元素。</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> fruits <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'apple'</span><span class="token punctuation">,</span> <span class="token string">'banana'</span><span class="token punctuation">,</span> <span class="token string">'orange'</span><span class="token punctuation">,</span> <span class="token string">'grape'</span><span class="token punctuation">,</span> <span class="token string">'watermelon'</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> groupedByLength <span class="token operator">=</span> Map<span class="token punctuation">.</span><span class="token function">groupBy</span><span class="token punctuation">(</span>fruits<span class="token punctuation">,</span> <span class="token parameter">fruit</span> <span class="token operator">=></span> fruit<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>groupedByLength<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// Map {</span></span>
<span class="line"><span class="token comment">//   5 => [ 'apple' ],</span></span>
<span class="line"><span class="token comment">//   6 => [ 'banana' ],</span></span>
<span class="line"><span class="token comment">//   8 => [ 'orange', 'grape' ],</span></span>
<span class="line"><span class="token comment">//   9 => [ 'watermelon' ]</span></span>
<span class="line"><span class="token comment">// }</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_10-1-2-object-groupby-‌" tabindex="-1"><a class="header-anchor" href="#_10-1-2-object-groupby-‌"><span>10.1.2 Object.groupBy()‌</span></a></h3>
<ul>
<li>与Map.groupBy()类似，但返回一个对象而不是Map。</li>
<li>如果回调函数返回相同的键，则相应的值将成为一个数组。</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> groupedByColor <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">groupBy</span><span class="token punctuation">(</span>fruits<span class="token punctuation">,</span> <span class="token parameter">fruit</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>fruit<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">"a"</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token string">"red"</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>fruit<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">"o"</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token string">"orange"</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token string">"other"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>groupedByColor<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// {</span></span>
<span class="line"><span class="token comment">//   red: [ 'apple', 'grape' ],</span></span>
<span class="line"><span class="token comment">//   orange: [ 'orange' ],</span></span>
<span class="line"><span class="token comment">//   other: [ 'banana', 'watermelon' ]</span></span>
<span class="line"><span class="token comment">// }</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_10-2-promise-withresolvers" tabindex="-1"><a class="header-anchor" href="#_10-2-promise-withresolvers"><span>10.2 Promise.withResolvers()</span></a></h2>
<ul>
<li>返回一个对象，该对象包含一个Promise实例以及resolve和reject函数。</li>
<li>这允许我们显式地控制Promise的解决和拒绝。</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> <span class="token punctuation">{</span> promise<span class="token punctuation">,</span> resolve<span class="token punctuation">,</span> reject <span class="token punctuation">}</span> <span class="token operator">=</span> Promise<span class="token punctuation">.</span><span class="token function">withResolvers</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">"Success!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">// 或者 reject('Error!');</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">promise<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">value</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: Success!</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">error</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_10-3-正则表达式v标志" tabindex="-1"><a class="header-anchor" href="#_10-3-正则表达式v标志"><span>10.3 正则表达式v标志</span></a></h2>
<p>v标志：</p>
<ul>
<li>启用更多与Unicode相关的功能。</li>
<li>支持集合操作（差异、相交、联合）和属性（如\p转义的多节点属性）。</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> regexDifference <span class="token operator">=</span> <span class="token operator">/</span>\p<span class="token punctuation">{</span><span class="token constant">L</span><span class="token operator">+</span><span class="token punctuation">}</span><span class="token operator">-</span>\p<span class="token punctuation">{</span><span class="token constant">N</span><span class="token operator">+</span><span class="token punctuation">}</span><span class="token operator">/</span>vu <span class="token operator">-</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\p{Script=Han}-\p{N+}</span><span class="token regex-delimiter">/</span><span class="token regex-flags">v</span></span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> text <span class="token operator">=</span> <span class="token string">"apple-123 香蕉-456"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>text<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>regexDifference<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [ 'apple-123' ]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_10-4-arraybuffers和sharedarraybuffers新功能" tabindex="-1"><a class="header-anchor" href="#_10-4-arraybuffers和sharedarraybuffers新功能"><span>10.4 ArrayBuffers和SharedArrayBuffers新功能</span></a></h2>
<p>ArrayBuffers：</p>
<ul>
<li>支持‌就地调整大小‌，但不允许超过预先定义的maxByteLength。</li>
<li>提供‌transfer()方法‌，使得ArrayBuffers的转移更加方便。</li>
</ul>
<p>SharedArrayBuffers：</p>
<ul>
<li>可以调整大小，但只能增长不能缩小。</li>
<li>不可转移，因此没有transfer()方法。</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> buf <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayBuffer</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">maxByteLength</span><span class="token operator">:</span> <span class="token number">32</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> view <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Uint8Array</span><span class="token punctuation">(</span>buf<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">view<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">42</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>view<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: 42</span></span>
<span class="line"></span>
<span class="line">buf<span class="token punctuation">.</span><span class="token function">resize</span><span class="token punctuation">(</span><span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> newView <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Uint8Array</span><span class="token punctuation">(</span>buf<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newView<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: 12</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newView<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: 42</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_10-5-字符串新增" tabindex="-1"><a class="header-anchor" href="#_10-5-字符串新增"><span>10.5 字符串新增</span></a></h2>
<h3 id="_10-5-1-iswellformed" tabindex="-1"><a class="header-anchor" href="#_10-5-1-iswellformed"><span>10.5.1 isWellFormed()</span></a></h3>
<p>用于测试字符串是否格式正确（即不包含单独代理项）。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> str1 <span class="token operator">=</span> <span class="token string">"ab\uD800"</span><span class="token punctuation">;</span> <span class="token comment">// 不完整的高代理项</span></span>
<span class="line"><span class="token keyword">const</span> str2 <span class="token operator">=</span> <span class="token string">"abc"</span><span class="token punctuation">;</span> <span class="token comment">// 完整字符串</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str1<span class="token punctuation">.</span><span class="token function">isWellFormed</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: false</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str2<span class="token punctuation">.</span><span class="token function">isWellFormed</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: true</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_10-5-2-towellformed" tabindex="-1"><a class="header-anchor" href="#_10-5-2-towellformed"><span>10.5.2 toWellFormed()</span></a></h3>
<p>返回一个字符串，其中所有单独代理项都被替换为Unicode替换字符U+FFFD。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> str <span class="token operator">=</span> <span class="token string">"ab\uD800c"</span><span class="token punctuation">;</span> <span class="token comment">// 不完整的高代理项后跟字符</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> wellFormedStr <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">toWellFormed</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>wellFormedStr<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: "ab\uFFFDc"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_10-6-atomics-waitasync-静态方法" tabindex="-1"><a class="header-anchor" href="#_10-6-atomics-waitasync-静态方法"><span>10.6 Atomics.waitAsync() 静态方法</span></a></h2>
<p>Atomics.waitAsync()：</p>
<ul>
<li>异步等待共享内存的特定位置并返回一个Promise。</li>
<li>与Atomics.wait()不同，waitAsync是非阻塞的且可用于主线程。</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> sharedBuffer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SharedArrayBuffer</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> sharedArray <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Int32Array</span><span class="token punctuation">(</span>sharedBuffer<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">Atomics<span class="token punctuation">.</span><span class="token function">waitAsync</span><span class="token punctuation">(</span>sharedArray<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Woken up!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// 在另一个线程中设置值以唤醒等待者</span></span>
<span class="line">sharedArray<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line">Atomics<span class="token punctuation">.</span><span class="token function">notify</span><span class="token punctuation">(</span>sharedArray<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


