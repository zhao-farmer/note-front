<template><div><h1 id="十六、防抖" tabindex="-1"><a class="header-anchor" href="#十六、防抖"><span>十六、防抖</span></a></h1>
<p>防抖:单位时间内，频繁触发事件，只执行最后一次</p>
<ul>
<li>防抖:单位时间内，频繁触发事件，只执行最后一次</li>
<li>举个栗子:王者荣耀回城，只要被打断就需要重新来</li>
</ul>
<p>使用场景:</p>
<ol>
<li>搜索框搜索输入。只需用户最后一次输入完，再发送请求</li>
<li>手机号、邮箱验证输入检测</li>
</ol>
<h2 id="_16-1-需求" tabindex="-1"><a class="header-anchor" href="#_16-1-需求"><span>16.1 需求</span></a></h2>
<p>要求:鼠标在盒子上移动，鼠标停止500ms之后，里面的数字才会变化+1</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css"></span>
<span class="line">        <span class="token selector">.box</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">border</span><span class="token punctuation">:</span> 1px solid black<span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>53<span class="token punctuation">,</span> 76<span class="token punctuation">,</span> 97<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">font-size</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>box<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">        <span class="token comment">// 利用防抖实现性能优化</span></span>
<span class="line">        <span class="token comment">// 需求： 鼠标在盒子上移动，里面的数字会变化加一</span></span>
<span class="line">        <span class="token keyword">const</span> box <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.box'</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span></span>
<span class="line">        <span class="token keyword">function</span> <span class="token function">mouseMove</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">            box<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> i<span class="token operator">++</span></span>
<span class="line">            <span class="token comment">// 如果里面存在大量消耗性能的代码，比如dom操作，比如数据处理，可能造成卡顿</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token comment">// 添加事件</span></span>
<span class="line">        box<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'mousemove'</span><span class="token punctuation">,</span>mouseMove<span class="token punctuation">)</span></span>
<span class="line">    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_16-2-使用lodash来进行防抖" tabindex="-1"><a class="header-anchor" href="#_16-2-使用lodash来进行防抖"><span>16.2 使用lodash来进行防抖</span></a></h2>
<p>使用 _.debounce(fun,时间) 来实现</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css"></span>
<span class="line">        <span class="token selector">.box</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">border</span><span class="token punctuation">:</span> 1px solid black<span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>53<span class="token punctuation">,</span> 76<span class="token punctuation">,</span> 97<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">font-size</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>box<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>./lodash.min.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">        <span class="token comment">// 利用防抖实现性能优化</span></span>
<span class="line">        <span class="token comment">// 需求： 鼠标在盒子上移动，里面的数字会变化加一</span></span>
<span class="line">        <span class="token keyword">const</span> box <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.box'</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span></span>
<span class="line">        <span class="token keyword">function</span> <span class="token function">mouseMove</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">            box<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> i<span class="token operator">++</span></span>
<span class="line">            <span class="token comment">// 如果里面存在大量消耗性能的代码，比如dom操作，比如数据处理，可能造成卡顿</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token comment">// 添加事件</span></span>
<span class="line">        <span class="token comment">// box.addEventListener('mousemove',mouseMove)</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">// 利用lodash库实现防抖 - 500毫秒之后采取+1</span></span>
<span class="line">        <span class="token comment">// 语法： _.debounce(fun,时间)</span></span>
<span class="line">        box<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'mousemove'</span><span class="token punctuation">,</span> _<span class="token punctuation">.</span><span class="token function">debounce</span><span class="token punctuation">(</span>mouseMove<span class="token punctuation">,</span><span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_16-3-settimeout实现" tabindex="-1"><a class="header-anchor" href="#_16-3-settimeout实现"><span>16.3 setTimeOut实现</span></a></h2>
<p>核心思路:</p>
<p>防抖的核心就是利用定时器(setTimeout)来实现</p>
<ol>
<li>声明一个定时器变量</li>
<li>当鼠标每次滑动都先判断是否有定时器了，如果有定时器先清除以前的定时器</li>
<li>如果没有定时器则开启定时器，记得存到变量里面</li>
<li>在定时器里面调用要执行的函数</li>
</ol>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css"></span>
<span class="line">        <span class="token selector">.box</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">border</span><span class="token punctuation">:</span> 1px solid black<span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>53<span class="token punctuation">,</span> 76<span class="token punctuation">,</span> 97<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">font-size</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>box<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">        <span class="token comment">// 利用防抖实现性能优化</span></span>
<span class="line">        <span class="token comment">// 需求： 鼠标在盒子上移动，里面的数字会变化加一</span></span>
<span class="line">        <span class="token keyword">const</span> box <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.box'</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span></span>
<span class="line">        <span class="token keyword">function</span> <span class="token function">mouseMove</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">            box<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> i<span class="token operator">++</span></span>
<span class="line">            <span class="token comment">// 如果里面存在大量消耗性能的代码，比如dom操作，比如数据处理，可能造成卡顿</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token comment">// 添加事件</span></span>
<span class="line">        <span class="token comment">// box.addEventListener('mousemove',mouseMove)</span></span>
<span class="line">        <span class="token comment">// 手写防抖函数</span></span>
<span class="line">        <span class="token comment">// 核心是利用setTimeout定时器来实现</span></span>
<span class="line">        <span class="token comment">// 1.声明定时器遍历</span></span>
<span class="line">        <span class="token comment">// 2.每次鼠标移动（时间触发）的时候都要先判断是否有定时器，如果有先清除以前的定时器</span></span>
<span class="line">        <span class="token comment">// 3.如果没有定时器，则开启定时器，存入定时器遍历里面</span></span>
<span class="line">        <span class="token comment">// 4.定时器里面写函数条用</span></span>
<span class="line">        <span class="token keyword">function</span> <span class="token function">dedounce</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span>t</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">let</span> timer</span>
<span class="line">            <span class="token comment">// return 返回一个匿名函数</span></span>
<span class="line">            <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                <span class="token comment">// 2,3,4</span></span>
<span class="line">                <span class="token keyword">if</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span> <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span></span>
<span class="line">                timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">                    <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>    <span class="token comment">//加小括号调用</span></span>
<span class="line">                <span class="token punctuation">}</span><span class="token punctuation">,</span> t<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        box<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'mousemove'</span><span class="token punctuation">,</span><span class="token function">dedounce</span><span class="token punctuation">(</span>mouseMove<span class="token punctuation">,</span><span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


