<template><div><h1 id="四、其他" tabindex="-1"><a class="header-anchor" href="#四、其他"><span>四、其他</span></a></h1>
<h2 id="_4-1-分组播放" tabindex="-1"><a class="header-anchor" href="#_4-1-分组播放"><span>4.1 分组播放</span></a></h2>
<p>每个new Howl()实例也是一个组。您可以从Howl播放多个声音实例，并单独或作为组控制它们（注意：每个Howl只能包含一个音频文件）。例如，以下播放两个来自精灵的轨道，一起改变它们的音量，然后在同一个时间暂停两者。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> sound <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Howl</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">src</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'sound.webm'</span><span class="token punctuation">,</span> <span class="token string">'sound.mp3'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">sprite</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">track01</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">20000</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">track02</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">21000</span><span class="token punctuation">,</span> <span class="token number">41000</span><span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 播放每个轨道。</span></span>
<span class="line">sound<span class="token punctuation">.</span><span class="token function">play</span><span class="token punctuation">(</span><span class="token string">'track01'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">sound<span class="token punctuation">.</span><span class="token function">play</span><span class="token punctuation">(</span><span class="token string">'track02'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 改变两个轨道的音量。</span></span>
<span class="line">sound<span class="token punctuation">.</span><span class="token function">volume</span><span class="token punctuation">(</span><span class="token number">0.5</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 一秒钟后，暂停组中的两个声音。</span></span>
<span class="line"><span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  sound<span class="token punctuation">.</span><span class="token function">pause</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-2-移动-chrome播放" tabindex="-1"><a class="header-anchor" href="#_4-2-移动-chrome播放"><span>4.2 移动/Chrome播放</span></a></h2>
<pre><code>默认情况下，移动浏览器和Chrome/Safari上的音频被锁定，直到在用户交互中播放声音，然后它在页面会话的其余时间正常播放（Apple文档）。howler.js的默认行为是尝试在第一个touchend事件中通过播放空缓冲区来自动解锁音频播放。可以通过调用以下代码禁用此行为：
</code></pre>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">Howler<span class="token punctuation">.</span>autoUnlock <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><pre><code>如果您尝试在页面加载时自动播放音频，可以监听playerror事件，然后等待unlock事件再次尝试播放音频：
</code></pre>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> sound <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Howl</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">src</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'sound.webm'</span><span class="token punctuation">,</span> <span class="token string">'sound.mp3'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token function-variable function">onplayerror</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    sound<span class="token punctuation">.</span><span class="token function">once</span><span class="token punctuation">(</span><span class="token string">'unlock'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      sound<span class="token punctuation">.</span><span class="token function">play</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">sound<span class="token punctuation">.</span><span class="token function">play</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-3-杜比-dolby-音频播放" tabindex="-1"><a class="header-anchor" href="#_4-3-杜比-dolby-音频播放"><span>4.3 杜比(Dolby)音频播放</span></a></h2>
<pre><code>包括对杜比音频格式（目前在Edge和Safari中支持）的完整支持。但是，您必须指定您正在加载的文件是dolby，因为它在mp4容器中。
</code></pre>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> dolbySound <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Howl</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">src</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'sound.mp4'</span><span class="token punctuation">,</span> <span class="token string">'sound.webm'</span><span class="token punctuation">,</span> <span class="token string">'sound.mp3'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">format</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'dolby'</span><span class="token punctuation">,</span> <span class="token string">'webm'</span><span class="token punctuation">,</span> <span class="token string">'mp3'</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-4-格式建议" tabindex="-1"><a class="header-anchor" href="#_4-4-格式建议"><span>4.4 格式建议</span></a></h2>
<pre><code>Howler.js支持多种音频编解码器，浏览器支持度各不相同（“mp3”, “opus”, “ogg”, “wav”, “aac”, “m4a”, “m4b”, “mp4”, “webm”, …），但如果您想要完整的浏览器覆盖，您仍然需要至少使用其中的两个。如果您的目标是在文件大小和高质量之间取得最佳平衡，根据广泛的生产测试，您最好的选择是默认使用webm并回退到mp3。webm几乎拥有完整的浏览器覆盖率，压缩和质量的结合非常好。您需要mp3回退适用于Internet Explorer。

请记住，howler.js从您的源数组中选择第一个兼容的声音。因此，如果您希望webm在mp3之前使用，您需要按该顺序排列源。

如果您希望您的webm文件在Firefox中可以寻址，请确保使用提示元素对其进行编码。一种方法是使用ffmpeg中的dash标志：
</code></pre>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">ffmpeg <span class="token parameter variable">-i</span> sound1.wav <span class="token parameter variable">-dash</span> <span class="token number">1</span> sound1.webm</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></div></template>


