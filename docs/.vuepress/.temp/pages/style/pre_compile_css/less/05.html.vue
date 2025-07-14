<template><div><h1 id="五、运算符" tabindex="-1"><a class="header-anchor" href="#五、运算符"><span>五、运算符</span></a></h1>
<p>算术运算符 +、-、*、/ 可以对任何数字、颜色或变量进行运算；
note： 算术运算符在加、减或比较之前会进行单位换算，计算的结果以最左侧操作数的单位类型为准。如果单位换算无效或失去意义，则忽略单位。乘法和除法不作转换</p>
<h2 id="_5-1-普通计算" tabindex="-1"><a class="header-anchor" href="#_5-1-普通计算"><span>5.1.普通计算</span></a></h2>
<div class="language-less line-numbers-mode" data-highlighter="prismjs" data-ext="less"><pre v-pre><code><span class="line"><span class="token comment">// 所有操作数被转换成相同的单位</span></span>
<span class="line"><span class="token variable">@var_1<span class="token punctuation">:</span></span> 5cm <span class="token operator">+</span> 10mm<span class="token punctuation">;</span> <span class="token comment">// 结果是 6cm  10mm === 1cm</span></span>
<span class="line"><span class="token variable">@var_2<span class="token punctuation">:</span></span> 2 <span class="token operator">-</span> 3cm <span class="token operator">-</span> 5mm<span class="token punctuation">;</span> <span class="token comment">// 结果是 -1.5cm；5mm === 0.5cm</span></span>
<span class="line"><span class="token variable">@var_3<span class="token punctuation">:</span></span> 2 <span class="token operator">+</span> 5px <span class="token operator">-</span> 3cm<span class="token punctuation">;</span> <span class="token comment">// 结果是 4px; cm-->px单位换算无效，则忽略3cm的单位</span></span>
<span class="line"><span class="token variable">@base<span class="token punctuation">:</span></span> 5%<span class="token punctuation">;</span></span>
<span class="line"><span class="token variable">@base_1<span class="token punctuation">:</span></span> <span class="token variable">@base</span> <span class="token operator">*</span> 2<span class="token punctuation">;</span> <span class="token comment">// 结果是 10%</span></span>
<span class="line"><span class="token variable">@base_2<span class="token punctuation">:</span></span> <span class="token variable">@base</span> <span class="token operator">+</span> <span class="token variable">@base_1</span><span class="token punctuation">;</span> <span class="token comment">// 结果是 15%</span></span>
<span class="line"><span class="token variable">@base<span class="token punctuation">:</span></span> 2cm <span class="token operator">*</span> 3mm<span class="token punctuation">;</span> <span class="token comment">// 结果是 6cm</span></span>
<span class="line"><span class="token selector">.box</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">    <span class="token property">width</span><span class="token punctuation">:</span> 100 <span class="token operator">+</span> 10px<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">width</span><span class="token punctuation">:</span> 100 <span class="token operator">-</span> 20px<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">width</span><span class="token punctuation">:</span> 100 <span class="token operator">*</span> 2px<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">width</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>100 <span class="token operator">/</span> 25rem<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//除法</span></span>
<span class="line">    <span class="token property">height</span><span class="token punctuation">:</span> 100 <span class="token operator">/</span> 25rem<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-2-颜色计算" tabindex="-1"><a class="header-anchor" href="#_5-2-颜色计算"><span>5.2.颜色计算</span></a></h2>
<div class="language-less line-numbers-mode" data-highlighter="prismjs" data-ext="less"><pre v-pre><code><span class="line"><span class="token comment">//less代码</span></span>
<span class="line"><span class="token variable">@color<span class="token punctuation">:</span></span> <span class="token punctuation">(</span>#224488 <span class="token operator">/</span> 2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 结果是 #112244</span></span>
<span class="line"><span class="token variable">@color_1<span class="token punctuation">:</span></span> #112244 <span class="token operator">+</span> #111<span class="token punctuation">;</span> <span class="token comment">// 结果是 #223355</span></span>
<span class="line"><span class="token variable">@color_2<span class="token punctuation">:</span></span> <span class="token punctuation">(</span>#FFFFFF <span class="token operator">/</span> 16<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//结果是 #101010</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-3-calc" tabindex="-1"><a class="header-anchor" href="#_5-3-calc"><span>5.3.calc()</span></a></h2>
<p>为了与 CSS 保持兼容，calc() 并不对数学表达式进行计算，但是在嵌套函数中会计算变量和数学公式的值</p>
<div class="language-less line-numbers-mode" data-highlighter="prismjs" data-ext="less"><pre v-pre><code><span class="line"><span class="token variable">@var<span class="token punctuation">:</span></span> 50vh<span class="token operator">/</span>2<span class="token punctuation">;</span></span>
<span class="line"><span class="token selector">p</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>50% <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token variable">@var</span> <span class="token operator">-</span> 20px<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 结果是 calc(50% + (25vh - 20px))</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


