<template><div><h1 id="四、运算符" tabindex="-1"><a class="header-anchor" href="#四、运算符"><span>四、运算符</span></a></h1>
<p>运算符（操作符）</p>
<h2 id="_4-1-算术运算符" tabindex="-1"><a class="header-anchor" href="#_4-1-算术运算符"><span>4.1 算术运算符</span></a></h2>
<ul>
<li>运算符可以用来对一个或者多个操作数（值）进行运算
<ul>
<li>
<ul>
<li>加法运算符</li>
</ul>
</li>
<li>
<ul>
<li>剑法运算符</li>
</ul>
</li>
<li>
<ul>
<li>乘法运算符</li>
</ul>
</li>
<li>/ 除法运算符</li>
<li>** 幂运算符</li>
<li>% 模运算，像个数相除取余数</li>
</ul>
</li>
<li>注意：
算术运算时，除了字符串的加法，其他运算的操作数时非数值时，都会转换为数值然后运算</li>
<li>其他特点
<ol>
<li>JS是一门弱类型语言，当进行运算时会通过自动的类型转换来完成运算</li>
<li>当任意一个值和字符串做加法运算时，他会先将其他值转换为字符串，然后再做拼串的操作；可以利用这一特定来完成类型转换，通过任意类型 + 一个空串的形式来将其转换为字符串，其原理和String()函数相同，但使用起来更加简洁</li>
</ol>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">//2</span></span>
<span class="line">a <span class="token operator">=</span> <span class="token number">10</span> <span class="token operator">-</span> <span class="token number">5</span><span class="token punctuation">;</span> <span class="token comment">//5</span></span>
<span class="line">a <span class="token operator">=</span> <span class="token number">2</span> <span class="token operator">*</span> <span class="token number">4</span><span class="token punctuation">;</span> <span class="token comment">//8</span></span>
<span class="line">a <span class="token operator">=</span> <span class="token number">10</span> <span class="token operator">/</span> <span class="token number">5</span><span class="token punctuation">;</span> <span class="token comment">//2</span></span>
<span class="line">a <span class="token operator">=</span> <span class="token number">10</span> <span class="token operator">/</span> <span class="token number">3</span><span class="token punctuation">;</span> <span class="token comment">//3</span></span>
<span class="line">a <span class="token operator">=</span> <span class="token number">10</span> <span class="token operator">/</span> <span class="token number">0</span>  <span class="token comment">//Infinity</span></span>
<span class="line">a <span class="token operator">=</span> <span class="token number">10</span> <span class="token operator">**</span> <span class="token number">4</span> <span class="token comment">//平方</span></span>
<span class="line">a <span class="token operator">=</span> <span class="token number">9</span> <span class="token operator">**</span> <span class="token number">.5</span> <span class="token comment">//开方</span></span>
<span class="line">a <span class="token operator">=</span> <span class="token number">10</span> <span class="token operator">%</span> <span class="token number">2</span> <span class="token comment">//余数是0</span></span>
<span class="line">a <span class="token operator">=</span> <span class="token number">10</span> <span class="token operator">%</span> <span class="token number">3</span> <span class="token comment">//1</span></span>
<span class="line"></span>
<span class="line">a <span class="token operator">=</span> <span class="token number">10</span> <span class="token operator">-</span> <span class="token string">'5'</span> <span class="token comment">//10 - 5</span></span>
<span class="line">a <span class="token operator">=</span> <span class="token number">10</span> <span class="token operator">+</span> <span class="token boolean">true</span> <span class="token comment">//10 + 1</span></span>
<span class="line">a <span class="token operator">=</span> <span class="token number">5</span> <span class="token operator">+</span> <span class="token keyword">null</span> <span class="token comment">//5 + 0</span></span>
<span class="line">a <span class="token operator">=</span> <span class="token number">6</span> <span class="token operator">-</span> <span class="token keyword">undefined</span> <span class="token comment">//6 - NaN</span></span>
<span class="line"></span>
<span class="line">a <span class="token operator">=</span> <span class="token string">'hello'</span> <span class="token operator">+</span> <span class="token string">'world'</span><span class="token punctuation">;</span> <span class="token comment">//"hello world"</span></span>
<span class="line">a <span class="token operator">=</span> <span class="token string">'1'</span> <span class="token operator">+</span> <span class="token number">2</span> <span class="token comment">//"1" + "2" = "12" </span></span>
<span class="line">a <span class="token operator">=</span> <span class="token boolean">true</span>    <span class="token comment">//true</span></span>
<span class="line">a <span class="token operator">=</span> <span class="token boolean">true</span> <span class="token operator">+</span> <span class="token string">''</span>  <span class="token comment">//"true"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-2-一元的正负-±" tabindex="-1"><a class="header-anchor" href="#_4-2-一元的正负-±"><span>4.2 一元的正负（±）</span></a></h2>
<ul>
<li><code v-pre>+</code> 正号
不会改变数值的符号</li>
<li><code v-pre>-</code> 符号
可以对数值进行符号位取反</li>
<li>特点
当我们对非数值类型进行正负运算时，会先将其转换为数值然后再运算
b = + b   //b = Number(b)</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">    <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">10</span></span>
<span class="line">    a <span class="token operator">=</span> <span class="token operator">-</span> a<span class="token punctuation">;</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//10</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token string">'123'</span></span>
<span class="line">    b <span class="token operator">=</span> <span class="token operator">+</span> b <span class="token comment">//b = Number(b)</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> b<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//number 10</span></span>
<span class="line">    </span>
<span class="line">    b <span class="token operator">=</span> <span class="token function">Number</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> b<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//number 10</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、自增与自减</p>
<ul>
<li><code v-pre>++</code>自增运算符
<ul>
<li>++使用后会使得原来的变量立刻增加1</li>
<li>自增分为前自增（<code v-pre>++a</code>）和后自增（<code v-pre>a++</code>）</li>
<li>无论时<code v-pre>++a</code>还是<code v-pre>a++</code>都会使原变量立刻加1</li>
<li>不同的是 <code v-pre>++a</code> 和 <code v-pre>a++</code> 所返回的值不同
<ul>
<li>a++ 是自增前的值 旧值</li>
<li>++a 是自增后的值 新值</li>
</ul>
</li>
</ul>
</li>
<li><code v-pre>--</code>自减运算符
<ul>
<li><code v-pre>-</code> <code v-pre>--</code>使用后会使得原来的变量立刻减去1</li>
<li>自增分为前自减（<code v-pre>--a</code>）和后自减（<code v-pre>a--</code>）</li>
<li>无论时<code v-pre>--a</code>还是<code v-pre>a--</code>都会使原变量立刻减1</li>
<li>不同的是 <code v-pre>--a</code> 和 <code v-pre>a--</code> 所返回的值不同
<ul>
<li><code v-pre>a--</code> 是自减前的值 旧值</li>
<li><code v-pre>--a</code> 是自减后的值 新值</li>
</ul>
</li>
</ul>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">10</span></span>
<span class="line">a <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line">a <span class="token operator">=</span> a <span class="token operator">+</span> <span class="token number">1</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//2</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> b <span class="token operator">=</span> a<span class="token operator">++</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> c <span class="token operator">=</span> <span class="token operator">++</span>a<span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">,</span> c<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//3</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> n <span class="token operator">=</span> <span class="token number">5</span></span>
<span class="line"><span class="token keyword">let</span> result <span class="token operator">=</span> n<span class="token operator">++</span> <span class="token operator">+</span> <span class="token operator">++</span>n <span class="token operator">+</span> n</span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//5 + 7 + 7 = 19</span></span>
<span class="line"></span>
<span class="line">a <span class="token operator">=</span> <span class="token number">5</span></span>
<span class="line">a<span class="token operator">--</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//4</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-4-逻辑运算符" tabindex="-1"><a class="header-anchor" href="#_4-4-逻辑运算符"><span>4.4 逻辑运算符</span></a></h2>
<h3 id="_4-4-1-逻辑非" tabindex="-1"><a class="header-anchor" href="#_4-4-1-逻辑非"><span>4.4.1 逻辑非</span></a></h3>
<p><code v-pre>!</code> 【逻辑非】</p>
<ul>
<li><code v-pre>!</code> 可以用来对一个值进行非运算SS</li>
<li>它可以对一个布尔值进行取反操作
<ul>
<li>true -&gt; false</li>
<li>false -&gt; true</li>
</ul>
</li>
<li>如果对一个非布尔值进行取反，他会先将其转换成布尔值然后进行取反
可以利用这个特点将其他类型转换成布尔值</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">    <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token boolean">true</span></span>
<span class="line">    a <span class="token operator">=</span> <span class="token operator">!</span>a</span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//false</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-4-2-逻辑与" tabindex="-1"><a class="header-anchor" href="#_4-4-2-逻辑与"><span>4.4.2 逻辑与</span></a></h3>
<p><code v-pre>&amp;&amp;</code>【 逻辑与】</p>
<ul>
<li>可以对两个值进行与运算</li>
<li>当&amp;&amp;左右都为true时，刚返回true,否则返回false</li>
<li>与运算是短路的与，如果第一个值为false,则不看第二个值</li>
<li>与运算是直接找false的，如果找到false则直接返回，没有false才会返回true</li>
<li>对于非布尔值进行与运算时，他会转换为布尔值然后运算
<ul>
<li>但是最终会返回原值
<ul>
<li>如果第一个值为false,则直接返回第一个</li>
<li>如果第一个值为true,则返回第二个值</li>
</ul>
</li>
</ul>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token boolean">true</span> <span class="token operator">&amp;&amp;</span> <span class="token boolean">true</span> <span class="token comment">//true</span></span>
<span class="line">result <span class="token operator">=</span> <span class="token boolean">true</span> <span class="token operator">&amp;&amp;</span> <span class="token boolean">false</span> <span class="token comment">//false</span></span>
<span class="line">result <span class="token operator">=</span> <span class="token boolean">false</span> <span class="token operator">&amp;&amp;</span> <span class="token boolean">true</span> <span class="token comment">//false</span></span>
<span class="line">result <span class="token operator">=</span> <span class="token boolean">false</span> <span class="token operator">&amp;&amp;</span> <span class="token boolean">false</span> <span class="token comment">//false</span></span>
<span class="line"><span class="token comment">// true &amp;&amp; alert(123) //第一个值为true alert会执行</span></span>
<span class="line"><span class="token boolean">false</span> <span class="token operator">&amp;&amp;</span> <span class="token function">alert</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span> <span class="token comment">//第一个值为false alert不会执行</span></span>
<span class="line"><span class="token comment">//      true &amp;&amp; true ->true</span></span>
<span class="line">result <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span> <span class="token number">2</span> <span class="token comment">//2</span></span>
<span class="line"><span class="token comment">//      true &amp;&amp; false ->false</span></span>
<span class="line">result <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span> <span class="token number">0</span> <span class="token comment">//0</span></span>
<span class="line"><span class="token comment">//      false &amp;&amp; false ->false</span></span>
<span class="line">result <span class="token operator">=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> <span class="token number">NaN</span> <span class="token comment">//0</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-4-3-逻辑或" tabindex="-1"><a class="header-anchor" href="#_4-4-3-逻辑或"><span>4.4.3 逻辑或</span></a></h3>
<p><code v-pre>||</code> 【逻辑或】</p>
<ul>
<li>可以对两个值进行或运算</li>
<li>当||左右有true时，则返回true,否则返回false</li>
<li>或运算也是短路的或，如果第一个值为true,则不看第二个值</li>
<li>或运算是找true,如果找到true则直接返回，如果没有true才会返回false</li>
<li>对于非布尔值或运算，他会转换为布尔值然后运算
<ul>
<li>但是最终返回原值
<ul>
<li>如果第一个值为true,则直接返回第一个值</li>
<li>如果第一个值为false,则返回第二个值</li>
</ul>
</li>
</ul>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">result <span class="token operator">=</span> <span class="token boolean">true</span> <span class="token operator">||</span> <span class="token boolean">false</span> <span class="token comment">//true</span></span>
<span class="line">result <span class="token operator">=</span> <span class="token boolean">false</span> <span class="token operator">||</span> <span class="token boolean">true</span>  <span class="token comment">//true</span></span>
<span class="line">result <span class="token operator">=</span> <span class="token boolean">true</span> <span class="token operator">||</span> <span class="token boolean">true</span>   <span class="token comment">//true</span></span>
<span class="line">result <span class="token operator">=</span> <span class="token boolean">false</span> <span class="token operator">||</span> <span class="token boolean">false</span> <span class="token comment">//false</span></span>
<span class="line"></span>
<span class="line"><span class="token boolean">false</span> <span class="token operator">||</span> <span class="token function">alert</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span> <span class="token comment">//第一个值为false,alert会执行</span></span>
<span class="line"><span class="token boolean">true</span> <span class="token operator">||</span> <span class="token function">alert</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span> <span class="token comment">//第一个值为false,alert不会执行</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">result <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">||</span> <span class="token number">2</span> <span class="token comment">//1</span></span>
<span class="line">result <span class="token operator">=</span> <span class="token string">"hello"</span> <span class="token operator">||</span> <span class="token number">NaN</span> <span class="token comment">//"hello"</span></span>
<span class="line">result <span class="token operator">=</span> <span class="token number">NaN</span> <span class="token operator">||</span> <span class="token number">1</span> <span class="token comment">//1</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-5-关系运算符" tabindex="-1"><a class="header-anchor" href="#_4-5-关系运算符"><span>4.5 关系运算符</span></a></h2>
<p>关系运算符用来检查两个值之间的关系是否成立，成立返回true,不成立返回false</p>
<ul>
<li><code v-pre>&gt;</code>
用来检查左值是否大于右值</li>
<li><code v-pre>&gt;=</code>
用来检查左值是否大于或等于右值</li>
<li><code v-pre>&lt;</code>
用来检查左值是否小于右值</li>
<li><code v-pre>&lt;=</code>
用来检查左值是否小于等于右值</li>
</ul>
<p>注意：</p>
<ul>
<li>当对非数值进行关系运算时，它会先将其转换为数值然后再比较</li>
<li>当关系运算符的两端时两个字符串，他不会将字符串转换为数值，而是逐位的比较字符的Unicode编码，利用这个特点可以对字符串按照字母排序
注意比较两个字符串格式的数字时一定要进行类型转换</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token number">10</span> <span class="token operator">></span> <span class="token number">5</span> <span class="token comment">//true</span></span>
<span class="line">result <span class="token operator">=</span> <span class="token number">5</span> <span class="token operator">></span> <span class="token number">5</span>    <span class="token comment">//false</span></span>
<span class="line">result <span class="token operator">=</span> <span class="token number">5</span> <span class="token operator">>=</span> <span class="token number">5</span> <span class="token comment">//true</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">result <span class="token operator">=</span> <span class="token number">5</span> <span class="token operator">&lt;</span> <span class="token string">'10'</span><span class="token punctuation">;</span> <span class="token comment">//true</span></span>
<span class="line">result <span class="token operator">=</span> <span class="token string">"1"</span> <span class="token operator">></span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">//true</span></span>
<span class="line">result <span class="token operator">=</span> <span class="token string">'a'</span> <span class="token operator">&lt;</span> <span class="token string">'b'</span> <span class="token comment">//true</span></span>
<span class="line">result <span class="token operator">=</span> <span class="token string">'z'</span> <span class="token operator">&lt;</span> <span class="token string">'f'</span> <span class="token comment">//false</span></span>
<span class="line">result <span class="token operator">=</span> <span class="token string">'abc'</span> <span class="token operator">&lt;</span> <span class="token string">'b'</span> <span class="token comment">//true</span></span>
<span class="line">result <span class="token operator">=</span> <span class="token string">'12'</span> <span class="token operator">&lt;</span> <span class="token string">'2'</span> <span class="token comment">//true</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 检查num是否再5和10之间</span></span>
<span class="line"><span class="token keyword">let</span> num <span class="token operator">=</span> <span class="token number">60</span></span>
<span class="line"><span class="token comment">// result = 5 &lt; num &lt; 10; //作物写法 5&lt;num = true  true与10比较</span></span>
<span class="line">result <span class="token operator">=</span> <span class="token number">5</span> <span class="token operator">&lt;</span> num <span class="token operator">&amp;&amp;</span> num <span class="token operator">&lt;</span> <span class="token number">10</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-6-相等运算符" tabindex="-1"><a class="header-anchor" href="#_4-6-相等运算符"><span>4.6 相等运算符</span></a></h2>
<ul>
<li><code v-pre>==</code>
<ul>
<li>相等运算符：用来比较两个值是否相等</li>
<li>使用相等运算符比较两个不同类型的值时
<ul>
<li>它会将其转换为相同的类型（通常转换为数值）然后再比较</li>
<li>类型转换后值相同返回true</li>
</ul>
</li>
<li>null与undefined进行相等比较时会返回true</li>
<li>NaN不和任何值相等，包括它自身</li>
</ul>
</li>
<li><code v-pre>=== </code>
<ul>
<li>全等运算符，用来比较两个值是否全等</li>
<li>他不会进行自动的类型转换，如果两个值的类型不同直接返回false</li>
<li>null和undefined进行全等比较时会返回false</li>
</ul>
</li>
<li><code v-pre>!=</code>
<ul>
<li>不等，用来检查两个值是否不相等</li>
<li>会自动的进行类型转换</li>
</ul>
</li>
<li><code v-pre>!==</code>
<ul>
<li>不全等，比较两个值是否不全等</li>
<li>不会自动的类型转换</li>
</ul>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">==</span> <span class="token number">1</span> <span class="token comment">//true</span></span>
<span class="line">result <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">==</span> <span class="token number">2</span> <span class="token comment">//false</span></span>
<span class="line">result <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">==</span> <span class="token string">'1'</span> <span class="token comment">//true</span></span>
<span class="line">result <span class="token operator">=</span> <span class="token boolean">true</span> <span class="token operator">==</span> <span class="token string">'1'</span> <span class="token comment">//true</span></span>
<span class="line">result <span class="token operator">=</span> <span class="token keyword">null</span> <span class="token operator">==</span> <span class="token keyword">undefined</span> <span class="token comment">//true 没有转数字</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">result <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">===</span> <span class="token string">'1'</span> <span class="token comment">//false</span></span>
<span class="line">result <span class="token operator">=</span> <span class="token keyword">null</span> <span class="token operator">===</span> <span class="token keyword">undefined</span> <span class="token comment">//false</span></span>
<span class="line">result <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">!=</span> <span class="token number">1</span> <span class="token comment">//false</span></span>
<span class="line">result <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">!=</span> <span class="token string">"1"</span> <span class="token comment">//false</span></span>
<span class="line">result <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">!==</span> <span class="token number">1</span> <span class="token comment">//false</span></span>
<span class="line">result <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">!==</span> <span class="token string">"1"</span> <span class="token comment">//true</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-7-条件运算符" tabindex="-1"><a class="header-anchor" href="#_4-7-条件运算符"><span>4.7 条件运算符</span></a></h2>
<h3 id="_4-7-1-公式" tabindex="-1"><a class="header-anchor" href="#_4-7-1-公式"><span>4.7.1 公式</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">条件表达式<span class="token operator">?</span>表达式<span class="token number">1</span><span class="token operator">:</span>表达式<span class="token number">2</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_4-7-2-执行顺序" tabindex="-1"><a class="header-anchor" href="#_4-7-2-执行顺序"><span>4.7.2 执行顺序</span></a></h3>
<p>条件运算符在执行时，会先对条件表达式进行求值判断</p>
<ul>
<li>如果结果时true,则会执行表达式1</li>
<li>如果结果时false,则会执行表达式2</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">,</span> b <span class="token operator">=</span> <span class="token number">20</span></span>
<span class="line"><span class="token comment">// a > b ? alert('a大！') : alert('b大！')</span></span>
<span class="line"><span class="token keyword">let</span> max <span class="token operator">=</span> a <span class="token operator">></span> b <span class="token operator">?</span> a <span class="token operator">:</span> b</span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>max<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-8-运算符与优先级" tabindex="-1"><a class="header-anchor" href="#_4-8-运算符与优先级"><span>4.8 运算符与优先级</span></a></h2>
<p>和数学一样，JS中的运算符也有优先级，比如先乘除和加减
因为（）拥有最高的优先级，使用运算符时，如果遇到拿不准的，可以直接通过（）来改变优先级即可</p>
<p>可以通过优先级的表格来查询运算符的优先级
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Operator_precedence
在表格中位置越靠上的优先级越高，优先级越高先执行，优先级一样自左向右执行</p>
<p><img src="/script/JavaScript/base/003.png" alt=""></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">+</span> <span class="token number">2</span> <span class="token operator">*</span> <span class="token number">3</span> <span class="token comment">// 7</span></span>
<span class="line">a <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">&amp;&amp;</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token number">3</span> <span class="token comment">//2</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-9-类型转换的显式与隐式" tabindex="-1"><a class="header-anchor" href="#_4-9-类型转换的显式与隐式"><span>4.9 类型转换的显式与隐式</span></a></h2>
<ul>
<li>转换字符串
<ul>
<li>显示转换 String()</li>
<li>隐式转换 +&quot;&quot;</li>
</ul>
</li>
<li>转换为数值
<ul>
<li>显示转换 Number()</li>
<li>隐式转换 +</li>
</ul>
</li>
<li>转换为布尔值
<ul>
<li>显示转换 Boolean()</li>
<li>隐式转换 !!</li>
</ul>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span></span>
<span class="line">x <span class="token operator">=</span> x <span class="token operator">+</span> <span class="token string">""</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> x<span class="token punctuation">,</span> x<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//string 123</span></span>
<span class="line">x <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line">x <span class="token operator">=</span> x <span class="token operator">+</span> <span class="token string">""</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> x<span class="token punctuation">,</span> x<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//string true</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> y <span class="token operator">=</span> <span class="token string">"123"</span><span class="token punctuation">;</span></span>
<span class="line">y <span class="token operator">=</span> <span class="token operator">+</span>y<span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> y<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//number 123</span></span>
<span class="line">y <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line">y <span class="token operator">=</span> <span class="token operator">+</span>y<span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> y<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//number 0</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> z <span class="token operator">=</span> <span class="token string">"123"</span><span class="token punctuation">;</span></span>
<span class="line">z <span class="token operator">=</span> <span class="token operator">!</span><span class="token operator">!</span>z<span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> z<span class="token punctuation">,</span> z<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//boolean true</span></span>
<span class="line">z <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">z <span class="token operator">=</span> <span class="token operator">!</span><span class="token operator">!</span>z<span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> z<span class="token punctuation">,</span> z<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//boolean false</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


