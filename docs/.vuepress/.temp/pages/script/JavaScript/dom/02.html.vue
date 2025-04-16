<template><div><h1 id="_02document方法" tabindex="-1"><a class="header-anchor" href="#_02document方法"><span>02Document方法</span></a></h1>
<p>该接口同样继承了 Node 和 EventTarget 接口。</p>
<h2 id="_1-adoptnode" tabindex="-1"><a class="header-anchor" href="#_1-adoptnode"><span>1. adoptNode()</span></a></h2>
<p>Document.adoptNode() — 从其他的 document 文档中获取一个节点。该节点以及它的子树上的所有节点都会从原文档删除 (如果有这个节点的话), 并且它的ownerDocument 属性会变成当前的 document 文档。之后你可以把这个节点插入到当前文档中。</p>
<p><strong>语法</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">node <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">adoptNode</span><span class="token punctuation">(</span>externalNode<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>node
<ul>
<li>导入当前文档的新节点。新节点的 parentNode 是 null, 因为它还没有插入当前文档的文档树中，属于游离状态。</li>
</ul>
</li>
<li>externalNode
<ul>
<li>将要从外部文档导入的节点。</li>
</ul>
</li>
</ul>
<p>该方法不但可以从 iframe 中获取 adopt 元素，在同一 document 文档下的不同两个元素中也可以使用，该方法可以实现从左边栏列表中选取某些元素加载到右边栏的功能。</p>
<h2 id="_2-append" tabindex="-1"><a class="header-anchor" href="#_2-append"><span>2. append()</span></a></h2>
<p>在文档的最后一个子节点后插入一个 Node 对象或字符串对象的集合。</p>
<p><strong>语法</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token function">append</span><span class="token punctuation">(</span>param1<span class="token punctuation">)</span></span>
<span class="line"><span class="token function">append</span><span class="token punctuation">(</span>param1<span class="token punctuation">,</span> param2<span class="token punctuation">)</span></span>
<span class="line"><span class="token function">append</span><span class="token punctuation">(</span>param1<span class="token punctuation">,</span> param2<span class="token punctuation">,</span> <span class="token comment">/* … ,*/</span> paramN<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>param1, …, paramN
<ul>
<li>可以在后面插入多个Node 对象或字符串对象的集合。</li>
</ul>
</li>
</ul>
<h2 id="_3-createattribute" tabindex="-1"><a class="header-anchor" href="#_3-createattribute"><span>3. createAttribute()</span></a></h2>
<p>创建一个新的 Attr 对象并返回。Document.createAttribute() 方法创建并返回一个新的属性节点。这个对象创建一个实现了 Attr 接口的节点。这个方式下 DOM 不限制节点能够添加的属性种类。</p>
<p><strong>语法</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">attribute <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createAttribute</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>name
<ul>
<li>属性的属性名。</li>
</ul>
</li>
</ul>
<p>该方法的返回值是一个类型为 Attr 的节点。你可以通过为该节点的 nodeValue 属性赋值来设置该属性节点的属性值，也可以使用常用的 setAttribute() 方法来替代该方法。</p>
<h2 id="_4-createelement" tabindex="-1"><a class="header-anchor" href="#_4-createelement"><span>4. createElement()</span></a></h2>
<p>用给定标签名创建一个新的元素。</p>
<p>在 HTML 文档中，Document.createElement() 方法用于创建一个由标签名称 tagName 指定的 HTML 元素。如果用户代理无法识别 tagName，则会生成一个未知 HTML 元素 HTMLUnknownElement。</p>
<p><strong>语法</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> element <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span>tagName<span class="token punctuation">[</span><span class="token punctuation">,</span> options<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>tagName
<ul>
<li>指定要创建元素类型的字符串，创建元素时的 nodeName 使用 tagName 的值为初始化，该方法不允许使用限定名称 (如：“html:a”)，在 HTML 文档上调用 createElement() 方法创建元素之前会将tagName 转化成小写，在 Firefox、Opera 和 Chrome 内核中，createElement(null) 等同于 createElement(“null”)</li>
</ul>
</li>
<li>options(可选配置项)
<ul>
<li>一个可选的参数 ElementCreationOptions 是包含一个属性名为 is 的对象，该对象的值是用 customElements.define() 方法定义过的一个自定义元素的标签名。</li>
</ul>
</li>
</ul>
<p>示例：</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>||Working with elements||<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>div1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>The text above has been created dynamically.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">    document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>onload <span class="token operator">=</span> addElement<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">addElement</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// 创建一个新的 div 元素</span></span>
<span class="line">      <span class="token keyword">let</span> newDiv <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">"div"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token comment">// 给它一些内容</span></span>
<span class="line">      <span class="token keyword">let</span> newContent <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createTextNode</span><span class="token punctuation">(</span><span class="token string">"Hi there and greetings!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token comment">// 添加文本节点 到这个新的 div 元素</span></span>
<span class="line">      newDiv<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>newContent<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">      <span class="token comment">// 将这个新的元素和它的文本添加到 DOM 中</span></span>
<span class="line">      <span class="token keyword">let</span> currentDiv <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"div1"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">insertBefore</span><span class="token punctuation">(</span>newDiv<span class="token punctuation">,</span> currentDiv<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-getelementbyid" tabindex="-1"><a class="header-anchor" href="#_5-getelementbyid"><span>5. getElementById()</span></a></h2>
<p>返回以id标识元素的引用对象。Document的方法 getElementById()返回一个匹配特定 ID的元素。由于元素的 ID 在大部分情况下要求是独一无二的，这个方法自然而然地成为了一个高效查找特定元素的方法。</p>
<p>返回一个匹配到 ID 的 DOM Element 对象。若在当前 Document 下没有找到，则返回 null。getElementById() 只有在作为 document 的方法时才能起作用，而在 DOM 中的其他元素下无法生效。这是因为 ID 值在整个网页中必须保持唯一。</p>
<p><strong>语法</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> element <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>element是一个 Element 对象。
<ul>
<li>如果当前文档中拥有特定 ID 的元素不存在则返回 null.</li>
<li>id是大小写敏感的字符串，代表了所要查找的元素的唯一 ID.</li>
</ul>
</li>
</ul>
<h2 id="_6-getelementsbyclassname" tabindex="-1"><a class="header-anchor" href="#_6-getelementsbyclassname"><span>6. getElementsByClassName()</span></a></h2>
<p>返回具有给定类名的元素列表。</p>
<p>返回一个包含了所有指定类名的子元素的类数组对象。当在 document 对象上调用时，会搜索整个 DOM 文档，包含根节点。你也可以在任意元素上调用getElementsByClassName() 方法，它将返回的是以当前元素为根节点，所有指定类名的子元素。</p>
<p><strong>语法</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> elements <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementsByClassName</span><span class="token punctuation">(</span>names<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// or:</span></span>
<span class="line"><span class="token keyword">var</span> elements <span class="token operator">=</span> rootElement<span class="token punctuation">.</span><span class="token function">getElementsByClassName</span><span class="token punctuation">(</span>names<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>elements 是一个实时(集合)，包含了找到的所有元素。</li>
<li>names 是一个字符串，表示要匹配的类名列表（注意不要带.）；类名通过空格分隔</li>
<li>getElementsByClassName 可以在任何元素上调用，不仅仅是 document。调用这个方法的元素将作为本次查找的根元素。</li>
</ul>
<p>elements类似为函数中的arguments的类数组，通常我们叫他伪数组，详情请查看cdn官网HTMLCollection。</p>
<h2 id="_7-getelementsbytagname" tabindex="-1"><a class="header-anchor" href="#_7-getelementsbytagname"><span>7. getElementsByTagName()</span></a></h2>
<p>返回具有给定标签名的元素列表。返回一个包括所有给定标签名称的元素的 HTML 集合HTMLCollection。整个文件结构都会被搜索，包括根节点。返回的 HTML 集合是动态的，意味着它可以自动更新自己来保持和 DOM 树的同步而不用再次调用 document.getElementsByTagName()。</p>
<p><strong>语法</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> elements <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>elements 是一个由发现的元素出现在树中的顺序构成的动态的 HTML 集合 HTMLCollection (但是看下面的提示) 。</li>
<li>name 是一个代表元素的名称的字符串。特殊字符 “*” 代表了所有元素。</li>
</ul>
<p>当在一个 HTML 文件上执行时， getElementsByTagName() 会在执行前把参数转换为小写字母。document.getElementsByTagName() 类似于 element.getElementsByTagName()，除了它会搜索整个文档这点。</p>
<h2 id="_8-queryselector" tabindex="-1"><a class="header-anchor" href="#_8-queryselector"><span>8. querySelector()</span></a></h2>
<p>返回文档中与指定的选择器匹配的第一个元素节点。文档对象模型Document引用的 querySelector() 方法返回文档中与指定选择器或选择器组匹配的第一个 Element对象。如果找不到匹配项，则返回null。</p>
<p><strong>语法</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">element <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span>selectors<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>selectors
<ul>
<li>包含一个或多个要匹配的选择器的 DOM 字符串DOMString。该字符串必须是有效的 CSS 选择器字符串；如果不是，则引发SYNTAX_ERR异常。</li>
</ul>
</li>
</ul>
<h2 id="_9-queryselectorall" tabindex="-1"><a class="header-anchor" href="#_9-queryselectorall"><span>9. querySelectorAll()</span></a></h2>
<p>返回包含文档中与指定的选择器匹配的所有元素节点的列表。返回与指定的选择器组匹配的文档中的元素列表 (使用深度优先的先序遍历文档的节点)。返回的对象是 NodeList 。</p>
<p><strong>语法</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">elementList <span class="token operator">=</span> parentNode<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span>selectors<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>selectors
<ul>
<li>一个 DOMString 包含一个或多个匹配的选择器。这个字符串必须是一个合法的 CSS selector 如果不是，会抛出一个 SyntaxError 错误</li>
</ul>
</li>
</ul>
<p>返回值：一个静态 NodeList，包含一个与至少一个指定选择器匹配的元素的Element对象，或者在没有匹配的情况下为空NodeList。NodeList 对象是节点的集合，NodeList 不是一个数组，是一个类似数组的对象 (Like Array Object)。虽然 NodeList 不是一个数组，但是可以使用 forEach() 来迭代。你还可以使用 Array.from() 将其转换为数组。
不过，有些浏览器较为过时，没有实现 NodeList.forEach() 和 Array.from()。你可以用 Array.prototype.forEach() 来规避这一问题。它和HTMLCollection比较相似，不过多了一些方法，可以直接遍历，详情请看NodeList</p>
<h2 id="_10-replacechildren" tabindex="-1"><a class="header-anchor" href="#_10-replacechildren"><span>10. replaceChildren()</span></a></h2>
<p>用一个指定的新的子节点集合替换替换文档中现有的子节点。</p>
<p><strong>语法</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token function">replaceChildren</span><span class="token punctuation">(</span>param1<span class="token punctuation">)</span></span>
<span class="line"><span class="token function">replaceChildren</span><span class="token punctuation">(</span>param1<span class="token punctuation">,</span> param2<span class="token punctuation">)</span></span>
<span class="line"><span class="token function">replaceChildren</span><span class="token punctuation">(</span>param1<span class="token punctuation">,</span> param2<span class="token punctuation">,</span> <span class="token comment">/* … ,*/</span> paramN<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>param1, …, paramN
<ul>
<li>一组Node或字符串对象，用于替换Document的现有子对象。如果没有指定替换对象，则清空Document中的所有子节点。</li>
</ul>
</li>
</ul>
<p>replaceChildren()提供了一种非常方便的机制来清空文档的所有子元素。在不指定任何参数的情况下在文档中调用它:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">document<span class="token punctuation">.</span><span class="token function">replaceChildren</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">document<span class="token punctuation">.</span>children<span class="token punctuation">;</span> <span class="token comment">// HTMLCollection []</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_11-hasfocus" tabindex="-1"><a class="header-anchor" href="#_11-hasfocus"><span>11. hasFocus()</span></a></h2>
<p>若焦点目前位于给定的文档内，则返回 true。Document.hasFocus() 方法返回一个 Boolean，表明当前文档或者当前文档内的节点是否获得了焦点。该方法可以用来判断当前文档中的活动元素是否获得了焦点。 当查看一个文档时，当前文档中获得焦点的元素一定是当前文档的活动元素，但一个文档中的活动元素不一定获得了焦点.。例如，一个在后台的窗口中的活动元素一定没有获得焦点。</p>
<p><strong>语法</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">focused <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">hasFocus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>返回值：如果当前文档的活动元素获得了焦点，返回 true，否则返回 false。</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>text/css<span class="token punctuation">'</span></span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css"></span>
<span class="line">    <span class="token selector">#message</span> <span class="token punctuation">{</span> <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span> <span class="token punctuation">}</span></span>
<span class="line">  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>text/javascript<span class="token punctuation">'</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">      <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token string">"CheckPageFocus()"</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">function</span> <span class="token function">CheckPageFocus</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">var</span> info <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"message"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">           <span class="token keyword">if</span> <span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">hasFocus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">             info<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">"该页面获得了焦点."</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">            <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">             info<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">"该页面没有获得焦点."</span><span class="token punctuation">;</span></span>
<span class="line">           <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">OpenWindow</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">           window<span class="token punctuation">.</span><span class="token function">open</span> <span class="token punctuation">(</span><span class="token string">"http://developer.mozilla.org/"</span><span class="token punctuation">,</span> <span class="token string">"mozdev"</span><span class="token punctuation">,</span></span>
<span class="line">                     <span class="token string">"width=640, height=300, left=150, top=260"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"> document.hasFocus 演示<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>message<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>等待用户操作<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token special-attr"><span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value javascript language-javascript"><span class="token function">OpenWindow</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>打开一个新窗口<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_12-事件" tabindex="-1"><a class="header-anchor" href="#_12-事件"><span>12. 事件</span></a></h2>
<p>列出了使用 addEventListener() 或为接口的事件处理器属性 oneventname 赋值的方式来监听的事件。</p>
<table>
<thead>
<tr>
<th>事件名</th>
<th>作用</th>
</tr>
</thead>
<tbody>
<tr>
<td>beforescriptexecute</td>
<td>在静态的 <code v-pre>&lt;script&gt;</code> 开始执行脚本时触发。</td>
</tr>
<tr>
<td>scroll</td>
<td>在滚动文档视图或元素时触发。</td>
</tr>
<tr>
<td>visibilitychange</td>
<td>在变前的内容变为可见、隐藏时触发。</td>
</tr>
<tr>
<td>wheel</td>
<td>在用户在点击设备（通常为鼠标）上转动滚轮时触发。</td>
</tr>
<tr>
<td>动画事件</td>
<td></td>
</tr>
<tr>
<td>animationcancel</td>
<td>在动画意外中止时触发。</td>
</tr>
<tr>
<td>animationend</td>
<td>在动画正常完成时触发。</td>
</tr>
<tr>
<td>animationiteration</td>
<td>在动画迭代完成时触发。</td>
</tr>
<tr>
<td>animationstart</td>
<td>在动画开始时触发。</td>
</tr>
<tr>
<td>剪切板事件</td>
<td></td>
</tr>
<tr>
<td>copy</td>
<td>在用户通过浏览器的用户界面使用复制操作时触发。</td>
</tr>
<tr>
<td>cut</td>
<td>在用户通过浏览器的用户界面使用剪切操作时触发。</td>
</tr>
<tr>
<td>paste</td>
<td>在用户通过浏览器的用户界面使用粘贴操作时触发。</td>
</tr>
<tr>
<td>拖放事件</td>
<td></td>
</tr>
<tr>
<td>drag</td>
<td>在用户拖动元素或选择的文本时每几百毫秒触发一次。</td>
</tr>
<tr>
<td>dragend</td>
<td>在拖动操作结束（通过释放鼠标按钮或按下退出键））时触发。</td>
</tr>
<tr>
<td>dragenter</td>
<td>在拖动的元素或选择的文本进入有效的放置目标时触发。</td>
</tr>
<tr>
<td>dragleave</td>
<td>在拖动的元素或选择的文本离开有效的放置目标时触发。</td>
</tr>
<tr>
<td>dragover</td>
<td>在拖动的元素或选择的文本在有效的放置目标时触发（每几百毫秒）。</td>
</tr>
<tr>
<td>dragstart</td>
<td>在用户开始拖动元素或选择的文本时触发。</td>
</tr>
<tr>
<td>drop</td>
<td>在元素或选择的文本被放置在有效的放置目标时触发。</td>
</tr>
<tr>
<td>全屏事件</td>
<td></td>
</tr>
<tr>
<td>fullscreenchange</td>
<td>在 Document 进入或退出全屏模式时触发。</td>
</tr>
<tr>
<td>fullscreenerror</td>
<td>在尝试进入或退出全屏模式而发生错误时触发。</td>
</tr>
<tr>
<td>键盘事件</td>
<td></td>
</tr>
<tr>
<td>keydown</td>
<td>在某个键被按下时触发。</td>
</tr>
<tr>
<td>keyup</td>
<td>在释放按键时触发。</td>
</tr>
<tr>
<td>加载和卸载事件</td>
<td></td>
</tr>
<tr>
<td>DOMContentLoaded</td>
<td>在文档完全加载并解析后触发，无需等待样式表、图像和子框架完成加载。</td>
</tr>
<tr>
<td>readystatechange</td>
<td>在文档的 readyState 属性发生变化时触发。</td>
</tr>
<tr>
<td>指针事件</td>
<td></td>
</tr>
<tr>
<td>gotpointercapture</td>
<td>在使用 setPointerCapture() 捕获元素时触发。</td>
</tr>
<tr>
<td>lostpointercapture</td>
<td>在捕获指针释放时触发。</td>
</tr>
<tr>
<td>pointercancel</td>
<td>在指针事件取消时触发。</td>
</tr>
<tr>
<td>pointerdown</td>
<td>在指针变为活动状态时触发。</td>
</tr>
<tr>
<td>pointerenter</td>
<td>在指针移入到元素或其子元素之一的命中测试边界时触发。</td>
</tr>
<tr>
<td>pointerleave</td>
<td>在指针移出元素的命中测试边界时触发。</td>
</tr>
<tr>
<td>pointerlockchange</td>
<td>在指针被锁定或解锁时触发。</td>
</tr>
<tr>
<td>pointerlockerror</td>
<td>在指针锁定失败时触发。</td>
</tr>
<tr>
<td>pointermove</td>
<td>在指针坐标改变时触发。</td>
</tr>
<tr>
<td>pointerout</td>
<td>在指针移出元素的命中测试边界（或其它原因）时触发。</td>
</tr>
<tr>
<td>pointerover</td>
<td>在指针移入元素的命中测试边界时触发。</td>
</tr>
<tr>
<td>pointerup</td>
<td>在指针不再活动时触发。</td>
</tr>
<tr>
<td>选择事件</td>
<td></td>
</tr>
<tr>
<td>selectionchange</td>
<td>在文档中的选中的文本发生改变时触发。</td>
</tr>
<tr>
<td>触摸事件</td>
<td></td>
</tr>
<tr>
<td>touchcancel</td>
<td>在一个或多个接触点以特定于实现的方式中断（例如，创建了太多的接触点）时触发。</td>
</tr>
<tr>
<td>touchend</td>
<td>在从接触面移除一个或多个接触点时触发。</td>
</tr>
<tr>
<td>touchmove</td>
<td>在一个或多个接触点沿接触面移动时触发。</td>
</tr>
<tr>
<td>touchstart</td>
<td>在向接触面放置一个或多个接触点时触发。</td>
</tr>
<tr>
<td>过渡事件</td>
<td></td>
</tr>
<tr>
<td>transitioncancel</td>
<td>在 CSS 过渡取消时触发。</td>
</tr>
<tr>
<td>transitionend</td>
<td>在 CSS 过渡完成时触发。</td>
</tr>
<tr>
<td>transitionrun</td>
<td>在 CSS 过渡第一次创建时触发。</td>
</tr>
<tr>
<td>transitionstart</td>
<td>在 CSS 过渡实际开始时触发。</td>
</tr>
</tbody>
</table>
</div></template>


