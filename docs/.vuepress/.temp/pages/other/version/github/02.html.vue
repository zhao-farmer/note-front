<template><div><h1 id="二、github-actions" tabindex="-1"><a class="header-anchor" href="#二、github-actions"><span>二、github Actions</span></a></h1>
<h2 id="_2-1-简介" tabindex="-1"><a class="header-anchor" href="#_2-1-简介"><span>2.1 简介</span></a></h2>
<p><a href="https://docs.github.com/zh/actions/writing-workflows/quickstart" target="_blank" rel="noopener noreferrer">GitHub Actions</a> 是 GitHub 的持续集成服务，于2018年10月推出。</p>
<p>GitHub Actions 帮助您自动完成软件开发周期内的任务。 GitHub Actions 是事件驱动的，意味着您可以在指定事件发生后运行一系列命令。</p>
<p>工作流程是您添加到仓库的自动化过程。 工作流程由一项或多项作业组成，可以计划或由事件触发。 工作流程可用于在 GitHub 上构建、测试、打包、发布或部署项目。</p>
<p><a href="https://github.com/marketplace?type=actions" target="_blank" rel="noopener noreferrer">GitHub 官方市场</a>，我们除了自己编写action，也可以借用别人的。</p>
<p><img src="/other/version/github/github-36.png" alt="">
每个 action 就是一个独立脚本，因此可以做成代码仓库，使用userName/repoName的语法引用 action。比如，actions/setup-node就表示github.com/actions/setup-node这个仓库，它代表一个 action，作用是安装 Node.js。事实上，GitHub 官方的 actions 都放在 github.com/actions 里面。</p>
<p>actions 也有版本的概念，下面都是合法的 action 引用，用的就是 Git 的指针概念，详见<a href="https://docs.github.com/en/actions/sharing-automations/creating-actions/about-custom-actions#versioning-your-action" target="_blank" rel="noopener noreferrer">官方文档</a>。</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">actions/setup-node@74bc508 # 指向一个 commit</span>
<span class="line">actions/setup-node@v1.0    # 指向一个标签</span>
<span class="line">actions/setup-node@master  # 指向一个分支</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-2-基础概念" tabindex="-1"><a class="header-anchor" href="#_2-2-基础概念"><span>2.2 基础概念</span></a></h2>
<ol>
<li><code v-pre>workflow</code> （工作流程）：持续集成一次运行的过程，就是一个 workflow。</li>
<li><code v-pre>job</code> （任务）：一个 workflow 由一个或多个 jobs 构成，含义是一次持续集成的运行，可以完成多个任务；</li>
<li><code v-pre>step</code>（步骤）：每个 job 由多个 step 构成，一步步完成。</li>
<li><code v-pre>action</code> （动作）：每个 step 可以依次执行一个或多个命令（action）。</li>
</ol>
<p><code v-pre>GitHub Ac­tions</code> 为每个任务 (job) 都提供了一个虚拟机来执行，每台虚拟机都有相同的硬件资源：</p>
<ul>
<li>2-core CPU</li>
<li>7 GB RAM 内存</li>
<li>14 GB SSD 硬盘空间</li>
</ul>
<p>使用限制：</p>
<ul>
<li>每个仓库只能同时支持20个 workflow 并行。</li>
<li>每小时可以调用1000次 GitHub API 。</li>
<li>每个 job 最多可以执行6个小时。</li>
<li>免费版的用户最大支持20个 job 并发执行，macOS 最大只支持5个。</li>
<li>私有仓库每月累计使用时间为2000分钟，超过后$ 0.008/分钟，公共仓库则无限制。</li>
</ul>
<p>操作系统方面可选择 <code v-pre>Win­dows server</code>、<code v-pre>Linux</code>、<code v-pre>ma­cOS</code>，并预装了大量软件包和工具。
虽然名称叫持续集成，但当所有任务终止和完成时，虚拟环境内的数据会随之清空，并不会持续。即每个新任务都是一个全新的虚拟环境。</p>
<h2 id="_2-3-workflow-文件" tabindex="-1"><a class="header-anchor" href="#_2-3-workflow-文件"><span>2.3 workflow 文件</span></a></h2>
<p><code v-pre>GitHub Ac­tions</code> 的配置文件叫做 <code v-pre>work­flow</code> 文件（官方中文翻译为 “工作流程文件”），存放在代码仓库的<code v-pre>.github/workflows</code> 目录中。<code v-pre>work­flow</code> 文件采用 <code v-pre>YAML</code> 格式，文件名可以任意取，但是后缀名统一为.yml，比如 <code v-pre>p3terx.yml</code>。一个库可以有多个 <code v-pre>work­flow</code> 文件，GitHub 只要发现<code v-pre>.github/workflows</code> 目录里面有.yml 文件，就会按照文件中所指定的触发条件在符合条件时自动运行该文件中的工作流程。在 Ac­tions 页面可以看到很多种语言的 <code v-pre>work­flow</code> 文件的模版，可以用于简单的构建与测试。
<img src="/other/version/github/github-37.jpg" alt=""></p>
<h3 id="_2-3-1-快速预览" tabindex="-1"><a class="header-anchor" href="#_2-3-1-快速预览"><span>2.3.1 快速预览</span></a></h3>
<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre v-pre><code><span class="line"><span class="token key atrule">name</span><span class="token punctuation">:</span> Deploy</span>
<span class="line"></span>
<span class="line"><span class="token comment"># on 定义的是执行该 Action 的时机，这里的配置是指：</span></span>
<span class="line"><span class="token comment"># 当 main 分支的 push 事件被触发的时候执行该任务</span></span>
<span class="line"><span class="token key atrule">on</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">push</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">branches</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>main<span class="token punctuation">]</span></span>
<span class="line"><span class="token comment"># jobs 是定义你要运行的具体任务，</span></span>
<span class="line"><span class="token comment"># 每个 Action 可以有多个 Job</span></span>
<span class="line"><span class="token comment"># 每个 Job 可以有多个 Step</span></span>
<span class="line"><span class="token comment"># 每个 Step 又可以有多个 Run</span></span>
<span class="line"><span class="token key atrule">jobs</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">build</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest <span class="token comment"># 运行在 ubuntu 系统环境下</span></span>
<span class="line">    <span class="token key atrule">steps</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v2 <span class="token comment"># uses 命令允许我们使用别人定义好的 Action，这里是从仓库检出分支</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/setup<span class="token punctuation">-</span>node@v2 <span class="token comment"># 这里是设置 node 版本</span></span>
<span class="line">        <span class="token key atrule">with</span><span class="token punctuation">:</span> <span class="token comment"># 这里相当于传递给上面指令的参数，告诉他使用 node@12.13.1 这个版本</span></span>
<span class="line">          <span class="token key atrule">node-version</span><span class="token punctuation">:</span> <span class="token string">'12.13.1'</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Install Dependencies <span class="token comment"># name 定义步骤的名称，这个可以在该 Action 运行起来之后，在 Github Actions Tab 下看到</span></span>
<span class="line">        <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span> <span class="token comment"># `run: |` 的方式，允许我们一次定义多个要执行的命令</span></span>
<span class="line">          yarn install</span>
<span class="line">          yarn run build</span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Push To Pages</span>
<span class="line">        <span class="token key atrule">working-directory</span><span class="token punctuation">:</span> ./dist <span class="token comment"># 指定下面指令运行的目录</span></span>
<span class="line">        <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string"></span>
<span class="line">          git init</span>
<span class="line">          git checkout -b main</span>
<span class="line">          git add -A</span></span>
<span class="line">        <span class="token comment"># 这里把下面所有 `&lt;YOUR_NAME>/&lt;YOUR_EMAIL>/&lt;COMMIT_MSG>/&lt;YOUR_TOKEN>` 替换成你自己的就可以了</span></span>
<span class="line">          git <span class="token punctuation">-</span>c user.name='&lt;YOUR_NAME<span class="token punctuation">></span>' <span class="token punctuation">-</span>c user.email='&lt;YOUR_EMAIL<span class="token punctuation">></span>' commit <span class="token punctuation">-</span>m '&lt;COMMIT_MSG<span class="token punctuation">></span>'</span>
<span class="line">        <span class="token comment"># 这里需要一个 共开仓库 的 secrets 配置，这里的 secrets 是一个环境变量，可以直接拿过来直接用</span></span>
<span class="line">          git remote add origin https<span class="token punctuation">:</span>//$<span class="token punctuation">{</span><span class="token punctuation">{</span>secrets.&lt;YOUR_TOKEN<span class="token punctuation">></span><span class="token punctuation">}</span><span class="token punctuation">}</span>@github.com/&lt;YOUR_NAME<span class="token punctuation">></span>/blog.git</span>
<span class="line">          git push origin main <span class="token punctuation">-</span>f <span class="token punctuation">-</span>q</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>name：指定工作流的名称。</li>
<li>on：定义工作流触发的事件，例如 push、pull_request 等。</li>
<li>jobs：定义工作流中的任务，每个任务对应一个 job。</li>
<li>runs-on：指定任务运行的操作系统环境。</li>
<li>steps：定义任务中的步骤，每个步骤可以调用一个动作或者执行命令。</li>
<li>uses：指定动作的名称和版本。</li>
<li>with：传递给动作的输入参数。</li>
<li>run：执行命令。</li>
</ul>
<p>workflow 文件的配置字段非常多，详见官方文档。下面是一些基本字段。</p>
<h3 id="_2-3-2-详细配置" tabindex="-1"><a class="header-anchor" href="#_2-3-2-详细配置"><span>2.3.2 详细配置</span></a></h3>
<h4 id="_1-name命名" tabindex="-1"><a class="header-anchor" href="#_1-name命名"><span>1. name命名</span></a></h4>
<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre v-pre><code><span class="line"><span class="token comment">#name字段是 workflow 的名称。如果省略该字段，默认为当前 workflow 的文件名。</span></span>
<span class="line"><span class="token key atrule">name</span><span class="token punctuation">:</span> GitHub Actions Demo</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-触发事件" tabindex="-1"><a class="header-anchor" href="#_2-触发事件"><span>2. 触发事件</span></a></h4>
<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre v-pre><code><span class="line"><span class="token comment">#push事件触发 workflow。</span></span>
<span class="line"><span class="token key atrule">on</span><span class="token punctuation">:</span> push</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token comment">#on字段也可以是事件的数组。`push`事件或`pull_request`事件都可以触发 `workflow`。</span></span>
<span class="line"><span class="token key atrule">on</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>push<span class="token punctuation">,</span> pull_request<span class="token punctuation">]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>实例：</strong></p>
<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre v-pre><code><span class="line"><span class="token comment"># 1. 只有`master`分支发生`push`事件时，才会触发 workflow</span></span>
<span class="line"><span class="token key atrule">on</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">push</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">branches</span><span class="token punctuation">:</span>    </span>
<span class="line">      <span class="token punctuation">-</span> master</span>
<span class="line"><span class="token comment"># 2. push tag 时触发</span></span>
<span class="line"><span class="token key atrule">on</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">push</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">tags</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token punctuation">-</span> <span class="token string">'v*'</span></span>
<span class="line"><span class="token comment"># 3. 发布 re­lease 触发</span></span>
<span class="line"><span class="token key atrule">on</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">release</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">types</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>published<span class="token punctuation">]</span></span>
<span class="line"><span class="token comment"># 4. 定时触发</span></span>
<span class="line">  <span class="token key atrule">on</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">schedule</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token punctuation">-</span> <span class="token key atrule">cron</span><span class="token punctuation">:</span>  <span class="token string">'0 * * * *'</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-job-任务" tabindex="-1"><a class="header-anchor" href="#_3-job-任务"><span>3. job 任务</span></a></h4>
<p>【jobs】（任务）是工作流程的基本构建块，它们是在同一运行器上执行的一系列步骤的集合。</p>
<p>jobs字段里面，需要写出每一项任务的job_id，具体名称自定义。job_id里面的name字段是任务的说明。</p>
<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre v-pre><code><span class="line"><span class="token comment">#job_id分别是my_first_job和my_second_job</span></span>
<span class="line"><span class="token key atrule">jobs</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">my_first_job</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">name</span><span class="token punctuation">:</span> My first job</span>
<span class="line">  <span class="token key atrule">my_second_job</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">name</span><span class="token punctuation">:</span> My second job</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>每个工作流可以包含一个或多个作业，这些作业可以并行或串行执行。</p>
<ul>
<li>串行执行示例
在这个示例中，job2 会在 job1 成功完成后才开始执行。这是因为 job2 使用了 needs 关键字来指定它依赖于 job1。</li>
</ul>
<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre v-pre><code><span class="line"><span class="token key atrule">name</span><span class="token punctuation">:</span> 串行执行作业示例</span>
<span class="line"></span>
<span class="line"><span class="token key atrule">on</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>push<span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line"><span class="token key atrule">jobs</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">job1</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">name</span><span class="token punctuation">:</span> 第一个作业</span>
<span class="line">    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest</span>
<span class="line">    <span class="token key atrule">steps</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 打印消息</span>
<span class="line">        <span class="token key atrule">run</span><span class="token punctuation">:</span> echo "这是第一个作业"</span>
<span class="line"></span>
<span class="line">  <span class="token key atrule">job2</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">name</span><span class="token punctuation">:</span> 第二个作业</span>
<span class="line">    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest</span>
<span class="line">    <span class="token key atrule">needs</span><span class="token punctuation">:</span> job1  <span class="token comment"># 指定 job2 依赖于 job1</span></span>
<span class="line">    <span class="token key atrule">steps</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 打印消息</span>
<span class="line">        <span class="token key atrule">run</span><span class="token punctuation">:</span> echo "这是第二个作业，它在第一个作业之后执行"</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>并行执行示例
在这个示例中，job1 和 job2 会并行执行，因为它们之间没有指定依赖关系。</li>
</ul>
<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre v-pre><code><span class="line"><span class="token key atrule">name</span><span class="token punctuation">:</span> 并行执行作业示例</span>
<span class="line"></span>
<span class="line"><span class="token key atrule">on</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>push<span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line"><span class="token key atrule">jobs</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">job1</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">name</span><span class="token punctuation">:</span> 第一个作业</span>
<span class="line">    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest</span>
<span class="line">    <span class="token key atrule">steps</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 打印消息</span>
<span class="line">        <span class="token key atrule">run</span><span class="token punctuation">:</span> echo "这是第一个作业"</span>
<span class="line"></span>
<span class="line">  <span class="token key atrule">job2</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">name</span><span class="token punctuation">:</span> 第二个作业</span>
<span class="line">    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest</span>
<span class="line">    <span class="token key atrule">steps</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 打印消息</span>
<span class="line">        <span class="token key atrule">run</span><span class="token punctuation">:</span> echo "这是第二个作业，它与第一个作业并行执行"</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>复杂示例：混合串行与并行
在这个示例中，job1 和 job2 会并行执行，但 job3 会在它们两者都成功完成后才开始执行。</li>
</ul>
<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre v-pre><code><span class="line"><span class="token key atrule">name</span><span class="token punctuation">:</span> 混合串行与并行执行作业示例</span>
<span class="line"></span>
<span class="line"><span class="token key atrule">on</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>push<span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line"><span class="token key atrule">jobs</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">job1</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">name</span><span class="token punctuation">:</span> 第一个作业</span>
<span class="line">    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest</span>
<span class="line">    <span class="token key atrule">steps</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 打印消息</span>
<span class="line">        <span class="token key atrule">run</span><span class="token punctuation">:</span> echo "这是第一个作业"</span>
<span class="line"></span>
<span class="line">  <span class="token key atrule">job2</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">name</span><span class="token punctuation">:</span> 第二个作业</span>
<span class="line">    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest</span>
<span class="line">    <span class="token key atrule">steps</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 打印消息</span>
<span class="line">        <span class="token key atrule">run</span><span class="token punctuation">:</span> echo "这是第二个作业，与第一个作业并行执行"</span>
<span class="line"></span>
<span class="line">  <span class="token key atrule">job3</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">name</span><span class="token punctuation">:</span> 第三个作业</span>
<span class="line">    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest</span>
<span class="line">    <span class="token key atrule">needs</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>job1<span class="token punctuation">,</span> job2<span class="token punctuation">]</span>  <span class="token comment"># 指定 job3 依赖于 job1 和 job2</span></span>
<span class="line">    <span class="token key atrule">steps</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 打印消息</span>
<span class="line">        <span class="token key atrule">run</span><span class="token punctuation">:</span> echo "这是第三个作业，它在第一个和第二个作业之后执行"</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-运行主机环境" tabindex="-1"><a class="header-anchor" href="#_4-运行主机环境"><span>4. 运行主机环境</span></a></h4>
<p>runs-on字段指定运行所需要的虚拟机环境。它是必填字段。目前可用的虚拟机如下。</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">ubuntu-latest，ubuntu-18.04或ubuntu-16.04</span>
<span class="line">windows-latest，windows-2019或windows-2016</span>
<span class="line">macOS-latest或macOS-10.14</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre v-pre><code><span class="line"><span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span><span class="token number">18.04</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="_5-运行步骤" tabindex="-1"><a class="header-anchor" href="#_5-运行步骤"><span>5. 运行步骤</span></a></h4>
<p>steps 是工作流（workflow）中作业（job）的基本执行单元。每个 step 可以执行一个命令或调用一个动作（action）。</p>
<p>基本结构
在 YAML 格式的工作流文件中，steps 是定义在 job 下的一个数组。每个 step 通常包含以下字段：</p>
<ul>
<li>name（可选）：为该步骤指定一个名称，这有助于在GitHub Actions的日志中更容易地识别步骤。</li>
<li>uses（可选）：指定一个动作（action）来执行。动作可以是GitHub Actions Marketplace中的一个公共动作，也可以是你自己定义的动作。</li>
<li>run（可选）：直接在运行器上执行一个命令或脚本。如果同时指定了 uses 和 run，那么 run 将在动作执行后运行。</li>
<li>with（可选）：当使用动作时，with 允许你传递参数给动作。</li>
<li>env（可选）：定义在执行步骤时要设置的环境变量。</li>
<li>id（可选）：为步骤指定一个唯一标识符，可以在后续步骤中通过 <code v-pre>${{ steps.&lt;id&gt;.outputs.&lt;output_name&gt; }}</code> 引用该步骤的输出。</li>
<li>continue-on-error（可选）：如果设置为 true，即使步骤失败，作业也会继续执行后续步骤。</li>
</ul>
<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre v-pre><code><span class="line"><span class="token key atrule">jobs</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">example-job</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest</span>
<span class="line">    <span class="token key atrule">steps</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 示例步骤名称</span>
<span class="line">        <span class="token comment"># uses 字段指定要使用的动作（action），可以是 GitHub Actions 提供的，也可以是第三方或自己定义的</span></span>
<span class="line">        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v2</span>
<span class="line">        </span>
<span class="line">        <span class="token comment"># with 字段用于向动作传递参数</span></span>
<span class="line">        <span class="token key atrule">with</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token comment"># 这里是传递给动作的参数，根据动作的定义来填写</span></span>
<span class="line">          <span class="token key atrule">ref</span><span class="token punctuation">:</span> <span class="token string">'main'</span></span>
<span class="line">        </span>
<span class="line">        <span class="token comment"># env 字段用于设置环境变量，这些变量在步骤执行期间可用</span></span>
<span class="line">        <span class="token key atrule">env</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token key atrule">MY_ENV_VAR</span><span class="token punctuation">:</span> <span class="token string">'my-value'</span></span>
<span class="line">        </span>
<span class="line">        <span class="token comment"># id 字段为步骤指定一个唯一标识符，可以在后续步骤中引用此步骤的输出</span></span>
<span class="line">        <span class="token key atrule">id</span><span class="token punctuation">:</span> checkout<span class="token punctuation">-</span>step</span>
<span class="line">        </span>
<span class="line">        <span class="token comment"># 注意：通常 uses 和 run 字段不会同时出现在一个步骤中。</span></span>
<span class="line">        <span class="token comment"># 如果同时出现，run 字段的命令会在 uses 字段指定的动作执行完毕后运行。</span></span>
<span class="line">        <span class="token comment"># 在这个例子中，我们没有使用 run 字段。</span></span>
<span class="line"></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 执行自定义命令</span>
<span class="line">        <span class="token comment"># run 字段用于直接执行 shell 命令或脚本</span></span>
<span class="line">        <span class="token key atrule">run</span><span class="token punctuation">:</span> echo "Hello<span class="token punctuation">,</span> World<span class="token tag">!</span> This is a custom command."</span>
<span class="line">        </span>
<span class="line">        <span class="token comment"># 也可以为这个步骤设置环境变量</span></span>
<span class="line">        <span class="token key atrule">env</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token key atrule">ANOTHER_ENV_VAR</span><span class="token punctuation">:</span> <span class="token string">'another-value'</span></span>
<span class="line">        </span>
<span class="line">        <span class="token comment"># 这个步骤没有使用 uses 字段，因此它只会执行 run 字段中的命令</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例2：</strong></p>
<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre v-pre><code><span class="line"><span class="token key atrule">jobs</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">build</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token comment"># 流程工作名称是Greeting</span></span>
<span class="line">      <span class="token key atrule">name</span><span class="token punctuation">:</span> Greeting</span>
<span class="line">      <span class="token comment"># 流程工作运行在Linux</span></span>
<span class="line">      <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest</span>
<span class="line">      <span class="token key atrule">steps</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token comment"># 此步骤使用GitHub的hello world javascript操作:</span></span>
<span class="line">        <span class="token comment"># https://github.com/actions/hello-world-javascript-action</span></span>
<span class="line">        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Hello world</span>
<span class="line">          <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/hello<span class="token punctuation">-</span>world<span class="token punctuation">-</span>javascript<span class="token punctuation">-</span>action@v1</span>
<span class="line">          <span class="token key atrule">with</span><span class="token punctuation">:</span></span>
<span class="line">            <span class="token key atrule">who-to-greet</span><span class="token punctuation">:</span> <span class="token string">'Mona the Octocat'</span></span>
<span class="line">          <span class="token key atrule">id</span><span class="token punctuation">:</span> hello</span>
<span class="line">        <span class="token comment"># 此步骤打印前一步骤操作的输出（时间）。</span></span>
<span class="line">        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Echo the greeting's time</span>
<span class="line">          <span class="token key atrule">run</span><span class="token punctuation">:</span> echo 'The time was $<span class="token punctuation">{</span><span class="token punctuation">{</span> steps.hello.outputs.time <span class="token punctuation">}</span><span class="token punctuation">}</span>.'</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_6-引用-action" tabindex="-1"><a class="header-anchor" href="#_6-引用-action"><span>6. 引用 action</span></a></h4>
<p>引用 action 是通过 uses 字段来实现的。uses 字段指定了要在步骤（step）中执行的动作（action）。这个动作可以是一个 GitHub 提供的内置动作，一个第三方动作，或者你自己在仓库中定义的动作。</p>
<ul>
<li>引用 GitHub 提供的内置动作
GitHub 提供了一些内置的动作，比如用于检出代码仓库的 actions/checkout。要引用这样的动作，你可以使用以下格式：</li>
</ul>
<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre v-pre><code><span class="line"><span class="token key atrule">steps</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Checkout repository</span>
<span class="line">    <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v2</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里，actions/checkout 是动作的仓库和名称，@v2 是动作的版本号。</p>
<ul>
<li>引用第三方动作
第三方动作是由 GitHub 社区或其他用户创建的，并发布在 GitHub Actions Marketplace 上。要引用第三方动作，你需要知道动作的完整名称（包括仓库和所有者）以及版本号：</li>
</ul>
<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre v-pre><code><span class="line"><span class="token key atrule">steps</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Deploy to server</span>
<span class="line">    <span class="token key atrule">uses</span><span class="token punctuation">:</span> username/repository@version</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将 username/repository 替换为动作的仓库路径，version 替换为你想使用的版本号。</p>
<ul>
<li>引用自己定义的动作
如果你在自己的仓库中定义了动作，并且想在同一仓库的工作流中使用它，你可以使用相对路径来引用它：</li>
</ul>
<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre v-pre><code><span class="line"><span class="token key atrule">steps</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Run my custom action</span>
<span class="line">    <span class="token key atrule">uses</span><span class="token punctuation">:</span> ./.github/actions/my<span class="token punctuation">-</span>custom<span class="token punctuation">-</span>action</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里，<code v-pre>./.github/actions/my-custom-action</code> 是你自定义动作在仓库中的路径。注意，路径是相对于工作流文件（通常是 <code v-pre>.github/workflows/</code> 目录下的 YAML 文件）的。</p>
<p>如果你的自定义动作在另一个仓库中，你需要使用完整的仓库路径来引用它，就像引用第三方动作一样。</p>
<ul>
<li>使用分支、标签或 SHA
除了使用版本号，你还可以使用分支名、标签或提交的 SHA 来引用动作。这对于引用开发中的动作或特定提交很有用：</li>
</ul>
<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre v-pre><code><span class="line"><span class="token key atrule">steps</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Run action from branch</span>
<span class="line">    <span class="token key atrule">uses</span><span class="token punctuation">:</span> username/repository@branch<span class="token punctuation">-</span>name</span>
<span class="line"></span>
<span class="line">  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Run action from tag</span>
<span class="line">    <span class="token key atrule">uses</span><span class="token punctuation">:</span> username/repository@v1.0.0<span class="token punctuation">-</span>beta</span>
<span class="line"></span>
<span class="line">  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Run action from SHA</span>
<span class="line">    <span class="token key atrule">uses</span><span class="token punctuation">:</span> username/repository@sha<span class="token punctuation">-</span>value</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>注意事项:
1.确保你引用的动作是存在的，并且版本号、分支名、标签或 SHA 是正确的。
2.如果你使用的是第三方动作，检查该动作的文档以了解如何配置和使用它。
3.对于自己定义的动作，确保动作文件（通常是 JavaScript 或 TypeScript 文件）和相关的元数据文件（如 action.yml）都正确配置。
4.GitHub Actions 会缓存使用过的动作，以提高工作流的执行速度。如果你更改了动作的代码或配置，并且想要确保使用最新版本，你可能需要增加版本号或使用新的提交 SHA。</p>
</blockquote>
<h4 id="_7-workflow-status" tabindex="-1"><a class="header-anchor" href="#_7-workflow-status"><span>7. workflow status</span></a></h4>
<p>workflow status（工作流状态）是指一个工作流（workflow）执行过程中的当前状态或结果。GitHub Actions 提供了一个可视化的界面来查看工作流的状态，包括每个作业（job）和步骤（step）的执行情况。</p>
<p>以下是一些常见的 workflow status 及其含义：</p>
<ul>
<li>
<p>‌<strong>Pending（挂起）‌</strong>：工作流已触发但尚未开始执行。这可能是因为等待运行器（runner）变得可用，或者因为工作流被配置为在某些条件下才执行。</p>
</li>
<li>
<p>‌<strong>In progress（进行中）‌‌</strong>：工作流正在执行中。这意味着至少有一个作业正在运行，或者工作流正在等待某个作业开始执行。</p>
</li>
<li>
<p>‌<strong>Success（成功）‌‌</strong>：工作流已成功完成。这意味着工作流中的所有作业都按预期执行，并且没有作业失败。</p>
</li>
<li>
<p>‌‌<strong>Failure（失败）‌‌</strong>：工作流执行失败。这可能是因为某个作业中的步骤执行失败，或者因为工作流被配置为在某个条件下失败。</p>
</li>
<li>
<p>‌<strong>Cancelled（已取消）‌‌</strong>：工作流已被取消。这通常是因为用户手动取消了工作流，或者因为工作流被配置为在某些条件下取消。</p>
</li>
<li>
<p>‌<strong>Skipped（已跳过）‌‌</strong>：工作流或作业已被跳过。这可能是因为工作流被配置为在某些条件下不执行，或者因为某个前置作业失败，导致后续作业被跳过。</p>
</li>
</ul>
<p>要查看工作流的状态，你可以：</p>
<ul>
<li>在 GitHub 仓库的“Actions”标签页中查找工作流。</li>
<li>在工作流执行页面上，查看每个作业和步骤的详细状态和输出。</li>
<li>使用 GitHub Actions 的 API 来获取工作流状态的信息。</li>
</ul>
<h4 id="_8-with-传参" tabindex="-1"><a class="header-anchor" href="#_8-with-传参"><span>8. with 传参</span></a></h4>
<p>with 关键字用于向动作（action）传递参数。这些参数可以是字符串、数字、布尔值、环境变量引用或其他工作流程中可用的值。通过向动作传递参数，你可以自定义其行为以满足特定需求。
以下是一个使用 with 传参的示例：</p>
<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre v-pre><code><span class="line"><span class="token key atrule">jobs</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">example-job</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest</span>
<span class="line">    <span class="token key atrule">steps</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Checkout repository</span>
<span class="line">        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v2</span>
<span class="line">        </span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Run a custom action with parameters</span>
<span class="line">        <span class="token key atrule">uses</span><span class="token punctuation">:</span> username/custom<span class="token punctuation">-</span>action@v1.0.0</span>
<span class="line">        <span class="token key atrule">with</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token key atrule">param1</span><span class="token punctuation">:</span> <span class="token string">'value1'</span>           <span class="token comment"># 直接传递字符串值</span></span>
<span class="line">          <span class="token key atrule">param2</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.MY_SECRET <span class="token punctuation">}</span><span class="token punctuation">}</span>  <span class="token comment"># 引用仓库秘密作为参数</span></span>
<span class="line">          <span class="token key atrule">param3</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> github.sha <span class="token punctuation">}</span><span class="token punctuation">}</span>  <span class="token comment"># 引用 GitHub 上下文中的值</span></span>
<span class="line">          <span class="token key atrule">param4</span><span class="token punctuation">:</span> <span class="token string">'true'</span>             <span class="token comment"># 传递布尔值（注意字符串形式）</span></span>
<span class="line">          <span class="token key atrule">param5</span><span class="token punctuation">:</span> <span class="token number">123</span>                <span class="token comment"># 传递数字（注意会被当作字符串处理）</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，username/custom-action@v1.0.0 是一个自定义动作，它接收了五个参数：</p>
<ul>
<li>param1 被设置为字符串 'value1'。</li>
<li>param2 引用了一个名为 MY_SECRET 的仓库秘密。仓库秘密是在 GitHub 仓库的设置中配置的敏感信息，如 API 密钥或密码。</li>
<li>param3 使用了 GitHub 上下文中的 github.sha 值，它代表触发工作流程的提交的 SHA。</li>
<li>param4 被设置为字符串 'true'，虽然它表示的是一个布尔值，但在 YAML 中布尔值通常也需要以字符串形式传递。</li>
<li>param5 被设置为数字 123，但在 GitHub Actions 中，所有参数最终都会被当作字符串处理。
请注意，当你使用 with 传参时，参数名应该与动作期望接收的参数名完全匹配。此外，如果参数值是可选的，并且你不希望传递它，你可以省略该参数，或者将其值设置为空字符串（''）。</li>
</ul>
<blockquote>
<p>如果你正在编写自己的动作，并且想要接收参数，你需要在动作的元数据文件（通常是 action.yml）中定义这些参数，以及它们的类型、默认值（如果有的话）和其他属性。然后，在你的动作代码中，你可以访问这些参数并根据需要使用它们。</p>
</blockquote>
<h4 id="_9-env-环境变量" tabindex="-1"><a class="header-anchor" href="#_9-env-环境变量"><span>9. env 环境变量</span></a></h4>
<p>‌GitHub Actions中的env关键字用于在工作流文件中声明环境变量，这些变量可以在后续的作业或步骤中被访问和使用‌。</p>
<p>环境变量在GitHub Actions中扮演着重要角色，它们允许开发者存储一些配置信息或敏感数据（如API密钥、数据库连接字符串等），并在工作流程的执行过程中方便地引用这些值。通过使用env关键字，开发者可以在工作流级别、作业级别或步骤级别声明环境变量，从而控制这些变量的访问范围和作用域。</p>
<p>‌示例‌：</p>
<p>以下是一个在工作流级别声明环境变量的示例‌</p>
<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre v-pre><code><span class="line"><span class="token key atrule">name</span><span class="token punctuation">:</span> workflow<span class="token punctuation">-</span>level<span class="token punctuation">-</span>custom<span class="token punctuation">-</span>environment<span class="token punctuation">-</span>variables</span>
<span class="line"><span class="token key atrule">on</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>push<span class="token punctuation">]</span></span>
<span class="line"><span class="token comment"># 在工作流级别声明环境变量</span></span>
<span class="line"><span class="token key atrule">env</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">PUBLICENV</span><span class="token punctuation">:</span> Available for all jobs in this workflow</span>
<span class="line"><span class="token key atrule">jobs</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">sample-job-1</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest</span>
<span class="line">    <span class="token key atrule">steps</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> step<span class="token punctuation">-</span><span class="token number">1</span></span>
<span class="line">        <span class="token key atrule">run</span><span class="token punctuation">:</span> echo "$<span class="token punctuation">{</span>PUBLICENV<span class="token punctuation">}</span>" <span class="token comment"># 这将回显PUBLICENV的值/字符串</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> step<span class="token punctuation">-</span><span class="token number">2</span></span>
<span class="line">        <span class="token key atrule">run</span><span class="token punctuation">:</span> echo "$<span class="token punctuation">{</span>PUBLICENV<span class="token punctuation">}</span>" <span class="token comment"># 这同样将回显PUBLICENV的值/字符串</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个示例中，PUBLICENV变量在工作流级别被声明，因此它可以在该工作流中的所有作业和步骤中被访问。在sample-job-1作业中，step-1和step-2步骤都通过echo命令回显了PUBLICENV变量的值。</p>
<p>此外，保存的环境变量不仅可以在当前步骤中使用，还可以通过特定的方式（如<code v-pre>${{ env.MY_VARIABLE }}</code>）在后续的步骤或作业中被引用‌2。这使得环境变量成为在GitHub Actions工作流程中传递和共享数据的一种有效手段。</p>
<h4 id="_10-secrets" tabindex="-1"><a class="header-anchor" href="#_10-secrets"><span>10. Secrets</span></a></h4>
<p>Secrets的作用是在GitHub Actions工作流程中安全地存储和访问敏感信息‌。这些信息可能包括API密钥、密码、证书等，它们对于工作流程的执行是必要的，但又不能公开暴露。通过Secrets机制，开发者可以确保这些信息在存储和传输过程中的安全性。</p>
<p>‌具体作用包括‌：</p>
<p>‌安全存储‌：Secrets允许开发者在组织、存储库或环境级别安全地存储敏感信息。
‌访问控制‌：对于组织级别的Secrets，可以使用访问策略来控制哪些仓库可以使用这些Secrets。对于环境级别的Secrets，可以启用所需的审查者来控制对Secrets的访问，确保在必要的审查者授予批准之前，工作流程作业无法访问这些Secrets。
‌避免硬编码‌：使用Secrets可以避免将敏感信息硬编码到工作流文件中，从而提高工作流程的安全性和可维护性。
‌示例‌：</p>
<p>假设你有一个API密钥，需要在GitHub Actions工作流程中使用它来访问某个外部服务。你可以按照以下步骤使用Secrets：</p>
<p>‌创建Secret‌：在GitHub仓库的“Settings”-&gt;“Secrets and variables”或“Secrets”页面中，点击“New repository secret”或“New secret”按钮，输入Secret的名称（如MY_API_KEY）和值（即你的API密钥），然后点击“Add secret”按钮保存。
‌在工作流文件中引用Secret‌：在你的GitHub Actions工作流文件（.yml格式）中，你可以使用<code v-pre>${{ secrets.MY_API_KEY }}</code>语法来引用这个Secret。例如：</p>
<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre v-pre><code><span class="line"><span class="token key atrule">name</span><span class="token punctuation">:</span> Use API Key</span>
<span class="line"></span>
<span class="line"><span class="token key atrule">on</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>push<span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line"><span class="token key atrule">jobs</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">build</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest</span>
<span class="line"></span>
<span class="line">    <span class="token key atrule">steps</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Checkout code</span>
<span class="line">        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v2</span>
<span class="line"></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Use API key in a command</span>
<span class="line">        <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token key atrule">curl -H "Authorization</span><span class="token punctuation">:</span> Bearer $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.MY_API_KEY <span class="token punctuation">}</span><span class="token punctuation">}</span>" https<span class="token punctuation">:</span>//api.example.com/data</span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个示例中，run步骤中的curl命令使用了<code v-pre>${{ secrets.MY_API_KEY }}</code>来引用之前创建的Secret，并将其作为Bearer令牌传递给外部API服务。GitHub Actions会自动处理Secrets的加密和解密，确保它们在存储和传输过程中的安全性‌</p>
<h4 id="_11-actions-checkout" tabindex="-1"><a class="header-anchor" href="#_11-actions-checkout"><span>11. actions/checkout</span></a></h4>
<p>在GitHub Actions中，actions/checkout 是一个常用的 action，它用于在工作流中检出（checkout）代码仓库。这允许你的工作流访问仓库中的代码，以便进行构建、测试和其他操作。以下是关于 actions/checkout 的详细信息和示例：</p>
<p><a href="https://github.com/actions/checkout" target="_blank" rel="noopener noreferrer">进入主页</a></p>
<p>作用</p>
<ul>
<li>‌<strong>检出代码仓库‌</strong>‌：actions/checkout 可以检出指定的分支、标签或提交。</li>
<li>‌<strong>‌配置Git认证‌‌</strong>：支持配置Git认证，以便在检出私有仓库时使用。</li>
<li>‌<strong>‌检出子模块‌‌</strong>：如果代码仓库中包含Git子模块，actions/checkout 可以配置为检出这些子模块。</li>
<li>‌<strong>‌自定义检出路径‌‌</strong>：可以将检出的代码放置在工作流运行器上的自定义路径中。</li>
</ul>
<p>使用示例</p>
<ol>
<li>‌基本使用‌：</li>
</ol>
<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre v-pre><code><span class="line"><span class="token key atrule">name</span><span class="token punctuation">:</span> CI</span>
<span class="line"><span class="token key atrule">on</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>push<span class="token punctuation">]</span></span>
<span class="line"><span class="token key atrule">jobs</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">build</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest</span>
<span class="line">    <span class="token key atrule">steps</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Checkout code</span>
<span class="line">        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v3  <span class="token comment"># 使用最新版本，确保兼容性</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>‌检出特定分支或标签‌：</li>
</ol>
<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre v-pre><code><span class="line"><span class="token key atrule">name</span><span class="token punctuation">:</span> CI</span>
<span class="line"><span class="token key atrule">on</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>push<span class="token punctuation">]</span></span>
<span class="line"><span class="token key atrule">jobs</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">build</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest</span>
<span class="line">    <span class="token key atrule">steps</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Checkout specific branch or tag</span>
<span class="line">        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v3</span>
<span class="line">        <span class="token key atrule">with</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token key atrule">ref</span><span class="token punctuation">:</span> <span class="token string">'refs/heads/my-branch'</span>  <span class="token comment"># 或 'refs/tags/my-tag'</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>‌检出所有历史记录‌：
默认情况下，actions/checkout 只检出单个提交。如果你想检出所有历史记录，可以设置 fetch-depth 为 0：</li>
</ol>
<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre v-pre><code><span class="line"><span class="token key atrule">name</span><span class="token punctuation">:</span> CI</span>
<span class="line"><span class="token key atrule">on</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>push<span class="token punctuation">]</span></span>
<span class="line"><span class="token key atrule">jobs</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">build</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest</span>
<span class="line">    <span class="token key atrule">steps</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Checkout all history</span>
<span class="line">        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v3</span>
<span class="line">        <span class="token key atrule">with</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token key atrule">fetch-depth</span><span class="token punctuation">:</span> <span class="token number">0</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4">
<li>检出私有仓库‌：
如果你需要检出私有仓库，可以使用个人访问令牌（PAT）：</li>
</ol>
<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre v-pre><code><span class="line"><span class="token key atrule">name</span><span class="token punctuation">:</span> CI</span>
<span class="line"><span class="token key atrule">on</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>push<span class="token punctuation">]</span></span>
<span class="line"><span class="token key atrule">jobs</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">build</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest</span>
<span class="line">    <span class="token key atrule">steps</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Checkout private repository</span>
<span class="line">        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v3</span>
<span class="line">        <span class="token key atrule">with</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token key atrule">repository</span><span class="token punctuation">:</span> my<span class="token punctuation">-</span>org/my<span class="token punctuation">-</span>private<span class="token punctuation">-</span>repo</span>
<span class="line">          <span class="token key atrule">token</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.GH_PAT <span class="token punctuation">}</span><span class="token punctuation">}</span>  <span class="token comment"># 使用存储在仓库Secrets中的PAT</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5">
<li>检出子模块‌：
如果你使用了Git子模块，可以配置 actions/checkout 来检出这些子模块：</li>
</ol>
<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre v-pre><code><span class="line"><span class="token key atrule">name</span><span class="token punctuation">:</span> CI</span>
<span class="line"><span class="token key atrule">on</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>push<span class="token punctuation">]</span></span>
<span class="line"><span class="token key atrule">jobs</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">build</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest</span>
<span class="line">    <span class="token key atrule">steps</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Checkout with submodules</span>
<span class="line">        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v3</span>
<span class="line">        <span class="token key atrule">with</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token key atrule">submodules</span><span class="token punctuation">:</span> recursive</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="6">
<li>检出多个仓库‌：
你可以在同一个工作流中检出多个仓库，并将它们放在不同的目录中：</li>
</ol>
<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre v-pre><code><span class="line"><span class="token key atrule">name</span><span class="token punctuation">:</span> CI</span>
<span class="line"><span class="token key atrule">on</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>push<span class="token punctuation">]</span></span>
<span class="line"><span class="token key atrule">jobs</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">build</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest</span>
<span class="line">    <span class="token key atrule">steps</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Checkout main repository</span>
<span class="line">        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v3</span>
<span class="line">        <span class="token key atrule">with</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token key atrule">path</span><span class="token punctuation">:</span> main</span>
<span class="line"></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Checkout tools repository</span>
<span class="line">        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v3</span>
<span class="line">        <span class="token key atrule">with</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token key atrule">repository</span><span class="token punctuation">:</span> my<span class="token punctuation">-</span>org/my<span class="token punctuation">-</span>tools</span>
<span class="line">          <span class="token key atrule">path</span><span class="token punctuation">:</span> my<span class="token punctuation">-</span>tools</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>注意事项
1.确保你使用的是 actions/checkout 的最新版本，以获得最新的功能和安全修复。
2.在检出私有仓库时，确保你的个人访问令牌（PAT）具有足够的权限，并且已经作为Secret存储在仓库中。
3.对于复杂的检出需求（如检出特定分支、标签或提交，或检出具有特定配置的子模块），请查阅 actions/checkout 的官方文档以获取更多信息。</p>
</blockquote>
</div></template>


