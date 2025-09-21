import{aq as n,ar as a,as as p,at as e}from"./app-Cok9BT0p.js";const l={};function i(t,s){return e(),a("div",null,s[0]||(s[0]=[p(`<h1 id="二、嵌套" tabindex="-1"><a class="header-anchor" href="#二、嵌套"><span>二、嵌套</span></a></h1><h2 id="_2-1-less-级联" tabindex="-1"><a class="header-anchor" href="#_2-1-less-级联"><span>2.1 Less 级联</span></a></h2><p>使你能够使用嵌套代替级联，或与级联结合使用。</p><p><strong>编译前LESS</strong></p><div class="language-less line-numbers-mode" data-highlighter="prismjs" data-ext="less"><pre><code><span class="line"><span class="token comment">// less 代码编辑</span></span>
<span class="line"><span class="token selector">ul</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token selector">li</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">//设置第一个li元素的margin-left</span></span>
<span class="line">      <span class="token selector">&amp;:first-child</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">margin-left</span><span class="token punctuation">:</span> 0px<span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token comment">//设置最后一个li元素的margin-left</span></span>
<span class="line">      <span class="token selector">&amp;:nth-last-child(1)</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">margin-left</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译后CSS</strong></p><div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre><code><span class="line"><span class="token comment">/* 编译后的 css */</span></span>
<span class="line"><span class="token selector">ul li:first-child</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">margin-left</span><span class="token punctuation">:</span> 0px<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">ul li:nth-last-child(1)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">margin-left</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-2-替代" tabindex="-1"><a class="header-anchor" href="#_2-2-替代"><span>2.2 &amp; 替代</span></a></h2><p><strong>编译前LESS</strong></p><div class="language-less line-numbers-mode" data-highlighter="prismjs" data-ext="less"><pre><code><span class="line"><span class="token comment">// less 代码编辑</span></span>
<span class="line"><span class="token selector">#header</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">color</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span></span>
<span class="line">    <span class="token selector">.navigation</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">font-size</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token selector">.logo</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.clearfix</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">zoom</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span></span>
<span class="line">    <span class="token selector">&amp;:after</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot; &quot;</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span></span>
<span class="line">        <span class="token property">font-size</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span></span>
<span class="line">        <span class="token property">height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span></span>
<span class="line">        <span class="token property">clear</span><span class="token punctuation">:</span> both<span class="token punctuation">;</span></span>
<span class="line">        <span class="token property">visibility</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译后CSS</strong></p><div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre><code><span class="line"><span class="token comment">/* 编译后的 css */</span></span>
<span class="line"><span class="token selector">#header</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">color</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">#header .navigation</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">font-size</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">#header .logo</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.clearfix</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">zoom</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.clearfix:after</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot; &quot;</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">font-size</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">clear</span><span class="token punctuation">:</span> both<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">visibility</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12)]))}const o=n(l,[["render",i]]),u=JSON.parse('{"path":"/style/pre_compile_css/less/02.html","title":"二、嵌套","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1744806830000,"contributors":[{"name":"zhao-farmer","username":"zhao-farmer","email":"857899180@qq.com","commits":1,"url":"https://github.com/zhao-farmer"}],"changelog":[{"hash":"c70b07d347b059fbe78c7770e7fa611a62f92633","time":1744806830000,"email":"857899180@qq.com","author":"zhao-farmer","message":"前端笔记提交"}]},"filePathRelative":"style/pre_compile_css/less/02.md"}');export{o as comp,u as data};
