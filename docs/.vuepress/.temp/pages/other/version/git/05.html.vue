<template><div><h1 id="五、git命令" tabindex="-1"><a class="header-anchor" href="#五、git命令"><span>五、git命令</span></a></h1>
<h2 id="_5-1-代码推送的流程" tabindex="-1"><a class="header-anchor" href="#_5-1-代码推送的流程"><span>5.1 代码推送的流程</span></a></h2>
<p><strong>命令</strong></p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token comment">#1、初始化一个仓库：</span></span>
<span class="line"><span class="token function">git</span> init</span>
<span class="line"><span class="token comment">#2、增加代码后，添加：</span></span>
<span class="line"><span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span></span>
<span class="line"><span class="token comment">#3、提交代码到仓库：</span></span>
<span class="line"><span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">"related_message"</span></span>
<span class="line"><span class="token comment">#4、添加远程仓库地址，这里就是添加在gitee上建立的仓库地址</span></span>
<span class="line"><span class="token function">git</span> remote <span class="token function">add</span> origin https://gitee.com/****/****.git</span>
<span class="line"><span class="token comment">#5、把本地仓库推到远程存储仓库中</span></span>
<span class="line"><span class="token function">git</span> push origin master</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-1-1-git提交代码-从仓库克隆修改后" tabindex="-1"><a class="header-anchor" href="#_5-1-1-git提交代码-从仓库克隆修改后"><span>5.1.1 git提交代码（从仓库克隆修改后）</span></a></h3>
<p>将你本地所有修改了的文件添加到暂存区</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>将更改内容和日志消息一起存储在新的提交中</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">"update"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>下拉代码，将远程最新的代码先跟你本地的代码合并一下，如果确定远程没有更新，可以不用这个，最好是每次都执行以下，完成之后打开代码查看有没有冲突，并解决，如果有冲突解决完成以后再次执行1跟2的操作</p>
<h3 id="_5-1-2-git拉取代码" tabindex="-1"><a class="header-anchor" href="#_5-1-2-git拉取代码"><span>5.1.2 git拉取代码</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">git</span> pull origin 远程分支名</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_5-1-3-git推送代码" tabindex="-1"><a class="header-anchor" href="#_5-1-3-git推送代码"><span>5.1.3 git推送代码</span></a></h3>
<p>将代码推至远程</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">git</span> push origin master或者远程分支名</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_5-1-4-git删除文件" tabindex="-1"><a class="header-anchor" href="#_5-1-4-git删除文件"><span>5.1.4 git删除文件</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token comment">#1、先将文件拉至本地，然后使用以下命令</span></span>
<span class="line"><span class="token function">git</span> <span class="token function">rm</span> <span class="token parameter variable">-r</span> <span class="token parameter variable">--cached</span> 你的文件名 例如： <span class="token function">git</span> <span class="token function">rm</span> <span class="token parameter variable">-r</span> <span class="token parameter variable">--cached</span> layer_utils</span>
<span class="line"><span class="token comment">#2、删除之后需要请求提交</span></span>
<span class="line"><span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">"remove folder and file list"</span></span>
<span class="line"><span class="token comment">#3、最后使用push推送即可</span></span>
<span class="line"><span class="token function">git</span> push</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-1-5-git强制更新本地文件" tabindex="-1"><a class="header-anchor" href="#_5-1-5-git强制更新本地文件"><span>5.1.5 git强制更新本地文件</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">git</span> fetch <span class="token parameter variable">--all</span></span>
<span class="line"></span>
<span class="line"><span class="token function">git</span> reset <span class="token parameter variable">--hard</span> origin/master</span>
<span class="line"></span>
<span class="line"><span class="token function">git</span> pull</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-2-流程与命令" tabindex="-1"><a class="header-anchor" href="#_5-2-流程与命令"><span>5.2 流程与命令</span></a></h2>
<h3 id="_5-2-1-操作流程图" tabindex="-1"><a class="header-anchor" href="#_5-2-1-操作流程图"><span>5.2.1 操作流程图</span></a></h3>
<p><img src="/other/version/git/git-command.jpg" alt=""></p>
<h3 id="_5-2-2-命令行操作" tabindex="-1"><a class="header-anchor" href="#_5-2-2-命令行操作"><span>5.2.2 命令行操作</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token comment">#仓库操作</span></span>
<span class="line"><span class="token function">git</span> <span class="token parameter variable">-v</span> 		<span class="token comment">#查看版本</span></span>
<span class="line"><span class="token function">git</span> init 	<span class="token comment">#初始化存储仓库</span></span>
<span class="line"><span class="token function">git</span> clone <span class="token punctuation">[</span>URL<span class="token punctuation">]</span> <span class="token punctuation">[</span>文件夹别名<span class="token punctuation">]</span> <span class="token comment">#克隆远程仓库</span></span>
<span class="line"> </span>
<span class="line"><span class="token comment">#文件操作</span></span>
<span class="line"><span class="token function">git</span> status 								<span class="token comment">#查看暂存区状态</span></span>
<span class="line"><span class="token function">git</span> <span class="token function">add</span> <span class="token punctuation">[</span>文件名<span class="token punctuation">]</span>						<span class="token comment">#加入暂存区</span></span>
<span class="line"><span class="token function">git</span> <span class="token function">rm</span> <span class="token parameter variable">--cached</span> <span class="token punctuation">[</span>文件名<span class="token punctuation">]</span>		<span class="token comment">#移出暂存区</span></span>
<span class="line"><span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">""</span>					<span class="token comment">#提交到存储区域</span></span>
<span class="line"><span class="token function">git</span> log 									<span class="token comment">#显示记录，可选参数--oneline显示一行</span></span>
<span class="line"><span class="token comment">#误删除</span></span>
<span class="line"><span class="token function">git</span> restore</span>
<span class="line"><span class="token function">git</span> reset <span class="token parameter variable">--hard</span> <span class="token punctuation">[</span>版本号<span class="token punctuation">]</span>	<span class="token comment">#重置，会移除后面的提交</span></span>
<span class="line"><span class="token function">git</span> revert <span class="token punctuation">[</span>下一个版本号<span class="token punctuation">]</span>	<span class="token comment">#还原到某个版本号之前</span></span>
<span class="line"> </span>
<span class="line"><span class="token comment">#分支操作</span></span>
<span class="line"><span class="token function">git</span> branch <span class="token punctuation">[</span>分支名<span class="token punctuation">]</span> 				<span class="token comment">#创建分支</span></span>
<span class="line"><span class="token function">git</span> branch <span class="token parameter variable">-v</span>							<span class="token comment">#查看当前所有分支</span></span>
<span class="line"><span class="token function">git</span> checkout <span class="token punctuation">[</span>分支名<span class="token punctuation">]</span>			<span class="token comment">#切换分支</span></span>
<span class="line"><span class="token function">git</span> checkout <span class="token parameter variable">-b</span> <span class="token punctuation">[</span>分支名<span class="token punctuation">]</span>		<span class="token comment">#创建并切换到分支</span></span>
<span class="line"><span class="token function">git</span> branch <span class="token parameter variable">-d</span> <span class="token punctuation">[</span>分支名<span class="token punctuation">]</span>			<span class="token comment">#删除分支</span></span>
<span class="line"><span class="token comment">#合并：切换到master分支</span></span>
<span class="line"><span class="token function">git</span> merge <span class="token punctuation">[</span>被合并分支名<span class="token punctuation">]</span>		<span class="token comment">#合并分支到master分支</span></span>
<span class="line"> </span>
<span class="line"><span class="token comment">#标签操作：给提交增加标签</span></span>
<span class="line"><span class="token function">git</span> tag <span class="token punctuation">[</span>标签名<span class="token punctuation">]</span> <span class="token punctuation">[</span>版本号<span class="token punctuation">]</span> 	<span class="token comment">#添加标签，标签名不重复</span></span>
<span class="line"><span class="token function">git</span> tag <span class="token parameter variable">-d</span> <span class="token punctuation">[</span>标签名<span class="token punctuation">]</span>				<span class="token comment">#删除标签</span></span>
<span class="line"> </span>
<span class="line"><span class="token comment">#远程仓库的操作</span></span>
<span class="line"><span class="token function">git</span> remote <span class="token function">add</span> <span class="token punctuation">[</span>origin<span class="token punctuation">]</span> <span class="token punctuation">[</span>URL<span class="token punctuation">]</span>				<span class="token comment">#连接到运程仓库</span></span>
<span class="line"><span class="token function">git</span> remote <span class="token function">rename</span> <span class="token punctuation">[</span>origin<span class="token punctuation">]</span> <span class="token punctuation">[</span>新名字<span class="token punctuation">]</span>	<span class="token comment">#重新命名</span></span>
<span class="line"><span class="token function">git</span> remove <span class="token punctuation">[</span>origin<span class="token punctuation">]</span>									<span class="token comment">#断开连接</span></span>
<span class="line"><span class="token function">git</span> push <span class="token punctuation">[</span>origin<span class="token punctuation">]</span>										<span class="token comment">#推送到远程仓库</span></span>
<span class="line"><span class="token function">git</span> pull <span class="token punctuation">[</span>origin<span class="token punctuation">]</span>										<span class="token comment">#拉取并同步</span></span>
<span class="line"> </span>
<span class="line"><span class="token comment">#其他</span></span>
<span class="line"><span class="token function">git</span> config <span class="token parameter variable">--global</span> user.name <span class="token string">""</span>		<span class="token comment">#配置</span></span>
<span class="line"><span class="token function">git</span> config <span class="token parameter variable">--global</span> user.email <span class="token string">""</span>		<span class="token comment">#配置</span></span>
<span class="line"><span class="token function">git</span> config <span class="token parameter variable">--global</span> <span class="token parameter variable">--list</span>					<span class="token comment">#查看配置信息</span></span>
<span class="line">ssh-keygen <span class="token parameter variable">-t</span> rsa <span class="token parameter variable">-C</span> <span class="token string">"your email"</span>		<span class="token comment">#生成公钥，使用SSH协议通信会用到</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


