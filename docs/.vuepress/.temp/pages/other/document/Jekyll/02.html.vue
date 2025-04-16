<template><div><h1 id="二、安装与测试" tabindex="-1"><a class="header-anchor" href="#二、安装与测试"><span>二、安装与测试</span></a></h1>
<p>Jekyll 网站 提供了 Linux、MacOS 和 Windows 安装说明。<a href="https://jekyllrb.com/docs/" target="_blank" rel="noopener noreferrer">可点击跳转到官网查看</a></p>
<p>一般情况下，我们会将Jekyll项目拉取到本地，编写，调试，然后再推送到仓库上。
那么，我们有必要了解下如何在本地调试Jekyll项目。</p>
<h2 id="_2-1-配置ruby环境" tabindex="-1"><a class="header-anchor" href="#_2-1-配置ruby环境"><span>2.1 配置Ruby环境</span></a></h2>
<p>在 Windows 下配置 Ruby 环境，安装 RubyInstaller 即可。</p>
<p>RubyInstaller 是一个基于 Windows 的安装程序，包括了 Ruby、运行环境等。</p>
<p>从 <a href="https://rubyinstaller.org/downloads/" target="_blank" rel="noopener noreferrer">RubyInstaller Downloads</a>下载 Ruby+Devkit，选择推荐版本，使用默认配置安装。</p>
<p><img src="/other/version/jekyll/001.png" alt=""></p>
<p>安装完成之后，CMD 中输入 ruby -v 或者 gem -v，有输出版本即代表安装成功。</p>
<p><img src="/other/version/jekyll/002.png" alt=""></p>
<h2 id="_2-2-安装-jekyll" tabindex="-1"><a class="header-anchor" href="#_2-2-安装-jekyll"><span>2.2 安装 Jekyll</span></a></h2>
<p>有了 Ruby 环境以及 RubyGems 就可以安装 Jekyll。
在命令行输入如下命令安装Jekyll：gem install jekyll。</p>
<p><img src="/other/version/jekyll/003.png" alt=""></p>
<p>安装之后，输入 jekyll -v 检查是否安装成功。</p>
<p><img src="/other/version/jekyll/004.png" alt=""></p>
<h2 id="_2-3-构建jekyll项目" tabindex="-1"><a class="header-anchor" href="#_2-3-构建jekyll项目"><span>2.3 构建Jekyll项目</span></a></h2>
<p>注意：下文将讲述如何使用GitLink平台一键构建及部署Jekyll项目。</p>
<p>创建一个全新的工程，执行如下命令：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">jekyll new learn-jekyll</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>执行完成之后，我们就成功创建了一个名为 learn-jekyll 的 Jekyll 项目。</p>
<h2 id="_2-4-启动-jekyll-服务" tabindex="-1"><a class="header-anchor" href="#_2-4-启动-jekyll-服务"><span>2.4 启动 Jekyll 服务</span></a></h2>
<p>Jekyll 环境搭建完成之后，进入到项目目录下（有 _config.yml 文件的目录），</p>
<p>输入启动命令：jekyll serve 或者 jekyll s。</p>
<p>出现异常可能是缺少这些组件</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">gem <span class="token function">install</span> minima</span>
<span class="line">gem <span class="token function">install</span> tzinfo</span>
<span class="line">gem <span class="token function">install</span> tzinfo-data</span>
<span class="line">gem <span class="token function">install</span> wdm</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>若没有异常，启动服务后的默认端口为 4000，浏览器地址栏输入 localhost:4000 即可访问。</p>
<p><img src="/other/version/jekyll/005.png" alt=""></p>
<p>启动服务时使用命令：jekyll s --drafts，可以同时访问草稿（_drafts）目录下的文章。</p>
</div></template>


