<template><div><h1 id="十三、深浅拷贝" tabindex="-1"><a class="header-anchor" href="#十三、深浅拷贝"><span>十三、深浅拷贝</span></a></h1>
<p>开发中我们经常需要复制一个对象。如果直接用赋值会有下面问题：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// 一个pink对象</span></span>
<span class="line"><span class="token keyword">const</span> pink <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"pink老师"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> red <span class="token operator">=</span> pink<span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>red<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//{name:'pink老师'，age:18}</span></span>
<span class="line"></span>
<span class="line">red<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">"red老师"</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>red<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//{name:'red老师'，age:18}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 但是 pink对象里面的name值也发生了变化</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>pink<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//{name:'red老师'，age:18}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_13-1-浅拷贝" tabindex="-1"><a class="header-anchor" href="#_13-1-浅拷贝"><span>13.1 浅拷贝</span></a></h2>
<p>首先浅拷贝和深拷贝只针对引用类型</p>
<p>浅拷贝:拷贝的是地址</p>
<p>常见方法:</p>
<ol>
<li>拷贝对象:0bject.assgin()/展开运算符{...obj} 拷贝对象</li>
<li>拷贝数组:Array.prototype.concat()或者[...arr]</li>
</ol>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// 修改对象-浅拷贝</span></span>
<span class="line"><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">uname</span><span class="token operator">:</span><span class="token string">'pink'</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// ... 扩展运算符</span></span>
<span class="line"><span class="token keyword">const</span> o1 <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token operator">...</span>obj <span class="token punctuation">}</span></span>
<span class="line">o1<span class="token punctuation">.</span>uname <span class="token operator">=</span> <span class="token string">'red'</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>o1<span class="token punctuation">,</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// {uname: 'red'} {uname: 'pink'}</span></span>
<span class="line"><span class="token comment">// 使用 Object.assign </span></span>
<span class="line"><span class="token keyword">const</span> o2 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line">Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>o2<span class="token punctuation">,</span>obj<span class="token punctuation">)</span> </span>
<span class="line">o2<span class="token punctuation">.</span>uname <span class="token operator">=</span> <span class="token string">'blue'</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>o2<span class="token punctuation">,</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// {uname: 'blue'} {uname: 'pink'}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 修改数组-浅拷贝</span></span>
<span class="line"><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token comment">// ... 扩展运算符</span></span>
<span class="line"><span class="token keyword">const</span> arr1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>arr<span class="token punctuation">]</span></span>
<span class="line">arr1<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">4</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span>arr1<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// [1, 2, 3]  [4, 2, 3] </span></span>
<span class="line"><span class="token comment">// 使用 concat()</span></span>
<span class="line"><span class="token keyword">const</span> arr2 <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">arr2<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">5</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span>arr2<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// [1, 2, 3]  [5, 2, 3]  </span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>浅拷贝的问题-修改深层对象 依然会修改原对象</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">uname</span><span class="token operator">:</span><span class="token string">'pink'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">18</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">family</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">baby</span><span class="token operator">:</span><span class="token string">'小pink'</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 浅拷贝</span></span>
<span class="line"><span class="token keyword">const</span> o <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token operator">...</span>obj<span class="token punctuation">}</span></span>
<span class="line">o<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">20</span></span>
<span class="line">o<span class="token punctuation">.</span>family<span class="token punctuation">.</span>baby <span class="token operator">=</span> <span class="token string">'老pink'</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>o<span class="token punctuation">,</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// family.baby 都是 老pink</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_13-2-深拷贝" tabindex="-1"><a class="header-anchor" href="#_13-2-深拷贝"><span>13.2 深拷贝</span></a></h2>
<p>首先浅拷贝和深拷贝只针对引用类型</p>
<p>深拷贝:拷贝的是对象，不是地址</p>
<p>常见方法:</p>
<ol>
<li>通过递归实现深拷贝</li>
<li>lodash/cloneDeep</li>
<li>通过JSON.stringify()实现</li>
</ol>
<h3 id="_13-2-1-递归" tabindex="-1"><a class="header-anchor" href="#_13-2-1-递归"><span>13.2.1 递归</span></a></h3>
<p>函数递归:</p>
<p>如果一个函数在内部可以调用其本身，那么这个函数就是递归函数</p>
<ul>
<li>简单理解:函数内部自己调用自己,这个函数就是递归函数</li>
<li>递归函数的作用和循环效果类似</li>
<li>由于递归很容易发生“栈溢出”错误(stackoverflow)，所以必须要加退出条件 return</li>
</ul>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">    <span class="token comment">// 1.递归基本使用</span></span>
<span class="line">    <span class="token keyword">let</span> num <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">这是第</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>num<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">次</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">>=</span> <span class="token number">6</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">return</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        num<span class="token operator">++</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 函数内部调用函数自己</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">        <span class="token comment">// 2.函数递归:</span></span>
<span class="line">    <span class="token comment">// 利用递归函数实现 setTimeout 模式 setInterval效果</span></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">let</span> dateStr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toLocaleString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">"div"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> dateStr<span class="token punctuation">;</span></span>
<span class="line">        <span class="token function">setTimeout</span><span class="token punctuation">(</span>getTime<span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_13-2-2-深拷贝-递归" tabindex="-1"><a class="header-anchor" href="#_13-2-2-深拷贝-递归"><span>13.2.2 深拷贝-递归</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> obj1 <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">uname</span><span class="token operator">:</span><span class="token string">'pink'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">18</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">const</span> o1 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">// 拷贝函数-浅拷贝</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">shallowCopy</span><span class="token punctuation">(</span><span class="token parameter">newObj<span class="token punctuation">,</span>oldObj</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> key <span class="token keyword">in</span> oldObj<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// key 属性名 oldObj[k] 属性值</span></span>
<span class="line">        newObj<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> oldObj<span class="token punctuation">[</span>key<span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token function">shallowCopy</span><span class="token punctuation">(</span>o1<span class="token punctuation">,</span>obj1<span class="token punctuation">)</span> <span class="token comment">// 函数调用 两个参数 o 新对象 obj 旧对象</span></span>
<span class="line">o1<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">20</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>o1<span class="token punctuation">,</span>obj1<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// {uname: 'pink', age: 20} {uname: 'pink', age: 18}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> obj2 <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">uname</span><span class="token operator">:</span><span class="token string">'pink'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">18</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">hobby</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">'兵乓球'</span><span class="token punctuation">,</span><span class="token string">'足球'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">family</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">baby</span><span class="token operator">:</span><span class="token string">'小pink'</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">const</span> o2 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">// 拷贝函数-深拷贝</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">deepCopy</span><span class="token punctuation">(</span><span class="token parameter">newObj<span class="token punctuation">,</span>oldObj</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> key <span class="token keyword">in</span> oldObj<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">if</span><span class="token punctuation">(</span>oldObj<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token keyword">instanceof</span> <span class="token class-name">Array</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token comment">// newObj[key]=[] 提前确认赋值类型</span></span>
<span class="line">            <span class="token function">deepCopy</span><span class="token punctuation">(</span>newObj<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>oldObj<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>oldObj<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token keyword">instanceof</span> <span class="token class-name">Object</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token comment">// newObj[key]={} 提前确认赋值类型</span></span>
<span class="line">            <span class="token function">deepCopy</span><span class="token punctuation">(</span>newObj<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>oldObj<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span></span>
<span class="line">            newObj<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> oldObj<span class="token punctuation">[</span>key<span class="token punctuation">]</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token function">deepCopy</span><span class="token punctuation">(</span>o2<span class="token punctuation">,</span>obj2<span class="token punctuation">)</span></span>
<span class="line">o2<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">22</span><span class="token punctuation">;</span></span>
<span class="line">o2<span class="token punctuation">.</span>hobby<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">'篮球'</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>o2<span class="token punctuation">,</span>obj2<span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// o2.hobby： ['篮球', '足球'] ['兵乓球', '足球']</span></span>
<span class="line">o2<span class="token punctuation">.</span>family<span class="token punctuation">.</span>baby <span class="token operator">=</span> <span class="token string">'老pink'</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>o2<span class="token punctuation">,</span>obj2<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// o2.family: {baby:'老pink'} {baby:'小pink'}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 为什么要险些数组？ 数组也属于对象</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token keyword">instanceof</span> <span class="token class-name">Object</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//true</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_13-2-3-插件clonedeep" tabindex="-1"><a class="header-anchor" href="#_13-2-3-插件clonedeep"><span>13.2.3 插件cloneDeep</span></a></h3>
<p>js库lodash里面cloneDeep内部实现了深拷贝 （四年未更新，不建议使用）</p>
<p>文档：https://www.lodashjs.com/
下载地址：https://github.com/lodash/lodash</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">uname</span><span class="token operator">:</span><span class="token string">'pink'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">18</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">hobby</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">'乒乓球'</span><span class="token punctuation">,</span><span class="token string">'足球'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">family</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">baby</span><span class="token operator">:</span><span class="token string">'小pink'</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">let</span> o <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">)</span> </span>
<span class="line">o<span class="token punctuation">.</span>family<span class="token punctuation">.</span>baby <span class="token operator">=</span> <span class="token string">'老pink'</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>o<span class="token punctuation">,</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// o.family: {baby:'老pink'} {baby:'小pink'}</span></span>
<span class="line"></span>
<span class="line"><span class="token number">2.4</span> <span class="token punctuation">.</span>深拷贝<span class="token operator">-</span><span class="token constant">JSON</span>实现 （推荐使用）</span>
<span class="line"><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">uname</span><span class="token operator">:</span><span class="token string">'pink'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">18</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">hobby</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">'乒乓球'</span><span class="token punctuation">,</span><span class="token string">'足球'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">family</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">baby</span><span class="token operator">:</span><span class="token string">'小pink'</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> o <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">)</span> </span>
<span class="line">o<span class="token punctuation">.</span>family<span class="token punctuation">.</span>baby <span class="token operator">=</span> <span class="token string">'老pink'</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>o<span class="token punctuation">,</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// o.family: {baby:'老pink'} {baby:'小pink'}</span></span>
<span class="line"><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token template-punctuation string">`</span></span>`<span class="token constant">W</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


