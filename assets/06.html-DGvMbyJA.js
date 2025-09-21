import{aq as s,ar as a,as as p,at as t}from"./app-Cok9BT0p.js";const e="/note-front/application/weixin/base/075.png",l="/note-front/application/weixin/base/076.png",i="/note-front/application/weixin/base/077.png",c="/note-front/application/weixin/base/078.png",o="/note-front/application/weixin/base/079.png",u={};function d(r,n){return t(),a("div",null,n[0]||(n[0]=[p(`<h1 id="六、生命周期" tabindex="-1"><a class="header-anchor" href="#六、生命周期"><span>六、生命周期</span></a></h1><h2 id="_6-1-小程序运行机制" tabindex="-1"><a class="header-anchor" href="#_6-1-小程序运行机制"><span>6.1 小程序运行机制</span></a></h2><ol><li><p>小程序启动</p><code><pre class="mermaid" id="mermaid-y34i2oq">            flowchart LR
    subgraph 冷热启动
    A[小程序冷启动]
    end
    A --&gt; |启动| B[前台]
    B --&gt; |切后台| C[后台]
    C --&gt; |切前台| B
    C --&gt; |5秒后 | D[挂起]
    D --&gt; |切前台| B
    D --&gt; |30分后| E[小程序销毁]

          </pre></code><p>小程序启动可以分为两种情况，一种是冷启动，一种是热启动</p><ul><li>冷启动:如果用户首次打开，或小程序销毁后被用户再次打开，此时小程序需要重新加载</li><li>启动热启动:如果用户已经打开过某小程序，然后在一定时间内再次打开该小程序，此时小程序并未被销毁，只是从后台状态进入前台状态</li></ul></li><li><p>前台 和 后台状态</p><code><pre class="mermaid" id="mermaid-0mvv0wm">            flowchart LR
    A[小程序冷启动] --&gt; |启动| B[前台]
    subgraph 前后台状态
    B --&gt; |切后台| C[后台]
    C --&gt; |切前台| B
    end
    C --&gt; |5秒后 | D[挂起]
    D --&gt; |切前台| B
    D --&gt; |30分后| E[小程序销毁]

          </pre></code><p>小程序启动后，界面被展示给用户，此时小程序处于「前台」状态。当用户「关闭」小程序时，小程序并没有真正被关闭，而是进入了「后台」状态，当用户再次进入微信并打开小程序，小程序又会重新进入「前台」状态</p></li><li><p>挂起</p><code><pre class="mermaid" id="mermaid-cf90am4">            flowchart LR
    A[小程序冷启动] --&gt; |启动| B[前台]
    B --&gt; |切后台| C[后台]
    C --&gt; |切前台| B
    C --&gt; |5秒后 | D[挂起]
    D --&gt; |切前台| B
    subgraph 挂起与销毁
    D --&gt; |30分后| E[小程序销毁]
    end

          </pre></code><ul><li><p>挂起:小程序进入「后台」状态一段时间后(5秒)，微信停止小程序JS 线程执行，小程序进入「挂起」状态当开发者使用了后台播放音乐、后台地理位置等能力时，小程序可以在后台持续运行，不会进入到挂起状态</p></li><li><p>销毁:如果用户很久没有使用小程序，或者系统资源紧张，小程序会被销毁，即完全终止运行当小程序进入后台并被「挂起」后，如果很长时间(目前是30分钟)都未再次进入前台，小程序会被销毁当小程序占用系统资源过高，可能会被系统销毁或被微信客户端主动回收。</p></li></ul></li></ol><h2 id="_6-2-小程序更新机制" tabindex="-1"><a class="header-anchor" href="#_6-2-小程序更新机制"><span>6.2 小程序更新机制</span></a></h2><h3 id="_6-2-1-介绍" tabindex="-1"><a class="header-anchor" href="#_6-2-1-介绍"><span>6.2.1 介绍</span></a></h3><p>在访问小程序时，微信会将小程序代码包缓存到本地。</p><p>开发者在发布了新的小程序版本以后，微信客户端会检査本地缓存的小程序有没有新版本，并进行小程序代码包的更新。</p><p>小程序的更新机制有两种:启动时同步更新 和 启动时异步更新</p><ul><li><p>启动时同步更新:微信运行时，会定期检査最近使用的小程序是否有更新。如果有更新，下次小程序启动时会同步进行更新，更新到最新版本后再打开小程序。如果 用户长时间未使用小程序时，会强制同步检查版本更新</p></li><li><p>启动时异步更新:在启动前没有发现更新，小程序每次 冷启动 时，都会异步检査是否有更新版本。如果发现有新版本，将会异步下载新版本的代码包，将新版本的小程序在下一次</p></li></ul><p>冷启动进行使用，当前访问使用的依然是本地的旧版本代码</p><p>在启动时异步更新的情况下，如果开发者希望立刻进行版本更新，可以使用<a href="https://developers.weixin.qq.com/miniprogram/dev/api/base/update/wx.getUpdateManager.html" target="_blank" rel="noopener noreferrer">wx.getupdateManager</a> API进行处理。在有新版本时提示用户重启小程序更新新版本。</p><h3 id="_6-2-2-验证更新" tabindex="-1"><a class="header-anchor" href="#_6-2-2-验证更新"><span>6.2.2 验证更新</span></a></h3><ol><li><p>代码</p><p>app.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token comment">// app.js</span></span>
<span class="line"><span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// onLanch 是小程序的狗子函数，这个狗子函数在冷启动时肯定会执行</span></span>
<span class="line">  <span class="token comment">// 当小程序冷启动时，会自动向微信后台请求新版本信息，如果有新版本，会立即进行下载</span></span>
<span class="line">  <span class="token function">onLaunch</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 使用 wx.getUpdateManager 方法监听下载的状态</span></span>
<span class="line">    <span class="token keyword">const</span> updateManager <span class="token operator">=</span> wx<span class="token punctuation">.</span><span class="token function">getUpdateManager</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 当下载完成新版本以后，会触发 onUpdateReady 回调函数</span></span>
<span class="line">    updateManager<span class="token punctuation">.</span><span class="token function">onUpdateReady</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// 在回调函数中给用户提示，</span></span>
<span class="line">      wx<span class="token punctuation">.</span><span class="token function">showModal</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;更新提示&#39;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">&#39;新版本已经准备号，是否重启应用&#39;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">.</span>confirm<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token comment">// 强制当前小程序使用新版本，并且会启动当前小程序</span></span>
<span class="line">            updateManager<span class="token punctuation">.</span><span class="token function">applyUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">          <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>设置编译模式</p><p><img src="`+e+'" alt=""></p></li><li><p>运行结果</p><p><img src="'+l+'" alt=""></p></li></ol><h2 id="_6-3-小程序生命周期" tabindex="-1"><a class="header-anchor" href="#_6-3-小程序生命周期"><span>6.3 小程序生命周期</span></a></h2><h3 id="_6-3-1-介绍" tabindex="-1"><a class="header-anchor" href="#_6-3-1-介绍"><span>6.3.1 介绍</span></a></h3><p>应用生命周期是指应用程序进程<strong>从创建到消亡的整个过程</strong></p><p>小程序的生命周期指的是 <strong>小程序从启动到销毁的整个过程</strong></p><p>一个小程序完整的生命周期由 <strong>应用生命周期</strong>、<strong>页面生命周期</strong> 和 *<strong>组件生命周期</strong> 三部分来组成</p><p><strong>小程序生命周期伴随着一些函数</strong>，这些函数由小程序框架本身提供，被称为生命周期函数，生命周期函数会按照顺序依次自动触发调用。帮助程序员在特定的时机执行特定的操作，辅助程序员完成一些比较复杂的逻辑</p><p><img src="'+i+'" alt=""></p><h3 id="_6-3-2-应用生命周期" tabindex="-1"><a class="header-anchor" href="#_6-3-2-应用生命周期"><span>6.3.2 应用生命周期</span></a></h3><p>应用生命周期通常是指一个小程序从 启动 → 运行 → 销毁的整个过程</p><p>应用生命周期伴随着一些函数，我们称为 <strong>应用生命周期函数</strong>，应用生命周期函数需要 <strong>在 app.js 文件的 APP() 方法中进行定义，App()方法必须在 app.js 中进行调用，主要用来注册小程序。</strong></p><p>应用生命周期函数由 <code>onLaunch</code>、<code>onShow</code>、<code>onHide</code> 三个函数组成</p><blockquote><p>从小程序生命周期的角度来看，我们一般讲的「启动」专指冷启动，热启动一般被称为后台切前台。</p></blockquote><p><img src="'+c+`" alt=""></p><ul><li>代码</li></ul><p>app.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token function-variable function">onLaunch</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 当进行冷启动时，才会触发 onLanch 钩子函数</span></span>
<span class="line">    <span class="token comment">// 如果热启动，不会触发onLanch 钩子函数，会触发 onShow 钩子函数</span></span>
<span class="line">    <span class="token comment">// 因此 onLanch (全局只触发一次)</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;onLanch 小程序初始化完成&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token function-variable function">onShow</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;onShow 小程序启动，或从后台进入前台提示&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token function-variable function">onHide</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;onHide 前台进入后台&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-3-3-页面生命周期" tabindex="-1"><a class="header-anchor" href="#_6-3-3-页面生命周期"><span>6.3.3 页面生命周期</span></a></h3><p>页面生命周期就是指小程序页面从 加载 一运行 一销毁的整个过程</p><p><strong>页面生命周期函数需要在 Page()方法进行定义</strong></p><p><img src="`+o+`" alt=""></p><ul><li>代码</li></ul><p>index.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token comment">// pages/index/index.js</span></span>
<span class="line"><span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * 生命周期函数--监听页面加载--一个页面只会调用一次</span>
<span class="line">   */</span></span>
<span class="line">  <span class="token function">onLoad</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;onLoad 页面创建的时候执行&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * 生命周期函数--监听页面初次渲染完成--一个页面只会调用一次</span>
<span class="line">   */</span></span>
<span class="line">  <span class="token function">onReady</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;onReady 页面初次渲染完成，代表页面已经准备妥当，可以和视图层进行交互&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * 生命周期函数--监听页面显示--如果从后台进入前台时</span>
<span class="line">   */</span></span>
<span class="line">  <span class="token function">onShow</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;onShow 页面在前台展示的时候&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * 生命周期函数--监听页面隐藏--在当前小程序进入后台时也会触发</span>
<span class="line">   */</span></span>
<span class="line">  <span class="token function">onHide</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;onHide 当前页面被隐藏时&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * 生命周期函数--监听页面卸载</span>
<span class="line">   */</span></span>
<span class="line">  <span class="token function">onUnload</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;onHide 当前页面被销毁时&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>index.wxml</p><div class="language-xml line-numbers-mode" data-highlighter="prismjs" data-ext="xml"><pre><code><span class="line"><span class="token comment">&lt;!--pages/index/index.wxml--&gt;</span></span>
<span class="line"><span class="token comment">&lt;!-- redirect: 销毁当前页面，跳转到下一个页面 --&gt;</span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>navigator</span> <span class="token attr-name">url</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/pages/list/list<span class="token punctuation">&quot;</span></span> <span class="token attr-name">open-type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>redirect<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>跳转到列表页面-redirect<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>navigator</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span>
<span class="line"><span class="token comment">&lt;!-- navigate:跳转页面，隐藏上一层 --&gt;</span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>navigator</span> <span class="token attr-name">url</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/pages/list/list<span class="token punctuation">&quot;</span></span> <span class="token attr-name">open-type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>navigate<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>跳转到列表页面-navigate<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>navigator</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-3-4-细节补充" tabindex="-1"><a class="header-anchor" href="#_6-3-4-细节补充"><span>6.3.4 细节补充</span></a></h3><ol><li><p>tabBar 页面之间相互切换，页面不会被销毁</p><p>cart.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token comment">// pages/cart/cart.js</span></span>
<span class="line"><span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">  <span class="token function">onShow</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;cart onShow&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">  <span class="token function">onHide</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;cart onHide&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">  <span class="token function">onUnload</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;cart onUnload&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>profile.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token comment">// pages/profile/profile.js</span></span>
<span class="line"><span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">onShow</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;profile onUnload&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">  <span class="token function">onHide</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;profile onUnload&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">  <span class="token function">onUnload</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;profile onUnload&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>点击左上角，返回上一个页面，会销毁当前页面</p><p>cart.wxml</p><div class="language-xml line-numbers-mode" data-highlighter="prismjs" data-ext="xml"><pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>navigator</span> <span class="token attr-name">url</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/pages/list/list<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>跳转到list页面<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>navigator</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>list.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">onUnload</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;list 页面被销毁&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,40)]))}const v=s(u,[["render",d]]),m=JSON.parse('{"path":"/application/weixin/base/06.html","title":"六、生命周期","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1752490925000,"contributors":[{"name":"zhao-farmer","username":"zhao-farmer","email":"857899180@qq.com","commits":1,"url":"https://github.com/zhao-farmer"}],"changelog":[{"hash":"08d014805d6447d2221b34fe03fdc2ca18411d66","time":1752490925000,"email":"857899180@qq.com","author":"zhao-farmer","message":"2025年7月更新"}]},"filePathRelative":"application/weixin/base/06.md"}');export{v as comp,m as data};
