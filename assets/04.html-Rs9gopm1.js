import{aq as n,ar as a,as as p,at as e}from"./app-Cok9BT0p.js";const l={};function t(c,s){return e(),a("div",null,s[0]||(s[0]=[p(`<h1 id="四、-变量" tabindex="-1"><a class="header-anchor" href="#四、-变量"><span>四、 变量</span></a></h1><ol><li><p>定义语法：@var:value;</p></li><li><p>使用变量：@var</p><ol><li>作为普通的值使用</li><li>选择器变量</li><li>属性变量</li><li>url 变量</li><li>声明变量</li></ol></li><li><p>变量的作用域 和js中变量作用域一致</p></li></ol><p>代码演示： //1.定义变量 @变量:变量值;</p><pre><code>//2.选择器变量 
</code></pre><p><strong>编译前LESS</strong></p><div class="language-less line-numbers-mode" data-highlighter="prismjs" data-ext="less"><pre><code><span class="line"><span class="token comment">// less 代码编辑</span></span>
<span class="line"><span class="token variable">@box<span class="token punctuation">:</span></span>#box<span class="token punctuation">;</span></span>
<span class="line"><span class="token variable">@class<span class="token punctuation">:</span></span>.content<span class="token punctuation">;</span></span>
<span class="line"><span class="token variable">@w<span class="token punctuation">:</span></span>20px<span class="token punctuation">;</span></span>
<span class="line"><span class="token selector">@{box}</span><span class="token punctuation">{</span><span class="token comment">//#box{border: 1px solid red;}</span></span>
<span class="line">    <span class="token property">border</span><span class="token punctuation">:</span> 1px solid red<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">@{class}</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">width</span><span class="token punctuation">:</span> <span class="token variable">@w</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">//3.属性变量</span></span>
<span class="line"><span class="token variable">@h<span class="token punctuation">:</span></span>height<span class="token punctuation">;</span></span>
<span class="line"><span class="token selector">.wrapper</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">@{h}</span><span class="token punctuation">:</span><span class="token variable">@w</span><span class="token operator">*</span>10<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">//4. url变量</span></span>
<span class="line"><span class="token variable">@images<span class="token punctuation">:</span></span><span class="token string">&#39;./img/bg.jpg&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token selector">.aa</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">width</span><span class="token punctuation">:</span> 100<span class="token operator">*</span><span class="token variable">@w</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">height</span><span class="token punctuation">:</span> 10<span class="token operator">*</span><span class="token variable">@w</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">background</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&#39;@{images}&#39;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">//5. 声明变量</span></span>
<span class="line"><span class="token atrule">@fontSize<span class="token punctuation">:</span></span><span class="token punctuation">{</span><span class="token property">font-size</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.bb</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token variable">@fontSize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译后CSS</strong></p><div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre><code><span class="line"><span class="token comment">/* 编译后的 css */</span></span>
<span class="line"><span class="token selector">#box</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid red<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.content</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">width</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.wrapper</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.aa</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">width</span><span class="token punctuation">:</span> 2000px<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&#39;img/bg.jpg&#39;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.bb</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">font-size</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8)]))}const o=n(l,[["render",t]]),u=JSON.parse('{"path":"/style/pre_compile_css/less/04.html","title":"四、 变量","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1744806830000,"contributors":[{"name":"zhao-farmer","username":"zhao-farmer","email":"857899180@qq.com","commits":1,"url":"https://github.com/zhao-farmer"}],"changelog":[{"hash":"c70b07d347b059fbe78c7770e7fa611a62f92633","time":1744806830000,"email":"857899180@qq.com","author":"zhao-farmer","message":"前端笔记提交"}]},"filePathRelative":"style/pre_compile_css/less/04.md"}');export{o as comp,u as data};
