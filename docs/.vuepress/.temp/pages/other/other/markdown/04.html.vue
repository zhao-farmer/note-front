<template><div><h1 id="四、-html-内嵌" tabindex="-1"><a class="header-anchor" href="#四、-html-内嵌"><span>四、 HTML 内嵌</span></a></h1>
<h2 id="_1-文字" tabindex="-1"><a class="header-anchor" href="#_1-文字"><span>1. 文字</span></a></h2>
<h3 id="_1-字体" tabindex="-1"><a class="header-anchor" href="#_1-字体"><span>（1）字体</span></a></h3>
<ul>
<li>语法：<code v-pre>&lt;font face = &quot; 楷体 &quot;&gt;我是楷体字&lt;/font&gt;</code></li>
<li>样例：<font face = " 楷体 ">我是楷体字</font></li>
</ul>
<h3 id="_2-大小" tabindex="-1"><a class="header-anchor" href="#_2-大小"><span>（2）大小</span></a></h3>
<ul>
<li>语法：<code v-pre>&lt;font size = 5 &gt;文字大小为五&lt;/font&gt;</code></li>
<li>样例：<font size = 5 >文字大小为五</font></li>
</ul>
<h3 id="_3-颜色" tabindex="-1"><a class="header-anchor" href="#_3-颜色"><span>（3）颜色</span></a></h3>
<ul>
<li>语法：<code v-pre>&lt;font color = #1E90FF &gt;文字颜色为道奇蓝&lt;/font&gt;</code></li>
<li>样例：<font color = #1E90FF >文字颜色为道奇蓝</font></li>
</ul>
<blockquote>
<p>说明：color 属性可以为颜色的英文名称，也可以是十六进制表示。</p>
</blockquote>
<h3 id="_4-首行缩进" tabindex="-1"><a class="header-anchor" href="#_4-首行缩进"><span>（4）首行缩进</span></a></h3>
<ul>
<li>语法：<code v-pre>这是中文 &amp;emsp; 半角空格，这是英文 &amp;nbsp; 半角空格。</code></li>
<li>样例：这是中文   半角空格，这是英文   半角空格。</li>
</ul>
<blockquote>
<p>说明：<code v-pre>表示全角空格（中文） 【&amp;emsp; 或 &amp;#8195;】，表示半角空格（英文）【&amp;nbsp; 或 &amp;#160;】。</code></p>
</blockquote>
<h4 id="_5-对齐方式" tabindex="-1"><a class="header-anchor" href="#_5-对齐方式"><span>（5）对齐方式</span></a></h4>
<ul>
<li>语法：</li>
</ul>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">align</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>left<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>这是左对齐<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span> </span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>center</span><span class="token punctuation">></span></span>这是居中对齐<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>center</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">align</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>right<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>这是右对齐<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>样例：</li>
</ul>
<p align="left">这是左对齐</p> 
<center>这是居中对齐</center>
<p align="right">这是右对齐</p>
<h2 id="_2-其它" tabindex="-1"><a class="header-anchor" href="#_2-其它"><span>2. 其它</span></a></h2>
<h3 id="_1-水平分割线" tabindex="-1"><a class="header-anchor" href="#_1-水平分割线"><span>（1）水平分割线</span></a></h3>
<ul>
<li>语法： <code v-pre>&lt;hr&gt;</code></li>
<li>样例：</li>
</ul>
<hr>
<h3 id="_2-强制换行" tabindex="-1"><a class="header-anchor" href="#_2-强制换行"><span>（2）强制换行</span></a></h3>
<ul>
<li>语法：<code v-pre>这是一行 &lt;br&gt; &amp;emsp;&amp;emsp;&amp;emsp;&amp;emsp;&amp;emsp;这是另一行</code></li>
<li>样例：</li>
</ul>
<p>这是一行 <br>      这是另一行</p>
<h3 id="_3-强制分段" tabindex="-1"><a class="header-anchor" href="#_3-强制分段"><span>（3）强制分段</span></a></h3>
<ul>
<li>语法：</li>
</ul>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token entity named-entity" title="&emsp;">&amp;emsp;</span><span class="token entity named-entity" title="&emsp;">&amp;emsp;</span><span class="token entity named-entity" title="&emsp;">&amp;emsp;</span>这是一个段落。<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span> </span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token entity named-entity" title="&emsp;">&amp;emsp;</span><span class="token entity named-entity" title="&emsp;">&amp;emsp;</span><span class="token entity named-entity" title="&emsp;">&amp;emsp;</span>这是另外一个段落。<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>样例：</li>
</ul>
<p>&emsp;&emsp;&emsp;这是一个段落。</p> <p>&emsp;&emsp;&emsp;这是另外一个段落。</p>
<h3 id="_4-插入链接" tabindex="-1"><a class="header-anchor" href="#_4-插入链接"><span>（4）插入链接</span></a></h3>
<ul>
<li>语法：</li>
</ul>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span> https://www.baidu.com <span class="token punctuation">"</span></span><span class="token punctuation">></span></span>百度一下，你就知道<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>样例：</li>
</ul>
<p><a href=" https://www.baidu.com ">百度一下，你就知道</a></p>
<h3 id="_4-图片大小" tabindex="-1"><a class="header-anchor" href="#_4-图片大小"><span>（4）图片大小</span></a></h3>
<ul>
<li>指定图片的大小的语法：</li>
</ul>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>图片链接<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>图片描述<span class="token punctuation">"</span></span> <span class="token attr-name">width</span> <span class="token attr-value"><span class="token punctuation attr-equals">=</span> <span class="token punctuation">"</span>图片宽度<span class="token punctuation">"</span></span> <span class="token attr-name">height</span> <span class="token attr-value"><span class="token punctuation attr-equals">=</span> <span class="token punctuation">"</span>图片长度<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>样例：</li>
</ul>
<img src="/other/other/markdown/markdown-test.png" alt="图片描述" width = "200" height = "200" />
<h3 id="_5-背景颜色" tabindex="-1"><a class="header-anchor" href="#_5-背景颜色"><span>（5）背景颜色</span></a></h3>
<ul>
<li>借助 table tr td 等表格标签的 bgcolor 属性来实现背景色的功能：</li>
</ul>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>table</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">bgcolor</span> <span class="token attr-value"><span class="token punctuation attr-equals">=</span> yellow</span><span class="token punctuation">></span></span>背景色是：黄色<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>table</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>样例：</p>
<table><tr><td bgcolor = yellow>背景色是：黄色</td></tr></table>
<h2 id="_3-使用html5" tabindex="-1"><a class="header-anchor" href="#_3-使用html5"><span>3. 使用html5</span></a></h2>
<p>上面都不推荐，直接使用css样式</p>
<h3 id="_1-行内样式" tabindex="-1"><a class="header-anchor" href="#_1-行内样式"><span>（1） 行内样式</span></a></h3>
<ul>
<li>语法</li>
</ul>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">font-size</span><span class="token punctuation">:</span>18px<span class="token punctuation">;</span><span class="token property">color</span><span class="token punctuation">:</span>blue<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>这是一段测试语句<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>样例</li>
</ul>
<p><span style="font-size:18px;color:blue;">这是一段测试语句</span></p>
<h3 id="_2-内部样式" tabindex="-1"><a class="header-anchor" href="#_2-内部样式"><span>（2） 内部样式</span></a></h3>
<p>建议写在markdown 文件的头部，如果是vue加入scoped属性</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css"></span>
<span class="line"><span class="token selector">.myClass</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">font-size</span><span class="token punctuation">:</span>18px<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">color</span><span class="token punctuation">:</span>red<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>myClass<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>这是一段测试语句<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><span class="myClass">这是一段测试语句</span></p>
</div></template>



<style scoped>
.myClass{
    font-size:18px;
    color:red;
}
</style>