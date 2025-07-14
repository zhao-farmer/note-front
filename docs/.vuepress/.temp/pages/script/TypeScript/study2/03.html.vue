<template><div><h1 id="三、typescript-基础数据类型" tabindex="-1"><a class="header-anchor" href="#三、typescript-基础数据类型"><span>三、TypeScript 基础数据类型</span></a></h1>
<p>本章是 TypeScript 类型系统的总体介绍。</p>
<p>TypeScript 继承了 JavaScript 的类型，在这个基础上，定义了一套自己的类型系统。</p>
<h2 id="_3-1-基本类型" tabindex="-1"><a class="header-anchor" href="#_3-1-基本类型"><span>3.1 基本类型</span></a></h2>
<h3 id="_3-1-1-概述" tabindex="-1"><a class="header-anchor" href="#_3-1-1-概述"><span>3.1.1 概述</span></a></h3>
<p>JavaScript 语言（注意，不是 TypeScript）将值分成 8 种类型。</p>
<ul>
<li>boolean</li>
<li>string</li>
<li>number</li>
<li>bigint</li>
<li>symbol</li>
<li>object</li>
<li>undefined</li>
<li>null</li>
</ul>
<p>TypeScript 继承了 JavaScript 的类型设计，以上 8 种类型可以看作 TypeScript 的基本类型。</p>
<p>注意，上面所有类型的名称都是小写字母，首字母大写的<code v-pre>Number</code>、<code v-pre>String</code>、<code v-pre>Boolean</code>等在 JavaScript 语言中都是内置对象，而不是类型名称。</p>
<p>另外，undefined 和 null 既可以作为值，也可以作为类型，取决于在哪里使用它们。</p>
<p>这 8 种基本类型是 TypeScript 类型系统的基础，复杂类型由它们组合而成。</p>
<p>以下是它们的简单介绍。</p>
<h3 id="_3-1-2-boolean-类型" tabindex="-1"><a class="header-anchor" href="#_3-1-2-boolean-类型"><span>3.1.2 boolean 类型</span></a></h3>
<p><code v-pre>boolean</code>类型只包含<code v-pre>true</code>和<code v-pre>false</code>两个布尔值。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">const</span> x<span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> y<span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，变量<code v-pre>x</code>和<code v-pre>y</code>就属于 boolean 类型。</p>
<h3 id="_3-1-3-string-类型" tabindex="-1"><a class="header-anchor" href="#_3-1-3-string-类型"><span>3.1.3 string 类型</span></a></h3>
<p><code v-pre>string</code>类型包含所有字符串。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">const</span> x<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">"hello"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> y<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>x<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> world</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，普通字符串和模板字符串都属于 string 类型。</p>
<h3 id="_3-1-4-number-类型" tabindex="-1"><a class="header-anchor" href="#_3-1-4-number-类型"><span>3.1.4 number 类型</span></a></h3>
<p><code v-pre>number</code>类型包含所有整数和浮点数。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">const</span> x<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> y<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">3.14</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> z<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">0xffff</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，整数、浮点数和非十进制数都属于 number 类型。</p>
<h3 id="_3-1-5-bigint-类型" tabindex="-1"><a class="header-anchor" href="#_3-1-5-bigint-类型"><span>3.1.5 bigint 类型</span></a></h3>
<p>bigint 类型包含所有的大整数。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">const</span> x<span class="token operator">:</span> bigint <span class="token operator">=</span> <span class="token number">123n</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> y<span class="token operator">:</span> bigint <span class="token operator">=</span> <span class="token number">0xffffn</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，变量<code v-pre>x</code>和<code v-pre>y</code>就属于 bigint 类型。</p>
<p>bigint 与 number 类型不兼容。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">const</span> x<span class="token operator">:</span> bigint <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span> <span class="token comment">// 报错</span></span>
<span class="line"><span class="token keyword">const</span> y<span class="token operator">:</span> bigint <span class="token operator">=</span> <span class="token number">3.14</span><span class="token punctuation">;</span> <span class="token comment">// 报错</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，<code v-pre>bigint</code>类型赋值为整数和小数，都会报错。</p>
<p>注意，bigint 类型是 ES2020 标准引入的。如果使用这个类型，TypeScript 编译的目标 JavaScript 版本不能低于 ES2020（即编译参数<code v-pre>target</code>不低于<code v-pre>es2020</code>）。</p>
<h3 id="_3-1-6-symbol-类型" tabindex="-1"><a class="header-anchor" href="#_3-1-6-symbol-类型"><span>3.1.6 symbol 类型</span></a></h3>
<p>symbol 类型包含所有的 Symbol 值。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">const</span> x<span class="token operator">:</span> <span class="token builtin">symbol</span> <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>上面示例中，<code v-pre>Symbol()</code>函数的返回值就是 symbol 类型。</p>
<p>symbol 类型的详细介绍，参见《Symbol》一章。</p>
<h3 id="_3-1-7-object-类型" tabindex="-1"><a class="header-anchor" href="#_3-1-7-object-类型"><span>3.1.7 object 类型</span></a></h3>
<p>根据 JavaScript 的设计，object 类型包含了所有对象、数组和函数。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">const</span> x<span class="token operator">:</span> object <span class="token operator">=</span> <span class="token punctuation">{</span> foo<span class="token operator">:</span> <span class="token number">123</span> <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> y<span class="token operator">:</span> object <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> z<span class="token operator">:</span> <span class="token function-variable function">object</span> <span class="token operator">=</span> <span class="token punctuation">(</span>n<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=></span> n <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，对象、数组、函数都属于 object 类型。</p>
<h3 id="_3-1-8-undefined-类型-null-类型" tabindex="-1"><a class="header-anchor" href="#_3-1-8-undefined-类型-null-类型"><span>3.1.8 undefined 类型，null 类型</span></a></h3>
<p>undefined 和 null 是两种独立类型，它们各自都只有一个值。</p>
<p>undefined 类型只包含一个值<code v-pre>undefined</code>，表示未定义（即还未给出定义，以后可能会有定义）。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">let</span> x<span class="token operator">:</span> <span class="token keyword">undefined</span> <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>上面示例中，变量<code v-pre>x</code>就属于 undefined 类型。两个<code v-pre>undefined</code>里面，第一个是类型，第二个是值。</p>
<p>null 类型也只包含一个值<code v-pre>null</code>，表示为空（即此处没有值）。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">const</span> x<span class="token operator">:</span> <span class="token keyword">null</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>上面示例中，变量<code v-pre>x</code>就属于 null 类型。</p>
<p>注意，如果没有声明类型的变量，被赋值为<code v-pre>undefined</code>或<code v-pre>null</code>，它们的类型会被推断为<code v-pre>any</code>。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span> <span class="token comment">// any</span></span>
<span class="line"><span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span> <span class="token comment">// any</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> c <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// any</span></span>
<span class="line"><span class="token keyword">const</span> d <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// any</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果希望避免这种情况，则需要打开编译选项<code v-pre>strictNullChecks</code>。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token comment">// 打开编译设置 strictNullChecks</span></span>
<span class="line"><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span> <span class="token comment">// undefined</span></span>
<span class="line"><span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span> <span class="token comment">// undefined</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> c <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// null</span></span>
<span class="line"><span class="token keyword">const</span> d <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// null</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，打开编译设置<code v-pre>strictNullChecks</code>以后，赋值为<code v-pre>undefined</code>的变量会被推断为<code v-pre>undefined</code>类型，赋值为<code v-pre>null</code>的变量会被推断为<code v-pre>null</code>类型。</p>
<h2 id="_3-2-包装对象类型" tabindex="-1"><a class="header-anchor" href="#_3-2-包装对象类型"><span>3.2 包装对象类型</span></a></h2>
<h3 id="_3-2-1-包装对象的概念" tabindex="-1"><a class="header-anchor" href="#_3-2-1-包装对象的概念"><span>3.2.1 包装对象的概念</span></a></h3>
<p>JavaScript 的 8 种类型之中，<code v-pre>undefined</code>和<code v-pre>null</code>其实是两个特殊值，<code v-pre>object</code>属于复合类型，剩下的五种属于原始类型（primitive value），代表最基本的、不可再分的值。</p>
<ul>
<li>boolean</li>
<li>string</li>
<li>number</li>
<li>bigint</li>
<li>symbol</li>
</ul>
<p>上面这五种原始类型的值，都有对应的包装对象（wrapper object）。所谓“包装对象”，指的是这些值在需要时，会自动产生的对象。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token string">"hello"</span><span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 'e'</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>上面示例中，字符串<code v-pre>hello</code>执行了<code v-pre>charAt()</code>方法。但是，在 JavaScript 语言中，只有对象才有方法，原始类型的值本身没有方法。这行代码之所以可以运行，就是因为在调用方法时，字符串会自动转为包装对象，<code v-pre>charAt()</code>方法其实是定义在包装对象上。</p>
<p>这样的设计大大方便了字符串处理，省去了将原始类型的值手动转成对象实例的麻烦。</p>
<p>五种包装对象之中，symbol 类型和 bigint 类型无法直接获取它们的包装对象（即<code v-pre>Symbol()</code>和<code v-pre>BigInt()</code>不能作为构造函数使用），但是剩下三种可以。</p>
<ul>
<li><code v-pre>Boolean()</code></li>
<li><code v-pre>String()</code></li>
<li><code v-pre>Number()</code></li>
</ul>
<p>以上三个构造函数，执行后可以直接获取某个原始类型值的包装对象。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> s <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">"hello"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">typeof</span> s<span class="token punctuation">;</span> <span class="token comment">// 'object'</span></span>
<span class="line">s<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 'e'</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，<code v-pre>s</code>就是字符串<code v-pre>hello</code>的包装对象，<code v-pre>typeof</code>运算符返回<code v-pre>object</code>，不是<code v-pre>string</code>，但是本质上它还是字符串，可以使用所有的字符串方法。</p>
<p>注意，<code v-pre>String()</code>只有当作构造函数使用时（即带有<code v-pre>new</code>命令调用），才会返回包装对象。如果当作普通函数使用（不带有<code v-pre>new</code>命令），返回就是一个普通字符串。其他两个构造函数<code v-pre>Number()</code>和<code v-pre>Boolean()</code>也是如此。</p>
<h3 id="_3-2-2-包装对象类型与字面量类型" tabindex="-1"><a class="header-anchor" href="#_3-2-2-包装对象类型与字面量类型"><span>3.2.2 包装对象类型与字面量类型</span></a></h3>
<p>由于包装对象的存在，导致每一个原始类型的值都有包装对象和字面量两种情况。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token string">"hello"</span><span class="token punctuation">;</span> <span class="token comment">// 字面量</span></span>
<span class="line"><span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">"hello"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 包装对象</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，第一行是字面量，第二行是包装对象，它们都是字符串。</p>
<p>为了区分这两种情况，TypeScript 对五种原始类型分别提供了大写和小写两种类型。</p>
<ul>
<li>Boolean 和 boolean</li>
<li>String 和 string</li>
<li>Number 和 number</li>
<li>BigInt 和 bigint</li>
<li>Symbol 和 symbol</li>
</ul>
<p>其中，大写类型同时包含包装对象和字面量两种情况，小写类型只包含字面量，不包含包装对象。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">const</span> s1<span class="token operator">:</span> String <span class="token operator">=</span> <span class="token string">"hello"</span><span class="token punctuation">;</span> <span class="token comment">// 正确</span></span>
<span class="line"><span class="token keyword">const</span> s2<span class="token operator">:</span> String <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">"hello"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 正确</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> s3<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">"hello"</span><span class="token punctuation">;</span> <span class="token comment">// 正确</span></span>
<span class="line"><span class="token keyword">const</span> s4<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">"hello"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 报错</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，<code v-pre>String</code>类型可以赋值为字符串的字面量，也可以赋值为包装对象。但是，<code v-pre>string</code>类型只能赋值为字面量，赋值为包装对象就会报错。</p>
<p>建议只使用小写类型，不使用大写类型。因为绝大部分使用原始类型的场合，都是使用字面量，不使用包装对象。而且，TypeScript 把很多内置方法的参数，定义成小写类型，使用大写类型会报错。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">const</span> n1<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> n2<span class="token operator">:</span> Number <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>n1<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1</span></span>
<span class="line">Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>n2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 报错</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，<code v-pre>Math.abs()</code>方法的参数类型被定义成小写的<code v-pre>number</code>，传入大写的<code v-pre>Number</code>类型就会报错。</p>
<p>上一小节说过，<code v-pre>Symbol()</code>和<code v-pre>BigInt()</code>这两个函数不能当作构造函数使用，所以没有办法直接获得 symbol 类型和 bigint 类型的包装对象，因此<code v-pre>Symbol</code>和<code v-pre>BigInt</code>这两个类型虽然存在，但是完全没有使用的理由。</p>
<h2 id="_3-3-object-类型与-object-类型" tabindex="-1"><a class="header-anchor" href="#_3-3-object-类型与-object-类型"><span>3.3 Object 类型与 object 类型</span></a></h2>
<p>TypeScript 的对象类型也有大写<code v-pre>Object</code>和小写<code v-pre>object</code>两种。</p>
<h3 id="_3-3-1-object-类型" tabindex="-1"><a class="header-anchor" href="#_3-3-1-object-类型"><span>3.3.1 Object 类型</span></a></h3>
<p>大写的<code v-pre>Object</code>类型代表 JavaScript 语言里面的广义对象。所有可以转成对象的值，都是<code v-pre>Object</code>类型，这囊括了几乎所有的值。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">let</span> obj<span class="token operator">:</span> Object<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">obj <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line">obj <span class="token operator">=</span> <span class="token string">"hi"</span><span class="token punctuation">;</span></span>
<span class="line">obj <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line">obj <span class="token operator">=</span> <span class="token punctuation">{</span> foo<span class="token operator">:</span> <span class="token number">123</span> <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">obj <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function-variable function">obj</span> <span class="token operator">=</span> <span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=></span> a <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，原始类型值、对象、数组、函数都是合法的<code v-pre>Object</code>类型。</p>
<p>事实上，除了<code v-pre>undefined</code>和<code v-pre>null</code>这两个值不能转为对象，其他任何值都可以赋值给<code v-pre>Object</code>类型。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">let</span> obj<span class="token operator">:</span> Object<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">obj <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span> <span class="token comment">// 报错</span></span>
<span class="line">obj <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// 报错</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，<code v-pre>undefined</code>和<code v-pre>null</code>赋值给<code v-pre>Object</code>类型，就会报错。</p>
<p>另外，空对象<code v-pre>{}</code>是<code v-pre>Object</code>类型的简写形式，所以使用<code v-pre>Object</code>时常常用空对象代替。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">let</span> obj<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">obj <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line">obj <span class="token operator">=</span> <span class="token string">"hi"</span><span class="token punctuation">;</span></span>
<span class="line">obj <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line">obj <span class="token operator">=</span> <span class="token punctuation">{</span> foo<span class="token operator">:</span> <span class="token number">123</span> <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">obj <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function-variable function">obj</span> <span class="token operator">=</span> <span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=></span> a <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，变量<code v-pre>obj</code>的类型是空对象<code v-pre>{}</code>，就代表<code v-pre>Object</code>类型。</p>
<p>显然，无所不包的<code v-pre>Object</code>类型既不符合直觉，也不方便使用。</p>
<h3 id="_3-3-2-object-类型" tabindex="-1"><a class="header-anchor" href="#_3-3-2-object-类型"><span>3.3.2 object 类型</span></a></h3>
<p>小写的<code v-pre>object</code>类型代表 JavaScript 里面的狭义对象，即可以用字面量表示的对象，只包含对象、数组和函数，不包括原始类型的值。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">let</span> obj<span class="token operator">:</span> object<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">obj <span class="token operator">=</span> <span class="token punctuation">{</span> foo<span class="token operator">:</span> <span class="token number">123</span> <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">obj <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function-variable function">obj</span> <span class="token operator">=</span> <span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=></span> a <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line">obj <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token comment">// 报错</span></span>
<span class="line">obj <span class="token operator">=</span> <span class="token string">"hi"</span><span class="token punctuation">;</span> <span class="token comment">// 报错</span></span>
<span class="line">obj <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 报错</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，<code v-pre>object</code>类型不包含原始类型值，只包含对象、数组和函数。</p>
<p>大多数时候，我们使用对象类型，只希望包含真正的对象，不希望包含原始类型。所以，建议总是使用小写类型<code v-pre>object</code>，不使用大写类型<code v-pre>Object</code>。</p>
<p>注意，无论是大写的<code v-pre>Object</code>类型，还是小写的<code v-pre>object</code>类型，都只包含 JavaScript 内置对象原生的属性和方法，用户自定义的属性和方法都不存在于这两个类型之中。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">const</span> o1<span class="token operator">:</span> Object <span class="token operator">=</span> <span class="token punctuation">{</span> foo<span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> o2<span class="token operator">:</span> object <span class="token operator">=</span> <span class="token punctuation">{</span> foo<span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">o1<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 正确</span></span>
<span class="line">o1<span class="token punctuation">.</span>foo<span class="token punctuation">;</span> <span class="token comment">// 报错</span></span>
<span class="line"></span>
<span class="line">o2<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 正确</span></span>
<span class="line">o2<span class="token punctuation">.</span>foo<span class="token punctuation">;</span> <span class="token comment">// 报错</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，<code v-pre>toString()</code>是对象的原生方法，可以正确访问。<code v-pre>foo</code>是自定义属性，访问就会报错。如何描述对象的自定义属性，详见《对象类型》一章。</p>
<h2 id="_3-4-undefined-和-null-的特殊性" tabindex="-1"><a class="header-anchor" href="#_3-4-undefined-和-null-的特殊性"><span>3.4 undefined 和 null 的特殊性</span></a></h2>
<p><code v-pre>undefined</code>和<code v-pre>null</code>既是值，又是类型。</p>
<p>作为值，它们有一个特殊的地方：任何其他类型的变量都可以赋值为<code v-pre>undefined</code>或<code v-pre>null</code>。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">let</span> age<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">24</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">age <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// 正确</span></span>
<span class="line">age <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span> <span class="token comment">// 正确</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，变量<code v-pre>age</code>的类型是<code v-pre>number</code>，但是赋值为<code v-pre>null</code>或<code v-pre>undefined</code>并不报错。</p>
<p>这并不是因为<code v-pre>undefined</code>和<code v-pre>null</code>包含在<code v-pre>number</code>类型里面，而是故意这样设计，任何类型的变量都可以赋值为<code v-pre>undefined</code>和<code v-pre>null</code>，以便跟 JavaScript 的行为保持一致。</p>
<p>JavaScript 的行为是，变量如果等于<code v-pre>undefined</code>就表示还没有赋值，如果等于<code v-pre>null</code>就表示值为空。所以，TypeScript 就允许了任何类型的变量都可以赋值为这两个值。</p>
<p>但是有时候，这并不是开发者想要的行为，也不利于发挥类型系统的优势。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">const</span> obj<span class="token operator">:</span> object <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span></span>
<span class="line">obj<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 编译不报错，运行就报错</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，变量<code v-pre>obj</code>等于<code v-pre>undefined</code>，编译不会报错。但是，实际执行时，调用<code v-pre>obj.toString()</code>就报错了，因为<code v-pre>undefined</code>不是对象，没有这个方法。</p>
<p>为了避免这种情况，及早发现错误，TypeScript 提供了一个编译选项<code v-pre>strictNullChecks</code>。只要打开这个选项，<code v-pre>undefined</code>和<code v-pre>null</code>就不能赋值给其他类型的变量（除了<code v-pre>any</code>类型和<code v-pre>unknown</code>类型）。</p>
<p>下面是 tsc 命令打开这个编译选项的例子。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token comment">// tsc --strictNullChecks app.ts</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> age<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">24</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">age <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// 报错</span></span>
<span class="line">age <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span> <span class="token comment">// 报错</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，打开<code v-pre>--strictNullChecks</code>以后，<code v-pre>number</code>类型的变量<code v-pre>age</code>就不能赋值为<code v-pre>undefined</code>和<code v-pre>null</code>。</p>
<p>这个选项在配置文件<code v-pre>tsconfig.json</code>的写法如下。</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"compilerOptions"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"strictNullChecks"</span><span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line">    <span class="token comment">// ...</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打开<code v-pre>strictNullChecks</code>以后，<code v-pre>undefined</code>和<code v-pre>null</code>这两种值也不能互相赋值了。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token comment">// 打开 strictNullChecks</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> x<span class="token operator">:</span> <span class="token keyword">undefined</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// 报错</span></span>
<span class="line"><span class="token keyword">let</span> y<span class="token operator">:</span> <span class="token keyword">null</span> <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span> <span class="token comment">// 报错</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，<code v-pre>undefined</code>类型的变量赋值为<code v-pre>null</code>，或者<code v-pre>null</code>类型的变量赋值为<code v-pre>undefind</code>，都会报错。</p>
<p>总之，打开<code v-pre>strictNullChecks</code>以后，<code v-pre>undefined</code>和<code v-pre>null</code>只能赋值给自身，或者<code v-pre>any</code>类型和<code v-pre>unknown</code>类型的变量。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">let</span> x<span class="token operator">:</span> <span class="token builtin">any</span> <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> y<span class="token operator">:</span> <span class="token builtin">unknown</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-5-值类型" tabindex="-1"><a class="header-anchor" href="#_3-5-值类型"><span>3.5 值类型</span></a></h2>
<p>TypeScript 规定，单个值也是一种类型，称为“值类型”。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">let</span> x<span class="token operator">:</span> <span class="token string">"hello"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">x <span class="token operator">=</span> <span class="token string">"hello"</span><span class="token punctuation">;</span> <span class="token comment">// 正确</span></span>
<span class="line">x <span class="token operator">=</span> <span class="token string">"world"</span><span class="token punctuation">;</span> <span class="token comment">// 报错</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，变量<code v-pre>x</code>的类型是字符串<code v-pre>hello</code>，导致它只能赋值为这个字符串，赋值为其他字符串就会报错。</p>
<p>TypeScript 推断类型时，遇到<code v-pre>const</code>命令声明的变量，如果代码里面没有注明类型，就会推断该变量是值类型。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token comment">// x 的类型是 "https"</span></span>
<span class="line"><span class="token keyword">const</span> x <span class="token operator">=</span> <span class="token string">"https"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// y 的类型是 string</span></span>
<span class="line"><span class="token keyword">const</span> y<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">"https"</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，变量<code v-pre>x</code>是<code v-pre>const</code>命令声明的，TypeScript 就会推断它的类型是值<code v-pre>https</code>，而不是<code v-pre>string</code>类型。</p>
<p>这样推断是合理的，因为<code v-pre>const</code>命令声明的变量，一旦声明就不能改变，相当于常量。值类型就意味着不能赋为其他值。</p>
<p>注意，<code v-pre>const</code>命令声明的变量，如果赋值为对象，并不会推断为值类型。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token comment">// x 的类型是 { foo: number }</span></span>
<span class="line"><span class="token keyword">const</span> x <span class="token operator">=</span> <span class="token punctuation">{</span> foo<span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，变量<code v-pre>x</code>没有被推断为值类型，而是推断属性<code v-pre>foo</code>的类型是<code v-pre>number</code>。这是因为 JavaScript 里面，<code v-pre>const</code>变量赋值为对象时，属性值是可以改变的。</p>
<p>值类型可能会出现一些很奇怪的报错。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">const</span> x<span class="token operator">:</span> <span class="token number">5</span> <span class="token operator">=</span> <span class="token number">4</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 报错</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>上面示例中，等号左侧的类型是数值<code v-pre>5</code>，等号右侧<code v-pre>4 + 1</code>的类型，TypeScript 推测为<code v-pre>number</code>。由于<code v-pre>5</code>是<code v-pre>number</code>的子类型，<code v-pre>number</code>是<code v-pre>5</code>的父类型，父类型不能赋值给子类型，所以报错了（详见本章后文）。</p>
<p>但是，反过来是可以的，子类型可以赋值给父类型。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">let</span> x<span class="token operator">:</span> <span class="token number">5</span> <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> y<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">4</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">x <span class="token operator">=</span> y<span class="token punctuation">;</span> <span class="token comment">// 报错</span></span>
<span class="line">y <span class="token operator">=</span> x<span class="token punctuation">;</span> <span class="token comment">// 正确</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，变量<code v-pre>x</code>属于子类型，变量<code v-pre>y</code>属于父类型。<code v-pre>y</code>不能赋值为子类型<code v-pre>x</code>，但是反过来是可以的。</p>
<p>如果一定要让子类型可以赋值为父类型的值，就要用到类型断言（详见《类型断言》一章）。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">const</span> x<span class="token operator">:</span> <span class="token number">5</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">4</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token number">5</span><span class="token punctuation">;</span> <span class="token comment">// 正确</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>上面示例中，在<code v-pre>4 + 1</code>后面加上<code v-pre>as 5</code>，就是告诉编译器，可以把<code v-pre>4 + 1</code>的类型视为值类型<code v-pre>5</code>，这样就不会报错了。</p>
<p>只包含单个值的值类型，用处不大。实际开发中，往往将多个值结合，作为联合类型使用。</p>
<h2 id="_3-6-联合类型" tabindex="-1"><a class="header-anchor" href="#_3-6-联合类型"><span>3.6 联合类型</span></a></h2>
<p>联合类型（union types）指的是多个类型组成的一个新类型，使用符号<code v-pre>|</code>表示。</p>
<p>联合类型<code v-pre>A|B</code>表示，任何一个类型只要属于<code v-pre>A</code>或<code v-pre>B</code>，就属于联合类型<code v-pre>A|B</code>。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">let</span> x<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">x <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span> <span class="token comment">// 正确</span></span>
<span class="line">x <span class="token operator">=</span> <span class="token string">"abc"</span><span class="token punctuation">;</span> <span class="token comment">// 正确</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，变量<code v-pre>x</code>就是联合类型<code v-pre>string|number</code>，表示它的值既可以是字符串，也可以是数值。</p>
<p>联合类型可以与值类型相结合，表示一个变量的值有若干种可能。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">let</span> setting<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token operator">|</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> gender<span class="token operator">:</span> <span class="token string">"male"</span> <span class="token operator">|</span> <span class="token string">"female"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> rainbowColor<span class="token operator">:</span> <span class="token string">"赤"</span> <span class="token operator">|</span> <span class="token string">"橙"</span> <span class="token operator">|</span> <span class="token string">"黄"</span> <span class="token operator">|</span> <span class="token string">"绿"</span> <span class="token operator">|</span> <span class="token string">"青"</span> <span class="token operator">|</span> <span class="token string">"蓝"</span> <span class="token operator">|</span> <span class="token string">"紫"</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的示例都是由值类型组成的联合类型，非常清晰地表达了变量的取值范围。其中，<code v-pre>true|false</code>其实就是布尔类型<code v-pre>boolean</code>。</p>
<p>前面提到，打开编译选项<code v-pre>strictNullChecks</code>后，其他类型的变量不能赋值为<code v-pre>undefined</code>或<code v-pre>null</code>。这时，如果某个变量确实可能包含空值，就可以采用联合类型的写法。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">let</span> name<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">name <span class="token operator">=</span> <span class="token string">"John"</span><span class="token punctuation">;</span></span>
<span class="line">name <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，变量<code v-pre>name</code>的值可以是字符串，也可以是<code v-pre>null</code>。</p>
<p>联合类型的第一个成员前面，也可以加上竖杠<code v-pre>|</code>，这样便于多行书写。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">let</span> x<span class="token operator">:</span> <span class="token string">"one"</span> <span class="token operator">|</span> <span class="token string">"two"</span> <span class="token operator">|</span> <span class="token string">"three"</span> <span class="token operator">|</span> <span class="token string">"four"</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>上面示例中，联合类型的第一个成员<code v-pre>one</code>前面，加上了竖杠。</p>
<p>如果一个变量有多种类型，读取该变量时，往往需要进行“类型缩小”（type narrowing），区分该值到底属于哪一种类型，然后再进一步处理。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">printId</span><span class="token punctuation">(</span>id<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>id<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 报错</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，参数变量<code v-pre>id</code>可能是数值，也可能是字符串，这时直接对这个变量调用<code v-pre>toUpperCase()</code>方法会报错，因为这个方法只存在于字符串，不存在于数值。</p>
<p>解决方法就是对参数<code v-pre>id</code>做一下类型缩小，确定它的类型以后再进行处理。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">printId</span><span class="token punctuation">(</span>id<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> id <span class="token operator">===</span> <span class="token string">"string"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>id<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，函数体内部会判断一下变量<code v-pre>id</code>的类型，如果是字符串，就对其执行<code v-pre>toUpperCase()</code>方法。</p>
<p>“类型缩小”是 TypeScript 处理联合类型的标准方法，凡是遇到可能为多种类型的场合，都需要先缩小类型，再进行处理。实际上，联合类型本身可以看成是一种“类型放大”（type widening），处理时就需要“类型缩小”（type narrowing）。</p>
<p>下面是“类型缩小”的另一个例子。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">getPort</span><span class="token punctuation">(</span>scheme<span class="token operator">:</span> <span class="token string">"http"</span> <span class="token operator">|</span> <span class="token string">"https"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">switch</span> <span class="token punctuation">(</span>scheme<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">case</span> <span class="token string">"http"</span><span class="token operator">:</span></span>
<span class="line">      <span class="token keyword">return</span> <span class="token number">80</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">case</span> <span class="token string">"https"</span><span class="token operator">:</span></span>
<span class="line">      <span class="token keyword">return</span> <span class="token number">443</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，函数体内部对参数变量<code v-pre>scheme</code>进行类型缩小，根据不同的值类型，返回不同的结果。</p>
<h2 id="_3-7-交叉类型" tabindex="-1"><a class="header-anchor" href="#_3-7-交叉类型"><span>3.7 交叉类型</span></a></h2>
<p>交叉类型（intersection types）指的多个类型组成的一个新类型，使用符号<code v-pre>&amp;</code>表示。</p>
<p>交叉类型<code v-pre>A&amp;B</code>表示，任何一个类型必须同时属于<code v-pre>A</code>和<code v-pre>B</code>，才属于交叉类型<code v-pre>A&amp;B</code>，即交叉类型同时满足<code v-pre>A</code>和<code v-pre>B</code>的特征。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">let</span> x<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">&amp;</span> <span class="token builtin">string</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>上面示例中，变量<code v-pre>x</code>同时是数值和字符串，这当然是不可能的，所以 TypeScript 会认为<code v-pre>x</code>的类型实际是<code v-pre>never</code>。</p>
<p>交叉类型的主要用途是表示对象的合成。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">let</span> obj<span class="token operator">:</span> <span class="token punctuation">{</span> foo<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">}</span> <span class="token operator">&amp;</span> <span class="token punctuation">{</span> bar<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">obj <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  foo<span class="token operator">:</span> <span class="token string">"hello"</span><span class="token punctuation">,</span></span>
<span class="line">  bar<span class="token operator">:</span> <span class="token string">"world"</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，变量<code v-pre>obj</code>同时具有属性<code v-pre>foo</code>和属性<code v-pre>bar</code>。</p>
<p>交叉类型常常用来为对象类型添加新属性。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">type</span> <span class="token class-name"><span class="token constant">A</span></span> <span class="token operator">=</span> <span class="token punctuation">{</span> foo<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">type</span> <span class="token class-name"><span class="token constant">B</span></span> <span class="token operator">=</span> <span class="token constant">A</span> <span class="token operator">&amp;</span> <span class="token punctuation">{</span> bar<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，类型<code v-pre>B</code>是一个交叉类型，用来在<code v-pre>A</code>的基础上增加了属性<code v-pre>bar</code>。</p>
<h2 id="_3-8-type-命令" tabindex="-1"><a class="header-anchor" href="#_3-8-type-命令"><span>3.8 type 命令</span></a></h2>
<p><code v-pre>type</code>命令用来定义一个类型的别名。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">type</span> <span class="token class-name">Age</span> <span class="token operator">=</span> <span class="token builtin">number</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> age<span class="token operator">:</span> Age <span class="token operator">=</span> <span class="token number">55</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，<code v-pre>type</code>命令为<code v-pre>number</code>类型定义了一个别名<code v-pre>Age</code>。这样就能像使用<code v-pre>number</code>一样，使用<code v-pre>Age</code>作为类型。</p>
<p>别名可以让类型的名字变得更有意义，也能增加代码的可读性，还可以使复杂类型用起来更方便，便于以后修改变量的类型。</p>
<p>别名不允许重名。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">type</span> <span class="token class-name">Color</span> <span class="token operator">=</span> <span class="token string">"red"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">type</span> <span class="token class-name">Color</span> <span class="token operator">=</span> <span class="token string">"blue"</span><span class="token punctuation">;</span> <span class="token comment">// 报错</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，同一个别名<code v-pre>Color</code>声明了两次，就报错了。</p>
<p>别名的作用域是块级作用域。这意味着，代码块内部定义的别名，影响不到外部。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">type</span> <span class="token class-name">Color</span> <span class="token operator">=</span> <span class="token string">"red"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">0.5</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">type</span> <span class="token class-name">Color</span> <span class="token operator">=</span> <span class="token string">"blue"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，<code v-pre>if</code>代码块内部的类型别名<code v-pre>Color</code>，跟外部的<code v-pre>Color</code>是不一样的。</p>
<p>别名支持使用表达式，也可以在定义一个别名时，使用另一个别名，即别名允许嵌套。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">type</span> <span class="token class-name">World</span> <span class="token operator">=</span> <span class="token string">"world"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">type</span> <span class="token class-name">Greeting</span> <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">hello </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>World<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，别名<code v-pre>Greeting</code>使用了模板字符串，读取另一个别名<code v-pre>World</code>。</p>
<p><code v-pre>type</code>命令属于类型相关的代码，编译成 JavaScript 的时候，会被全部删除。</p>
<h2 id="_3-9-typeof-运算符" tabindex="-1"><a class="header-anchor" href="#_3-9-typeof-运算符"><span>3.9 typeof 运算符</span></a></h2>
<p>JavaScript 语言中，typeof 运算符是一个一元运算符，返回一个字符串，代表操作数的类型。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">typeof</span> <span class="token string">"foo"</span><span class="token punctuation">;</span> <span class="token comment">// 'string'</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>上面示例中，<code v-pre>typeof</code>运算符返回字符串<code v-pre>foo</code>的类型是<code v-pre>string</code>。</p>
<p>注意，这时 typeof 的操作数是一个值。</p>
<p>JavaScript 里面，<code v-pre>typeof</code>运算符只可能返回八种结果，而且都是字符串。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">typeof</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span> <span class="token comment">// "undefined"</span></span>
<span class="line"><span class="token keyword">typeof</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token comment">// "boolean"</span></span>
<span class="line"><span class="token keyword">typeof</span> <span class="token number">1337</span><span class="token punctuation">;</span> <span class="token comment">// "number"</span></span>
<span class="line"><span class="token keyword">typeof</span> <span class="token string">"foo"</span><span class="token punctuation">;</span> <span class="token comment">// "string"</span></span>
<span class="line"><span class="token keyword">typeof</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// "object"</span></span>
<span class="line"><span class="token keyword">typeof</span> parseInt<span class="token punctuation">;</span> <span class="token comment">// "function"</span></span>
<span class="line"><span class="token keyword">typeof</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// "symbol"</span></span>
<span class="line"><span class="token keyword">typeof</span> <span class="token number">127n</span><span class="token punctuation">;</span> <span class="token comment">// "bigint"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例是<code v-pre>typeof</code>运算符在 JavaScript 语言里面，可能返回的八种结果。</p>
<p>TypeScript 将<code v-pre>typeof</code>运算符移植到了类型运算，它的操作数依然是一个值，但是返回的不是字符串，而是该值的 TypeScript 类型。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">type</span> <span class="token class-name"><span class="token constant">T0</span></span> <span class="token operator">=</span> <span class="token keyword">typeof</span> a<span class="token punctuation">;</span> <span class="token comment">// { x: number }</span></span>
<span class="line"><span class="token keyword">type</span> <span class="token class-name"><span class="token constant">T1</span></span> <span class="token operator">=</span> <span class="token keyword">typeof</span> a<span class="token punctuation">.</span>x<span class="token punctuation">;</span> <span class="token comment">// number</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，<code v-pre>typeof a</code>表示返回变量<code v-pre>a</code>的 TypeScript 类型（<code v-pre>{ x: number }</code>）。同理，<code v-pre>typeof a.x</code>返回的是属性<code v-pre>x</code>的类型（<code v-pre>number</code>）。</p>
<p>这种用法的<code v-pre>typeof</code>返回的是 TypeScript 类型，所以只能用在类型运算之中（即跟类型相关的代码之中），不能用在值运算。</p>
<p>也就是说，同一段代码可能存在两种<code v-pre>typeof</code>运算符，一种用在值相关的 JavaScript 代码部分，另一种用在类型相关的 TypeScript 代码部分。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> b<span class="token operator">:</span> <span class="token keyword">typeof</span> a<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> a <span class="token operator">===</span> <span class="token string">"number"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  b <span class="token operator">=</span> a<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，用到了两个<code v-pre>typeof</code>，第一个是类型运算，第二个是值运算。它们是不一样的，不要混淆。</p>
<p>JavaScript 的 typeof 遵守 JavaScript 规则，TypeScript 的 typeof 遵守 TypeScript 规则。它们的一个重要区别在于，编译后，前者会保留，后者会被全部删除。</p>
<p>上例的代码编译结果如下。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> b<span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> a <span class="token operator">===</span> <span class="token string">"number"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  b <span class="token operator">=</span> a<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，只保留了原始代码的第二个 typeof，删除了第一个 typeof。</p>
<p>由于编译时不会进行 JavaScript 的值运算，所以 TypeScript 规定，typeof 的参数只能是标识符，不能是需要运算的表达式。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">type</span> <span class="token class-name"><span class="token constant">T</span></span> <span class="token operator">=</span> <span class="token keyword">typeof</span> <span class="token function">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 报错</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>上面示例会报错，原因是 typeof 的参数不能是一个值的运算式，而<code v-pre>Date()</code>需要运算才知道结果。</p>
<p>另外，<code v-pre>typeof</code>命令的参数不能是类型。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">type</span> <span class="token class-name">Age</span> <span class="token operator">=</span> <span class="token builtin">number</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">type</span> <span class="token class-name">MyAge</span> <span class="token operator">=</span> <span class="token keyword">typeof</span> Age<span class="token punctuation">;</span> <span class="token comment">// 报错</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，<code v-pre>Age</code>是一个类型别名，用作<code v-pre>typeof</code>命令的参数就会报错。</p>
<p>typeof 是一个很重要的 TypeScript 运算符，有些场合不知道某个变量<code v-pre>foo</code>的类型，这时使用<code v-pre>typeof foo</code>就可以获得它的类型。</p>
<h2 id="_3-10-块级类型声明" tabindex="-1"><a class="header-anchor" href="#_3-10-块级类型声明"><span>3.10 块级类型声明</span></a></h2>
<p>TypeScript 支持块级类型声明，即类型可以声明在代码块（用大括号表示）里面，并且只在当前代码块有效。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">type</span> <span class="token class-name"><span class="token constant">T</span></span> <span class="token operator">=</span> <span class="token builtin">number</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">let</span> v<span class="token operator">:</span> <span class="token constant">T</span> <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">type</span> <span class="token class-name"><span class="token constant">T</span></span> <span class="token operator">=</span> <span class="token builtin">string</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">let</span> v<span class="token operator">:</span> <span class="token constant">T</span> <span class="token operator">=</span> <span class="token string">"hello"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，存在两个代码块，其中分别有一个类型<code v-pre>T</code>的声明。这两个声明都只在自己的代码块内部有效，在代码块外部无效。</p>
<h2 id="_3-11-类型的兼容" tabindex="-1"><a class="header-anchor" href="#_3-11-类型的兼容"><span>3.11 类型的兼容</span></a></h2>
<p>TypeScript 的类型存在兼容关系，某些类型可以兼容其他类型。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">type</span> <span class="token class-name"><span class="token constant">T</span></span> <span class="token operator">=</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> a<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> b<span class="token operator">:</span> <span class="token constant">T</span> <span class="token operator">=</span> a<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，变量<code v-pre>a</code>和<code v-pre>b</code>的类型是不一样的，但是变量<code v-pre>a</code>赋值给变量<code v-pre>b</code>并不会报错。这时，我们就认为，<code v-pre>b</code>的类型兼容<code v-pre>a</code>的类型。</p>
<p>TypeScript 为这种情况定义了一个专门术语。如果类型<code v-pre>A</code>的值可以赋值给类型<code v-pre>B</code>，那么类型<code v-pre>A</code>就称为类型<code v-pre>B</code>的子类型（subtype）。在上例中，类型<code v-pre>number</code>就是类型<code v-pre>number|string</code>的子类型。</p>
<p>TypeScript 的一个规则是，凡是可以使用父类型的地方，都可以使用子类型，但是反过来不行。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">let</span> a<span class="token operator">:</span> <span class="token string">"hi"</span> <span class="token operator">=</span> <span class="token string">"hi"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> b<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">"hello"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">b <span class="token operator">=</span> a<span class="token punctuation">;</span> <span class="token comment">// 正确</span></span>
<span class="line">a <span class="token operator">=</span> b<span class="token punctuation">;</span> <span class="token comment">// 报错</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，<code v-pre>hi</code>是<code v-pre>string</code>的子类型，<code v-pre>string</code>是<code v-pre>hi</code>的父类型。所以，变量<code v-pre>a</code>可以赋值给变量<code v-pre>b</code>，但是反过来就会报错。</p>
<p>之所以有这样的规则，是因为子类型继承了父类型的所有特征，所以可以用在父类型的场合。但是，子类型还可能有一些父类型没有的特征，所以父类型不能用在子类型的场合。</p>
</div></template>


