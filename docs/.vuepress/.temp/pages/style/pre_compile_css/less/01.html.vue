<template><div><h1 id="一、使用工具与安装插件" tabindex="-1"><a class="header-anchor" href="#一、使用工具与安装插件"><span>一、使用工具与安装插件</span></a></h1>
<h2 id="_1-1-使用方式" tabindex="-1"><a class="header-anchor" href="#_1-1-使用方式"><span>1.1 使用方式：</span></a></h2>
<ol>
<li>
<p>使用less.min.js文件</p>
</li>
<li>
<p>使用开发工具的sass插件进行使用</p>
</li>
</ol>
<h2 id="_1-2-以vscode方式使用" tabindex="-1"><a class="header-anchor" href="#_1-2-以vscode方式使用"><span>1.2  以vscode方式使用</span></a></h2>
<ol>
<li>安装插件</li>
</ol>
<p><img src="/style/pre_compile_css/less/001.png" alt=""></p>
<ol start="2">
<li>进行配置</li>
</ol>
<p><img src="/style/pre_compile_css/less/002.png" alt=""></p>
<ol start="3">
<li>插件设置</li>
</ol>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// Easy LESS配置</span></span>
<span class="line">    <span class="token property">"less.compile"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">"compress"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span><span class="token comment">//是否压缩</span></span>
<span class="line">        <span class="token property">"sourceMap"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span><span class="token comment">//是否生成map文件，有了这个可以在调试台看到less行数</span></span>
<span class="line">        <span class="token comment">// "out": true, // 是否输出css文件，false为不输出，千万不要是false 也可以输出目录</span></span>
<span class="line">        <span class="token property">"out"</span><span class="token operator">:</span> <span class="token string">"../css/"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"outExt"</span><span class="token operator">:</span> <span class="token string">".css"</span><span class="token punctuation">,</span> <span class="token comment">// 输出文件的后缀,小程序可以写'.wxss'</span></span>
<span class="line">      </span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-3-编译文件" tabindex="-1"><a class="header-anchor" href="#_1-3-编译文件"><span>1.3 编译文件</span></a></h2>
<p>less文件保存后直接会生成css文件。</p>
</div></template>


