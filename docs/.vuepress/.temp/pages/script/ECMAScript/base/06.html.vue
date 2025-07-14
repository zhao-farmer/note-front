<template><div><h1 id="六、es11" tabindex="-1"><a class="header-anchor" href="#六、es11"><span>六、ES11</span></a></h1>
<h2 id="_6-1-promise-allsettled" tabindex="-1"><a class="header-anchor" href="#_6-1-promise-allsettled"><span>6.1 Promise.allSettled</span></a></h2>
<p>Promise.allSettled() 方法返回一个在所有给定的 promise 都已经 fulfilled 或 rejected 后的 promise ，并带有一个对象数组，每个对象表示对应的 promise 结果。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">ajax</span><span class="token punctuation">(</span><span class="token parameter">url</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span>reject</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">let</span> xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">        xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">"get"</span><span class="token punctuation">,</span>url<span class="token punctuation">,</span><span class="token boolean">true</span><span class="token punctuation">)</span></span>
<span class="line">        xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">        xhr<span class="token punctuation">.</span><span class="token function-variable function">onreadystatechange</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token comment">// xhr.readyState等于4 是执行完成</span></span>
<span class="line">            <span class="token keyword">if</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>readyState <span class="token operator">===</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                <span class="token keyword">if</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>status<span class="token operator">>=</span><span class="token number">200</span><span class="token operator">&amp;&amp;</span>xhr<span class="token punctuation">.</span>status<span class="token operator">&lt;</span><span class="token number">300</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                    <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>responseText<span class="token punctuation">)</span> <span class="token punctuation">)</span></span>
<span class="line">                <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span></span>
<span class="line">                    <span class="token function">reject</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>responseText<span class="token punctuation">)</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// allSettled 每个人物都会执行，出现问题并不会像all一样直接抛出异常</span></span>
<span class="line"><span class="token comment">// 状态是fulfilled是执行成功的</span></span>
<span class="line">Promise<span class="token punctuation">.</span><span class="token function">allSettled</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token function">ajax</span><span class="token punctuation">(</span><span class="token string">"./json/1.json"</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token function">ajax</span><span class="token punctuation">(</span><span class="token string">"./json/2.json"</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token function">ajax</span><span class="token punctuation">(</span><span class="token string">"./json/33.json"</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token operator">=></span><span class="token punctuation">{</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">let</span> res1 <span class="token operator">=</span> res<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token operator">=></span>item<span class="token punctuation">.</span>status <span class="token operator">===</span> <span class="token string">"fulfilled"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res1<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res1<span class="token punctuation">.</span><span class="token function">flatMap</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token operator">=></span>item<span class="token punctuation">.</span>value<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-2-module新增" tabindex="-1"><a class="header-anchor" href="#_6-2-module新增"><span>6.2 module新增</span></a></h2>
<h3 id="_6-2-1-动态导入-import" tabindex="-1"><a class="header-anchor" href="#_6-2-1-动态导入-import"><span>6.2.1 动态导入 import()</span></a></h3>
<p>标准用法的 import 导入的模块是静态的，会使所有被导入的模块，在加载时就被编译（无法做到按需编译，降低首页加载速度）。有些场景中，你可能希望根据条件导入模块或者按需导入模块，这时你可以使用动态导入代替静态导入。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 1. 无法使用动态导入的僵化问题</span></span>
<span class="line"><span class="token comment">/*  </span>
<span class="line">    ES11之前无法使用import动态导入</span>
<span class="line">    </span>
<span class="line">    </span>
<span class="line">    if(管理员){</span>
<span class="line">        import a from './1.js'</span>
<span class="line">    }else{</span>
<span class="line">        import b from './2.js'</span>
<span class="line">    }</span>
<span class="line">        </span>
<span class="line">    导致的问题，导入的文件必须全部导入，比较臃肿且相同类型需要重新命名</span>
<span class="line">*/</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 2.ES11的动态导入</span></span>
<span class="line"><span class="token keyword">const</span> admin <span class="token operator">=</span> <span class="token string">"管理员"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token string">"普通用户"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">login</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> user<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">let</span> obtn <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">"#login"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">obtn<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> role <span class="token operator">=</span> <span class="token function">login</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>role<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token function">render</span><span class="token punctuation">(</span>role<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// 方式一：Promise 使用 then 获取结果</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">render</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token operator">===</span> <span class="token string">"管理员"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// 加载1.js</span></span>
<span class="line">        <span class="token keyword">let</span> res1 <span class="token operator">=</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">"../js/1.js"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 返回的是Promise对象</span></span>
<span class="line">        res1<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// 加载2.js</span></span>
<span class="line">        <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">"./js/2.js"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">// 方式二：导入是Promise 可以配置async await</span></span>
<span class="line"><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">render2</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token operator">===</span> <span class="token string">"管理员"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">let</span> res1 <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">"./js/1.js"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res1<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">let</span> res2 <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">"./js/2.js"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res2<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 3. 如框架种的动态导入</span></span>
<span class="line"><span class="token comment">/* </span>
<span class="line">            </span>
<span class="line">    list = ["a.vue","b.vue","c.vue"]</span>
<span class="line">    list.foreach(item=>{</span>
<span class="line">        import(item)</span>
<span class="line">    })</span>
<span class="line">*/</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-2-2-import-meta" tabindex="-1"><a class="header-anchor" href="#_6-2-2-import-meta"><span>6.2.2 import.meta</span></a></h3>
<p>import.meta 会返回一个对象，有一个 url 属性，返回当前模块的url路径，只能在模块内部使用。</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>module<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">    <span class="token keyword">import</span> obj <span class="token keyword">from</span> <span class="token string">'./1.js'</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">//1.js</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="/script/ECMAScript/base/001.png" alt=""></p>
<h3 id="_6-2-3-export-as-obj-from-module" tabindex="-1"><a class="header-anchor" href="#_6-2-3-export-as-obj-from-module"><span>6.2.3 export * as obj from ‘module’</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">//1.js</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'111111'</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">test1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">   </span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">//2.js</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token operator">*</span> <span class="token keyword">as</span> obj1 <span class="token keyword">from</span> <span class="token string">'./1.js'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">"22222"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">test2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">   </span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>module<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">    <span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> obj <span class="token keyword">from</span> <span class="token string">'./2.js'</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-3-字符串的matchall方法" tabindex="-1"><a class="header-anchor" href="#_6-3-字符串的matchall方法"><span>6.3 字符串的matchAll方法</span></a></h2>
<p>matchAll() 方法返回一个包含所有匹配正则表达式的结果的迭代器。可以使用 for…of 遍历，或者使用 展开运算符(…) 或者 Array.from 转换为数组.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string"></span>
<span class="line">&lt;ul></span>
<span class="line">    &lt;li>11111&lt;/li></span>
<span class="line">    &lt;li>22222&lt;/li></span>
<span class="line">    &lt;li>33333&lt;/li></span>
<span class="line">    &lt;li>44444&lt;/li></span>
<span class="line">&lt;/ul></span>
<span class="line"></span><span class="token template-punctuation string">`</span></span></span>
<span class="line"><span class="token comment">// 正则表达式</span></span>
<span class="line"><span class="token keyword">let</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">&lt;li>(.*)&lt;\/li></span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>reg<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// ['&lt;li>11111&lt;/li>', '&lt;li>22222&lt;/li>', '&lt;li>33333&lt;/li>', '&lt;li>44444&lt;/li>']    </span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 方式一：直接分组获取</span></span>
<span class="line"><span class="token keyword">let</span> reg2 <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">&lt;li>(?&lt;content>.*)&lt;\/li></span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> match <span class="token operator">=</span> <span class="token keyword">null</span></span>
<span class="line"><span class="token keyword">let</span> list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token keyword">while</span><span class="token punctuation">(</span>match <span class="token operator">=</span> reg2<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>match<span class="token punctuation">.</span>groups<span class="token punctuation">.</span>content<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        list<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>match<span class="token punctuation">.</span>groups<span class="token punctuation">.</span>content<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">//  ['11111', '22222', '33333', '44444']</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 方式二：使用matchAll</span></span>
<span class="line"><span class="token keyword">let</span> iobj <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">matchAll</span><span class="token punctuation">(</span>reg2<span class="token punctuation">)</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>iobj<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// RegExpStringIterator 对象 属于迭代器  可以使用next() 获取每个</span></span>
<span class="line"><span class="token comment">// 这里使用forof 直接遍历出数据</span></span>
<span class="line"><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> i <span class="token keyword">of</span> iobj<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">.</span>groups<span class="token punctuation">.</span>content<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-4-bigint" tabindex="-1"><a class="header-anchor" href="#_6-4-bigint"><span>6.4 BigInt</span></a></h2>
<p>JavaScript 能够准确表示的整数范围在-253 到 253之间（不含两个端点），超过这个范围，无法精确表示这个值，这使得 JavaScript 不适合进行科学和金融方面的精确计算。</p>
<h3 id="_6-4-1-问题" tabindex="-1"><a class="header-anchor" href="#_6-4-1-问题"><span>6.4.1 问题</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token number">9007199254740992</span> <span class="token comment">//9007199254740992</span></span>
<span class="line"><span class="token number">9007199254740993</span> <span class="token comment">//9007199254740992</span></span>
<span class="line"></span>
<span class="line">Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">53</span><span class="token punctuation">)</span> <span class="token operator">===</span> Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">53</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token number">1</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>为了与 Number 类型区别，BigInt 类型的数据必须添加后缀n</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token number">1234</span> <span class="token comment">// 普通整数</span></span>
<span class="line"><span class="token number">1234n</span> <span class="token comment">// BigInt</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// BigInt 的运算</span></span>
<span class="line"><span class="token number">1n</span> <span class="token operator">+</span> <span class="token number">2n</span> <span class="token comment">// 3n</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-4-2-基础使用" tabindex="-1"><a class="header-anchor" href="#_6-4-2-基础使用"><span>6.4.2 基础使用</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">**</span> <span class="token number">53</span><span class="token punctuation">)</span><span class="token punctuation">;</span>       <span class="token comment">//9007199254740992</span></span>
<span class="line"><span class="token comment">// 超出范围无法再计算</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">**</span> <span class="token number">53</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">//9007199254740992</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 1.使用数值加n</span></span>
<span class="line"><span class="token keyword">let</span> num1 <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> num2 <span class="token operator">=</span> <span class="token number">123n</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num1<span class="token punctuation">,</span>num2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//123 123n</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num1 <span class="token operator">==</span> num2<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// true</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num1 <span class="token operator">===</span> num2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num1 <span class="token operator">&lt;</span> num2<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// false</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num1 <span class="token operator">></span> num2<span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// false</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 2. BigInt函数</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">BigInt</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num2 <span class="token operator">+</span> <span class="token function">BigInt</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token number">2.</span>案例</span>
<span class="line"><span class="token comment">// int 不能大于9007199254740992</span></span>
<span class="line"><span class="token keyword">let</span> jsonstr <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string"></span>
<span class="line"> {</span>
<span class="line">     "id":9007199254740993,</span>
<span class="line">     "list":[]</span>
<span class="line"> }</span>
<span class="line"></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>jsonstr<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// 1. 后端返回字符串</span></span>
<span class="line"><span class="token comment">// 2.引入一个模块 json-bigint</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-5-顶层对象globalthis" tabindex="-1"><a class="header-anchor" href="#_6-5-顶层对象globalthis"><span>6.5 顶层对象globalThis</span></a></h2>
<p>globalThis 提供了一个标准的方式来获取不同环境下的全局 this 对象（也就是全局对象自身）。不像 window 或者 self这些属性，它确保可以在有无窗口的各种环境下正常工作。所以，你可以安心的使用 globalThis，不必担心它的运行环境。为便于记忆，你只需要记住，全局作用域中的 this 就是 globalThis。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>globalThis <span class="token operator">===</span> window<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'kerwin'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// globalThis 获取顶层对象</span></span>
<span class="line">        <span class="token comment">// globalThis 主要是node.js端也可以用</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span>globalThis<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token comment">// window 与 self 获取浏览器对象</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>window<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-6-空值合并运算符" tabindex="-1"><a class="header-anchor" href="#_6-6-空值合并运算符"><span>6.6 空值合并运算符</span></a></h2>
<p>空值合并运算符（??）是一个逻辑运算符。当左侧操作数为 null 或 undefined 时，其返回右侧的操作数。否则返回左侧的操作数。</p>
<p>??和 || 的区别是什么呢?</p>
<ol>
<li>
<p>他们两个最大的区别就是 ’ '和 0，??的左侧 为 ’ '或者为 0 的时候，依然会返回左侧的值；</p>
</li>
<li>
<p>|| 会对左侧的数据进行boolean类型转换，所以’ '和 0 会被转换成false,返回右侧的值
// 使用??</p>
</li>
</ol>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> str1 <span class="token operator">=</span> <span class="token keyword">null</span> <span class="token operator">??</span> <span class="token string">"kerwin"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> str2 <span class="token operator">=</span> <span class="token keyword">undefined</span> <span class="token operator">??</span> <span class="token string">"kerwin"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> str3 <span class="token operator">=</span> <span class="token number">NaN</span> <span class="token operator">??</span> <span class="token string">"kerwin"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> str4 <span class="token operator">=</span> <span class="token number">0</span> <span class="token operator">??</span> <span class="token string">"kerwin"</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str1<span class="token punctuation">,</span> str2<span class="token punctuation">,</span> str3<span class="token punctuation">,</span> str4<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// kerwin kerwin NaN 0</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 使用||</span></span>
<span class="line"><span class="token keyword">let</span> str5 <span class="token operator">=</span> <span class="token keyword">null</span> <span class="token operator">||</span> <span class="token string">"kerwin"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> str6 <span class="token operator">=</span> <span class="token keyword">undefined</span> <span class="token operator">||</span> <span class="token string">"kerwin"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> str7 <span class="token operator">=</span> <span class="token number">NaN</span> <span class="token operator">||</span> <span class="token string">"kerwin"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> str8 <span class="token operator">=</span> <span class="token number">0</span> <span class="token operator">||</span> <span class="token string">"kerwin"</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str5<span class="token punctuation">,</span> str6<span class="token punctuation">,</span> str7<span class="token punctuation">,</span> str8<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// kerwin kerwin kerwin kerwin</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-7-可选链操作符" tabindex="-1"><a class="header-anchor" href="#_6-7-可选链操作符"><span>6.7 可选链操作符</span></a></h2>
<p>可选链前面的值如果是null或undefined，则不再执行后面的，之前返回可选链前面的值</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'kerwin'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">location</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">city</span><span class="token operator">:</span><span class="token string">"dalian"</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>location<span class="token punctuation">.</span>city<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 去除location</span></span>
<span class="line"><span class="token keyword">let</span> obj2 <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'kerwin'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token comment">// location:{</span></span>
<span class="line">    <span class="token comment">//     city:"dalian"</span></span>
<span class="line">    <span class="token comment">// }</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">// 旧版本写法</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj2 <span class="token operator">&amp;&amp;</span> obj2<span class="token punctuation">.</span>location <span class="token operator">&amp;&amp;</span> obj2<span class="token punctuation">.</span>location<span class="token punctuation">.</span>city<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// 新版本 使用可选链操作符</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj2<span class="token operator">?.</span>location<span class="token operator">?.</span>city <span class="token operator">??</span> <span class="token string">"北京"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


