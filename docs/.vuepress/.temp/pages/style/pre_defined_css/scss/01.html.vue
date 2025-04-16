<template><div><h1 id="一、使用工具与安装插件" tabindex="-1"><a class="header-anchor" href="#一、使用工具与安装插件"><span>一、使用工具与安装插件</span></a></h1>
<p>1.使用方式：
Ⅰ.安装ruby环境进行使用
Ⅱ.使用开发工具的sass插件进行使用
2.以vscode方式使用
Ⅰ、安装插件</p>
<p>Ⅱ、进入配置文件</p>
<p>Ⅲ、插件设置
插件设置文档
https://github.com/ritwickdey/vscode-live-sass-compiler/blob/master/docs/settings.md
自己的配置</p>
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
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


