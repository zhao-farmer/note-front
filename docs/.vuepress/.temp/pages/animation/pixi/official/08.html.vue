<template><div><h1 id="八、事件-互动" tabindex="-1"><a class="header-anchor" href="#八、事件-互动"><span>八、事件/互动</span></a></h1>
<p>PixiJS主要是一个渲染库，但它提供了一个为鼠标和触摸输入设计的灵活且高性能的事件系统。这个系统用一个统一的、类似dom的联邦事件模型取代了以前版本中的遗留的 <code v-pre>InteractionManager</code> 。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">const</span> sprite <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Sprite</span><span class="token punctuation">(</span>texture<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">sprite<span class="token punctuation">.</span>eventMode <span class="token operator">=</span> <span class="token string">'static'</span><span class="token punctuation">;</span></span>
<span class="line">sprite<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'pointerdown'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Sprite clicked!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-1-活动模式" tabindex="-1"><a class="header-anchor" href="#_8-1-活动模式"><span>8.1 活动模式</span></a></h2>
<p>要使用事件系统，请设置a  <code v-pre>Container</code> （或其子类如 <code v-pre>Sprite</code> ）的 <code v-pre>eventMode</code> ，并订阅事件侦听器。</p>
<p><code v-pre>eventMode</code> 属性控制对象如何与事件系统交互：</p>
<table>
<thead>
<tr>
<th>模式</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>none</code></td>
<td>忽略所有交互事件，包括子事件。针对非交互式元素进行了优化。</td>
</tr>
<tr>
<td><code v-pre>passive</code></td>
<td>（默认）忽略自命中测试并且不触发事件，但交互式子节点仍然接收事件。</td>
</tr>
<tr>
<td><code v-pre>auto</code></td>
<td>只有当父母是互动的时候才参与命中测试。不发出事件。</td>
</tr>
<tr>
<td><code v-pre>static</code></td>
<td>发出事件并进行命中测试。适合不移动的交互元素，如按钮。</td>
</tr>
<tr>
<td><code v-pre>dynamic</code></td>
<td>与 <code v-pre>static</code> 相同，但在指针空闲时也接收合成事件。适合动画或移动的目标。</td>
</tr>
</tbody>
</table>
<h2 id="_8-2-事件类型" tabindex="-1"><a class="header-anchor" href="#_8-2-事件类型"><span>8.2 事件类型</span></a></h2>
<p>PixiJS支持一组丰富的dom类事件类型，包括鼠标、触摸和指针输入。下面是一个分类列表。</p>
<h3 id="_8-2-1-指针事件" tabindex="-1"><a class="header-anchor" href="#_8-2-1-指针事件"><span>8.2.1 指针事件</span></a></h3>
<table>
<thead>
<tr>
<th>事件类型</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>pointerdown</code></td>
<td>当指针（鼠标、笔或触摸）按在显示对象上时触发。</td>
</tr>
<tr>
<td><code v-pre>pointerup</code></td>
<td>当指针在显示对象上释放时触发。</td>
</tr>
<tr>
<td><code v-pre>pointerupoutside</code></td>
<td>当指针被释放到接收到 <code v-pre>pointerdown</code> 的对象外时触发。</td>
</tr>
<tr>
<td><code v-pre>pointermove</code></td>
<td>当指针移动到显示对象上时触发。</td>
</tr>
<tr>
<td><code v-pre>pointerover</code></td>
<td>当指针进入显示对象的边界时触发。</td>
</tr>
<tr>
<td><code v-pre>pointerout</code></td>
<td>当指针离开显示对象的边界时触发。</td>
</tr>
<tr>
<td><code v-pre>pointerenter</code></td>
<td>当指针进入显示对象时触发（不冒泡）。</td>
</tr>
<tr>
<td><code v-pre>pointerleave</code></td>
<td>当指针离开显示对象（不冒泡）时触发。</td>
</tr>
<tr>
<td><code v-pre>pointercancel</code></td>
<td>当指针交互被取消时触发（例如触摸丢失）。</td>
</tr>
<tr>
<td><code v-pre>pointertap</code></td>
<td>当指针执行快速轻击时触发。</td>
</tr>
<tr>
<td><code v-pre>globalpointermove</code></td>
<td>每次指针移动时触发，无论是否击中任何显示对象。</td>
</tr>
</tbody>
</table>
<h3 id="_8-2-2-鼠标事件" tabindex="-1"><a class="header-anchor" href="#_8-2-2-鼠标事件"><span>8.2.2 鼠标事件</span></a></h3>
<table>
<thead>
<tr>
<th>事件类型</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>mousedown</code></td>
<td>当在显示对象上按下鼠标按钮时触发。</td>
</tr>
<tr>
<td><code v-pre>mouseup</code></td>
<td>当在对象上释放鼠标按钮时触发。</td>
</tr>
<tr>
<td><code v-pre>mouseupoutside</code></td>
<td>当一个鼠标按钮在接收到 <code v-pre>mousedown</code> 的对象之外被释放时触发。</td>
</tr>
<tr>
<td><code v-pre>mousemove</code></td>
<td>当鼠标移动到显示对象上时触发。</td>
</tr>
<tr>
<td><code v-pre>mouseover</code></td>
<td>当鼠标进入显示对象时触发。</td>
</tr>
<tr>
<td><code v-pre>mouseout</code></td>
<td>当鼠标离开显示对象时触发。</td>
</tr>
<tr>
<td><code v-pre>mouseenter</code></td>
<td>鼠标进入对象时触发，不冒泡。</td>
</tr>
<tr>
<td><code v-pre>mouseleave</code></td>
<td>鼠标离开对象时触发，不冒泡。</td>
</tr>
<tr>
<td><code v-pre>click</code></td>
<td>在对象上发生鼠标单击（按下并释放）时触发。</td>
</tr>
<tr>
<td><code v-pre>rightdown</code></td>
<td>在显示对象上按下鼠标右键时触发。</td>
</tr>
<tr>
<td><code v-pre>rightup</code></td>
<td>在对象上释放鼠标右键时触发。</td>
</tr>
<tr>
<td><code v-pre>rightupoutside</code></td>
<td>当收到 <code v-pre>rightdown</code> 的对象外释放鼠标右键时触发。</td>
</tr>
<tr>
<td><code v-pre>rightclick</code></td>
<td>当鼠标右键单击对象（按下并释放）时触发。</td>
</tr>
<tr>
<td><code v-pre>globalmousemove</code></td>
<td>每次鼠标移动时触发，无论是否击中显示对象。</td>
</tr>
<tr>
<td><code v-pre>wheel</code></td>
<td>当鼠标滚轮在显示对象上滚动时触发。</td>
</tr>
</tbody>
</table>
<h3 id="_8-2-3-触摸事件" tabindex="-1"><a class="header-anchor" href="#_8-2-3-触摸事件"><span>8.2.3 触摸事件</span></a></h3>
<table>
<thead>
<tr>
<th>事件类型</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>touchstart</code></td>
<td>当一个新的触摸点被放置在显示对象上时触发。</td>
</tr>
<tr>
<td><code v-pre>touchend</code></td>
<td>当触摸点从显示对象中抬起时触发。</td>
</tr>
<tr>
<td><code v-pre>touchendoutside</code></td>
<td>当接触点在接收 <code v-pre>touchstart</code> 的对象之外结束时触发。</td>
</tr>
<tr>
<td><code v-pre>touchmove</code></td>
<td>当触摸点在显示对象上移动时触发。</td>
</tr>
<tr>
<td><code v-pre>touchcancel</code></td>
<td>当触摸交互被取消时触发（例如设备手势）。</td>
</tr>
<tr>
<td><code v-pre>tap</code></td>
<td>当触摸点轻击显示对象时触发。</td>
</tr>
<tr>
<td><code v-pre>globaltouchmove</code></td>
<td>在每次触摸移动时触发，不管显示对象是否在触摸下。</td>
</tr>
</tbody>
</table>
<h3 id="_8-2-4-全球事件" tabindex="-1"><a class="header-anchor" href="#_8-2-4-全球事件"><span>8.2.4 全球事件</span></a></h3>
<p>在以前的PixiJS版本中，当画布捕获任何移动事件时，即使指针不在显示对象上，也会触发诸如 <code v-pre>pointermove</code> ,  <code v-pre>mousemove</code> 和 <code v-pre>touchmove</code> 之类的事件。这种行为在v8中改变了，现在只有当指针在显示对象上时才会触发这些事件。</p>
<p>为了保持原有的行为，可以使用 <code v-pre>globalpointermove</code> 、 <code v-pre>globalmousemove</code> 和 <code v-pre>globaltouchmove</code> 事件。这些事件在每次指针/触摸移动时触发，无论是否击中任何显示对象。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">const</span> sprite <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Sprite</span><span class="token punctuation">(</span>texture<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">sprite<span class="token punctuation">.</span>eventMode <span class="token operator">=</span> <span class="token string">'static'</span><span class="token punctuation">;</span></span>
<span class="line">sprite<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'globalpointermove'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>event<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Pointer moved globally!'</span><span class="token punctuation">,</span> event<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-3-如何进行命中测试" tabindex="-1"><a class="header-anchor" href="#_8-3-如何进行命中测试"><span>8.3 如何进行命中测试</span></a></h2>
<p>当输入事件发生时（鼠标移动，点击等），PixiJS遍历显示树，找到指针下最顶部的交互元素：</p>
<ul>
<li>如果 <code v-pre>interactiveChildren</code> 在 <code v-pre>Container</code> 上 <code v-pre>false</code> ，它的子节点将被跳过。</li>
<li>如果设置了 <code v-pre>hitArea</code> ，它将覆盖基于边界的命中测试。</li>
<li>如果 <code v-pre>eventMode</code>   <code v-pre>'none'</code> ，则跳过该元素及其子元素。</li>
</ul>
<p>一旦找到最顶层的交互元素，就将事件分派给它。如果事件冒泡，它将沿显示树传播。 如果事件未被处理，它将继续向上冒泡到父容器，直到到达根容器。</p>
<h3 id="_8-3-1-自定义命中区域" tabindex="-1"><a class="header-anchor" href="#_8-3-1-自定义命中区域"><span>8.3.1 自定义命中区域</span></a></h3>
<p>可以使用 <code v-pre>hitArea</code> 属性定义自定义命中区域。该属性可以在任何场景对象上设置，包括 <code v-pre>Sprite</code> ,  <code v-pre>Container</code> ,  <code v-pre>Graphics</code> 。</p>
<p>使用自定义命中区域允许您定义用于交互的特定区域，该区域可以不同于对象的边界框。它还可以通过减少需要检查交互的对象数量来提高性能。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Rectangle<span class="token punctuation">,</span> Sprite <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'pixi.js'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> sprite <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Sprite</span><span class="token punctuation">(</span>texture<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">sprite<span class="token punctuation">.</span>hitArea <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Rectangle</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">sprite<span class="token punctuation">.</span>eventMode <span class="token operator">=</span> <span class="token string">'static'</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-4-收听事件" tabindex="-1"><a class="header-anchor" href="#_8-4-收听事件"><span>8.4 收听事件</span></a></h2>
<p>PixiJS支持 <code v-pre>on()</code> / <code v-pre>off()</code> 和 <code v-pre>addEventListener()</code> / <code v-pre>removeEventListener()</code> 和事件回调（ <code v-pre>onclick: ()=&gt; {}</code> ）用于添加和删除事件侦听器。对于大多数用例，建议使用 <code v-pre>on()</code> 方法，因为它在整个PixiJS中使用的不同事件类型之间提供了更一致的API。</p>
<h3 id="_8-4-1-使用-on" tabindex="-1"><a class="header-anchor" href="#_8-4-1-使用-on"><span>8.4.1 使用 <code v-pre>on()</code></span></a></h3>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">const</span> <span class="token function-variable function">eventFn</span> <span class="token operator">=</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'clicked'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">sprite<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'pointerdown'</span><span class="token punctuation">,</span> eventFn<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">sprite<span class="token punctuation">.</span><span class="token function">once</span><span class="token punctuation">(</span><span class="token string">'pointerdown'</span><span class="token punctuation">,</span> eventFn<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">sprite<span class="token punctuation">.</span><span class="token function">off</span><span class="token punctuation">(</span><span class="token string">'pointerdown'</span><span class="token punctuation">,</span> eventFn<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-4-2-使用dom样式的事件" tabindex="-1"><a class="header-anchor" href="#_8-4-2-使用dom样式的事件"><span>8.4.2 使用dom样式的事件</span></a></h3>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line">sprite<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span></span>
<span class="line">    <span class="token string">'click'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">(</span>event<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Clicked!'</span><span class="token punctuation">,</span> event<span class="token punctuation">.</span>detail<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span> once<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-4-3-使用回调函数" tabindex="-1"><a class="header-anchor" href="#_8-4-3-使用回调函数"><span>8.4.3 使用回调函数</span></a></h3>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line">sprite<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token punctuation">(</span>event<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Clicked!'</span><span class="token punctuation">,</span> event<span class="token punctuation">.</span>detail<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-5-检查交互性" tabindex="-1"><a class="header-anchor" href="#_8-5-检查交互性"><span>8.5 检查交互性</span></a></h2>
<p>您可以使用 <code v-pre>isInteractive()</code> 方法检查 <code v-pre>Sprite</code> 或 <code v-pre>Container</code> 是否交互。如果对象是交互的并且可以接收事件，这个方法返回 <code v-pre>true</code> 。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span>sprite<span class="token punctuation">.</span><span class="token function">isInteractive</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// true if eventMode is static or dynamic</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-6-自定义游标" tabindex="-1"><a class="header-anchor" href="#_8-6-自定义游标"><span>8.6 自定义游标</span></a></h2>
<p>PixiJS允许您使用 <code v-pre>cursor</code> 属性为交互式对象设置自定义光标。此属性接受表示CSS游标类型的字符串。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">const</span> sprite <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Sprite</span><span class="token punctuation">(</span>texture<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">sprite<span class="token punctuation">.</span>eventMode <span class="token operator">=</span> <span class="token string">'static'</span><span class="token punctuation">;</span></span>
<span class="line">sprite<span class="token punctuation">.</span>cursor <span class="token operator">=</span> <span class="token string">'pointer'</span><span class="token punctuation">;</span> <span class="token comment">// Set the cursor to a pointer when hovering over the sprite</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">const</span> sprite <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Sprite</span><span class="token punctuation">(</span>texture<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">sprite<span class="token punctuation">.</span>eventMode <span class="token operator">=</span> <span class="token string">'static'</span><span class="token punctuation">;</span></span>
<span class="line">sprite<span class="token punctuation">.</span>cursor <span class="token operator">=</span> <span class="token string">'url(my-cursor.png), auto'</span><span class="token punctuation">;</span> <span class="token comment">// Set a custom cursor image</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-6-1-默认自定义游标" tabindex="-1"><a class="header-anchor" href="#_8-6-1-默认自定义游标"><span>8.6.1 默认自定义游标</span></a></h3>
<p>您还可以为所有交互式对象设置默认值。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token comment">// CSS style for icons</span></span>
<span class="line"><span class="token keyword">const</span> defaultIcon <span class="token operator">=</span> <span class="token string">'url(\'https://pixijs.com/assets/bunny.png\'),auto'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> hoverIcon <span class="token operator">=</span> <span class="token string">'url(\'https://pixijs.com/assets/bunny_saturated.png\'),auto'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Add custom cursor styles</span></span>
<span class="line">app<span class="token punctuation">.</span>renderer<span class="token punctuation">.</span>events<span class="token punctuation">.</span>cursorStyles<span class="token punctuation">.</span>default <span class="token operator">=</span> defaultIcon<span class="token punctuation">;</span></span>
<span class="line">app<span class="token punctuation">.</span>renderer<span class="token punctuation">.</span>events<span class="token punctuation">.</span>cursorStyles<span class="token punctuation">.</span>hover <span class="token operator">=</span> hoverIcon<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> sprite <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Sprite</span><span class="token punctuation">(</span>texture<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">sprite<span class="token punctuation">.</span>eventMode <span class="token operator">=</span> <span class="token string">'static'</span><span class="token punctuation">;</span></span>
<span class="line">sprite<span class="token punctuation">.</span>cursor <span class="token operator">=</span> <span class="token string">'hover'</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


