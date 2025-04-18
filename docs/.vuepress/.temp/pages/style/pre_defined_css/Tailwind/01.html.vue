<template><div><h1 id="一、快速入门" tabindex="-1"><a class="header-anchor" href="#一、快速入门"><span>一、快速入门</span></a></h1>
<p>Tailwind CSS的工作原理是扫描所有HTML文件、JavaScript组件和任何其他模板中的类名，生成相应的样式，然后将它们写入静态CSS文件。</p>
<p>它快速、灵活、可靠-零运行时间。</p>
<p><a href="https://tailwindcss.com/docs" target="_blank" rel="noopener noreferrer">官方网站</a>
<a href="https://github.com/tailwindlabs/tailwindcss" target="_blank" rel="noopener noreferrer">github地址</a>
<a href="https://www.jsdelivr.com/package/npm/tailwindcss" target="_blank" rel="noopener noreferrer">npm插件地址</a></p>
<h2 id="_1-1-使用vite安装" tabindex="-1"><a class="header-anchor" href="#_1-1-使用vite安装"><span>1.1 使用vite安装</span></a></h2>
<p>将Tailwind CSS安装为Vite插件是将其与Laravel，SvelteKit，React Router，Nuxt和SolidJS等框架集成的最无缝方式。</p>
<ol>
<li>安装Tailwind CSS</li>
</ol>
<p>通过npm安装tailwindcss和@tailwindcss/vite。</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> <span class="token function">install</span> tailwindcss @tailwindcss/vite</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="2">
<li>配置Vite插件</li>
</ol>
<p>将@tailwindcss/vite插件添加到您的Vite配置中。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vite'</span></span>
<span class="line"><span class="token keyword">import</span> tailwindcss <span class="token keyword">from</span> <span class="token string">'@tailwindcss/vite'</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token function">tailwindcss</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>导入Tailwind CSS</li>
</ol>
<p>在你的CSS文件中添加一个@import来导入Tailwind CSS。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">@<span class="token keyword">import</span> <span class="token string">"tailwindcss"</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="4">
<li>开始构建过程</li>
</ol>
<p>使用npm run dev或在package.json文件中配置的任何命令运行构建过程。</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> run dev</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="5">
<li>开始在HTML中使用Tailwind</li>
</ol>
<p>确保你编译的CSS包含在<code v-pre>&lt;head&gt;</code>中（你的框架可能会为你处理这个问题），然后开始使用Tailwind的实用程序类来设计你的内容。</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">doctype</span> <span class="token name">html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1.0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/src/styles.css<span class="token punctuation">"</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text-3xl font-bold underline<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    Hello world!</span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-2-使用js引入" tabindex="-1"><a class="header-anchor" href="#_1-2-使用js引入"><span>1.2 使用js引入</span></a></h2>
<p>可以在 <code v-pre>https://www.jsdelivr.com/package/npm/tailwindcss</code> 下载对应js文件</p>
<ol>
<li>脚本标记添加到HTML文件的<code v-pre>&lt;head&gt;</code>中，并开始使用Tailwind的实用程序类来设置内容的样式。</li>
</ol>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">doctype</span> <span class="token name">html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>../js/tailwind.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text-3xl font-bold underline<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">      Hello world!</span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>使用type=&quot;text/tailwindcss&quot;添加支持Tailwind所有CSS功能的自定义CSS。</li>
</ol>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">doctype</span> <span class="token name">html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>../js/tailwind.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text/tailwindcss<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css"></span>
<span class="line">      <span class="token atrule"><span class="token rule">@theme</span></span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">--color-clifford</span><span class="token punctuation">:</span> #da373d<span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text-3xl font-bold underline text-clifford<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">      Hello world!</span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-3-vscode安装插件" tabindex="-1"><a class="header-anchor" href="#_1-3-vscode安装插件"><span>1.3 vscode安装插件</span></a></h2>
<h3 id="_1-3-1-安装主插件" tabindex="-1"><a class="header-anchor" href="#_1-3-1-安装主插件"><span>1.3.1 安装主插件</span></a></h3>
<p>Visual Studio Code的官方 <a href="https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss" target="_blank" rel="noopener noreferrer">Tailwind CSS IntelliSense</a> 扩展通过为用户提供自动完成、语法突出显示和linting等高级功能来增强Tailwind开发体验。</p>
<ul>
<li>自动完成-为实用程序类以及CSS函数和指令提供智能建议。</li>
<li>突出显示CSS和标记中的错误和潜在错误。</li>
<li>悬停预览-显示完整的CSS工具类，当你悬停在他们。</li>
<li>高亮显示--这样使用自定义CSS语法的Tailwind特性就可以正确地高亮显示。</li>
</ul>
<h3 id="_1-3-2-辅助插件推荐" tabindex="-1"><a class="header-anchor" href="#_1-3-2-辅助插件推荐"><span>1.3.2 辅助插件推荐</span></a></h3>
<ol>
<li>PostCSS Language Support</li>
</ol>
<p><strong>功能</strong>：为 Tailwind CSS 提供更好的语法高亮和自动格式化功能。</p>
<p><strong>作用</strong>：Tailwind CSS 基于 PostCSS 构建，该插件为 Tailwind 配置文件提供了更佳的语法支持。它可以识别 Tailwind CSS 的特性，使得代码看起来更清晰，更便于排查错误。</p>
<p><strong>使用场景</strong>：适合在 <code v-pre>tailwind.config.js</code> 或其他配置文件中编辑复杂配置时使用。例如，添加新的颜色、字体等自定义配置时，插件会帮助确保语法正确。</p>
<ol start="2">
<li>Headwind</li>
</ol>
<p><strong>功能</strong>：自动排序 Tailwind CSS 类名。</p>
<p><strong>作用</strong>：在 Tailwind 中，类名的顺序对样式渲染有影响。<code v-pre>Headwind</code> 会根据官方建议自动对类名进行排序，确保代码一致性和样式准确性。</p>
<p><strong>示例</strong>：如果你的 <code v-pre>class</code> 属性值是 <code v-pre>p-4 bg-blue-500 text-center text-white</code>，Headwind 会自动调整为 <code v-pre>bg-blue-500 p-4 text-center text-white</code>，确保逻辑清晰。</p>
<p><strong>使用场景</strong>：适合需要规范代码风格和大团队协作的项目，使得代码更具可读性，减少手动排序的工作量。</p>
<ol start="3">
<li>CSS Peek</li>
</ol>
<p><strong>功能</strong>：快速查看 Tailwind CSS 类的定义和实现。</p>
<p><strong>作用</strong>：<code v-pre>CSS Peek</code> 可以让你在 Tailwind 类名上点击跳转，快速查看具体样式定义，方便了解类的实际效果。它特别适用于查看定制的 Tailwind 配置中的类名和全局样式。</p>
<p><strong>使用场景</strong>：适合在大型项目中需要快速查找和理解自定义样式的场景。对调试和样式修改非常有帮助。例如，若你在 <code v-pre>class=&quot;text-primary&quot;</code> 中定义了一个自定义颜色 <code v-pre>primary</code>，使用 <code v-pre>CSS Peek</code> 可以直接查看颜色定义。</p>
<ol start="4">
<li>Color Highlight</li>
</ol>
<p><strong>功能</strong>：为颜色类添加颜色块预览。</p>
<p><strong>作用</strong>：Color Highlight 能在 VSCode 中直观地展示颜色类效果，帮助你快速识别每个颜色类的具体颜色。</p>
<p><strong>使用场景</strong>：适合对颜色敏感的界面设计，或者复杂配色项目中使用。例如，当使用 <code v-pre>bg-red-500</code> 类名时，插件会在旁边展示红色小方块预览，方便选择颜色搭配。</p>
<h3 id="_1-3-3-补充" tabindex="-1"><a class="header-anchor" href="#_1-3-3-补充"><span>1.3.3 补充</span></a></h3>
<ol>
<li>Emmet 设置</li>
</ol>
<p>在 HTML 和 JSX 中使用 Emmet 设置，可以加速开发。可以在 VSCode 设置中将 JSX 文件的 Emmet 语言配置为 <code v-pre>javascript</code>，便于快速使用 Tailwind 类。</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line"><span class="token property">"emmet.includeLanguages"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"javascript"</span><span class="token operator">:</span> <span class="token string">"javascriptreact"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>Tailwind Docs</li>
</ol>
<p>虽然不是 VSCode 插件，但 Tailwind Docs（<a href="https://tailwindcss.com/docs" target="_blank" rel="noopener noreferrer">官方文档</a>）是使用 Tailwind CSS 时必不可少的工具。官方文档提供了每个类的详尽说明和示例，便于查找和理解 Tailwind 的各类特性和用法。</p>
<h3 id="_1-3-4-不支持自定义css" tabindex="-1"><a class="header-anchor" href="#_1-3-4-不支持自定义css"><span>1.3.4 不支持自定义css</span></a></h3>
<p>出现了 <code v-pre>Unknown at Rules</code> 不能识别@theme的问题</p>
<p>设置-&gt; 输入<code v-pre>html Unknown</code> -&gt; 选择CSS -&gt; <code v-pre>Unknown at Rules</code>选项设置为ignore</p>
<p><img src="/style/pre_defined_css/Tailwind/001.png" alt=""></p>
<h2 id="其他框架的集成" tabindex="-1"><a class="header-anchor" href="#其他框架的集成"><span>其他框架的集成</span></a></h2>
<p><a href="https://tailwindcss.com/docs/installation/framework-guides" target="_blank" rel="noopener noreferrer">点击进入</a></p>
<p><img src="/style/pre_defined_css/Tailwind/002.png" alt=""></p>
</div></template>


