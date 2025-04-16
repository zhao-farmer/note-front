import{_ as s,c as a,b as p,o as t}from"./app-DzsfPIyd.js";const l={};function e(c,n){return t(),a("div",null,n[0]||(n[0]=[p(`<h1 id="apply、call、bind的区别" tabindex="-1"><a class="header-anchor" href="#apply、call、bind的区别"><span>apply、call、bind的区别</span></a></h1><p>call、apply、bind方法的共同点和区别：</p><ol><li>apply、call、bind 三者都是用来改变函数的this对象的指向的；</li><li>apply、call、bind 三者第一个参数都是this要指向的对象，也就是想指定的上下文（函数的每次调用都会拥有一个特殊值——本次调用的上下文（context）——这就是this关键字的值。）；</li><li>apply、call、bind 三者都可以利用后续参数传参；</li><li>bind 是返回对应函数，便于稍后调用；apply 、call 则是立即调用 。</li></ol><h2 id="_1-call-函数" tabindex="-1"><a class="header-anchor" href="#_1-call-函数"><span>1. call()函数</span></a></h2><ul><li>语法：fn.call(thisArg，arg1，arg2.....) <ul><li>其中thisArg就是fun函数运行时的指定的this值。arg1，arg2传递的其他值.....</li><li>其中thisArg有下面4种情况： <ol><li>不传，或者传null,undefined， 函数中的this指向window对象</li><li>传递另一个函数的函数名，函数中的this指向这个函数的引用</li><li>传递字符串、数值或布尔类型等基础类型，函数中的this指向其对应的包装对象，如 String、Number、Boolean</li><li>传递一个对象，函数中的this指向这个对象</li></ol></li></ul></li></ul><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">a</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//输出函数a中的this对象</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">b</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">var</span> c <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;call&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">//定义对象c</span></span>
<span class="line"></span>
<span class="line"><span class="token function">a</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//window</span></span>
<span class="line"><span class="token function">a</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//window</span></span>
<span class="line"><span class="token function">a</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//window</span></span>
<span class="line"><span class="token function">a</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//Number</span></span>
<span class="line"><span class="token function">a</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//String</span></span>
<span class="line"><span class="token function">a</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//Boolean</span></span>
<span class="line"><span class="token function">a</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//function b(){}</span></span>
<span class="line"><span class="token function">a</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//Object</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 常用例子：</span></span>
<span class="line"><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;Lucy&quot;</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x <span class="token operator">+</span> y<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//1、调用函数；2、改变this的指向</span></span>
<span class="line"><span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//还可以传递参数</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-apply-函数" tabindex="-1"><a class="header-anchor" href="#_2-apply-函数"><span>2. apply()函数</span></a></h2><ul><li>语法：fn.apply(thisArg，[arg1，arg2.....])</li><li>说明：如果 thisArg 不是一个有效的数组或者不是 arguments 对象，那么将导致一个 TypeError。</li><li>如果没有提供 任何一个参数，那么 Global 对象将被用作 thisArg， 并且无法被传递任何参数。</li></ul><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token comment">//常用例子：</span></span>
<span class="line"><span class="token keyword">const</span> obj<span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">   <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Lucy&#39;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"> </span>
<span class="line"><span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span>y</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">   console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">   console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x<span class="token operator">+</span>y<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"> </span>
<span class="line"><span class="token comment">//1、调用函数；2、改变this的指向</span></span>
<span class="line"><span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span>   <span class="token comment">//还可以传递参数,必须以数组的形式出现</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-bind-函数" tabindex="-1"><a class="header-anchor" href="#_3-bind-函数"><span>3. bind()函数</span></a></h2><ul><li>语法：fn.bind(thisArg[, arg1[, arg2[, ... ]]]); <ul><li>thisArg:当绑定函数被调用时，该函数会作为原函数运行时的this指向，当使用new操作符调用绑定函数时，该参数无效。</li><li>arg1, arg2... :当绑定函数被调用时，这些参数将置于实参之前传递给被绑定的方法。</li></ul></li><li>返回值：返回由指定的this值和初始化参数改造的原函数拷贝。</li></ul><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">&quot;The Window&quot;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">var</span> object <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">   <span class="token literal-property property">name</span> <span class="token operator">:</span> <span class="token string">&quot;My Object&quot;</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token function-variable function">getNameFunc</span> <span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">       <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">           <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">;</span></span>
<span class="line">       <span class="token punctuation">}</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span></span>
<span class="line">   <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>object<span class="token punctuation">.</span><span class="token function">getNameFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//&gt;My Object</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12)]))}const i=s(l,[["render",e],["__file","01.html.vue"]]),u=JSON.parse('{"path":"/other/knowledge/javascript/01.html","title":"apply、call、bind的区别","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"1. call()函数","slug":"_1-call-函数","link":"#_1-call-函数","children":[]},{"level":2,"title":"2. apply()函数","slug":"_2-apply-函数","link":"#_2-apply-函数","children":[]},{"level":2,"title":"3. bind()函数","slug":"_3-bind-函数","link":"#_3-bind-函数","children":[]}],"git":{"updatedTime":1744806830000,"contributors":[{"name":"zhao-farmer","username":"zhao-farmer","email":"857899180@qq.com","commits":1,"url":"https://github.com/zhao-farmer"}]},"filePathRelative":"other/knowledge/javascript/01.md"}');export{i as comp,u as data};
