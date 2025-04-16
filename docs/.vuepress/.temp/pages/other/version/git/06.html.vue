<template><div><h1 id="六、gitlab" tabindex="-1"><a class="header-anchor" href="#六、gitlab"><span>六、gitlab</span></a></h1>
<h2 id="_6-1-简介" tabindex="-1"><a class="header-anchor" href="#_6-1-简介"><span>6.1 简介</span></a></h2>
<p>Github 是国外的项目托管平台，由于网络问题，在国内访问和使用不是很方便。</p>
<p>Gitee 是国内的项目托管平台，虽然在访问和使用上挺方便的，但依然让人担忧项目代码可能会被泄露。</p>
<p>因此，从企业或机构的角度出发，是倾向于在内部自建一个项目托管平台，将绝对管理权控制在自己手中的。</p>
<p>GitLab 作为一个用于项目代码仓库管理的开源项目，则能很好地满足企业或机构在内部自建项目托管平台的需求。</p>
<h2 id="_6-2-安装" tabindex="-1"><a class="header-anchor" href="#_6-2-安装"><span>6.2 安装</span></a></h2>
<blockquote>
<p>演示如何使用 rpm 安装包，在 CentOS 7 中离线安装 GitLab 。</p>
</blockquote>
<h3 id="_6-2-1-服务器准备" tabindex="-1"><a class="header-anchor" href="#_6-2-1-服务器准备"><span>6.2.1 服务器准备</span></a></h3>
<p>在安装 GitLab 之前，我们需要先安装一些依赖软件。其中一个依赖是 policycoreutils-python。下面是安装依赖的代码：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">sudo</span> yum <span class="token function">install</span> <span class="token parameter variable">-y</span> policycoreutils-python</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><blockquote>
<p>注意：16G 磁盘是最低配置要求；我使用过 8G 磁盘的虚拟机，安装完 GitLab 后，再新建一个普通用户账号，就用完了 8G 磁盘的空间，甚至都还没有创建任何项目仓库。</p>
</blockquote>
<h3 id="_6-2-2-下载安装包" tabindex="-1"><a class="header-anchor" href="#_6-2-2-下载安装包"><span>6.2.2 下载安装包</span></a></h3>
<p>gitlab 官网下载地址：https://packages.gitlab.com/gitlab/gitlab-ce</p>
<p>清华大学开源软件镜像站下载地址（推荐）：https://mirrors.tuna.tsinghua.edu.cn/gitlab-ce/yum/el7/</p>
<p><img src="/other/version/git/gitlab-01.jpg" alt=""></p>
<blockquote>
<p>提示：EL7 是 Red Hat 7.x，CentOS 7.x 和 CloudLinux 7.x 的下载。</p>
</blockquote>
<h3 id="_6-2-3-上传安装包到服务器" tabindex="-1"><a class="header-anchor" href="#_6-2-3-上传安装包到服务器"><span>6.2.3 上传安装包到服务器</span></a></h3>
<p><img src="/other/version/git/gitlab-02.jpg" alt=""></p>
<p>如上图所示，使用 WinSCP 之类的工具，将 rpm 安装包上传到 CentOS 服务器。</p>
<h3 id="_6-2-4-运行安装包" tabindex="-1"><a class="header-anchor" href="#_6-2-4-运行安装包"><span>6.2.4 运行安装包</span></a></h3>
<p><img src="/other/version/git/gitlab-03.jpg" alt=""></p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">rpm</span> <span class="token parameter variable">-ivh</span> 安装包名称</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_6-2-5-修改external-url配置" tabindex="-1"><a class="header-anchor" href="#_6-2-5-修改external-url配置"><span>6.2.5 修改external_url配置</span></a></h3>
<p>访问地址 external_url 配置在 /etc/gitlab/gitlab.rb 文件中。</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">vi</span> /etc/gitlab/gitlab.rb</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><img src="/other/version/git/gitlab-04.jpg" alt=""></p>
<p>如上图所示，external_url 配置默认值为 http://gitlab.example.com 。
<img src="/other/version/git/gitlab-05.jpg" alt=""></p>
<p>如上图所示，将 external_url 配置修改为 'http://192.168.18.66:10005 。</p>
<p>其中，192.168.18.66 是 GitLab 所在的服务器的 IP ；10005 是自定义的端口，否则 GitLab 会占用 80 端口。</p>
<h3 id="_6-2-6-重新加载配置文件" tabindex="-1"><a class="header-anchor" href="#_6-2-6-重新加载配置文件"><span>6.2.6 重新加载配置文件</span></a></h3>
<p><img src="/other/version/git/gitlab-06.jpg" alt=""></p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">gitlab-ctl reconfigure</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><blockquote>
<p>注意：重新加载配置文件的过程比较耗时，耐心等待即可，出现 gitlab Reconfigured! 即操作成功。</p>
</blockquote>
<h3 id="_6-2-7-查看端口号" tabindex="-1"><a class="header-anchor" href="#_6-2-7-查看端口号"><span>6.2.7 查看端口号</span></a></h3>
<p><img src="/other/version/git/gitlab-07.jpg" alt=""></p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">netstat</span> <span class="token parameter variable">-tlnp</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><blockquote>
<p>新加载 Gitlab 配置文件，会自动启动或重启 Gitlab ；所以不用再重复执行启动或重启命令。</p>
</blockquote>
<h3 id="_6-2-8-常用命令速查表" tabindex="-1"><a class="header-anchor" href="#_6-2-8-常用命令速查表"><span>6.2.8 常用命令速查表</span></a></h3>
<table>
<thead>
<tr>
<th>命令</th>
<th>作用</th>
</tr>
</thead>
<tbody>
<tr>
<td>gitlab-ctl start</td>
<td>启动 GitLab</td>
</tr>
<tr>
<td>gitlab-ctl restart</td>
<td>重启 GitLab</td>
</tr>
<tr>
<td>gitlab-ctl stop</td>
<td>停止 GitLab</td>
</tr>
<tr>
<td>gitlab-ctl reconfigure</td>
<td>新加载 GitLab 配置文件</td>
</tr>
<tr>
<td>gitlab-ctl status</td>
<td>查看 GitLab 状态</td>
</tr>
<tr>
<td>gitlab-rake gitlab:check SANITIZE=true</td>
<td>检查 GitLab</td>
</tr>
<tr>
<td>gitlab-ctl tail</td>
<td>查看 GitLab 日志</td>
</tr>
</tbody>
</table>
<h3 id="_6-2-9-查看管理员初始化密码" tabindex="-1"><a class="header-anchor" href="#_6-2-9-查看管理员初始化密码"><span>6.2.9 查看管理员初始化密码</span></a></h3>
<p><img src="/other/version/git/gitlab-08.jpg" alt=""></p>
<p>如上图所示，在第一次成功重新加载配置文件后，会为 GitLab 的 root 管理员账号随机生成一个初始化密码；该密码会在 24 小时后自动删除。</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">cat</span> /etc/gitlab/initial_root_password</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="_6-3-gitlab的基本使用" tabindex="-1"><a class="header-anchor" href="#_6-3-gitlab的基本使用"><span>6.3 Gitlab的基本使用</span></a></h2>
<h3 id="_6-3-1-访问gitlab登录页" tabindex="-1"><a class="header-anchor" href="#_6-3-1-访问gitlab登录页"><span>6.3.1 访问GitLab登录页</span></a></h3>
<p><img src="/other/version/git/gitlab-09.jpg" alt=""></p>
<p>如上图所示，使用在 6.2.5 节配置的 external_url （http://192.168.18.66:10005）即可访问 GitLab 登录页。</p>
<blockquote>
<p>注意：如果访问不了登录页，可能是服务器的防火墙问题，关掉防火墙即可；</p>
</blockquote>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">systemctl stop firewalld</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_6-3-2-登录root管理员账号" tabindex="-1"><a class="header-anchor" href="#_6-3-2-登录root管理员账号"><span>6.3.2 登录root管理员账号</span></a></h3>
<p><img src="/other/version/git/gitlab-10.jpg" alt=""></p>
<p>如上图所示，使用生成的初始化密码，登录root管理员账号。</p>
<p><img src="/other/version/git/gitlab-11.jpg" alt=""></p>
<p>如上图所示，这便是 GitLab 的主页。</p>
<h3 id="_6-3-3-修改界面语言为中文" tabindex="-1"><a class="header-anchor" href="#_6-3-3-修改界面语言为中文"><span>6.3.3 修改界面语言为中文</span></a></h3>
<p><img src="/other/version/git/gitlab-12.jpg" alt=""></p>
<p>如上图所示，点击“Preference”。</p>
<p><img src="/other/version/git/gitlab-13.jpg" alt=""></p>
<p>如上图所示，将 Language 选择为简体中文，然后保存修改。</p>
<h3 id="_6-3-4-修改root管理员密码" tabindex="-1"><a class="header-anchor" href="#_6-3-4-修改root管理员密码"><span>6.3.4 修改root管理员密码</span></a></h3>
<p><img src="/other/version/git/gitlab-14.jpg" alt=""></p>
<p>如上图所示，点击“编辑个人资料”。</p>
<p><img src="/other/version/git/gitlab-15.jpg" alt=""></p>
<p>如上图所示，在“密码”界面中，即可修改密码。</p>
<p><img src="/other/version/git/gitlab-16.jpg" alt=""></p>
<p>如上图所示，修改密码后，需要重新登录。</p>
<h3 id="_6-3-5-停用注册功能" tabindex="-1"><a class="header-anchor" href="#_6-3-5-停用注册功能"><span>6.3.5 停用注册功能</span></a></h3>
<p><img src="/other/version/git/gitlab-17.jpg" alt=""></p>
<p>如上图所示，GitLab 默认开启自由注册账号功能，但是 GitLab 一般用于企业内部，因此一般都会停用注册功能，账号应由 root 管理员创建。</p>
<p><img src="/other/version/git/gitlab-18.jpg" alt=""></p>
<p><img src="/other/version/git/gitlab-19.jpg" alt=""></p>
<p>如上图所示，取消“已启用注册功能”，然后保存更改即可。</p>
<p><img src="/other/version/git/gitlab-20.jpg" alt=""></p>
<p>如上图所示，停用注册功能后，登陆页面的“立即注册”入口消失了。</p>
<p><img src="/other/version/git/gitlab-21.jpg" alt=""></p>
<p>如上图所示，如果想恢复启用注册功能，在“管理中心”-&gt;“设置”-&gt;“通用”中，可以找到“注册限制”的配置项恢复配置。</p>
<h3 id="_6-3-6-创建新账号" tabindex="-1"><a class="header-anchor" href="#_6-3-6-创建新账号"><span>6.3.6 创建新账号</span></a></h3>
<p><img src="/other/version/git/gitlab-22.jpg" alt=""></p>
<p>如上图所示，在“管理中心”-&gt;“概览”-&gt;“用户”中，可以找到创建新用户的按钮。</p>
<p><img src="/other/version/git/gitlab-23.jpg" alt=""></p>
<p>如上图所示，设置新用户的名称、用户名和电子邮件。</p>
<p><img src="/other/version/git/gitlab-24.jpg" alt=""></p>
<p>如上图所示，设置新用户的权限为“管理员”。</p>
<p><img src="/other/version/git/gitlab-25.jpg" alt=""></p>
<p>如上图所示，新建用户成功后，会自动跳转到该用户的资料页，可以点击“编辑”按钮，为该用户重置密码。</p>
<p><img src="/other/version/git/gitlab-26.jpg" alt=""></p>
<p>如上图所示，为该用户设置密码后，点击“保存更改”即可。</p>
<h3 id="_6-3-7-创建远程仓库" tabindex="-1"><a class="header-anchor" href="#_6-3-7-创建远程仓库"><span>6.3.7 创建远程仓库</span></a></h3>
<p><img src="/other/version/git/gitlab-27.jpg" alt=""></p>
<p>如上图所示，点击“创建项目”。</p>
<p><img src="/other/version/git/gitlab-28.jpg" alt=""></p>
<p>如上图所示，选择“创建空白项目”。</p>
<p><img src="/other/version/git/gitlab-29.jpg" alt=""></p>
<p>如上图所示，设置仓库名称、仓库归属用户、仓库可见级别，然后点击“新建项目”按钮，即可创建一个远程库仓库。</p>
<p><img src="/other/version/git/gitlab-30.jpg" alt=""></p>
<p>如上图所示，仓库新建成功，可以获取到这个仓库的 HTTP 和 SSH 地址。</p>
<h3 id="_6-3-8-配置ssh密钥" tabindex="-1"><a class="header-anchor" href="#_6-3-8-配置ssh密钥"><span>6.3.8 配置SSH密钥</span></a></h3>
<p><img src="/other/version/git/gitlab-31.jpg" alt=""></p>
<p>如上图所示，点击“编辑个人资料”-&gt;“SSH密钥”，进入配置SSH密钥的界面；然后点击“添加新密钥”按钮。</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token comment"># 使用 git 获取SSH密钥</span></span>
<span class="line">ssh-keygen <span class="token parameter variable">-t</span> rsa <span class="token parameter variable">-C</span> GitHub账号邮箱</span>
<span class="line"><span class="token builtin class-name">cd</span> .ssh/</span>
<span class="line">ll</span>
<span class="line"><span class="token function">cat</span> id_rsa.pub</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="/other/version/git/gitlab-32.jpg" alt=""></p>
<p>如上图所示，将在本地生成的 SSH 公钥复制到 GitLab，然后点击“添加密钥”即可完成SSH密钥的配置。</p>
<p><img src="/other/version/git/gitlab-33.jpg" alt=""></p>
<p>如上图所示，已成功在 GitLab 中添加了一个本地电脑生成的公钥。</p>
<p>这样一来，以后在本地电脑，使用远程仓库的 SSH 地址执行 push （推送）命令的时候，就不需要登录了。</p>
<h3 id="_6-3-9-生成访问令牌" tabindex="-1"><a class="header-anchor" href="#_6-3-9-生成访问令牌"><span>6.3.9 生成访问令牌</span></a></h3>
<p><img src="/other/version/git/gitlab-34.jpg" alt=""></p>
<p>如上图所示，点击“编辑个人资料”-&gt;“访问令牌”，进入配置访问令牌的界面；然后点击“添加新令牌”按钮。</p>
<p><img src="/other/version/git/gitlab-35.jpg" alt=""></p>
<p>如上图所示，在添加访问令牌的配置界面中，设置该访问令牌的名称（任意名称，本例为for_idea），设置该令牌的过期时间，还有设置该令牌的权限（本例选中api，即全权限）；然后点击“创建个人访问令牌”即可生成一个访问令牌。</p>
<p><img src="/other/version/git/gitlab-36.jpg" alt=""></p>
<p>如上图所示，访问令牌已成功生成。</p>
<blockquote>
<p>注意：该访问令牌相当于 GitLab 的账号密码，所以不能向陌生人透露。
此外，该访问令牌要尽快复制保存，否则刷新页面后就消失；如果没能及时保存，也可以删除重新生成一个。</p>
</blockquote>
<h2 id="_6-4-idea集成gitlab" tabindex="-1"><a class="header-anchor" href="#_6-4-idea集成gitlab"><span>6.4 IDEA集成GitLab</span></a></h2>
<h3 id="_6-4-1-安装gitlab插件" tabindex="-1"><a class="header-anchor" href="#_6-4-1-安装gitlab插件"><span>6.4.1 安装GitLab插件</span></a></h3>
<p>所有的版本控制工具都在这里</p>
<p><img src="/other/version/git/gitlab-37.jpg" alt=""></p>
<p>默认已经安装了gitlab插件
<img src="/other/version/git/gitlab-38.jpg" alt=""></p>
<p>复制已经生成令牌
<img src="/other/version/git/gitlab-39.jpg" alt="">
使用令牌
<img src="/other/version/git/gitlab-40.jpg" alt="">
登录后在版本控制工具里会出现对应的用户
<img src="/other/version/git/gitlab-41.jpg" alt=""></p>
<h3 id="_6-4-2-配置gitlab远程仓库" tabindex="-1"><a class="header-anchor" href="#_6-4-2-配置gitlab远程仓库"><span>6.4.2 配置gitlab远程仓库</span></a></h3>
<p><img src="/other/version/git/gitlab-42.jpg" alt="">
<img src="/other/version/git/gitlab-43.jpg" alt="">
<img src="/other/version/git/gitlab-44.jpg" alt=""></p>
<h3 id="_6-4-3-提交到gitlab远程仓库" tabindex="-1"><a class="header-anchor" href="#_6-4-3-提交到gitlab远程仓库"><span>6.4.3 提交到gitlab远程仓库</span></a></h3>
<p><img src="/other/version/git/gitlab-45.jpg" alt="">
<img src="/other/version/git/gitlab-46.jpg" alt="">
<img src="/other/version/git/gitlab-47.jpg" alt="">
<img src="/other/version/git/gitlab-48.jpg" alt="">
<img src="/other/version/git/gitlab-49.jpg" alt=""></p>
</div></template>


