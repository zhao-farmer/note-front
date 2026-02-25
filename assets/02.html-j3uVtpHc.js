import{ar as n,as as a,at as e,au as p}from"./app-5nod3Nrs.js";const l={};function i(t,s){return p(),a("div",null,[...s[0]||(s[0]=[e(`<h1 id="二、pm2的使用" tabindex="-1"><a class="header-anchor" href="#二、pm2的使用"><span>二、PM2的使用</span></a></h1><p>pm2 是一个 Node.js 应用的生产级进程管理器（Process Manager），用于在后台运行、监控、重启和管理 Node.js 应用，特别适合部署 Express、Nuxt、Koa 等服务端应用。</p><table><thead><tr><th>功能</th><th>说明</th></tr></thead><tbody><tr><td>守护进程（Daemon）</td><td>让 Node.js 应用在后台持续运行（即使 SSH 断开）</td></tr><tr><td>自动重启</td><td>应用崩溃或服务器重启后自动恢复</td></tr><tr><td>负载均衡（Cluster 模式）</td><td>利用多核 CPU 提升性能</td></tr><tr><td>日志管理</td><td>自动分割 stdout/stderr 日志</td></tr><tr><td>启动脚本</td><td>生成系统服务（systemd），开机自启</td></tr><tr><td>监控与热重载</td><td>实时查看 CPU/内存，开发时支持文件变更自动重启</td></tr></tbody></table><h2 id="_2-1-pm2-的三大核心作用" tabindex="-1"><a class="header-anchor" href="#_2-1-pm2-的三大核心作用"><span>2.1 <strong>PM2 的三大核心作用</strong></span></a></h2><ol><li><p><strong>进程管理</strong></p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 启动、停止、重启应用</span></span>
<span class="line">pm2 start app.js        <span class="token comment"># 启动</span></span>
<span class="line">pm2 stop app            <span class="token comment"># 停止</span></span>
<span class="line">pm2 restart app         <span class="token comment"># 重启</span></span>
<span class="line">pm2 delete app          <span class="token comment"># 删除</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>负载均衡（集群模式）</strong></p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 自动在多核CPU上启动多个实例</span></span>
<span class="line">pm2 start app.js <span class="token parameter variable">-i</span> max    <span class="token comment"># 启动与CPU核心数相同的实例</span></span>
<span class="line">pm2 scale app +2           <span class="token comment"># 增加2个实例</span></span>
<span class="line">pm2 scale app <span class="token number">4</span>           <span class="token comment"># 设置固定4个实例</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>监控与日志</strong></p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line">pm2 monit                 <span class="token comment"># 实时监控面板</span></span>
<span class="line">pm2 logs                 <span class="token comment"># 查看所有日志</span></span>
<span class="line">pm2 logs app <span class="token parameter variable">--lines</span> <span class="token number">100</span> <span class="token comment"># 查看特定应用日志</span></span>
<span class="line">pm2 flush                <span class="token comment"># 清空日志</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="_2-2-安装与基本使用" tabindex="-1"><a class="header-anchor" href="#_2-2-安装与基本使用"><span>2.2 <strong>安装与基本使用</strong></span></a></h2><h3 id="_2-2-1-安装" tabindex="-1"><a class="header-anchor" href="#_2-2-1-安装"><span>2.2.1 安装</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 全局安装</span></span>
<span class="line"><span class="token function">npm</span> <span class="token function">install</span> pm2 <span class="token parameter variable">-g</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 检查版本</span></span>
<span class="line">pm2 <span class="token parameter variable">--version</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 开机自启动设置</span></span>
<span class="line">pm2 startup              <span class="token comment"># 生成启动脚本</span></span>
<span class="line">pm2 save                 <span class="token comment"># 保存当前进程列表</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-2-详细使用场景" tabindex="-1"><a class="header-anchor" href="#_2-2-2-详细使用场景"><span>2.2.2 <strong>详细使用场景</strong></span></a></h3><ul><li><p><strong>场景1：启动一个 Node.js 应用</strong></p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 基本启动</span></span>
<span class="line">pm2 start app.js</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 带名称启动</span></span>
<span class="line">pm2 start app.js <span class="token parameter variable">--name</span> <span class="token string">&quot;my-api&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 指定参数</span></span>
<span class="line">pm2 start app.js <span class="token parameter variable">--name</span> <span class="token string">&quot;my-api&quot;</span> <span class="token parameter variable">--watch</span> --max-memory-restart 200M</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>场景2：配置文件启动（推荐）</strong></p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token comment">// ecosystem.config.js</span></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">apps</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;api-server&#39;</span><span class="token punctuation">,</span>           <span class="token comment">// 应用名称</span></span>
<span class="line">    <span class="token literal-property property">script</span><span class="token operator">:</span> <span class="token string">&#39;./src/app.js&#39;</span><span class="token punctuation">,</span>       <span class="token comment">// 入口文件</span></span>
<span class="line">    <span class="token literal-property property">instances</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>                 <span class="token comment">// 启动4个实例（集群模式）</span></span>
<span class="line">    <span class="token literal-property property">exec_mode</span><span class="token operator">:</span> <span class="token string">&#39;cluster&#39;</span><span class="token punctuation">,</span>         <span class="token comment">// 集群模式</span></span>
<span class="line">    <span class="token literal-property property">watch</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>                  <span class="token comment">// 监听文件变化重启</span></span>
<span class="line">    <span class="token literal-property property">ignore_watch</span><span class="token operator">:</span> <span class="token punctuation">[</span>               <span class="token comment">// 忽略监听的目录</span></span>
<span class="line">      <span class="token string">&#39;node_modules&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string">&#39;logs&#39;</span></span>
<span class="line">    <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">max_memory_restart</span><span class="token operator">:</span> <span class="token string">&#39;1G&#39;</span><span class="token punctuation">,</span>     <span class="token comment">// 内存超过1G自动重启</span></span>
<span class="line">    <span class="token literal-property property">env</span><span class="token operator">:</span> <span class="token punctuation">{</span>                        <span class="token comment">// 开发环境变量</span></span>
<span class="line">      <span class="token constant">NODE_ENV</span><span class="token operator">:</span> <span class="token string">&#39;development&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token constant">PORT</span><span class="token operator">:</span> <span class="token number">3000</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">env_production</span><span class="token operator">:</span> <span class="token punctuation">{</span>             <span class="token comment">// 生产环境变量</span></span>
<span class="line">      <span class="token constant">NODE_ENV</span><span class="token operator">:</span> <span class="token string">&#39;production&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token constant">PORT</span><span class="token operator">:</span> <span class="token number">80</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">error_file</span><span class="token operator">:</span> <span class="token string">&#39;./logs/err.log&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 错误日志</span></span>
<span class="line">    <span class="token literal-property property">out_file</span><span class="token operator">:</span> <span class="token string">&#39;./logs/out.log&#39;</span><span class="token punctuation">,</span>   <span class="token comment">// 普通日志</span></span>
<span class="line">    <span class="token literal-property property">log_file</span><span class="token operator">:</span> <span class="token string">&#39;./logs/combined.log&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 合并日志</span></span>
<span class="line">    <span class="token literal-property property">time</span><span class="token operator">:</span> <span class="token boolean">true</span>                    <span class="token comment">// 日志添加时间戳</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>启动配置</strong>：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 使用配置文件启动</span></span>
<span class="line">pm2 start ecosystem.config.js</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 指定环境启动</span></span>
<span class="line">pm2 start ecosystem.config.js <span class="token parameter variable">--env</span> production</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 只启动某个应用</span></span>
<span class="line">pm2 start ecosystem.config.js <span class="token parameter variable">--only</span> api-server</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>场景3：管理多个应用</strong></p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token comment">// ecosystem.config.js</span></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">apps</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;api-server&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">script</span><span class="token operator">:</span> <span class="token string">&#39;./api/server.js&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">instances</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">env</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token constant">PORT</span><span class="token operator">:</span> <span class="token number">3001</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;web-server&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">script</span><span class="token operator">:</span> <span class="token string">&#39;./web/server.js&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">instances</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">env</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token constant">PORT</span><span class="token operator">:</span> <span class="token number">3002</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;worker&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">script</span><span class="token operator">:</span> <span class="token string">&#39;./worker/index.js&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">instances</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">cron_restart</span><span class="token operator">:</span> <span class="token string">&#39;0 */6 * * *&#39;</span>  <span class="token comment">// 每6小时重启</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="_2-3-常用命令大全" tabindex="-1"><a class="header-anchor" href="#_2-3-常用命令大全"><span>2.3 <strong>常用命令大全</strong></span></a></h2><ul><li><p><strong>进程管理命令</strong></p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 查看所有进程</span></span>
<span class="line">pm2 list</span>
<span class="line">pm2 <span class="token function">ls</span></span>
<span class="line">pm2 status</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 查看详细信息</span></span>
<span class="line">pm2 show app-name</span>
<span class="line">pm2 info app-name</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 停止/重启</span></span>
<span class="line">pm2 stop all                  <span class="token comment"># 停止所有</span></span>
<span class="line">pm2 restart all              <span class="token comment"># 重启所有</span></span>
<span class="line">pm2 reload all               <span class="token comment"># 零停机重载（逐个重启）</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 删除</span></span>
<span class="line">pm2 delete app-name          <span class="token comment"># 删除指定应用</span></span>
<span class="line">pm2 delete all               <span class="token comment"># 删除所有</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>监控命令</strong></p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 实时监控面板</span></span>
<span class="line">pm2 monit</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 查看资源占用</span></span>
<span class="line">pm2 dashboard</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 性能监控</span></span>
<span class="line">pm2 logs <span class="token parameter variable">--json</span>              <span class="token comment"># JSON格式日志</span></span>
<span class="line">pm2 logs <span class="token parameter variable">--format</span>            <span class="token comment"># 格式化日志</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>日志管理</strong></p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 实时日志</span></span>
<span class="line">pm2 logs                     <span class="token comment"># 所有应用日志</span></span>
<span class="line">pm2 logs api-server         <span class="token comment"># 指定应用日志</span></span>
<span class="line">pm2 logs <span class="token parameter variable">--lines</span> <span class="token number">200</span>        <span class="token comment"># 显示最后200行</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 日志操作</span></span>
<span class="line">pm2 flush                   <span class="token comment"># 清空所有日志</span></span>
<span class="line">pm2 reloadLogs              <span class="token comment"># 重载日志配置</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 日志分割（需要插件）</span></span>
<span class="line">pm2 <span class="token function">install</span> pm2-logrotate</span>
<span class="line">pm2 <span class="token builtin class-name">set</span> pm2-logrotate:max_size 10M    <span class="token comment"># 最大10M</span></span>
<span class="line">pm2 <span class="token builtin class-name">set</span> pm2-logrotate:retain <span class="token number">30</span>      <span class="token comment"># 保留30个文件</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>集群/负载均衡</strong></p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 启动集群</span></span>
<span class="line">pm2 start app.js <span class="token parameter variable">-i</span> <span class="token number">0</span>       <span class="token comment"># 0 = CPU核心数</span></span>
<span class="line">pm2 start app.js <span class="token parameter variable">-i</span> max     <span class="token comment"># 同上</span></span>
<span class="line">pm2 start app.js <span class="token parameter variable">-i</span> <span class="token number">4</span>       <span class="token comment"># 启动4个实例</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 调整实例数</span></span>
<span class="line">pm2 scale api-server +2     <span class="token comment"># 增加2个实例</span></span>
<span class="line">pm2 scale api-server <span class="token number">5</span>      <span class="token comment"># 设置为5个实例</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 优雅重载（零停机）</span></span>
<span class="line">pm2 reload api-server       <span class="token comment"># 逐个重启实例</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="_2-4-高级功能" tabindex="-1"><a class="header-anchor" href="#_2-4-高级功能"><span>2.4 <strong>高级功能</strong></span></a></h2><ol><li><p><strong>环境变量管理</strong></p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 启动时设置环境变量</span></span>
<span class="line">pm2 start app.js <span class="token parameter variable">--env</span> production</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 查看环境变量</span></span>
<span class="line">pm2 <span class="token function">env</span> <span class="token operator">&lt;</span>app-id<span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 动态更新环境变量</span></span>
<span class="line">pm2 restart app --update-env <span class="token parameter variable">--env</span> production</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>定时任务</strong></p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token comment">// ecosystem.config.js</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;backup-job&#39;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">script</span><span class="token operator">:</span> <span class="token string">&#39;./scripts/backup.js&#39;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">cron_restart</span><span class="token operator">:</span> <span class="token string">&#39;0 2 * * *&#39;</span><span class="token punctuation">,</span>      <span class="token comment">// 每天凌晨2点执行</span></span>
<span class="line">  <span class="token literal-property property">autorestart</span><span class="token operator">:</span> <span class="token boolean">false</span>              <span class="token comment">// 不自动重启</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>开机自启动</strong></p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 设置开机启动</span></span>
<span class="line">pm2 startup</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 保存当前进程列表</span></span>
<span class="line">pm2 save</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 取消开机启动</span></span>
<span class="line">pm2 unstartup</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 手动生成启动脚本</span></span>
<span class="line">pm2 startup systemd <span class="token parameter variable">-u</span> nodeuser <span class="token parameter variable">--hp</span> /home/nodeuser</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>性能指标</strong></p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 导出性能数据</span></span>
<span class="line">pm2 jlist                      <span class="token comment"># JSON格式列表</span></span>
<span class="line">pm2 report                     <span class="token comment"># 详细报告</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 健康检查</span></span>
<span class="line">pm2 <span class="token function">ping</span>                       <span class="token comment"># 检查PM2守护进程</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>模块管理</strong></p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 运行任意脚本</span></span>
<span class="line">pm2 start <span class="token function">npm</span> -- start         <span class="token comment"># npm start</span></span>
<span class="line">pm2 start <span class="token function">yarn</span> -- start        <span class="token comment"># yarn start</span></span>
<span class="line">pm2 start python -- app.py     <span class="token comment"># Python应用</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 安装PM2模块</span></span>
<span class="line">pm2 <span class="token function">install</span> pm2-server-monit   <span class="token comment"># 服务器监控</span></span>
<span class="line">pm2 <span class="token function">install</span> pm2-logrotate      <span class="token comment"># 日志轮转</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="_2-5-pm2-与-nginx-配合使用示例" tabindex="-1"><a class="header-anchor" href="#_2-5-pm2-与-nginx-配合使用示例"><span>2.5 <strong>PM2 与 Nginx 配合使用示例</strong></span></a></h2><p><strong>典型架构</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">客户端 → Nginx（负载均衡/SSL） → PM2（进程管理） → Node.js 应用</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol><li><p><strong>Nginx 配置</strong></p><div class="language-ini line-numbers-mode" data-highlighter="prismjs" data-ext="ini"><pre><code class="language-ini"><span class="line">upstream node_app {</span>
<span class="line">    least_conn;  # 最少连接负载均衡</span>
<span class="line"></span>
<span class="line">    <span class="token comment"># PM2 启动的实例</span></span>
<span class="line">    <span class="token key attr-name">server 127.0.0.1:3000 max_fails</span><span class="token punctuation">=</span><span class="token value attr-value">3 fail_timeout=30s;</span></span>
<span class="line">    <span class="token key attr-name">server 127.0.0.1:3001 max_fails</span><span class="token punctuation">=</span><span class="token value attr-value">3 fail_timeout=30s;</span></span>
<span class="line">    <span class="token key attr-name">server 127.0.0.1:3002 max_fails</span><span class="token punctuation">=</span><span class="token value attr-value">3 fail_timeout=30s;</span></span>
<span class="line">    <span class="token key attr-name">server 127.0.0.1:3003 max_fails</span><span class="token punctuation">=</span><span class="token value attr-value">3 fail_timeout=30s;</span></span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">server {</span>
<span class="line">    listen 80;</span>
<span class="line">    server_name api.example.com;</span>
<span class="line"></span>
<span class="line">    location / {</span>
<span class="line">        proxy_pass http://node_app;</span>
<span class="line">        proxy_http_version 1.1;</span>
<span class="line">        proxy_set_header Upgrade $http_upgrade;</span>
<span class="line">        proxy_set_header Connection &#39;upgrade&#39;;</span>
<span class="line">        proxy_set_header Host $host;</span>
<span class="line">        proxy_cache_bypass $http_upgrade;</span>
<span class="line">        proxy_set_header X-Real-IP $remote_addr;</span>
<span class="line">        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>PM2 启动脚本</strong></p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token shebang important">#!/bin/bash</span></span>
<span class="line"><span class="token comment"># deploy.sh</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 1. 拉取代码</span></span>
<span class="line"><span class="token function">git</span> pull origin main</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 2. 安装依赖</span></span>
<span class="line"><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">--production</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 3. PM2 零停机部署</span></span>
<span class="line">pm2 reload ecosystem.config.js <span class="token parameter variable">--env</span> production</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 4. 或使用 restart</span></span>
<span class="line"><span class="token comment"># pm2 restart ecosystem.config.js --env production</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 5. 查看状态</span></span>
<span class="line">pm2 status</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="_2-6-最佳实践" tabindex="-1"><a class="header-anchor" href="#_2-6-最佳实践"><span>2.6 <strong>最佳实践</strong></span></a></h2><ol><li><p><strong>使用配置文件</strong></p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 生成示例配置</span></span>
<span class="line">pm2 init</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 修改生成的 ecosystem.config.js</span></span>
<span class="line"><span class="token comment"># 然后使用配置文件启动</span></span>
<span class="line">pm2 start ecosystem.config.js</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>生产环境配置</strong></p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token comment">// 生产环境专用配置</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;app-prod&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">&quot;script&quot;</span><span class="token operator">:</span> <span class="token string">&quot;app.js&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">&quot;instances&quot;</span><span class="token operator">:</span> <span class="token string">&quot;max&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">&quot;exec_mode&quot;</span><span class="token operator">:</span> <span class="token string">&quot;cluster&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">&quot;max_memory_restart&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1G&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">&quot;node_args&quot;</span><span class="token operator">:</span> <span class="token string">&quot;--max-old-space-size=4096&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">&quot;env_production&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">&quot;NODE_ENV&quot;</span><span class="token operator">:</span> <span class="token string">&quot;production&quot;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>监控告警设置</strong></p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 安装监控插件</span></span>
<span class="line">pm2 <span class="token function">install</span> pm2-slack</span>
<span class="line">pm2 <span class="token function">install</span> pm2-docker</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 配置Webhooks</span></span>
<span class="line">pm2 <span class="token builtin class-name">set</span> pm2:slack_webhook <span class="token string">&quot;https://hooks.slack.com/services/...&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>错误处理</strong></p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 查看错误日志</span></span>
<span class="line">pm2 logs app-name <span class="token parameter variable">--err</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 设置错误通知</span></span>
<span class="line">pm2 <span class="token function">install</span> pm2-meteor</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 自动重启配置</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string">&quot;max_restarts&quot;</span><span class="token builtin class-name">:</span> <span class="token number">10</span>,      // 最大重启次数</span>
<span class="line">  <span class="token string">&quot;restart_delay&quot;</span><span class="token builtin class-name">:</span> <span class="token number">1000</span>    // 重启延迟<span class="token punctuation">(</span>ms<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="_2-7-故障排查" tabindex="-1"><a class="header-anchor" href="#_2-7-故障排查"><span>2.7 <strong>故障排查</strong></span></a></h2><ul><li><p><strong>常见问题与解决</strong></p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 1. PM2 进程不启动</span></span>
<span class="line">pm2 resurrect              <span class="token comment"># 恢复保存的进程</span></span>
<span class="line">pm2 update                 <span class="token comment"># 更新PM2</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 2. 内存泄漏</span></span>
<span class="line">pm2 logs <span class="token parameter variable">--lines</span> <span class="token number">500</span>      <span class="token comment"># 查看日志</span></span>
<span class="line">pm2 monit                 <span class="token comment"># 监控内存使用</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 3. 端口占用</span></span>
<span class="line"><span class="token function">lsof</span> <span class="token parameter variable">-i</span> :3000             <span class="token comment"># 查看端口占用</span></span>
<span class="line">pm2 delete all <span class="token operator">&amp;&amp;</span> pm2 start all  <span class="token comment"># 清理重启</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 4. 开机自启动失败</span></span>
<span class="line">pm2 unstartup <span class="token operator">&amp;&amp;</span> pm2 startup   <span class="token comment"># 重新设置</span></span>
<span class="line">systemctl status pm2-nodeuser  <span class="token comment"># 检查服务状态</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>调试命令</strong></p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 查看详细信息</span></span>
<span class="line">pm2 describe <span class="token number">0</span>            <span class="token comment"># 查看ID为0的应用详情</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 性能分析</span></span>
<span class="line">pm2 profile:cpu          <span class="token comment"># CPU分析</span></span>
<span class="line">pm2 profile:heap         <span class="token comment"># 内存分析</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 生成诊断报告</span></span>
<span class="line">pm2 diagnose             <span class="token comment"># 生成诊断报告</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="_2-8-快速开始清单" tabindex="-1"><a class="header-anchor" href="#_2-8-快速开始清单"><span>2.8 <strong>快速开始清单</strong></span></a></h2><ol><li><strong>安装</strong>：<code>npm install pm2 -g</code></li><li><strong>创建配置</strong>：<code>pm2 init</code> 或手动创建 <code>ecosystem.config.js</code></li><li><strong>启动应用</strong>：<code>pm2 start ecosystem.config.js</code></li><li><strong>设置自启动</strong>：<code>pm2 startup &amp;&amp; pm2 save</code></li><li><strong>监控</strong>：<code>pm2 monit</code> 或 <code>pm2 logs</code></li></ol><p><strong>一句话总结</strong>：PM2 让 Node.js 应用在生产环境中稳定运行，就像 Nginx 管理网络流量一样，PM2 管理着 Node.js 进程的生命周期。</p>`,25)])])}const r=n(l,[["render",i]]),o=JSON.parse('{"path":"/backend/tool/api/02.html","title":"二、PM2的使用","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1771996569000,"contributors":[{"name":"zhao-farmer","username":"zhao-farmer","email":"857899180@qq.com","commits":1,"url":"https://github.com/zhao-farmer"}],"changelog":[{"hash":"6456dcf1fd45f82d71ce5dfe3954468d5bf78145","time":1771996569000,"email":"857899180@qq.com","author":"zhao-farmer","message":"新提交"}]},"filePathRelative":"backend/tool/api/02.md"}');export{r as comp,o as data};
