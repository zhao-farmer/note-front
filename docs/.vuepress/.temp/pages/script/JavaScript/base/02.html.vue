<template><div><h1 id="二、数据定义" tabindex="-1"><a class="header-anchor" href="#二、数据定义"><span>二、数据定义</span></a></h1>
<h2 id="_2-1-变量与字面量" tabindex="-1"><a class="header-anchor" href="#_2-1-变量与字面量"><span>2.1 变量与字面量</span></a></h2>
<h3 id="_2-1-1-字面量" tabindex="-1"><a class="header-anchor" href="#_2-1-1-字面量"><span>2.1.1 字面量</span></a></h3>
<ul>
<li>字面量其实就是一个值，它所代表的含义就是它字面的意思</li>
<li>比如 1 2 3 4 100 'hello' true null ......</li>
<li>在js中所有的字面量都可以直接使用，但是直接使用字面量并不方便</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"hello"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token function">alert</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-1-2-变量" tabindex="-1"><a class="header-anchor" href="#_2-1-2-变量"><span>2.1.2 变量</span></a></h3>
<ul>
<li>变量可以用“存储”字面量</li>
<li>并且变量中存储的字面量可以随意的修改</li>
<li>通过变量可以对字面量进行描述，并且变量比较方便修改</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> x<span class="token punctuation">;</span></span>
<span class="line">x <span class="token operator">=</span> <span class="token number">80</span><span class="token punctuation">;</span></span>
<span class="line">x <span class="token operator">=</span> <span class="token string">'哈哈'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> age<span class="token punctuation">;</span></span>
<span class="line">age <span class="token operator">=</span> <span class="token number">80</span><span class="token punctuation">;</span></span>
<span class="line">age <span class="token operator">=</span> <span class="token number">81</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-1-2-变量的使用" tabindex="-1"><a class="header-anchor" href="#_2-1-2-变量的使用"><span>2.1.2 变量的使用</span></a></h3>
<ul>
<li>声明变量 -&gt; let 变量名 / var 变量</li>
<li>变量赋值 -&gt; a = xx</li>
<li>声明与赋值同时进行 let 变量名 = xx</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> abc<span class="token punctuation">;</span></span>
<span class="line">abc <span class="token operator">=</span> <span class="token string">"黄金"</span><span class="token punctuation">;</span></span>
<span class="line">abc <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-2-变量的内存结构" tabindex="-1"><a class="header-anchor" href="#_2-2-变量的内存结构"><span>2.2 变量的内存结构</span></a></h2>
<p>变量中并不存储任何值，而是存储值的内存地址</p>
<p><img src="/script/JavaScript/base/002.png" alt=""></p>
<h2 id="_2-3-常量" tabindex="-1"><a class="header-anchor" href="#_2-3-常量"><span>2.3 常量</span></a></h2>
<ul>
<li>在js中，使用const声明常量</li>
<li>常量智能声明一次，重复赋值会报错</li>
<li>一般常量都是用全大写</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> <span class="token constant">PI</span> <span class="token operator">=</span> <span class="token number">3.11415926</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="_2-4-标识符" tabindex="-1"><a class="header-anchor" href="#_2-4-标识符"><span>2.4 标识符</span></a></h2>
<ul>
<li>在JS中，所有可以由我们自主命名的内容，都可以认为是一个标识符
如  变量名  函数名  类名...</li>
<li>使用标识符需要遵循如下的命名规范：
<ol>
<li>标识符智能含有字母、数字、下划线、$，且不能以数字开头</li>
<li>标识符不能是JS的关键字和保留字，也不建议使用内置的函数或类名做变量名</li>
<li>命名规范
<ul>
<li>通常会使用驼峰命名法
<ul>
<li>首字母小写，每个单词开头大写</li>
<li>maxlength  -&gt; maxLength</li>
<li>borderleftwidth -&gt; BorderLeftWidth</li>
</ul>
</li>
<li>类名会使用大驼峰命名法
<ul>
<li>首字母大写，每个单词开头大写
<ul>
<li>maxlength -&gt;MaxLength</li>
</ul>
</li>
</ul>
</li>
<li>常量的字母会全部大写
<ul>
<li>MAX_LENGTH</li>
</ul>
</li>
</ul>
</li>
</ol>
</li>
</ul>
</div></template>


