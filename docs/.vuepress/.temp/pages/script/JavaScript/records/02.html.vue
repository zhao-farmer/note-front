<template><div><h1 id="_02js中音频" tabindex="-1"><a class="header-anchor" href="#_02js中音频"><span>02JS中音频</span></a></h1>
<h2 id="_1-加载音频对象" tabindex="-1"><a class="header-anchor" href="#_1-加载音频对象"><span>1. 加载音频对象</span></a></h2>
<p>方式一：获取标签中的对象</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> html中的标签 <span class="token operator">--</span><span class="token operator">></span></span>
<span class="line"><span class="token operator">&lt;</span>audio src<span class="token operator">=</span><span class="token string">"music.mp3"</span> <span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>audio<span class="token operator">></span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 获取对象</span></span>
<span class="line"><span class="token keyword">let</span> audio <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">"audio"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>方式二：使用JS新建对象</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">//创建对象</span></span>
<span class="line"><span class="token keyword">let</span> audio <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Audio</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-简单的使用" tabindex="-1"><a class="header-anchor" href="#_2-简单的使用"><span>2. 简单的使用</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// 1. 播放音频：</span></span>
<span class="line">audio<span class="token punctuation">.</span><span class="token function">play</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 2. 暂停音频：</span></span>
<span class="line">audio<span class="token punctuation">.</span><span class="token function">pause</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 3. 设置或获取音频播放位置（单位：秒）：</span></span>
<span class="line"><span class="token comment">// 3.1 设置音频播放位置</span></span>
<span class="line">audio<span class="token punctuation">.</span>currentTime<span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// 3.2 获取音频播放位置</span></span>
<span class="line"><span class="token keyword">var</span> playbackPosition <span class="token operator">=</span> audio<span class="token punctuation">.</span>currentTime<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 4. 设置或获取音频音量（0.0 到 1.0）：</span></span>
<span class="line"><span class="token comment">// 4.1 设置音量</span></span>
<span class="line">audio<span class="token punctuation">.</span>volume<span class="token operator">=</span> <span class="token number">0.5</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// 4.2 获取音量</span></span>
<span class="line"><span class="token keyword">var</span> volume <span class="token operator">=</span> audio<span class="token punctuation">.</span>volume<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 5. 设置或获取音频循环播放：</span></span>
<span class="line"><span class="token comment">// 5.1 设置循环播放</span></span>
<span class="line">audio<span class="token punctuation">.</span>loop<span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// 5.2 获取是否循环播放</span></span>
<span class="line"><span class="token keyword">var</span> isLooping <span class="token operator">=</span> audio<span class="token punctuation">.</span>loop<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 6. 加载音频数据：</span></span>
<span class="line">audio<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 7. 监听音频播放结束事件：</span></span>
<span class="line">audio<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'ended'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Audio playback ended.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-属性" tabindex="-1"><a class="header-anchor" href="#_3-属性"><span>3. 属性</span></a></h2>
<ul>
<li>audioTracks 返回可用的音轨列表（MultipleTrackList对象）</li>
<li>autoplay 媒体加载后自动播放</li>
<li>buffered 返回缓冲部件的时间范围(TimeRanges对象)</li>
<li>controller 返回当前的媒体控制器（MediaController对象）</li>
<li>controls 显示播控控件</li>
<li>crossOrigin CORS设置</li>
<li>currentSrc 返回当前媒体的URL</li>
<li>currentTime 当前播放的时间，单位秒</li>
<li>defaultMuted 缺省是否静音</li>
<li>defaultPlaybackRate 播控的缺省倍速</li>
<li>duration 返回媒体的播放总时长，单位秒</li>
<li>ended 返回当前播放是否结束标志</li>
<li>error 返回当前播放的错误状态</li>
<li>initialTime 返回初始播放的位置</li>
<li>loop 是否循环播放</li>
<li>mediaGroup 当前音视频所属媒体组 (用来链接多个音视频标签)</li>
<li>muted 是否静音</li>
<li>networkState 返回当前网络状态</li>
<li>paused 是否暂停</li>
<li>playbackRate 播放的倍速</li>
<li>played 当前播放部件已经播放的时间范围(TimeRanges对象)</li>
<li>preload 页面加载时是否同时加载音视频</li>
<li>readyState 返回当前的准备状态</li>
<li>seekable 返回当前可跳转部件的时间范围(TimeRanges对象)</li>
<li>seeking 返回用户是否做了跳转操作</li>
<li>src 当前音视频源的URL</li>
<li>startOffsetTime 返回当前的时间偏移(Date对象)</li>
<li>textTracks 返回可用的文本轨迹(TextTrackList对象)</li>
<li>videoTracks 返回可用的视频轨迹(VideoTrackList对象)</li>
<li>volume 音量值</li>
</ul>
<h2 id="_4-方法" tabindex="-1"><a class="header-anchor" href="#_4-方法"><span>4. 方法</span></a></h2>
<ul>
<li>play() // 开始播放</li>
<li>pause() // 暂停</li>
<li>load() // 重新加载</li>
<li>canPlayType() // 检测浏览器是否能播放指定类型</li>
<li>addTextTrack() // unsupport 添加新文本轨道</li>
</ul>
<h2 id="_5-事件" tabindex="-1"><a class="header-anchor" href="#_5-事件"><span>5. 事件</span></a></h2>
<ul>
<li>abort 当音视频加载被异常终止时产生该事件</li>
<li>canplay 当浏览器可以开始播放该音视频时产生该事件</li>
<li>canplaythrough 当浏览器可以开始播放该音视频到结束而无需因缓冲而停止时产生该事件</li>
<li>durationchange 当媒体的总时长改变时产生该事件</li>
<li>emptied 当前播放列表为空时产生该事件</li>
<li>ended 当前播放列表结束时产生该事件</li>
<li>error 当加载媒体发生错误时产生该事件</li>
<li>loadeddata 当加载媒体数据时产生该事件</li>
<li>loadedmetadata 当收到总时长，分辨率和字轨等metadata时产生该事件</li>
<li>loadstart 当开始查找媒体数据时产生该事件</li>
<li>pause 当媒体暂停时产生该事件</li>
<li>play 当媒体播放时产生该事件</li>
<li>playing 当媒体从因缓冲而引起的暂停和停止恢复到播放时产生该事件</li>
<li>progress 当获取到媒体数据时产生该事件</li>
<li>ratechange 当播放倍数改变时产生该事件</li>
<li>seeked 当用户完成跳转时产生该事件</li>
<li>seeking 当用户正执行跳转时操作的时候产生该事件</li>
<li>stalled 当试图获取媒体数据，但数据还不可用时产生该事件</li>
<li>suspend 当获取不到数据时产生该事件</li>
<li>timeupdate 当前播放位置发生改变时产生该事件</li>
<li>volumechange 当前音量发生改变时产生该事件</li>
<li>waiting 当视频因缓冲下一帧而停止时产生该事件</li>
</ul>
</div></template>


