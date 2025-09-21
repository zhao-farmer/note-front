import{aq as n,ar as a,as as p,at as e}from"./app-Cok9BT0p.js";const l={};function t(i,s){return e(),a("div",null,s[0]||(s[0]=[p(`<h1 id="九、其他" tabindex="-1"><a class="header-anchor" href="#九、其他"><span>九、其他</span></a></h1><h2 id="_9-1-转义-escaping" tabindex="-1"><a class="header-anchor" href="#_9-1-转义-escaping"><span>9.1 转义（Escaping）</span></a></h2><p>转义（Escaping）允许你使用任意字符串作为属性或变量值。任何 ~&quot;anything&quot; 或 ~&#39;anything&#39; 形式的内容都将按原样输出，除非 interpolation。</p><p><strong>编译前LESS</strong></p><div class="language-less line-numbers-mode" data-highlighter="prismjs" data-ext="less"><pre><code><span class="line"><span class="token comment">// less 代码编辑</span></span>
<span class="line"><span class="token variable">@min768<span class="token punctuation">:</span></span> ~<span class="token string">&quot;(min-width: 768px)&quot;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token selector">.element</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token atrule">@media @min768</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">font-size</span><span class="token punctuation">:</span> 1.2rem<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译后CSS</strong></p><div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre><code><span class="line"><span class="token comment">/* 编译后的 css */</span></span>
<span class="line"><span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 768px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token selector">.element</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">font-size</span><span class="token punctuation">:</span> 1.2rem<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9-2-映射-maps" tabindex="-1"><a class="header-anchor" href="#_9-2-映射-maps"><span>9.2 映射（Maps）</span></a></h2><p>你还可以将混合（mixins）和规则集（rulesets）作为一组值的映射（map）使用。</p><p><strong>编译前LESS</strong></p><div class="language-less line-numbers-mode" data-highlighter="prismjs" data-ext="less"><pre><code><span class="line"><span class="token comment">// less 代码编辑</span></span>
<span class="line"><span class="token selector">#colors()</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">primary</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">secondary</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line"><span class="token selector">.button</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">color</span><span class="token punctuation">:</span> #colors[primary]<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #colors[secondary]<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译后CSS</strong></p><div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre><code><span class="line"><span class="token comment">/* 编译后的 css */</span></span>
<span class="line"><span class="token selector">.button</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid green<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9-3-命名空间和访问符" tabindex="-1"><a class="header-anchor" href="#_9-3-命名空间和访问符"><span>9.3 命名空间和访问符</span></a></h2><p>有时，出于组织结构或仅仅是为了提供一些封装的目的，你希望对混合（mixins）进行分组。你可以用 Less 更直观地实现这一需求。假设你希望将一些混合（mixins）和变量置于 #bundle 之下，为了以后方便重用或分发：</p><p><strong>编译前LESS</strong></p><div class="language-less line-numbers-mode" data-highlighter="prismjs" data-ext="less"><pre><code><span class="line"><span class="token comment">// less 代码编辑</span></span>
<span class="line"><span class="token selector">#bundle()</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token selector">.button</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span></span>
<span class="line">        <span class="token property">border</span><span class="token punctuation">:</span> 1px solid black<span class="token punctuation">;</span></span>
<span class="line">        <span class="token property">background-color</span><span class="token punctuation">:</span> grey<span class="token punctuation">;</span></span>
<span class="line">        <span class="token selector">&amp;:hover</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">background-color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">#header a</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">color</span><span class="token punctuation">:</span> orange<span class="token punctuation">;</span></span>
<span class="line">    <span class="token mixin-usage function">#bundle.button</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 还可以书写为 #bundle &gt; .button 形式</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译后CSS</strong></p><div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre><code><span class="line"><span class="token comment">/* 编译后的 css */</span></span>
<span class="line"><span class="token selector">#header a</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">color</span><span class="token punctuation">:</span> orange<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid black<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">background-color</span><span class="token punctuation">:</span> grey<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">#header a:hover</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">background-color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9-4-import-导入" tabindex="-1"><a class="header-anchor" href="#_9-4-import-导入"><span>9.4 import 导入</span></a></h2><p>你可以导入一个 .less 文件，此文件中的所有变量就可以全部使用了。如果导入的文件是 .less 扩展名，则可以将扩展名省略掉</p><div class="language-less line-numbers-mode" data-highlighter="prismjs" data-ext="less"><pre><code><span class="line"><span class="token comment">// head_1.less</span></span>
<span class="line"><span class="token selector">header</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//head_2.less</span></span>
<span class="line"><span class="token selector">.mixin_head()</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">width</span><span class="token punctuation">:</span>100px<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">height</span><span class="token punctuation">:</span>200px<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//head_3.less</span></span>
<span class="line"><span class="token variable">@color<span class="token punctuation">:</span></span>blue<span class="token punctuation">;</span></span>
<span class="line"><span class="token variable">@width<span class="token punctuation">:</span></span>500px<span class="token punctuation">;</span></span>
<span class="line"><span class="token variable">@height<span class="token punctuation">:</span></span>300px<span class="token punctuation">;</span></span>
<span class="line"><span class="token selector">.head</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">width</span><span class="token punctuation">:</span> <span class="token variable">@width</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">height</span><span class="token punctuation">:</span> <span class="token variable">@height</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">color</span><span class="token punctuation">:</span><span class="token variable">@color</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">font-size</span><span class="token punctuation">:</span>20px<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>具体引入</p><p><strong>编译前LESS</strong></p><div class="language-less line-numbers-mode" data-highlighter="prismjs" data-ext="less"><pre><code><span class="line"><span class="token comment">// less 代码编辑</span></span>
<span class="line"><span class="token variable">@import</span> <span class="token string">&#39;./head_1.less&#39;</span><span class="token punctuation">;</span><span class="token comment">//如果.css 导入css文件</span></span>
<span class="line"><span class="token variable">@import</span> <span class="token string">&#39;./head_2.less&#39;</span><span class="token punctuation">;</span><span class="token comment">//.less 导入less文件</span></span>
<span class="line"><span class="token variable">@import</span> <span class="token string">&#39;./head_3.less&#39;</span><span class="token punctuation">;</span><span class="token comment">//导入head_3.less</span></span>
<span class="line"><span class="token selector">header</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token mixin-usage function">.mixin_head</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//调用 head_2.less里面混合器</span></span>
<span class="line">  <span class="token property">background-color</span><span class="token punctuation">:</span><span class="token variable">@color</span><span class="token punctuation">;</span><span class="token comment">//使用head_3.less的变量</span></span>
<span class="line">  <span class="token property">color</span><span class="token punctuation">:</span>red<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译后CSS</strong></p><div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre><code><span class="line"><span class="token comment">/* 编译后的 css */</span></span>
<span class="line"><span class="token selector">header</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.head</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">width</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">font-size</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">header</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">background-color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9-5作用域" tabindex="-1"><a class="header-anchor" href="#_9-5作用域"><span>9.5作用域</span></a></h2><p>Less 中的作用域与 CSS 中的作用域非常类似。首先在本地查找变量和混合（mixins），如果找不到，则从“父”级作用域继承。</p><p>与 CSS 自定义属性一样，混合（mixin）和变量的定义不必在引用之前事先定义。因此，下面的 Less 代码示例和上面的代码示例是相同的：</p><p><strong>编译前LESS</strong></p><div class="language-less line-numbers-mode" data-highlighter="prismjs" data-ext="less"><pre><code><span class="line"><span class="token comment">// less 代码编辑</span></span>
<span class="line"><span class="token variable">@var<span class="token punctuation">:</span></span> red<span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// var放到引入上方</span></span>
<span class="line"><span class="token selector">#page1</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token variable">@var<span class="token punctuation">:</span></span> white<span class="token punctuation">;</span></span>
<span class="line">  <span class="token selector">#header</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">@var</span><span class="token punctuation">;</span> <span class="token comment">// white</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">// var放到引入下方</span></span>
<span class="line"><span class="token selector">#page2</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token selector">#header</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">@var</span><span class="token punctuation">;</span> <span class="token comment">// white</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token variable">@var<span class="token punctuation">:</span></span> white<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译后CSS</strong></p><div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre><code><span class="line"><span class="token comment">/* 编译后的 css */</span></span>
<span class="line"><span class="token selector">#page1 #header</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">#page2 #header</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9-6-判断-when" tabindex="-1"><a class="header-anchor" href="#_9-6-判断-when"><span>9.6 判断 when</span></a></h2><p><strong>编译前LESS</strong></p><div class="language-less line-numbers-mode" data-highlighter="prismjs" data-ext="less"><pre><code><span class="line"><span class="token comment">// less 代码编辑</span></span>
<span class="line"><span class="token variable">@width<span class="token punctuation">:</span></span>1000px<span class="token punctuation">;</span></span>
<span class="line"><span class="token variable">@height<span class="token punctuation">:</span></span>400<span class="token punctuation">;</span></span>
<span class="line"><span class="token variable">@num<span class="token punctuation">:</span></span>500<span class="token punctuation">;</span></span>
<span class="line"><span class="token selector">.mixin() when(<span class="token variable">@width</span>&gt;900)</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token selector">ul li when(<span class="token variable">@height</span>&gt;500)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">background-color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span><span class="token comment">//当变量width大于900且变量height大于500</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">.<span class="token function">mixin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token selector">.nav when(<span class="token variable">@width</span>&gt;900px) and (<span class="token variable">@height</span>&gt;300) and (<span class="token variable">@num</span>&gt;300)</span><span class="token punctuation">{</span><span class="token comment">// 与 ,使用and</span></span>
<span class="line">  <span class="token property">background-color</span><span class="token punctuation">:</span><span class="token function">rgb</span><span class="token punctuation">(</span>64<span class="token punctuation">,</span> 64<span class="token punctuation">,</span> 180<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.header when(<span class="token variable">@width</span>&gt;1000),(<span class="token variable">@height</span>&gt;200)</span><span class="token punctuation">{</span><span class="token comment">// 或 ,逗号分开</span></span>
<span class="line">  <span class="token property">background-color</span><span class="token punctuation">:</span> yellow<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">color</span><span class="token punctuation">:</span>yellow<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译后CSS</strong></p><div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre><code><span class="line"><span class="token comment">/* 编译后的 css */</span></span>
<span class="line"><span class="token selector">.nav</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">background-color</span><span class="token punctuation">:</span> #4040b4<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.header</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">background-color</span><span class="token punctuation">:</span> yellow<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">color</span><span class="token punctuation">:</span> yellow<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9-7-合并merge" tabindex="-1"><a class="header-anchor" href="#_9-7-合并merge"><span>9.7 合并Merge</span></a></h2><p>merge特性允许将多个属性的值聚合到单个属性下以逗号或空格分隔的列表中。Merge对于像background和transform这样的属性很有用。</p><p><strong>编译前LESS</strong></p><div class="language-less line-numbers-mode" data-highlighter="prismjs" data-ext="less"><pre><code><span class="line"><span class="token comment">// less 代码编辑</span></span>
<span class="line"><span class="token comment">// 1.用逗号添加属性值</span></span>
<span class="line"><span class="token selector">.mixin()</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">box-shadow+</span><span class="token punctuation">:</span> inset 0 0 10px #555<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.myclass</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token mixin-usage function">.mixin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">box-shadow+</span><span class="token punctuation">:</span> 0 0 20px black<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">//2、用空格追加属性值</span></span>
<span class="line"><span class="token selector">.mixin()</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">transform+_</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>2<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.myclass</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token mixin-usage function">.mixin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">transform+_</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>15deg<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译后CSS</strong></p><div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre><code><span class="line"><span class="token comment">/* 编译后的 css */</span></span>
<span class="line"><span class="token selector">.myclass</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">box-shadow</span><span class="token punctuation">:</span> inset 0 0 10px #555<span class="token punctuation">,</span> 0 0 20px black<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>2<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.myclass</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">box-shadow</span><span class="token punctuation">:</span> inset 0 0 10px #555<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>2<span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span>15deg<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,45)]))}const o=n(l,[["render",t]]),u=JSON.parse('{"path":"/style/pre_compile_css/less/09.html","title":"九、其他","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1744806830000,"contributors":[{"name":"zhao-farmer","username":"zhao-farmer","email":"857899180@qq.com","commits":1,"url":"https://github.com/zhao-farmer"}],"changelog":[{"hash":"c70b07d347b059fbe78c7770e7fa611a62f92633","time":1744806830000,"email":"857899180@qq.com","author":"zhao-farmer","message":"前端笔记提交"}]},"filePathRelative":"style/pre_compile_css/less/09.md"}');export{o as comp,u as data};
