import{aq as n,ar as a,as as p,at as e}from"./app-Cok9BT0p.js";const l={};function t(c,s){return e(),a("div",null,s[0]||(s[0]=[p(`<h1 id="二、语法扩张" tabindex="-1"><a class="header-anchor" href="#二、语法扩张"><span>二、语法扩张</span></a></h1><h2 id="_2-1选择器嵌套-nested-selector" tabindex="-1"><a class="header-anchor" href="#_2-1选择器嵌套-nested-selector"><span>2.1选择器嵌套 (Nested Selector)</span></a></h2><p>可以使用不同的选择器进行嵌套，可更方便与直观的查看与管理选择器的父子级关系</p><p><strong>编译前SCSS</strong></p><div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss"><pre><code><span class="line"><span class="token comment">// scss 代码编辑</span></span>
<span class="line"><span class="token selector">.container </span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">width</span><span class="token punctuation">:</span> 1200px<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span></span>
<span class="line">    <span class="token selector">.header </span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span></span>
<span class="line">        <span class="token property">line-height</span><span class="token punctuation">:</span> 2em<span class="token punctuation">;</span></span>
<span class="line">        <span class="token selector">.logo </span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token selector">.footer </span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span></span>
<span class="line">        <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span></span>
<span class="line">        <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span></span>
<span class="line">        <span class="token property">background-color</span><span class="token punctuation">:</span> #000<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译后CSS</strong></p><div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre><code><span class="line"><span class="token comment">/* 编译后的 css */</span></span>
<span class="line"><span class="token selector">.container</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">width</span><span class="token punctuation">:</span> 1200px<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.container .header</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">line-height</span><span class="token punctuation">:</span> 2em<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.container .header .logo</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.container .footer</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">background-color</span><span class="token punctuation">:</span> #000<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-2属性嵌套-nested-properties" tabindex="-1"><a class="header-anchor" href="#_2-2属性嵌套-nested-properties"><span>2.2属性嵌套 (Nested Properties)</span></a></h2><p>属性名称前都具有相同的字符时，可使用属性嵌套的方法。注：font: {}，冒号后与花括号中间需有空格进行隔开</p><p><strong>编译前SCSS</strong></p><div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss"><pre><code><span class="line"><span class="token comment">// scss 代码编辑</span></span>
<span class="line"><span class="token selector">.container </span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span></span>
<span class="line">    <span class="token selector">font: </span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">size</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span></span>
<span class="line">        <span class="token property">family</span><span class="token punctuation">:</span> sans-serif<span class="token punctuation">;</span></span>
<span class="line">        <span class="token property">weight</span><span class="token punctuation">:</span> 500<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译后CSS</strong></p><div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre><code><span class="line"><span class="token comment">/* 编译后的 css */</span></span>
<span class="line"><span class="token selector">.container</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">font-size</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">font-family</span><span class="token punctuation">:</span> sans-serif<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">font-weight</span><span class="token punctuation">:</span> 500<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-3父选择器添加内容" tabindex="-1"><a class="header-anchor" href="#_2-3父选择器添加内容"><span>2.3父选择器添加内容 &amp;</span></a></h2><p>添加符号 ”&amp;“ ，表示在该父容器后面添加相应的后缀，可是该元素的某个行为或其他等。 <strong>编译前SCSS</strong></p><div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss"><pre><code><span class="line"><span class="token comment">// scss 代码编辑</span></span>
<span class="line"><span class="token selector">.container </span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">width</span><span class="token punctuation">:</span> 1200px<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span></span>
<span class="line">    <span class="token selector">a </span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span></span>
<span class="line">        <span class="token selector"><span class="token parent important">&amp;</span>:hover </span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">text-decoration</span><span class="token punctuation">:</span> underline<span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token selector">.top </span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">border</span><span class="token punctuation">:</span> 1px #ccc solid<span class="token punctuation">;</span></span>
<span class="line">        <span class="token selector"><span class="token parent important">&amp;</span>-left </span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译后CSS</strong></p><div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre><code><span class="line"><span class="token comment">/* 编译后的 css */</span></span>
<span class="line"><span class="token selector">.container</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">width</span><span class="token punctuation">:</span> 1200px<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.container a</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.container a:hover</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">text-decoration</span><span class="token punctuation">:</span> underline<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.container .top</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">border</span><span class="token punctuation">:</span> 1px #ccc solid<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.container .top-left</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-4占位符选择器-foo" tabindex="-1"><a class="header-anchor" href="#_2-4占位符选择器-foo"><span>2.4占位符选择器 %foo</span></a></h2><p>有时需要定义一套样式，但并不给某个元素使用，必须在需要调用的时候才启用此样式库，使用 “%foo” 占位，通过 “@extend” 进行调用。%foo 名称可自己定义，前面需加上符号 “%“</p><p><strong>编译前SCSS</strong></p><div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss"><pre><code><span class="line"><span class="token comment">// scss 代码编辑</span></span>
<span class="line"><span class="token selector"><span class="token placeholder">%message</span> </span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #ccc<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">padding</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line"><span class="token selector">.success </span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">@extend</span> <span class="token placeholder selector">%message</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">border-color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">.error </span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">@extend</span> <span class="token placeholder selector">%message</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">border-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译后CSS</strong></p><div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre><code><span class="line"><span class="token comment">/* 编译后的 css */</span></span>
<span class="line"><span class="token selector">.error, .success</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #ccc<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">padding</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">.success</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">border-color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">.error</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">border-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,24)]))}const o=n(l,[["render",t]]),u=JSON.parse('{"path":"/style/pre_compile_css/scss/02.html","title":"二、语法扩张","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1744806830000,"contributors":[{"name":"zhao-farmer","username":"zhao-farmer","email":"857899180@qq.com","commits":1,"url":"https://github.com/zhao-farmer"}],"changelog":[{"hash":"c70b07d347b059fbe78c7770e7fa611a62f92633","time":1744806830000,"email":"857899180@qq.com","author":"zhao-farmer","message":"前端笔记提交"}]},"filePathRelative":"style/pre_compile_css/scss/02.md"}');export{o as comp,u as data};
