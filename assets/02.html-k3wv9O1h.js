import{_ as a,c as s,b as n,o as p}from"./app-DzsfPIyd.js";const e={};function l(o,t){return p(),s("div",null,t[0]||(t[0]=[n(`<h1 id="二、新增语义化标签" tabindex="-1"><a class="header-anchor" href="#二、新增语义化标签"><span>二、新增语义化标签</span></a></h1><h2 id="_2-1-新增布局标签" tabindex="-1"><a class="header-anchor" href="#_2-1-新增布局标签"><span>2.1 新增布局标签</span></a></h2><table><thead><tr><th>标签名</th><th>语义</th><th>单/双标签</th></tr></thead><tbody><tr><td>header</td><td>整个页面，或部分区域的头部</td><td>双</td></tr><tr><td>footer</td><td>整个页面，或部分区域的底部</td><td>双</td></tr><tr><td>nav</td><td>导航</td><td>双</td></tr><tr><td>article</td><td>文章、帖子、杂志、新闻、博客、评论等。</td><td>双</td></tr><tr><td>section</td><td>页面中的某段文字，或文章中的某段文字（里面文字通常里面会包含标题）。</td><td>双</td></tr><tr><td>aside</td><td>侧边栏</td><td>双</td></tr><tr><td>main</td><td>文档的主要内容(WHATWG没有语义，IE不支持)，几乎不用。</td><td>双</td></tr><tr><td>hgroup</td><td>包裹连续的标题，如文章主标题、副标题的组合（W3C将其删除）</td><td>双</td></tr></tbody></table><p><strong>关于 <code>article</code> 和 <code>section</code></strong>：</p><ol><li>artical 里面可以有多个 section 。</li><li>section 强调的是分段或分块，如果你想将一块内容分成几段的时候，可使用 section 元 素。</li><li>article 比 section 更强调独立性，一块内容如果比较独立、比较完整，应该使用 article 元素。</li></ol><h2 id="_2-2-新增状态标签" tabindex="-1"><a class="header-anchor" href="#_2-2-新增状态标签"><span>2.2 新增状态标签</span></a></h2><h3 id="_2-2-1-meter-标签" tabindex="-1"><a class="header-anchor" href="#_2-2-1-meter-标签"><span>2.2.1 meter 标签</span></a></h3><p><strong>语义</strong>：</p><blockquote><p>定义已知范围内的标量测量。也被称为 gauge （尺度），双标签，例如：电量、磁盘用量 等。</p></blockquote><p><strong>常用属性如下</strong>：</p><table><thead><tr><th>属性</th><th>值</th><th>描述</th></tr></thead><tbody><tr><td>high</td><td>数值</td><td>规定高值</td></tr><tr><td>low</td><td>数值</td><td>规定低值</td></tr><tr><td>max</td><td>数值</td><td>规定最大值</td></tr><tr><td>min</td><td>数值</td><td>规定最小值</td></tr><tr><td>optimum</td><td>数值</td><td>规定最优值</td></tr><tr><td>value</td><td>数值</td><td>规定当前值</td></tr></tbody></table><h3 id="_2-2-2-progress-标签" tabindex="-1"><a class="header-anchor" href="#_2-2-2-progress-标签"><span>2.2.2 progress 标签</span></a></h3><p><strong>语义</strong>：</p><blockquote><p>显示某个任务完成的进度的指示器，一般用于表示进度条，双标签，例如：工作完成进度 等。</p></blockquote><p><strong>常用属性如下</strong>：</p><table><thead><tr><th>属性</th><th>值</th><th>描述</th></tr></thead><tbody><tr><td>max</td><td>数值</td><td>规定目标值。</td></tr><tr><td>value</td><td>数值</td><td>规定当前值。</td></tr></tbody></table><h2 id="_2-3-新增列表标签" tabindex="-1"><a class="header-anchor" href="#_2-3-新增列表标签"><span>2.3 新增列表标签</span></a></h2><table><thead><tr><th>标签名</th><th>语义</th><th>单/双标签</th></tr></thead><tbody><tr><td>datalist</td><td>用于搜索框的关键字提示</td><td>双</td></tr><tr><td>details</td><td>用于展示问题和答案，或对专有名词进行解释</td><td>双</td></tr><tr><td>summary</td><td>写在details的里面，用于指定问题或专有名词</td><td>双</td></tr></tbody></table><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">list</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mydata<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>datalist</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mydata<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>周冬雨<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>周冬雨<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>周杰伦<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>周杰伦<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>温兆伦<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>温兆伦<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>马冬梅<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>马冬梅<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>datalist</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>details</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">&gt;</span></span>如何走上人生巅峰？<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>一步一步走呗<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>details</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-4-新增文本标签" tabindex="-1"><a class="header-anchor" href="#_2-4-新增文本标签"><span>2.4 新增文本标签</span></a></h2><h3 id="_2-4-1-文本注音" tabindex="-1"><a class="header-anchor" href="#_2-4-1-文本注音"><span>2.4.1 文本注音</span></a></h3><table><thead><tr><th>标签名</th><th>语义</th><th>单/双标签</th></tr></thead><tbody><tr><td>ruby</td><td>包裹需要注音的文字</td><td>双</td></tr><tr><td>rt</td><td>写注音，rt标签写在ruby的里面</td><td>双</td></tr></tbody></table><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ruby</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>魑魅魍魉<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>rt</span><span class="token punctuation">&gt;</span></span>chī mèi wǎng liǎng <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>rt</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ruby</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-4-2-文本标记" tabindex="-1"><a class="header-anchor" href="#_2-4-2-文本标记"><span>2.4.2 文本标记</span></a></h2><table><thead><tr><th>标签名</th><th>语义</th><th>单/双标签</th></tr></thead><tbody><tr><td>mark</td><td>标记</td><td>双</td></tr></tbody></table><blockquote><p>注意： W3C 建议 mark 用于标记搜索结果中的关键字。</p></blockquote>`,26)]))}const d=a(e,[["render",l],["__file","02.html.vue"]]),i=JSON.parse('{"path":"/style/base_htmlcss/html5/02.html","title":"二、新增语义化标签","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"2.1 新增布局标签","slug":"_2-1-新增布局标签","link":"#_2-1-新增布局标签","children":[]},{"level":2,"title":"2.2 新增状态标签","slug":"_2-2-新增状态标签","link":"#_2-2-新增状态标签","children":[{"level":3,"title":"2.2.1 meter 标签","slug":"_2-2-1-meter-标签","link":"#_2-2-1-meter-标签","children":[]},{"level":3,"title":"2.2.2 progress 标签","slug":"_2-2-2-progress-标签","link":"#_2-2-2-progress-标签","children":[]}]},{"level":2,"title":"2.3 新增列表标签","slug":"_2-3-新增列表标签","link":"#_2-3-新增列表标签","children":[]},{"level":2,"title":"2.4 新增文本标签","slug":"_2-4-新增文本标签","link":"#_2-4-新增文本标签","children":[{"level":3,"title":"2.4.1 文本注音","slug":"_2-4-1-文本注音","link":"#_2-4-1-文本注音","children":[]}]},{"level":2,"title":"2.4.2 文本标记","slug":"_2-4-2-文本标记","link":"#_2-4-2-文本标记","children":[]}],"git":{"updatedTime":1744806830000,"contributors":[{"name":"zhao-farmer","username":"zhao-farmer","email":"857899180@qq.com","commits":1,"url":"https://github.com/zhao-farmer"}]},"filePathRelative":"style/base_htmlcss/html5/02.md"}');export{d as comp,i as data};
