<template><div><h1 id="十二-过渡" tabindex="-1"><a class="header-anchor" href="#十二-过渡"><span>十二. 过渡</span></a></h1>
<p>过渡可以在不使用 Flash 动画，不使用 JavaScript 的情况下，让元素从一种样式，平滑过渡为另一 种样式。</p>
<h2 id="_12-1-transition-property" tabindex="-1"><a class="header-anchor" href="#_12-1-transition-property"><span>12.1 transition-property</span></a></h2>
<p><strong>作用</strong>：</p>
<p>定义哪个属性需要过渡，只有在该属性中定义的属性（比如宽、高、颜色等）才会以有过渡 效果。</p>
<p><strong>常用值</strong>：</p>
<ol>
<li>none ：不过渡任何属性。</li>
<li>all ：过渡所有能过渡的属性。</li>
<li>具体某个属性名 ，例如： width 、 heigth ，若有多个以逗号分隔。</li>
</ol>
<p><strong>注意</strong>：</p>
<blockquote>
<ul>
<li>不是所有的属性都能过渡，值为数字，或者值能转为数字的属性，都支持过渡，否则不支持 过渡。</li>
<li>常见的支持过渡的属性有：颜色、长度值、百分比、 z-index 、 opacity 、 2D 变换属 性、 3D 变换属性、阴影。</li>
</ul>
</blockquote>
<h2 id="_12-2-transition-duration" tabindex="-1"><a class="header-anchor" href="#_12-2-transition-duration"><span>12.2 transition-duration</span></a></h2>
<p><strong>作用</strong>：</p>
<p>设置过渡的持续时间，即：一个状态过渡到另外一个状态耗时多久。</p>
<p><strong>常用值</strong>：</p>
<ol>
<li>0 ：没有任何过渡时间 —— 默认值。</li>
<li>s 或 ms ：秒或毫秒。</li>
<li>列表 ：
<ul>
<li>如果想让所有属性都持续一个时间，那就写一个值。</li>
<li>如果想让每个属性持续不同的时间那就写一个时间的列表。</li>
</ul>
</li>
</ol>
<h2 id="_12-3-transition-delay" tabindex="-1"><a class="header-anchor" href="#_12-3-transition-delay"><span>12.3 transition-delay</span></a></h2>
<p><strong>作用</strong>：</p>
<p>指定开始过渡的延迟时间，单位： s 或 ms</p>
<h2 id="_12-4-transition-timing-function" tabindex="-1"><a class="header-anchor" href="#_12-4-transition-timing-function"><span>12.4 transition-timing-function</span></a></h2>
<p><strong>作用</strong>：</p>
<p>设置过渡的类型</p>
<p><strong>常用值</strong>：</p>
<ol>
<li>ease ： 平滑过渡 —— 默认值</li>
<li>linear ： 线性过渡</li>
<li>ease-in ： 慢 → 快</li>
<li>ease-out ： 快 → 慢</li>
<li>ease-in-out ： 慢 → 快 → 慢</li>
<li>step-start ： 等同于 steps(1, start)</li>
<li>step-end ： 等同于 steps(1, end)</li>
<li>steps( integer,?) ： 接受两个参数的步进函数。
<ul>
<li>第一个参数必须为正整数，指定函数的 步数。</li>
<li>第二个参数取值可以是 start 或 end ，指定每一步的值发生变化的时间点。第二个 参数默认值为 end 。</li>
</ul>
</li>
<li>cubic-bezie ( number, number, number, number)： 特定的贝塞尔曲线类型。
<ul>
<li>在线制作贝赛尔曲线：https://cubic-bezier.com</li>
</ul>
</li>
</ol>
<h2 id="_12-5-transition-复合属性" tabindex="-1"><a class="header-anchor" href="#_12-5-transition-复合属性"><span>12.5 transition 复合属性</span></a></h2>
<p>如果设置了一个时间，表示 duration ；如果设置了两个时间，第一是 duration ，第二个是 delay ；其他值没有顺序要求。
transition:1s 1s linear all;</p>
</div></template>


