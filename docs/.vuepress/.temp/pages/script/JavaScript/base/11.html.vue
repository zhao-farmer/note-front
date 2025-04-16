<template><div><h1 id="十一、内建函数" tabindex="-1"><a class="header-anchor" href="#十一、内建函数"><span>十一、内建函数</span></a></h1>
<h2 id="_11-1-数组解构赋值" tabindex="-1"><a class="header-anchor" href="#_11-1-数组解构赋值"><span>11.1 数组解构赋值</span></a></h2>
<p>解构赋值</p>
<ol>
<li>使用 [] = [] 将值按照下标进行一一复制</li>
<li>不等赋值右 [a,b,c,d] = [1,2,,4]</li>
<li>不等赋值左 [a,b,,d] = [1,2,3,4]</li>
<li>不等赋值扩展运算符 [x,y,...z] = [1,2,3,4,6]  z 等于[4,5,6]这样的数组</li>
</ol>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'孙悟空'</span><span class="token punctuation">,</span> <span class="token string">'猪八戒'</span><span class="token punctuation">,</span> <span class="token string">'沙和尚'</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// 第一种赋值</span></span>
<span class="line"><span class="token comment">// a = arr[0]</span></span>
<span class="line"><span class="token comment">// b = arr[1]</span></span>
<span class="line"><span class="token comment">// c = arr[2]</span></span>
<span class="line"><span class="token comment">// 第二种赋值</span></span>
<span class="line"><span class="token comment">// [a, b, c] = ['孙悟空', '猪八戒', '沙和尚']</span></span>
<span class="line"><span class="token comment">//第三种 最终效果</span></span>
<span class="line"><span class="token comment">//解构赋值</span></span>
<span class="line"><span class="token punctuation">[</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//声明时 同时解构</span></span>
<span class="line"><span class="token keyword">let</span> <span class="token punctuation">[</span>d<span class="token punctuation">,</span> e<span class="token punctuation">,</span> f<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>d<span class="token punctuation">,</span> e<span class="token punctuation">,</span> f<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">//不对等赋值-左边</span></span>
<span class="line"><span class="token keyword">let</span> <span class="token punctuation">[</span>g<span class="token punctuation">,</span> h<span class="token punctuation">,</span> i<span class="token punctuation">,</span> j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'唐僧'</span><span class="token punctuation">,</span> <span class="token string">'白骨精'</span><span class="token punctuation">,</span> <span class="token string">'蜘蛛精'</span><span class="token punctuation">,</span> <span class="token string">'玉兔精'</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>g<span class="token punctuation">,</span> h<span class="token punctuation">,</span> i<span class="token punctuation">,</span> j<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">[</span>g<span class="token punctuation">,</span> h<span class="token punctuation">,</span> i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>g<span class="token punctuation">,</span> h<span class="token punctuation">,</span> i<span class="token punctuation">,</span> j<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">//不对等赋值-右边</span></span>
<span class="line"><span class="token punctuation">[</span>g<span class="token punctuation">,</span> h<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">]</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>g<span class="token punctuation">,</span> h<span class="token punctuation">,</span> i<span class="token punctuation">,</span> j<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">//不对等赋值-空赋值</span></span>
<span class="line"><span class="token punctuation">[</span>g<span class="token punctuation">,</span> h<span class="token punctuation">,</span> i<span class="token punctuation">,</span> j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">8</span><span class="token punctuation">,</span> <span class="token punctuation">,</span> <span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">]</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>g<span class="token punctuation">,</span> h<span class="token punctuation">,</span> i<span class="token punctuation">,</span> j<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">//不对等赋值-可变数组  结构数组时，可以使用...来设置多余的元素</span></span>
<span class="line"><span class="token punctuation">[</span>g<span class="token punctuation">,</span> h<span class="token punctuation">,</span> <span class="token operator">...</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">,</span> <span class="token number">13</span><span class="token punctuation">,</span> <span class="token number">14</span><span class="token punctuation">]</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>g<span class="token punctuation">,</span> h<span class="token punctuation">,</span> i<span class="token punctuation">,</span> j<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">//添加默认值</span></span>
<span class="line"><span class="token keyword">let</span> <span class="token punctuation">[</span>k<span class="token punctuation">,</span> l<span class="token punctuation">,</span> m <span class="token operator">=</span> <span class="token number">6</span><span class="token punctuation">,</span> n <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>k<span class="token punctuation">,</span> l<span class="token punctuation">,</span> m<span class="token punctuation">,</span> n<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token comment">//可以通过结构赋值快速交换两个变量的值</span></span>
<span class="line"><span class="token keyword">let</span> a1 <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> a2 <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">//旧的方式</span></span>
<span class="line"><span class="token keyword">let</span> temp <span class="token operator">=</span> a1<span class="token punctuation">;</span></span>
<span class="line">a1 <span class="token operator">=</span> a2<span class="token punctuation">;</span></span>
<span class="line">a2 <span class="token operator">=</span> temp<span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">//新的方式</span></span>
<span class="line"><span class="token punctuation">[</span>a1<span class="token punctuation">,</span> a2<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>a2<span class="token punctuation">,</span> a1<span class="token punctuation">]</span> <span class="token comment">//[20,10]</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'a1='</span><span class="token punctuation">,</span> a1<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'a2='</span><span class="token punctuation">,</span> a2<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> arr2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'孙悟空'</span><span class="token punctuation">,</span> <span class="token string">'猪八戒'</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr2<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">[</span>arr2<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> arr2<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>arr<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr2<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/* </span>
<span class="line">    数组中可以存储任意类型的数据，也可以存数组</span>
<span class="line">        如果一个数组中的元素还是数组，则这个数组我们就称为二维数组</span>
<span class="line"></span>
<span class="line">*/</span></span>
<span class="line"><span class="token keyword">const</span> arr3 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">'孙悟空'</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">,</span> <span class="token string">'男'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">'猪八戒'</span><span class="token punctuation">,</span> <span class="token number">28</span><span class="token punctuation">,</span> <span class="token string">'男'</span><span class="token punctuation">]</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> stu <span class="token keyword">of</span> arr3<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> v <span class="token keyword">of</span> stu<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>name<span class="token punctuation">,</span> age<span class="token punctuation">,</span> gender<span class="token punctuation">]</span><span class="token punctuation">,</span> obj<span class="token punctuation">]</span> <span class="token operator">=</span> arr3<span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> age<span class="token punctuation">,</span> gender<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_11-2-对象解构赋值" tabindex="-1"><a class="header-anchor" href="#_11-2-对象解构赋值"><span>11.2 对象解构赋值</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'孙悟空'</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span> <span class="token literal-property property">gender</span><span class="token operator">:</span> <span class="token string">'男'</span> <span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">//传统方式</span></span>
<span class="line"><span class="token keyword">let</span> name <span class="token operator">=</span> obj<span class="token punctuation">.</span>name<span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> age <span class="token operator">=</span> obj<span class="token punctuation">.</span>age<span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> gender <span class="token operator">=</span> obj<span class="token punctuation">.</span>gender<span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> age<span class="token punctuation">,</span> gender<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">//声明变量同时结构对象</span></span>
<span class="line">obj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name1</span><span class="token operator">:</span> <span class="token string">'孙悟空'</span><span class="token punctuation">,</span> <span class="token literal-property property">age1</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span> <span class="token literal-property property">gender1</span><span class="token operator">:</span> <span class="token string">'男'</span> <span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">let</span> <span class="token punctuation">{</span> name1<span class="token punctuation">,</span> age1<span class="token punctuation">,</span> gender1 <span class="token punctuation">}</span> <span class="token operator">=</span> obj</span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name1<span class="token punctuation">,</span> age1<span class="token punctuation">,</span> gender1<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">//先声明后赋值 注意加上()</span></span>
<span class="line">obj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name2</span><span class="token operator">:</span> <span class="token string">'孙悟空'</span><span class="token punctuation">,</span> <span class="token literal-property property">age2</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span> <span class="token literal-property property">gender2</span><span class="token operator">:</span> <span class="token string">'男'</span> <span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">let</span> name2<span class="token punctuation">,</span> age2<span class="token punctuation">,</span> gender2<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">(</span><span class="token punctuation">{</span> name2<span class="token punctuation">,</span> age2<span class="token punctuation">,</span> gender2 <span class="token punctuation">}</span> <span class="token operator">=</span> obj<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name2<span class="token punctuation">,</span> age2<span class="token punctuation">,</span> gender2<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> <span class="token punctuation">{</span> address <span class="token punctuation">}</span> <span class="token operator">=</span> obj<span class="token punctuation">;</span> <span class="token comment">//没有的属性返回undefined</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//可以使用别名进行赋值</span></span>
<span class="line"><span class="token keyword">let</span> <span class="token punctuation">{</span> <span class="token literal-property property">name2</span><span class="token operator">:</span> a<span class="token punctuation">,</span> <span class="token literal-property property">age2</span><span class="token operator">:</span> b<span class="token punctuation">,</span> <span class="token literal-property property">gender3</span><span class="token operator">:</span> c <span class="token punctuation">}</span> <span class="token operator">=</span> obj<span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">//使用默认值</span></span>
<span class="line"><span class="token keyword">let</span> <span class="token punctuation">{</span> <span class="token literal-property property">name2</span><span class="token operator">:</span> d<span class="token punctuation">,</span> <span class="token literal-property property">age2</span><span class="token operator">:</span> e<span class="token punctuation">,</span> <span class="token literal-property property">gender2</span><span class="token operator">:</span> f<span class="token punctuation">,</span> <span class="token literal-property property">address</span><span class="token operator">:</span> g <span class="token operator">=</span> <span class="token string">'花果山'</span> <span class="token punctuation">}</span> <span class="token operator">=</span> obj<span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>d<span class="token punctuation">,</span> e<span class="token punctuation">,</span> f<span class="token punctuation">,</span> g<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_11-3-对象的序列化" tabindex="-1"><a class="header-anchor" href="#_11-3-对象的序列化"><span>11.3 对象的序列化</span></a></h2>
<ul>
<li>
<p>对象的序列化</p>
</li>
<li>
<p>JS中的对象使用时都是存在于计算机的内存中的</p>
</li>
<li>
<p>序列化指将对象转换为一个可以存储的格式</p>
<ul>
<li>在JS中对象的序列化通常时将一个对象转换为字符串（JSON字符串）</li>
</ul>
</li>
<li>
<p>序列化的用途（对象转换为字符串有什么用）</p>
<ul>
<li>对象转换为字符串后，可以将字符串在不同的语言之间进行传递
甚至人可以直接对字符串进行读写操作，使得JS对象可以在不同的语言之间传递</li>
<li>用途：
1.作为数据交换的格式
2.用来编写配置文件</li>
</ul>
</li>
<li>
<p>如何进行序列化</p>
<ul>
<li>在JS中有个工具类 JSON (JavaScript OBject Notation) JS对象表示法</li>
<li>JS对象序列化后患一个字符串，这个字符串我们称为JSON字符串</li>
</ul>
</li>
<li>
<p>也可以手动编写JSON字符串,在很多程序的配置文件就是使用JSON编写的</p>
</li>
<li>
<p>编写JSON的注意事项：</p>
<ol>
<li>JSON字符串有两种类型
<ul>
<li>JSON对象{}</li>
<li>JSON数组[]</li>
</ul>
</li>
<li>JSON字符串的属性名必须使用双引号引起来</li>
<li>JSON中可以使用的属性值（元素）
<ul>
<li>数字      (Number)</li>
<li>字符串    (String) 必须采用双引号</li>
<li>布尔值    (Boolean)</li>
<li>空值      (Null)</li>
<li>对象      (Object{})</li>
<li>数组      (Array[])</li>
</ul>
</li>
<li>JSON的格式和JS对象的格式基本一致的，
<ul>
<li>注意：JSON字符串如果属性时最后一个，则不要再加逗号</li>
</ul>
</li>
</ol>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'孙悟空'</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span> <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">//将obj转换为JSON字符串</span></span>
<span class="line"><span class="token keyword">const</span> str <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token comment">//JSON.stringify() 将一个对象转换为JSON字符串</span></span>
<span class="line"><span class="token keyword">const</span> obj2 <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//JSON.parse() 可以将一个JSON字符串转换为对象</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">//{"name":"孙悟空","age":18}</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj2<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">const</span> str2 <span class="token operator">=</span> <span class="token string">'{"name":"猪八戒","age":18}'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> obj3 <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>str2<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj3<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> str3 <span class="token operator">=</span> <span class="token string">'{"name":"猪八戒","age":18}'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> str4 <span class="token operator">=</span> <span class="token string">'["name",true,undefined,Nan]'</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_10-4-深复制" tabindex="-1"><a class="header-anchor" href="#_10-4-深复制"><span>10.4 深复制</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'孙悟空'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">friend</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"猪八戒"</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">// 对obj进行浅赋值</span></span>
<span class="line"><span class="token keyword">const</span> obj2 <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> obj<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'obj'</span><span class="token punctuation">,</span> obj<span class="token punctuation">)</span><span class="token punctuation">;</span>                <span class="token comment">//{name: '孙悟空', friend: {name:'沙和尚'}}</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'obj2'</span><span class="token punctuation">,</span> obj2<span class="token punctuation">)</span><span class="token punctuation">;</span>              <span class="token comment">//{name: '孙悟空', friend: {name:'沙和尚'}}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//对obj进行深复制</span></span>
<span class="line"><span class="token keyword">const</span> obj3 <span class="token operator">=</span> <span class="token function">structuredClone</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span></span>
<span class="line">obj3<span class="token punctuation">.</span>friend<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">'唐僧'</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'obj'</span><span class="token punctuation">,</span> obj<span class="token punctuation">)</span><span class="token punctuation">;</span>               <span class="token comment">//{name: '孙悟空', friend: {name:'沙和尚'}}</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'obj2'</span><span class="token punctuation">,</span> obj3<span class="token punctuation">)</span><span class="token punctuation">;</span>             <span class="token comment">//{name: '孙悟空', friend: {name:'唐僧'}}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//对obj进行深复制</span></span>
<span class="line"><span class="token keyword">const</span> str <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> obj4 <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span></span>
<span class="line">obj4<span class="token punctuation">.</span>friend<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">'白龙马'</span><span class="token punctuation">;</span>             <span class="token comment">//{name: '孙悟空', friend: {name:'沙和尚'}}</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'obj'</span><span class="token punctuation">,</span> obj<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'obj2'</span><span class="token punctuation">,</span> obj4<span class="token punctuation">)</span><span class="token punctuation">;</span>               <span class="token comment">//{name: '孙悟空', friend: {name:'白龙马'}}</span></span>
<span class="line"><span class="token keyword">const</span> obj5 <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">obj5<span class="token punctuation">.</span>friend<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">'玉帝老儿'</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'obj'</span><span class="token punctuation">,</span> obj<span class="token punctuation">)</span><span class="token punctuation">;</span>                 <span class="token comment">//{name: '孙悟空', friend: {name:'沙和尚'}}</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'obj2'</span><span class="token punctuation">,</span> obj5<span class="token punctuation">)</span><span class="token punctuation">;</span>              <span class="token comment">//{name: '孙悟空', friend: {name:'玉帝老儿'}}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_10-5-map" tabindex="-1"><a class="header-anchor" href="#_10-5-map"><span>10.5 Map</span></a></h2>
<ul>
<li>Map 用来存储键值对解构的数据（key-value）
<ul>
<li>Object中存储的数据就可以认为时一种键值对结构</li>
<li>Map和Object的主要区别
<ul>
<li>Object中属性只能时字符串符号,如果传递了一个其他类型的属性名，
<ul>
<li>js解释器自动会转换为字符串</li>
</ul>
</li>
<li>Map中任何类型的值都可以成为数据的key</li>
</ul>
</li>
</ul>
</li>
<li>创建：
<ul>
<li>new Map()</li>
</ul>
</li>
<li>属性和方法
<ul>
<li>map.size() 获取map中键值对的数量</li>
<li>map.set(key,value) 向map中添加新键值对</li>
<li>map.get(key) 根据key获取值</li>
<li>map.delete(key) 删除指定数据</li>
<li>map.has(key) 检查map中是否包含指定键</li>
<li>map.clear() 删除全部的键值对</li>
</ul>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> obj2 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'孙悟空'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">32</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">[</span><span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token string">'哈哈'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">[</span>obj2<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token string">'嘻嘻'</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'name'</span><span class="token punctuation">,</span> <span class="token string">"孙悟空"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>obj2<span class="token punctuation">,</span> <span class="token string">'呵呵'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token number">NaN</span><span class="token punctuation">,</span> <span class="token string">'哈哈哈'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>map<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>map<span class="token punctuation">.</span>size<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'name'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">map<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token number">NaN</span><span class="token punctuation">)</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>map<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">map<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>map<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_10-6-map补充" tabindex="-1"><a class="header-anchor" href="#_10-6-map补充"><span>10.6 map补充</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'name'</span><span class="token punctuation">,</span> <span class="token string">"孙悟空"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'age'</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">//将map转换为数组</span></span>
<span class="line"><span class="token keyword">const</span> arr <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>map<span class="token punctuation">)</span> <span class="token comment">//[["name","孙悟空"],["age",18]]</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">//使用展开运算符</span></span>
<span class="line"><span class="token keyword">const</span> arr2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>map<span class="token punctuation">]</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr2<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">//直接创建Map对象含有数据</span></span>
<span class="line"><span class="token keyword">const</span> map2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">'name'</span><span class="token punctuation">,</span> <span class="token string">'猪八戒'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">'age'</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>map2<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">//遍历1 直接转为对象</span></span>
<span class="line"><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> entry <span class="token keyword">of</span> map<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>entry<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">//解构获取</span></span>
<span class="line">    <span class="token keyword">const</span> <span class="token punctuation">[</span>key<span class="token punctuation">,</span> value<span class="token punctuation">]</span> <span class="token operator">=</span> entry</span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">//遍历2 直接获取key于value</span></span>
<span class="line"><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> <span class="token punctuation">[</span>key<span class="token punctuation">,</span> value<span class="token punctuation">]</span> <span class="token keyword">of</span> map<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">//遍历三</span></span>
<span class="line">map<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">key<span class="token punctuation">,</span> value<span class="token punctuation">,</span> c</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">,</span> c<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/*</span>
<span class="line">    map.keys() 获取map的所有key</span>
<span class="line">    map.values() 获取map的所有value</span>
<span class="line">    map.entries() 获取所有元素的对象</span>
<span class="line">*/</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>map<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>map<span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>map<span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> key <span class="token keyword">of</span> map<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_10-7-set" tabindex="-1"><a class="header-anchor" href="#_10-7-set"><span>10.7 Set</span></a></h2>
<ul>
<li>介绍
<ul>
<li>Set用来创建一个集合</li>
<li>它的功能和数组类似，不同点在于Set中不能存储重复的数据</li>
</ul>
</li>
<li>使用方式
<ul>
<li>new Set()</li>
<li>new Set([...])</li>
</ul>
</li>
<li>方法
<ul>
<li>size 获取数量</li>
<li>add() 添加元素</li>
<li>has() 检查元素</li>
<li>delete() 删除元素</li>
</ul>
</li>
<li>set底层于map是一样的
<ul>
<li>使用 set.entries()可以进行查看:{10，'孙悟空’} =&gt; {10:10,'孙悟空':'孙悟空'}</li>
</ul>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> set <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">//向set中添加数据</span></span>
<span class="line"><span class="token comment">// 不能添加重复数据</span></span>
<span class="line">set<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">set<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">"孙悟空"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">set<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>set<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//一些方法</span></span>
<span class="line"><span class="token keyword">let</span> state <span class="token operator">=</span> set<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//遍历</span></span>
<span class="line"><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> item <span class="token keyword">of</span> set<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//转换为数组</span></span>
<span class="line"><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>set<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> arr2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> set2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span>arr2<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>set2<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//再次转换</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">...</span>set2<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_10-8-math-数学" tabindex="-1"><a class="header-anchor" href="#_10-8-math-数学"><span>10.8 Math （数学）</span></a></h2>
<p>Math 一个工具类</p>
<p>Math中为我们提供了数学运算相关的一些常量和方法</p>
<ul>
<li>
<p>常量</p>
<ul>
<li>Math.PI 圆周率</li>
</ul>
</li>
<li>
<p>方法</p>
<ul>
<li>Math.abs() 求一个数的绝对值</li>
<li>Math.min() 求多个值中的最小值</li>
<li>Math.max() 求多个值中最大值</li>
<li>Math.pow(x,y) 求x值得y次方</li>
<li>Math.sqrt() 求一个数得平方根</li>
</ul>
<p>//不同得方式求整</p>
<ul>
<li>
<p>Math.floor()    向下取整</p>
</li>
<li>
<p>Math.ceil()     向上取整</p>
</li>
<li>
<p>Math.round()    四舍五入</p>
</li>
<li>
<p>Math.trunc()    直接去除小数位</p>
</li>
<li>
<p>Math.random()   生成一个0~1之间得随机数</p>
</li>
</ul>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Math<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> result <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">result <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">result <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">result <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">result <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//等价于 4 ** 2</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">result <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">sqrt</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//等价于 4** .5</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> num <span class="token operator">=</span> <span class="token number">2.9999999</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">num <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">2.9999999</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//向上取整</span></span>
<span class="line">result <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">ceil</span><span class="token punctuation">(</span><span class="token number">1.1</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">//四舍五入</span></span>
<span class="line">result <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">round</span><span class="token punctuation">(</span><span class="token number">1.4</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">//直接去除小数</span></span>
<span class="line">result <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">trunc</span><span class="token punctuation">(</span><span class="token number">1.4</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>小案例</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> index <span class="token operator">&lt;</span> <span class="token number">50</span><span class="token punctuation">;</span> index<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">/* </span>
<span class="line">        生成0-5之间得随机数</span>
<span class="line">            Math.random() -> 0 - 1</span>
<span class="line">        生成0 - x之间得随机数：</span>
<span class="line">            Math.round(Nath.random() * x)</span>
<span class="line">            Math.floor(Math.random() * ( x + 1 ) )</span>
<span class="line">        生成x - y 之间得随机数</span>
<span class="line">            Math.round(Math.random() * ( y- x) + x)   </span>
<span class="line">    */</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">//0 - 5</span></span>
<span class="line">    <span class="token comment">// result = Math.random(Math.random * 5)</span></span>
<span class="line">    <span class="token comment">// result = Math.floor(Math.random * 6)</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">//1 - 6</span></span>
<span class="line">    <span class="token comment">// result = Math.random(Math.random * 5 + 1)</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">//11 - 20</span></span>
<span class="line"></span>
<span class="line">    result <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span>random <span class="token operator">*</span> <span class="token number">9</span> <span class="token operator">+</span> <span class="token number">11</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>result <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_10-9-date" tabindex="-1"><a class="header-anchor" href="#_10-9-date"><span>10.9 Date</span></a></h2>
<p>在JS中所有得和事件相关得数据都有Date对象来表示</p>
<ul>
<li>创建
<ul>
<li>new Date()</li>
</ul>
</li>
<li>对象的方法
<ul>
<li>getFullYear() 获取4位年份</li>
<li>getMonth() 返回当前日期的月份(0-11) 索引</li>
<li>getDate() 返回当前是几日</li>
<li>getDay()  返回当前日期是周几(0-6) 0表示周日</li>
<li>......</li>
<li>getTime() 返回当前日期对象时间戳
<ul>
<li>时间戳：自1970年1月1日0时0分0秒到当前时间所经历的毫秒数</li>
<li>计算机底层存储时间时，使用的都是时间戳</li>
</ul>
</li>
<li>Date.now() 获取当前的时间戳</li>
</ul>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> d <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//直接通过new Date() 创建时间对象时，它创建得时当前得时间得对象</span></span>
<span class="line"><span class="token comment">//可以在Date()的构造函数，传入一个表示时间的字符串</span></span>
<span class="line"><span class="token comment">// 字符串的格式： 月/日/年  时：分：秒</span></span>
<span class="line">d <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">"10/10/1998 12:22:33"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//年-月-日T时：分：秒</span></span>
<span class="line"><span class="token keyword">let</span> d2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">"2019-12-13T23:34:15"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>d2<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//new Date(年份,月，日，时，分，秒，毫秒)</span></span>
<span class="line"><span class="token keyword">let</span> d3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token number">2016</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">13</span><span class="token punctuation">,</span> <span class="token number">45</span><span class="token punctuation">,</span> <span class="token number">33</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>d3<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> result <span class="token operator">=</span> d<span class="token punctuation">.</span><span class="token function">getFullYear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">result <span class="token operator">=</span> d<span class="token punctuation">.</span><span class="token function">getMonth</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">result <span class="token operator">=</span> d<span class="token punctuation">.</span><span class="token function">getDate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">result <span class="token operator">=</span> d<span class="token punctuation">.</span><span class="token function">getDay</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//时间戳</span></span>
<span class="line"><span class="token comment">//getTime</span></span>
<span class="line">result <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//使用时间戳创建  标准时间 格林威治时间</span></span>
<span class="line">result <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token number">2016</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_11-10-日期格式化" tabindex="-1"><a class="header-anchor" href="#_11-10-日期格式化"><span>11.10 日期格式化</span></a></h2>
<ul>
<li>toLocaleDateString() 将日期转换为本地的字符串</li>
<li>toLocaleTimeString() 将时间转换为本地的字符串</li>
<li>toLocaleString()  时间日期都进行转换</li>
</ul>
<p>可以将一个日期转换为本地时间格式的字符串</p>
<p>参数：</p>
<ol>
<li>描述语言和国家信息的字符串
<ul>
<li>zh-CN 中文中国</li>
<li>zh-HK 中文香港</li>
<li>zh-TW 中文香港</li>
<li>en-US 英文美国</li>
</ul>
</li>
<li>需要一个对象作为参数，在对象中可以通过对象的属性来对日期的格式来配置
<ul>
<li>dateStyle 日期的风格</li>
<li>timeStyle 时间的风格
<ul>
<li>full</li>
<li>long</li>
<li>medium</li>
<li>short</li>
</ul>
</li>
<li>hour12 十二小时制
<ul>
<li>true</li>
<li>false</li>
</ul>
</li>
<li>weekday 星期的显示的方式
<ul>
<li>long    /星期五</li>
<li>short   //周五</li>
<li>narrow  //五</li>
</ul>
</li>
<li>year
<ul>
<li>numeric</li>
<li>2-digit</li>
</ul>
</li>
</ul>
</li>
</ol>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> d <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> result <span class="token operator">=</span> d<span class="token punctuation">.</span><span class="token function">toLocaleDateString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">result <span class="token operator">=</span> d<span class="token punctuation">.</span><span class="token function">toLocaleTimeString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">result <span class="token operator">=</span> d<span class="token punctuation">.</span><span class="token function">toLocaleString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">result <span class="token operator">=</span> d<span class="token punctuation">.</span><span class="token function">toLocaleString</span><span class="token punctuation">(</span><span class="token string">"zh-TW"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">result <span class="token operator">=</span> d<span class="token punctuation">.</span><span class="token function">toLocaleString</span><span class="token punctuation">(</span><span class="token string">"zh-CN"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">dateStyle</span><span class="token operator">:</span> <span class="token string">"full"</span><span class="token punctuation">,</span> <span class="token literal-property property">timeStyle</span><span class="token operator">:</span> <span class="token string">"full"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">result <span class="token operator">=</span> d<span class="token punctuation">.</span><span class="token function">toLocaleString</span><span class="token punctuation">(</span><span class="token string">"zh-CN"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">dateStyle</span><span class="token operator">:</span> <span class="token string">"long"</span><span class="token punctuation">,</span> <span class="token literal-property property">timeStyle</span><span class="token operator">:</span> <span class="token string">"long"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">result <span class="token operator">=</span> d<span class="token punctuation">.</span><span class="token function">toLocaleString</span><span class="token punctuation">(</span><span class="token string">"zh-CN"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token literal-property property">dateStyle</span><span class="token operator">:</span> <span class="token string">"medium"</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token literal-property property">timeStyle</span><span class="token operator">:</span> <span class="token string">"medium"</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">result <span class="token operator">=</span> d<span class="token punctuation">.</span><span class="token function">toLocaleString</span><span class="token punctuation">(</span><span class="token string">"zh-CN"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token literal-property property">dateStyle</span><span class="token operator">:</span> <span class="token string">"short"</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token literal-property property">timeStyle</span><span class="token operator">:</span> <span class="token string">"short"</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">result <span class="token operator">=</span> d<span class="token punctuation">.</span><span class="token function">toLocaleString</span><span class="token punctuation">(</span><span class="token string">"zh-CN"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">weekday</span><span class="token operator">:</span> <span class="token string">"narrow"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_11-11-包装类" tabindex="-1"><a class="header-anchor" href="#_11-11-包装类"><span>11.11 包装类</span></a></h2>
<p>在JS中，除了直接创建原始值外，也可以创建原始值的对象</p>
<ul>
<li>
<p>通过new String() 可以创建String类型的对象</p>
</li>
<li>
<p>通过new Number() 可以创建Number类型的的对象</p>
</li>
<li>
<p>通过new Boolean() 可以创建Number类型的的对象</p>
</li>
<li>
<p>包装类</p>
<ul>
<li>JS中一共有5个包装类</li>
<li>String  -&gt; 字符串包装为String 对象</li>
<li>Number  -&gt; 数值包装欸Number对象</li>
<li>Boolean -&gt; 布尔值包含为Boolean对象</li>
<li>BigInt  -&gt; 大整数包装为BigInt对象</li>
<li>Symbol  -&gt; 符号包装为Symbol()对象</li>
</ul>
</li>
</ul>
<p>通过包装类可以原始值包装为一个对象</p>
<p>当我们对一个原始值调用方法或属性时，JS解释器会临时将原始值包装为对应的对象</p>
<p>然后调用这个对象的属性或方法</p>
<p>由于原始值会被临时转换为对应的对象，这就意味着对象中的方法都可以直接通过原始值来调用</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">"hello"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> num <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Number</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> bool <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Boolean</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>bool<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> str2 <span class="token operator">=</span> <span class="token string">"hello"</span><span class="token punctuation">;</span></span>
<span class="line">str2<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">"哈哈"</span><span class="token punctuation">;</span> <span class="token comment">//已经变成了String对象类</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str2<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> num2 <span class="token operator">=</span> <span class="token number">11</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> numStr <span class="token operator">=</span> num2<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//调用的是Nummber中的方法</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>numStr<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_11-12-字符串的方法" tabindex="-1"><a class="header-anchor" href="#_11-12-字符串的方法"><span>11.12 字符串的方法</span></a></h2>
<p>字符串：</p>
<p>字符串其本质就是一个字符数组</p>
<p>&quot;hello&quot; -&gt; ['h','e','l','l','0']</p>
<p>字符串的很多方法都和数组是非常相似的</p>
<p>属性和方法</p>
<ul>
<li>length 获取字符串的长度
<ul>
<li>字符串<code v-pre>[索引]</code>获取指定位置的字符</li>
</ul>
</li>
<li>str.at()  （实验方法）
<ul>
<li>根据索引获取字符，可以接受负索引</li>
</ul>
</li>
<li>str.charAt()
<ul>
<li>根据索引获取字符，不能传递负数</li>
</ul>
</li>
<li>str.concat()
<ul>
<li>用来连接两个或多个字符串</li>
</ul>
</li>
<li>str.includes()
<ul>
<li>用来检查字符串中是否包含某个内容
<ul>
<li>有返回true</li>
<li>没有返回false</li>
</ul>
</li>
</ul>
</li>
<li>str.indexOf()</li>
<li>str.lastIndexOf()
<ul>
<li>查询字符串中是否包含某个内容</li>
<li>没有查询到返回 -1</li>
</ul>
</li>
<li>str.startsWith()
<ul>
<li>检查一个字符串是否以指定内容开头</li>
</ul>
</li>
<li>str.endsWith()
<ul>
<li>检查一个字符串是否以指定内容结尾</li>
</ul>
</li>
<li>str.padStart()</li>
<li>str.padEnd()
<ul>
<li>通过添加指定的内容 如：补充00</li>
</ul>
</li>
<li>str.replace()
<ul>
<li>使用一个新字符串替换一个指定内容</li>
</ul>
</li>
<li>str.replaceAll()
<ul>
<li>使用一个新字符串替换所有指定内容</li>
</ul>
</li>
<li>str.slice()
<ul>
<li>对字符进行切片</li>
</ul>
</li>
<li>str.substring()
<ul>
<li>截取字符串</li>
</ul>
</li>
<li>str.split()
<ul>
<li>字符串分割成数组 与数组的join()方法相反</li>
</ul>
</li>
<li>str.toLowerCase()
<ul>
<li>将字符串都转成小写</li>
</ul>
</li>
<li>str.toUpCase()
<ul>
<li>将字符串都转成大写</li>
</ul>
</li>
<li>str.trim()
<ul>
<li>去除前后空格</li>
</ul>
</li>
<li>str.trimStart()
<ul>
<li>去除开始空格</li>
</ul>
</li>
<li>str.trimStart()
<ul>
<li>去除结束空格</li>
</ul>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">"hello"</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> char <span class="token keyword">of</span> str<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>char<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">at</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> str<span class="token punctuation">.</span><span class="token function">at</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">str <span class="token operator">=</span> <span class="token string">"hello hello how are you"</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"是否包含"</span><span class="token punctuation">,</span> str<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">"hello"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"位置-从前往后"</span><span class="token punctuation">,</span> str<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">"hello"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"位置-从后往前"</span><span class="token punctuation">,</span> str<span class="token punctuation">.</span><span class="token function">lastIndexOf</span><span class="token punctuation">(</span><span class="token string">"hello"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"以hello开头"</span><span class="token punctuation">,</span> str<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">"hello"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"以hello结尾"</span><span class="token punctuation">,</span> str<span class="token punctuation">.</span><span class="token function">endsWith</span><span class="token punctuation">(</span><span class="token string">"hello"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">str <span class="token operator">=</span> <span class="token string">"100"</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"默认补空格"</span><span class="token punctuation">,</span> str<span class="token punctuation">.</span><span class="token function">padStart</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"补字符"</span><span class="token punctuation">,</span> str<span class="token punctuation">.</span><span class="token function">padStart</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">,</span> <span class="token string">"0"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">str <span class="token operator">=</span> <span class="token string">"hello hello how are you"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> result <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">"hello"</span><span class="token punctuation">,</span> <span class="token string">"abc"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">result <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">replaceAll</span><span class="token punctuation">(</span><span class="token string">"hello"</span><span class="token punctuation">,</span> <span class="token string">"abc"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">result <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">12</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">result <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">12</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">result <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//非标准方法 索引 截取的数量</span></span>
<span class="line">result <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">substr</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">str <span class="token operator">=</span> <span class="token string">"abc@def@gh@jqk"</span><span class="token punctuation">;</span></span>
<span class="line">result <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">"@"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">str <span class="token operator">=</span> <span class="token string">"A c gggGkj"</span><span class="token punctuation">;</span></span>
<span class="line">result <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">result <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">str <span class="token operator">=</span> <span class="token string">"  Acd kjjh kjk ikokik   "</span><span class="token punctuation">;</span></span>
<span class="line">result <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">,</span> result<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">result <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">trimStart</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">,</span> result<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">result <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">trimEnd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">,</span> result<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_11-13-正则表达式" tabindex="-1"><a class="header-anchor" href="#_11-13-正则表达式"><span>11.13 正则表达式</span></a></h2>
<p>正则表达式用来定义一个规则</p>
<p>通过这个规则计算机可以检查一个字符串是否符合规则</p>
<pre><code>或者将字符串重符合规则的内容提取出来
</code></pre>
<p>正则表达式也是JS中的一个对象</p>
<pre><code>所以要使用正则表达式，需要先创建正则表达式的对象
</code></pre>
<ul>
<li>创建
<ul>
<li>对象创建 new RegExp()</li>
<li>字面量创建 <code v-pre>\\</code></li>
</ul>
</li>
<li>执行验证
<ul>
<li>匹配模式
<ul>
<li>/i    忽略大小写的功能，是不能单独使用的。</li>
<li>/g    在全文中查找所出现的指定字符串。</li>
<li>/ig    忽略大小写在全文中查找指定字符串。</li>
<li>/gi    /gi和/ig作用是一样的，都是忽略大小写在全文中查找指定字符串。</li>
<li>/m    多行查找</li>
</ul>
</li>
<li>执行方式
<ul>
<li>test() 方法 直接验证</li>
<li>exec() 方法 可用于分组查看</li>
</ul>
</li>
</ul>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">//new RegExp() 可以接受两个参数（字符串）   1.正则表达式 2.匹配模式</span></span>
<span class="line"><span class="token keyword">let</span> reg <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span><span class="token string">"a"</span><span class="token punctuation">,</span> <span class="token string">"i"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//通过构造函数来创建一个正则表达式的对象</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>reg<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">//使用字面量来创建正则表达：/正则表达式 /匹配模式</span></span>
<span class="line">reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">a</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>reg<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">//使用\省略i</span></span>
<span class="line">reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\w</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>reg<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">//使用\\省略i</span></span>
<span class="line">reg <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span><span class="token string">"\\w"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>reg<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">reg <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span><span class="token string">"a"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// /a/ 标识，检查一个字符串中是否含有a</span></span>
<span class="line"><span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">"a"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> result <span class="token operator">=</span> reg<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//true</span></span>
<span class="line">result <span class="token operator">=</span> reg<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token string">"b"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//false</span></span>
<span class="line">result <span class="token operator">=</span> reg<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token string">"abc"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//true</span></span>
<span class="line">result <span class="token operator">=</span> reg<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token string">"bcabc"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//true</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_11-14-正则表达式字符语法" tabindex="-1"><a class="header-anchor" href="#_11-14-正则表达式字符语法"><span>11.14 正则表达式字符语法</span></a></h2>
<ol>
<li>在正则表达式中大部分字符都可以直接写</li>
<li>| 在正则表达式中表示或</li>
<li>[] 表示或（字符集）
<ul>
<li>[a-z] 任意的小写字母</li>
<li>[A-Z] 任意的大写字母</li>
<li>[a-zA-Z] 任意的字符</li>
<li>[0-9] 任意数字</li>
<li>[a-zA-Z0-9]</li>
</ul>
</li>
<li>[^] 表示除了
[^a] 除了x</li>
<li><code v-pre>.</code>表示除了换行符的任意元素</li>
<li>在正则表达式中使用\作为转义字符</li>
<li>其他的字符集
<ul>
<li>\w 任意的单词字符 [A-Za-z0-9_]</li>
<li>\W 除了单词字符 [^A-Za-z0-9_]</li>
<li>\d 任意数字 [0-9]</li>
<li>\D 除了数字 [^0-9]</li>
<li>\s 空格</li>
<li>\S 除了空格</li>
<li>\b 单词边界</li>
<li>\B 除了单词边界</li>
</ul>
</li>
<li>开头和结尾
<ul>
<li>^ 表示字符串的开头</li>
<li>$ 表示字符串的结尾</li>
</ul>
</li>
</ol>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">//字符串中含有ab 的字符</span></span>
<span class="line"><span class="token keyword">let</span> re <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">ab</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> result <span class="token operator">=</span> re<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token string">"acd"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//字符串中含有 a 或者b</span></span>
<span class="line">re <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">a|b</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span></span>
<span class="line">result <span class="token operator">=</span> re<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token string">"acd"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//使用[]</span></span>
<span class="line">re <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[a-z]</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span></span>
<span class="line">re <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[A-Z]</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span></span>
<span class="line">re <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[A-Za-z]</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span></span>
<span class="line">re <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[a-z]</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">;</span> <span class="token comment">//匹配模式i表示忽略大小写 与 [A-Za-z] 相同</span></span>
<span class="line">re <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[^a-z]</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span> <span class="token comment">//匹配包含小写字母以外内容的字符串</span></span>
<span class="line">re <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">.</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span></span>
<span class="line">re <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\w</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span></span>
<span class="line">re <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^a</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span> <span class="token comment">//匹配开始位置的a</span></span>
<span class="line">re <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">a$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span> <span class="token comment">//匹配结束位置的a</span></span>
<span class="line">re <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^a$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span> <span class="token comment">//只匹配字符a，完全匹配，要求字符串必须和正则完全一致</span></span>
<span class="line">re <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^abc$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span></span>
<span class="line">result <span class="token operator">=</span> re<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token string">"aa"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_11-15-正则表达式量词语法" tabindex="-1"><a class="header-anchor" href="#_11-15-正则表达式量词语法"><span>11.15 正则表达式量词语法</span></a></h2>
<ul>
<li>量词
<ul>
<li>{m}  正好m个</li>
<li>{m,} 至少m个</li>
<li>{m,n} m-n个</li>
<li><code v-pre>+</code> 一个以上，相当于{1,}</li>
<li><code v-pre>*</code> 任意数量的a</li>
<li>? 0-1次 {0,1}</li>
</ul>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">  <span class="token keyword">let</span> re <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">a{3}</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">let</span> result <span class="token operator">=</span> re<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token string">"aaaa"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token comment">//必须正好三个</span></span>
<span class="line">  re <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^a{3}$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span></span>
<span class="line">  result <span class="token operator">=</span> re<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token string">"aaaa"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  re <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^ab{3}$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span> <span class="token comment">//只能是三个b</span></span>
<span class="line">  re <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^(ab){3}$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span> <span class="token comment">// 三个ab</span></span>
<span class="line">  re <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^[a-z]{3}$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span></span>
<span class="line">  result <span class="token operator">=</span> re<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token string">"ald"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token comment">//表示一个以上</span></span>
<span class="line">  re <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^[a-z]{1,}$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span></span>
<span class="line">  result <span class="token operator">=</span> re<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token string">"a"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  re <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^ba+$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span></span>
<span class="line">  result <span class="token operator">=</span> re<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token string">"baaa"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  re <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^ba*$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span></span>
<span class="line">  result <span class="token operator">=</span> re<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token string">"baaaaa"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  re <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^ba?$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span></span>
<span class="line">  result <span class="token operator">=</span> re<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token string">"baa"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_11-16-正则表达式exec语法" tabindex="-1"><a class="header-anchor" href="#_11-16-正则表达式exec语法"><span>11.16 正则表达式exec语法</span></a></h2>
<p>re.exec()</p>
<p>获取字符串中符合正则表达式中的内容</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">"abcaecafcacc"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">//提取出str中符合axc格式的内容</span></span>
<span class="line"><span class="token comment">//g表示全局匹配</span></span>
<span class="line"><span class="token keyword">let</span> re <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">a[a-z]c</span><span class="token regex-delimiter">/</span><span class="token regex-flags">gi</span></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> result <span class="token operator">=</span> re<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">re <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">a([a-z])c</span><span class="token regex-delimiter">/</span><span class="token regex-flags">gi</span></span><span class="token punctuation">;</span></span>
<span class="line">result <span class="token operator">=</span> re<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">re <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">a(([a-z])c)</span><span class="token regex-delimiter">/</span><span class="token regex-flags">gi</span></span><span class="token punctuation">;</span></span>
<span class="line">result <span class="token operator">=</span> re<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// console.log(result);</span></span>
<span class="line"><span class="token keyword">while</span> <span class="token punctuation">(</span>result<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> result<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> result<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">result <span class="token operator">=</span> re<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_11-17-正则表达式exec练习" tabindex="-1"><a class="header-anchor" href="#_11-17-正则表达式exec练习"><span>11.17 正则表达式exec练习</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">/* </span>
<span class="line">dadfadfkak13501789087dfkadfkadjfla15347576787sjdfkdadjf18936215543klajfdklasdjfkasdf</span>
<span class="line">用自己的语言来描述出来</span>
<span class="line">    1   3           501789087</span>
<span class="line">    1   3到9之间    任意数字 x 9</span>
<span class="line">*/</span></span>
<span class="line"><span class="token comment">//打印手机号</span></span>
<span class="line"><span class="token keyword">let</span> str <span class="token operator">=</span></span>
<span class="line"><span class="token string">"dadfadfkak13501789087dfkadfkadjfla15347576787sjdfkdadjf18936215543klajfdklasdjfkasdf"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> re <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">1[3-9]\d{9}</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> result<span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>result <span class="token operator">=</span> re<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">//中间4位设置为星号</span></span>
<span class="line">re <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(1[3-9]\d)(\d{4})(\d{4})</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>result <span class="token operator">=</span> re<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token comment">// console.log(result[0], result[1], result[2]);</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token string">"****"</span> <span class="token operator">+</span> result<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">//检查手机号</span></span>
<span class="line">re <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^1[3-9]\d{9}$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>re<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token string">"13456789042"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_11-18-字符串的方法-结合正则表达式" tabindex="-1"><a class="header-anchor" href="#_11-18-字符串的方法-结合正则表达式"><span>11.18 字符串的方法-结合正则表达式</span></a></h2>
<ul>
<li>split()
<ul>
<li>可以根据正则表达式来对一个字符串进行拆分</li>
</ul>
</li>
<li>search()
<ul>
<li>可以去搜索符合正则表达式的内容第一次在字符串中出现的位置</li>
</ul>
</li>
<li>replace()
<ul>
<li>根据正则表达式替换字符串中的指定内容</li>
</ul>
</li>
<li>match()
<ul>
<li>根据正则表达式去匹配字符串中符合要求的内容</li>
</ul>
</li>
<li>matchAll()
<ul>
<li>根据正则表达式去匹配字符串中符合要求的内容（必须设置g 全局匹配）</li>
<li>它返回的是一个迭代器</li>
</ul>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">"a@b@c@d"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> result <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">"@"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// 正则表达式拆分</span></span>
<span class="line">str <span class="token operator">=</span> <span class="token string">"孙悟空abc猪八戒adc沙和尚"</span><span class="token punctuation">;</span></span>
<span class="line">result <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">a[bd]c</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">//正则表达式搜索</span></span>
<span class="line">str <span class="token operator">=</span></span>
<span class="line"><span class="token string">"dadfadfkak13501789087dfkadfkadjfla15347576787sjdfkdadjf18936215543klajfdklasdjfkasdf"</span><span class="token punctuation">;</span></span>
<span class="line">result <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">search</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">1[3-9]\d{9}</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">result <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">1[3-9]\d{9}</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">"哈哈哈"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">result <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">1[3-9]\d{9}</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">result <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">matchAll</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">1[3-9]\d{9}</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> item <span class="token keyword">of</span> result<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">//可以分组</span></span>
<span class="line">result <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">matchAll</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">1[3-9](\d{9})</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> item <span class="token keyword">of</span> result<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_11-19-垃圾回收" tabindex="-1"><a class="header-anchor" href="#_11-19-垃圾回收"><span>11.19 垃圾回收</span></a></h2>
<p>垃圾回收（Garbage Collect）</p>
<p>和生活一样，生活时间长了以后会长生生活垃圾</p>
<p>程序运行一段时间后也会产生垃圾</p>
<p>在程序的世界中，什么是垃圾？</p>
<ul>
<li>如果一个对象没有任何的变量对其进行引用，那么这个对象就是一个垃圾</li>
<li>垃圾对象的存在，会严重的影响程序的性能</li>
<li>在JS中有自动的垃圾回收机制，这些垃圾对象会被解释器自动回收，我们无需手动处理</li>
<li>对于垃圾回收来说，我们唯一能做的事情就是将不再使用的变量设置为null</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">  <span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"孙悟空"</span> <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">let</span> obj2 <span class="token operator">=</span> obj<span class="token punctuation">;</span></span>
<span class="line">  obj <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>
<span class="line">  obj2 <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


