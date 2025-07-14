<template><div><h1 id="一、小程序基础" tabindex="-1"><a class="header-anchor" href="#一、小程序基础"><span>一、小程序基础</span></a></h1>
<h2 id="_1-1-初识微信小程序" tabindex="-1"><a class="header-anchor" href="#_1-1-初识微信小程序"><span>1.1 初识微信小程序</span></a></h2>
<ol>
<li>
<p>小程序介绍</p>
<ul>
<li>微信小程序是一种运行在微信内部的<code v-pre>轻量级</code> 应用程序</li>
<li>在使用小程序时 <code v-pre>不需要下载安装</code>，用户 <code v-pre>扫一扫</code> 或 <code v-pre>搜一下</code> 即可打开应用。它也体现了“用完即走”的理念，用户不用关心安装太多应用的问题。它实现了应用“触手可及”的梦想，应用无处不在，随时可用，但又 <code v-pre>无须安装卸载</code>。</li>
</ul>
</li>
<li>
<p>运行逻辑</p>
</li>
</ol>
<p>APP：</p>

          <code>
          <pre class="mermaid" id="mermaid-l0y8c5l">
            flowchart LR
    A[王者荣耀]-->B[应用商店]
    B-->C[下载与安装]
    C-->D[5v5]
    D-->E{卸载}

          </pre>
          </code>
        <p>小程序：</p>

          <code>
          <pre class="mermaid" id="mermaid-inyyk35">
            flowchart LR
    A[羊了个羊]-->B[扫、搜]
    B-->C[直接使用]
    C-->D[关掉]

          </pre>
          </code>
        <ol start="3">
<li>小程序四大特性
<ul>
<li>无需安装</li>
<li>用完即走</li>
<li>无需卸载</li>
<li>触手可及</li>
</ul>
</li>
</ol>
<h2 id="_1-2-小程序账号注册" tabindex="-1"><a class="header-anchor" href="#_1-2-小程序账号注册"><span>1.2 小程序账号注册</span></a></h2>
<h3 id="_1-2-1-注册准备" tabindex="-1"><a class="header-anchor" href="#_1-2-1-注册准备"><span>1.2.1 注册准备</span></a></h3>
<p>小程序开发 与 网页开发不一样，在开始微信小程序开发之前，需要访问 <a href="https://mp.weixin.qq.com/?token=&amp;lang=zh_CN" target="_blank" rel="noopener noreferrer">微信公众平台</a>，注册一个微信小程序账号。</p>
<p>有了小程序的账号以后，我们才可以开发和管理小程序，后续需要通过该账号进行 开发信息的设置、开发成员的添加，也可以用该账号查看小程序的运营数据。</p>
<ul>
<li>
<p>在申请账号前，我们需要先 准备一个邮箱，该邮箱要求:</p>
<ul>
<li>未被微信公众平台注册!</li>
<li>未被微信开放平台注册!</li>
<li>未被个人微信号绑定过!如果被绑定了需要解绑 或 使用其他邮箱</li>
</ul>
</li>
</ul>
<h3 id="_1-2-2-开始注册" tabindex="-1"><a class="header-anchor" href="#_1-2-2-开始注册"><span>1.2.2 开始注册</span></a></h3>
<ol>
<li><a href="https://mp.weixin.qq.com/" target="_blank" rel="noopener noreferrer">进入官网</a>选择小程序</li>
</ol>
<p><img src="/application/weixin/base/001.png" alt=""></p>
<ol start="2">
<li>前往注册</li>
</ol>
<p><img src="/application/weixin/base/002.png" alt=""></p>
<ol start="3">
<li>获取邮箱验证码</li>
</ol>
<p><img src="/application/weixin/base/003.png" alt=""></p>
<ol start="4">
<li>完善信息后注册</li>
</ol>
<p><img src="/application/weixin/base/004.png" alt=""></p>
<ol start="5">
<li>完善个人相关信息</li>
</ol>
<p><img src="/application/weixin/base/005.png" alt=""></p>
<ol start="6">
<li>进入微信后台页面（注册成功）</li>
</ol>
<p><img src="/application/weixin/base/006.png" alt=""></p>
<h3 id="_1-2-3-完善小程序账号信息" tabindex="-1"><a class="header-anchor" href="#_1-2-3-完善小程序账号信息"><span>1.2.3 完善小程序账号信息</span></a></h3>
<p>需完善的信息</p>
<p><img src="/application/weixin/base/007.png" alt=""></p>
<ol>
<li>完善小程序信息</li>
</ol>
<p><img src="/application/weixin/base/008.png" alt=""></p>
<ol start="2">
<li>小程序类目</li>
</ol>
<p><img src="/application/weixin/base/009.png" alt=""></p>
<p><img src="/application/weixin/base/010.png" alt=""></p>
<p><img src="/application/weixin/base/011.png" alt=""></p>
<blockquote>
<p>注：不能选择小程序游戏，否则就是小游戏了</p>
</blockquote>
<h2 id="_1-3-项目成员与体验成员" tabindex="-1"><a class="header-anchor" href="#_1-3-项目成员与体验成员"><span>1.3 项目成员与体验成员</span></a></h2>
<p>小程序提供了两种不同的成员角色:项目成员 和 体验成员</p>
<ul>
<li>
<p>项目成员:表示参与小程序开发、运营的成员，包括运营者、开发者及数据分析者，项目成员可登陆微信公众后台，管理员可以在成员管理中添加、删除项目成员，并设置项目成员的角色。</p>
</li>
<li>
<p>体验成员:表示参与小程序内测体验的成员，可使用体验版小程序，但不属于项目成员。管理员及项目成员均可添加、删除体验成员。</p>
</li>
</ul>
<p><img src="/application/weixin/base/012.png" alt=""></p>
<p><strong>添加项目成员</strong></p>
<ol>
<li>点击添加按钮</li>
</ol>
<p><img src="/application/weixin/base/013.png" alt=""></p>
<ol start="2">
<li>搜索项目成员的微信号</li>
</ol>
<p><img src="/application/weixin/base/014.png" alt=""></p>
<ol start="3">
<li>管理员账号认证</li>
</ol>
<p><img src="/application/weixin/base/015.png" alt=""></p>
<ol start="4">
<li>载人确认成员</li>
</ol>
<p><img src="/application/weixin/base/016.png" alt=""></p>
<ol start="5">
<li>成员已添加</li>
</ol>
<p><img src="/application/weixin/base/017.png" alt=""></p>
<h2 id="_1-4-开发者id" tabindex="-1"><a class="header-anchor" href="#_1-4-开发者id"><span>1.4 开发者ID</span></a></h2>
<p>微信小程序账号只要开发者满足开发资质都可以进行注册，并且会获得对应的<code v-pre>开发者ID</code>一个完整的<code v-pre>开发者ID</code>由<code v-pre>小程序 ID(AppID)</code>和一个<code v-pre>小程序密钥(AppSecret)</code>组成</p>
<ul>
<li>
<p><code v-pre>小程序 ID</code>: 是小程序在整个微信账号体系内的唯一身份凭证，后续在很多地方都会用到，例如:新建小程序项目、真机调试、发布小程序等操作时，必须有小程序ID。</p>
</li>
<li>
<p><code v-pre>小程序密钥</code>: 是开发者对小程序拥有所有权的凭证，在进行 微信登录、微信支付，或进行发送消息等高级开发时会使用到</p>
</li>
</ul>
<p><img src="/application/weixin/base/018.png" alt=""></p>
<h2 id="_1-5-微信开发者工具" tabindex="-1"><a class="header-anchor" href="#_1-5-微信开发者工具"><span>1.5 微信开发者工具</span></a></h2>
<p>为了帮助开发者简单和高效地开发和调试微信小程序，微信官方提供了 微信开发者工具，利用开发者工具可以很方便地进行小程序开发、代码查看以及编辑、预览和发布等。</p>
<p>微信开发者工具包含三个版本:</p>
<ol>
<li>稳定版:稳定性高，开发中一般推荐大家使用稳定版本</li>
<li>预发布版:稳定性尚可，一般包含新的、大的特性，通过了内部测试</li>
<li>开发版:稳定性差，主要用于尽快修复缺陷和敏捷上线小的特性</li>
</ol>
<blockquote>
<p>注意事项:微信开发者工具必须联网使用!</p>
</blockquote>
<p><a href="https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html" target="_blank" rel="noopener noreferrer">进入微信开发者下载页面</a></p>
<p><img src="/application/weixin/base/019.png" alt=""></p>
<p>安装完成后</p>
<ol>
<li>扫码登录</li>
</ol>
<p><img src="/application/weixin/base/020.png" alt=""></p>
<ol start="2">
<li>进入创建页面</li>
</ol>
<p><img src="/application/weixin/base/021.png" alt=""></p>
<h2 id="_1-6-创建小程序项目" tabindex="-1"><a class="header-anchor" href="#_1-6-创建小程序项目"><span>1.6 创建小程序项目</span></a></h2>
<ol>
<li>开始创建</li>
</ol>
<p><img src="/application/weixin/base/022.png" alt=""></p>
<ol start="2">
<li>配置创建信息</li>
</ol>
<p><img src="/application/weixin/base/023.png" alt=""></p>
<ol start="3">
<li>进入开发页面</li>
</ol>
<p><img src="/application/weixin/base/024.png" alt=""></p>
<h2 id="_1-7-文件和目录结构介绍" tabindex="-1"><a class="header-anchor" href="#_1-7-文件和目录结构介绍"><span>1.7 文件和目录结构介绍</span></a></h2>
<p>一个完整的小程序项目分为两个部分:<code v-pre>主体文件</code>、<code v-pre>页面文件</code></p>
<h3 id="_1-7-1-主体文件" tabindex="-1"><a class="header-anchor" href="#_1-7-1-主体文件"><span>1.7.1 主体文件</span></a></h3>
<p><code v-pre>主体文件</code> 又称 全局文件，能够作用于整个小程序，影响到小程序的每个页面，主体文件必须放到项目的根目录下</p>
<p>主体文件由三部分组成:</p>
<ol>
<li>app.js:小程序入口文件</li>
<li>app.json:小程序的全局配置文件</li>
<li>app.wxss:小程序的全局样式</li>
</ol>
<p><img src="/application/weixin/base/025.png" alt=""></p>
<blockquote>
<p>注意事项:主体文件的名字必须是 app，app,js 和 app.json 文件是必须的!</p>
</blockquote>
<h3 id="_1-7-2-页面文件" tabindex="-1"><a class="header-anchor" href="#_1-7-2-页面文件"><span>1.7.2 页面文件</span></a></h3>
<p><code v-pre>页面文件</code> 是每个页面所需的文件，小程序页面文件都存放在 pages 目录下，一个页面一个文件夹</p>
<p>每个页面通常由四个文件组成，每个文件只对当前页面有效:</p>
<ol>
<li><code v-pre>.js</code>: 页面逻辑</li>
<li><code v-pre>.wxml</code>: 页面结构</li>
<li><code v-pre>.wxss</code>: 页面样式</li>
<li><code v-pre>.json</code>: 小页面配置</li>
</ol>
<p><img src="/application/weixin/base/026.png" alt=""></p>
<blockquote>
<p>注意事项: <code v-pre>.js</code> 文件和 <code v-pre>.wxml</code> 文件是必须的!</p>
</blockquote>
<h3 id="_1-7-3-切换渲染模式" tabindex="-1"><a class="header-anchor" href="#_1-7-3-切换渲染模式"><span>1.7.3 切换渲染模式</span></a></h3>
<p>控制台中打印 可以看到 <code v-pre>Skyline</code> 渲染模式并不成熟</p>
<p><img src="/application/weixin/base/027.png" alt=""></p>
<p>去除 <code v-pre>skyline</code> 渲染模式，默认使用<code v-pre>webview</code>模式</p>
<p><img src="/application/weixin/base/028.png" alt=""></p>
<h3 id="_1-7-4-文件结构介绍" tabindex="-1"><a class="header-anchor" href="#_1-7-4-文件结构介绍"><span>1.7.4 文件结构介绍</span></a></h3>
<p><img src="/application/weixin/base/029.png" alt=""></p>
<h2 id="_1-8-创建页面" tabindex="-1"><a class="header-anchor" href="#_1-8-创建页面"><span>1.8 创建页面</span></a></h2>
<ol>
<li>
<p>第一种：右键创建</p>
<ul>
<li>右键-创建文件夹</li>
</ul>
<p><img src="/application/weixin/base/030.png" alt=""></p>
<ul>
<li>输入名称</li>
</ul>
<p><img src="/application/weixin/base/031.png" alt=""></p>
<ul>
<li>右键-创建Page</li>
</ul>
<p><img src="/application/weixin/base/032.png" alt=""></p>
<ul>
<li>输入名称</li>
</ul>
<p><img src="/application/weixin/base/033.png" alt=""></p>
<ul>
<li>创建结果</li>
</ul>
<p><img src="/application/weixin/base/034.png" alt=""></p>
</li>
<li>
<p>第二种：app.json创建</p>
<ul>
<li>app.json中输入路径</li>
</ul>
<p><img src="/application/weixin/base/035.png" alt=""></p>
<ul>
<li>创建结果</li>
</ul>
<p><img src="/application/weixin/base/036.png" alt=""></p>
</li>
</ol>
<h2 id="_1-9-调试功能" tabindex="-1"><a class="header-anchor" href="#_1-9-调试功能"><span>1.9 调试功能</span></a></h2>
<h3 id="_1-9-1-调试基础库" tabindex="-1"><a class="header-anchor" href="#_1-9-1-调试基础库"><span>1.9.1 调试基础库</span></a></h3>
<p>小程序调试基础库是指 微信开发者工具中可以选择的微信基础库版本。</p>
<p>微信基础库是指小程序的运行环境，给小程序提供了运行所需的各种 AP1 和工具，以及基础框架和运行逻辑等。</p>
<p>小程序开发者可以在微信开发者工具中选择所需的微信基础库版本，作为运行和调试小程序时的运行环境。</p>
<p>每个小程序有自己所允许使用的基础库最低版本要求，开发者需要选择要兼容的基础库版本，从而确保小程序的功能正常运行</p>
<p><img src="/application/weixin/base/037.png" alt=""></p>
<h3 id="_1-9-2-调试" tabindex="-1"><a class="header-anchor" href="#_1-9-2-调试"><span>1.9.2 调试</span></a></h3>
<ol>
<li>类似chrome的web页面调试</li>
</ol>
<p><img src="/application/weixin/base/038.png" alt=""></p>
<ol start="2">
<li>真机调试与预览</li>
</ol>
<p><img src="/application/weixin/base/039.png" alt=""></p>
<p>微信开发者工具缓存非常严重，
如果发现代码和预期不一样，先点击编译!
编译后还是没有达到预期的效果，就需要清除缓存 !甚至重启项目才可以!</p>
</div></template>


