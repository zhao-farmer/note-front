<template><div><h1 id="二、css选择器" tabindex="-1"><a class="header-anchor" href="#二、css选择器"><span>二、CSS选择器</span></a></h1>
<h2 id="_2-1-css基本选择器" tabindex="-1"><a class="header-anchor" href="#_2-1-css基本选择器"><span>2.1 CSS基本选择器</span></a></h2>
<p>有以下4种：</p>
<ol>
<li>通配选择器</li>
<li>元素选择器</li>
<li>类选择器</li>
<li>id 选择器</li>
</ol>
<h3 id="_2-1-1-通配选择器" tabindex="-1"><a class="header-anchor" href="#_2-1-1-通配选择器"><span>2.1.1 通配选择器</span></a></h3>
<p><strong>作用</strong>：可以选中所有的 HTML 元素。
<strong>语法</strong>：</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token selector">*</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">属性名</span><span class="token punctuation">:</span> 属性值<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>举例</strong>：</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token comment">/* 选中所有元素 */</span></span>
<span class="line"><span class="token selector">*</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">color</span><span class="token punctuation">:</span> orange<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">font-size</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>备注</strong>：</p>
<blockquote>
<p>目前来看通配选择器貌似有点鸡肋，但后面清除样式时，会对我们有很大帮助。</p>
</blockquote>
<h3 id="_2-1-2-元素选择器" tabindex="-1"><a class="header-anchor" href="#_2-1-2-元素选择器"><span>2.1.2 元素选择器</span></a></h3>
<p><strong>作用</strong>：为页面中 某种元素 统一设置样式。
<strong>语法</strong>：</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token selector">标签名</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">属性名</span><span class="token punctuation">:</span> 属性值<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>举例</strong>：</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token comment">/* 选中所有h1元素 */</span></span>
<span class="line"><span class="token selector">h1</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">color</span><span class="token punctuation">:</span> orange<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">font-size</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">/* 选中所有p元素 */</span></span>
<span class="line"><span class="token selector">p</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">font-size</span><span class="token punctuation">:</span> 60px<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>备注</strong>：</p>
<blockquote>
<p>元素选择器无法实现差异化设置，例如上面的代码中，所有的 <code v-pre>&lt;p&gt;</code> 元素效果都一样。</p>
</blockquote>
<h3 id="_2-1-3-类选择器" tabindex="-1"><a class="header-anchor" href="#_2-1-3-类选择器"><span>2.1.3 类选择器</span></a></h3>
<p><strong>作用</strong>：根据元素的 class 值，来选中某些元素。
<em>class 翻译过来有：种类、类别的含义，所以 class 值，又称：类名。</em>
<strong>语法</strong>:</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">.类名 {</span>
<span class="line">    属性名: 属性值;</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>举例：</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token comment">/* 选中所有class值为speak的元素 */</span></span>
<span class="line"><span class="token selector">.speak</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">/* 选中所有class值为answer的元素 */</span></span>
<span class="line"><span class="token selector">.answer</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意点</strong>：</p>
<blockquote>
<ol>
<li>元素的 class 属性值不带 . ，但 CSS 的类选择器要带 . 。</li>
<li>class 值，是我们自定义的，按照标准：不要使用纯数字、不要使用中文、尽量使用英文与数字的组合，若由多个单词组成，使用 - 做连接，例如： <code v-pre>left-menu</code> ，且命名要有意义，做到 “见名知意”。</li>
<li>一个元素不能写多个 class 属性，下面是 错误示例：</li>
</ol>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token comment">&lt;!-- 该写法错误，元素的属性不能重复，后写的会失效 --></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>speak<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>big<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>你好啊<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4">
<li>一个元素的 class 属性，能写多个值，要用空格隔开，例如：</li>
</ol>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token comment">&lt;!-- 该写法正确，class属性，能写多个值 --></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>speak big<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>你好啊<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>
<h3 id="_2-1-4-id选择器" tabindex="-1"><a class="header-anchor" href="#_2-1-4-id选择器"><span>2.1.4 ID选择器</span></a></h3>
<p><strong>作用</strong>：根据元素的 id 属性值，来精准的选中某个元素。
<strong>语法</strong>：</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line">    <span class="token selector">#id值</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">属性名</span><span class="token punctuation">:</span> 属性值<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>举例</strong>：</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line">    <span class="token comment">/* 选中id值为earthy的那个元素 */</span></span>
<span class="line">    <span class="token selector">#earthy</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span></span>
<span class="line">        <span class="token property">font-size</span><span class="token punctuation">:</span> 60px<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意</strong>：</p>
<blockquote>
<ol>
<li>id 属性值：尽量由字母、数字、下划线( _ )、短杠( - )组成，最好以字母开头、不要包含空 格、区分大小写。</li>
<li>一个元素只能拥有一个 id 属性，多个元素的 id 属性值不能相同。</li>
<li>一个元素可以同时拥有 id 和 class 属性。</li>
</ol>
</blockquote>
<h3 id="_2-1-5-基本选择器总结" tabindex="-1"><a class="header-anchor" href="#_2-1-5-基本选择器总结"><span>2.1.5 基本选择器总结</span></a></h3>
<table>
<thead>
<tr>
<th>基本选择器</th>
<th>特点</th>
<th>用法</th>
</tr>
</thead>
<tbody>
<tr>
<td>通配选择器</td>
<td>选中所有标签，一般用于清除样式。</td>
<td><code v-pre>*{color:red}</code></td>
</tr>
<tr>
<td>元素选择器</td>
<td>选中所有同种标签，但是不能差异化选择。</td>
<td><code v-pre>h1{color:red}</code></td>
</tr>
<tr>
<td>类选择器</td>
<td>选中所有特定类名（class值）的元素——使用频率很高。</td>
<td><code v-pre>.say{color:red}</code></td>
</tr>
<tr>
<td>ID选择器</td>
<td>选中特定id值的那个元素（唯一的）。</td>
<td><code v-pre>#earthy{color:red}</code></td>
</tr>
</tbody>
</table>
<h2 id="_2-2-css复合选择器" tabindex="-1"><a class="header-anchor" href="#_2-2-css复合选择器"><span>2.2 CSS复合选择器</span></a></h2>
<p>CSS选择器整体分类两大类：</p>
<ol>
<li>基本选择器：
①通配选择器
②元素选择器
③类选择器
④ ID 选择器</li>
<li>复合选择器：
①交集选择器
②并集选择器
③后代选择器
④子元素选择器</li>
</ol>
<blockquote></blockquote>
<pre><code>1. 复合选择器建立在基本选择器之上，由多个基础选择器，通过不同的方式组合而成。 
2. 复合选择器可以在复杂结构中，快速而准确的选中元素。
</code></pre>
<h3 id="_2-2-1-交集选择器" tabindex="-1"><a class="header-anchor" href="#_2-2-1-交集选择器"><span>2.2.1 交集选择器</span></a></h3>
<p><strong>作用</strong>：选中同时符合多个条件的元素。 交集有并且的含义（通俗理解：即......又...... 的意思），例如：年轻且长得帅。
<strong>语法</strong>：</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token selector">.选择器1.选择器2.选择器3...选择器n</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> </span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong>举例</strong>：</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token comment">/* 选中：类名为beauty的p元素，为此种写法用的非常多！！！！ */</span></span>
<span class="line"><span class="token selector">p.beauty</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">/* 选中：类名包含rich和beauty的元素 */</span></span>
<span class="line"><span class="token selector">.rich.beauty</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意</strong>：</p>
<blockquote>
<ol>
<li>有标签名，标签名必须写在前面。</li>
<li>id 选择器、通配选择器，理论上可以作为交集的条件，但实际应用中几乎不用 —— 因为没有意义。</li>
<li>交集选择器中不可能出现两个元素选择器，因为一个元素，不可能即是 p 元素又是 span 元 素。</li>
<li>用的最多的交集选择器是：元素选择器配合类名选择器，例如： p.beauty 。</li>
</ol>
</blockquote>
<h3 id="_2-2-2-并集选择器" tabindex="-1"><a class="header-anchor" href="#_2-2-2-并集选择器"><span>2.2.2 并集选择器</span></a></h3>
<p>作用：选中多个选择器对应的元素，又称：分组选择器。
所谓并集就是或者的含义（通俗理解：要么......要么...... 的意思），例如：给我转10万块钱 或者我报警。
语法：</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token selector">选择器1, 选择器2, 选择器3, ... 选择器n</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> </span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>多个选择器通过 , 连接，此处 , 的含义就是：或。
举例：</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token comment">/* 选中id为peiqi，或类名为rich，或类名为beauty的元素 */</span></span>
<span class="line"><span class="token selector">#peiqi,</span>
<span class="line">.rich,</span>
<span class="line">.beauty</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">font-size</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span></span>
<span class="line">        <span class="token property">background-color</span><span class="token punctuation">:</span> skyblue<span class="token punctuation">;</span></span>
<span class="line">        <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意</strong>：</p>
<blockquote>
<ol>
<li>并集选择器，我们一般竖着写。</li>
<li>任何形式的选择器，都可以作为并集选择器的一部分 。</li>
<li>并集选择器，通常用于集体声明，可以缩小样式表体积。</li>
</ol>
</blockquote>
<h3 id="_2-2-3-html元素间的关系" tabindex="-1"><a class="header-anchor" href="#_2-2-3-html元素间的关系"><span>2.2.3 HTML元素间的关系</span></a></h3>
<p>分为：①父元素、②子元素、③祖先元素、④后代元素、⑤兄弟元素。</p>
<ol>
<li>父元素：
直接包裹某个元素的元素，就是该元素的父元素。
<img src="/style/htmlcss/css2/1737864621100.jpg" alt=""></li>
<li>子元素：
被父元素直接包含的元素（简记：儿子元素）。
<img src="/style/htmlcss/css2/1737864633368.jpg" alt=""></li>
<li>祖先元素
父亲的父亲......，一直往外找，都是祖先。</li>
</ol>
<blockquote>
<p>备注：父元素，也算是祖先元素的一种。 <br>
例如：张三的父亲，也算是张三的祖先，但一般还是称呼：父亲。</p>
</blockquote>
<p><img src="/style/htmlcss/css2/1737864642589.jpg" alt="">
4. 后代元素：
儿子的儿子......，一直往里找，都是后代。</p>
<blockquote>
<p>备注：子元素，也算是后代元素的一种。<br>
例如：张三的儿子，也算是张三的后代，但一般还是称呼：儿子。</p>
</blockquote>
<p><img src="/style/htmlcss/css2/1737864653304.jpg" alt=""></p>
<ol start="5">
<li>兄弟元素：
具有相同父元素的元素，互为兄弟元素。
<img src="/style/htmlcss/css2/1737864667546.jpg" alt=""></li>
</ol>
<h3 id="_2-2-4-后代选择器" tabindex="-1"><a class="header-anchor" href="#_2-2-4-后代选择器"><span>2.2.4 后代选择器</span></a></h3>
<p><strong>作用</strong>：选中指定元素中，符合要求的后代元素。
<strong>语法</strong>：</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line">    <span class="token selector">选择器1 选择器2 选择器3 ...... 选择器n</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> </span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>（先写祖先，再写后代） 选择器之间，用空格隔开，空格可以理解为：&quot; xxx 中的&quot;，其实就是后代的意思。 选择器 1234....n ，可以是我们之前学的任何一种选择器。
<strong>举例</strong>：</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token comment">/* 选中ul中的所有li */</span></span>
<span class="line"><span class="token selector">ul li</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">/* 选中ul中所有li中的a */</span></span>
<span class="line"><span class="token selector">ul li a</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">color</span><span class="token punctuation">:</span> orange<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">/* 选中类名为subject元素中的所有li */</span></span>
<span class="line"><span class="token selector">.subject li</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">/* 选中类名为subject元素中的所有类名为front-end的li */</span></span>
<span class="line"><span class="token selector">.subject li.front-end</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意</strong>：</p>
<blockquote>
<ol>
<li>后代选择器，最终选择的是后代，不选中祖先。</li>
<li>儿子、孙子、重孙子，都算是后代。</li>
<li>结构一定要符合之前讲的 HTML 嵌套要求，例如：不能 p 中写 h1 ~ h6 。</li>
</ol>
</blockquote>
<h3 id="_2-2-5-子代选择器" tabindex="-1"><a class="header-anchor" href="#_2-2-5-子代选择器"><span>2.2.5 子代选择器</span></a></h3>
<p><strong>作用</strong>：选中指定元素中，符合要求的子元素（儿子元素）。（先写父，再写子）
子代选择器又称：子元素选择器、子选择器。
<strong>语法</strong>：</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token selector">选择器1 > 选择器2 > 选择器3 > ...... 选择器n</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> </span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>选择器之间，用 &gt; 隔开， &gt; 可以理解为：&quot; xxx 的子代&quot;，其实就是儿子的意思。 选择器 1234....n ，可以是我们之前学的任何一种选择器。
<strong>举例</strong>：</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token comment">/* div中的子代a元素 */</span></span>
<span class="line"><span class="token selector">div>a</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">/* 类名为persons的元素中的子代a元素 */</span></span>
<span class="line"><span class="token selector">.persons>a</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意</strong>：</p>
<blockquote>
<ol>
<li>子代选择器，最终选择的是子代，不是父级。</li>
<li>子、孙子、重孙子、重重孙子 ...... 统称后代！，子就是指儿子。</li>
</ol>
</blockquote>
<p><img src="/style/htmlcss/css2/1737864678470.jpg" alt=""></p>
<h3 id="_2-2-6-兄弟选择器" tabindex="-1"><a class="header-anchor" href="#_2-2-6-兄弟选择器"><span>2.2.6 兄弟选择器</span></a></h3>
<h4 id="相邻兄弟选择器" tabindex="-1"><a class="header-anchor" href="#相邻兄弟选择器"><span>相邻兄弟选择器：</span></a></h4>
<p><strong>作用</strong>：选中指定元素后，符合条件的相邻兄弟元素。
所谓相邻，就是紧挨着他的下一个，简记：睡在我下铺的兄弟。</p>
<p><strong>语法</strong>：</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token selector">选择器1+选择器2</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> </span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong>示例</strong>：</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token comment">/* 选中div后相邻的兄弟p元素 */</span></span>
<span class="line"><span class="token selector">div+p</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">color</span><span class="token punctuation">:</span>red<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="通用兄弟选择器" tabindex="-1"><a class="header-anchor" href="#通用兄弟选择器"><span>通用兄弟选择器：</span></a></h4>
<p><strong>作用</strong>：选中指定元素后，符合条件的所有兄弟元素。
（简记：睡在我下铺的所有兄弟）</p>
<p><strong>语法</strong>：</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token selector">选择器1~选择器2</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> </span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong>实例</strong>：</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token comment">/* 选中div后的所有的兄弟p元素 */</span></span>
<span class="line"><span class="token selector">div~p</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">color</span><span class="token punctuation">:</span>red<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意</strong>：</p>
<blockquote>
<p>两种兄弟选择器，选择的是下面的兄弟。</p>
</blockquote>
<h3 id="_2-2-7-属性选择器" tabindex="-1"><a class="header-anchor" href="#_2-2-7-属性选择器"><span>2.2.7 属性选择器</span></a></h3>
<p><strong>作用</strong>：选中属性值符合一定要求的元素。</p>
<p><strong>语法</strong>：</p>
<ol>
<li>[属性名] 选中具有某个属性的元素。</li>
<li>[属性名=&quot;值&quot;] 选中包含某个属性，且属性值等于指定值的元素。</li>
<li>[属性名^=&quot;值&quot;] 选中包含某个属性，且属性值以指定的值开头的元素。</li>
<li>[属性名$=&quot;值&quot;] 选中包含某个属性，且属性值以指定的值结尾的元素。</li>
<li>[属性名*=“值”] 选择包含某个属性，属性值包含指定值的元素。</li>
</ol>
<p><strong>举例</strong>：</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token comment">/* 选中具有title属性的元素 */</span></span>
<span class="line"><span class="token selector">div[title]</span><span class="token punctuation">{</span><span class="token property">color</span><span class="token punctuation">:</span>red<span class="token punctuation">;</span><span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">/* 选中title属性值为atguigu的元素 */</span></span>
<span class="line"><span class="token selector">div[title="atguigu"]</span><span class="token punctuation">{</span><span class="token property">color</span><span class="token punctuation">:</span>red<span class="token punctuation">;</span><span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">/* 选中title属性值以a开头的元素 */</span></span>
<span class="line"><span class="token selector">div[title^="a"]</span><span class="token punctuation">{</span><span class="token property">color</span><span class="token punctuation">:</span>red<span class="token punctuation">;</span><span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">/* 选中title属性值以u结尾的元素 */</span></span>
<span class="line"><span class="token selector">div[title$="u"]</span><span class="token punctuation">{</span><span class="token property">color</span><span class="token punctuation">:</span>red<span class="token punctuation">;</span><span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">/* 选中title属性值包含g的元素 */</span></span>
<span class="line"><span class="token selector">div[title*="g"]</span><span class="token punctuation">{</span><span class="token property">color</span><span class="token punctuation">:</span>red<span class="token punctuation">;</span><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-8-伪类选择器" tabindex="-1"><a class="header-anchor" href="#_2-2-8-伪类选择器"><span>2.2.8 伪类选择器</span></a></h3>
<p><strong>作用</strong>：选中特殊状态的元素。
如何理解“伪” ? — 虚假的，不是真的。
如何理解“伪类”？ — 像类( class )，但不是类，是元素的一种特殊状态。</p>
<p><strong>常用的伪类选择器</strong>：</p>
<h4 id="_1-动态伪类" tabindex="-1"><a class="header-anchor" href="#_1-动态伪类"><span>1 动态伪类：</span></a></h4>
<ol>
<li>:link 超链接未被访问的状态。</li>
<li>:visited 超链接访问过的状态。</li>
<li>:hover 鼠标悬停在元素上的状态。</li>
<li>:active 元素激活的状态。
<ul>
<li>什么是激活？—— 按下鼠标不松开。</li>
<li>注意点：<span style="color:red">遵循 LVHA 的顺序，即： link 、 visited 、 hover 、 active 。</span></li>
</ul>
</li>
<li>:focus 获取焦点的元素。
<ul>
<li>表单类元素才能使用 :focus 伪类。</li>
<li>当用户：点击元素、触摸元素、或通过键盘的 “ tab ” 键等方式，选择元素时，就是获 得焦点。</li>
</ul>
</li>
</ol>
<h4 id="_2-结构伪类" tabindex="-1"><a class="header-anchor" href="#_2-结构伪类"><span>2 结构伪类</span></a></h4>
<ul>
<li>
<p>常用：</p>
<ul>
<li>:first-child 所有兄弟元素中的第一个。</li>
<li>:last-child 所有兄弟元素中的最后一个。</li>
<li>:nth-child(n) 所有兄弟元素中的第 n 个。</li>
<li>:first-of-type 所有同类型兄弟元素中的第一个。</li>
<li>:last-of-type 所有同类型兄弟元素中的最后一个。</li>
<li>:nth-of-type(n) 所有同类型兄弟元素中的 第n个 。</li>
</ul>
<blockquote>
<p><strong>关于 n 的值</strong>：</p>
<ol>
<li>0 或 不写 ：什么都选不中 —— 几乎不用。</li>
<li>n ：选中所有子元素 —— 几乎不用。</li>
<li>1~正无穷的整数 ：选中对应序号的子元素。</li>
<li>2n 或 even ：选中序号为偶数的子元素。</li>
<li>2n+1 或 odd ：选中序号为奇数的子元素。</li>
<li>-n+3 ：选中的是前 3 个。</li>
</ol>
</blockquote>
</li>
<li>
<p>了解即可：</p>
<ul>
<li>:nth-last-child(n) 所有兄弟元素中的倒数第 n 个。</li>
<li>:nth-last-of-type(n) 所有同类型兄弟元素中的 倒数第n个 。</li>
<li>:only-child 选择没有兄弟的元素（独生子女）。</li>
<li>:only-of-type 选择没有同类型兄弟的元素。</li>
<li>:root 根元素。</li>
<li>:empty 内容为空元素（空格也算内容）。</li>
</ul>
</li>
</ul>
<h4 id="_3-否定伪类" tabindex="-1"><a class="header-anchor" href="#_3-否定伪类"><span>3 否定伪类：</span></a></h4>
<p>:not(选择器) 排除满足括号中条件的元素。</p>
<h4 id="_4-ui伪类" tabindex="-1"><a class="header-anchor" href="#_4-ui伪类"><span>4 UI伪类：</span></a></h4>
<ul>
<li>:checked 被选中的复选框或单选按钮。</li>
<li>:enable 可用的表单元素（没有 disabled 属性）。</li>
<li>:disabled 不可用的表单元素（有 disabled 属性）。</li>
</ul>
<h4 id="_5-目标伪类-了解" tabindex="-1"><a class="header-anchor" href="#_5-目标伪类-了解"><span>5 目标伪类（了解）</span></a></h4>
<p>:target 选中锚点指向的元素。</p>
<h4 id="_6-语言伪类-了解" tabindex="-1"><a class="header-anchor" href="#_6-语言伪类-了解"><span>6 语言伪类（了解）</span></a></h4>
<p>:lang() 根据指定的语言选择元素（本质是看 lang 属性的值）。</p>
<h3 id="_2-2-9-伪元素选择器" tabindex="-1"><a class="header-anchor" href="#_2-2-9-伪元素选择器"><span>2.2.9 伪元素选择器</span></a></h3>
<p><strong>作用</strong>：选中元素中的一些特殊位置。
<strong>常用伪元素</strong>：</p>
<ul>
<li>::first-letter 选中元素中的第一个文字。</li>
<li>::first-line 选中元素中的第一行文字。</li>
<li>::selection 选中被鼠标选中的内容。</li>
<li>::placeholder 选中输入框的提示文字。</li>
<li>::before 在元素最开始的位置，创建一个子元素（必须用 content 属性指定内容）。</li>
<li>::after 在元素最后的位置，创建一个子元素（必须用 content 属性指定内容）。</li>
</ul>
<h2 id="_3-选择器的优先级-权重" tabindex="-1"><a class="header-anchor" href="#_3-选择器的优先级-权重"><span>3. 选择器的优先级（权重）</span></a></h2>
<p>通过不同的选择器，选中相同的元素 ，并且为相同的样式名设置不同的值时，就发生了样式的冲突。
到底应用哪个样式，此时就需要看优先级了。</p>
<h3 id="_3-1-简单描述" tabindex="-1"><a class="header-anchor" href="#_3-1-简单描述"><span>3.1 简单描述</span></a></h3>
<p>行内样式 &gt; ID选择器 &gt; 类选择器 &gt; 元素选择器 &gt; 通配选择器。</p>
<h3 id="_3-2-详细描述" tabindex="-1"><a class="header-anchor" href="#_3-2-详细描述"><span>3.2 详细描述</span></a></h3>
<ul>
<li>计算方式：每个选择器，都可计算出一组权重，格式为： (a,b,c)
a : ID 选择器的个数。
b : 类、伪类、属性 选择器的个数。
c : 元素、伪元素 选择器的个数。</li>
</ul>
<p><strong>例如</strong>：</p>
<table>
<thead>
<tr>
<th>选择器</th>
<th>权重</th>
</tr>
</thead>
<tbody>
<tr>
<td>ul&gt;li</td>
<td>(0,0,2)</td>
</tr>
<tr>
<td>div ul&gt;li p a span</td>
<td>(0,0,6)</td>
</tr>
<tr>
<td>#atguigu .slogan</td>
<td>(1,1,0)</td>
</tr>
<tr>
<td>#atguigu .slogan a</td>
<td>(1,1,1)</td>
</tr>
<tr>
<td>#atguigu .slogan a:hover</td>
<td>(1,2,1)</td>
</tr>
</tbody>
</table>
<ul>
<li>比较规则：按照从左到右的顺序，依次比较大小，当前位胜出后，后面的不再对比，例如：
(1,0,0) &gt; (0,2,2)
(1,1,0) &gt; (1,0,3)
(1,1,3) &gt; (1,1,2)</li>
<li>特殊规则：
<ul>
<li>行内样式权重大于所有选择器。</li>
<li>!important 的权重，大于行内样式，大于所有选择器，权重最高！</li>
</ul>
</li>
<li>图示：</li>
</ul>
<p><img src="/style/htmlcss/css2/1737864693708.jpg" alt=""></p>
</div></template>


