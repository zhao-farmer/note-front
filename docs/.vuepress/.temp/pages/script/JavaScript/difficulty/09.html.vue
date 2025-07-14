<template><div><h1 id="九、深入对象" tabindex="-1"><a class="header-anchor" href="#九、深入对象"><span>九、深入对象</span></a></h1>
<h2 id="_9-1-创建对象的三种形式" tabindex="-1"><a class="header-anchor" href="#_9-1-创建对象的三种形式"><span>9.1 创建对象的三种形式</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 1.利用字面量创建对象</span></span>
<span class="line"><span class="token keyword">const</span> obj1 <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'佩奇'</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 2. 利用 new Object 创建对象</span></span>
<span class="line"><span class="token keyword">const</span> obj2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'佩奇'</span><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> obj3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">obj3<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">"佩奇"</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 3.利用构造函数创建对象</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">Pig</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">const</span> peppa <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Pig</span><span class="token punctuation">(</span><span class="token string">"佩奇"</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9-2-构造函数" tabindex="-1"><a class="header-anchor" href="#_9-2-构造函数"><span>9.2 构造函数</span></a></h2>
<p>目标:能够利用构造函数创建对象</p>
<ul>
<li>构造函数: 是一种特殊的函数，主要用来初始化对象</li>
<li>使用场景: 常规的语法允许创建一个对象。比如我们创建了佩奇的对象，继续创建乔治的对象还需要重新写一遍，此时可以通过构造函数来快速创建多个类似的对象。</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 未使用构造函数</span></span>
<span class="line"><span class="token keyword">const</span> Peppa <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"佩奇"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">gender</span><span class="token operator">:</span> <span class="token string">"女"</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> George <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"乔治"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">gender</span><span class="token operator">:</span> <span class="token string">"男"</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> Num <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"猪妈妈"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">gender</span><span class="token operator">:</span> <span class="token string">"女"</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> Dad <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"猪爸爸"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">32</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">gender</span><span class="token operator">:</span> <span class="token string">"男"</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 使用构造函数</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">Pig</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age<span class="token punctuation">,</span> gender</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>gender <span class="token operator">=</span> gender<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">const</span> Peppa1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Pig</span><span class="token punctuation">(</span><span class="token string">"佩奇"</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token string">"女"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> George1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Pig</span><span class="token punctuation">(</span><span class="token string">"乔治"</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">"男"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> Num1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Pig</span><span class="token punctuation">(</span><span class="token string">"猪妈妈"</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token string">"女"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> Dad1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Pig</span><span class="token punctuation">(</span><span class="token string">"猪爸爸"</span><span class="token punctuation">,</span> <span class="token number">32</span><span class="token punctuation">,</span> <span class="token string">"男"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>构造函数在技术上是常规函数。</p>
<p>不过有两个约定:</p>
<ol>
<li>它们的命名以大写字母开头。</li>
<li>它们只能由&quot;new&quot;操作符来执行。</li>
</ol>
<p>说明:</p>
<ol>
<li>使用 new 关键字调用函数的行为被称为实例化</li>
<li>实例化构造函数时没有参数时可以省略()</li>
<li>构造函数内部无需写return，返回值即为新创建的对象</li>
<li>构造函数内部的 return 返回的值无效，所以不要写return
5.n ewObject()newDate()也是实例化构造函数</li>
</ol>
<p>实例化执行过程</p>
<p>说明:</p>
<ol>
<li>创建新对象</li>
<li>构造函数this指向新对象</li>
<li>执行构造函数代码，修改this，添加新的属性</li>
<li>返回新对象</li>
</ol>
<h2 id="_9-3-实例成员与静态成员" tabindex="-1"><a class="header-anchor" href="#_9-3-实例成员与静态成员"><span>9.3 实例成员与静态成员</span></a></h2>
<h3 id="_9-3-1-实例成员" tabindex="-1"><a class="header-anchor" href="#_9-3-1-实例成员"><span>9.3.1 实例成员</span></a></h3>
<p>通过构造函数创建的对象称为实例对象，实例对象中的属性和方法称为实例成员(实例属性和实例方法)</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 构造函数</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 构造函数内部的 this 就是实例对象</span></span>
<span class="line">    <span class="token comment">// 实例对象中动态添加属性</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">"小明"</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">// 实例对象动态添加方法</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">sayHi</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"大家好~"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 实例化，p1 是 实例对象</span></span>
<span class="line"><span class="token comment">// p1 实际就是 构造函数内部的 this</span></span>
<span class="line"><span class="token keyword">const</span> p1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p1<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p1<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 访问实例属性</span></span>
<span class="line">p1<span class="token punctuation">.</span><span class="token function">sayHi</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 调用实例方法</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>说明:</p>
<p>1.为构造函数传入参数，创建结构相同但值不同的对象2.构造函数创建的实例对象彼此独立互不影响</p>
<h3 id="_9-3-2-静态成员" tabindex="-1"><a class="header-anchor" href="#_9-3-2-静态成员"><span>9.3.2 静态成员</span></a></h3>
<p>构造函数的属性和方法被称为静态成员(静态属性和静态方法)</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">Person2</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span>age</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name</span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 静态属性</span></span>
<span class="line">Person2<span class="token punctuation">.</span>eyes <span class="token operator">=</span> <span class="token number">2</span></span>
<span class="line">Person2<span class="token punctuation">.</span>arms <span class="token operator">=</span> <span class="token number">2</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//静态方法</span></span>
<span class="line">Person<span class="token punctuation">.</span><span class="token function-variable function">walk</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"^_^人都会走路..."</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">// this 指向 Person</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>eyes<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>说明:</p>
<p>1.静态成员只能构造函数来访问2.静态方法中的this指向构造函数</p>
<p>比如 Date.now()Math.PlMath.random()</p>
</div></template>


