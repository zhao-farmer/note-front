<template><div><h1 id="八、函数" tabindex="-1"><a class="header-anchor" href="#八、函数"><span>八、函数</span></a></h1>
<h2 id="_8-1-逻辑函数" tabindex="-1"><a class="header-anchor" href="#_8-1-逻辑函数"><span>8.1 逻辑函数</span></a></h2>
<h3 id="_8-1-1-if" tabindex="-1"><a class="header-anchor" href="#_8-1-1-if"><span>8.1.1 if</span></a></h3>
<p><strong>编译前LESS</strong></p>
<div class="language-less line-numbers-mode" data-highlighter="prismjs" data-ext="less"><pre v-pre><code><span class="line"><span class="token comment">// less 代码编辑</span></span>
<span class="line"><span class="token variable">@some<span class="token punctuation">:</span></span> foo<span class="token punctuation">;</span></span>
<span class="line"><span class="token selector">div</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">margin</span><span class="token punctuation">:</span> <span class="token function">if</span><span class="token punctuation">(</span><span class="token punctuation">(</span>2 > 1<span class="token punctuation">)</span><span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 3px<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">color</span><span class="token punctuation">:</span>  <span class="token function">if</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token function">iscolor</span><span class="token punctuation">(</span><span class="token variable">@some</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token variable">@some</span><span class="token punctuation">,</span> black<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.test</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token function">if</span><span class="token punctuation">(</span><span class="token punctuation">(</span>not <span class="token punctuation">(</span>true<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> foo1<span class="token punctuation">,</span> bar1<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">content</span><span class="token punctuation">:</span>  <span class="token function">if</span><span class="token punctuation">(</span><span class="token punctuation">(</span>true<span class="token punctuation">)</span> and <span class="token punctuation">(</span>2 > 1<span class="token punctuation">)</span><span class="token punctuation">,</span> foo2<span class="token punctuation">,</span> bar2<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token function">if</span><span class="token punctuation">(</span><span class="token punctuation">(</span>false<span class="token punctuation">)</span> or <span class="token punctuation">(</span><span class="token function">isstring</span><span class="token punctuation">(</span><span class="token string">"boo!"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> foo3<span class="token punctuation">,</span> bar3<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译后CSS</strong></p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token comment">/* 编译后的 css */</span></span>
<span class="line"><span class="token selector">div</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">color</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.test</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">content</span><span class="token punctuation">:</span> bar1<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">content</span><span class="token punctuation">:</span> foo2<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">content</span><span class="token punctuation">:</span> foo3<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-1-2boolean" tabindex="-1"><a class="header-anchor" href="#_8-1-2boolean"><span>8.1.2boolean</span></a></h3>
<p>评估为真或假</p>
<p>你可以 &quot;store&quot; 布尔测试以供以后在守卫中进行评估或 if()。</p>
<p><strong>编译前LESS</strong></p>
<div class="language-less line-numbers-mode" data-highlighter="prismjs" data-ext="less"><pre v-pre><code><span class="line"><span class="token comment">// less 代码编辑</span></span>
<span class="line"><span class="token variable">@bg<span class="token punctuation">:</span></span> black<span class="token punctuation">;</span></span>
<span class="line"><span class="token variable">@bg-light<span class="token punctuation">:</span></span> <span class="token function">boolean</span><span class="token punctuation">(</span><span class="token function">luma</span><span class="token punctuation">(</span><span class="token variable">@bg</span><span class="token punctuation">)</span> > 50%<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token selector">div</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token variable">@bg</span><span class="token punctuation">;</span> </span>
<span class="line">  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">if</span><span class="token punctuation">(</span><span class="token variable">@bg-light</span><span class="token punctuation">,</span> black<span class="token punctuation">,</span> white<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译后CSS</strong></p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token comment">/* 编译后的 css */</span></span>
<span class="line"><span class="token selector">div</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">background</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-2字符串函数" tabindex="-1"><a class="header-anchor" href="#_8-2字符串函数"><span>8.2字符串函数</span></a></h2>
<h3 id="_8-2-1escape" tabindex="-1"><a class="header-anchor" href="#_8-2-1escape"><span>8.2.1escape</span></a></h3>
<p>将 URL-encoding 应用于在输入字符串中找到的特殊字符。</p>
<ul>
<li>这些字符未编码： ,、/、?、@、&amp;、+、'、~、! 和 $。</li>
<li>最常见的编码字符是： <code v-pre>\&lt;space\&gt;</code>、#、^、(、)、{、}、|、:、&gt;、&lt;、;、<code v-pre>]</code>、<code v-pre>[</code> 和 =。</li>
</ul>
<p>参数： string: 要转义的字符串。</p>
<p>返回： 不带引号转义 string 内容。</p>
<p><strong>编译前LESS</strong></p>
<div class="language-less line-numbers-mode" data-highlighter="prismjs" data-ext="less"><pre v-pre><code><span class="line"><span class="token comment">// less 代码编辑</span></span>
<span class="line"></span>
<span class="line"><span class="token function">escape</span><span class="token punctuation">(</span><span class="token string">'a=1'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译后CSS</strong></p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token comment">/* 编译后的 css */</span></span>
<span class="line"></span>
<span class="line">a%3D1</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>注意： 如果参数不是字符串，则未定义输出。 当前的实现在颜色上返回 undefined，在任何其他类型的参数上返回不变的输入。 不应依赖此行为，并且将来可能会更改。</p>
</blockquote>
<h3 id="_8-2-2-e" tabindex="-1"><a class="header-anchor" href="#_8-2-2-e"><span>8.2.2 e</span></a></h3>
<p>字符串转义。</p>
<p>它期望字符串作为参数并按原样返回其内容，但不带引号。 它可用于输出无效 CSS 语法或使用 Less 无法识别的专有语法的 CSS 值。</p>
<p>参数： string - 要转义的字符串。</p>
<p>返回： string - 转义字符串，不带引号。</p>
<p><strong>编译前LESS</strong></p>
<div class="language-less line-numbers-mode" data-highlighter="prismjs" data-ext="less"><pre v-pre><code><span class="line"><span class="token comment">// less 代码编辑</span></span>
<span class="line"><span class="token variable">@mscode<span class="token punctuation">:</span></span> <span class="token string">"ms:alwaysHasItsOwnSyntax.For.Stuff()"</span> <span class="token punctuation">;</span></span>
<span class="line"><span class="token selector">.test</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">filter</span><span class="token punctuation">:</span> <span class="token function">e</span><span class="token punctuation">(</span><span class="token variable">@mscode</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译后CSS</strong></p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token comment">/* 编译后的 css */</span></span>
<span class="line"><span class="token selector">.test</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">filter</span><span class="token punctuation">:</span> <span class="token property">ms</span><span class="token punctuation">:</span>alwaysHasItsOwnSyntax.For.<span class="token function">Stuff</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-2-3-格式" tabindex="-1"><a class="header-anchor" href="#_8-2-3-格式"><span>8.2.3 % 格式</span></a></h3>
<p>函数 %(string, arguments ...) 格式化一个字符串。</p>
<p>第一个参数是带占位符的字符串。 所有占位符都以百分比符号 % 开头，后跟字母 s、S、d、D、a 或 A。 其余参数包含用于替换占位符的表达式。 如果你需要打印百分比符号，请使用另一个百分比 %% 将其转义。</p>
<p>如果你需要将特殊字符转义为它们的 utf-8 转义码，请使用大写占位符。 该函数转义除 ()'~! 以外的所有特殊字符。 空格编码为 %20。 小写占位符保留特殊字符。</p>
<p>占位符：</p>
<ul>
<li>d, D, a, A - 可以替换为任何类型的参数（颜色、数字、转义值、表达式...）。 如果将它们与字符串结合使用，将使用整个字符串 - 包括它的引号。 但是，引号按原样放置在字符串中，它们不会被 &quot;/&quot; 或类似的东西转义。</li>
<li>s, S - 可以用任何表达式替换。 如果将它与字符串一起使用，则仅使用字符串值 - 省略引号。</li>
</ul>
<p>参数：</p>
<ul>
<li>string: 带占位符的格式字符串，</li>
<li>anything* : 替换占位符的值。</li>
</ul>
<p>返回： 格式化 string。</p>
<p><strong>编译前LESS</strong></p>
<div class="language-less line-numbers-mode" data-highlighter="prismjs" data-ext="less"><pre v-pre><code><span class="line"><span class="token comment">// less 代码编辑</span></span>
<span class="line"><span class="token selector">.test</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">format-a-d</span><span class="token punctuation">:</span> %<span class="token punctuation">(</span><span class="token string">"repetitions: %a file: %d"</span><span class="token punctuation">,</span> 1 <span class="token operator">+</span> 2<span class="token punctuation">,</span> <span class="token string">"directory/file.less"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">format-a-d-upper</span><span class="token punctuation">:</span> %<span class="token punctuation">(</span><span class="token string">'repetitions: %A file: %D'</span><span class="token punctuation">,</span> 1 <span class="token operator">+</span> 2<span class="token punctuation">,</span> <span class="token string">"directory/file.less"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">format-s</span><span class="token punctuation">:</span> %<span class="token punctuation">(</span><span class="token string">"repetitions: %s file: %s"</span><span class="token punctuation">,</span> 1 <span class="token operator">+</span> 2<span class="token punctuation">,</span> <span class="token string">"directory/file.less"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">format-s-upper</span><span class="token punctuation">:</span> %<span class="token punctuation">(</span><span class="token string">'repetitions: %S file: %S'</span><span class="token punctuation">,</span> 1 <span class="token operator">+</span> 2<span class="token punctuation">,</span> <span class="token string">"directory/file.less"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译后CSS</strong></p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token comment">/* 编译后的 css */</span></span>
<span class="line"><span class="token selector">.test</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">format-a-d</span><span class="token punctuation">:</span> <span class="token string">"repetitions: 3 file: "</span>directory/file.less<span class="token string">""</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">format-a-d-upper</span><span class="token punctuation">:</span> <span class="token string">'repetitions: 3 file: %22directory%2Ffile.less%22'</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">format-s</span><span class="token punctuation">:</span> <span class="token string">"repetitions: 3 file: directory/file.less"</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">format-s-upper</span><span class="token punctuation">:</span> <span class="token string">'repetitions: 3 file: directory%2Ffile.less'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-2-4replace" tabindex="-1"><a class="header-anchor" href="#_8-2-4replace"><span>8.2.4replace</span></a></h3>
<p>替换字符串中的文本。</p>
<p>参数：</p>
<ul>
<li>string: 要搜索和替换的字符串。</li>
<li>pattern: 要搜索的字符串或正则表达式模式。</li>
<li>replacement: 用于替换匹配模式的字符串。</li>
<li>flags: （可选）正则表达式标志。</li>
</ul>
<p>返回： 具有替换值的字符串。</p>
<p><strong>编译前LESS</strong></p>
<div class="language-less line-numbers-mode" data-highlighter="prismjs" data-ext="less"><pre v-pre><code><span class="line"><span class="token comment">// less 代码编辑</span></span>
<span class="line"><span class="token selector">.test</span><span class="token punctuation">{</span></span>
<span class="line">   <span class="token property">content</span><span class="token punctuation">:</span> <span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">"Hello, Mars?"</span><span class="token punctuation">,</span> <span class="token string">"Mars\?"</span><span class="token punctuation">,</span> <span class="token string">"Earth!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">   <span class="token property">content</span><span class="token punctuation">:</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">"One + one = 4"</span><span class="token punctuation">,</span> <span class="token string">"one"</span><span class="token punctuation">,</span> <span class="token string">"2"</span><span class="token punctuation">,</span> <span class="token string">"gi"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">   <span class="token property">content</span><span class="token punctuation">:</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">'This is a string.'</span><span class="token punctuation">,</span> <span class="token string">"(string)\.$"</span><span class="token punctuation">,</span> <span class="token string">"new $1."</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">   <span class="token property">content</span><span class="token punctuation">:</span><span class="token function">replace</span><span class="token punctuation">(</span>~<span class="token string">"bar-1"</span><span class="token punctuation">,</span> <span class="token string">'1'</span><span class="token punctuation">,</span> <span class="token string">'2'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译后CSS</strong></p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token comment">/* 编译后的 css */</span></span>
<span class="line"><span class="token selector">.test</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">"Hello, Earth!"</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">"2 + 2 = 4"</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">'This is a new string.'</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">content</span><span class="token punctuation">:</span> bar-2<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-3列表函数" tabindex="-1"><a class="header-anchor" href="#_8-3列表函数"><span>8.3列表函数</span></a></h2>
<h3 id="_8-3-1-length" tabindex="-1"><a class="header-anchor" href="#_8-3-1-length"><span>8.3.1 length</span></a></h3>
<p>返回值列表中的元素数。</p>
<p><strong>编译前LESS</strong></p>
<div class="language-less line-numbers-mode" data-highlighter="prismjs" data-ext="less"><pre v-pre><code><span class="line"><span class="token comment">// less 代码编辑</span></span>
<span class="line"><span class="token variable">@list<span class="token punctuation">:</span></span> <span class="token string">"banana"</span><span class="token punctuation">,</span> <span class="token string">"tomato"</span><span class="token punctuation">,</span> <span class="token string">"potato"</span><span class="token punctuation">,</span> <span class="token string">"peach"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token variable">@n<span class="token punctuation">:</span></span> <span class="token function">length</span><span class="token punctuation">(</span><span class="token variable">@list</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token selector">.test</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token variable">@n</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译后CSS</strong></p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token comment">/* 编译后的 css */</span></span>
<span class="line"><span class="token selector">.test</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">content</span><span class="token punctuation">:</span> 4<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-3-2-extract" tabindex="-1"><a class="header-anchor" href="#_8-3-2-extract"><span>8.3.2 extract</span></a></h3>
<p>返回列表中指定位置的值。</p>
<p><strong>编译前LESS</strong></p>
<div class="language-less line-numbers-mode" data-highlighter="prismjs" data-ext="less"><pre v-pre><code><span class="line"><span class="token comment">// less 代码编辑</span></span>
<span class="line"><span class="token variable">@list<span class="token punctuation">:</span></span> apple<span class="token punctuation">,</span> pear<span class="token punctuation">,</span> coconut<span class="token punctuation">,</span> orange<span class="token punctuation">;</span></span>
<span class="line"><span class="token selector">.test</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">content</span><span class="token punctuation">:</span>  <span class="token function">extract</span><span class="token punctuation">(</span><span class="token variable">@list</span><span class="token punctuation">,</span> 3<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译后CSS</strong></p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token comment">/* 编译后的 css */</span></span>
<span class="line"><span class="token selector">.test</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">content</span><span class="token punctuation">:</span> coconut<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-3-3-range" tabindex="-1"><a class="header-anchor" href="#_8-3-3-range"><span>8.3.3 range</span></a></h3>
<p>生成跨越一系列值的列表
参数</p>
<ul>
<li>start - （可选）起始值，例如 1 或 1 像素</li>
<li>end - 最终值，例如 5px</li>
<li>step - （可选）增加的数量</li>
</ul>
<p><strong>编译前LESS</strong></p>
<div class="language-less line-numbers-mode" data-highlighter="prismjs" data-ext="less"><pre v-pre><code><span class="line"><span class="token comment">// less 代码编辑</span></span>
<span class="line"><span class="token selector">.test1</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token function">range</span><span class="token punctuation">(</span>4<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">// 作用域内每个值的输出将与 end 值的单位相同。 </span></span>
<span class="line"><span class="token selector">.test2</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token function">range</span><span class="token punctuation">(</span>10px<span class="token punctuation">,</span> 30px<span class="token punctuation">,</span> 10<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译后CSS</strong></p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token comment">/* 编译后的 css */</span></span>
<span class="line"><span class="token selector">.test1</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">content</span><span class="token punctuation">:</span> 1 2 3 4<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.test2</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">content</span><span class="token punctuation">:</span> 10px 20px 30px<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-3-4-each" tabindex="-1"><a class="header-anchor" href="#_8-3-4-each"><span>8.3.4 each</span></a></h3>
<p>将规则集的评估绑定到列表的每个成员。
参数</p>
<ul>
<li>list - 逗号或空格分隔的值列表。</li>
<li>rules - 匿名规则集/混入</li>
</ul>
<p><strong>编译前LESS</strong></p>
<div class="language-less line-numbers-mode" data-highlighter="prismjs" data-ext="less"><pre v-pre><code><span class="line"><span class="token comment">// less 代码编辑</span></span>
<span class="line"><span class="token variable">@selectors<span class="token punctuation">:</span></span> blue<span class="token punctuation">,</span> green<span class="token punctuation">,</span> red<span class="token punctuation">;</span></span>
<span class="line"><span class="token function">each</span><span class="token punctuation">(</span><span class="token atrule">@selectors,</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token selector">.sel-@{value}</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">a</span><span class="token punctuation">:</span> b<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译后CSS</strong></p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token comment">/* 编译后的 css */</span></span>
<span class="line"><span class="token selector">.sel-blue</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">a</span><span class="token punctuation">:</span> b<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.sel-green</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">a</span><span class="token punctuation">:</span> b<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.sel-red</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">a</span><span class="token punctuation">:</span> b<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>默认情况下，每个规则集按列表成员绑定到 @value、@key 和 @index 变量。 对于大多数列表，@key 和 @index 将被分配相同的值（数字位置，从 1 开始）。 但是，你也可以将规则集本身用作结构化列表。 如：</p>
<p><strong>编译前LESS</strong></p>
<div class="language-less line-numbers-mode" data-highlighter="prismjs" data-ext="less"><pre v-pre><code><span class="line"><span class="token comment">// less 代码编辑</span></span>
<span class="line"><span class="token atrule">@set<span class="token punctuation">:</span></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">one</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">two</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">three</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.set</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">each</span><span class="token punctuation">(</span><span class="token atrule">@set,</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">@{key}-@{index}</span><span class="token punctuation">:</span> <span class="token variable">@value</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译后CSS</strong></p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token comment">/* 编译后的 css */</span></span>
<span class="line"><span class="token selector">.set</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">one-1</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">two-2</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">three-3</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当然，由于你可以为每个规则集调用调用带有保护的混合，这使得 each() 成为一个非常强大的功能。
在 each() 中设置变量名称
你不必在 each() 函数中使用 @value、@key 和 @index。 在 Less 3.7 中，通过 each() 函数，Less 引入了匿名混合的概念，以后可能会扩展到语法的其他部分。
匿名混合使用 #() 或 .() 的形式，以 . 或 # 开头，就像常规混合一样。 在 each() 中，可以这样使用：</p>
<p><strong>编译前LESS</strong></p>
<div class="language-less line-numbers-mode" data-highlighter="prismjs" data-ext="less"><pre v-pre><code><span class="line"><span class="token comment">// less 代码编辑</span></span>
<span class="line"><span class="token selector">.set-2()</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">one</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">two</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">three</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.set-2</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// Call mixin and iterate each rule</span></span>
<span class="line">    each<span class="token selector">(.set-2(), .(<span class="token variable">@v</span>, <span class="token variable">@k</span>, <span class="token variable">@i</span>)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">@{k}-@{i}</span><span class="token punctuation">:</span> <span class="token variable">@v</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译后CSS</strong></p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token comment">/* 编译后的 css */</span></span>
<span class="line"><span class="token selector">.set-2</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">one-1</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">two-2</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">three-3</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-4数学函数" tabindex="-1"><a class="header-anchor" href="#_8-4数学函数"><span>8.4数学函数</span></a></h2>
<h3 id="_8-4-1-ceil" tabindex="-1"><a class="header-anchor" href="#_8-4-1-ceil"><span>8.4.1 ceil</span></a></h3>
<p>向上舍入到下一个最小整数。</p>
<p>参数： number - 一个浮点数。</p>
<p>返回： integer</p>
<p><strong>编译前LESS</strong></p>
<div class="language-less line-numbers-mode" data-highlighter="prismjs" data-ext="less"><pre v-pre><code><span class="line"><span class="token comment">// less 代码编辑</span></span>
<span class="line"><span class="token selector">.test</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">content-1</span><span class="token punctuation">:</span><span class="token function">ceil</span><span class="token punctuation">(</span>2.3<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">content-2</span><span class="token punctuation">:</span><span class="token function">ceil</span><span class="token punctuation">(</span>2.4<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">content-3</span><span class="token punctuation">:</span><span class="token function">ceil</span><span class="token punctuation">(</span>2.5<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译后CSS</strong></p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token comment">/* 编译后的 css */</span></span>
<span class="line"><span class="token selector">.test</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">content-1</span><span class="token punctuation">:</span> 3<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">content-2</span><span class="token punctuation">:</span> 3<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">content-3</span><span class="token punctuation">:</span> 3<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-4-2-floor" tabindex="-1"><a class="header-anchor" href="#_8-4-2-floor"><span>8.4.2 floor</span></a></h3>
<p>向下舍入到下一个最小整数。</p>
<p>参数： number - 一个浮点数。</p>
<p>返回： integer</p>
<p><strong>编译前LESS</strong></p>
<div class="language-less line-numbers-mode" data-highlighter="prismjs" data-ext="less"><pre v-pre><code><span class="line"><span class="token comment">// less 代码编辑</span></span>
<span class="line"><span class="token selector">.test</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">content-1</span><span class="token punctuation">:</span>  <span class="token function">floor</span><span class="token punctuation">(</span>2.3<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">content-2</span><span class="token punctuation">:</span><span class="token function">floor</span><span class="token punctuation">(</span>2.4<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">content-3</span><span class="token punctuation">:</span><span class="token function">floor</span><span class="token punctuation">(</span>2.5<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译后CSS</strong></p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token comment">/* 编译后的 css */</span></span>
<span class="line"><span class="token selector">.test</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">content-1</span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">content-2</span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">content-3</span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-4-3-percentage" tabindex="-1"><a class="header-anchor" href="#_8-4-3-percentage"><span>8.4.3 percentage</span></a></h3>
<p>将浮点数转换为百分比字符串。</p>
<p>参数： number - 一个浮点数。</p>
<p>返回： number</p>
<p><strong>编译前LESS</strong></p>
<div class="language-less line-numbers-mode" data-highlighter="prismjs" data-ext="less"><pre v-pre><code><span class="line"><span class="token comment">// less 代码编辑</span></span>
<span class="line"><span class="token selector">.test</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token function">percentage</span><span class="token punctuation">(</span>0.53<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译后CSS</strong></p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token comment">/* 编译后的 css */</span></span>
<span class="line"><span class="token selector">.test</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">content</span><span class="token punctuation">:</span> 53%<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-4-4-round" tabindex="-1"><a class="header-anchor" href="#_8-4-4-round"><span>8.4.4 round</span></a></h3>
<p>应用舍入。</p>
<p>参数：</p>
<ul>
<li>number: 一个浮点数。</li>
<li>decimalPlaces: 可选的： 要四舍五入的小数位数。 默认为 0。</li>
</ul>
<p>返回： number</p>
<p><strong>编译前LESS</strong></p>
<div class="language-less line-numbers-mode" data-highlighter="prismjs" data-ext="less"><pre v-pre><code><span class="line"><span class="token comment">// less 代码编辑</span></span>
<span class="line"><span class="token selector">.test</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">content</span><span class="token punctuation">:</span>  <span class="token function">round</span><span class="token punctuation">(</span>1.67<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">content</span><span class="token punctuation">:</span>  <span class="token function">round</span><span class="token punctuation">(</span>1.67<span class="token punctuation">,</span> 1<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译后CSS</strong></p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token comment">/* 编译后的 css */</span></span>
<span class="line"><span class="token selector">.test</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">content</span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">content</span><span class="token punctuation">:</span> 1.7<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-4-5-sqrt" tabindex="-1"><a class="header-anchor" href="#_8-4-5-sqrt"><span>8.4.5 sqrt</span></a></h3>
<p>计算数字的平方根。 保持单位不变。</p>
<p>参数： number - 浮点数。</p>
<p>返回： number</p>
<p><strong>编译前LESS</strong></p>
<div class="language-less line-numbers-mode" data-highlighter="prismjs" data-ext="less"><pre v-pre><code><span class="line"><span class="token comment">// less 代码编辑</span></span>
<span class="line"><span class="token selector">.test</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token function">sqrt</span><span class="token punctuation">(</span>25cm<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token function">sqrt</span><span class="token punctuation">(</span>18.6%<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译后CSS</strong></p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token comment">/* 编译后的 css */</span></span>
<span class="line"><span class="token selector">.test</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">content</span><span class="token punctuation">:</span> 5cm<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">content</span><span class="token punctuation">:</span> 4.31277173%<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-4-6-abs" tabindex="-1"><a class="header-anchor" href="#_8-4-6-abs"><span>8.4.6 abs</span></a></h3>
<p>计算数字的绝对值。 保持单位不变。</p>
<p>参数： number - 一个浮点数。</p>
<p>返回： number</p>
<p><strong>编译前LESS</strong></p>
<div class="language-less line-numbers-mode" data-highlighter="prismjs" data-ext="less"><pre v-pre><code><span class="line"><span class="token comment">// less 代码编辑</span></span>
<span class="line"><span class="token selector">.test</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">content</span><span class="token punctuation">:</span>  <span class="token function">abs</span><span class="token punctuation">(</span>25cm<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">content</span><span class="token punctuation">:</span>  <span class="token function">abs</span><span class="token punctuation">(</span><span class="token operator">-</span>18.6%<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译后CSS</strong></p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token comment">/* 编译后的 css */</span></span>
<span class="line"><span class="token selector">.test</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">content</span><span class="token punctuation">:</span> 25cm<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">content</span><span class="token punctuation">:</span> 18.6%<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-4-7-sin" tabindex="-1"><a class="header-anchor" href="#_8-4-7-sin"><span>8.4.7 sin</span></a></h3>
<p>计算正弦函数。</p>
<p>假定没有单位的数字的弧度。</p>
<p>参数： number - 一个浮点数。</p>
<p>返回： number</p>
<p><strong>编译前LESS</strong></p>
<div class="language-less line-numbers-mode" data-highlighter="prismjs" data-ext="less"><pre v-pre><code><span class="line"><span class="token comment">// less 代码编辑</span></span>
<span class="line"><span class="token selector">.test</span><span class="token punctuation">{</span></span>
<span class="line">   <span class="token property">content</span><span class="token punctuation">:</span>  <span class="token function">sin</span><span class="token punctuation">(</span>1<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// sine of 1 radian</span></span>
<span class="line">   <span class="token property">content</span><span class="token punctuation">:</span> <span class="token function">sin</span><span class="token punctuation">(</span>1deg<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// sine of 1 degree</span></span>
<span class="line">   <span class="token property">content</span><span class="token punctuation">:</span> <span class="token function">sin</span><span class="token punctuation">(</span>1grad<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// sine of 1 gradian</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译后CSS</strong></p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token comment">/* 编译后的 css */</span></span>
<span class="line"><span class="token selector">.test</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">content</span><span class="token punctuation">:</span> 0.84147098<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">content</span><span class="token punctuation">:</span> 0.01745241<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">content</span><span class="token punctuation">:</span> 0.01570732<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-4-8-asin" tabindex="-1"><a class="header-anchor" href="#_8-4-8-asin"><span>8.4.8 asin</span></a></h3>
<p>计算反正弦（正弦的倒数）函数。</p>
<p>以弧度返回数字，例如 -π/2 和 π/2 之间的数字。</p>
<p>参数： number - 来自 [-1, 1] 区间的浮点数。</p>
<p>返回： number</p>
<p><strong>编译前LESS</strong></p>
<div class="language-less line-numbers-mode" data-highlighter="prismjs" data-ext="less"><pre v-pre><code><span class="line"><span class="token comment">// less 代码编辑</span></span>
<span class="line"><span class="token selector">.test</span><span class="token punctuation">{</span></span>
<span class="line">   <span class="token property">content</span><span class="token punctuation">:</span> <span class="token function">asin</span><span class="token punctuation">(</span><span class="token operator">-</span>0.8414709848078965<span class="token punctuation">)</span><span class="token punctuation">;</span> </span>
<span class="line">   <span class="token property">content</span><span class="token punctuation">:</span> <span class="token function">asin</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span> </span>
<span class="line">   <span class="token property">content</span><span class="token punctuation">:</span> <span class="token function">asin</span><span class="token punctuation">(</span>0.9<span class="token punctuation">)</span><span class="token punctuation">;</span> </span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译后CSS</strong></p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token comment">/* 编译后的 css */</span></span>
<span class="line"><span class="token selector">.test</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">content</span><span class="token punctuation">:</span> -1rad<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">content</span><span class="token punctuation">:</span> 0rad<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">content</span><span class="token punctuation">:</span> 1.11976951rad<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-4-9-cos" tabindex="-1"><a class="header-anchor" href="#_8-4-9-cos"><span>8.4.9 cos</span></a></h3>
<p>计算余弦函数。</p>
<p>假定没有单位的数字的弧度。</p>
<p>参数： number - 一个浮点数。</p>
<p>返回： number</p>
<p><strong>编译前LESS</strong></p>
<div class="language-less line-numbers-mode" data-highlighter="prismjs" data-ext="less"><pre v-pre><code><span class="line"><span class="token comment">// less 代码编辑</span></span>
<span class="line"><span class="token selector">.test</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token function">cos</span><span class="token punctuation">(</span>1<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// cosine of 1 radian</span></span>
<span class="line">    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token function">cos</span><span class="token punctuation">(</span>1deg<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// cosine of 1 degree</span></span>
<span class="line">    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token function">cos</span><span class="token punctuation">(</span>1grad<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// cosine of 1 gradian</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译后CSS</strong></p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token comment">/* 编译后的 css */</span></span>
<span class="line"><span class="token selector">.test</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">content</span><span class="token punctuation">:</span> 0.54030231<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">content</span><span class="token punctuation">:</span> 0.9998477<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">content</span><span class="token punctuation">:</span> 0.99987663<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-4-10-acos" tabindex="-1"><a class="header-anchor" href="#_8-4-10-acos"><span>8.4.10 acos</span></a></h3>
<p>计算反余弦（余弦的倒数）函数。</p>
<p>Returns number in radians e.g. a number between 0 and π.</p>
<p>参数： number - 来自 [-1, 1] 区间的浮点数。</p>
<p>返回： number</p>
<p><strong>编译前LESS</strong></p>
<div class="language-less line-numbers-mode" data-highlighter="prismjs" data-ext="less"><pre v-pre><code><span class="line"><span class="token comment">// less 代码编辑</span></span>
<span class="line"><span class="token selector">.test</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token function">acos</span><span class="token punctuation">(</span>0.5403023058681398<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token function">acos</span><span class="token punctuation">(</span>1<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token function">acos</span><span class="token punctuation">(</span><span class="token operator">-</span>1<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译后CSS</strong></p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token comment">/* 编译后的 css */</span></span>
<span class="line"><span class="token selector">.test</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">content</span><span class="token punctuation">:</span> 1rad<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">content</span><span class="token punctuation">:</span> 0rad<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">content</span><span class="token punctuation">:</span> 3.14159265rad<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-4-11-tan" tabindex="-1"><a class="header-anchor" href="#_8-4-11-tan"><span>8.4.11 tan</span></a></h3>
<p>计算正切函数。</p>
<p>假定没有单位的数字的弧度。</p>
<p>参数： number - 一个浮点数。</p>
<p>返回： number</p>
<p><strong>编译前LESS</strong></p>
<div class="language-less line-numbers-mode" data-highlighter="prismjs" data-ext="less"><pre v-pre><code><span class="line"><span class="token comment">// less 代码编辑</span></span>
<span class="line"><span class="token selector">.test</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token function">tan</span><span class="token punctuation">(</span>1<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// tangent of 1 radian</span></span>
<span class="line">    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token function">tan</span><span class="token punctuation">(</span>1deg<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// tangent of 1 degree</span></span>
<span class="line">    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token function">tan</span><span class="token punctuation">(</span>1grad<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// tangent of 1 gradian</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译后CSS</strong></p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token comment">/* 编译后的 css */</span></span>
<span class="line"><span class="token selector">.test</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">content</span><span class="token punctuation">:</span> 1.55740772<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">content</span><span class="token punctuation">:</span> 0.01745506<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">content</span><span class="token punctuation">:</span> 0.01570926<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-4-12-atan" tabindex="-1"><a class="header-anchor" href="#_8-4-12-atan"><span>8.4.12 atan</span></a></h3>
<p>计算反正切（正切的倒数）函数。</p>
<p>以弧度返回数字，例如 -π/2 和 π/2 之间的数字。</p>
<p>参数： number - 一个浮点数。</p>
<p>返回： number</p>
<p><strong>编译前LESS</strong></p>
<div class="language-less line-numbers-mode" data-highlighter="prismjs" data-ext="less"><pre v-pre><code><span class="line"><span class="token comment">// less 代码编辑</span></span>
<span class="line"><span class="token selector">.test</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token function">atan</span><span class="token punctuation">(</span><span class="token operator">-</span>1.5574077246549023<span class="token punctuation">)</span><span class="token punctuation">;</span>  </span>
<span class="line">  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token function">atan</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span> </span>
<span class="line">  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token function">round</span><span class="token punctuation">(</span><span class="token function">atan</span><span class="token punctuation">(</span>22<span class="token punctuation">)</span><span class="token punctuation">,</span> 6<span class="token punctuation">)</span> <span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译后CSS</strong></p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token comment">/* 编译后的 css */</span></span>
<span class="line"><span class="token selector">.test</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">content</span><span class="token punctuation">:</span> -1rad<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">content</span><span class="token punctuation">:</span> 0rad<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">content</span><span class="token punctuation">:</span> 1.525373rad<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-4-13-pi" tabindex="-1"><a class="header-anchor" href="#_8-4-13-pi"><span>8.4.13 pi</span></a></h3>
<p>返回 π (pi);</p>
<p>参数： none</p>
<p>返回： number</p>
<p><strong>编译前LESS</strong></p>
<div class="language-less line-numbers-mode" data-highlighter="prismjs" data-ext="less"><pre v-pre><code><span class="line"><span class="token comment">// less 代码编辑</span></span>
<span class="line"><span class="token selector">.test</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token function">pi</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">content</span><span class="token punctuation">:</span> 2<span class="token operator">*</span><span class="token function">pi</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token function">pi</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">/</span>2<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译后CSS</strong></p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token comment">/* 编译后的 css */</span></span>
<span class="line"><span class="token selector">.test</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">content</span><span class="token punctuation">:</span> 3.14159265<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">content</span><span class="token punctuation">:</span> 6.28318531<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">content</span><span class="token punctuation">:</span> 1.57079633<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-4-14-pow" tabindex="-1"><a class="header-anchor" href="#_8-4-14-pow"><span>8.4.14 pow</span></a></h3>
<p>返回第一个参数的第二个参数次方的值。</p>
<p>返回值与第一个参数具有相同的维度，第二个参数的维度被忽略。</p>
<p>参数：</p>
<ul>
<li>number: base - 浮点数。</li>
<li>number: 指数 - 浮点数。</li>
</ul>
<p>返回： number</p>
<p><strong>编译前LESS</strong></p>
<div class="language-less line-numbers-mode" data-highlighter="prismjs" data-ext="less"><pre v-pre><code><span class="line"><span class="token comment">// less 代码编辑</span></span>
<span class="line"><span class="token selector">.test</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token function">pow</span><span class="token punctuation">(</span>0cm<span class="token punctuation">,</span> 0px<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token function">pow</span><span class="token punctuation">(</span>25<span class="token punctuation">,</span> <span class="token operator">-</span>2<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token function">pow</span><span class="token punctuation">(</span>25<span class="token punctuation">,</span> 0.5<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">// content: pow(-25, 0.5);</span></span>
<span class="line">    <span class="token comment">// content: pow(-25%, -0.5);</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译后CSS</strong></p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token comment">/* 编译后的 css */</span></span>
<span class="line"><span class="token selector">.test</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">content</span><span class="token punctuation">:</span> 1cm<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">content</span><span class="token punctuation">:</span> 0.0016<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">content</span><span class="token punctuation">:</span> 5<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-4-15-mod" tabindex="-1"><a class="header-anchor" href="#_8-4-15-mod"><span>8.4.15 mod</span></a></h3>
<p>返回第一个参数模第二个参数的值。</p>
<p>返回值与第一个参数具有相同的维度，第二个参数的维度被忽略。 该函数还能够处理负数和浮点数。</p>
<p>参数：</p>
<ul>
<li>number: 一个浮点数。</li>
<li>number: 一个浮点数。</li>
</ul>
<p>返回： number</p>
<p><strong>编译前LESS</strong></p>
<div class="language-less line-numbers-mode" data-highlighter="prismjs" data-ext="less"><pre v-pre><code><span class="line"><span class="token comment">// less 代码编辑</span></span>
<span class="line"><span class="token selector">.test</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token function">mod</span><span class="token punctuation">(</span>0.2cm<span class="token punctuation">,</span> 0.3px<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token function">mod</span><span class="token punctuation">(</span>11cm<span class="token punctuation">,</span> 6px<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token function">mod</span><span class="token punctuation">(</span><span class="token operator">-</span>26%<span class="token punctuation">,</span> <span class="token operator">-</span>5<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译后CSS</strong></p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token comment">/* 编译后的 css */</span></span>
<span class="line"><span class="token selector">.test</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">content</span><span class="token punctuation">:</span> 0.2cm<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">content</span><span class="token punctuation">:</span> 5cm<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">content</span><span class="token punctuation">:</span> -1%<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-4-16-min" tabindex="-1"><a class="header-anchor" href="#_8-4-16-min"><span>8.4.16 min</span></a></h3>
<p>返回一个或多个值中的最低值。</p>
<p>参数： value1, ..., valueN - 要比较的一个或多个值。</p>
<p>返回： 最低值。</p>
<p><strong>编译前LESS</strong></p>
<div class="language-less line-numbers-mode" data-highlighter="prismjs" data-ext="less"><pre v-pre><code><span class="line"><span class="token comment">// less 代码编辑</span></span>
<span class="line"><span class="token selector">.test</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token function">min</span><span class="token punctuation">(</span>5<span class="token punctuation">,</span> 10<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">content</span><span class="token punctuation">:</span>  <span class="token function">min</span><span class="token punctuation">(</span>3px<span class="token punctuation">,</span> 42px<span class="token punctuation">,</span> 1px<span class="token punctuation">,</span> 16px<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译后CSS</strong></p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token comment">/* 编译后的 css */</span></span>
<span class="line"><span class="token selector">.test</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">content</span><span class="token punctuation">:</span> 5<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">content</span><span class="token punctuation">:</span> 1px<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-4-17-max" tabindex="-1"><a class="header-anchor" href="#_8-4-17-max"><span>8.4.17 max</span></a></h3>
<p>返回一个或多个值中的最大值。</p>
<p>参数： value1, ..., valueN - 要比较的一个或多个值。</p>
<p>返回： 最高值。</p>
<p><strong>编译前LESS</strong></p>
<div class="language-less line-numbers-mode" data-highlighter="prismjs" data-ext="less"><pre v-pre><code><span class="line"><span class="token comment">// less 代码编辑</span></span>
<span class="line"><span class="token selector">.test</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token function">min</span><span class="token punctuation">(</span>5<span class="token punctuation">,</span> 10<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">content</span><span class="token punctuation">:</span>  <span class="token function">min</span><span class="token punctuation">(</span>3px<span class="token punctuation">,</span> 42px<span class="token punctuation">,</span> 1px<span class="token punctuation">,</span> 16px<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译后CSS</strong></p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token comment">/* 编译后的 css */</span></span>
<span class="line"><span class="token selector">.test</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">content</span><span class="token punctuation">:</span> 5<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">content</span><span class="token punctuation">:</span> 1px<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


