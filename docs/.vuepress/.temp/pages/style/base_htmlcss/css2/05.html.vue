<template><div><h1 id="五、css盒子模型" tabindex="-1"><a class="header-anchor" href="#五、css盒子模型"><span>五、CSS盒子模型</span></a></h1>
<h2 id="_5-1-css-长度单位" tabindex="-1"><a class="header-anchor" href="#_5-1-css-长度单位"><span>5.1. CSS 长度单位</span></a></h2>
<ol>
<li>px ：像素。</li>
<li>em ：相对元素 font-size 的倍数。</li>
<li>rem ：相对根字体大小，html标签就是根。</li>
<li>% ：相对父元素计算。</li>
</ol>
<h2 id="_5-2-元素的显示模式" tabindex="-1"><a class="header-anchor" href="#_5-2-元素的显示模式"><span>5.2 元素的显示模式</span></a></h2>
<ul>
<li>
<p>块元素（block）
又称：块级元素
特点：</p>
<ol>
<li>在页面中独占一行，不会与任何元素共用一行，是从上到下排列的。</li>
<li>默认宽度：撑满父元素。</li>
<li>默认高度：由内容撑开。</li>
<li>可以通过 CSS 设置宽高。</li>
</ol>
</li>
<li>
<p>行内元素（inline）
又称：内联元素
<strong>特点</strong>:</p>
<ol>
<li>在页面中不独占一行，一行中不能容纳下的行内元素，会在下一行继续从左到右排 列。</li>
<li>默认宽度：由内容撑开。 /* 自定义鼠标光标 */ cursor: url(&quot;./arrow.png&quot;),pointer;</li>
<li>默认高度：由内容撑开。</li>
<li>无法通过 CSS 设置宽高。</li>
</ol>
</li>
<li>
<p>行内块元素（inline-block）
又称：内联块元素
<strong>特点</strong>：</p>
<ol>
<li>在页面中不独占一行，一行中不能容纳下的行内元素，会在下一行继续从左到右排 列。</li>
<li>默认宽度：由内容撑开。</li>
<li>默认高度：由内容撑开。</li>
<li>可以通过 CSS 设置宽高。</li>
</ol>
</li>
</ul>
<p><strong>注意</strong>：</p>
<p style='color:red'>元素早期只分为：行内元素、块级元素，区分条件也只有一条：`是否独占一行` 如果按照这种 分类方式，行内块元素应该算作行内元素。</p>
<h2 id="_5-3-总结各元素的显示模式" tabindex="-1"><a class="header-anchor" href="#_5-3-总结各元素的显示模式"><span>5.3 总结各元素的显示模式</span></a></h2>
<ul>
<li>块元素（block）
<ol>
<li>主体结构标签： <code v-pre>&lt;html&gt;</code> 、 <code v-pre>&lt;body&gt;</code></li>
<li>排版标签： <code v-pre>&lt;h1&gt; ~ &lt;h6&gt; </code>、<code v-pre> &lt;hr&gt;</code> 、 <code v-pre>&lt;p&gt; </code>、 <code v-pre>&lt;pre&gt;</code> 、 <code v-pre>&lt;div&gt;</code></li>
<li>列表标签： <code v-pre>&lt;ul&gt;</code> 、 <code v-pre>&lt;ol&gt;</code> 、 <code v-pre>&lt;li&gt;</code> 、 <code v-pre>&lt;dl&gt;</code> 、 <code v-pre>&lt;dt&gt;</code> 、 <code v-pre>&lt;dd&gt;</code></li>
<li>表格相关标签： <code v-pre>&lt;table&gt;</code> 、 <code v-pre>&lt;tbody&gt;</code> 、 <code v-pre>&lt;thead&gt;</code> 、 <code v-pre>&lt;tfoot&gt; </code>、 <code v-pre>&lt;tr&gt;</code> 、<code v-pre>&lt;caption&gt;</code></li>
<li>表单相关标签：<code v-pre>&lt;form&gt;</code> 与 <code v-pre>&lt;option&gt;</code></li>
</ol>
</li>
<li>行内元素（inline）
<ol>
<li>文本标签： <code v-pre>&lt;br&gt;</code> 、 <code v-pre>&lt;em&gt;</code> 、 <code v-pre>&lt;strong&gt;</code> 、 <code v-pre>&lt;sup&gt;</code> 、 <code v-pre>&lt;sub&gt;</code> 、 <code v-pre>&lt;del&gt;</code> 、 <code v-pre>&lt;ins&gt;</code></li>
<li><code v-pre>&lt;a&gt;</code> 与 <code v-pre>&lt;label&gt;</code></li>
</ol>
</li>
<li>行内块元素（inline-block）
<ol>
<li>图片： <code v-pre>&lt;img&gt;</code></li>
<li>单元格： <code v-pre>&lt;td&gt;</code> 、 <code v-pre>&lt;th&gt;</code></li>
<li>表单控件： <code v-pre>&lt;input&gt;</code> 、<code v-pre>&lt;textarea&gt;</code> 、 <code v-pre>&lt;select&gt;</code> 、 <code v-pre>&lt;button&gt;</code></li>
<li>框架标签： <code v-pre>&lt;iframe&gt;</code></li>
</ol>
</li>
</ul>
<h2 id="_5-4-修改元素的显示模式" tabindex="-1"><a class="header-anchor" href="#_5-4-修改元素的显示模式"><span>5.4 修改元素的显示模式</span></a></h2>
<p>通过 CSS 中的 display 属性可以修改元素的默认显示模式，常用值如下：</p>
<table>
<thead>
<tr>
<th>值</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>none</td>
<td>元素会被隐藏。</td>
</tr>
<tr>
<td>block</td>
<td>元素将作为块级元素显示。</td>
</tr>
<tr>
<td>inline</td>
<td>元素将作为内联元素显示。</td>
</tr>
<tr>
<td>inline-block</td>
<td>元素将作为行内块元素显示。</td>
</tr>
</tbody>
</table>
<h2 id="_5-5-盒子模型的组成" tabindex="-1"><a class="header-anchor" href="#_5-5-盒子模型的组成"><span>5.5 盒子模型的组成</span></a></h2>
<p>CSS 会把所有的 HTML 元素都看成一个盒子，所有的样式也都是基于这个盒子。</p>
<ol>
<li>margin（外边距）： 盒子与外界的距离。</li>
<li>border（边框）： 盒子的边框。</li>
<li>padding（内边距）： 紧贴内容的补白区域。</li>
<li>content（内容）：元素中的文本或后代元素都是它的内容。</li>
</ol>
<p><strong>图示如下</strong>：</p>
<p><img src="/style/htmlcss/css2/1737864760006.jpg" alt=""></p>
<p>盒子的大小 = content + 左右 padding + 左右 border 。</p>
<p><strong>注意</strong>：</p>
<blockquote>
<p>外边距 margin 不会影响盒子的大小，但会影响盒子的位置。</p>
</blockquote>
<h2 id="_5-6-盒子内容区-content" tabindex="-1"><a class="header-anchor" href="#_5-6-盒子内容区-content"><span>5.6 盒子内容区（content）</span></a></h2>
<table>
<thead>
<tr>
<th>值</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>none</td>
<td>元素会被隐藏。</td>
</tr>
<tr>
<td>block</td>
<td>元素将作为块级元素显示。</td>
</tr>
<tr>
<td>inline</td>
<td>元素将作为内联元素显示。</td>
</tr>
<tr>
<td>inline-block</td>
<td>元素将作为行内块元素显示。</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th>CSS属性名</th>
<th>功能</th>
<th>属性值</th>
</tr>
</thead>
<tbody>
<tr>
<td>width</td>
<td>设置内容区域宽度</td>
<td>长度</td>
</tr>
<tr>
<td>max-width</td>
<td>设置内容区域的最大宽度</td>
<td>长度</td>
</tr>
<tr>
<td>min-width</td>
<td>设置内容区域的最小宽度</td>
<td>长度</td>
</tr>
<tr>
<td>height</td>
<td>设置内容区域的高度</td>
<td>长度</td>
</tr>
<tr>
<td>max-height</td>
<td>设置内容区域的最大高度</td>
<td>长度</td>
</tr>
<tr>
<td>min-height</td>
<td>设置内容区域的最小高度</td>
<td>长度</td>
</tr>
</tbody>
</table>
<p><strong>注意</strong>：</p>
<blockquote>
<p>max-width 、 min-width 一般不与 width 一起使用。
max-height 、 min-height 一般不与 height 一起使用。</p>
</blockquote>
<h2 id="_5-7-关于默认宽度" tabindex="-1"><a class="header-anchor" href="#_5-7-关于默认宽度"><span>5.7 关于默认宽度</span></a></h2>
<p>所谓的默认宽度，就是不设置 width 属性时，元素所呈现出来的宽度。</p>
<p><em>总宽度 = 父的 content — 自身的左右 margin 。</em></p>
<p><em>内容区的宽度 = 父的 content — 自身的左右 margin — 自身的左右 border — 自身的左右 padding 。</em></p>
<h2 id="_5-8-盒子内边距-padding" tabindex="-1"><a class="header-anchor" href="#_5-8-盒子内边距-padding"><span>5.8 盒子内边距（padding）</span></a></h2>
<table>
<thead>
<tr>
<th>CSS属性名</th>
<th>功能</th>
<th>属性值</th>
</tr>
</thead>
<tbody>
<tr>
<td>padding-top</td>
<td>上内边距</td>
<td>长度</td>
</tr>
<tr>
<td>padding-right</td>
<td>右内边距</td>
<td>长度</td>
</tr>
<tr>
<td>padding-bottom</td>
<td>下内边距</td>
<td>长度</td>
</tr>
<tr>
<td>padding-left</td>
<td>左内边距</td>
<td>长度</td>
</tr>
<tr>
<td>padding</td>
<td>复合属性</td>
<td>长度，可以设置1~4个值</td>
</tr>
</tbody>
</table>
<p><strong>padding 复合属性的使用规则</strong>：</p>
<ol>
<li>padding: 10px; 四个方向内边距都是 10px 。</li>
<li>padding: 10px 20px; 上 10px ，左右 20px 。（上下、左右）</li>
<li>padding: 10px 20px 30px; 上 10px ，左右 20px ，下 30px 。（上、左右、下）</li>
<li>padding: 10px 20px 30px 40px; 上 10px ，右 20px ，下 30px ，左 40px 。（上、右、 下、左）</li>
</ol>
<p><strong>注意点</strong>：</p>
<blockquote>
<ol>
<li>padding 的值不能为负数。</li>
<li>行内元素 的 左右内边距是没问题的，上下内边距不能完美的设置。</li>
<li>块级元素、行内块元素，四个方向内边距都可以完美设置。</li>
</ol>
</blockquote>
<h2 id="_5-9-盒子边框-border" tabindex="-1"><a class="header-anchor" href="#_5-9-盒子边框-border"><span>5.9 盒子边框（border）</span></a></h2>
<table>
<thead>
<tr>
<th>CSS属性名</th>
<th>功能</th>
<th>属性值</th>
</tr>
</thead>
<tbody>
<tr>
<td>border-style</td>
<td>边框线风格</td>
<td>none ： 默认值 <br> 复合了四个方向的边框风格 <br> <code v-pre>solid</code> ： 实线<br> <code v-pre>dashed </code>： 虚线<br> <code v-pre>dotted</code> ： 点线<br> <code v-pre>double</code> ： 双实线<br>......</td>
</tr>
<tr>
<td>border-width</td>
<td>边框线宽度</td>
<td>长度，默认 3px <br> 复合了四个方向的边框宽度</td>
</tr>
<tr>
<td>border-color</td>
<td>边框线颜色</td>
<td>颜色，默认黑色 <br> 复合了四个方向的边框颜色</td>
</tr>
<tr>
<td>border</td>
<td>复合属性</td>
<td>值没有顺序和数量要求。</td>
</tr>
<tr>
<td>border-left<br> border-left-style <br> border-left-width<br>border-left-color<br> <br>border-right<br>border-right-style<br>border-right-width<br> border-right-color<br><br>border-top<br> border-top-style<br>border-top-width<br> border-top-color<br><br>border-bottom<br>border-bottom-style<br>border-bottom-width<br>border-bottom-color<br></td>
<td>分别设置各个方向的边框</td>
<td>同上</td>
</tr>
</tbody>
</table>
<p>边框相关属性共 20 个。
border-style 、 border-width 、 border-color 其实也是复合属性。</p>
<h2 id="_5-10-盒子外边距-margin" tabindex="-1"><a class="header-anchor" href="#_5-10-盒子外边距-margin"><span>5.10 盒子外边距_margin</span></a></h2>
<table>
<thead>
<tr>
<th>CSS属性名</th>
<th>功能</th>
<th>属性值</th>
</tr>
</thead>
<tbody>
<tr>
<td>margin-left</td>
<td>左外边距</td>
<td>CSS中的长度值</td>
</tr>
<tr>
<td>margin-right</td>
<td>右外边距</td>
<td>CSS中的长度值</td>
</tr>
<tr>
<td>margin-top</td>
<td>上外边距</td>
<td>CSS中的长度值</td>
</tr>
<tr>
<td>margin-bottom</td>
<td>下外边距</td>
<td>CSS中的长度值</td>
</tr>
<tr>
<td>margin</td>
<td>复合属性，可以写1~4个值，规律同padding（顺时针）</td>
<td>CSS中的长度值</td>
</tr>
</tbody>
</table>
<h3 id="_5-10-1-margin-注意事项" tabindex="-1"><a class="header-anchor" href="#_5-10-1-margin-注意事项"><span>5.10.1 margin 注意事项</span></a></h3>
<ol>
<li>子元素的 margin ，是参考父元素的 content 计算的。（因为是父亲的 content 中承装着 子元素）</li>
<li>上 margin 、左 margin ：影响自己的位置；下 margin 、右 margin ：影响后面兄弟元素 的位置。</li>
<li>块级元素、行内块元素，均可以完美地设置四个方向的 margin ；但行内元素，左右 margin 可以完美设置，上下 margin 设置无效。</li>
<li>margin 的值也可以是 auto ，如果给一个块级元素设置左右 margin 都为 auto ，该块级 元素会在父元素中水平居中。</li>
<li>margin 的值可以是负值。</li>
</ol>
<h3 id="_5-10-2-margin-塌陷问题" tabindex="-1"><a class="header-anchor" href="#_5-10-2-margin-塌陷问题"><span>5.10.2 margin 塌陷问题</span></a></h3>
<p><strong>什么是 margin 塌陷？</strong></p>
<blockquote>
<p>第一个子元素的上 margin 会作用在父元素上，最后一个子元素的下 margin 会作用在父元素上。</p>
</blockquote>
<p><strong>如何解决 margin 塌陷？</strong></p>
<blockquote>
<ul>
<li>方案一： 给父元素设置不为 0 的 padding 。</li>
<li>方案二： 给父元素设置宽度不为 0 的 border 。</li>
<li>方案三：给父元素设置 css 样式 overflow:hidden 。</li>
</ul>
</blockquote>
<h3 id="_5-10-3-margin-合并问题" tabindex="-1"><a class="header-anchor" href="#_5-10-3-margin-合并问题"><span>5.10.3 margin 合并问题</span></a></h3>
<p><strong>什么是 margin 合并？</strong></p>
<blockquote>
<p>上面兄弟元素的下外边距和下面兄弟元素的上外边距会合并，取一个最大的值，而不是相加。</p>
</blockquote>
<p><strong>如何解决 margin 塌陷？</strong></p>
<blockquote>
<p>无需解决，布局的时候上下的兄弟元素，只给一个设置上下外边距就可以了。</p>
</blockquote>
<h2 id="_5-11-处理内容溢出" tabindex="-1"><a class="header-anchor" href="#_5-11-处理内容溢出"><span>5.11 处理内容溢出</span></a></h2>
<table>
<thead>
<tr>
<th>CSS属性名</th>
<th>功能</th>
<th>属性值</th>
</tr>
</thead>
<tbody>
<tr>
<td>overflow</td>
<td>溢出内容的处理方式</td>
<td>visible ：显示，默认值<br>hidden ：隐藏<br>scroll ：显示滚动条，不论内容是否溢出 <br>auto ：自动显示滚动条，内容不溢出不显示</td>
</tr>
<tr>
<td>overflow-x</td>
<td>水平方向溢出内容的处理方式</td>
<td>同overflow</td>
</tr>
<tr>
<td>overflow-y</td>
<td>垂直方向溢出内容给的处理方式</td>
<td>同overflow</td>
</tr>
</tbody>
</table>
<p><strong>注意</strong>：</p>
<blockquote>
<ol>
<li>overflow-x 、 overflow-y 不能一个是 hidden ，一个是 visible ，是实验性属性，不 建议使用。</li>
<li>overflow 常用的值是 hidden 和 auto ，除了能处理溢出的显示方式，还可以解决很多 疑难杂症。</li>
</ol>
</blockquote>
<h2 id="_5-12-隐藏元素的方式" tabindex="-1"><a class="header-anchor" href="#_5-12-隐藏元素的方式"><span>5.12 隐藏元素的方式</span></a></h2>
<ul>
<li>方式一：
visibility 属性 visibility 属性默认值是 show ，如果设置为 hidden ，元素会隐藏。
元素看不见了，还占有原来的位置（元素的大小依然保持）。</li>
<li>方式二：
display 属性 设置 display:none ，就可以让元素隐藏。
彻底地隐藏，不但看不见，也不占用任何位置，没有大小宽高。</li>
</ul>
<h2 id="_5-13-样式的继承" tabindex="-1"><a class="header-anchor" href="#_5-13-样式的继承"><span>5.13 样式的继承</span></a></h2>
<p>有些样式会继承，元素如果本身设置了某个样式，就使用本身设置的样式；但如果本身没有设置某个样 式，会从父元素开始一级一级继承（优先继承离得近的祖先元素）。</p>
<ol>
<li>会继承的 css 属性
字体属性、文本属性（除了vertical-align）、文字颜色 等</li>
<li>不会继承的 css 属性
边框、背景、内边距、外边距、宽高、溢出方式 等。</li>
</ol>
<p><strong>一个规律</strong>：</p>
<blockquote>
<p>能继承的属性，都是不影响布局的，简单说：都是和盒子模型没关系的。</p>
</blockquote>
<h2 id="_5-14-默认样式" tabindex="-1"><a class="header-anchor" href="#_5-14-默认样式"><span>5.14 默认样式</span></a></h2>
<p>元素一般都些默认的样式，例如：</p>
<ol>
<li><code v-pre>&lt;a&gt;</code> 元素：下划线、字体颜色、鼠标小手。</li>
<li><code v-pre>&lt;h1&gt; ~ &lt;h6&gt;</code> 元素： 文字加粗、文字大小、上下外边距。</li>
<li><code v-pre>&lt;p&gt;</code> 元素：上下外边距</li>
<li><code v-pre>&lt;ul&gt;</code> 、<code v-pre>&lt;ol&gt;</code> 元素：左内边距</li>
<li><code v-pre>body</code> 元素： <code v-pre>8px</code> 外边距（4个方向）
......</li>
</ol>
<p><strong>优先级</strong>：</p>
<blockquote>
<p>元素的默认样式 &gt; 继承的样式，所以如果要重置元素的默认样式，选择器一定要直接选择器 到该元素。</p>
</blockquote>
<h2 id="_5-15-布局小技巧" tabindex="-1"><a class="header-anchor" href="#_5-15-布局小技巧"><span>5.15 布局小技巧</span></a></h2>
<ol>
<li>行内元素、行内块元素，可以被父元素当做文本处理。
<ul>
<li>即：可以像处理文本对齐一样，去处理：行内、行内块在父元素中的对齐。</li>
<li>例如： text-align 、 line-height 、 text-indent 等。</li>
</ul>
</li>
<li>如何让子元素，在父亲中 水平居中：
<ul>
<li>若子元素为块元素，给父元素加上： margin:0 auto; 。</li>
<li>若子元素为行内元素、行内块元素，给父元素加上： text-align:center 。</li>
</ul>
</li>
<li>如何让子元素，在父亲中 垂直居中：
<ul>
<li>若子元素为块元素，给子元素加上：
margin-top ，值为：(父元素 content －子元素盒子 总高) / 2。</li>
<li>若子元素为行内元素、行内块元素：
让父元素的 height = line-height ，每个子元素都加上：vertical-align:middle; 。</li>
<li>补充：若想绝对垂直居中，父元素 font-size 设置为 0 。</li>
</ul>
</li>
</ol>
<h2 id="_5-16-元素之间的空白问题" tabindex="-1"><a class="header-anchor" href="#_5-16-元素之间的空白问题"><span>5.16 元素之间的空白问题</span></a></h2>
<p><strong>产生的原因</strong>：</p>
<pre><code> 行内元素、行内块元素，彼此之间的换行会被浏览器解析为一个空白字符。
</code></pre>
<p><strong>解决方案</strong>：</p>
<blockquote>
<ul>
<li>方案一： 去掉换行和空格（不推荐）。</li>
<li>方案二： 给父元素设置 font-size:0 ，再给需要显示文字的元素，单独设置字体大小（推 荐）。</li>
</ul>
</blockquote>
<h2 id="_5-17-行内块的幽灵空白问题" tabindex="-1"><a class="header-anchor" href="#_5-17-行内块的幽灵空白问题"><span>5.17 行内块的幽灵空白问题</span></a></h2>
<p><strong>产生原因</strong>：
行内块元素与文本的基线对齐，而文本的基线与文本最底端之间是有一定距离的。
<strong>解决方案</strong>：</p>
<blockquote>
<ul>
<li>方案一： 给行行内块设置 <code v-pre>vertical</code> ，值不为 <code v-pre>baseline</code> 即可，设置为 <code v-pre>middel</code> 、 <code v-pre>bottom</code> 、 <code v-pre>top</code> 均可。</li>
<li>方案二： 若父元素中只有一张图片，设置图片为 <code v-pre>display:block</code> 。</li>
<li>方案三： 给父元素设置 font-size: 0 。如果该行内块内部还有文本，则需单独设置 font-size 。</li>
</ul>
</blockquote>
</div></template>


