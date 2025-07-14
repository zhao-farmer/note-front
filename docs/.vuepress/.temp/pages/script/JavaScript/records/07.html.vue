<template><div><h1 id="_07-js中的事件" tabindex="-1"><a class="header-anchor" href="#_07-js中的事件"><span>07 JS中的事件</span></a></h1>
<h2 id="_1-addeventlistener" tabindex="-1"><a class="header-anchor" href="#_1-addeventlistener"><span>1. addEventListener</span></a></h2>
<h3 id="_1-1-说明" tabindex="-1"><a class="header-anchor" href="#_1-1-说明"><span>1.1 说明</span></a></h3>
<p>addEventListener() 方法用于向指定元素添加监听事件。且同一元素目标可重复添加，不会覆盖之前相同事件，配合 removeEventListener() 方法来移除事件。</p>
<h3 id="_1-2-使用方法" tabindex="-1"><a class="header-anchor" href="#_1-2-使用方法"><span>1.2 使用方法</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span>元素id<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"click"</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"目标元素被点击了"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-3-参数说明-有三个参数" tabindex="-1"><a class="header-anchor" href="#_1-3-参数说明-有三个参数"><span>1.3 参数说明：有三个参数</span></a></h3>
<p><strong>参数一</strong>、事件名称，字符串，必填。</p>
<blockquote>
<p>事件名称不用带 &quot;on&quot; 前缀，点击事件直接写：&quot;click&quot;，键盘放开事件写：&quot;keyup&quot;</p>
</blockquote>
<p><strong>参数二</strong>、执行函数，必填。</p>
<p>填写需要执行的函数，如：function(){代码...}</p>
<blockquote>
<p>当目标对象事件触发时，会传入一个事件参数，参数名称可自定义，如填写event，不需要也可不填写。 事件对象的类型取决于特定的事件。例如， “click” 事件属于 MouseEvent(鼠标事件) 对象。</p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>参数三</strong>、触发类型，布尔型，可空</p>
<ul>
<li>true - 事件在捕获阶段执行</li>
<li>false - 事件在冒泡阶段执行，默认是false</li>
</ul>
<h3 id="_1-4-事件类型" tabindex="-1"><a class="header-anchor" href="#_1-4-事件类型"><span>1.4 事件类型</span></a></h3>
<ol>
<li>
<p>鼠标事件</p>
<ul>
<li>click 当用户点击某个对象时调用的事件句柄。</li>
<li>contextmenu 在用户点击鼠标右键打开上下文菜单时触发</li>
<li>dblclick 当用户双击某个对象时调用的事件句柄。</li>
<li>mousedown 鼠标按钮被按下。</li>
<li>mouseenter 当鼠标指针移动到元素上时触发。</li>
<li>mouseleave 当鼠标指针移出元素时触发</li>
<li>mousemove 鼠标被移动。</li>
<li>mouseover 鼠标移到某元素之上。</li>
<li>mouseout 鼠标从某元素移开。</li>
<li>mouseup 鼠标按键被松开。</li>
</ul>
</li>
<li>
<p>键盘事件</p>
<ul>
<li>属性 描述 DOM</li>
<li>keydown 某个键盘按键被按下。</li>
<li>keypress 某个键盘按键被按下并松开。</li>
<li>keyup 某个键盘按键被松开。</li>
</ul>
</li>
<li>
<p>框架/对象（Frame/Object）事件</p>
<ul>
<li>abort 图像的加载被中断。 ( )</li>
<li>beforeunload 该事件在即将离开页面（刷新或关闭）时触发</li>
<li>error 在加载文档或图像时发生错误。 ( , 和 )</li>
<li>hashchange 该事件在当前 URL 的锚部分发生修改时触发。</li>
<li>load 一张页面或一幅图像完成加载。</li>
<li>pageshow 该事件在用户访问页面时触发</li>
<li>pagehide 该事件在用户离开当前网页跳转到另外一个页面时触发</li>
<li>resize 窗口或框架被重新调整大小。</li>
<li>scroll 当文档被滚动时发生的事件。</li>
<li>unload 用户退出页面。 ( 和 )</li>
</ul>
</li>
<li>
<p>表单事件</p>
<ul>
<li>blur 元素失去焦点时触发</li>
<li>change 该事件在表单元素的内容改变时触发( , , , 和 )</li>
<li>focus 元素获取焦点时触发</li>
<li>focusin 元素即将获取焦点是触发</li>
<li>focusout 元素即将失去焦点是触发</li>
<li>input 元素获取用户输入是触发</li>
<li>reset 表单重置时触发</li>
<li>search 用户向搜索域输入文本时触发</li>
</ul>
</li>
<li>
<p>剪贴板事件</p>
<ul>
<li>copy 该事件在用户拷贝元素内容时触发</li>
<li>cut 该事件在用户剪切元素内容时触发</li>
<li>paste 该事件在用户粘贴元素内容时触发</li>
</ul>
</li>
<li>
<p>打印事件</p>
<ul>
<li>afterprint 该事件在页面已经开始打印，或者打印窗口已经关闭时触发</li>
<li>beforeprint 该事件在页面即将开始打印时触发</li>
</ul>
</li>
<li>
<p>拖动事件</p>
<ul>
<li>drag 该事件在元素正在拖动时触发</li>
<li>dragend 该事件在用户完成元素的拖动时触发</li>
<li>dragenter 该事件在拖动的元素进入放置目标时触发</li>
<li>dragleave 该事件在拖动元素离开放置目标时触发</li>
<li>dragover 该事件在拖动元素在放置目标上时触发</li>
<li>dragstart 该事件在用户开始拖动元素时触发</li>
<li>drop 该事件在拖动元素放置在目标区域时触发</li>
</ul>
</li>
<li>
<p>多媒体（Media）事件</p>
<ul>
<li>abort 事件在视频/音频（audio/video）终止加载时触发。</li>
<li>canplay 事件在用户可以开始播放视频/音频（audio/video）时触发。</li>
<li>canplaythrough 事件在视频/音频（audio/video）可以正常播放且无需停顿和缓冲时触发。</li>
<li>durationchange 事件在视频/音频（audio/video）的时长发生变化时触发。</li>
<li>emptied The event occurs when the current playlist is empty</li>
<li>ended 事件在视频/音频（audio/video）播放结束时触发。</li>
<li>error 事件在视频/音频（audio/video）数据加载期间发生错误时触发。</li>
<li>loadeddata 事件在浏览器加载视频/音频（audio/video）当前帧时触发触发。</li>
<li>loadedmetadata 事件在指定视频/音频（audio/video）的元数据加载后触发。</li>
<li>loadstart 事件在浏览器开始寻找指定视频/音频（audio/video）触发。</li>
<li>pause 事件在视频/音频（audio/video）暂停时触发。</li>
<li>play 事件在视频/音频（audio/video）开始播放时触发。</li>
<li>playing 事件在视频/音频（audio/video）暂停或者在缓冲后准备重新开始播放时触发。</li>
<li>progress 事件在浏览器下载指定的视频/音频（audio/video）时触发。</li>
<li>ratechange 事件在视频/音频（audio/video）的播放速度发送改变时触发。</li>
<li>seeked 事件在用户重新定位视频/音频（audio/video）的播放位置后触发。</li>
<li>seeking 事件在用户开始重新定位视频/音频（audio/video）时触发。</li>
<li>stalled 事件在浏览器获取媒体数据，但媒体数据不可用时触发。</li>
<li>suspend 事件在浏览器读取媒体数据中止时触发。</li>
<li>timeupdate 事件在当前的播放位置发送改变时触发。</li>
<li>volumechange 事件在音量发生改变时触发。</li>
<li>waiting 事件在视频由于要播放下一帧而需要缓冲时触发。</li>
</ul>
</li>
<li>
<p>动画事件</p>
<ul>
<li>animationend 该事件在 CSS 动画结束播放时触发</li>
<li>animationiteration 该事件在 CSS 动画重复播放时触发</li>
<li>animationstart 该事件在 CSS 动画开始播放时触发</li>
</ul>
</li>
<li>
<p>过渡事件</p>
<ul>
<li>transitionend 该事件在 CSS 完成过渡后触发。</li>
</ul>
</li>
<li>
<p>其他事件</p>
<ul>
<li>message 该事件通过或者从对象(WebSocket, Web Worker, Event Source 或者子 frame 或父窗口)接收到消息时触发</li>
<li>online 该事件在浏览器开始在线工作时触发。</li>
<li>offline 该事件在浏览器开始离线工作时触发。</li>
<li>popstate 该事件在窗口的浏览历史（history 对象）发生改变时触发。 event occurs when the window’s history changes</li>
<li>show 该事件当</li>
</ul>
</li>
<li>
<p>元素在上下文菜单显示时触发</p>
<ul>
<li>storage 该事件在 Web Storage(HTML 5 Web 存储)更新时触发</li>
<li>toggle 该事件在用户打开或关闭 元素时触发</li>
<li>wheel 该事件在鼠标滚轮在元素上下滚动时触发</li>
</ul>
</li>
</ol>
<h2 id="_2-事件附加到元素" tabindex="-1"><a class="header-anchor" href="#_2-事件附加到元素"><span>2. 事件附加到元素</span></a></h2>
<h3 id="_2-1-事件的注册" tabindex="-1"><a class="header-anchor" href="#_2-1-事件的注册"><span>2.1 事件的注册</span></a></h3>
<ol>
<li>什么是事件的注册（绑定）？</li>
</ol>
<p>就是告诉浏览器，当事件响应后要执行哪些操作代码，叫事件注册或事件绑定。</p>
<ol start="2">
<li>注册方式</li>
</ol>
<p>静态注册事件：通过 html 标签的事件属性直接赋于事件响应后的代码，这种方式我们叫静态注册。</p>
<p>动态注册事件：是指先通过 js 代码得到标签的 dom 对象，然后再通过 dom 对象.事件名 = function(){} 这种形式赋于事件响应后的代码，叫动态注册。</p>
<ol start="3">
<li>动态注册基本步骤
<ol>
<li>获取标签对象</li>
<li>标签对象.事件名 = fucntion(){} 和 onload加载完成事件结合起来，有了onload动态注册才实现了后续其它事件的动态注册。</li>
</ol>
</li>
</ol>
<p>动态注册事件可以做到当页面加载完成后再执行script中的代码。</p>
<p>静态注册事件遵循从上到下依次执行，可能会出错。</p>
<ol start="4">
<li>基本事件类型描述
<ul>
<li>onload 加载完成事件： 页面加载完成之后，常用于做页面 js 代码初始化操作</li>
<li>onclick 单击事件： 常用于按钮的点击响应操作。</li>
<li>onblur 失去焦点事件：常用于输入框失去焦点后验证其输入内容是否合法。</li>
<li>onchange 内容发生改变事件： 常用于下拉列表和输入框内容发生改变后操作</li>
<li>onsubmit 表单提交事件： 常用于表单提交前，验证所有表单项是否合法。</li>
</ul>
</li>
</ol>
<h3 id="_2-2-onload事件" tabindex="-1"><a class="header-anchor" href="#_2-2-onload事件"><span>2.2 onload事件</span></a></h3>
<p>onload事件是浏览器解析完页面之后就会自动触发的事件。</p>
<ol>
<li>静态注册
onlaod属性 必须写在body标签中。</li>
</ol>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span> <span class="token special-attr"><span class="token attr-name">onload</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value javascript language-javascript"><span class="token function">onloadFun</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text/javascript<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">        <span class="token keyword">function</span> <span class="token function">onloadFun</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'静态注册 onload 事件，所有代码'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其实这里面function函数只有一句alert函数，是可以直接写的，就不用再写function函数了，区别看第7行。</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span> <span class="token special-attr"><span class="token attr-name">onload</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value javascript language-javascript"><span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'静态注册 onload 事件，所有代码!'</span><span class="token punctuation">)</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>动态注册</li>
</ol>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span> </span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text/javascript<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">        <span class="token comment">// body 不再写写οnlοad=" "了</span></span>
<span class="line">        <span class="token comment">// 直接绑定到window上</span></span>
<span class="line">        window<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">//固定格式</span></span>
<span class="line">            <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'动态注册 onload 事件，所有代码'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-onclick事件" tabindex="-1"><a class="header-anchor" href="#_2-3-onclick事件"><span>2.3 onclick事件</span></a></h3>
<p>常用于按钮的点击响应操作。 也分为静态注册和动态注册：</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text/javascript<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">        </span>
<span class="line">        <span class="token keyword">function</span> <span class="token function">onclickFun</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'静态注册的 onclick 事件'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        </span>
<span class="line">        window<span class="token punctuation">.</span><span class="token function-variable function">onload</span><span class="token operator">=</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">var</span> btn<span class="token operator">=</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"btn02"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            btn<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'动态注册的 onclick 事件'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">            </span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token comment">&lt;!-- 静态注册 --></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token special-attr"><span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value javascript language-javascript"><span class="token function">onclickFun</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>按钮1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span> </span>
<span class="line">    <span class="token comment">&lt;!-- 动态注册 --></span>    </span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn02<span class="token punctuation">"</span></span><span class="token punctuation">></span></span> 按钮2 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>	</span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4-onblur失去焦点事件" tabindex="-1"><a class="header-anchor" href="#_2-4-onblur失去焦点事件"><span>2.4 onblur失去焦点事件</span></a></h3>
<p>什么是失去焦点？</p>
<p>想象一下学习通的看视频过任务点时，每当鼠标离开视频界面视频就会暂停。</p>
<p>我们可以把视频看作一个焦点，鼠标离开后就是发生了一次失去焦点事件。</p>
<p>onblur事件在失去焦点后触发，分为静态触发和动态触发，常用于输入框失去焦点后验证其输入内容是否合法。</p>
<p>console 是控制台对象 ，是由 JavaScript 语言提供，专门用来向浏览器的控制器打印输出， 用于测试使用</p>
<p>log()是其打印的方法</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text/javascript<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">    <span class="token comment">//静态注册失去焦点</span></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">onblurFun</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"静态注册失去焦点事件"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'静态:离开文本框了，亲！'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token comment">//动态注册 onblur 事件</span></span>
<span class="line">    window<span class="token punctuation">.</span><span class="token function-variable function">onload</span><span class="token operator">=</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">var</span> pwd<span class="token operator">=</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"passwd"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        pwd<span class="token punctuation">.</span><span class="token function-variable function">onblur</span><span class="token operator">=</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'动态注册失去焦点事件'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'动态:离开文本框了，亲！'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line">    用户名：<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">onblur</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value javascript language-javascript"><span class="token function">onblurFun</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">/></span></span></span>
<span class="line">    密码：<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>passwd<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>passwd<span class="token punctuation">"</span></span><span class="token punctuation">></span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">/></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-5-onchange-内容改变事件" tabindex="-1"><a class="header-anchor" href="#_2-5-onchange-内容改变事件"><span>2.5 onchange 内容改变事件</span></a></h3>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text/javascript<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">        <span class="token comment">//静态注册</span></span>
<span class="line">        <span class="token keyword">function</span> <span class="token function">onchangeFun</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'女神已经改变了'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token comment">//动态注册</span></span>
<span class="line">        window<span class="token punctuation">.</span><span class="token function-variable function">onload</span><span class="token operator">=</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">var</span> sel<span class="token operator">=</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"select"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            sel<span class="token punctuation">.</span><span class="token function-variable function">onchange</span><span class="token operator">=</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'男神已经改变了'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line">    请选择你心中的女神：</span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token special-attr"><span class="token attr-name">onchange</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value javascript language-javascript"><span class="token function">onchangeFun</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span><span class="token punctuation">></span></span>--女神--<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span><span class="token punctuation">></span></span>dd<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span><span class="token punctuation">></span></span>ee<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span><span class="token punctuation">></span></span>ff<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">/></span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">/></span></span></span>
<span class="line">    请选择你心中的男神：</span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>select<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span><span class="token punctuation">></span></span>--男神--<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span><span class="token punctuation">></span></span>aa<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span><span class="token punctuation">></span></span>bb<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span><span class="token punctuation">></span></span>cc<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-6-onsubmit-表单提交事件" tabindex="-1"><a class="header-anchor" href="#_2-6-onsubmit-表单提交事件"><span>2.6 onsubmit 表单提交事件</span></a></h3>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text/javascript<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">        <span class="token keyword">function</span> <span class="token function">onsubmitFun</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token comment">//假设这一部分内容要验证所有表单项是否合法，如果有一个不合法就输出提示，并阻止表单提交</span></span>
<span class="line">            <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"静态注册表单提交事件----发现不合法"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">//返回false，阻止提交</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        window<span class="token punctuation">.</span><span class="token function-variable function">onload</span><span class="token operator">=</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">var</span> fm<span class="token operator">=</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"form"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            fm<span class="token punctuation">.</span><span class="token function-variable function">onsubmit</span><span class="token operator">=</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                <span class="token comment">//检查环节</span></span>
<span class="line">                <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"动态注册表单提交事件----发现不合法"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token comment">&lt;!--return false 可以阻止 表单提交 --></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://www.baidu.com<span class="token punctuation">"</span></span> <span class="token attr-name">method</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>get<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">onsubmit</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value javascript language-javascript"><span class="token keyword">return</span> <span class="token function">onsubmitFun</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>submit<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>静态注册<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>     <span class="token comment">&lt;!-- 提交成功就跳转到百度--></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://www.baidu.com<span class="token punctuation">"</span></span> <span class="token attr-name">method</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>get<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>form<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>submit<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>动态注册<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


