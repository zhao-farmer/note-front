<template><div><h1 id="十三-动画" tabindex="-1"><a class="header-anchor" href="#十三-动画"><span>十三. 动画</span></a></h1>
<h2 id="_13-1-什么是帧" tabindex="-1"><a class="header-anchor" href="#_13-1-什么是帧"><span>13.1 什么是帧</span></a></h2>
<p>一段动画，就是一段时间内连续播放 n 个画面。每一张画面，我们管它叫做“帧”。一定时间内连续 快速播放若干个帧，就成了人眼中所看到的动画。同样时间内，播放的帧数越多，画面看起来越流 畅。</p>
<h2 id="_13-2-什么是关键帧" tabindex="-1"><a class="header-anchor" href="#_13-2-什么是关键帧"><span>13.2 什么是关键帧</span></a></h2>
<p>关键帧指的是，在构成一段动画的若干帧中，起到决定性作用的 2-3 帧。</p>
<h2 id="_13-3-动画的基本使用" tabindex="-1"><a class="header-anchor" href="#_13-3-动画的基本使用"><span>13.3 动画的基本使用</span></a></h2>
<ul>
<li>第一步：定义关键帧（定义动画）</li>
</ul>
<ol>
<li>简单方式定义：</li>
</ol>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token comment">/*写法一*/</span></span>
<span class="line"><span class="token atrule"><span class="token rule">@keyframes</span> 动画名</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token selector">from</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token comment">/*property1:value1*/</span></span>
<span class="line">            <span class="token comment">/*property2:value2*/</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token selector">to</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token comment">/*property1:value1*/</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>完整方式定义：</li>
</ol>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token atrule"><span class="token rule">@keyframes</span> 动画名</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token selector">0%</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">/*property1:value1*/</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token selector">20%</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">/*property1:value1*/</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token selector">40%</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">/*property1:value1*/</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token selector">60%</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">/*property1:value1*/</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token selector">80%</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">/*property1:value1*/</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token selector">100%</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">/*property1:value1*/</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>第二步：给元素应用动画，用到的属性如下：</li>
</ul>
<ol>
<li>animation-name ：给元素指定具体的动画（具体的关键帧）</li>
<li>animation-duration ：设置动画所需时间</li>
<li>animation-delay ：设置动画延迟</li>
</ol>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token selector">.box</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">/* 指定动画 */</span></span>
<span class="line">    <span class="token property">animation-name</span><span class="token punctuation">:</span> testKey<span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">/* 设置动画所需时间 */</span></span>
<span class="line">    <span class="token property">animation-duration</span><span class="token punctuation">:</span> 5s<span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">/* 设置动画延迟 */</span></span>
<span class="line">    <span class="token property">animation-delay</span><span class="token punctuation">:</span> 0.5s<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_13-4-动画的其他属性" tabindex="-1"><a class="header-anchor" href="#_13-4-动画的其他属性"><span>13.4 动画的其他属性</span></a></h2>
<ul>
<li>animation-timing-function ，设置动画的类型，常用值如下：
<ol>
<li>ease ： 平滑动画 —— 默认值</li>
<li>linear ： 线性过渡</li>
<li>ease-in ： 慢 → 快</li>
<li>ease-out ： 快 → 慢</li>
<li>ease-in-out ： 慢 → 快 → 慢</li>
<li>step-start ： 等同于 steps(1, start)</li>
<li>step-end ： 等同于 steps(1, end)</li>
<li>steps( integer,?) ： 接受两个参数的步进函数。第一个参数必须为正整数，指定 函数的步数。第二个参数取值可以是 start 或 end ，指定每一步的值发生变化的时间 点。第二个参数默认值为 end 。</li>
<li>cubic-bezie ( number, number, number, number)： 特定的贝塞尔曲线类型。</li>
</ol>
</li>
<li>animation-iteration-count ，指定动画的播放次数，常用值如下：
<ol>
<li>number ：动画循环次数</li>
<li>infinite ： 无限循环</li>
</ol>
</li>
<li>animation-direction ，指定动画方向，常用值如下：
<ol>
<li>normal ： 正常方向 (默认)</li>
<li>reverse ： 反方向运行</li>
<li>alternate ： 动画先正常运行再反方向运行，并持续交替运行</li>
<li>alternate-reverse ： 动画先反运行再正方向运行，并持续交替运行</li>
</ol>
</li>
<li>animation-fill-mode ，设置动画之外的状态
<ol>
<li>forwards ： 设置对象状态为动画结束时的状态</li>
<li>backwards ： 设置对象状态为动画开始时的状态</li>
</ol>
</li>
<li>animation-play-state ，设置动画的播放状态，常用值如下：
<ol>
<li>running ： 运动 (默认)</li>
<li>paused ： 暂停</li>
</ol>
</li>
</ul>
<h2 id="_13-5-动画复合属性" tabindex="-1"><a class="header-anchor" href="#_13-5-动画复合属性"><span>13.5 动画复合属性</span></a></h2>
<p>只设置一个时间表示 duration ，设置两个时间分别是： duration 和 delay ，其他属性没有数量和 顺序要求。</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">animation</span><span class="token punctuation">:</span> atguigu 3s 0.5s linear 2 alternate-reverse forwards<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_13-6-过渡于动画的区别" tabindex="-1"><a class="header-anchor" href="#_13-6-过渡于动画的区别"><span>13.6 过渡于动画的区别</span></a></h2>
<ol>
<li>动画不需要任何触发条件，过渡触发条件（如覆盖，点击）</li>
<li>动画可以精细的操作每一帧，过渡只有开始于结束中间帧是不会发生变化的</li>
</ol>
</div></template>


