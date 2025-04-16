<template><div><h1 id="四、css常用属性" tabindex="-1"><a class="header-anchor" href="#四、css常用属性"><span>四、CSS常用属性</span></a></h1>
<h2 id="_4-1-像素的概念" tabindex="-1"><a class="header-anchor" href="#_4-1-像素的概念"><span>4.1 像素的概念</span></a></h2>
<p><strong>概念</strong>：我们的电脑屏幕是，是由一个一个“小点”组成的，每个“小点”，就是一个像素（px）。</p>
<p><strong>规律</strong>：像素点越小，呈现的内容就越清晰、越细腻。</p>
<p><img src="/style/htmlcss/css2/1737864709300.jpg" alt=""></p>
<p><strong>注意点</strong>：</p>
<blockquote>
<p>如果电脑设置中开启了缩放，那么就会影响一些工具的测量结果，但这无所谓，因 为我们工作中都是参考详细的设计稿，去给元素设置宽高。</p>
</blockquote>
<h2 id="_4-2-颜色的表示" tabindex="-1"><a class="header-anchor" href="#_4-2-颜色的表示"><span>4.2 颜色的表示</span></a></h2>
<h3 id="_4-2-1-表示方式一-颜色名" tabindex="-1"><a class="header-anchor" href="#_4-2-1-表示方式一-颜色名"><span>4.2.1 表示方式一：颜色名</span></a></h3>
<p><strong>编写方式</strong>：直接使用颜色对应的英文单词，编写比较简单，例如：</p>
<ul>
<li>红色：red</li>
<li>绿色：green</li>
<li>蓝色：blue</li>
<li>紫色：purple</li>
<li>橙色：orange</li>
<li>灰色：gray</li>
<li>......</li>
</ul>
<blockquote>
<ol>
<li>颜色名这种方式，表达的颜色比较单一，所以用的并不多。</li>
<li>具体颜色名参考 <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/named-color" target="_blank" rel="noopener noreferrer"> MDN 官方文档</a></li>
</ol>
</blockquote>
<h3 id="_4-2-2-表示方式二-rgb-或-rgba" tabindex="-1"><a class="header-anchor" href="#_4-2-2-表示方式二-rgb-或-rgba"><span>4.2.2 表示方式二：rgb 或 rgba</span></a></h3>
<p><strong>编写方式</strong>：使用 红、黄、蓝 这三种光的三原色进行组合。</p>
<ul>
<li>r 表示 红色</li>
<li>g 表示 绿色</li>
<li>b 表示 蓝色</li>
<li>a 表示 透明度
<strong>举例</strong>：</li>
</ul>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">/* 使用 0~255 之间的数字表示一种颜色 */</span></span>
<span class="line">    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>255<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">/* 红色 */</span></span>
<span class="line">    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">/* 绿色 */</span></span>
<span class="line">    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 255<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">/* 蓝色 */</span></span>
<span class="line">    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">/* 黑色 */</span></span>
<span class="line">    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 255<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">/* 白色 */</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">/* 混合出任意一种颜色 */</span></span>
<span class="line">    <span class="token property">color</span><span class="token punctuation">:</span><span class="token function">rgb</span><span class="token punctuation">(</span>138<span class="token punctuation">,</span> 43<span class="token punctuation">,</span> 226<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">/* 紫罗兰色 */</span></span>
<span class="line">    <span class="token property">color</span><span class="token punctuation">:</span><span class="token function">rgba</span><span class="token punctuation">(</span>255<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.5<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">/* 半透明的红色 */</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">/* 也可以使用百分比表示一种颜色（用的少） */</span></span>
<span class="line">    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>100%<span class="token punctuation">,</span> 0%<span class="token punctuation">,</span> 0%<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">/* 红色 */</span></span>
<span class="line">    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>100%<span class="token punctuation">,</span> 0%<span class="token punctuation">,</span> 0%<span class="token punctuation">,</span>50%<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">/* 半透明的红色 */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>小规律</strong>：</p>
<blockquote>
<ol>
<li>若三种颜色值相同，呈现的是灰色，值越大，灰色越浅。</li>
<li>rgb(0, 0, 0) 是黑色， rgb(255, 255,255) 是白色。</li>
<li>对于 rbga 来说，前三位的 rgb 形式要保持一致，要么都是 0~255 的数字，要么都是 百分比 。</li>
</ol>
</blockquote>
<h3 id="_4-2-3-表示方式三-hex-或-hexa" tabindex="-1"><a class="header-anchor" href="#_4-2-3-表示方式三-hex-或-hexa"><span>4.2.3 表示方式三：HEX 或 HEXA</span></a></h3>
<p>HEX 的原理同与 rgb 一样，依然是通过：红、绿、蓝色 进行组合，只不过要用 6位（分成3组） 来 表达，
格式为：# rrggbb</p>
<p>每一位数字的取值范围是： 0 ~ f ，即：（ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, a, b, c, d, e, f ）</p>
<p>所以每一种光的最小值是： 00 ，最大值是： ff</p>
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
<h3 id="_4-2-4-表示方式四-hsl-或-hsla" tabindex="-1"><a class="header-anchor" href="#_4-2-4-表示方式四-hsl-或-hsla"><span>4.2.4 表示方式四：HSL 或 HSLA</span></a></h3>
<p>HSL 是通过：色相、饱和度、亮度，来表示一个颜色的，格式为： hsl(色相,饱和度,亮度)</p>
<ul>
<li>色相：取值范围是 0~360 度，具体度数对应的颜色如下图：</li>
</ul>
<p><img src="/style/htmlcss/css2/1737864725016.jpg" alt=""></p>
<ul>
<li>饱和度：取值范围是 0%~100% 。（向色相中对应颜色中添加灰色， 0% 全灰， 100% 没有 灰）</li>
<li>亮度：取值范围是 0%~100% 。（ 0% 亮度没了，所以就是黑色。 100% 亮度太强，所以就是 白色了）</li>
<li>HSLA 其实就是在 HSL 的基础上，添加了透明度。</li>
</ul>
<h2 id="_4-3-css字体属性" tabindex="-1"><a class="header-anchor" href="#_4-3-css字体属性"><span>4.3 CSS字体属性</span></a></h2>
<h3 id="_4-3-1-字体大小" tabindex="-1"><a class="header-anchor" href="#_4-3-1-字体大小"><span>4.3.1 字体大小</span></a></h3>
<p><strong>属性名</strong>： font-size</p>
<p><strong>作用</strong>：控制字体的大小。</p>
<p><strong>语法</strong>：</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token selector">div</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">font-size</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意点</strong>：</p>
<blockquote>
<ol>
<li>Chrome 浏览器支持的最小文字为 12px ，默认的文字大小为 16px ，并且0px会自动消失。</li>
<li>不同浏览器默认的字体大小可能不一致，所以最好给一个明确的值，不要用默认大小。</li>
<li>通常以给body设置font-size属性，这样body中的其他元素就都可以继承了。
借助控制台看样式：</li>
</ol>
</blockquote>
<h3 id="_4-3-2-字体族" tabindex="-1"><a class="header-anchor" href="#_4-3-2-字体族"><span>4.3.2 字体族</span></a></h3>
<p><strong>属性名</strong>： font-family</p>
<p><strong>作用</strong>：控制字体类型。</p>
<p><strong>语法</strong>：</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token selector">div</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">"STCaiyun"</span><span class="token punctuation">,</span><span class="token string">"Microsoft YaHei"</span><span class="token punctuation">,</span>sans-serif</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意</strong>：</p>
<blockquote>
<ol>
<li>使用字体的英文名字兼容性会更好，具体的英文名可以自行查询，或在电脑的设置里 去寻找。</li>
<li>如果字体名包含空格，必须使用引号包裹起来。</li>
<li>可以设置多个字体，按照从左到右的顺序逐个查找，找到就用，没有找到就使用后面 的，且通常在最后写上 serif （衬线字体）或 sans-serif （非衬线字体）。</li>
<li>windows 系统中，默认的字体就是微软雅黑。</li>
</ol>
</blockquote>
<p><strong>借助控制台看样式</strong>：
<img src="/style/htmlcss/css2/1737864744569.jpg" alt=""></p>
<h3 id="_4-3-3-字体风格" tabindex="-1"><a class="header-anchor" href="#_4-3-3-字体风格"><span>4.3.3 字体风格</span></a></h3>
<p><strong>属性名</strong>： font-style</p>
<p><strong>作用</strong>：控制字体是否为斜体。</p>
<p><strong>常用值</strong>：</p>
<ol>
<li>normal ：正常（默认值）</li>
<li>italic ：斜体（使用字体自带的斜体效果）</li>
<li>oblique ：斜体（强制倾斜产生的斜体效果）
实现斜体时，更推荐使用 italic 。</li>
</ol>
<p><strong>语法</strong>：</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token selector">div</span> <span class="token punctuation">{</span> </span>
<span class="line">    <span class="token property">font-style</span><span class="token punctuation">:</span> italic<span class="token punctuation">;</span> </span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-4-字体粗细" tabindex="-1"><a class="header-anchor" href="#_4-3-4-字体粗细"><span>4.3.4 字体粗细</span></a></h3>
<p><strong>属性名</strong>： font-weight</p>
<p><strong>作用</strong>：控制字体的粗细。</p>
<p><strong>常用值</strong>：</p>
<ul>
<li>关键词
<ul>
<li>lighter ：细</li>
<li>normal ： 正常</li>
<li>bold ：粗</li>
<li>bolder ：很粗 （多数字体不支持）</li>
</ul>
</li>
<li>数值：
<ul>
<li>100~1000 且无单位，数值越大，字体越粗 （或一样粗，具体得看字体设计时的 精确程度）。</li>
<li>100~300 等同于 lighter ， 400~500 等同于 normal ， 600 及以上等同于 bold 。</li>
</ul>
</li>
</ul>
<p><strong>语法</strong>：</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token selector">div</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">div</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">font-weight</span><span class="token punctuation">:</span> 600<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-5-字体复合写法" tabindex="-1"><a class="header-anchor" href="#_4-3-5-字体复合写法"><span>4.3.5 字体复合写法</span></a></h3>
<p><strong>属性名</strong>： font ，可以把上述字体样式合并成一个属性。</p>
<p><strong>作用</strong>：将上述所有字体相关的属性复合在一起编写。</p>
<p><strong>编写规则</strong>：</p>
<blockquote>
<ol>
<li>字体大小、字体族必须都写上。</li>
<li>字体族必须是最后一位、字体大小必须是倒数第二位。</li>
<li>各个属性间用空格隔开。
实际开发中更推荐复合写法，但这也不是绝对的，比如只想设置字体大小，那就直接用 font-size 属性。</li>
</ol>
</blockquote>
<h2 id="_4-4-css文本属性" tabindex="-1"><a class="header-anchor" href="#_4-4-css文本属性"><span>4.4 CSS文本属性</span></a></h2>
<h3 id="_4-4-1-文本颜色" tabindex="-1"><a class="header-anchor" href="#_4-4-1-文本颜色"><span>4.4.1 文本颜色</span></a></h3>
<p><strong>属性名</strong>： color</p>
<p><strong>作用</strong>：控制文字的颜色。</p>
<p><strong>可选值</strong>：</p>
<ol>
<li>颜色名</li>
<li>rgb 或 rgba</li>
<li>HEX 或 HEXA （十六进制）</li>
<li>HSL 或 HSLA
开发中常用的是： rgb/rgba 或 HEX/HEXA （十六进制）。</li>
</ol>
<p><strong>举例</strong>：</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token selector">div</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>112<span class="token punctuation">,</span>45<span class="token punctuation">,</span>78<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-4-2-文本间距" tabindex="-1"><a class="header-anchor" href="#_4-4-2-文本间距"><span>4.4.2 文本间距</span></a></h3>
<ul>
<li>字母间距： letter-spacing</li>
<li>单词间距： word-spacing （通过空格识别词）</li>
</ul>
<p>属性值为像素（ px ），正值让间距增大，负值让间距缩小。</p>
<h3 id="_4-4-3-文本修饰" tabindex="-1"><a class="header-anchor" href="#_4-4-3-文本修饰"><span>4.4.3 文本修饰</span></a></h3>
<p><strong>属性名</strong>： text-decoration</p>
<p><strong>作用</strong>：控制文本的各种装饰线。</p>
<p><strong>可选值</strong>：</p>
<ol>
<li>none ： 无装饰线（常用）</li>
<li>underline ：下划线（常用）</li>
<li>overline ： 上划线</li>
<li>line-through ： 删除线</li>
</ol>
<p>可搭配如下值使用：</p>
<ol>
<li>dotted ：虚线</li>
<li>wavy ：波浪线</li>
<li>也可以指定颜色</li>
</ol>
<p><strong>举例</strong>：</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token selector">a</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">text-decoration</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-4-4-文本缩进" tabindex="-1"><a class="header-anchor" href="#_4-4-4-文本缩进"><span>4.4.4 文本缩进</span></a></h3>
<p><strong>属性名</strong>： text-indent 。</p>
<p><strong>作用</strong>：控制文本首字母的缩进。</p>
<p><strong>属性值</strong>： css 中的长度单位，</p>
<p><strong>例如</strong>： px 举例：</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token selector">div</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">text-indent</span><span class="token punctuation">:</span>40px<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-4-5-文本对齐-水平" tabindex="-1"><a class="header-anchor" href="#_4-4-5-文本对齐-水平"><span>4.4.5 文本对齐_水平</span></a></h3>
<p><strong>属性名</strong>： text-align 。</p>
<p><strong>作用</strong>：控制文本的水平对齐方式。</p>
<p><strong>常用值</strong>：</p>
<ol>
<li>left ：左对齐（默认值）</li>
<li>right ：右对齐</li>
<li>center ：居中对齐</li>
</ol>
<p><strong>举例</strong>：</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line">    <span class="token selector">div</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-4-6-细说-font-size" tabindex="-1"><a class="header-anchor" href="#_4-4-6-细说-font-size"><span>4.4.6 细说 font-size</span></a></h3>
<ol>
<li>由于字体设计原因，文字最终呈现的大小，并不一定与 font-size 的值一致，可能大，也可能 小。</li>
</ol>
<p><strong>例如</strong>： font-size 设为 40px ，最终呈现的文字，可能比 40px 大，也可能比 40px 小。</p>
<ol start="2">
<li>通常情况下，文字相对字体设计框，并不是垂直居中的，通常都靠下 一些。</li>
</ol>
<h3 id="_4-4-7-行高" tabindex="-1"><a class="header-anchor" href="#_4-4-7-行高"><span>4.4.7 行高</span></a></h3>
<p><strong>属性名</strong>： line-height</p>
<p><strong>作用</strong>：控制一行文字的高度。</p>
<p><strong>可选值</strong>：</p>
<ol>
<li>normal ：由浏览器根据文字大小决定的一个默认值。</li>
<li>像素( px )。</li>
<li>数字：参考自身 font-size 的倍数（很常用）。</li>
<li>百分比：参考自身 font-size 的百分比。</li>
</ol>
<p><strong>备注</strong>：由于字体设计原因，文字在一行中，并不是绝对垂直居中，若一行中都是文字，不会太影响 观感。</p>
<p><strong>举例</strong>：</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line">    <span class="token selector">div</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">line-height</span><span class="token punctuation">:</span> 60px<span class="token punctuation">;</span></span>
<span class="line">        <span class="token property">line-height</span><span class="token punctuation">:</span> 1.5<span class="token punctuation">;</span></span>
<span class="line">        <span class="token property">line-height</span><span class="token punctuation">:</span> 150%<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>行高注意事项</strong>：</p>
<blockquote>
<ol>
<li>line-height 过小会怎样？—— 文字产生重叠，且最小值是 0 ，不能为负数。</li>
<li>line-height 是可以继承的，且为了能更好的呈现文字，最好写数值。</li>
<li>line-height 和 height 是什么关系？
设置了 height ，那么高度就是 height 的值。
不设置 height 的时候，会根据 line-height 计算高度。</li>
</ol>
</blockquote>
<p><strong>应用场景</strong>：</p>
<ol>
<li>对于多行文字：控制行与行之间的距离。</li>
<li>对于单行文字：让 height 等于 line-height ，可以实现文字垂直居中。</li>
</ol>
<p><strong>备注</strong>：</p>
<blockquote>
<p>由于字体设计原因，靠上述办法实现的居中，并不是绝对的垂直居中，但如果 一行中都是文字，不会太影响观感。</p>
</blockquote>
<h3 id="_4-4-8-文本对齐-垂直" tabindex="-1"><a class="header-anchor" href="#_4-4-8-文本对齐-垂直"><span>4.4.8 文本对齐_垂直</span></a></h3>
<ol>
<li>顶部：无需任何属性，在垂直方向上，默认就是顶部对齐。</li>
<li>居中：对于单行文字，让 height = line-height 即可。</li>
</ol>
<blockquote>
<p>问题：多行文字垂直居中怎么办？—— 后面我们用定位去做。</p>
</blockquote>
<ol start="3">
<li>底部：对于单行文字，目前一个临时的方式：
让 line-height = ( height × 2 ) - font-size - x 。</li>
</ol>
<p><strong>备注</strong>：</p>
<blockquote>
<p>x 是根据字体族，动态决定的一个值。</p>
</blockquote>
<p><strong>问题</strong>：</p>
<blockquote>
<p>垂直方向上的底部对齐，更好的解决办法是什么？—— 后面我们用定位去做。</p>
</blockquote>
<h3 id="_4-4-9-vertical-align" tabindex="-1"><a class="header-anchor" href="#_4-4-9-vertical-align"><span>4.4.9 vertical-align</span></a></h3>
<p><strong>属性名</strong>： vertical-align 。</p>
<p><strong>作用</strong>：用于指定同一行元素之间，或 表格单元格 内文字的 垂直对齐方式。</p>
<p><strong>常用值</strong>：</p>
<ol>
<li>baseline （默认值）：使元素的基线与父元素的基线对齐。</li>
<li>top ：使元素的顶部与其所在行的顶部对齐。</li>
<li>middle ：使元素的中部与父元素的基线加上父元素字母 x 的一半对齐。</li>
<li>bottom ：使元素的底部与其所在行的底部对齐。</li>
</ol>
<h2 id="_4-5-css列表属性" tabindex="-1"><a class="header-anchor" href="#_4-5-css列表属性"><span>4.5 CSS列表属性</span></a></h2>
<p>列表相关的属性，可以作用在 ul 、 ol 、 li 元素上。</p>
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
<td>list-style-type</td>
<td>设置列表符号</td>
<td>常用值如下：<br> <code v-pre>none</code> ：不显示前面的标识（很常用！）<br> <code v-pre>square</code>：实心方块<br> <code v-pre>disc</code> ：圆形<br> <code v-pre>decimal</code> ：数字<br> <code v-pre>lower-roman</code> ：小写罗马字<br> <code v-pre>upper-roman</code> ：大写罗马字<br> <code v-pre>lower-alpha</code> ：小写字母<br> <code v-pre>upper-alpha</code> ：大写字母<br></td>
</tr>
<tr>
<td>list-style-position</td>
<td>设置列表符号的位置</td>
<td><code v-pre>inside</code> ：在 li 的里面<br> <code v-pre>outside</code> ：在 li 的外边</td>
</tr>
<tr>
<td>list-style-image</td>
<td>自定义列表符号</td>
<td><code v-pre>url(图片地址)</code></td>
</tr>
<tr>
<td>list-style</td>
<td>复合属性</td>
<td>没有数量、顺序的要求</td>
</tr>
</tbody>
</table>
<h2 id="_4-6-css表格属性" tabindex="-1"><a class="header-anchor" href="#_4-6-css表格属性"><span>4.6 CSS表格属性</span></a></h2>
<h3 id="_4-6-1-边框相关属性-其他元素也能用" tabindex="-1"><a class="header-anchor" href="#_4-6-1-边框相关属性-其他元素也能用"><span>4.6.1 边框相关属性（其他元素也能用）：</span></a></h3>
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
<td>border-width</td>
<td>边框宽度</td>
<td>CSS中可用的长度值</td>
</tr>
<tr>
<td>border-color</td>
<td>边框颜色</td>
<td>CSS中可用的颜色值</td>
</tr>
<tr>
<td>border-style</td>
<td>边框风格</td>
<td><code v-pre>none</code> 默认值 <br> <code v-pre>solid</code> 实线<br>  <code v-pre>dashed</code> 虚线<br> <code v-pre>dotted</code> 点线<br> <code v-pre>double</code> 双实线</td>
</tr>
<tr>
<td>border</td>
<td>边框复合属性</td>
<td>没有数量、顺序的要求</td>
</tr>
</tbody>
</table>
<p><strong>注意</strong>：</p>
<blockquote>
<ol>
<li>以上 4 个边框相关的属性，其他元素也可以用，这是我们第一次遇见它们。</li>
<li>在后面的盒子模型中，我们会详细讲解边框相关的知识。</li>
</ol>
</blockquote>
<h3 id="_4-6-2-表格独有属性-只有-table-标签才能使用" tabindex="-1"><a class="header-anchor" href="#_4-6-2-表格独有属性-只有-table-标签才能使用"><span>4.6.2 表格独有属性（只有 table 标签才能使用）：</span></a></h3>
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
<td>table-layout</td>
<td>设置列宽度</td>
<td><code v-pre>auto</code> ：自动，列宽根据内容计算（默认值）。<br> <code v-pre>fixed</code> ：固定列宽，平均分。</td>
</tr>
<tr>
<td>border-spacing</td>
<td>单元格间距</td>
<td>CSS 中可用的长度值。<br>生效的前提：单元格边框不能合并。</td>
</tr>
<tr>
<td>border-collapse</td>
<td>合并单元格边框</td>
<td><code v-pre>collapse</code> ：合并<br>  <code v-pre>separate</code> ：不合并</td>
</tr>
<tr>
<td>empty-cells</td>
<td>隐藏没有内的单元格</td>
<td><code v-pre>show</code> ：显示，默认<br> <code v-pre>hide</code> ：隐藏<br>生效前提：单元格不能合并。</td>
</tr>
<tr>
<td>caption-side</td>
<td>设置表格标题位置</td>
<td><code v-pre>top</code> ：上面（默认值）<br> <code v-pre>bottom</code> ：在表格下面</td>
</tr>
</tbody>
</table>
<p>以上 5 个属性，只有表格才能使用，即： <code v-pre>&lt;table&gt;</code>标签。</p>
<h2 id="_4-7-css背景属性" tabindex="-1"><a class="header-anchor" href="#_4-7-css背景属性"><span>4.7 CSS背景属性</span></a></h2>
<table>
<thead>
<tr>
<th>css属性名</th>
<th>功能</th>
<th>属性值</th>
</tr>
</thead>
<tbody>
<tr>
<td>background-color</td>
<td>设置背景颜色</td>
<td>符合 CSS 中颜色规范的值。<br> 默认背景颜色是<code v-pre>transparent</code> 。</td>
</tr>
<tr>
<td>background-image</td>
<td>设置背景图片</td>
<td><code v-pre>url(图片的地址)</code></td>
</tr>
<tr>
<td>background-repeat</td>
<td>设置背景重复方式<br></td>
<td><code v-pre>repeat</code> ：重复，铺满整个元素，默认值。<br> <code v-pre>repeat-x</code> ：只在水平方向重复。<br> <code v-pre>repeat-y</code> ：只在垂直方向重复。<br> <code v-pre>no-repeat</code> ：不重复。</td>
</tr>
<tr>
<td>background-position</td>
<td>设置背景图位置</td>
<td>通过关键字设置位置：<br>写两个值，用空格隔开<br><strong>水平</strong>： <code v-pre>left</code> 、 <code v-pre>center</code> 、 <code v-pre>right</code><br><strong>垂直</strong>: <code v-pre>top</code> 、 <code v-pre>center</code> 、 <code v-pre>bottom</code> <br> 如果只写一个值，另一个方向的值取 center <br> 通过长度指定坐标位置：<br> 以元素左上角，为坐标原点，设置图片左上角的位置。 <br>  两个值，分别是 x 坐标和 y 坐标。只写一个值，会被当做 x 坐标， y 坐标取 center</td>
</tr>
<tr>
<td>background</td>
<td>复合属性</td>
<td>没有数量和顺序要求</td>
</tr>
</tbody>
</table>
<h2 id="_4-8-css鼠标属性" tabindex="-1"><a class="header-anchor" href="#_4-8-css鼠标属性"><span>4.8 CSS鼠标属性</span></a></h2>
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
<td>cursor</td>
<td>设置鼠标光标的样式</td>
<td><code v-pre>pointer</code> ：小手<br> <code v-pre>move</code> ：移动图标<br> <code v-pre>text</code> ：文字选择器<br><code v-pre>crosshair</code> ：十字架<br><code v-pre>wait</code> ：等待<br><code v-pre>help</code> ：帮助</td>
</tr>
</tbody>
</table>
<p><strong>扩展</strong>：自定义鼠标图标</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token comment">/* 自定义鼠标光标 */</span></span>
<span class="line"><span class="token property">cursor</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">"./arrow.png"</span><span class="token punctuation">)</span></span><span class="token punctuation">,</span>pointer<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


