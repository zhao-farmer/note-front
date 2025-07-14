<template><div><h1 id="十、内置构造函数" tabindex="-1"><a class="header-anchor" href="#十、内置构造函数"><span>十、内置构造函数</span></a></h1>
<h2 id="_10-1-基本包装类型" tabindex="-1"><a class="header-anchor" href="#_10-1-基本包装类型"><span>10.1 基本包装类型</span></a></h2>
<p>在 JavaScript 中最主要的数据类型有6种:</p>
<p>基本数据类型:</p>
<p>字符串、数值、布尔、undefined、null引用类型:</p>
<p>对象</p>
<p>但是，我们会发现有些特殊情况:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 普通字符串</span></span>
<span class="line"><span class="token keyword">const</span> str <span class="token operator">=</span> <span class="token string">"andy"</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//4</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// js 底层完成，把简单数据类型包装成了引用数据类型</span></span>
<span class="line"><span class="token keyword">const</span> str1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">"andy"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其实字符串、数值、布尔、等基本类型也都有专门的构造函数，这些我们称为包装类型。</p>
<p>JS中几乎所有的数据都可以基于构成函数创建。</p>
<h2 id="_10-2-object" tabindex="-1"><a class="header-anchor" href="#_10-2-object"><span>10.2 Object</span></a></h2>
<p>Object 是内置的构造函数，用于创建普通对象</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 通过构造函数创建普通对象</span></span>
<span class="line"><span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">object</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"小明"</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">15</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>推荐使用字面量方式声明对象，而不是 0bject 构造函数</p>
<p>一些静态方法</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 通过构造函数创建普通对象</span></span>
<span class="line"><span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"小明"</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">15</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> o <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"佩奇"</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">6</span> <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 1.获取所有属性名</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>o<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//返回数组 ['name','age']</span></span>
<span class="line"><span class="token comment">// 2.获取所有属性值</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span>o<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//返回数组 ['佩奇',6]</span></span>
<span class="line"><span class="token comment">// 3.获取属性名与属性值</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span>o<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//返回嵌套数组 [['name', 'age'],['佩奇',6]]</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 拷贝对象</span></span>
<span class="line"><span class="token keyword">const</span> oo <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>oo<span class="token punctuation">,</span> o<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>oo<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_10-3-array" tabindex="-1"><a class="header-anchor" href="#_10-3-array"><span>10.3 Array</span></a></h2>
<h3 id="_10-3-1-数组常见的实例方法-核心方法" tabindex="-1"><a class="header-anchor" href="#_10-3-1-数组常见的实例方法-核心方法"><span>10.3.1 数组常见的实例方法-核心方法</span></a></h3>
<table>
<thead>
<tr>
<th>方法</th>
<th>作用</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>forEach</td>
<td>遍历数组</td>
<td>不返回数组，经常用于查找遍历数组元素</td>
</tr>
<tr>
<td>filter</td>
<td>过滤数组</td>
<td>返回新数组，返回的是筛选满足条件的数组元素</td>
</tr>
<tr>
<td>map</td>
<td>迭代数组</td>
<td>返回新数组，返回的是处理之后的数组元素，想要使用返回的新数组</td>
</tr>
<tr>
<td>reduce</td>
<td>累计器</td>
<td>返回累计处理的结果，经常用于求和等</td>
</tr>
</tbody>
</table>
<p>reduce</p>
<ol>
<li>如果没有起始值，则上一次值以数组的第一个数组元素的值</li>
<li>每一次循环，把返回值给做为 下一次循环的上一次值</li>
<li>如果有起始值，则 起始值做为上一次值</li>
</ol>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 1.foreach循环</span></span>
<span class="line"><span class="token comment">// 1.1 基本语法  arr.foreach(function(当前成员,序列){处理数据})</span></span>
<span class="line"><span class="token keyword">let</span> arr2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line">arr<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span>index</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span><span class="token punctuation">(</span>index<span class="token operator">></span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        arr2<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr2<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//[5]</span></span>
<span class="line"><span class="token comment">// 1.2 可省略序列参数</span></span>
<span class="line"><span class="token keyword">let</span> arr3 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line">arr<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token operator">=></span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span><span class="token punctuation">(</span>item<span class="token operator">></span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        arr3<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr3<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//[4, 5]</span></span>
<span class="line"><span class="token comment">// 1.3 如果数组内是应用类型，可以直接修改值，并改变整个数组 </span></span>
<span class="line"><span class="token keyword">let</span> arr4 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'wanger'</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'zhangsan'</span><span class="token punctuation">}</span><span class="token punctuation">]</span></span>
<span class="line">arr4<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token operator">=></span><span class="token punctuation">{</span></span>
<span class="line">    item<span class="token punctuation">.</span>name <span class="token operator">=</span> item<span class="token punctuation">.</span>name <span class="token operator">+</span> <span class="token string">"-改"</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr4<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// [{name:'wanger-改'},{name:'zhangsan-改'}]</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 2.fliter() 过滤</span></span>
<span class="line"><span class="token comment">// 基本语法 arr.filter(function(当前成员,序列,整个数组){return 返回条件})</span></span>
<span class="line"><span class="token comment">// 返回条件是：true 或 false</span></span>
<span class="line"><span class="token keyword">let</span> arr5 <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span>index<span class="token punctuation">,</span>array</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> item<span class="token operator">></span><span class="token number">3</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr5<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//[4, 5]</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 3.map 抽取数据</span></span>
<span class="line"><span class="token comment">// 基本语法 arr.map(function(当前成员,序列,整个数组){return 返回条件})</span></span>
<span class="line"><span class="token comment">// 返回条件是：组成新数组的值</span></span>
<span class="line"><span class="token keyword">let</span> arr6 <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span>index<span class="token punctuation">,</span>array</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">(</span>item<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">*</span> index</span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr6<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// [0, 3, 8, 15, 24]</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 4.reduce 返回累计处理的结果</span></span>
<span class="line"><span class="token comment">// 基本语法 arr.reduce(function(上一次值,当前值){}，初始值)</span></span>
<span class="line"><span class="token comment">// 如果有起始值 ，将初始值算入求和中</span></span>
<span class="line"><span class="token keyword">let</span> arr7 <span class="token operator">=</span>  arr<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">prev<span class="token punctuation">,</span>current</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> prev <span class="token operator">+</span> current</span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr7<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 15</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 计算薪资案例</span></span>
<span class="line"><span class="token keyword">const</span> moneyArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'张三'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">salary</span><span class="token operator">:</span><span class="token number">10000</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'李四'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">salary</span><span class="token operator">:</span><span class="token number">12000</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'王五'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">salary</span><span class="token operator">:</span><span class="token number">13000</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">]</span> </span>
<span class="line"><span class="token keyword">const</span> total <span class="token operator">=</span> moneyArr<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">prev<span class="token punctuation">,</span>current</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> prev <span class="token operator">+</span> current<span class="token punctuation">.</span>salary</span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>total<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 35000</span></span>
<span class="line"><span class="token comment">// 上一次值  当前值  返回值 （第一次遍历）</span></span>
<span class="line"><span class="token comment">// 0        10000   10000</span></span>
<span class="line"><span class="token comment">// 上一次值  当前值  返回值 （第二次遍历）</span></span>
<span class="line"><span class="token comment">// 10000    12000   22000</span></span>
<span class="line"><span class="token comment">// 上一次值  当前值  返回值 （第三次遍历）</span></span>
<span class="line"><span class="token comment">// 22000    13000   35000  </span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_10-3-2-数组常见方法-其他方法" tabindex="-1"><a class="header-anchor" href="#_10-3-2-数组常见方法-其他方法"><span>10.3.2 数组常见方法-其他方法</span></a></h3>
<ol>
<li>实例方法 join 数组元素拼接为字符串，返回字符串(重点)</li>
<li>实例方法 find 查找元素，返回符合测试条件的第一个数组元素值，如果没有符合条件的则返回 undefined(重点)</li>
<li>实例方法 findIndex 查找元素的索引值</li>
<li>实例方法 every 检测数组所有元素是否都符合指定条件，如果所有元素都通过检测返回 true，否则返回 false(重点)</li>
<li>实例方法 some 检测数组中的元素是否满足指定条件 如果数组中有元素满足条件返回true，否则返回 false</li>
<li>实例方法 concat合并两个数组，返回生成新数组</li>
<li>实例方法 sort 对原数组单元值排序  toSorted  不改变原数组进行排序</li>
<li>实例方法 sp1ice 删除或替换原数组单元</li>
<li>实例方法 reverse 反转数组</li>
</ol>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 1.join 数组转换成字符串 join用于拼接</span></span>
<span class="line"><span class="token comment">// 基本语法  let arrStr = arr.join(需拼接字符串)</span></span>
<span class="line"><span class="token keyword">let</span> value1 <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">"-"</span><span class="token punctuation">)</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value1<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 1-2-3-4-5</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 2.find 查找复合的元素值</span></span>
<span class="line"><span class="token comment">// 基本语法 arr.filter(callbackFn(当前成员,序列,整个数组){}),thisArg}</span></span>
<span class="line"><span class="token comment">// thisArg 是 执行 callbackFn 时用作 this 的值。</span></span>
<span class="line"><span class="token comment">// 结果是查询到的第一个元素</span></span>
<span class="line"><span class="token keyword">let</span> value2 <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span>index<span class="token punctuation">,</span>currentArr</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">   <span class="token keyword">return</span> item<span class="token operator">></span><span class="token number">3</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//4</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 3.findIndex 查找数组的序列</span></span>
<span class="line"><span class="token comment">// 与find类似 不过是查询序列</span></span>
<span class="line"><span class="token keyword">let</span> value3 <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">findIndex</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span>index<span class="token punctuation">,</span>currentArr</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">   <span class="token keyword">return</span> item<span class="token operator">></span><span class="token number">3</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//3</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 4. some方法是只要一个成员的返回值是true，则整个some方法的返回值就是true，否则返回false。</span></span>
<span class="line"><span class="token keyword">let</span> value4 <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">some</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">elem<span class="token punctuation">,</span> index<span class="token punctuation">,</span> arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">   <span class="token keyword">return</span> elem <span class="token operator">>=</span> <span class="token number">3</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value4<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 5.every方法是所有成员的返回值都是true，整个every方法才返回true，否则返回false。</span></span>
<span class="line"><span class="token keyword">let</span> value5 <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">every</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">elem<span class="token punctuation">,</span> index<span class="token punctuation">,</span> arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">   <span class="token keyword">return</span> elem <span class="token operator">>=</span> <span class="token number">3</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value4<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 6.concat 复制数组(浅复制)</span></span>
<span class="line"><span class="token keyword">let</span> value6 <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value6<span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">//[1, 2, 3, 4, 5]</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 7.sort(compareFn(a, b)) 数组排序 toSorted(compareFn(a, b)) 不改变数组进行排序</span></span>
<span class="line"><span class="token comment">//compareFn(a, b) 返回值   排序顺序</span></span>
<span class="line"><span class="token comment">//  > 0 a 在 b 后，如 [b, a]</span></span>
<span class="line"><span class="token comment">//  &lt; 0 a 在 b 前，如 [a, b]</span></span>
<span class="line"><span class="token comment">//  === 0   保持 a 和 b 原来的顺序</span></span>
<span class="line"><span class="token keyword">const</span> numbers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// [...numbers] 创建一个浅拷贝，因此 sort() 不会改变原始数组。</span></span>
<span class="line"><span class="token keyword">const</span> sorted1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>numbers<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=></span> a <span class="token operator">-</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//从小到大</span></span>
<span class="line"><span class="token keyword">const</span> sorted2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>numbers<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=></span> b <span class="token operator">-</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//从大到小</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>sorted1<span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// [1, 1, 3, 4, 5]</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>sorted2<span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// [5, 4, 3, 1, 1]</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 8.sp1ice 替换或删除</span></span>
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
<span class="line"><span class="token comment">// 9.reverse 数组进行反转</span></span>
<span class="line">arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'a'</span><span class="token punctuation">,</span> <span class="token string">'b'</span><span class="token punctuation">,</span> <span class="token string">'c'</span><span class="token punctuation">,</span> <span class="token string">'d'</span><span class="token punctuation">]</span></span>
<span class="line">arr<span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>               <span class="token comment">//['d', 'c', 'b', 'a']</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_10-3-3-伪书组转真数组" tabindex="-1"><a class="header-anchor" href="#_10-3-3-伪书组转真数组"><span>10.3.3 伪书组转真数组</span></a></h3>
<p>静态方法Array.from</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> arr <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>arguments<span class="token punctuation">)</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//[1,2,3,4]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token function">fn</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


