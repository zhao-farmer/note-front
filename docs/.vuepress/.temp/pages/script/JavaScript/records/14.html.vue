<template><div><h1 id="十四、异常处理" tabindex="-1"><a class="header-anchor" href="#十四、异常处理"><span>十四、异常处理</span></a></h1>
<h2 id="_14-1-throw-抛异常" tabindex="-1"><a class="header-anchor" href="#_14-1-throw-抛异常"><span>14.1 throw 抛异常</span></a></h2>
<p>异常处理是指预估代码执行过程中可能发生的错误，然后最大程度的避免错误的发生导致整个程序无法继续运行</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span>y</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>x <span class="token operator">||</span> <span class="token operator">!</span>y<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">'用户没有参数传递！'</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">return</span> x <span class="token operator">+</span> y</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>总结:</p>
<ol>
<li>throw 抛出异常信息，程序也会终止执行</li>
<li>throw 后面跟的是错误提示信息</li>
<li>Error 对象配合 throw 使用，能够设置更详细的错误信息</li>
</ol>
<h2 id="_14-2-try-catch-捕获错误信息" tabindex="-1"><a class="header-anchor" href="#_14-2-try-catch-捕获错误信息"><span>14.2 try/catch 捕获错误信息</span></a></h2>
<p>我们可以通过try/catch捕获错误信息（浏览器提供的错误信息）try 试试 catch 拦住 finally 最后</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>123<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">try</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token comment">// 可能发生错误的代码 要写到 try</span></span>
<span class="line">            <span class="token keyword">const</span> p <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.p'</span><span class="token punctuation">)</span></span>
<span class="line">            p<span class="token punctuation">.</span>style<span class="token punctuation">.</span>color <span class="token operator">=</span> <span class="token string">'red'</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token keyword">catch</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">             <span class="token comment">// 拦截错误，提示浏览器提供的错误信息，但是不中断程序的执行</span></span>
<span class="line">             console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>error<span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">             <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">'你看看，选择器错误了吧'</span><span class="token punctuation">)</span></span>
<span class="line">             <span class="token comment">// 中止代码继续执行</span></span>
<span class="line">             <span class="token comment">// return</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token keyword">finally</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token comment">// 不管你程序对不对，一定会执行的代码</span></span>
<span class="line">            <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"弹出对话框"</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"如果出现错误，我不会执行"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>总结</p>
<ol>
<li>try...catch 用于捕获错误信息</li>
<li>将预估可能发生错误的代码写在 try 代码段中</li>
<li>如果 try 代码段中出现错误后，会执行 catch 代码段，并截获到错误信息</li>
<li>finally 不管是否有错误，都会执行</li>
</ol>
<h2 id="_14-3-debugger" tabindex="-1"><a class="header-anchor" href="#_14-3-debugger"><span>14.3 debugger</span></a></h2>
<p>直接在代码中写入断点</p>
<p>打开网页开启f12 即可观察到断点</p>
<p>断点的作用：配合webworker 挡住其他人查看自身的网页</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> arr <span class="token operator">=</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token keyword">const</span> newArr <span class="token operator">=</span>arr<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span>index</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">debugger</span>    </span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span>   <span class="token comment">// 当前元素</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span>  <span class="token comment">// 当前元素索引号</span></span>
<span class="line">    <span class="token keyword">return</span> item<span class="token operator">+</span><span class="token number">10</span>  <span class="token comment">//让当前元素+10</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newArr<span class="token punctuation">)</span> <span class="token comment">//[11,13，15]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


