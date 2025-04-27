<template><div><h1 id="一、基础使用" tabindex="-1"><a class="header-anchor" href="#一、基础使用"><span>一、基础使用</span></a></h1>
<h2 id="_1-1-github注册" tabindex="-1"><a class="header-anchor" href="#_1-1-github注册"><span>1.1 Github注册</span></a></h2>
<ol>
<li>登入 <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a> 的官网，点击 sign up（注册）；
<img src="/other/version/github/github-01.jpg" alt=""></li>
<li>选择注册
<img src="/other/version/github/github-02.jpg" alt=""></li>
<li>填入相关的注册 GitHub 账号信息
<img src="/other/version/github/github-03.jpg" alt=""></li>
<li>登入自己刚刚注册的 Github 账号
<img src="/other/version/github/github-04.jpg" alt=""></li>
<li>登录成功
<img src="/other/version/github/github-05.jpg" alt=""></li>
</ol>
<h2 id="_1-2-github项目库创建" tabindex="-1"><a class="header-anchor" href="#_1-2-github项目库创建"><span>1.2 Github项目库创建</span></a></h2>
<ol>
<li>登入自己的 Github后，点击创建 Create repository
<img src="/other/version/github/github-06.jpg" alt=""></li>
<li>对创建的项目工程内容进行填写
<img src="/other/version/github/github-07.jpg" alt=""></li>
<li>查看仓库
<img src="/other/version/github/github-08.jpg" alt=""></li>
</ol>
<h2 id="_1-3-安装git" tabindex="-1"><a class="header-anchor" href="#_1-3-安装git"><span>1.3 安装git</span></a></h2>
<ol>
<li>安装成功后打开命令行
<img src="/other/version/github/github-09.jpg" alt=""></li>
<li>git基础命令</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token comment">## 1. 初始化仓库</span></span>
<span class="line"><span class="token function">git</span> init    <span class="token comment">#：初始化一个新的Git仓库。</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">## 2. 配置</span></span>
<span class="line"><span class="token function">git</span> config <span class="token parameter variable">--global</span> user.name <span class="token string">"你的名字"</span>    <span class="token comment">#：设置用户名。</span></span>
<span class="line"></span>
<span class="line"><span class="token function">git</span> config <span class="token parameter variable">--global</span> user.email <span class="token string">"你的邮箱"</span>   <span class="token comment">#：设置邮箱。</span></span>
<span class="line"></span>
<span class="line"><span class="token function">git</span> config <span class="token parameter variable">--list</span>   <span class="token comment">#：列出所有配置。</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">## 3. 克隆仓库</span></span>
<span class="line"><span class="token function">git</span> clone <span class="token punctuation">[</span>URL<span class="token punctuation">]</span> <span class="token comment">#：克隆一个仓库到本地。</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">## 4. 查看状态</span></span>
<span class="line"><span class="token function">git</span> status  <span class="token comment">#：查看仓库的状态。</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">## 5. 添加文件</span></span>
<span class="line"><span class="token function">git</span> <span class="token function">add</span> <span class="token punctuation">[</span>文件名<span class="token punctuation">]</span>    <span class="token comment">#：添加文件到暂存区。</span></span>
<span class="line"></span>
<span class="line"><span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>   <span class="token comment">#：添加当前目录下的所有文件到暂存区。</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">## 6. 提交更改</span></span>
<span class="line"><span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">"提交信息"</span>    <span class="token comment">#：提交暂存区到仓库。</span></span>
<span class="line"></span>
<span class="line"><span class="token function">git</span> commit <span class="token parameter variable">-am</span> <span class="token string">"提交信息"</span>   <span class="token comment">#：跳过添加步骤，直接提交已跟踪文件。</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">## 7. 查看历史记录</span></span>
<span class="line"><span class="token function">git</span> log <span class="token comment">#：查看提交历史。</span></span>
<span class="line"></span>
<span class="line"><span class="token function">git</span> log <span class="token parameter variable">--oneline</span>   <span class="token comment">#：以简洁的一行显示提交历史。</span></span>
<span class="line"></span>
<span class="line"><span class="token function">git</span> log <span class="token parameter variable">--graph</span> <span class="token comment">#：以图表形式显示分支合并历史。</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">## 8. 分支操作</span></span>
<span class="line"><span class="token function">git</span> branch <span class="token punctuation">[</span>分支名<span class="token punctuation">]</span> <span class="token comment">#：创建新分支。</span></span>
<span class="line"></span>
<span class="line"><span class="token function">git</span> checkout <span class="token punctuation">[</span>分支名<span class="token punctuation">]</span>   <span class="token comment">#：切换到指定分支。</span></span>
<span class="line"></span>
<span class="line"><span class="token function">git</span> checkout <span class="token parameter variable">-b</span> <span class="token punctuation">[</span>新分支名<span class="token punctuation">]</span>  <span class="token comment">#：创建并切换到新分支。</span></span>
<span class="line"></span>
<span class="line"><span class="token function">git</span> branch <span class="token parameter variable">-d</span> <span class="token punctuation">[</span>分支名<span class="token punctuation">]</span>  <span class="token comment">#：删除分支。</span></span>
<span class="line"></span>
<span class="line"><span class="token function">git</span> merge <span class="token punctuation">[</span>分支名<span class="token punctuation">]</span>  <span class="token comment">#：合并指定分支到当前分支。</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">## 9. 远程仓库操作</span></span>
<span class="line"><span class="token function">git</span> remote <span class="token function">add</span> origin <span class="token punctuation">[</span>URL<span class="token punctuation">]</span> <span class="token comment">#：添加远程仓库。</span></span>
<span class="line"></span>
<span class="line"><span class="token function">git</span> push <span class="token parameter variable">-u</span> origin <span class="token punctuation">[</span>分支名<span class="token punctuation">]</span> <span class="token comment">#：将本地分支推送到远程仓库并设置跟踪关系。</span></span>
<span class="line"></span>
<span class="line"><span class="token function">git</span> push    <span class="token comment">#：推送本地更改到远程仓库。</span></span>
<span class="line"></span>
<span class="line"><span class="token function">git</span> pull    <span class="token comment">#：从远程仓库拉取最新版本并合并。</span></span>
<span class="line"></span>
<span class="line"><span class="token function">git</span> fetch   <span class="token comment">#：从远程仓库拉取最新版本但不合并。</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">## 10. 标签操作</span></span>
<span class="line"><span class="token function">git</span> tag <span class="token punctuation">[</span>标签名<span class="token punctuation">]</span>：为当前提交打标签。</span>
<span class="line"></span>
<span class="line"><span class="token function">git</span> tag <span class="token parameter variable">-a</span> <span class="token punctuation">[</span>标签名<span class="token punctuation">]</span> <span class="token parameter variable">-m</span> <span class="token string">"标签信息"</span>：创建带注释的标签。</span>
<span class="line"></span>
<span class="line"><span class="token function">git</span> push origin <span class="token punctuation">[</span>标签名<span class="token punctuation">]</span>：推送标签到远程仓库。</span>
<span class="line"></span>
<span class="line"><span class="token function">git</span> push --tags：推送所有标签到远程仓库。</span>
<span class="line"></span>
<span class="line"><span class="token comment">## 11. 撤销操作</span></span>
<span class="line"><span class="token function">git</span> reset <span class="token parameter variable">--hard</span> <span class="token punctuation">[</span>提交ID<span class="token punctuation">]</span>   <span class="token comment">#：重置当前HEAD到指定提交，丢弃所有更改。</span></span>
<span class="line"></span>
<span class="line"><span class="token function">git</span> checkout -- <span class="token punctuation">[</span>文件名<span class="token punctuation">]</span>    <span class="token comment">#：撤销工作目录中的更改（未添加到暂存区的）。</span></span>
<span class="line"></span>
<span class="line"><span class="token function">git</span> revert <span class="token punctuation">[</span>提交ID<span class="token punctuation">]</span> <span class="token comment">#：撤销指定的提交，但保留更改的历史记录。</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">## 12. 查看差异</span></span>
<span class="line"><span class="token function">git</span> <span class="token function">diff</span>    <span class="token comment">#：比较工作目录和暂存区的差异。</span></span>
<span class="line"></span>
<span class="line"><span class="token function">git</span> <span class="token function">diff</span> <span class="token parameter variable">--cached</span>   <span class="token comment">#：比较暂存区和HEAD的差异。</span></span>
<span class="line"></span>
<span class="line"><span class="token function">git</span> <span class="token function">diff</span> <span class="token punctuation">[</span>分支名<span class="token punctuation">]</span>   <span class="token comment">#：比较工作目录和指定分支的差异。</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>注意：gitBash里面的命令与linux、unix保持一致; 选择目录时windows中的反斜杠<code v-pre>\</code>改为斜杠<code v-pre>/</code></p>
</blockquote>
<h2 id="_1-4-git和github的绑定-ssh密钥" tabindex="-1"><a class="header-anchor" href="#_1-4-git和github的绑定-ssh密钥"><span>1.4 Git和Github的绑定(SSH密钥)</span></a></h2>
<h3 id="_1-4-1-得到ssh-keys" tabindex="-1"><a class="header-anchor" href="#_1-4-1-得到ssh-keys"><span>1.4.1 得到ssh keys</span></a></h3>
<p>输入 cd ~/.ssh，返回 &quot;no such file or directory&quot; 表明电脑没有ssh key，需要创建ssh key
<img src="/other/version/github/github-10.jpg" alt=""></p>
<p>故在终端输入 <code v-pre>ssh-keygen -t rsa -C &quot;git账号&quot;</code>
连续进行 3 次回车Enter（确认），得到如下截图中的信息即可
<img src="/other/version/github/github-11.jpg" alt=""></p>
<p>按路径进入 .ssh，里面存储的是两个 ssh key 的秘钥，id_rsa.pub 文件里面存储的是公钥，id_rsa 文件里存储的是私钥，不能告诉别人。打开 id_rsa.pub 文件，复制里面的内容。
<img src="/other/version/github/github-12.jpg" alt=""></p>
<h3 id="_1-4-1-绑定ssh密钥" tabindex="-1"><a class="header-anchor" href="#_1-4-1-绑定ssh密钥"><span>1.4.1 绑定ssh密钥</span></a></h3>
<ol>
<li>
<p>接下需要登录到自己的 GitHub 上边添加这个密匙
<img src="/other/version/github/github-13.jpg" alt="">
<img src="/other/version/github/github-14.jpg" alt=""></p>
</li>
<li>
<p>填写名字并且填写复制的公钥（id_rsa.pub内容），点击按钮 <code v-pre>Add SSH key</code>,添加后配置完成。
<img src="/other/version/github/github-15.jpg" alt=""></p>
</li>
<li>
<p>绑定结果
<img src="/other/version/github/github-16.jpg" alt=""></p>
</li>
<li>
<p>我们回到 Git bash上边，输入：ssh -T git@github.com
来检查是否成功绑定。如果输入代码之后再选择 yes 出来是这样说明就成功啦！！！
<img src="/other/version/github/github-17.jpg" alt=""></p>
</li>
<li>
<p>剩余简单的配置内容。</p>
</li>
</ol>
<p>将 name 最好和 GitHub 上边的一样，email 是一定要是注册 GitHub 的那个邮箱地址</p>
<p>这两个的顺序可以颠倒，没有固定的顺序。</p>
<p><code v-pre>git config --global user.name &quot;gitname&quot;</code>
<code v-pre>git config --global user.email &quot;git邮箱&quot;</code></p>
<p><img src="/other/version/github/github-18.jpg" alt=""></p>
<p>止到这里的操作，已经完成本地 Git 与远程的 Github 绑定，这意味着我们已经可以通过 Git 向 GitHub 提交代码啦！</p>
<h2 id="_1-5-使用github-生成个人令牌" tabindex="-1"><a class="header-anchor" href="#_1-5-使用github-生成个人令牌"><span>1.5 使用github 生成个人令牌</span></a></h2>
<p>‌GitHub Personal Access Token（个人访问令牌）是一种用于身份验证的安全凭据‌。它允许用户在进行API请求、访问私有仓库或执行其他需要身份验证的操作时，代替密码使用。</p>
<p>要生成GitHub Personal Access Token，你需要：</p>
<ol>
<li>
<p>‌登录GitHub账户‌：确保你已经注册并登录了你的GitHub账户‌。</p>
</li>
<li>
<p>进入个人设置‌：点击页面右上角的头像，选择“Settings”（设置），然后在左侧导航栏中点击底部的“Developer settings”（开发者设置）。</p>
</li>
<li>
<p>‌访问个人访问令牌页面‌：在“Developer settings”页面，选择“Personal access tokens”（个人访问令牌），并点击“Generate new token”（生成新令牌）按钮。</p>
</li>
<li>
<p>配置并生成令牌‌：在生成新令牌的界面，你需要输入令牌的名称、选择过期时间以及选择令牌所需的权限（如访问仓库的权限）。完成配置后，点击“Generate token”按钮生成令牌。</p>
</li>
</ol>
<blockquote>
<p>请注意，生成令牌后，你需要立即复制并保存它，因为离开页面后你将无法再次看到令牌‌</p>
</blockquote>
<p><img src="/other/version/github/github-39.jpg" alt="">
<img src="/other/version/github/github-40.jpg" alt="">
<img src="/other/version/github/github-41.jpg" alt="">
<img src="/other/version/github/github-42.jpg" alt=""></p>
<h2 id="_1-6-使用git将代码提交到github" tabindex="-1"><a class="header-anchor" href="#_1-6-使用git将代码提交到github"><span>1.6 使用Git将代码提交到GitHub</span></a></h2>
<h3 id="_1-6-1-克隆仓库" tabindex="-1"><a class="header-anchor" href="#_1-6-1-克隆仓库"><span>1.6.1 克隆仓库</span></a></h3>
<ol>
<li>
<p>将我们的库克隆下来到本地电脑中，方便以后进行上传代码。
<img src="/other/version/github/github-19.jpg" alt=""></p>
</li>
<li>
<p>点进仓库之后点击 Code，点击 ssh 会看到一串网址（http也可以），这个地址就是代码地址，git clone 命令会用的到。
<img src="/other/version/github/github-20.jpg" alt=""></p>
</li>
<li>
<p>接下来我们就开始选择文件存储地方了，在本地电脑中找到存储文件的地方，然后右键选择 Git Bash Here：
<img src="/other/version/github/github-21.jpg" alt=""></p>
</li>
<li>
<p>在终端输入 git clone 地址（这个地址就是刚刚库那个Code的上代码地址）
该过程有时候可能会需要输入 Github 账号密码啥的，记得不要输错啦！
<img src="/other/version/github/github-22.jpg" alt=""></p>
</li>
</ol>
<h3 id="_1-6-2-上传代码" tabindex="-1"><a class="header-anchor" href="#_1-6-2-上传代码"><span>1.6.2 上传代码</span></a></h3>
<ol>
<li>
<p>打开这个文件夹，然后在其中创建一个任意格式，任意名称的文件（这里新建了一个测试文件）。
<img src="/other/version/github/github-23.jpg" alt=""></p>
</li>
<li>
<p>在这个文件夹里面右键 git bash 进黑框框，<code v-pre>git add</code> 我们新增的文件
<img src="/other/version/github/github-24.jpg" alt=""></p>
</li>
<li>
<p>之后输入然后 <code v-pre>git commit -m &quot;测试是否成功&quot;</code> 引号内的内容可以随意改动，这个语句的意思是 给你刚刚上传的文件一个备注，方便查找记忆而已；
<img src="/other/version/github/github-25.jpg" alt=""></p>
</li>
<li>
<p>接着输入 push 指令 <code v-pre>git push origin main</code>，如下图所示就代表成功了；
<img src="/other/version/github/github-26.jpg" alt=""></p>
</li>
<li>
<p>打开 GitHub，看到刚刚上传的文件，显示成功。
<img src="/other/version/github/github-27.jpg" alt=""></p>
</li>
</ol>
<h3 id="_1-6-3-推送与拉取" tabindex="-1"><a class="header-anchor" href="#_1-6-3-推送与拉取"><span>1.6.3 推送与拉取</span></a></h3>
<p><em>push</em>：该单词直译过来就是 【推】 的意思，如果我们本地的代码有了更新，为了保持本地与远程的代码同步，我们就需要把本地的代码推到远程的仓库，代码示例：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">git</span> push origin master</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><em>pull</em>：该单词直译过来就是 【拉】的意思，如果我们远程仓库的代码有了更新，同样为了保持本地与远程的代码同步，我们就需要把远程的代码拉到本地，代码示例：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">git</span> pull origin master</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><code v-pre>git push origin</code> 命令用于将本地代码推送到远程仓库。具体来说，<code v-pre>git push</code>用于将本地提交的代码推送到一个远程分支上，<code v-pre>origin</code>是远程仓库的名称，通常为<code v-pre>origin</code>，它表示要将代码推送到哪个远程仓库。该命令的完整语法是：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">git</span> push origin <span class="token operator">&lt;</span>本地分支名<span class="token operator">></span>:<span class="token operator">&lt;</span>远程分支名<span class="token operator">></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>其中，<code v-pre>&lt;本地分支名&gt;</code>表示要推送的本地分支的名称，<code v-pre>&lt;远程分支名&gt;</code>表示要将代码推送到的远程分支的名称。如果两者名称相同，则可以省略<code v-pre>&lt;远程分支名&gt;</code>。</p>
<ol>
<li>远程仓库新建文件
<img src="/other/version/github/github-28.jpg" alt="">
<img src="/other/version/github/github-29.jpg" alt="">
<img src="/other/version/github/github-30.jpg" alt="">
<img src="/other/version/github/github-31.jpg" alt=""></li>
<li>本地拉取文件
<img src="/other/version/github/github-32.jpg" alt=""></li>
<li>本地修改文件
<img src="/other/version/github/github-33.jpg" alt=""></li>
<li>本地推送文件
<img src="/other/version/github/github-34.jpg" alt=""></li>
<li>查看
<img src="/other/version/github/github-35.jpg" alt=""></li>
</ol>
</div></template>


