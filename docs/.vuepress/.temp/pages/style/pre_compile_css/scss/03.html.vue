<template><div><h1 id="三、代码注释" tabindex="-1"><a class="header-anchor" href="#三、代码注释"><span>三、代码注释</span></a></h1>
<p>支持标准的 Css 的注释语法，单行注释 “//” 与多行注释 “/* */”。注释在 .scss 中的规则：</p>
<ol>
<li>单行注释，不会解析到 .css 文件中；</li>
<li>如果选择的输出格式是 compressed ，则所有的注释信息都不会解析出来；</li>
<li>在多行注释中添加 “!”，则可保留这条注释到压缩文件中，此方法主要用于文件的版权声明；</li>
<li>多行注释中可以添加插值语句 (interpolation)</li>
</ol>
<div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss"><pre v-pre><code><span class="line"><span class="token comment">// 单行注释</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/*</span>
<span class="line"> * 多行注释 */</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/*!</span>
<span class="line"> * 版权声明</span>
<span class="line"> * 作者: #{#author} */</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


