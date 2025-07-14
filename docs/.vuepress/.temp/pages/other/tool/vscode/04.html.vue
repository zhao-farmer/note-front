<template><div><h1 id="四、自己总结的技巧" tabindex="-1"><a class="header-anchor" href="#四、自己总结的技巧"><span>四、自己总结的技巧</span></a></h1>
<h2 id="_4-1-多行选择" tabindex="-1"><a class="header-anchor" href="#_4-1-多行选择"><span>4.1 多行选择</span></a></h2>
<h3 id="_4-1-1-单词多行选中" tabindex="-1"><a class="header-anchor" href="#_4-1-1-单词多行选中"><span>4.1.1 单词多行选中</span></a></h3>
<ol>
<li>多行相同单词选中-01</li>
</ol>
<p>选择多个，同时操作(批量选中局部匹配项——同一个变量)————ctrl+D</p>
<ol start="2">
<li>多行相同单词选中-02</li>
</ol>
<p>批量选中全局匹配项——ctrl + shift + L</p>
<ol start="3">
<li>通过正则的方式配置所有行首</li>
</ol>
<div class="language-markdown line-numbers-mode" data-highlighter="prismjs" data-ext="md"><pre v-pre><code><span class="line">ctrl + F 直接替换 ^ 表示行头 $ 表示行尾</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="4">
<li>多行不同单词选中</li>
</ol>
<p>Alt + 双击单词 后续可复制粘贴</p>
<h3 id="_4-1-2-结构多行选中" tabindex="-1"><a class="header-anchor" href="#_4-1-2-结构多行选中"><span>4.1.2 结构多行选中</span></a></h3>
<ol>
<li>根据鼠标拖动选中多列</li>
</ol>
<p>同时选中多列——先点击某一位置，按住 shift + alt ，再使用鼠标拖动，也可以出现竖直的列光标，可以同时选中多列：</p>
<ol start="2">
<li>根据上下键选择多列通过上下键选择多行——ctrl +alt + 上/下</li>
</ol>
<h3 id="_4-1-3-光标多行选择" tabindex="-1"><a class="header-anchor" href="#_4-1-3-光标多行选择"><span>4.1.3 光标多行选择</span></a></h3>
<ol>
<li>鼠标点击出现多个光标</li>
</ol>
<p>按住 Alt，用鼠标左键点击，可以出现多个光标.</p>
<ol start="2">
<li>同时选中所有行的末尾</li>
</ol>
<p>首先通过 ctrl + a 选中全部，然后通过 shift + alt + i 选择所有行的末尾</p>
<h2 id="_4-2-格式化" tabindex="-1"><a class="header-anchor" href="#_4-2-格式化"><span>4.2 格式化</span></a></h2>
<h3 id="_4-2-1-自动保持代码格式化" tabindex="-1"><a class="header-anchor" href="#_4-2-1-自动保持代码格式化"><span>4.2.1 自动保持代码格式化</span></a></h3>
<ol>
<li>
<p>下载插件 <code v-pre>Prettier - Code formatter</code></p>
</li>
<li>
<p>vscode 配置</p>
</li>
</ol>
<p><img src="/other/tool/vscode/011.png" alt=""></p>
<p>配置自动保存</p>
<p><img src="/other/tool/vscode/012.png" alt=""></p>
<p>配置自动格式化</p>
<p><img src="/other/tool/vscode/013.png" alt=""></p>
<ol start="3">
<li>无法自动格式化</li>
</ol>
<p>当代码被多个插件控制格式化，可以使用 <code v-pre>alt+shift+f</code> 引出配置</p>
<h3 id="_4-2-2-格式化最大长度" tabindex="-1"><a class="header-anchor" href="#_4-2-2-格式化最大长度"><span>4.2.2 格式化最大长度</span></a></h3>
<p>设置每行的长度，防止不想格式化的代码也格式化</p>
<ol>
<li>原始代码</li>
</ol>
<p><img src="/other/tool/vscode/014.png" alt=""></p>
<ol start="2">
<li>寻找配置</li>
</ol>
<p><img src="/other/tool/vscode/015.png" alt=""></p>
<ol start="3">
<li>设置最大宽度</li>
</ol>
<p><img src="/other/tool/vscode/016.png" alt=""></p>
<h2 id="_4-3-文件目录梯状显示" tabindex="-1"><a class="header-anchor" href="#_4-3-文件目录梯状显示"><span>4.3 文件目录梯状显示</span></a></h2>
<p>文件夹不再使用紧凑型显示</p>
<p><img src="/other/tool/vscode/017.png" alt=""></p>
</div></template>


