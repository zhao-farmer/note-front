import{aq as s,ar as a,as as p,at as e}from"./app-Cok9BT0p.js";const t={};function l(i,n){return e(),a("div",null,n[0]||(n[0]=[p(`<h1 id="二、实战操作" tabindex="-1"><a class="header-anchor" href="#二、实战操作"><span>二、实战操作</span></a></h1><h2 id="_2-1-需求-vue模板" tabindex="-1"><a class="header-anchor" href="#_2-1-需求-vue模板"><span>2.1 需求-vue模板</span></a></h2><ol><li><p>原因：</p><p>vue官网给出了 vscode 插件(Vue Officaial)，但是并没有直接生成模板的功能</p><p>原本的 Vetur 跟官方给出的插件有冲突，造成查看 css 中有两个颜色，自己经常使用快速模板生成文件自能自己写了</p></li><li><p>功能需求</p><p>在vue文件下 输入vue2 生成vue2模板 输入vue3生成 vue3模板</p></li></ol><h2 id="_2-2-实现" tabindex="-1"><a class="header-anchor" href="#_2-2-实现"><span>2.2 实现</span></a></h2><ol><li><p>实现思路</p><ul><li>监听文档变化​​：使用 vscode.workspace.onDidChangeTextDocument事件来监测用户输入。</li><li>判断条件​​：检查更改是否发生在 .vue文件的第一行，并且内容是否为 vue2或 vue3。</li><li>​执行替换​​：如果条件满足，使用编辑器 API 用模板替换掉关键词。</li></ul></li><li><p>代码实现</p><p>在 src/extension.ts中实现核心逻辑：</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre><code><span class="line"><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> vscode <span class="token keyword">from</span> <span class="token string">&#39;vscode&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 定义模板</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token constant">VUE_TEMPLATES</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token punctuation">[</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">&#39;vue2&#39;</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;template&gt;</span>
<span class="line">&lt;div&gt;</span>
<span class="line">    &lt;!-- Vue 2 模板内容 --&gt;</span>
<span class="line">&lt;/div&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span>
<span class="line">&lt;script&gt;</span>
<span class="line">export default {</span>
<span class="line">name: &#39;MyComponent&#39;,</span>
<span class="line">data() {</span>
<span class="line">    return {</span>
<span class="line">    // 数据属性</span>
<span class="line">    };</span>
<span class="line">},</span>
<span class="line">methods: {</span>
<span class="line">    // 方法</span>
<span class="line">}</span>
<span class="line">};</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;style scoped&gt;</span>
<span class="line">/* 样式 */</span>
<span class="line">&lt;/style&gt;</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">&#39;vue3&#39;</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;script setup&gt;</span>
<span class="line">// Composition API with &lt;script setup&gt;</span>
<span class="line">import { ref, reactive } from &#39;vue&#39;;</span>
<span class="line"></span>
<span class="line">const count = ref(0);</span>
<span class="line">const state = reactive({ message: &#39;Hello Vue 3!&#39; });</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;template&gt;</span>
<span class="line">&lt;div&gt;</span>
<span class="line">    &lt;p&gt;{{ state.message }}&lt;/p&gt;</span>
<span class="line">    &lt;button @click=&quot;count++&quot;&gt;Count is: {{ count }}&lt;/button&gt;</span>
<span class="line">&lt;/div&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span>
<span class="line">&lt;style scoped&gt;</span>
<span class="line">/* 样式 */</span>
<span class="line">&lt;/style&gt;</span><span class="token template-punctuation string">\`</span></span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">activate</span><span class="token punctuation">(</span>context<span class="token operator">:</span> vscode<span class="token punctuation">.</span>ExtensionContext<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Vue Template Generator is now active!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 订阅文档更改事件</span></span>
<span class="line">    <span class="token keyword">let</span> disposable <span class="token operator">=</span> vscode<span class="token punctuation">.</span>workspace<span class="token punctuation">.</span><span class="token function">onDidChangeTextDocument</span><span class="token punctuation">(</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// 获取活动的文本编辑器</span></span>
<span class="line">        <span class="token keyword">const</span> editor <span class="token operator">=</span> vscode<span class="token punctuation">.</span>window<span class="token punctuation">.</span>activeTextEditor<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>editor <span class="token operator">||</span> event<span class="token punctuation">.</span>document <span class="token operator">!==</span> editor<span class="token punctuation">.</span>document<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">return</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">// 检查是否是 .vue 文件</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span>document<span class="token punctuation">.</span>languageId <span class="token operator">!==</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">return</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">// 获取文档内容</span></span>
<span class="line">        <span class="token keyword">const</span> document <span class="token operator">=</span> event<span class="token punctuation">.</span>document<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">const</span> firstLine <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">lineAt</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">const</span> firstLineText <span class="token operator">=</span> firstLine<span class="token punctuation">.</span>text<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">// 检查第一行内容是否是 vue2 或 vue3</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token constant">VUE_TEMPLATES</span><span class="token punctuation">[</span>firstLineText<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token comment">// 获取模板</span></span>
<span class="line">            <span class="token keyword">const</span> template <span class="token operator">=</span> <span class="token constant">VUE_TEMPLATES</span><span class="token punctuation">[</span>firstLineText<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">            <span class="token comment">// 使用编辑操作替换内容</span></span>
<span class="line">            editor<span class="token punctuation">.</span><span class="token function">edit</span><span class="token punctuation">(</span><span class="token punctuation">(</span>editBuilder<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token comment">// 计算整个文档的范围（从开始到结束）</span></span>
<span class="line">                <span class="token keyword">const</span> fullRange <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">vscode</span><span class="token punctuation">.</span><span class="token function">Range</span><span class="token punctuation">(</span></span>
<span class="line">                    document<span class="token punctuation">.</span><span class="token function">positionAt</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">                    document<span class="token punctuation">.</span><span class="token function">positionAt</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getText</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span></span>
<span class="line">                <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                </span>
<span class="line">                <span class="token comment">// 用模板替换整个文档内容</span></span>
<span class="line">                editBuilder<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>fullRange<span class="token punctuation">,</span> template<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>success <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token keyword">if</span> <span class="token punctuation">(</span>success<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                    vscode<span class="token punctuation">.</span>window<span class="token punctuation">.</span><span class="token function">showInformationMessage</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">已生成 </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>firstLineText<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> 模板！</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                    </span>
<span class="line">                    <span class="token comment">// 将光标移动到模板开始位置</span></span>
<span class="line">                    <span class="token keyword">const</span> position <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">vscode</span><span class="token punctuation">.</span><span class="token function">Position</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                    editor<span class="token punctuation">.</span>selection <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">vscode</span><span class="token punctuation">.</span><span class="token function">Selection</span><span class="token punctuation">(</span>position<span class="token punctuation">,</span> position<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    context<span class="token punctuation">.</span>subscriptions<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>disposable<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">deactivate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,5)]))}const o=s(t,[["render",l]]),u=JSON.parse('{"path":"/other/plugin/vscode/02.html","title":"二、实战操作","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1758492113000,"contributors":[{"name":"zhao-farmer","username":"zhao-farmer","email":"857899180@qq.com","commits":1,"url":"https://github.com/zhao-farmer"}],"changelog":[{"hash":"99c22db75003feb5447a5e9b7cef050f5faec996","time":1758492113000,"email":"857899180@qq.com","author":"zhao-farmer","message":"插件开发"}]},"filePathRelative":"other/plugin/vscode/02.md"}');export{o as comp,u as data};
