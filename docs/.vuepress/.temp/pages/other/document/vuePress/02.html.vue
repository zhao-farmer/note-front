<template><div><h1 id="二、配置文件修改" tabindex="-1"><a class="header-anchor" href="#二、配置文件修改"><span>二、配置文件修改</span></a></h1>
<p>VuePress 的配置文件主要用于存储和设置网站的全局配置、主题、插件、样式等‌。</p>
<p>在 VuePress 中，配置文件通常位于 .vuepress 目录下，特别是 config.js 文件，它承载着网站的大部分配置信息。这些配置信息包括但不限于：</p>
<ul>
<li>
<p>‌网站信息配置‌：如网站的标题、描述、基础路径等，这些信息对于网站的 SEO 和整体展示效果至关重要‌。</p>
</li>
<li>
<p>主题和插件配置‌：VuePress 支持丰富的主题和插件，通过配置文件，开发者可以选择并配置适合的主题和插件，以满足网站的功能和样式需求‌。</p>
</li>
<li>
<p>导航和侧边栏配置‌：配置文件还可以设置网站的导航栏和侧边栏，这对于提升用户体验和网站的可访问性非常有帮助‌。</p>
</li>
<li>
<p>静态资源和自定义组件‌：在配置文件中，还可以指定静态资源的存放位置和自定义组件的注册方式，这使得开发者能够灵活地管理和使用网站资源‌。</p>
</li>
<li>
<p>此外，VuePress 的配置文件还支持其他多种配置，如自定义样式、模板等，以满足开发者对网站的个性化需求。</p>
</li>
</ul>
<h2 id="_2-1-站点配置" tabindex="-1"><a class="header-anchor" href="#_2-1-站点配置"><span>2.1 站点配置</span></a></h2>
<h3 id="修改配置文件" tabindex="-1"><a class="header-anchor" href="#修改配置文件"><span>修改配置文件</span></a></h3>
<p>在 <code v-pre>docs/.vuepress/config.js</code> 添加配置</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> viteBundler <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/bundler-vite'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defaultTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/theme-default'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vuepress'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">bundler</span><span class="token operator">:</span> <span class="token function">viteBundler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line highlighted">  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line highlighted">  <span class="token comment">// 部署站点的基础路径 </span></span>
<span class="line highlighted">  <span class="token literal-property property">base</span><span class="token operator">:</span><span class="token string">'/'</span><span class="token punctuation">,</span></span>
<span class="line highlighted">  <span class="token comment">// 站点的语言</span></span>
<span class="line highlighted">  <span class="token literal-property property">lang</span><span class="token operator">:</span> <span class="token string">'zh-CN'</span><span class="token punctuation">,</span></span>
<span class="line highlighted">  <span class="token comment">// 站点的标题</span></span>
<span class="line highlighted">  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'你好， VuePress ！'</span><span class="token punctuation">,</span></span>
<span class="line highlighted">  <span class="token comment">// 站点的描述</span></span>
<span class="line">  <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">'这是我的第一个 VuePress 站点'</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="运行结果" tabindex="-1"><a class="header-anchor" href="#运行结果"><span>运行结果</span></a></h3>
<p><img src="/other/document/vitepress/vuepres-02.jpg" alt=""></p>
<h2 id="_2-2-主题配置" tabindex="-1"><a class="header-anchor" href="#_2-2-主题配置"><span>2.2 主题配置</span></a></h2>
<p>配置文档：<a href="https://ecosystem.vuejs.press/zh/themes/default/config.html" target="_blank" rel="noopener noreferrer">vuePress主题配置查看</a></p>
<h3 id="_2-2-1-侧边栏与导航栏" tabindex="-1"><a class="header-anchor" href="#_2-2-1-侧边栏与导航栏"><span>2.2.1 侧边栏与导航栏</span></a></h3>
<ul>
<li>
<p>导航栏配置</p>
<ul>
<li>
<p>设置为 false 可以禁用导航栏。</p>
</li>
<li>
<p>为了配置导航栏元素，你可以将其设置为 导航栏数组 ，其中的每个元素是 NavbarLink 对象、 NavbarGroup 对象、或者字符串：</p>
</li>
<li>
<p>NavbarLink 对象应该有一个 text 字段和一个 link 字段，还有一个可选的 activeMatch 字段。</p>
</li>
<li>
<p>NavbarGroup 对象应该有一个 text 字段和一个 children 字段，还有一个可选的 prefix 字段。 children 字段同样是一个 导航栏数组，而 prefix 会作为 导航栏数组 的路径前缀。</p>
</li>
<li>
<p>字符串应为目标页面文件的路径。它将会被转换为 NavbarLink 对象，将页面标题作为 text ，将页面路由路径作为 link 。</p>
</li>
</ul>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> viteBundler <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@vuepress/bundler-vite"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defaultTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@vuepress/theme-default"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vuepress"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">bundler</span><span class="token operator">:</span> <span class="token function">viteBundler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 部署站点的基础路径</span></span>
<span class="line">    <span class="token literal-property property">base</span><span class="token operator">:</span> <span class="token string">"/"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token comment">// 站点的语言</span></span>
<span class="line">    <span class="token literal-property property">lang</span><span class="token operator">:</span> <span class="token string">"zh-CN"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token comment">// 站点的标题</span></span>
<span class="line">    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"你好， VuePress ！"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token comment">// 站点的描述</span></span>
<span class="line">    <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">"这是我的第一个 VuePress 站点"</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line highlighted">    <span class="token comment">// 主题配置</span></span>
<span class="line highlighted">    <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line highlighted">        <span class="token comment">// 配置导航栏</span></span>
<span class="line highlighted">        <span class="token literal-property property">navbar</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line highlighted">            <span class="token comment">// NavbarLink</span></span>
<span class="line highlighted">            <span class="token punctuation">{</span></span>
<span class="line highlighted">                <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">"单选项"</span><span class="token punctuation">,</span></span>
<span class="line highlighted">                <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">"/test01/"</span><span class="token punctuation">,</span></span>
<span class="line highlighted">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line highlighted"></span>
<span class="line highlighted">            <span class="token punctuation">{</span></span>
<span class="line highlighted">              <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">"多选项"</span><span class="token punctuation">,</span></span>
<span class="line highlighted">              <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line highlighted">                <span class="token punctuation">{</span></span>
<span class="line highlighted">                  <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">"测试二"</span><span class="token punctuation">,</span></span>
<span class="line highlighted">                  <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">"/test02/"</span><span class="token punctuation">,</span></span>
<span class="line highlighted">                <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line highlighted"></span>
<span class="line highlighted">                <span class="token punctuation">{</span></span>
<span class="line highlighted">                  <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">"测试三"</span><span class="token punctuation">,</span></span>
<span class="line highlighted">                  <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">"/test03/"</span><span class="token punctuation">,</span></span>
<span class="line highlighted">                <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line highlighted">              <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line highlighted">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line highlighted">            <span class="token comment">// NavbarGroup</span></span>
<span class="line highlighted">            <span class="token punctuation">{</span></span>
<span class="line highlighted">                <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">"直接访问"</span><span class="token punctuation">,</span></span>
<span class="line highlighted">                <span class="token literal-property property">prefix</span><span class="token operator">:</span> <span class="token string">"/test04/"</span><span class="token punctuation">,</span></span>
<span class="line highlighted">                <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"foo"</span><span class="token punctuation">,</span> <span class="token string">"bar"</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line highlighted">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line highlighted">            <span class="token comment">// 字符串 - 页面文件路径</span></span>
<span class="line highlighted">            <span class="token string">"/test05/README.md"</span><span class="token punctuation">,</span></span>
<span class="line highlighted">        <span class="token punctuation">]</span><span class="token punctuation">,</span>  </span>
<span class="line highlighted">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>侧边栏配置</p>
<ul>
<li>
<p>你可以通过页面的 sidebar frontmatter 来覆盖这个全局配置。</p>
</li>
<li>
<p>设置为 false 可以禁用侧边栏。</p>
</li>
<li>
<p>如果你设置为 'heading'，侧边栏会根据页面标题自动生成。</p>
</li>
<li>
<p>为了手动配置侧边栏元素，你可以将其设置为 侧边栏数组 ，其中的每个元素是一个 SidebarItem 对象或者一个字符串：</p>
<ul>
<li>SidebarItem 对象应该有一个 text 字段，有一个可选的 link 字段、一个可选的 children 字段、一个可选的 collapsible 字段和一个可选的 prefix 字段。 children 字段同样是一个 侧边栏数组，prefix 会作为每个子项目的路径前缀。 collapsible 字段来控制它是否可折叠。</li>
<li>字符串应为目标页面文件的路径。它将会被转换为 SidebarItem 对象，将页面标题作为 text ，将页面路由路径作为 link ，并根据页面小标题自动生成 children 。</li>
</ul>
</li>
<li>
<p>如果你想在不同子路径中使用不同的侧边栏，你可以将该配置项设置为 侧边栏对象 ：</p>
<ul>
<li>Key 为路径前缀。</li>
<li>Value 为 侧边栏数组 或 &quot;heading&quot; 以自动为相应路径生成基于标题的侧边栏。</li>
</ul>
</li>
</ul>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> viteBundler <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@vuepress/bundler-vite"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defaultTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@vuepress/theme-default"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vuepress"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">bundler</span><span class="token operator">:</span> <span class="token function">viteBundler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 部署站点的基础路径</span></span>
<span class="line">    <span class="token literal-property property">base</span><span class="token operator">:</span> <span class="token string">"/"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token comment">// 站点的语言</span></span>
<span class="line">    <span class="token literal-property property">lang</span><span class="token operator">:</span> <span class="token string">"zh-CN"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token comment">// 站点的标题</span></span>
<span class="line">    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"你好， VuePress ！"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token comment">// 站点的描述</span></span>
<span class="line">    <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">"这是我的第一个 VuePress 站点"</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 主题配置</span></span>
<span class="line">    <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// 配置导航栏</span></span>
<span class="line">        <span class="token literal-property property">navbar</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">            <span class="token comment">// NavbarLink</span></span>
<span class="line">            <span class="token punctuation">{</span></span>
<span class="line">                <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">"单选项"</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">"/test01/"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">            <span class="token punctuation">{</span></span>
<span class="line">              <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">"多选项"</span><span class="token punctuation">,</span></span>
<span class="line">              <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">                <span class="token punctuation">{</span></span>
<span class="line">                  <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">"测试二"</span><span class="token punctuation">,</span></span>
<span class="line">                  <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">"/test02/"</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">                <span class="token punctuation">{</span></span>
<span class="line">                  <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">"测试三"</span><span class="token punctuation">,</span></span>
<span class="line">                  <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">"/test03/"</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">              <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token comment">// NavbarGroup</span></span>
<span class="line">            <span class="token punctuation">{</span></span>
<span class="line">                <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">"直接访问"</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token literal-property property">prefix</span><span class="token operator">:</span> <span class="token string">"/test04/"</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"foo"</span><span class="token punctuation">,</span> <span class="token string">"bar"</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token comment">// 字符串 - 页面文件路径</span></span>
<span class="line">            <span class="token string">"/test05/README.md"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line highlighted">        <span class="token comment">// 侧边栏</span></span>
<span class="line highlighted">        <span class="token literal-property property">sidebar</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">            <span class="token string-property property">'/test01/'</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line highlighted">                <span class="token punctuation">{</span></span>
<span class="line highlighted">                    <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'第一部分'</span><span class="token punctuation">,</span></span>
<span class="line highlighted">                    <span class="token comment">// 相对路径会自动追加子路径前缀</span></span>
<span class="line highlighted">                    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line highlighted">                        <span class="token string">"childrenTest01.md"</span><span class="token punctuation">,</span></span>
<span class="line highlighted">                        <span class="token string">"childrenTest02.md"</span></span>
<span class="line highlighted">                    <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line highlighted">                <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line highlighted">                <span class="token punctuation">{</span></span>
<span class="line highlighted">                    <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'第二部分'</span><span class="token punctuation">,</span></span>
<span class="line highlighted">                    <span class="token comment">// 相对路径会自动追加子路径前缀</span></span>
<span class="line highlighted">                    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line highlighted">                        <span class="token string">"childrenTest03.md"</span><span class="token punctuation">,</span></span>
<span class="line highlighted">                        <span class="token string">"childrenTest04.md"</span></span>
<span class="line highlighted">                    <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line highlighted">                <span class="token punctuation">}</span></span>
<span class="line highlighted">            <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line highlighted">            <span class="token string-property property">'/test02/'</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line highlighted">                <span class="token punctuation">{</span></span>
<span class="line highlighted">                    <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'test02测试'</span><span class="token punctuation">,</span></span>
<span class="line highlighted">                    <span class="token comment">// 相对路径会自动追加子路径前缀</span></span>
<span class="line highlighted">                    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line highlighted">                        <span class="token string">"childrenTest01.md"</span><span class="token punctuation">,</span></span>
<span class="line highlighted">                        <span class="token string">"childrenTest02.md"</span></span>
<span class="line highlighted">                    <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line highlighted">                <span class="token punctuation">}</span></span>
<span class="line highlighted">            <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line highlighted">            <span class="token string-property property">'/test03/'</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line highlighted">                <span class="token punctuation">{</span></span>
<span class="line highlighted">                    <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'test03测试'</span><span class="token punctuation">,</span></span>
<span class="line highlighted">                    <span class="token comment">// 相对路径会自动追加子路径前缀</span></span>
<span class="line highlighted">                    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line highlighted">                        <span class="token string">"childrenTest01.md"</span><span class="token punctuation">,</span></span>
<span class="line highlighted">                        <span class="token string">"childrenTest02.md"</span></span>
<span class="line highlighted">                    <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line highlighted">                <span class="token punctuation">}</span></span>
<span class="line highlighted">            <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line highlighted">        <span class="token punctuation">}</span>    </span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>页面结构调整
<img src="/other/document/vitepress/vuepres-03.jpg" alt=""></li>
<li>运行结果
<img src="/other/document/vitepress/vuepres-04.jpg" alt=""></li>
</ul>
<blockquote>
<p>注意：link类型的跳转 必须都要有 README.md 文件，单击后是跳转到这个纹理里的</p>
</blockquote>
<h3 id="_2-2-2-其他配置" tabindex="-1"><a class="header-anchor" href="#_2-2-2-其他配置"><span>2.2.2 其他配置</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// 首页的路径</span></span>
<span class="line"><span class="token literal-property property">home</span><span class="token operator">:</span><span class="token string">'/'</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token comment">//  指定 Logo 图片的替代文字。</span></span>
<span class="line"><span class="token literal-property property">logoAlt</span><span class="token operator">:</span><span class="token string">'赵'</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token comment">// Logo图片的URL public 文件路径</span></span>
<span class="line"><span class="token literal-property property">logo</span><span class="token operator">:</span><span class="token string">'/images/sum.jpeg'</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token comment">// 文档源文件存放在仓库中的目录名。 可以不使用docs</span></span>
<span class="line"><span class="token literal-property property">docsDir</span><span class="token operator">:</span><span class="token string">''</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token comment">// 上次更新 配合git使用 读取的是git提交时间</span></span>
<span class="line"><span class="token literal-property property">lastUpdated</span><span class="token operator">:</span> <span class="token string">'上次更新'</span><span class="token punctuation">,</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-3-通用配置与dev配置项" tabindex="-1"><a class="header-anchor" href="#_2-3-通用配置与dev配置项"><span>2.3 通用配置与dev配置项</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"> <span class="token keyword">import</span> <span class="token punctuation">{</span> viteBundler <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@vuepress/bundler-vite"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defaultTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@vuepress/theme-default"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vuepress"</span><span class="token punctuation">;</span></span>
<span class="line highlighted"><span class="token keyword">import</span> path <span class="token keyword">from</span> <span class="token string">'path'</span><span class="token punctuation">;</span></span>
<span class="line highlighted"><span class="token keyword">const</span> sourceDir<span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">dirname</span><span class="token punctuation">(</span>__filename<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">bundler</span><span class="token operator">:</span> <span class="token function">viteBundler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  </span>
<span class="line">    <span class="token comment">/* 站点配置 */</span></span>
<span class="line">    <span class="token comment">// 部署站点的基础路径</span></span>
<span class="line">    <span class="token literal-property property">base</span><span class="token operator">:</span> <span class="token string">"/"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token comment">// 站点的语言</span></span>
<span class="line">    <span class="token literal-property property">lang</span><span class="token operator">:</span> <span class="token string">"zh-CN"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token comment">// 站点的标题</span></span>
<span class="line">    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"你好， VuePress ！"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token comment">// 站点的描述</span></span>
<span class="line">    <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">"这是我的第一个 VuePress 站点"</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">/* 主题配置 */</span></span>
<span class="line">    <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// 配置导航栏</span></span>
<span class="line">        <span class="token literal-property property">navbar</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">            <span class="token comment">// NavbarLink</span></span>
<span class="line">            <span class="token punctuation">{</span></span>
<span class="line">                <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">"单选项"</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">"/test01/"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">            <span class="token punctuation">{</span></span>
<span class="line">              <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">"多选项"</span><span class="token punctuation">,</span></span>
<span class="line">              <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">                <span class="token punctuation">{</span></span>
<span class="line">                  <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">"测试二"</span><span class="token punctuation">,</span></span>
<span class="line">                  <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">"/test02/"</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">                <span class="token punctuation">{</span></span>
<span class="line">                  <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">"测试三"</span><span class="token punctuation">,</span></span>
<span class="line">                  <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">"/test03/"</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">              <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token comment">// NavbarGroup</span></span>
<span class="line">            <span class="token punctuation">{</span></span>
<span class="line">                <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">"直接访问"</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token literal-property property">prefix</span><span class="token operator">:</span> <span class="token string">"/test04/"</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"foo"</span><span class="token punctuation">,</span> <span class="token string">"bar"</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token comment">// 字符串 - 页面文件路径</span></span>
<span class="line">            <span class="token string">"/test05/README.md"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token comment">// 侧边栏</span></span>
<span class="line">        <span class="token literal-property property">sidebar</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token string-property property">'/test01/'</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">                <span class="token punctuation">{</span></span>
<span class="line">                    <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'第一部分'</span><span class="token punctuation">,</span></span>
<span class="line">                    <span class="token comment">// 相对路径会自动追加子路径前缀</span></span>
<span class="line">                    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">                        <span class="token string">"childrenTest01.md"</span><span class="token punctuation">,</span></span>
<span class="line">                        <span class="token string">"childrenTest02.md"</span></span>
<span class="line">                    <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token punctuation">{</span></span>
<span class="line">                    <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'第二部分'</span><span class="token punctuation">,</span></span>
<span class="line">                    <span class="token comment">// 相对路径会自动追加子路径前缀</span></span>
<span class="line">                    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">                        <span class="token string">"childrenTest03.md"</span><span class="token punctuation">,</span></span>
<span class="line">                        <span class="token string">"childrenTest04.md"</span></span>
<span class="line">                    <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">            <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">'/test02/'</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">                <span class="token punctuation">{</span></span>
<span class="line">                    <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'test02测试'</span><span class="token punctuation">,</span></span>
<span class="line">                    <span class="token comment">// 相对路径会自动追加子路径前缀</span></span>
<span class="line">                    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">                        <span class="token string">"childrenTest01.md"</span><span class="token punctuation">,</span></span>
<span class="line">                        <span class="token string">"childrenTest02.md"</span></span>
<span class="line">                    <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">            <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">'/test03/'</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">                <span class="token punctuation">{</span></span>
<span class="line">                    <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'test03测试'</span><span class="token punctuation">,</span></span>
<span class="line">                    <span class="token comment">// 相对路径会自动追加子路径前缀</span></span>
<span class="line">                    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">                        <span class="token string">"childrenTest01.md"</span><span class="token punctuation">,</span></span>
<span class="line">                        <span class="token string">"childrenTest02.md"</span></span>
<span class="line">                    <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">            <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">// 首页的路径</span></span>
<span class="line">        <span class="token literal-property property">home</span><span class="token operator">:</span><span class="token string">'/'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token comment">//  指定 Logo 图片的替代文字。</span></span>
<span class="line">        <span class="token literal-property property">logoAlt</span><span class="token operator">:</span><span class="token string">'赵'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token comment">// Logo图片的URL public 文件路径</span></span>
<span class="line">        <span class="token literal-property property">logo</span><span class="token operator">:</span><span class="token string">'/images/sum.jpeg'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token comment">// 文档源文件存放在仓库中的目录名。 可以不使用docs</span></span>
<span class="line">        <span class="token literal-property property">docsDir</span><span class="token operator">:</span><span class="token string">''</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token comment">// 上次更新 配合git使用 读取的是git提交时间</span></span>
<span class="line">        <span class="token literal-property property">lastUpdated</span><span class="token operator">:</span> <span class="token string">'上次更新'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line highlighted">    <span class="token comment">/* 通用配置 */</span></span>
<span class="line highlighted">    <span class="token comment">// 指定 vuepress build 命令的输出目录。</span></span>
<span class="line highlighted">    <span class="token literal-property property">dest</span><span class="token operator">:</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>sourceDir<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/.vuepress/dist</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span></span>
<span class="line highlighted">    <span class="token comment">// 指定临时文件目录。</span></span>
<span class="line highlighted">    <span class="token literal-property property">temp</span><span class="token operator">:</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>sourceDir<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/.vuepress/.temp</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span></span>
<span class="line highlighted">    <span class="token comment">// 指定缓存文件目录。</span></span>
<span class="line highlighted">    <span class="token literal-property property">cache</span><span class="token operator">:</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>sourceDir<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/.vuepress/.cache</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span></span>
<span class="line highlighted">    <span class="token comment">// 指定 Public 文件目录。</span></span>
<span class="line highlighted">    <span class="token keyword">public</span><span class="token operator">:</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>sourceDir<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/.vuepress/public</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span></span>
<span class="line highlighted"></span>
<span class="line highlighted">    <span class="token comment">/* dev配置项 */</span></span>
<span class="line highlighted">    <span class="token comment">// 指定开发服务器的主机名。</span></span>
<span class="line highlighted">    <span class="token literal-property property">host</span><span class="token operator">:</span><span class="token string">'0.0.0.0'</span><span class="token punctuation">,</span></span>
<span class="line highlighted">    <span class="token comment">// 指定开发服务器的端口号。</span></span>
<span class="line highlighted">    <span class="token literal-property property">port</span><span class="token operator">:</span><span class="token number">8080</span><span class="token punctuation">,</span></span>
<span class="line highlighted">    <span class="token comment">//是否在开发服务器启动后打开浏览器。</span></span>
<span class="line highlighted">    <span class="token literal-property property">open</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


