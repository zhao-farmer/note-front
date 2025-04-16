<template><div><h1 id="三、css3-基本语法" tabindex="-1"><a class="header-anchor" href="#三、css3-基本语法"><span>三、CSS3 基本语法</span></a></h1>
<h2 id="_3-1-css3-新增长度单位" tabindex="-1"><a class="header-anchor" href="#_3-1-css3-新增长度单位"><span>3.1 CSS3 新增长度单位</span></a></h2>
<ul>
<li>rem 根元素字体大小的倍数，只与根元素字体大小有关。</li>
<li>vw 视口宽度的百分之多少 10vw 就是视口宽度的 10% 。</li>
<li>vh 视口高度的百分之多少 10vh 就是视口高度的 10% 。</li>
<li>vmax 视口宽高中大的那个的百分之多少。（了解即可）</li>
<li>vmin 视口宽高中小的那个的百分之多少。（了解即可）</li>
</ul>
<h2 id="_3-2-css3-新增颜色设置方式" tabindex="-1"><a class="header-anchor" href="#_3-2-css3-新增颜色设置方式"><span>3.2 CSS3 新增颜色设置方式</span></a></h2>
<blockquote>
<p>CSS3 新增了三种颜色设置方式，分别是： rgba 、 hsl 、 hsla。</p>
</blockquote>
<h3 id="_3-2-1-表示方式一-颜色名" tabindex="-1"><a class="header-anchor" href="#_3-2-1-表示方式一-颜色名"><span>3.2.1 表示方式一：颜色名</span></a></h3>
<p>编写方式：直接使用颜色对应的英文单词，编写比较简单，例如：</p>
<ol>
<li>红色：red</li>
<li>绿色：green</li>
<li>蓝色：blue</li>
<li>紫色：purple</li>
<li>橙色：orange</li>
<li>灰色：gray</li>
<li>......</li>
</ol>
<blockquote>
<ol>
<li>颜色名这种方式，表达的颜色比较单一，所以用的并不多。</li>
<li>具体颜色名参考 <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/named-color" target="_blank" rel="noopener noreferrer">MDN 官方文档</a>：</li>
</ol>
</blockquote>
<h3 id="_3-2-3-表示方式三-hex-或-hexa" tabindex="-1"><a class="header-anchor" href="#_3-2-3-表示方式三-hex-或-hexa"><span>3.2.3 表示方式三：HEX 或 HEXA</span></a></h3>
<p>HEX 的原理同与 rgb 一样，依然是通过：红、绿、蓝色 进行组合，只不过要用 6位（分成3组） 来 表达，</p>
<p><strong>格式为</strong>：# rrggbb</p>
<p>每一位数字的取值范围是： 0 ~ f ，即：（ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, a, b, c, d, e, f ）
所以每一种光的最小值是： 00 ，最大值是： ff</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">color</span><span class="token punctuation">:</span> #ff0000<span class="token punctuation">;</span><span class="token comment">/* 红色 */</span></span>
<span class="line">    <span class="token property">color</span><span class="token punctuation">:</span> #00ff00<span class="token punctuation">;</span><span class="token comment">/* 绿色 */</span></span>
<span class="line">    <span class="token property">color</span><span class="token punctuation">:</span> #0000ff<span class="token punctuation">;</span><span class="token comment">/* 蓝色 */</span></span>
<span class="line">    <span class="token property">color</span><span class="token punctuation">:</span> #000000<span class="token punctuation">;</span><span class="token comment">/* 黑色 */</span></span>
<span class="line">    <span class="token property">color</span><span class="token punctuation">:</span> #ffffff<span class="token punctuation">;</span><span class="token comment">/* 白色 */</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">/* 如果每种颜色的两位都是相同的，就可以简写*/</span></span>
<span class="line">    <span class="token property">color</span><span class="token punctuation">:</span> #ff9988<span class="token punctuation">;</span><span class="token comment">/* 可简为：#f98 */</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">/* 但要注意前三位简写了，那么透明度就也要简写 */</span></span>
<span class="line">    <span class="token property">color</span><span class="token punctuation">:</span> #ff998866<span class="token punctuation">;</span><span class="token comment">/* 可简为：#f986 */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意点</strong>：</p>
<blockquote>
<p>IE 浏览器不支持 HEXA ，但支持 HEX 。</p>
</blockquote>
<h3 id="_3-2-4-表示方式四-hsl-或-hsla" tabindex="-1"><a class="header-anchor" href="#_3-2-4-表示方式四-hsl-或-hsla"><span>3.2.4 表示方式四：HSL 或 HSLA</span></a></h3>
<p>HSL 是通过：色相、饱和度、亮度，来表示一个颜色的，格式为： hsl(色相,饱和度,亮度)</p>
<ul>
<li>色相：取值范围是 0~360 度，具体度数对应的颜色如下图：
<img src="/style/htmlcss/css3/001.jpg" alt=""></li>
<li>饱和度：取值范围是 0%~100% 。（向色相中对应颜色中添加灰色， 0% 全灰， 100% 没有 灰）</li>
<li>亮度：取值范围是 0%~100% 。（ 0% 亮度没了，所以就是黑色。 100% 亮度太强，所以就是 白色了）</li>
<li>HSLA 其实就是在 HSL 的基础上，添加了透明度。</li>
</ul>
<h2 id="_3-3-css3-新增选择器" tabindex="-1"><a class="header-anchor" href="#_3-3-css3-新增选择器"><span>3.3 CSS3 新增选择器</span></a></h2>
<blockquote>
<p>CSS3 新增的选择器有：动态伪类、目标伪类、语言伪类、 UI 伪类、结构伪类、否定伪类、伪元素；</p>
</blockquote>
<h2 id="_3-3-1-伪类选择器概念" tabindex="-1"><a class="header-anchor" href="#_3-3-1-伪类选择器概念"><span>3.3.1 伪类选择器概念</span></a></h2>
<p><strong>作用</strong>：选中特殊状态的元素。</p>
<ul>
<li>如何理解“伪” ? — 虚假的，不是真的。</li>
<li>如何理解“伪类”？ — 像类( class )，但不是类，是元素的一种特殊状态。</li>
</ul>
<h2 id="_3-3-2-动态伪类" tabindex="-1"><a class="header-anchor" href="#_3-3-2-动态伪类"><span>3.3.2 动态伪类</span></a></h2>
<ol>
<li>:link 超链接未被访问的状态。</li>
<li>:visited 超链接访问过的状态。</li>
<li>:hover 鼠标悬停在元素上的状态。</li>
<li>:active 元素激活的状态。
<ul>
<li>什么是激活？—— 按下鼠标不松开。</li>
<li>注意点：遵循 LVHA 的顺序，即： link 、 visited 、 hover 、 active 。</li>
</ul>
</li>
<li>:focus 获取焦点的元素。
<ul>
<li>表单类元素才能使用 :focus 伪类。</li>
<li>当用户：点击元素、触摸元素、或通过键盘的 “ tab ” 键等方式，选择元素时，就是获 得焦点。</li>
</ul>
</li>
</ol>
<h2 id="_3-3-3-结构伪类" tabindex="-1"><a class="header-anchor" href="#_3-3-3-结构伪类"><span>3.3.3 结构伪类</span></a></h2>
<ul>
<li>常用：
<ol>
<li>:first-child 所有兄弟元素中的第一个。</li>
<li>:last-child 所有兄弟元素中的最后一个。</li>
<li>:nth-child(n) 所有兄弟元素中的第 n 个。</li>
<li>:first-of-type 所有同类型兄弟元素中的第一个。</li>
<li>:last-of-type 所有同类型兄弟元素中的最后一个。</li>
<li>:nth-of-type(n) 所有同类型兄弟元素中的 第n个 。
<ul>
<li>关于 n 的值：
<ol>
<li>0 或 不写 ：什么都选不中 —— 几乎不用。</li>
<li>n ：选中所有子元素 —— 几乎不用。</li>
<li>1~正无穷的整数 ：选中对应序号的子元素。</li>
<li>2n 或 even ：选中序号为偶数的子元素。</li>
<li>2n+1 或 odd ：选中序号为奇数的子元素。</li>
<li>-n+3 ：选中的是前 3 个。</li>
</ol>
</li>
</ul>
</li>
</ol>
</li>
<li>了解即可：
<ol>
<li>:nth-last-child(n) 所有兄弟元素中的倒数第 n 个。</li>
<li>:nth-last-of-type(n) 所有同类型兄弟元素中的 倒数第n个 。</li>
<li>:only-child 选择没有兄弟的元素（独生子女）。</li>
<li>:only-of-type 选择没有同类型兄弟的元素。</li>
<li>:root 根元素。</li>
<li>:empty 内容为空元素（空格也算内容）。</li>
</ol>
</li>
</ul>
<h2 id="_3-3-4否定伪类" tabindex="-1"><a class="header-anchor" href="#_3-3-4否定伪类"><span>3.3.4否定伪类</span></a></h2>
<p>:not(选择器) 排除满足括号中条件的元素。</p>
<h2 id="_3-3-5-ui伪类" tabindex="-1"><a class="header-anchor" href="#_3-3-5-ui伪类"><span>3.3.5 UI伪类</span></a></h2>
<ol>
<li>:checked 被选中的复选框或单选按钮。</li>
<li>:enable 可用的表单元素（没有 disabled 属性）。</li>
<li>:disabled 不可用的表单元素（有 disabled 属性）。</li>
</ol>
<h2 id="_3-3-6-目标伪类-了解" tabindex="-1"><a class="header-anchor" href="#_3-3-6-目标伪类-了解"><span>3.3.6 目标伪类（了解）</span></a></h2>
<p>:target 选中锚点指向的元素。</p>
<h2 id="_3-3-7-语言伪类-了解" tabindex="-1"><a class="header-anchor" href="#_3-3-7-语言伪类-了解"><span>3.3.7 语言伪类（了解）</span></a></h2>
<p>:lang() 根据指定的语言选择元素（本质是看 lang 属性的值）。</p>
<h2 id="_3-3-8-伪元素选择器" tabindex="-1"><a class="header-anchor" href="#_3-3-8-伪元素选择器"><span>3.3.8 伪元素选择器</span></a></h2>
<ul>
<li>作用：选中元素中的一些特殊位置。</li>
<li>常用伪元素：
<ul>
<li>::first-letter 选中元素中的第一个文字。</li>
<li>::first-line 选中元素中的第一行文字。</li>
<li>::selection 选中被鼠标选中的内容。</li>
<li>::placeholder 选中输入框的提示文字。</li>
<li>::before 在元素最开始的位置，创建一个子元素（必须用 content 属性指定内容）。</li>
<li>::after 在元素最后的位置，创建一个子元素（必须用 content 属性指定内容）。</li>
</ul>
</li>
</ul>
</div></template>


