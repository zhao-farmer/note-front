import{_ as n,c as a,b as e,o as p}from"./app-DzsfPIyd.js";const t={};function l(i,s){return p(),a("div",null,s[0]||(s[0]=[e(`<h1 id="四、makdown语法扩展-代码块" tabindex="-1"><a class="header-anchor" href="#四、makdown语法扩展-代码块"><span>四、makdown语法扩展 - 代码块</span></a></h1><h3 id="_4-1-代码标题" tabindex="-1"><a class="header-anchor" href="#_4-1-代码标题"><span>4.1 代码标题</span></a></h3><p>你可以在代码块添加一个 title 键值对来为代码块设置标题</p><p>在代码块中加入了 <code>ts title=&quot;.vuepress/config.ts&quot;</code></p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title=".vuepress/config.ts"><pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defaultTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vuepress/theme-default&#39;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuepress&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  title<span class="token operator">:</span> <span class="token string">&#39;你好， VuePress&#39;</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">  theme<span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    logo<span class="token operator">:</span> <span class="token string">&#39;https://vuejs.org/images/logo.png&#39;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-行高亮" tabindex="-1"><a class="header-anchor" href="#_4-2-行高亮"><span>4.2 行高亮</span></a></h3><p>你可以在代码块添加行数范围标记，来为对应代码行进行高亮。</p><p>行数范围标记的例子：</p><ul><li>行数范围： {5-8}</li><li>多个单行： {4,7,9}</li><li>组合： {4,7-13,16,23-27,40}</li></ul><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line highlighted"><span class="token keyword">import</span> <span class="token punctuation">{</span> defaultTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vuepress/theme-default&#39;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuepress&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  title<span class="token operator">:</span> <span class="token string">&#39;你好， VuePress&#39;</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line highlighted">  theme<span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line highlighted">    logo<span class="token operator">:</span> <span class="token string">&#39;https://vuejs.org/images/logo.png&#39;</span><span class="token punctuation">,</span></span>
<span class="line highlighted">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-行号" tabindex="-1"><a class="header-anchor" href="#_4-3-行号"><span>4.3 行号</span></a></h3><p>你肯定已经注意到在代码块的最左侧会展示行号。这个功能是默认启用的，你可以通过配置来禁用它。</p><p>你可以在代码块添加 <code>:line-numbers</code> / <code>:no-line-numbers</code> 标记来覆盖配置项中的设置。</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token comment">// 行号默认是启用的</span></span>
<span class="line"><span class="token keyword">const</span> line2 <span class="token operator">=</span> <span class="token string">&#39;This is line 2&#39;</span></span>
<span class="line"><span class="token keyword">const</span> line3 <span class="token operator">=</span> <span class="token string">&#39;This is line 3&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token comment">// 行号被禁用</span></span>
<span class="line"><span class="token keyword">const</span> line2 <span class="token operator">=</span> <span class="token string">&#39;This is line 2&#39;</span></span>
<span class="line"><span class="token keyword">const</span> line3 <span class="token operator">=</span> <span class="token string">&#39;This is line 3&#39;</span></span>
<span class="line"></span></code></pre></div>`,15)]))}const c=n(t,[["render",l],["__file","04.html.vue"]]),r=JSON.parse('{"path":"/other/document/vuePress/04.html","title":"四、makdown语法扩展 - 代码块","lang":"zh-CN","frontmatter":{},"headers":[{"level":3,"title":"4.1 代码标题","slug":"_4-1-代码标题","link":"#_4-1-代码标题","children":[]},{"level":3,"title":"4.2 行高亮","slug":"_4-2-行高亮","link":"#_4-2-行高亮","children":[]},{"level":3,"title":"4.3 行号","slug":"_4-3-行号","link":"#_4-3-行号","children":[]}],"git":{"updatedTime":1744806830000,"contributors":[{"name":"zhao-farmer","username":"zhao-farmer","email":"857899180@qq.com","commits":1,"url":"https://github.com/zhao-farmer"}]},"filePathRelative":"other/document/vuePress/04.md"}');export{c as comp,r as data};
