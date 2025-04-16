import{_ as a,c as e,b as n,o as s}from"./app-DzsfPIyd.js";const l={};function i(p,t){return s(),e("div",null,t[0]||(t[0]=[n(`<h1 id="一、前置知识" tabindex="-1"><a class="header-anchor" href="#一、前置知识"><span>一、前置知识</span></a></h1><h2 id="_1-1-逻辑像素和物理像素" tabindex="-1"><a class="header-anchor" href="#_1-1-逻辑像素和物理像素"><span>1.1 逻辑像素和物理像素</span></a></h2><p>逻辑像素和物理像素都是描述计算机屏幕分辨率的术语。</p><ul><li><p>逻辑像素：也称为独立像素，它不是表示屏幕上的实际点，而是一个抽象的单位，由系统使用。例如，在编程时，我们经常基于逻辑像素进行布局设计，因为逻辑像素具有稳定性和一致性，它能在不同的设备和分辨率中保持不变。</p></li><li><p>物理像素：也称为设备像素，代表屏幕上的实际点。每个物理像素包括一个或多个可以发光的子像素（通常是红色、绿色和蓝色的子像素）。屏幕分辨率为1920×1080，说明屏幕宽度为1920个物理像素，高度为1080个物理像素。</p></li></ul><p>逻辑像素和物理像素的关系是通过一个叫做设备像素比（Device Pixel Ratio）来定义的，即物理像素数目与逻辑像素数目的比值。例如，若设备像素比为2，那么表示一个逻辑像素等于2×2的物理像素网格。</p><p>例如，iPhone 8的屏幕分辨率为750×1334，但因为设备像素比为2，所以对于开发者来说，他的屏幕大小则变为375×667个逻辑像素，这样开发者就可以基于375×667这个固定的逻辑分辨率来进行布局设计和元素的定位。当然，实际显示效果的清晰度和细节度会取决于物理像素的数量。</p><p>总结如下：</p><ul><li>逻辑像素：CSS中的像素，绝对单位，保证不同设备下元素的尺寸是相同的。</li><li>物理像素：设备屏幕实际拥有的像素点，相对单位，不同设备下物理像素大小不同。</li></ul><h2 id="_1-2-视口元标签" tabindex="-1"><a class="header-anchor" href="#_1-2-视口元标签"><span>1.2 视口元标签</span></a></h2><p>视口元标签(Viewport Meta Tag)是一个HTML的<code>&lt;meta&gt;</code>标签的一个版本，它让网页开发者可以控制视口的大小和比例。这对于响应式网页设计来说特别重要，因为它可以帮助确保内容在各种设备上正确渲染。</p><p>视口元标签的主要用途有：</p><p>建立移动设备友好的网站：使用视口元标签可以保证页面在移动设备上的正确显示。 控制页面的大小和缩放：可以设置initial-scale，minimum-scale，maximum-scale属性来控制页面的初始缩放级别、最小和最大的缩放级别。 改善用户体验：使用视口元标签可以使用户在使用不同设备查看网页时获得更好的体验。 一个常见的视口元标签看起来像这样：</p><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li><p>name=&quot;viewport&quot;这部分代码告诉浏览器这是一个视口元标签。</p></li><li><p>content=&quot;width=device-width, initial-scale=1.0&quot;这部分代码则定义了视口的具体行为。</p></li><li><p>width=device-width设置布局视口的宽度等于设备正面的宽度（单位是设备无关像素），则页面会在各种设备上具有相同的布局宽度。</p></li><li><p>initial-scale=1.0设定初始缩放比例为1.0，这意味着默认情况下页面的宽度就是浏览器视口的宽度，不会发生任何缩放。</p></li></ul><p>这个标签的意思是设置视口的宽度等于设备的宽度，并且页面的初始缩放级别为1。 这段代码的主要目的是确保您的网页在所有屏幕和设备上都能以适当的大小和比例显示，而不需要用户手动缩放或滚动。</p><p>meta标签可设置的属性如下：</p><table><thead><tr><th>值</th><th>描述</th></tr></thead><tbody><tr><td>row 默认值</td><td>从左往右水平显示</td></tr><tr><td>row-reverse</td><td>与row相反，从右往左水平显示</td></tr><tr><td>column</td><td>从上往下垂直显示</td></tr><tr><td>column-reverse</td><td>与 column 相反，从下往上垂直显示</td></tr></tbody></table>`,17)]))}const r=a(l,[["render",i],["__file","01.html.vue"]]),c=JSON.parse('{"path":"/style/records_layout/layout_phone/01.html","title":"一、前置知识","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"1.1 逻辑像素和物理像素","slug":"_1-1-逻辑像素和物理像素","link":"#_1-1-逻辑像素和物理像素","children":[]},{"level":2,"title":"1.2 视口元标签","slug":"_1-2-视口元标签","link":"#_1-2-视口元标签","children":[]}],"git":{"updatedTime":1744806830000,"contributors":[{"name":"zhao-farmer","username":"zhao-farmer","email":"857899180@qq.com","commits":1,"url":"https://github.com/zhao-farmer"}]},"filePathRelative":"style/records_layout/layout_phone/01.md"}');export{r as comp,c as data};
