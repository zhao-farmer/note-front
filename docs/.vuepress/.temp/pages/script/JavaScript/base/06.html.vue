<template><div><h1 id="六、对象" tabindex="-1"><a class="header-anchor" href="#六、对象"><span>六、对象</span></a></h1>
<p>数据类型</p>
<ol>
<li>原始值
<ol>
<li>数值 Number</li>
<li>大整数 BigInt</li>
<li>字符串 String</li>
<li>布尔值 Boolean</li>
<li>空值 Null</li>
<li>未定义 Undefined</li>
<li>符号 Symbol</li>
</ol>
</li>
<li>对象
<ul>
<li>对象是JS中的一种复合数据类型</li>
<li>它相当于一个容器，在对象中可以存储各种不同类型数据</li>
<li>原始值智能用来表示一些简单的数据，不能表示复杂数据</li>
<li>比如：现在需要在程序中表示一个人的信息</li>
</ul>
</li>
</ol>
<h2 id="_6-1-认识对象" tabindex="-1"><a class="header-anchor" href="#_6-1-认识对象"><span>6.1 认识对象</span></a></h2>
<blockquote>
<p>对象中可以存储多个各种类型的数据
对象中存储的数据，我们称为属性</p>
</blockquote>
<ol>
<li>创建对象
<ul>
<li>使用Object方法创建</li>
<li>let obj = new Object(); 或 let obj = Object();</li>
</ul>
</li>
<li>向对象中添加属性
<ul>
<li>对象.属性名 = 属性值</li>
</ul>
</li>
<li>读取对象中属性
<ul>
<li>对象.属性</li>
<li>如果读取的是一个对象中没有的属性
<ul>
<li>不会报错二十undefined</li>
</ul>
</li>
</ul>
</li>
<li>修改对象中的属性
<ul>
<li>对象.属性名 = 属性值</li>
</ul>
</li>
<li>删除对象中的属性
<ul>
<li>delete 对象.属性名</li>
</ul>
</li>
</ol>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">obj<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">"孙悟空"</span><span class="token punctuation">;</span></span>
<span class="line">obj<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">18</span><span class="token punctuation">;</span></span>
<span class="line">obj<span class="token punctuation">.</span>gender <span class="token operator">=</span> <span class="token string">"男"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">//修改属性</span></span>
<span class="line">obj<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">"Tom sun "</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">//删除属性</span></span>
<span class="line"><span class="token keyword">delete</span> obj<span class="token punctuation">.</span>name<span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-2-对象的属性" tabindex="-1"><a class="header-anchor" href="#_6-2-对象的属性"><span>6.2 对象的属性</span></a></h2>
<ol>
<li>属性名
<ul>
<li>通常属性名就是一个字符串，所以属性名可以是任何值，没有什么特殊要求
<ul>
<li>但是 如果你的属性名太特殊了，不能直接使用，需要使用[]来设置</li>
<li>虽然如此，但是我们还是强烈建议属性名也按照标识符的规范命名</li>
</ul>
</li>
<li>也可以使用符号(symbol)作为属性名
<ul>
<li>获取这种属性时，也必须使用symbol</li>
<li>使用symbol添加的属性，通常时那些不希望被外界访问的属性</li>
</ul>
</li>
<li>使用[]去操作属性时，可以使用变量</li>
</ul>
</li>
<li>属性值
<ul>
<li>对象的属性值可以使用任何类型,也可以是个对象</li>
</ul>
</li>
<li>检查类型
<ul>
<li>使用typeof检查一个对象，它返回的是Object</li>
<li>使用typeof检查一个对象.属性，它返回的是属性的类型</li>
</ul>
</li>
<li>检查对象是否有属性
<ul>
<li>使用 in 运算符 检查
<ul>
<li>用来检查对象中是否含有某个属性</li>
<li>语法 属性名 in obj</li>
<li>如果有返回true,没有返回false</li>
</ul>
</li>
</ul>
</li>
</ol>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token function">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">obj<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">"孙悟空"</span><span class="token punctuation">;</span></span>
<span class="line">obj<span class="token punctuation">.</span>if <span class="token operator">=</span> <span class="token string">"哈哈"</span><span class="token punctuation">;</span><span class="token comment">//不建议</span></span>
<span class="line">obj<span class="token punctuation">.</span>let <span class="token operator">=</span> <span class="token string">"let"</span><span class="token punctuation">;</span><span class="token comment">//不建议</span></span>
<span class="line">obj<span class="token punctuation">[</span><span class="token string">"1211515@#@@#！！#"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"呵呵"</span><span class="token punctuation">;</span>  <span class="token comment">//不建议</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> mySymbol <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">//使用symbol作为属性名</span></span>
<span class="line">obj<span class="token punctuation">[</span>mySymbol<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"通过symbol添加的属性"</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">[</span>mySymbol<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">obj<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">18</span><span class="token punctuation">;</span></span>
<span class="line">obj<span class="token punctuation">[</span><span class="token string">'gender'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">'男'</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>gender<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">[</span><span class="token string">'gender'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">"address"</span><span class="token punctuation">;</span></span>
<span class="line">obj<span class="token punctuation">[</span>str<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"花果山"</span><span class="token punctuation">;</span>    <span class="token comment">//等价于 obj["address"] = "花果山";</span></span>
<span class="line">obj<span class="token punctuation">.</span>str <span class="token operator">=</span> <span class="token string">"haha"</span><span class="token punctuation">;</span> <span class="token comment">//使用.的形式添加属性时，不能使用变量</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> obj2 <span class="token operator">=</span> <span class="token function">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">obj2<span class="token punctuation">.</span>a <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span></span>
<span class="line">obj2<span class="token punctuation">.</span>b <span class="token operator">=</span> <span class="token string">"hello"</span></span>
<span class="line">obj2<span class="token punctuation">.</span>c <span class="token operator">=</span> <span class="token boolean">true</span></span>
<span class="line">obj2<span class="token punctuation">.</span>d <span class="token operator">=</span> <span class="token number">123n</span></span>
<span class="line">obj2<span class="token punctuation">.</span>f <span class="token operator">=</span> <span class="token function">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">obj2<span class="token punctuation">.</span>f<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">'猪八戒'</span><span class="token punctuation">;</span></span>
<span class="line">obj2<span class="token punctuation">.</span>f<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">28</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj2<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> obj<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//检查对象是否有属性</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"name"</span> <span class="token keyword">in</span> obj<span class="token punctuation">,</span> <span class="token string">"haha"</span> <span class="token keyword">in</span> obj<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-3-对象的字面量" tabindex="-1"><a class="header-anchor" href="#_6-3-对象的字面量"><span>6.3 对象的字面量</span></a></h2>
<ul>
<li>可以直接使用{} 来创建对象</li>
<li>使用{}所创建额对象，可以直接向对象中添加属性</li>
<li>语法：</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">属性名</span><span class="token operator">:</span>属性值<span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">[</span>属性值<span class="token punctuation">]</span><span class="token operator">:</span>属性值<span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token function">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> mySymbol <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> obj2 <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"孙悟空"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">[</span><span class="token string">'gender'</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token string">"男"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">[</span>mySymbol<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token string">"特殊的属性"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">hello</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> obj2<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> obj2<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-4-枚举属性" tabindex="-1"><a class="header-anchor" href="#_6-4-枚举属性"><span>6.4 枚举属性</span></a></h2>
<p>枚举属性，指将对象中的所有属性全部获取</p>
<p>for-in语句</p>
<ul>
<li>语法：</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> propName <span class="token keyword">in</span> 对象<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    语句<span class="token operator">...</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>for-in的循环体会执行多次，有几个属性就会执行几次
每次执行时，都会将一个属性名赋值给我们所定义的变量</li>
<li>注意：并不是所有的属性都可以枚举，比如 使用符号添加的属性</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"孙悟空"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">gender</span><span class="token operator">:</span> <span class="token string">"男"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token string">"花果山"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">[</span><span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token string">"测试的属性"</span><span class="token punctuation">,</span> <span class="token comment">//符号添加的小户型是不能枚举</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> propName <span class="token keyword">in</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>propName<span class="token punctuation">,</span> obj<span class="token punctuation">[</span>propName<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-5-可变类型" tabindex="-1"><a class="header-anchor" href="#_6-5-可变类型"><span>6.5 可变类型</span></a></h2>
<p><img src="/script/JavaScript/base/004.png" alt=""></p>
<ul>
<li>原始值都属于不可变类型，一旦创建就无法修改
<ul>
<li>在内存中不会创建重复的原始值</li>
</ul>
</li>
<li>对象可变类型
<ul>
<li>对象创建完成后，可以在任意的添加删除修改对象中的属性</li>
<li>注意：
<ul>
<li>当对两个对象进行相等或全等比较时，比较的是两个对象的内存地址</li>
<li>如果有两个变量同时指向一个对象，
<ul>
<li>通过一个变量修改对象时，对另外一个变量也会产生影响</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token function">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">obj<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">"孙悟空"</span><span class="token punctuation">;</span></span>
<span class="line">obj<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">18</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> obj2 <span class="token operator">=</span> <span class="token function">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> obj3 <span class="token operator">=</span> <span class="token function">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj2 <span class="token operator">==</span> obj3<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> obj4 <span class="token operator">=</span> obj<span class="token punctuation">;</span></span>
<span class="line">obj4<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">'猪八戒'</span>    <span class="token comment">//当我们修改一个对象时，所有指向该对象的变量都会收到影响</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj4<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj4 <span class="token operator">==</span> obj<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-6-修改属性值" tabindex="-1"><a class="header-anchor" href="#_6-6-修改属性值"><span>6.6 修改属性值</span></a></h2>
<ul>
<li>修改对象
修改对象时，如果有其他变量指向改对象 则所有指向该对象的变量都会收到影响</li>
<li>修改常量
修改变量时，只会影响当前的变量</li>
<li>在使用变量存储对象时，很容易因为修改变量指向的对象，提高代码的复杂度
所以通常情况下，声明存储对象的变量都会使用const</li>
<li>注意：
const指示进制变量被重新赋值，对对象的修改没有影响</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'孙悟空'</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">let</span> obj2 <span class="token operator">=</span> obj<span class="token punctuation">;</span></span>
<span class="line">obj2 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line">obj2<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">'猪八戒'</span> <span class="token comment">//修改对象</span></span>
<span class="line"><span class="token comment">// obj2 = null //修改变量</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj2<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> obj3 <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'猪八戒'</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">// obj3 = obj 会错误</span></span>
<span class="line">obj3<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">'沙和尚'</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj3<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-7-方法" tabindex="-1"><a class="header-anchor" href="#_6-7-方法"><span>6.7 方法</span></a></h2>
<p>方法（method）</p>
<ul>
<li>当一个对象的属性指向一个函数,那么我们就成这个函数时该对象的方法</li>
<li>调用函数就成为调用对象的方法</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line">obj<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">"孙悟空"</span><span class="token punctuation">;</span></span>
<span class="line">obj<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">18</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// 函数也可以成为一个对象的属性</span></span>
<span class="line">obj<span class="token punctuation">.</span><span class="token function-variable function">sayHello</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"hello"</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">obj<span class="token punctuation">.</span><span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


