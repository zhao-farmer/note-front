<template><div><h1 id="九、数组-array" tabindex="-1"><a class="header-anchor" href="#九、数组-array"><span>九、数组（Array）</span></a></h1>
<h2 id="_9-1-数组简介" tabindex="-1"><a class="header-anchor" href="#_9-1-数组简介"><span>9.1 数组简介</span></a></h2>
<ul>
<li>数组也是一种复合数据类型，在数组可以存储多个不同类型的数据</li>
<li>数组中存储的时有序的数据,数组中的每一个数据都有一个唯一的索引</li>
</ul>
<ol>
<li>
<p>可以通过索引来操作获取数据</p>
<ul>
<li>索引 （index） 是一组大于0的整数</li>
<li>创建数组</li>
</ul>
</li>
<li>
<p>通过Array()来创建数组,也可以通过[]来创建数组</p>
<ul>
<li>向数组中添加元素
语法：数组[索引] = 元素</li>
<li>读取数组中的元素
语法：数组[索引]
如果读取了一个不存在的元素，不好报错而是返回undefined</li>
</ul>
</li>
<li>
<p>length</p>
</li>
<li>
<p>获取数组的长度<br>
数组.length    获取的实际值就是数组的最大索引 + 1</p>
</li>
<li>
<p>向数组最后添加元素
数组[数组.length] = 元素</p>
</li>
<li>
<p>length是可以修改的</p>
</li>
</ol>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'孙悟空'</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span> <span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">10</span></span>
<span class="line">arr<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">22</span></span>
<span class="line">arr<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">44</span></span>
<span class="line">arr<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">88</span></span>
<span class="line"><span class="token keyword">const</span> arr2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">//数组字面量</span></span>
<span class="line"><span class="token keyword">const</span> arr3 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//使用数组时，应该避免非连续数组，因为它性能不好</span></span>
<span class="line"><span class="token comment">// arr[100] = 99</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>           <span class="token comment">//[10,22,44,88]</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr2<span class="token punctuation">)</span><span class="token punctuation">;</span>          <span class="token comment">//[]</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr3<span class="token punctuation">)</span><span class="token punctuation">;</span>          <span class="token comment">//[1, 2, 3, 4, 5]</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>        <span class="token comment">//[22]</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>        <span class="token comment">//[88]</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> arr<span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">//Object</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">//4</span></span>
<span class="line"></span>
<span class="line">arr<span class="token punctuation">[</span>arr<span class="token punctuation">.</span>length<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">33</span></span>
<span class="line">arr<span class="token punctuation">[</span>arr<span class="token punctuation">.</span>length<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">55</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>           <span class="token comment">//[10,22,44,88,33,55]</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">//设置数组长度</span></span>
<span class="line">arr<span class="token punctuation">.</span>length <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>           <span class="token comment">//[10, 22, 44, 88, 33, 55, 空属性 × 4]</span></span>
<span class="line">arr<span class="token punctuation">.</span>length <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>           <span class="token comment">//[10, 22, 44]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9-2-遍历数组" tabindex="-1"><a class="header-anchor" href="#_9-2-遍历数组"><span>9.2 遍历数组</span></a></h2>
<ul>
<li>任何类型的值都可以称为数组中的元素</li>
<li>创建数组时尽量要确保数组中存储的数据的类型时相同的</li>
<li>遍历数组
遍历数组简单理解,就是获取数组中的每一个元素</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">//任何类型的值都可以称为数组中的元素</span></span>
<span class="line"><span class="token keyword">const</span> arr1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">'hello'</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'孙悟空'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span> <span class="token punctuation">}</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token comment">//创建数组时尽量要确保数组中存储的数据的类型时相同的</span></span>
<span class="line">arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'孙悟空'</span><span class="token punctuation">,</span> <span class="token string">'猪八戒'</span><span class="token punctuation">,</span> <span class="token string">'沙和尚'</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token comment">/*</span>
<span class="line">    遍历数组</span>
<span class="line">        - 遍历数组简单理解,就是获取数组中的每一个元素</span>
<span class="line">*/</span></span>
<span class="line"><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> element <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/* </span>
<span class="line">    定义一个Person类，类中由两个属性name和age</span>
<span class="line">        然后创建几个Person对象，将其添加到一个数组中</span>
<span class="line">    遍历数组，并打印未成年人的信息</span>
<span class="line">*/</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">const</span> pesonArr <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">'孙悟空'</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">'沙和尚'</span><span class="token punctuation">,</span> <span class="token number">38</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">'红孩儿'</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">]</span></span>
<span class="line"><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> index <span class="token operator">&lt;</span> pesonArr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> index<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> element <span class="token operator">=</span> pesonArr<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>element<span class="token punctuation">.</span>age <span class="token operator">&lt;</span> <span class="token number">18</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9-3-for-of语句" tabindex="-1"><a class="header-anchor" href="#_9-3-for-of语句"><span>9.3 for_of语句</span></a></h2>
<ul>
<li>for-of语句可以用来遍历可迭代对象</li>
<li>语法：<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">for</span><span class="token punctuation">(</span>变量 <span class="token keyword">of</span> 可迭代的对象<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    </span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>执行流程：
for-of的循环体会执行多次，数组中有几个元素就会执行几次
每次执行时都会将一个元素赋值给变量</li>
<li>for-in 用于 对象</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'孙悟空'</span><span class="token punctuation">,</span> <span class="token string">'猪八戒'</span><span class="token punctuation">,</span> <span class="token string">'沙和尚'</span><span class="token punctuation">,</span> <span class="token string">'唐僧'</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> value <span class="token keyword">of</span> arr<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> value <span class="token keyword">of</span> <span class="token string">'hello'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9-4-数组静态方法" tabindex="-1"><a class="header-anchor" href="#_9-4-数组静态方法"><span>9.4 数组静态方法</span></a></h2>
<ul>
<li>Array.isArray()
<ul>
<li>用来检查一个对象是否是数组</li>
</ul>
</li>
<li>at()
<ul>
<li>可以根据索引获取数组中的元素</li>
<li>at可以接收负索引作为参数 从后往前算</li>
</ul>
</li>
<li>concat()
<ul>
<li>用来连接两个或者多个数组</li>
<li>非破坏性方法，不会影响原数组，而是返回一个新的数组</li>
</ul>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'孙悟空'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'孙悟空'</span><span class="token punctuation">,</span> <span class="token string">'猪八戒'</span><span class="token punctuation">,</span> <span class="token string">'沙和尚'</span><span class="token punctuation">,</span> <span class="token string">'唐僧'</span><span class="token punctuation">]</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span><span class="token function">at</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span><span class="token function">at</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span><span class="token function">at</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> arr2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'白骨精'</span><span class="token punctuation">,</span> <span class="token string">'蜘蛛精'</span><span class="token punctuation">,</span> <span class="token string">'玉兔精'</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> result <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>arr2<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">'牛魔王'</span><span class="token punctuation">,</span> <span class="token string">'铁扇公主'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr2<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9-5-数组实例方法" tabindex="-1"><a class="header-anchor" href="#_9-5-数组实例方法"><span>9.5 数组实例方法</span></a></h2>
<ul>
<li>indexOf()
<ul>
<li>获取元素在数组中第一次出现的索引</li>
<li>参数
<ol>
<li>要查询的元素</li>
<li>查询的起始位置</li>
</ol>
</li>
</ul>
</li>
<li>lastIndexOf()
<ul>
<li>获取元素在数组中最后一次出现的位置</li>
<li>返回值：
<ul>
<li>找到了则返回元素的索引</li>
<li>没有找到返回 -1</li>
</ul>
</li>
</ul>
</li>
<li>join()
<ul>
<li>将一个数组中的袁术连接为一个字符串</li>
<li>['孙悟空', '猪八戒', '沙和尚', '唐僧', '沙和尚'] -&gt; 孙悟空,猪八戒,沙和尚,唐僧,沙和尚</li>
<li>参数
<ul>
<li>指定一个字符串作为连接符</li>
</ul>
</li>
</ul>
</li>
<li>slice()
<ul>
<li>用来截取数组（非破坏性方法）</li>
<li>参数
<ol>
<li>截取的起始位置（包括该位置）</li>
<li>截取的结束位置 （不包括该位置）
<ul>
<li>第二个参数可以省略不写，如果省略则会一直截取到最后</li>
<li>索引可以为负值</li>
</ul>
</li>
</ol>
<ul>
<li>如果将两个参数全都省略，则可以对数组进行浅拷贝（浅复制）</li>
</ul>
</li>
</ul>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'孙悟空'</span><span class="token punctuation">,</span> <span class="token string">'猪八戒'</span><span class="token punctuation">,</span> <span class="token string">'沙和尚'</span><span class="token punctuation">,</span> <span class="token string">'唐僧'</span><span class="token punctuation">,</span> <span class="token string">'沙和尚'</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token keyword">let</span> result <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">'沙和尚'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>                            <span class="token comment">//2</span></span>
<span class="line">result <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">'沙和尚'</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>                            <span class="token comment">//4</span></span>
<span class="line">result <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">lastIndexOf</span><span class="token punctuation">(</span><span class="token string">'沙和尚'</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>                            <span class="token comment">//2</span></span>
<span class="line">result <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>                            <span class="token comment">//孙悟空,猪八戒,沙和尚,唐僧,沙和尚</span></span>
<span class="line">result <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">'@-@'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>                            <span class="token comment">//孙悟空@-@猪八戒@-@沙和尚@-@唐僧@-@沙和尚</span></span>
<span class="line"></span>
<span class="line">arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'孙悟空'</span><span class="token punctuation">,</span> <span class="token string">'猪八戒'</span><span class="token punctuation">,</span> <span class="token string">'沙和尚'</span><span class="token punctuation">,</span> <span class="token string">'唐僧'</span><span class="token punctuation">]</span></span>
<span class="line">result <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>                               <span class="token comment">//['孙悟空', '猪八戒', '沙和尚', '唐僧']</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>                            <span class="token comment">//['孙悟空', '猪八戒']</span></span>
<span class="line">result <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>                            <span class="token comment">//['猪八戒', '沙和尚']</span></span>
<span class="line">result <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>                            <span class="token comment">//['猪八戒', '沙和尚']</span></span>
<span class="line">result <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>                            <span class="token comment">//['孙悟空', '猪八戒', '沙和尚', '唐僧']</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9-6-对象的复制" tabindex="-1"><a class="header-anchor" href="#_9-6-对象的复制"><span>9.6 对象的复制</span></a></h2>
<ol>
<li>将就数组赋予新数组 并不是复制 两个数组指向同一个地址</li>
<li>当调用sclice时，会产生一个新的数组对象，从而完成对数组的复制</li>
</ol>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'孙悟空'</span><span class="token punctuation">,</span> <span class="token string">'猪八戒'</span><span class="token punctuation">,</span> <span class="token string">'沙和尚'</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">//直接赋值</span></span>
<span class="line"><span class="token keyword">const</span> arr2 <span class="token operator">=</span> arr<span class="token punctuation">;</span></span>
<span class="line">arr2<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">'唐僧'</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// ['唐僧', '猪八戒', '沙和尚']</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr2<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// ['唐僧', '猪八戒', '沙和尚']</span></span>
<span class="line"><span class="token comment">//使用slice方法</span></span>
<span class="line"><span class="token keyword">const</span> arr3 <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">arr3<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">'白骨精'</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// ['唐僧', '猪八戒', '沙和尚']</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr3<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// ['白骨精', '猪八戒', '沙和尚']</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9-7-浅拷贝与深拷贝" tabindex="-1"><a class="header-anchor" href="#_9-7-浅拷贝与深拷贝"><span>9.7 浅拷贝与深拷贝</span></a></h2>
<p>深浅拷贝值存在于<code v-pre>[{},{}]</code> 数组中存在复杂数据类型，如对象这种个时候会出现</p>
<p>数组中基础数据类型 如果进行修改不会被深浅拷贝影响</p>
<ul>
<li>
<p>浅拷贝（shallow copy）</p>
<ul>
<li>通常对对象的拷贝都是浅拷贝</li>
<li>浅拷贝顾名思义，只对对象的浅层进行复制（只复制一层）</li>
<li>如果对象中存储的数据是原始值，那么拷贝的深浅不重要</li>
<li>浅拷贝只会对对象本身进行复制，不会复制对象中的属性（或元素）</li>
<li>图例：</li>
</ul>
</li>
<li>
<p>深拷贝（deep copy）</p>
<ul>
<li>深拷贝指不仅复制对象本身，还复制对象中的属性和元素</li>
<li>因为性能问题，通常情况不会使用深拷贝</li>
<li>图例：</li>
</ul>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">//创建一个数组</span></span>
<span class="line"><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'孙悟空'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'猪八戒'</span> <span class="token punctuation">}</span><span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//浅拷贝</span></span>
<span class="line"><span class="token keyword">const</span> arr2 <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr2 <span class="token operator">===</span> arr<span class="token punctuation">)</span><span class="token punctuation">;</span>                  <span class="token comment">//false</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr2<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">===</span> arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>            <span class="token comment">//true</span></span>
<span class="line">arr2<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">'唐僧'</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr2<span class="token punctuation">)</span><span class="token punctuation">;</span>                          <span class="token comment">//[{name:'唐僧'},{name:'猪八戒'}]</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>                           <span class="token comment">//[{name:'唐僧'},{name:'猪八戒'}]</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//专门用来深拷贝的方法</span></span>
<span class="line"><span class="token keyword">const</span> arr3 <span class="token operator">=</span> <span class="token function">structuredClone</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr3 <span class="token operator">===</span> arr<span class="token punctuation">)</span><span class="token punctuation">;</span>                  <span class="token comment">//false</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr3<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">===</span> arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>            <span class="token comment">//false</span></span>
<span class="line">arr3<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">'沙和尚'</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr3<span class="token punctuation">)</span><span class="token punctuation">;</span>                          <span class="token comment">//[{name:'沙和尚'},{name:'猪八戒'}]</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>                           <span class="token comment">//[{name:'唐僧'},{name:'猪八戒'}]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9-8-展开运算符" tabindex="-1"><a class="header-anchor" href="#_9-8-展开运算符"><span>9.8 展开运算符</span></a></h2>
<ul>
<li>数组的展开运算符： <code v-pre>[...数组]</code> （展开运算符）
原理： <code v-pre>[...原数组]</code> = <code v-pre>[原数组元素...]</code></li>
</ul>
<ol>
<li>进行深拷贝
可以将一个数组中的元素展开到另一个数组中</li>
<li>作为函数的参数传递
展开为多个参数传递作为形参</li>
</ol>
<ul>
<li>对象的展开运算符 {...对象}</li>
</ul>
<ol>
<li>对象传统的复制
<ul>
<li>Object.assign(目标对象，被复制的对象)</li>
<li>将被复制对象中属性复制到目标对象里，并将目标对象返回</li>
</ul>
</li>
<li>使用展开运算符复制
<ul>
<li>使用展开运算符{...对象} 进行复制</li>
</ul>
</li>
</ol>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">    <span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'孙悟空'</span><span class="token punctuation">,</span> <span class="token string">'猪八戒'</span><span class="token punctuation">,</span> <span class="token string">'沙和尚'</span><span class="token punctuation">]</span></span>
<span class="line">    <span class="token comment">//复制方式 - 浅拷贝</span></span>
<span class="line">    <span class="token keyword">const</span> arr2 <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token comment">//展开复制  - 深拷贝</span></span>
<span class="line">    <span class="token keyword">const</span> arr3 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>arr<span class="token punctuation">]</span></span>
<span class="line">    <span class="token comment">// 等于  const arr3 = [arr[0],arr[1],arr[2]]</span></span>
<span class="line">    <span class="token comment">// 可以写成 const arr3 = ['唐僧',...arr,'白骨精']</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>                               <span class="token comment">//['孙悟空', '猪八戒', '沙和尚']</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr3<span class="token punctuation">)</span><span class="token punctuation">;</span>                              <span class="token comment">//['孙悟空', '猪八戒', '沙和尚']</span></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> a <span class="token operator">+</span> b <span class="token operator">+</span> c</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">const</span> arr4 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">]</span></span>
<span class="line">    <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token function">sum</span><span class="token punctuation">(</span>arr4<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> arr4<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> arr<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    result <span class="token operator">=</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token operator">...</span>arr4<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>                            <span class="token comment">//60</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'孙悟空'</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span> <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">const</span> obj2 <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> obj<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj2<span class="token punctuation">)</span><span class="token punctuation">;</span>                              <span class="token comment">//{name: '孙悟空', age: 18}</span></span>
<span class="line">    <span class="token keyword">const</span> obj3 <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token string">'花果山'</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">28</span> <span class="token punctuation">}</span></span>
<span class="line">    Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>obj3<span class="token punctuation">,</span> obj<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj3<span class="token punctuation">)</span><span class="token punctuation">;</span>                              <span class="token comment">//{address: '花果山', age: 18, name: '孙悟空'}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">const</span> obj4 <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token string">'高老庄'</span><span class="token punctuation">,</span> <span class="token operator">...</span>obj <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj4<span class="token punctuation">)</span><span class="token punctuation">;</span>                              <span class="token comment">//{address: '高老庄', name: '孙悟空', age: 18}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9-9-数组方法" tabindex="-1"><a class="header-anchor" href="#_9-9-数组方法"><span>9.9 数组方法</span></a></h2>
<ul>
<li>push()
向数组的末尾添加一个或多个元素，并返回新数组的长度</li>
<li>pop()
删除并返回数组的最后一个元素</li>
<li>unshift()
向数组的开头添加一个或多个元素，并返回新的长度</li>
<li>shift()
删除并返回数组的第一个元素</li>
<li>splice()
<ul>
<li>可以删除、添加、插入、替换数组中的元素</li>
<li>参数
<ol>
<li>删除的起始位置</li>
<li>删除的数量</li>
<li>要插入的元素</li>
</ol>
</li>
<li>返回值：
<ul>
<li>返回被删除的元素</li>
</ul>
</li>
</ul>
</li>
<li>reverse()
反转数组</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'孙悟空'</span><span class="token punctuation">,</span> <span class="token string">'猪八戒'</span><span class="token punctuation">,</span> <span class="token string">'沙和尚'</span><span class="token punctuation">]</span></span>
<span class="line">arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">'唐僧'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> result <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">'白骨精'</span><span class="token punctuation">,</span> <span class="token string">'蜘蛛精'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>               <span class="token comment">// ['孙悟空', '猪八戒', '沙和尚', '唐僧', '白骨精', '蜘蛛精']</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>            <span class="token comment">//6</span></span>
<span class="line">result <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>               <span class="token comment">//['孙悟空', '猪八戒', '沙和尚', '唐僧', '白骨精']</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>            <span class="token comment">//蜘蛛精</span></span>
<span class="line"></span>
<span class="line">arr<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span><span class="token string">'牛魔王'</span><span class="token punctuation">)</span></span>
<span class="line">result <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span><span class="token string">'红孩儿'</span><span class="token punctuation">,</span> <span class="token string">'铁山公主'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>               <span class="token comment">// ['红孩儿', '铁山公主', '牛魔王', '孙悟空', '猪八戒', '沙和尚', '唐僧', '白骨精']</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>            <span class="token comment">//8</span></span>
<span class="line">result <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>               <span class="token comment">//['铁山公主', '牛魔王', '孙悟空', '猪八戒', '沙和尚', '唐僧', '白骨精']</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>            <span class="token comment">//红孩儿</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//删除</span></span>
<span class="line">arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'孙悟空'</span><span class="token punctuation">,</span> <span class="token string">'猪八戒'</span><span class="token punctuation">,</span> <span class="token string">'沙和尚'</span><span class="token punctuation">,</span> <span class="token string">'唐僧'</span><span class="token punctuation">]</span></span>
<span class="line">result <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>               <span class="token comment">//['孙悟空']</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>            <span class="token comment">// ['猪八戒', '沙和尚', '唐僧']</span></span>
<span class="line"><span class="token comment">//删除并插入 替换</span></span>
<span class="line">arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'孙悟空'</span><span class="token punctuation">,</span> <span class="token string">'猪八戒'</span><span class="token punctuation">,</span> <span class="token string">'沙和尚'</span><span class="token punctuation">,</span> <span class="token string">'唐僧'</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token comment">// result = arr.splice(1, 2, '牛魔王');</span></span>
<span class="line">result <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">'牛魔王'</span><span class="token punctuation">,</span> <span class="token string">'铁扇公主'</span><span class="token punctuation">,</span> <span class="token string">'红孩儿'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>               <span class="token comment">//['孙悟空', '牛魔王', '铁扇公主', '红孩儿', '唐僧']</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>            <span class="token comment">//['猪八戒', '沙和尚']</span></span>
<span class="line"><span class="token comment">//插入</span></span>
<span class="line">arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'孙悟空'</span><span class="token punctuation">,</span> <span class="token string">'猪八戒'</span><span class="token punctuation">,</span> <span class="token string">'沙和尚'</span><span class="token punctuation">,</span> <span class="token string">'唐僧'</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token comment">// result = arr.splice(1, 0, '牛魔王', '铁扇公主', '红孩儿');</span></span>
<span class="line">result <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">'牛魔王'</span><span class="token punctuation">,</span> <span class="token string">'铁扇公主'</span><span class="token punctuation">,</span> <span class="token string">'红孩儿'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>               <span class="token comment">//['孙悟空', '猪八戒', '沙和尚', '牛魔王', '铁扇公主', '红孩儿', '唐僧']</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>            <span class="token comment">//[]</span></span>
<span class="line"></span>
<span class="line">arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'a'</span><span class="token punctuation">,</span> <span class="token string">'b'</span><span class="token punctuation">,</span> <span class="token string">'c'</span><span class="token punctuation">,</span> <span class="token string">'d'</span><span class="token punctuation">]</span></span>
<span class="line">arr<span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>               <span class="token comment">//['d', 'c', 'b', 'a']</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9-10-数组去重" tabindex="-1"><a class="header-anchor" href="#_9-10-数组去重"><span>9.10 数组去重</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">    <span class="token comment">/*</span>
<span class="line">        练习：</span>
<span class="line">            有如下一个数组</span>
<span class="line">                arr = [1,2,1,3,2,4,5,5,6,7]</span>
<span class="line">            编写代码，去除数组中重复的元素 -> [1,2,3,4,5,6,7]</span>
<span class="line">    */</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">//双重循环去重</span></span>
<span class="line">    <span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">]</span></span>
<span class="line">    <span class="token comment">//编写代码去除数组中重复的元素</span></span>
<span class="line">    <span class="token comment">//分别获取数组中的元素</span></span>
<span class="line">    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">//获取当前值后边的所有指</span></span>
<span class="line">        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token comment">//出现了重复元素，删除后边的元素</span></span>
<span class="line">                arr<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>j<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token comment">/* </span>
<span class="line">                    当arr[i] 和 arr[j] 相同时，他会自动的删除j位置的元素，然后j+1位置的元素，会编程j位置的元素</span>
<span class="line">                    而j位置已经比较过了，不会重新比较，所以会出现漏比较的情况</span>
<span class="line">                    解决方法，删除一个元素后，进行重新比较一遍</span>
<span class="line">                */</span></span>
<span class="line">                j<span class="token operator">--</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">    <span class="token comment">//通过indexOf 来进行去重</span></span>
<span class="line">    arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">]</span></span>
<span class="line">    <span class="token comment">//获取数组中的元素</span></span>
<span class="line">    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">const</span> index <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">!==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token comment">//出现重复内容</span></span>
<span class="line">            arr<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            i<span class="token operator">--</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">const</span> newArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">    arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">]</span></span>
<span class="line">    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> ele <span class="token keyword">of</span> arr<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>newArr<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>ele<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            newArr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>ele<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newArr<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9-11-排序-冒泡与选择" tabindex="-1"><a class="header-anchor" href="#_9-11-排序-冒泡与选择"><span>9.11 排序(冒泡与选择)</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">    <span class="token comment">/* </span>
<span class="line">        [9,1,3,2,8,0,5,7,6,4]</span>
<span class="line">        思路一 冒泡排序</span>
<span class="line">            9, 1, 3, 2, 8, 0, 5, 7, 6, 4</span>
<span class="line">            - 比较相邻的两个元素，然后根据大小来决定是否交换它们的位置</span>
<span class="line">            - 例子：</span>
<span class="line">                第一次排序：1, 3, 2, 8, 0, 5, 7, 6, 4，9</span>
<span class="line">                第二次排序：1, 2, 3，0, 5, 7, 6, 4，8, 9</span>
<span class="line">                第三次排序：1, 2, 0，3, 5, 6, 4, 7，8, 9</span>
<span class="line">                第四次比较：1, 0, 2，3, 5, 4, 6, 7，8, 9</span>
<span class="line">                ...</span>
<span class="line">                倒数第二次 0, 1, 2, 3, 4, 5, 6, 7，8, 9</span>
<span class="line">            - 这种排序方式，被称为冒泡排序，冒泡排序是最慢的排序方式，数字少还可以用，不适合数据量比较大的排序</span>
<span class="line">        思路2- 选择排序</span>
<span class="line">                9, 1, 3, 2, 8, 0, 5, 7, 6, 4</span>
<span class="line">                - 取出一个元素 然后将其他元素和该值进行比较，如果其他元素比该元素校则交换两个元素的位置</span>
<span class="line">                - 例子：</span>
<span class="line">                    0, 9, 1, 3, 2, 8, 5, 7, 6, 4</span>
<span class="line">                    0, 1, 9, 3, 2, 8, 5, 7, 6, 4</span>
<span class="line">                    0, 1, 2, 9, 3, 8, 5, 7, 6, 4</span>
<span class="line">                ...</span>
<span class="line">    */</span></span>
<span class="line">        <span class="token comment">//冒泡排序</span></span>
<span class="line">    <span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">-</span> j<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token comment">//arr[i] 前面的元素 arr[i+1] 后边元素</span></span>
<span class="line">            <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">></span> arr<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token comment">//大数在浅，小数在后，需要交换两个元素的位置</span></span>
<span class="line">                <span class="token keyword">let</span> temp <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span>   <span class="token comment">//临时变量用于存储arr[i]的值</span></span>
<span class="line">                arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token comment">// 将arr[i+1]的值赋给arr[i]</span></span>
<span class="line">                arr<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> temp   <span class="token comment">//修改arr[i+1]的值</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">//选择排序</span></span>
<span class="line">    arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">></span> arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token keyword">let</span> temp <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">                arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">                arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9-12-数组高阶方法-传入函数" tabindex="-1"><a class="header-anchor" href="#_9-12-数组高阶方法-传入函数"><span>9.12 数组高阶方法-传入函数</span></a></h2>
<ul>
<li>
<p>sort()</p>
<ul>
<li>sort用来对数组进行排序(会改变原数组）</li>
<li>sort 默认会将数组升序排列
注意：sort默认会按照unicode编码进行排序，所以如果直接通过sort对数字排序,可能会得到一个不正确的结果：如 1 10 11 2 3 4</li>
<li>参数：
可以传递一个回调函数作为参数，通过回调函数来指定排序规则
<ul>
<li>(a, b) =&gt; a - b 升序排列</li>
<li>(a, b) =&gt; b - a 降序排列</li>
</ul>
</li>
</ul>
</li>
<li>
<p>forEach()</p>
<ul>
<li>用来遍历数组</li>
<li>他需要一个回调函数作为参数，这个回调函数会被调用多次
<ul>
<li>数组中有几个元素，回调函数就会调用几次</li>
<li>每次调用，都会将数组中的数据作为参数传递</li>
</ul>
</li>
<li>回调函数中有三个参数
<ul>
<li>element 当前的元素</li>
<li>ubdex 当前元素的索引</li>
<li>array 被遍历的数组</li>
</ul>
</li>
</ul>
</li>
<li>
<p>filter()</p>
<ul>
<li>将数组中复合条件的元素保存到一个新数组中返回</li>
<li>需要一个回调函数作为参数，会为每一个元素去调用回调函数，并根据返回值来决定是否将元素添加到新数组中</li>
<li>非破坏性方法，不会影响原数组</li>
<li>也有三个参数 与forEcach一样</li>
</ul>
</li>
<li>
<p>map()</p>
<ul>
<li>根据当前数组生成一个新数组</li>
<li>需要一个回调函数作为参数
<ul>
<li>回调函数的返回值会称为新数组中的元素</li>
</ul>
</li>
<li>非破坏性方法不会影响原数组</li>
<li>也有三个参数 与forEcach一样</li>
</ul>
</li>
<li>
<p>reduce()</p>
<ul>
<li>可以用来将一个数组中所有元素整合为一个值</li>
<li>非破坏性方法不会影响原数组</li>
<li>参数
<ol>
<li>回调函数，通过回调函数来指定合并的规则</li>
<li>可选参数，初始值</li>
</ol>
</li>
</ul>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">arr<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">//会出现问题</span></span>
<span class="line"><span class="token comment">//9, 1, 3, 2, 8, 0, 5, 7, 6, 4, 10</span></span>
<span class="line"><span class="token comment">//0, 1, 10, 2, 3, 4, 5, 6, 7, 8, 9</span></span>
<span class="line">arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">arr<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">//传入参数</span></span>
<span class="line">arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">arr<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=></span> a <span class="token operator">-</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'孙悟空'</span><span class="token punctuation">,</span> <span class="token string">'猪八戒'</span><span class="token punctuation">,</span> <span class="token string">'沙和尚'</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token comment">// arr.forEach((element, index, array) => {</span></span>
<span class="line"><span class="token comment">//     console.log(element, index, array);</span></span>
<span class="line"><span class="token comment">// })</span></span>
<span class="line">arr<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">element<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> element<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token comment">//获取数组中的偶数</span></span>
<span class="line"><span class="token keyword">let</span> result <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">ele</span> <span class="token operator">=></span> ele <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">result <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">ele</span> <span class="token operator">=></span> ele <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">)</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'孙悟空'</span><span class="token punctuation">,</span> <span class="token string">'猪八戒'</span><span class="token punctuation">,</span> <span class="token string">'沙和尚'</span><span class="token punctuation">]</span></span>
<span class="line">result <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">ele</span> <span class="token operator">=></span> <span class="token string">'&lt;li>'</span> <span class="token operator">+</span> ele <span class="token operator">+</span> <span class="token string">'&lt;/li>'</span><span class="token punctuation">)</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">]</span></span>
<span class="line">result <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> a <span class="token operator">+</span> b</span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">/* 添加初始值 */</span></span>
<span class="line">result <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=></span> a <span class="token operator">+</span> b<span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


