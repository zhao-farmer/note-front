<template><div><h1 id="_06键盘事件" tabindex="-1"><a class="header-anchor" href="#_06键盘事件"><span>06键盘事件</span></a></h1>
<h2 id="_1-键盘事件介绍" tabindex="-1"><a class="header-anchor" href="#_1-键盘事件介绍"><span>1. 键盘事件介绍：</span></a></h2>
<p>用户按下键盘上的键，首先会触发keydown事件，然后是keypress事件，最后是keyup事件。其中，keydown和keypress事件是在文本框发生变化之前被触发；而keyup在文本框发生变化之后被触发。如果用户按下一个键不放，就会重复触发keydown和keypress事件。</p>
<p>键盘事件与鼠标事件类似，同样常出现在JavaScript开发过程中。键盘事件的触发过程具体是这样的: 在用户按下键盘上的一个字符键时， 首先会触发keydown事件，然后是keypress事件，最后是keyup事件。其中，keydown和keypress事件是在文本框发生变化之前 被触发；而keyup在文本框发生变化之后被触发。如果用户按下一个键不放，就会重复触发keydown和keypress事件。在用户按下一个非字符键时，首先触发keydown事件，然后就是keyup事件。如果用户按下一个键不放，就会重复触发keydown。</p>
<h2 id="_2-键盘事件属性" tabindex="-1"><a class="header-anchor" href="#_2-键盘事件属性"><span>2. 键盘事件属性</span></a></h2>
<p>键盘定义了很多属性，如下表所示。利用这些属性可以精确控制键盘操作。键盘事件属性一般只在键盘相关事件发生时才会存在于事件对象中，但是 ctrlKey 和 shiftKey 属性除外，因为它们可以在水保事件中存在。例如，当按下 Ctrl 或Shift 键时单击鼠标操作。</p>
<p>键盘事件定义的属性</p>
<table>
<thead>
<tr>
<th>属性</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>keyCode</td>
<td>该属性包含键盘中对应键位的键值</td>
</tr>
<tr>
<td>charCode</td>
<td>该属性包含键盘中对应键位的 Unicode 编码，仅 DOM 支持</td>
</tr>
<tr>
<td>target</td>
<td>发生事件的节点（包含元素），仅 DOM 支持</td>
</tr>
<tr>
<td>srcElement</td>
<td>发生事件的元素，仅 IE 支持</td>
</tr>
<tr>
<td>shiftKey</td>
<td>是否按下 Shift 键，如果按下返回 true，否则为false</td>
</tr>
<tr>
<td>ctrlKey</td>
<td>是否按下 Ctrl 键，如果按下返回 true，否则为false</td>
</tr>
<tr>
<td>altKey</td>
<td>是否按下 Alt 键，如果按下返回 true，否则为false</td>
</tr>
<tr>
<td>metaKey</td>
<td>是否按下 Mtea 键，如果按下返回 true，否则为false，仅 DOM 支持</td>
</tr>
</tbody>
</table>
<p>示例1
ctrlKey 和 shiftKey 属性可存在于键盘和鼠标事件中，表示键盘上的 Ctrl 和 Shift 键是否被按住。下面示例能够监测 Ctrl 和 Shift 键是否被同时按下。如果同时按下，且鼠标单击某个页面元素，则会把该元素从页面中删除。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">document<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">var</span> e <span class="token operator">=</span> e <span class="token operator">||</span> window<span class="token punctuation">.</span>event<span class="token punctuation">;</span> <span class="token comment">//标准化事件对象</span></span>
<span class="line">  <span class="token keyword">var</span> t <span class="token operator">=</span> e<span class="token punctuation">.</span>target <span class="token operator">||</span> e<span class="token punctuation">.</span>srcElement<span class="token punctuation">;</span> <span class="token comment">//获取发生事件的元素，兼容IE和DOM</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>ctrlKey <span class="token operator">&amp;&amp;</span> e<span class="token punctuation">.</span>shiftKey<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">//如果同时按下Ctrl和Shift键</span></span>
<span class="line">    t<span class="token punctuation">.</span>parentNode<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span>t<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//移出当前元素</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-keycode-和-charcode-属性值" tabindex="-1"><a class="header-anchor" href="#_3-keycode-和-charcode-属性值"><span>3. keyCode 和 charCode 属性值</span></a></h2>
<p>keyCode 和 charCode 属性使用比较复杂，但是它们在实际开发中又比较常用，故比较这两个属性在不同事件类型和不同浏览器中的表现时非常必要的，如下表所示。读者可以根据需要有针对性的选用事件响应类型和引用属性值。</p>
<table>
<thead>
<tr>
<th>属性</th>
<th>IE 事件模型</th>
<th>DOM 事件模型</th>
</tr>
</thead>
<tbody>
<tr>
<td>keyCode（keypress）</td>
<td>返回所有字符键的正确值，区分大写状态（65~90）和小写状态（97~122）</td>
<td>功能键返回正确值，而 Shift、Ctrl、Alt、PrintScreen、ScrollLock 无返回值，其他所有键值都返回 0</td>
</tr>
<tr>
<td>keyCode（keydown）</td>
<td>返回所有键值（除 PrintScreen 键），字母键都以大写状态显示键值（65~90）</td>
<td>返回所有键值（除 PrintScreen 键），字母键都以大写状态显示键值（65~90）</td>
</tr>
<tr>
<td>keyCode（keyup）</td>
<td>返回所有键值（除 PrintScreen 键），字母键都以大写状态显示键值（65~90）</td>
<td>返回所有键值（除 PrintScreen 键），字母键都以大写状态显示键值（65~90）</td>
</tr>
<tr>
<td>charCode（keypress）</td>
<td>不支持该属性</td>
<td>返回字符键，区分大写状态（65~90）和小写状态（97~122），Shift、Ctrl、Alt、PrintScreen、ScrollLock 无返回值，其他所有键值都返回 0</td>
</tr>
<tr>
<td>charCode（keydown）</td>
<td>不支持该属性</td>
<td>所有键值为 0</td>
</tr>
<tr>
<td>charCode（keyup）</td>
<td>不支持该属性</td>
<td>所有键值为 0</td>
</tr>
</tbody>
</table>
<p>某些键的可用性不是很正确，如 PageUp 和 Home 键等。不过常用功能键和字符键都是比较稳定的。</p>
<p>示例2</p>
<p>下面示例演示了如何使用方向键控制页面元素的移动效果。</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>box<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">    <span class="token keyword">var</span> box <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"box"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 获取页面元素的引用指针</span></span>
<span class="line">    box<span class="token punctuation">.</span>style<span class="token punctuation">.</span>position <span class="token operator">=</span> <span class="token string">"absolute"</span><span class="token punctuation">;</span>  <span class="token comment">// 色块绝对定位</span></span>
<span class="line">    box<span class="token punctuation">.</span>style<span class="token punctuation">.</span>width <span class="token operator">=</span> <span class="token string">"20px"</span><span class="token punctuation">;</span>  <span class="token comment">// 色块宽度</span></span>
<span class="line">    box<span class="token punctuation">.</span>style<span class="token punctuation">.</span>height <span class="token operator">=</span> <span class="token string">"20px"</span><span class="token punctuation">;</span>  <span class="token comment">// 色块高度</span></span>
<span class="line">    box<span class="token punctuation">.</span>style<span class="token punctuation">.</span>backgroundColor <span class="token operator">=</span> <span class="token string">"red"</span><span class="token punctuation">;</span>  <span class="token comment">// 色块背景</span></span>
<span class="line">    document<span class="token punctuation">.</span>onkeydown <span class="token operator">=</span> keyDown<span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">//在Document对象中注册keyDown事件处理函数</span></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">keyDown</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span><span class="token punctuation">{</span>  <span class="token comment">// 方向键控制元素移动函数</span></span>
<span class="line">        <span class="token keyword">var</span> event <span class="token operator">=</span> event <span class="token operator">||</span> window<span class="token punctuation">.</span>event<span class="token punctuation">;</span>  <span class="token comment">// 标准化事件对象</span></span>
<span class="line">        <span class="token keyword">switch</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>keyCode<span class="token punctuation">)</span><span class="token punctuation">{</span>  <span class="token comment">// 获取当前按下键盘键的编码</span></span>
<span class="line">            <span class="token keyword">case</span> <span class="token number">37</span> <span class="token operator">:</span>  <span class="token comment">// 按下左箭头键，向左移动5个像素</span></span>
<span class="line">                box<span class="token punctuation">.</span>style<span class="token punctuation">.</span>left <span class="token operator">=</span> box<span class="token punctuation">.</span>offsetLeft <span class="token operator">-</span> <span class="token number">5</span>  <span class="token operator">+</span> <span class="token string">"px"</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">case</span> <span class="token number">39</span> <span class="token operator">:</span>  <span class="token comment">// 按下右箭头键，向右移动5个像素</span></span>
<span class="line">                box<span class="token punctuation">.</span>style<span class="token punctuation">.</span>left <span class="token operator">=</span> box<span class="token punctuation">.</span>offsetLeft <span class="token operator">+</span> <span class="token number">5</span> <span class="token operator">+</span> <span class="token string">"px"</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">case</span> <span class="token number">38</span> <span class="token operator">:</span>  <span class="token comment">// 按下上箭头键，向上移动5个像素</span></span>
<span class="line">                box<span class="token punctuation">.</span>style<span class="token punctuation">.</span>top <span class="token operator">=</span> box<span class="token punctuation">.</span>offsetTop  <span class="token operator">-</span> <span class="token number">5</span> <span class="token operator">+</span> <span class="token string">"px"</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">case</span> <span class="token number">40</span> <span class="token operator">:</span>  <span class="token comment">// 按下下箭头键，向下移动5个像素</span></span>
<span class="line">                box<span class="token punctuation">.</span>style<span class="token punctuation">.</span>top <span class="token operator">=</span> box<span class="token punctuation">.</span>offsetTop  <span class="token operator">+</span> <span class="token number">5</span> <span class="token operator">+</span> <span class="token string">"px"</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token boolean">false</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面示例中，首先获取页面元素，通过 CSS 脚本控制元素绝对定位、大小和背景色。然后在 document 对象上注册鼠标按下事件类型处理函数，在事件回调函数 keyDown() 中侦测当前按下的方向键，并决定定位元素在窗口中的位置。其中元素的 offsetLeft 和 offsetTop 属性可以存取它在页面中的位置。</p>
<h2 id="_4-键盘响应顺序" tabindex="-1"><a class="header-anchor" href="#_4-键盘响应顺序"><span>4. 键盘响应顺序</span></a></h2>
<p>键盘事件主要包括下面 3 种类型：</p>
<ul>
<li>keydown：在键盘上按下某个键时触发。如果按住某个键，会不断触发该事件，但是 Opera 浏览器不支持这种连续操作。该事件处理函数返回 false 时，会取消默认的动作（如输入的键盘字符，在 IE 和 Safari 浏览器下还会禁止keypress 事件响应）。</li>
<li>keypress：按下某个键盘键并释放时触发。如果按住某个键，会不断触发该事件。该事件处理函数返回 false 时，会取消默认的动作（如输入的键盘字符）。</li>
<li>keyup：释放某个键盘键时触发。该事件仅在松开键盘时触发一次，不是一个持续的响应状态。</li>
</ul>
<p>当获取用户正按下键码时，可以使用 keydown、keypress 和 keyup 事件获取这些信息。其中 keydown 和 keypress 事件基本上是同义事件，它们的表现也完全一致，不过一些浏览器不允许使用 keypress 事件获取按键信息。所有元素都支持键盘事件，但键盘事件多被应用在表单输入中。</p>
<p>当按下键盘时，会连续触发多个事件，它们将按如下顺序发生。</p>
<p>对于字符键来说，键盘事件的响应顺序：keydown → keypress → keyup。对于非字符键（如功能键或特殊键）来说，键盘事件的相应顺序：keydown → keyup。</p>
<p>如果按下字符键不放，则 keydown 和 keypress 事件将逐个持续发生，直至松开按键。如果按下非字符键不放，则只有 keydown 事件持续发生，直至松开按键。</p>
<p>示例</p>
<p>下面设计一个简单示例，以获取键盘事件相应顺序。</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>textarea</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">cols</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>26<span class="token punctuation">"</span></span> <span class="token attr-name">rows</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>16<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>textarea</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">    <span class="token keyword">var</span> n <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>  <span class="token comment">// 定义编号变量</span></span>
<span class="line">    <span class="token keyword">var</span> text <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"text"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 获取文本区域的引用指针</span></span>
<span class="line">    text<span class="token punctuation">.</span>onkeydown <span class="token operator">=</span> f<span class="token punctuation">;</span>  <span class="token comment">// 注册keydown事件处理函数</span></span>
<span class="line">    text<span class="token punctuation">.</span>onkeyup <span class="token operator">=</span> f<span class="token punctuation">;</span>  <span class="token comment">// 注册keyup事件处理函数</span></span>
<span class="line">    text<span class="token punctuation">.</span>onkeypress <span class="token operator">=</span> f<span class="token punctuation">;</span>  <span class="token comment">// 注册keypress事件处理函数</span></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span><span class="token punctuation">{</span>  <span class="token comment">// 事件调用函数</span></span>
<span class="line">        <span class="token keyword">var</span> e <span class="token operator">=</span> e <span class="token operator">||</span> window<span class="token punctuation">.</span>event<span class="token punctuation">;</span>  <span class="token comment">// 标准化事件对象</span></span>
<span class="line">        text<span class="token punctuation">.</span>value <span class="token operator">+=</span> <span class="token punctuation">(</span>n<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">"="</span> <span class="token operator">+</span> e<span class="token punctuation">.</span>type <span class="token operator">+</span><span class="token string">"  (keyCode="</span> <span class="token operator">+</span> e<span class="token punctuation">.</span>keyCode <span class="token operator">+</span> <span class="token string">")\n"</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token comment">//捕获事件响应信息</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-键盘键码keycode对照表" tabindex="-1"><a class="header-anchor" href="#_5-键盘键码keycode对照表"><span>5. 键盘键码keyCode对照表</span></a></h2>
<h3 id="_5-1-字母和数字键的键码值-keycode" tabindex="-1"><a class="header-anchor" href="#_5-1-字母和数字键的键码值-keycode"><span>5.1 字母和数字键的键码值（keyCode）</span></a></h3>
<table>
<thead>
<tr>
<th>按键</th>
<th>键码</th>
<th>按键</th>
<th>键码</th>
<th>按键</th>
<th>键码</th>
<th>按键</th>
<th>键码</th>
</tr>
</thead>
<tbody>
<tr>
<td>A</td>
<td>65</td>
<td>J</td>
<td>74</td>
<td>S</td>
<td>83</td>
<td>1</td>
<td>49</td>
</tr>
<tr>
<td>B</td>
<td>66</td>
<td>K</td>
<td>75</td>
<td>T</td>
<td>84</td>
<td>2</td>
<td>50</td>
</tr>
<tr>
<td>C</td>
<td>67</td>
<td>L</td>
<td>76</td>
<td>U</td>
<td>85</td>
<td>3</td>
<td>51</td>
</tr>
<tr>
<td>D</td>
<td>68</td>
<td>M</td>
<td>77</td>
<td>V</td>
<td>86</td>
<td>4</td>
<td>52</td>
</tr>
<tr>
<td>E</td>
<td>69</td>
<td>N</td>
<td>78</td>
<td>W</td>
<td>87</td>
<td>5</td>
<td>53</td>
</tr>
<tr>
<td>F</td>
<td>70</td>
<td>O</td>
<td>79</td>
<td>X</td>
<td>88</td>
<td>6</td>
<td>54</td>
</tr>
<tr>
<td>G</td>
<td>71</td>
<td>P</td>
<td>80</td>
<td>Y</td>
<td>89</td>
<td>7</td>
<td>55</td>
</tr>
<tr>
<td>H</td>
<td>72</td>
<td>Q</td>
<td>81</td>
<td>Z</td>
<td>90</td>
<td>8</td>
<td>56</td>
</tr>
<tr>
<td>I</td>
<td>73</td>
<td>R</td>
<td>82</td>
<td>0</td>
<td>48</td>
<td>9</td>
<td>57</td>
</tr>
</tbody>
</table>
<h3 id="_5-2-数字键盘上的各键键码值-keycode-功能键键码值-keycode" tabindex="-1"><a class="header-anchor" href="#_5-2-数字键盘上的各键键码值-keycode-功能键键码值-keycode"><span>5.2 数字键盘上的各键键码值（keyCode）/功能键键码值（keyCode）</span></a></h3>
<table>
<thead>
<tr>
<th>按键</th>
<th>键码</th>
<th>按键</th>
<th>键码</th>
<th>按键</th>
<th>键码</th>
<th>按键</th>
<th>键码</th>
</tr>
</thead>
<tbody>
<tr>
<td>0</td>
<td>96</td>
<td>8</td>
<td>104</td>
<td>F1</td>
<td>112</td>
<td>F9</td>
<td>120</td>
</tr>
<tr>
<td>1</td>
<td>97</td>
<td>9</td>
<td>105</td>
<td>F2</td>
<td>113</td>
<td>F10</td>
<td>121</td>
</tr>
<tr>
<td>2</td>
<td>98</td>
<td>*</td>
<td>106</td>
<td>F3</td>
<td>114</td>
<td>F11</td>
<td>122</td>
</tr>
<tr>
<td>3</td>
<td>99</td>
<td>+</td>
<td>107</td>
<td>F4</td>
<td>115</td>
<td>F12</td>
<td>123</td>
</tr>
<tr>
<td>4</td>
<td>100</td>
<td>Enter</td>
<td>108</td>
<td>F5</td>
<td>116</td>
<td></td>
<td></td>
</tr>
<tr>
<td>5</td>
<td>101</td>
<td>-</td>
<td>109</td>
<td>F6</td>
<td>117</td>
<td></td>
<td></td>
</tr>
<tr>
<td>6</td>
<td>102</td>
<td>.</td>
<td>110</td>
<td>F7</td>
<td>118</td>
<td></td>
<td></td>
</tr>
<tr>
<td>7</td>
<td>103</td>
<td>/</td>
<td>111</td>
<td>F8</td>
<td>119</td>
<td></td>
<td></td>
</tr>
</tbody>
</table>
<h2 id="_5-3-控制键键码值-keycode" tabindex="-1"><a class="header-anchor" href="#_5-3-控制键键码值-keycode"><span>5.3 控制键键码值（keyCode）</span></a></h2>
<table>
<thead>
<tr>
<th>按键</th>
<th>键码</th>
<th>按键</th>
<th>键码</th>
<th>按键</th>
<th>键码</th>
<th>按键</th>
<th>键码</th>
</tr>
</thead>
<tbody>
<tr>
<td>BackSpace</td>
<td>8</td>
<td>Esc</td>
<td>27</td>
<td>Right Arrow</td>
<td>39</td>
<td>-_</td>
<td>189</td>
</tr>
<tr>
<td>Tab</td>
<td>9</td>
<td>Spacebar</td>
<td>32</td>
<td>Dw Arrow</td>
<td>40</td>
<td>.&gt;</td>
<td>190</td>
</tr>
<tr>
<td>Clear</td>
<td>12</td>
<td>Page Up</td>
<td>33</td>
<td>Insert</td>
<td>45</td>
<td>/?</td>
<td>191</td>
</tr>
<tr>
<td>Enter</td>
<td>13</td>
<td>Page Down</td>
<td>34</td>
<td>Delete</td>
<td>46</td>
<td>`~</td>
<td>192</td>
</tr>
<tr>
<td>Shift</td>
<td>16</td>
<td>End</td>
<td>35</td>
<td>Num Lock</td>
<td>144</td>
<td><code v-pre>[{</code></td>
<td>219</td>
</tr>
<tr>
<td>Control</td>
<td>17</td>
<td>Home</td>
<td>36</td>
<td>;:</td>
<td>186</td>
<td>|</td>
<td>220</td>
</tr>
<tr>
<td>Alt</td>
<td>18</td>
<td>Left Arrow</td>
<td>37</td>
<td>=+</td>
<td>187</td>
<td><code v-pre>]}</code></td>
<td>221</td>
</tr>
<tr>
<td>Cape Lock</td>
<td>20</td>
<td>Up Arrow</td>
<td>38</td>
<td>,&lt;</td>
<td>188</td>
<td>'&quot;</td>
<td>222</td>
</tr>
</tbody>
</table>
<h2 id="_5-4多媒体键码值-keycode" tabindex="-1"><a class="header-anchor" href="#_5-4多媒体键码值-keycode"><span>5.4多媒体键码值（keyCode）</span></a></h2>
<table>
<thead>
<tr>
<th>按键</th>
<th>键码</th>
<th>按键</th>
<th>键码</th>
</tr>
</thead>
<tbody>
<tr>
<td>音量加</td>
<td>175</td>
<td>浏览器</td>
<td>172</td>
</tr>
<tr>
<td>音量减</td>
<td>174</td>
<td>邮件</td>
<td>180</td>
</tr>
<tr>
<td>停止</td>
<td>179</td>
<td>搜索</td>
<td>170</td>
</tr>
<tr>
<td>静音</td>
<td>173</td>
<td>收藏</td>
<td>171</td>
</tr>
</tbody>
</table>
<h2 id="_6-常用属性和方法" tabindex="-1"><a class="header-anchor" href="#_6-常用属性和方法"><span>6. 常用属性和方法</span></a></h2>
<ul>
<li>keyCode</li>
<li>该属性可以识别大小写，并返回其对应的ASCII值，一般我们使用该属性来判断用户的按键操作
<ul>
<li>e.preventDefault()</li>
</ul>
</li>
<li>该方法阻止默认事件（标准）
<ul>
<li>e.stopPropagation()</li>
</ul>
</li>
<li>该属性阻止事件冒泡
<ul>
<li>return false</li>
</ul>
</li>
</ul>
<h2 id="_7-键盘案例" tabindex="-1"><a class="header-anchor" href="#_7-键盘案例"><span>7.键盘案例：</span></a></h2>
<h3 id="_7-1-京东搜索框" tabindex="-1"><a class="header-anchor" href="#_7-1-京东搜索框"><span>7.1 京东搜索框</span></a></h3>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1.0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>京东搜索框<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css"></span>
<span class="line">        <span class="token selector">input</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">height</span><span class="token punctuation">:</span> 25px<span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">border</span><span class="token punctuation">:</span> 2px solid #e2231a<span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">background-color</span><span class="token punctuation">:</span> #ffffff<span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">margin</span><span class="token punctuation">:</span> 100px auto<span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>金典京东超级宠粉日，抢199键100券<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">        window<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token comment">// 获取文本输入框</span></span>
<span class="line">            <span class="token keyword">var</span> tBox <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">"input"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token comment">// 给文档对象添加键盘按钮弹起的事件</span></span>
<span class="line">            document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"keyup"</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token comment">// 如果按下的键是s键</span></span>
<span class="line">                <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>keyCode <span class="token operator">==</span> <span class="token number">83</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                    <span class="token comment">// 文本输入框获取焦点</span></span>
<span class="line">                    tBox<span class="token punctuation">.</span><span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-2-快递单号输入查询" tabindex="-1"><a class="header-anchor" href="#_7-2-快递单号输入查询"><span>7.2 快递单号输入查询</span></a></h3>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1.0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>快递单号输入查询<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css"></span>
<span class="line">        <span class="token selector">.box</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">width</span><span class="token punctuation">:</span> 250px<span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">margin</span><span class="token punctuation">:</span> 100px auto<span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        </span>
<span class="line">        <span class="token selector">.poput</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">width</span><span class="token punctuation">:</span> 160px<span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">padding</span><span class="token punctuation">:</span> 5px 5px<span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">line-height</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">font-size</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">background-color</span><span class="token punctuation">:</span> #f1f1f1<span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 2px 10px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> .5<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">left</span><span class="token punctuation">:</span> 80px<span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">top</span><span class="token punctuation">:</span> 2px<span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        </span>
<span class="line">        <span class="token selector">.poput::before</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">""</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">width</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">border</span><span class="token punctuation">:</span> 7px solid red<span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">border-color</span><span class="token punctuation">:</span> #f1f1f1 transparent transparent<span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">top</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">left</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        </span>
<span class="line">        <span class="token selector">.lastBox</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">margin-top</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>box<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">            公司名称：<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>圆通快递<span class="token punctuation">"</span></span> <span class="token attr-name">disabled</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>disabled<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>poput<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>123<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>lastBox<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">            快递单号：<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">        window<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token comment">// 获取文本输入框</span></span>
<span class="line">            <span class="token keyword">var</span> text <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">"#text"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token comment">// 获取弹出框</span></span>
<span class="line">            <span class="token keyword">var</span> poput <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">".poput"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token comment">// 给文本框添加键盘按键弹起事件</span></span>
<span class="line">            text<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"keyup"</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token comment">// 判断文本输入框是否为空</span></span>
<span class="line">                <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">==</span> <span class="token string">""</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                    <span class="token comment">// 为空弹框就隐藏</span></span>
<span class="line">                    poput<span class="token punctuation">.</span>style<span class="token punctuation">[</span><span class="token string">"display"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"none"</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">                    <span class="token comment">// 否则弹框出现，并且将文本输入框内的值赋值给弹出框</span></span>
<span class="line">                    poput<span class="token punctuation">.</span>style<span class="token punctuation">[</span><span class="token string">"display"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"block"</span><span class="token punctuation">;</span></span>
<span class="line">                    poput<span class="token punctuation">.</span>innerText <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>value<span class="token punctuation">;</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token comment">// 给文本输入框添加失去鼠标焦点时的事件</span></span>
<span class="line">            text<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"blur"</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token comment">// 失去焦点后，弹框隐藏</span></span>
<span class="line">                poput<span class="token punctuation">.</span>style<span class="token punctuation">[</span><span class="token string">"display"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"none"</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token comment">//给文本输入框添加鼠标获取焦点时的事件</span></span>
<span class="line">            text<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"focus"</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token comment">// 判断文本输入框是否为空</span></span>
<span class="line">                <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">==</span> <span class="token string">""</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                    <span class="token comment">// 为空弹框就隐藏</span></span>
<span class="line">                    poput<span class="token punctuation">.</span>style<span class="token punctuation">[</span><span class="token string">"display"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"none"</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">                    <span class="token comment">// 否则弹框出现，并且将文本输入框内的值赋值给弹出框</span></span>
<span class="line">                    poput<span class="token punctuation">.</span>style<span class="token punctuation">[</span><span class="token string">"display"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"block"</span><span class="token punctuation">;</span></span>
<span class="line">                    poput<span class="token punctuation">.</span>innerText <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>value<span class="token punctuation">;</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-3-文字禁止选中" tabindex="-1"><a class="header-anchor" href="#_7-3-文字禁止选中"><span>7.3 文字禁止选中</span></a></h3>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1.0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>js事件实现文字禁止选中功能<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css"></span>
<span class="line">        <span class="token selector">p</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">text-indent</span><span class="token punctuation">:</span> 2em<span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>人物、情节、环境是小说的三要素。情节一般包括开端、发展、高潮、结局四部分，有的包括序幕、尾声。环境包括自然环境和社会环境。 小说按照篇幅及容量可分为长篇、中篇、短篇和微型小说（小小说）。按照表现的内容可分为神话、仙侠、武侠、科幻、悬疑、古传、当代等。按照体制可分为章回体小说、日记体小说、书信体小说、自传体小说。按照语言形式可分为文言小说和白话小说。<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">        <span class="token comment">// onselectstart 禁止选中事件</span></span>
<span class="line">        <span class="token comment">//触发时间为目标对象被开始选中时（即选中动作刚开始，尚未实质性被选中）</span></span>
<span class="line">        <span class="token keyword">var</span> p <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">"p"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        p<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"mouseover"</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token comment">/* user-select 是css3新增的属性，用于设置用户是否能够选中文本。</span>
<span class="line">            可用于除替换元素外的所有元素</span>
<span class="line">            取值：</span>
<span class="line">            [none]：文本不能被选中</span>
<span class="line">            [text]：可以选择文本（默认）</span>
<span class="line">            [all]：当所有内容作为一个整体时可以被选中。如果双击或者在上下文上点击子元素，</span>
<span class="line">                那么被选中的选择的部分将是以该子元素向上回溯的最高祖先元素</span>
<span class="line">            [Element]：可以选择文本，但选择范围受元素边界的约束</span>
<span class="line">            */</span></span>
<span class="line">            e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>style<span class="token punctuation">[</span><span class="token string">"userSelect"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">" none"</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-4-禁止右击菜单" tabindex="-1"><a class="header-anchor" href="#_7-4-禁止右击菜单"><span>7.4 禁止右击菜单</span></a></h3>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1.0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>实现一个标签禁止右键菜单功能<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1.0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>实现一个标签禁止右键菜单功能<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css"></span>
<span class="line">            <span class="token selector">p</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token property">text-indent</span><span class="token punctuation">:</span> 2em<span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>人物、情节、环境是小说的三要素。情节一般包括开端、发展、高潮、结局四部分，有的包括序幕、尾声。环境包括自然环境和社会环境。 小说按照篇幅及容量可分为长篇、中篇、短篇和微型小说（小小说）。按照表现的内容可分为神话、仙侠、武侠、科幻、悬疑、古传、当代等。按照体制可分为章回体小说、日记体小说、书信体小说、自传体小说。按照语言形式可分为文言小说和白话小说。<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">            <span class="token keyword">var</span> p <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">"p"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token comment">/* </span>
<span class="line">            oncontextmenu:该事件在元素中用户右击鼠标时触发并打开上下文菜单</span>
<span class="line">             */</span></span>
<span class="line">            p<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"contextmenu"</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token comment">//returnValue：取消事件的默认动作（非标准）</span></span>
<span class="line">                e<span class="token punctuation">.</span>returnValue <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token comment">// preventDefault()：或者取消事件的默认动作（标准）</span></span>
<span class="line">                e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">        </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">        window<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-5-自定义鼠标光标" tabindex="-1"><a class="header-anchor" href="#_7-5-自定义鼠标光标"><span>7.5 自定义鼠标光标</span></a></h3>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1.0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>图片替换光标功能<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css"></span>
<span class="line">    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">        window<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"mouseover"</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token comment">// [cursor]：该属性规定要显示的光标类型(形状)</span></span>
<span class="line">                <span class="token comment">// 该属性规定鼠标指针放在元素边界范围内时所有的光标形状</span></span>
<span class="line">                e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>style<span class="token punctuation">[</span><span class="token string">"cursor"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"url(./images/鼠标光标.png),auto"</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


