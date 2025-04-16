<template><div><h1 id="一、使用工具与安装插件" tabindex="-1"><a class="header-anchor" href="#一、使用工具与安装插件"><span>一、使用工具与安装插件</span></a></h1>
<h2 id="_1-1-使用方式" tabindex="-1"><a class="header-anchor" href="#_1-1-使用方式"><span>1.1 使用方式：</span></a></h2>
<ol>
<li>安装ruby环境进行使用</li>
<li>使用开发工具的sass插件进行使用</li>
</ol>
<h2 id="_1-2-以vscode方式使用" tabindex="-1"><a class="header-anchor" href="#_1-2-以vscode方式使用"><span>1.2 以vscode方式使用</span></a></h2>
<ol>
<li>安装插件</li>
</ol>
<p><img src="/style/pre_compile_css/scss/001.png" alt=""></p>
<ol start="2">
<li>进入配置文件</li>
</ol>
<p><img src="/style/pre_compile_css/scss/002.png" alt=""></p>
<ol start="3">
<li>插件设置</li>
</ol>
<p><a href="https://github.com/ritwickdey/vscode-live-sass-compiler/blob/master/docs/settings.md" target="_blank" rel="noopener noreferrer">插件设置文档</a></p>
<ol start="4">
<li>自己的配置(工作区设置)</li>
</ol>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"liveSassCompile.settings.formats"</span><span class="token operator">:</span><span class="token punctuation">[</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">            <span class="token comment">/*</span>
<span class="line">            :nexted -嵌套模式</span>
<span class="line">            :expanded - 展开格式</span>
<span class="line">            :compact - 紧凑模式</span>
<span class="line">            :compressed - 压缩格式</span>
<span class="line">            */</span></span>
<span class="line">            <span class="token property">"format"</span><span class="token operator">:</span> <span class="token string">"expanded"</span><span class="token punctuation">,</span> <span class="token comment">//可定制的出口css样式(expanded,compact,compressed,nested)</span></span>
<span class="line">            <span class="token property">"extensionName"</span><span class="token operator">:</span> <span class="token string">".css"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"savePath"</span><span class="token operator">:</span> <span class="token string">"~/../css"</span> <span class="token comment">// 为null为当前目录</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token comment">/*排除目录*/</span></span>
<span class="line">    <span class="token property">"liveSassCompile.settings.excludeList"</span><span class="token operator">:</span> <span class="token punctuation">[</span> </span>
<span class="line">        <span class="token string">"**/node_modules/**"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">".vscode/**"</span> </span>
<span class="line">    <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token comment">/* 是否生成对应的map*/</span></span>
<span class="line">    <span class="token property">"liveSassCompile.settings.generateMap"</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token comment">/* 是否添加兼容前缀，例如 ： --webkit-  -moz- ...等*/</span></span>
<span class="line">    <span class="token property">"liveSassCompile.settings.autoprefix"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token string">"> 1%"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">"last 2 versions"</span></span>
<span class="line">    <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-3-监控编译文件" tabindex="-1"><a class="header-anchor" href="#_1-3-监控编译文件"><span>1.3 监控编译文件</span></a></h2>
<p>安装后，新建scss文件，在vscode底部状态栏中点击watch sass，此时状态为 Watching ，即可自动解析sass为css文件。</p>
<p><img src="/style/pre_compile_css/scss/003.png" alt=""></p>
</div></template>


