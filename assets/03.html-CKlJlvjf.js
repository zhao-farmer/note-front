import{_ as t,c as e,b as l,o as s}from"./app-DzsfPIyd.js";const n={};function i(d,a){return s(),e("div",null,a[0]||(a[0]=[l(`<h1 id="三、媒体查询-media" tabindex="-1"><a class="header-anchor" href="#三、媒体查询-media"><span>三、媒体查询 @media</span></a></h1><h2 id="_3-1-媒体查询定义" tabindex="-1"><a class="header-anchor" href="#_3-1-媒体查询定义"><span>3.1 媒体查询定义</span></a></h2><p>媒体查询是CSS3的新语法。</p><p>使用媒体查询时，可以针对不同的媒体类型定义不同的样式 @media 可以针对不同的屏幕尺寸设置不同的样式 目前针对很多苹果手机、Android手机、平板等设备都用到多媒体查询</p><h2 id="_2-2-媒体查询语法规范" tabindex="-1"><a class="header-anchor" href="#_2-2-媒体查询语法规范"><span>2.2 媒体查询语法规范</span></a></h2><h3 id="_3-2-1-语法" tabindex="-1"><a class="header-anchor" href="#_3-2-1-语法"><span>3.2.1 语法</span></a></h3><ol><li>语法：</li></ol><div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre><code><span class="line"><span class="token atrule"><span class="token rule">@media</span> mediatype <span class="token keyword">and</span>|<span class="token keyword">not</span>|<span class="token keyword">only</span> <span class="token punctuation">(</span>media feature<span class="token punctuation">)</span></span> <span class="token punctuation">{</span></span>
<span class="line">	CSS-Code<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>注意：</li></ol><ul><li>用 @media 开头，注意@符号</li><li>mediatype 就是媒体类型</li><li>关键字 and | only | not</li><li>media feature 媒体特性必需有小括号包含</li></ul><h3 id="_3-2-2-关键字详细说明" tabindex="-1"><a class="header-anchor" href="#_3-2-2-关键字详细说明"><span>3.2.2 关键字详细说明</span></a></h3><ol><li>mediatype 查询类型</li></ol><table><thead><tr><th>值</th><th>解释说明</th></tr></thead><tbody><tr><td>all</td><td>用于所有设备</td></tr><tr><td>screen</td><td>用于电脑屏幕、平板屏幕、智能手机</td></tr><tr><td>print</td><td>用于打印机和打印预览</td></tr></tbody></table><ol start="2"><li>关键字</li></ol><p>关键字就是将媒体类型或者多个媒体特性连接到一起作为媒体查询的条件。</p><ul><li>and：可以将媒体类型或多个媒体特性连接到一起</li><li>only：指定某个特性的媒体类型，可省略</li><li>not：排除某个媒体类型，相当于“非”的意思，可省略</li></ul><ol start="3"><li>媒体特性</li></ol><p>某种媒体类型都具有不同的特性，根据不同媒体类型的媒体特性设置不同的展示风格</p><table><thead><tr><th>值</th><th>解释说明</th></tr></thead><tbody><tr><td>width</td><td>定义输出设备中页面可见区域的宽度</td></tr><tr><td>min-width</td><td>定义页面最小可见区域的宽度</td></tr><tr><td>max-width</td><td>定义页面最大可见区域的宽度</td></tr></tbody></table>`,19)]))}const o=t(n,[["render",i],["__file","03.html.vue"]]),p=JSON.parse('{"path":"/style/records_layout/layout_responsive/03.html","title":"三、媒体查询 @media","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"3.1 媒体查询定义","slug":"_3-1-媒体查询定义","link":"#_3-1-媒体查询定义","children":[]},{"level":2,"title":"2.2 媒体查询语法规范","slug":"_2-2-媒体查询语法规范","link":"#_2-2-媒体查询语法规范","children":[{"level":3,"title":"3.2.1 语法","slug":"_3-2-1-语法","link":"#_3-2-1-语法","children":[]},{"level":3,"title":"3.2.2 关键字详细说明","slug":"_3-2-2-关键字详细说明","link":"#_3-2-2-关键字详细说明","children":[]}]}],"git":{"updatedTime":1744806830000,"contributors":[{"name":"zhao-farmer","username":"zhao-farmer","email":"857899180@qq.com","commits":1,"url":"https://github.com/zhao-farmer"}]},"filePathRelative":"style/records_layout/layout_responsive/03.md"}');export{o as comp,p as data};
