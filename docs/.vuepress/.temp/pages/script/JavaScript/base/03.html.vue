<template><div><h1 id="三、数据类型" tabindex="-1"><a class="header-anchor" href="#三、数据类型"><span>三、数据类型</span></a></h1>
<p>数据类型，值那些可以赋值给变量的值，JS中的数据类型由原始值和对象共同组成。</p>
<p>javaScript中一共有七种原始值</p>
<ol>
<li>数值（Number）</li>
<li>大整数（Bigint）</li>
<li>字符串（String）</li>
<li>布尔值（Boolean）</li>
<li>空值（Null）</li>
<li>未定义（Undefined）</li>
<li>符号Symbol</li>
</ol>
<p>原始值在JS中是不可变类型，一旦创建出来就不能修改</p>
<h2 id="_3-1-数值" tabindex="-1"><a class="header-anchor" href="#_3-1-数值"><span>3.1 数值</span></a></h2>
<ol>
<li>数值 （Number）</li>
</ol>
<ul>
<li>在js中所有的整数和浮点数都是number类型</li>
<li>JS中的数值并不是无限大的，当数值超过一定范围后会显示近似值</li>
<li>Infinity 是一个特殊的数值表示无穷</li>
<li>所以在JS中进行一些精度比较高的运算时要十分注意</li>
<li>NaN 也是一个特殊的数值，表示非法的数值</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//Number</span></span>
<span class="line">a <span class="token operator">=</span> <span class="token number">10.5</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//Number</span></span>
<span class="line"></span>
<span class="line">a <span class="token operator">=</span> <span class="token number">99999999999999991</span><span class="token punctuation">;</span> </span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//99999999999999980</span></span>
<span class="line"></span>
<span class="line">a <span class="token operator">=</span> <span class="token number">99999</span> <span class="token operator">**</span> <span class="token number">99999</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//Infinity</span></span>
<span class="line"></span>
<span class="line">a <span class="token operator">=</span> <span class="token number">0.1</span> <span class="token operator">+</span> <span class="token number">0.2</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//0.3000000001</span></span>
<span class="line"></span>
<span class="line">a <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">-</span> <span class="token string">'a'</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//NaN</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>大整数（bigInt）</li>
</ol>
<ul>
<li>大整数用来表示一些表较大的整数</li>
<li>大整数使用n结尾，它可以表示的数字范围时无限大</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">    a <span class="token operator">=</span> <span class="token number">9999999999999999999999999999999999999999999999999999999999999999999999999999</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="3">
<li>其他进制的表示：</li>
</ol>
<ul>
<li>二进制 0b</li>
<li>八进制 0o</li>
<li>十六进制 0x</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">a <span class="token operator">=</span> <span class="token number">0b1010</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//二进制转换为十进制 10</span></span>
<span class="line"></span>
<span class="line">a <span class="token operator">=</span> <span class="token number">0o10</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//八进制转换为十进制 8</span></span>
<span class="line"></span>
<span class="line">a <span class="token operator">=</span> <span class="token number">0xff</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//十六进制转换为十进制 255</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-2-类型检查" tabindex="-1"><a class="header-anchor" href="#_3-2-类型检查"><span>3.2 类型检查</span></a></h2>
<p>typeof 运算符</p>
<ul>
<li>typeof用来检查不通的值的类型</li>
<li>它会根据不同的值返回不同的结果</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token number">10n</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// number</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// bigint</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-3-字符串" tabindex="-1"><a class="header-anchor" href="#_3-3-字符串"><span>3.3  字符串</span></a></h2>
<ul>
<li>在JS中使用单引号或双引号来表示字符串</li>
<li>转义字符 \ 
&quot; -&gt; &quot;
' -&gt; '
\ -&gt; <br>
\t -&gt;制表符
\n -&gt; 换行</li>
<li>模板字符串
<ul>
<li>使用反单引号  来表示模板字符串</li>
<li>模板字符可以嵌入变量</li>
</ul>
</li>
<li>使用typeof检查一个字符串会返回 string-</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token string">'Hello'</span><span class="token punctuation">;</span></span>
<span class="line">a <span class="token operator">=</span> <span class="token string">"你好"</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//你好</span></span>
<span class="line"></span>
<span class="line">a <span class="token operator">=</span> <span class="token string">"这是一个\"字符串"</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//这是一个"字符串</span></span>
<span class="line"></span>
<span class="line">a <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">今天</span>
<span class="line">    天气</span>
<span class="line">    很好</span><span class="token template-punctuation string">`</span></span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> </span>
<span class="line"><span class="token comment">/* 今天</span>
<span class="line">    天气</span>
<span class="line">    很好 */</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> name <span class="token operator">=</span> <span class="token string">'孙悟空'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">你好，</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//你好，孙悟空</span></span>
<span class="line"><span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">b = </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>b<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//b = 10</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> c <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> c<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//number</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-4-其他的数据类型" tabindex="-1"><a class="header-anchor" href="#_3-4-其他的数据类型"><span>3.4 其他的数据类型</span></a></h2>
<ul>
<li>布尔值 （Boolean）
<ul>
<li>布尔值主要来进行逻辑判断</li>
<li>布尔值有两个 true 和 false</li>
<li>使用 typeof检查一个布尔值 会返回 boolean</li>
</ul>
</li>
<li>空值 （Null）
<ul>
<li>空值用来表示空对象</li>
<li>空值只有一个null</li>
<li>使用 typeof检查一个空值 会返回Object（使用typeof无法检查空值）</li>
</ul>
</li>
<li>未定义 （Undefined）
<ul>
<li>当声明一个变量没有赋值时，它的值就是undefined</li>
<li>当Undefined类型的值只有一个就是 undefined</li>
<li>使用typeof 检查一个Undefined类型的值时，会返回&quot;undefined&quot;（字符串）</li>
</ul>
</li>
<li>符号 （Symbol）
<ul>
<li>用来创建一个唯一的标识</li>
<li>使用typeof 检查符号会返回 “Symbol”</li>
</ul>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">    <span class="token keyword">let</span> bool <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>bool<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//true</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> bool<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//boolean</span></span>
<span class="line">    <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//null</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//object</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">let</span> d<span class="token punctuation">;</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//undefined</span></span>
<span class="line">    d <span class="token operator">=</span> <span class="token keyword">undefined</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//undefined</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> d<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//undefined</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">let</span> c <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//调用Symbol()创建了一个符号</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//Symbol()</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> c<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//symbol</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> <span class="token string">'&amp;'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//string</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-5-类型转换-字符串" tabindex="-1"><a class="header-anchor" href="#_3-5-类型转换-字符串"><span>3.5 类型转换-字符串</span></a></h2>
<p>类型转换指将一种数据类型转换成其他类型，将其他类型转换为（字符串，数值和布尔值）</p>
<ul>
<li>方法与函数
<ul>
<li>调用xxx的方法
-&gt; xxx.yyy()</li>
<li>调用xxx函数
-&gt; xxx()</li>
</ul>
</li>
<li>调用toString()方法将其他类型缓缓为字符串
注意：由于null和undefined中没有toString()，所以对这两个东西调用toString()时会报错</li>
<li>调用String()函数将其他类型转换成字符串
原理：
<ul>
<li>对于拥有toString()犯法的值调用String()h函数时，实际上就是在调用toString()方法</li>
<li>对于null,则直接转换为&quot;null&quot;</li>
<li>对于undefined，直接转换为&quot;undefined&quot;</li>
</ul>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span> <span class="token comment">//"10"</span></span>
<span class="line">a <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>  <span class="token comment">//"true"</span></span>
<span class="line">a <span class="token operator">=</span> <span class="token number">11n</span><span class="token punctuation">;</span>  <span class="token comment">//"11"</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> a<span class="token punctuation">,</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//bigint 11n</span></span>
<span class="line">a <span class="token operator">=</span> a<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> a<span class="token punctuation">,</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//string 11</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token number">33</span><span class="token punctuation">;</span></span>
<span class="line">b <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> b<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//object null</span></span>
<span class="line"><span class="token comment">//b = b.toString() //错误：Cannot read properties of null (reading 'toString')</span></span>
<span class="line">b <span class="token operator">=</span> <span class="token function">String</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> b<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//string null</span></span>
<span class="line">b <span class="token operator">=</span> <span class="token keyword">undefined</span> <span class="token comment">// "unfefined"</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> b<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//unfefined unfefined</span></span>
<span class="line"><span class="token comment">// b = b.toString() //错误 Cannot read properties of undefined (reading 'toString')</span></span>
<span class="line">b <span class="token operator">=</span> <span class="token function">String</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> b<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//string undefined</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-6-类型转换-数值" tabindex="-1"><a class="header-anchor" href="#_3-6-类型转换-数值"><span>3.6 类型转换-数值</span></a></h2>
<p>将其他的数据类型转换成数值</p>
<ul>
<li>
<p>使用Number函数将其他类型转换成数值
转换的情况：</p>
<ul>
<li>字符串
§ 如果字符串是一个合法的数字，则会自动转换为对应的数字
§ 日过字符串不是合法数字，则转换为NaN</li>
<li>布尔值
true转换为1，false转换为0</li>
<li>null
转换为0</li>
<li>undefined
转换为NaN</li>
</ul>
</li>
<li>
<p>专门用来将字符串转换为数值的两个方法</p>
<ul>
<li>parseInt()  --将一个字符串转换为一个整数
<ul>
<li>解析时，会自左向右读取一个字符串，自导读取到字符串中所有的有效的整数</li>
<li>使用使用的数据不是字符串 会先将数据转换字符串再使用函数</li>
<li>也可以使用parseInt()来对一个数字进行取整</li>
</ul>
</li>
<li>parseFloat() --将一个字符串转换为浮点数
<ul>
<li>解析时，会自左向右读取一个字符串，自导读取到字符串中所有的有效的小数</li>
</ul>
</li>
</ul>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token string">'123'</span><span class="token punctuation">;</span></span>
<span class="line">a <span class="token operator">=</span> <span class="token string">'abc'</span> <span class="token comment">//NaN</span></span>
<span class="line">a <span class="token operator">=</span> <span class="token string">'3.1415926'</span> <span class="token comment">//3.1415923</span></span>
<span class="line">a <span class="token operator">=</span> <span class="token string">'11px'</span> <span class="token comment">//NaN</span></span>
<span class="line">a <span class="token operator">=</span> <span class="token string">''</span> <span class="token comment">//0</span></span>
<span class="line">a <span class="token operator">=</span> <span class="token string">'   '</span> <span class="token comment">//0</span></span>
<span class="line">a <span class="token operator">=</span> <span class="token boolean">true</span> <span class="token comment">//1</span></span>
<span class="line">a <span class="token operator">=</span> <span class="token boolean">false</span> <span class="token comment">//0</span></span>
<span class="line">a <span class="token operator">=</span> <span class="token keyword">null</span> <span class="token comment">//0</span></span>
<span class="line">a <span class="token operator">=</span> <span class="token keyword">undefined</span> <span class="token comment">//NaN</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> a<span class="token punctuation">,</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//undefined undefined</span></span>
<span class="line"></span>
<span class="line">a <span class="token operator">=</span> <span class="token function">Number</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> a<span class="token punctuation">,</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//number NaN</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token string">'123px'</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> b<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//string 123px</span></span>
<span class="line"></span>
<span class="line">b <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> b<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//number 123</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-7-类型转换-布尔值" tabindex="-1"><a class="header-anchor" href="#_3-7-类型转换-布尔值"><span>3.7 类型转换-布尔值</span></a></h2>
<ul>
<li>使用Boolean()函数来将其他类型转换为布尔值
转换的情况
<ul>
<li>数字
<ul>
<li>0 和NaN转换为false</li>
<li>其余都是true</li>
</ul>
</li>
<li>字符串
<ul>
<li>空串转换false</li>
<li>其余是true</li>
</ul>
</li>
<li>null与undefined
<ul>
<li>都转换为false</li>
</ul>
</li>
<li>对象
<ul>
<li>对象会转换为true</li>
</ul>
</li>
</ul>
</li>
<li>所有标识空性的没有的错误的指都会转换为false:
<ul>
<li>0、NaN、空串、null、undefined、false</li>
</ul>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">//true</span></span>
<span class="line">a <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>    <span class="token comment">//true</span></span>
<span class="line">a <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">//false</span></span>
<span class="line">a <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token comment">//true</span></span>
<span class="line">a <span class="token operator">=</span> <span class="token number">NaN</span> <span class="token comment">//false</span></span>
<span class="line">a <span class="token operator">=</span> <span class="token number">Infinity</span> <span class="token comment">//true</span></span>
<span class="line"></span>
<span class="line">a <span class="token operator">=</span> <span class="token string">'abc'</span> <span class="token comment">//true</span></span>
<span class="line">a <span class="token operator">=</span> <span class="token string">'true'</span> <span class="token comment">//true</span></span>
<span class="line">a <span class="token operator">=</span> <span class="token string">'false'</span> <span class="token comment">//true</span></span>
<span class="line">a <span class="token operator">=</span> <span class="token string">''</span> <span class="token comment">//false</span></span>
<span class="line">a <span class="token operator">=</span> <span class="token string">' '</span> <span class="token comment">//true</span></span>
<span class="line">a <span class="token operator">=</span> <span class="token keyword">null</span></span>
<span class="line">a <span class="token operator">=</span> <span class="token keyword">undefined</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> a<span class="token punctuation">,</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//undefined undefined</span></span>
<span class="line">a <span class="token operator">=</span> <span class="token function">Boolean</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> a<span class="token punctuation">,</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//boolean false</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


