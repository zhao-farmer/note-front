<template><div><h1 id="requestanimationframe" tabindex="-1"><a class="header-anchor" href="#requestanimationframe"><span>requestAnimationFrame</span></a></h1>
<h2 id="认识-requestanimationframe" tabindex="-1"><a class="header-anchor" href="#认识-requestanimationframe"><span>认识 requestAnimationFrame</span></a></h2>
<p>它是一个浏览器的宏任务</p>
<p>requestAnimationFrame的用法与settimeout很相似，只是不需要设置时间间隔而已。requestAnimationFrame使用一个回调函数作为参数，这个回调函数会在浏览器重绘之前调用。它返回一个整数，表示定时器的编号，这个值可以传递给cancelAnimationFrame用于取消这个函数的执行</p>
<h3 id="特点" tabindex="-1"><a class="header-anchor" href="#特点"><span>特点</span></a></h3>
<ol>
<li>
<p>requestAnimationFrame会把每一帧中的所有DOM操作集中起来，在一次重绘或回流中就完成，并且重绘或回流的时间间隔紧紧跟随浏览器的刷新频率，如果系统绘制率是 60Hz，那么回调函数就会16.7ms再 被执行一次，如果绘制频率是75Hz，那么这个间隔时间就变成了 1000/75=13.3ms。换句话说就是，requestAnimationFrame的执行步伐跟着系统的绘制频率走。它能保证回调函数在屏幕每一次的绘制间隔中只被执行一次，这样就不会引起丢帧现象，也不会导致动画出现卡顿的问题。</p>
</li>
<li>
<p>在隐藏或不可见的元素中，requestAnimationFrame将不会进行重绘或回流，这当然就意味着更少的CPU、GPU和内存使用量</p>
</li>
<li>
<p>requestAnimationFrame是由浏览器专门为动画提供的API，在运行时浏览器会自动优化方法的调用，并且如果页面不是激活状态下的话，动画会自动暂停，有效节省了CPU开销</p>
</li>
</ol>
<h3 id="跟settimeout和setinterva的对比" tabindex="-1"><a class="header-anchor" href="#跟settimeout和setinterva的对比"><span>跟setTimeout和setInterva的对比</span></a></h3>
<p>setTimeout和setInterval的问题是，它们都不精确。它们的内在运行机制决定了时间间隔，参数实际上只是指定了把动画代码添加到浏览器UI线程队列中以等待执行的时间。如果队列前面已经加入了其他任务，那动画代码就要等前面的任务完成后再执行</p>
<p>requestAnimationFrame采用系统时间间隔，保持最佳绘制效率，不会因为间隔时间过短，造成过度绘制，增加开销；也不会因为间隔时间太长，使用动画卡顿不流畅，让各种网页动画效果能够有一个统一的刷新机制，从而节省系统资源，提高系统性能，改善视觉效果</p>
<p>IE9-浏览器不支持该方法，可以使用setTimeout来兼容</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">//简单兼容</span></span>
<span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>window<span class="token punctuation">.</span>requestAnimationFrame<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function-variable function">requestAnimationFrame</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">setTimeout</span><span class="token punctuation">(</span>fn<span class="token punctuation">,</span> <span class="token number">17</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span>    </span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//严格兼容 ， 因为setTimeout内部运行也需要时间，以及需要给回调的第一个参数返回时间戳</span></span>
<span class="line"><span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>window<span class="token punctuation">.</span>requestAnimationFrame<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">var</span> lastTime <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">    window<span class="token punctuation">.</span><span class="token function-variable function">requestAnimationFrame</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">callback</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">var</span> currTime <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">var</span> timeToCall <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">16.7</span><span class="token operator">-</span><span class="token punctuation">(</span>currTime <span class="token operator">-</span> lastTime<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">var</span> id  <span class="token operator">=</span> window<span class="token punctuation">.</span><span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token function">callback</span><span class="token punctuation">(</span>currTime <span class="token operator">+</span> timeToCall<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span>timeToCall<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        lastTime <span class="token operator">=</span> currTime <span class="token operator">+</span> timeToCall<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">return</span> id<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="应用场景" tabindex="-1"><a class="header-anchor" href="#应用场景"><span>应用场景</span></a></h2>
<h3 id="_1、监听-scroll-函数" tabindex="-1"><a class="header-anchor" href="#_1、监听-scroll-函数"><span>1、监听 scroll 函数</span></a></h3>
<p>页面滚动事件（scroll）的监听函数，就很适合用这个 api，推迟到下一次重新渲染。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token function">$</span><span class="token punctuation">(</span>window<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'scroll'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  window<span class="token punctuation">.</span><span class="token function">requestAnimationFrame</span><span class="token punctuation">(</span>scrollHandler<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>平滑滚动到页面顶部</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> <span class="token function-variable function">scrollToTop</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span> </span>
<span class="line">  <span class="token keyword">const</span> c <span class="token operator">=</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>scrollTop <span class="token operator">||</span> document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>scrollTop </span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>c <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  </span>
<span class="line">    window<span class="token punctuation">.</span><span class="token function">requestAnimationFrame</span><span class="token punctuation">(</span>scrollToTop<span class="token punctuation">)</span> </span>
<span class="line">    window<span class="token punctuation">.</span><span class="token function">scrollTo</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> c <span class="token operator">-</span> c <span class="token operator">/</span> <span class="token number">8</span><span class="token punctuation">)</span> </span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token function">scrollToTop</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2、大量数据渲染" tabindex="-1"><a class="header-anchor" href="#_2、大量数据渲染"><span>2、大量数据渲染</span></a></h3>
<p>比如对十万条数据进行渲染，主要由以下几种方法：</p>
<ol>
<li>使用定时器</li>
</ol>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">//需要插入的容器</span></span>
<span class="line"><span class="token keyword">let</span> ul <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'container'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// 插入十万条数据</span></span>
<span class="line"><span class="token keyword">let</span> total <span class="token operator">=</span> <span class="token number">100000</span></span>
<span class="line"><span class="token comment">// 一次插入 20 条</span></span>
<span class="line"><span class="token keyword">let</span> once <span class="token operator">=</span> <span class="token number">20</span></span>
<span class="line"><span class="token comment">//总页数</span></span>
<span class="line"><span class="token keyword">let</span> page <span class="token operator">=</span> total <span class="token operator">/</span> once</span>
<span class="line"><span class="token comment">//每条记录的索引</span></span>
<span class="line"><span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token number">0</span></span>
<span class="line"><span class="token comment">//循环加载数据</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">loop</span><span class="token punctuation">(</span><span class="token parameter">curTotal<span class="token punctuation">,</span> curIndex</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> </span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>curTotal <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  </span>
<span class="line">    <span class="token keyword">return</span> <span class="token boolean">false</span> </span>
<span class="line">  <span class="token punctuation">}</span>  </span>
<span class="line">  <span class="token comment">//每页多少条</span></span>
<span class="line">  <span class="token keyword">let</span> pageCount <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>curTotal<span class="token punctuation">,</span> once<span class="token punctuation">)</span> </span>
<span class="line">  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>  </span>
<span class="line">    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> pageCount<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> </span>
<span class="line">      <span class="token keyword">let</span> li <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'li'</span><span class="token punctuation">)</span>    </span>
<span class="line">      li<span class="token punctuation">.</span>innerText <span class="token operator">=</span> curIndex <span class="token operator">+</span> i <span class="token operator">+</span> <span class="token string">' : '</span> <span class="token operator">+</span> <span class="token operator">~</span><span class="token operator">~</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> total<span class="token punctuation">)</span>    </span>
<span class="line">      ul<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>li<span class="token punctuation">)</span>  </span>
<span class="line">    <span class="token punctuation">}</span>  </span>
<span class="line">    <span class="token function">loop</span><span class="token punctuation">(</span>curTotal <span class="token operator">-</span> pageCount<span class="token punctuation">,</span> curIndex <span class="token operator">+</span> pageCount<span class="token punctuation">)</span> </span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token function">loop</span><span class="token punctuation">(</span>total<span class="token punctuation">,</span> index<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>使用 requestAnimationFrame</li>
</ol>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">//需要插入的容器</span></span>
<span class="line"><span class="token keyword">let</span> ul <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'container'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// 插入十万条数据</span></span>
<span class="line"><span class="token keyword">let</span> total <span class="token operator">=</span> <span class="token number">100000</span></span>
<span class="line"><span class="token comment">// 一次插入 20 条</span></span>
<span class="line"><span class="token keyword">let</span> once <span class="token operator">=</span> <span class="token number">20</span></span>
<span class="line"><span class="token comment">//总页数</span></span>
<span class="line"><span class="token keyword">let</span> page <span class="token operator">=</span> total <span class="token operator">/</span> once</span>
<span class="line"><span class="token comment">//每条记录的索引</span></span>
<span class="line"><span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token number">0</span></span>
<span class="line"><span class="token comment">//循环加载数据</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">loop</span><span class="token punctuation">(</span><span class="token parameter">curTotal<span class="token punctuation">,</span> curIndex</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>curTotal <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token boolean">false</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token comment">//每页多少条</span></span>
<span class="line">  <span class="token keyword">let</span> pageCount <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>curTotal<span class="token punctuation">,</span> once<span class="token punctuation">)</span></span>
<span class="line">  window<span class="token punctuation">.</span><span class="token function">requestAnimationFrame</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> pageCount<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">let</span> li <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'li'</span><span class="token punctuation">)</span></span>
<span class="line">      li<span class="token punctuation">.</span>innerText <span class="token operator">=</span> curIndex <span class="token operator">+</span> i <span class="token operator">+</span> <span class="token string">' : '</span> <span class="token operator">+</span> <span class="token operator">~</span><span class="token operator">~</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> total<span class="token punctuation">)</span></span>
<span class="line">      ul<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>li<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token function">loop</span><span class="token punctuation">(</span>curTotal <span class="token operator">-</span> pageCount<span class="token punctuation">,</span> curIndex <span class="token operator">+</span> pageCount<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token function">loop</span><span class="token punctuation">(</span>total<span class="token punctuation">,</span> index<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3、监控卡顿方法" tabindex="-1"><a class="header-anchor" href="#_3、监控卡顿方法"><span>3、监控卡顿方法</span></a></h3>
<p>每秒中计算一次网页的 FPS，获得一列数据，然后分析。通俗地解释就是，通过 requestAnimationFrame API 来定时执行一些 JS 代码，如果浏览器卡顿，无法很好地保证渲染的频率，1s 中 frame 无法达到 60 帧，即可间接地反映浏览器的渲染帧率。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> lastTime <span class="token operator">=</span> performance<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">var</span> frame <span class="token operator">=</span> <span class="token number">0</span></span>
<span class="line"><span class="token keyword">var</span> lastFameTime <span class="token operator">=</span> performance<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">var</span> <span class="token function-variable function">loop</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">time</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">var</span> now <span class="token operator">=</span> performance<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token keyword">var</span> fs <span class="token operator">=</span> now <span class="token operator">-</span> lastFameTime</span>
<span class="line">  lastFameTime <span class="token operator">=</span> now</span>
<span class="line">  <span class="token keyword">var</span> fps <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">round</span><span class="token punctuation">(</span><span class="token number">1000</span> <span class="token operator">/</span> fs<span class="token punctuation">)</span></span>
<span class="line">  frame<span class="token operator">++</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>now <span class="token operator">></span> <span class="token number">1000</span> <span class="token operator">+</span> lastTime<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">var</span> fps <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">round</span><span class="token punctuation">(</span><span class="token punctuation">(</span>frame <span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token punctuation">(</span>now <span class="token operator">-</span> lastTime<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">    frame <span class="token operator">=</span> <span class="token number">0</span></span>
<span class="line">    lastTime <span class="token operator">=</span> now</span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  window<span class="token punctuation">.</span><span class="token function">requestAnimationFrame</span><span class="token punctuation">(</span>loop<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


