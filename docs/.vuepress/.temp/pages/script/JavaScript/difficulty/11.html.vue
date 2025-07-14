<template><div><h1 id="十一、字符串常见方法" tabindex="-1"><a class="header-anchor" href="#十一、字符串常见方法"><span>十一、字符串常见方法</span></a></h1>
<p>在javaScript中的字符串、数值、布尔值具有对象的使用特征，如具有属性和方法</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 字符串类型</span></span>
<span class="line"><span class="token keyword">const</span> str <span class="token operator">=</span><span class="token string">'hello world!'</span></span>
<span class="line"><span class="token comment">// 统计字符的长度(字符数量)</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span>length<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 数值类型</span></span>
<span class="line"><span class="token keyword">const</span> price <span class="token operator">=</span><span class="token number">12.345</span></span>
<span class="line"><span class="token comment">// 保留两位小数</span></span>
<span class="line">price<span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>之所以具有对象特征的原因是字符串、数值、布尔类型数据是JavaScript 底层使用 0bject 构造函数“包装”来的，被称为包装类型。</p>
<ol>
<li>实例属性 length 用来获取字符串的度长(重点)</li>
<li>实例方法 split(‘分隔符’)用来将字符串拆分成数组(重点)</li>
<li>实例方法 substring(需要截取的第一个字符的索引[,结束的索引号])  用于字符串截取(重点)</li>
<li>实例方法 startsWith(检测字符串[，检测位置索引号])  检测是否以某字符开头(重点)</li>
<li>实例方法 includes(搜索的字符串[, 检测位置索引号])判断一个字符串是否包含在另一个字符串中，根据情况返回true 或 false(重点)</li>
<li>实例方法 toUpperCase 用于将字母转换成大写</li>
<li>实例方法 toLowerCase 用于将就转换成小写</li>
<li>实例方法 indexOf 检测是否包含某字符</li>
<li>实例方法 endsWith 检测是否以某字符结尾</li>
<li>实例方法 replace 用于替换字符串，支持正则匹配</li>
<li>实例方法 match 用于查找字符串，支持正则匹配</li>
</ol>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 1.实例属性 1ength </span></span>
<span class="line"><span class="token keyword">const</span> str1 <span class="token operator">=</span> <span class="token string">'pink'</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str1<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// 4</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 2.分隔符 sp1it </span></span>
<span class="line"><span class="token keyword">const</span> str2 <span class="token operator">=</span> <span class="token string">'pink,red'</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str2<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">','</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>           <span class="token comment">// ['pink', 'red']</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 3.substring 字符串截取</span></span>
<span class="line"><span class="token keyword">const</span> str3 <span class="token operator">=</span> <span class="token string">'substring'</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str3<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>       <span class="token comment">// sub</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 4.startsWith 字符串以...为开头</span></span>
<span class="line"><span class="token keyword">const</span> str4 <span class="token operator">=</span> <span class="token string">'startswith'</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str4<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">'ts'</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// true</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 5.includes 字符或字符串是否在当前字符串中</span></span>
<span class="line"><span class="token keyword">const</span> str5 <span class="token operator">=</span> <span class="token string">'includes'</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str5<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">'lu'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// true</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 6.touppercase 字符串转大写</span></span>
<span class="line"><span class="token keyword">const</span> str6 <span class="token operator">=</span> <span class="token string">'toUpperCase'</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str6<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// TOUPPERCASE</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 7.touppercase 字符串转小写</span></span>
<span class="line"><span class="token keyword">const</span> str7 <span class="token operator">=</span> <span class="token string">'toLowerCase'</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str7<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// tolowercase</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 8.indexOf 查询字符或字符串在目标字符串的位置 为查询到返回 -1</span></span>
<span class="line"><span class="token keyword">const</span> str8 <span class="token operator">=</span> <span class="token string">'indexOf'</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str8<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">'de'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// 2</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 9.endWith 字符串以...为结尾</span></span>
<span class="line"><span class="token keyword">const</span> str9 <span class="token operator">=</span> <span class="token string">'endWith'</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str9<span class="token punctuation">.</span><span class="token function">endsWith</span><span class="token punctuation">(</span><span class="token string">'th'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// true</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 10.endswith 字符串以...为结尾</span></span>
<span class="line"><span class="token keyword">const</span> str10 <span class="token operator">=</span> <span class="token string">'replace'</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str10<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">'pl'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// reace</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 11.match 查找字符串</span></span>
<span class="line"><span class="token keyword">const</span> str11 <span class="token operator">=</span> <span class="token string">'match'</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str11<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token string">'tc'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// ['tc', index: 2, input: 'match', groups: undefined]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


