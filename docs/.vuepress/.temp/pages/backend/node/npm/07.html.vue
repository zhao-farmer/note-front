<template><div><h1 id="七、c‌npm" tabindex="-1"><a class="header-anchor" href="#七、c‌npm"><span>七、c‌npm</span></a></h1>
<p>cnpm（中国npm）是一个Node.js包管理器npm的镜像版本，主要用于解决在中国大陆使用npm时因网络问题导致的下载缓慢问题。‌</p>
<h2 id="_7-1-安装cnpm" tabindex="-1"><a class="header-anchor" href="#_7-1-安装cnpm"><span>7.1 安装cnpm</span></a></h2>
<p>‌全局安装cnpm‌：打开终端或命令提示符，运行以下命令来全局安装cnpm：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> cnpm <span class="token parameter variable">--registry</span><span class="token operator">=</span>https://registry.npmmirror.com</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>或者使用淘宝的镜像源：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> cnpm <span class="token parameter variable">--registry</span><span class="token operator">=</span>https://registry.npm.taobao.org</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>‌验证安装‌：安装完成后，可以通过输入 cnpm -v 来检查是否安装成功，如果显示版本号，则表示安装成功‌。</p>
<h2 id="_7-2-使用cnpm" tabindex="-1"><a class="header-anchor" href="#_7-2-使用cnpm"><span>7.2 使用cnpm</span></a></h2>
<p>‌安装包‌：使用cnpm安装包与使用npm类似，只需将 npm 替换为 cnpm。例如，安装一个包可以这样操作：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">cnpm <span class="token function">install</span> <span class="token punctuation">[</span>package_name<span class="token punctuation">]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>这里的 [package_name] 是你想要安装的npm包名‌</p>
<p>‌其他命令‌：cnpm的其他命令与npm相同，例如：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token comment"># 列出已安装的包</span></span>
<span class="line">cnpm list</span>
<span class="line"><span class="token comment"># 更新所有依赖包</span></span>
<span class="line">cnpm update</span>
<span class="line"><span class="token comment"># 卸载一个包</span></span>
<span class="line">cnpm uninstall <span class="token punctuation">[</span>package_name<span class="token punctuation">]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-3-配置环境变量" tabindex="-1"><a class="header-anchor" href="#_8-3-配置环境变量"><span>8.3 配置环境变量</span></a></h2>
<p>如果在安装完成后出现 <code v-pre>cnpm</code> 不是内部或外部命令的错误，需要配置环境变量。
通常需要将 <code v-pre>cnpm</code> 的安装路径添加到系统的 <code v-pre>PATH</code> 环境变量中。
默认情况下，<code v-pre>cnpm</code> 安装在 <code v-pre>node_global</code> 目录下，通常位于Node.js的安装目录下。
将该路径添加到 <code v-pre>PATH</code> 环境变量中即可解决此问题‌</p>
</div></template>


