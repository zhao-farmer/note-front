<template><div><h1 id="二、核心-howler-core" tabindex="-1"><a class="header-anchor" href="#二、核心-howler-core"><span>二、核心(howler.core)</span></a></h1>
<h2 id="_2-1-选项" tabindex="-1"><a class="header-anchor" href="#_2-1-选项"><span>2.1 选项</span></a></h2>
<ul>
<li>
<p>src <code v-pre>Array/String</code> <code v-pre>[]</code> <code v-pre>必需</code></p>
<p>要加载的音轨的源（URL或base64数据URI）。这些应按优先级顺序排列，howler.js将自动加载第一个与当前浏览器兼容的音轨。如果文件没有扩展名，您需要使用format属性显式指定扩展名。</p>
</li>
<li>
<p>volume <code v-pre>Number</code> <code v-pre>1.0</code></p>
<p>特定音轨的音量，从0.0到1.0。</p>
</li>
<li>
<p>html5 <code v-pre>Boolean</code> <code v-pre>false</code></p>
<p>设置为true以强制使用HTML5 Audio。这应该用于大型音频文件，以便您不必等待整个文件下载和解码后才能播放。</p>
</li>
<li>
<p>loop <code v-pre>Boolean</code> <code v-pre>false</code></p>
<p>设置为true以自动无限循环声音。</p>
</li>
<li>
<p>preload <code v-pre>Boolean|String</code> <code v-pre>true</code></p>
<p>在定义Howl时自动开始下载音频文件。如果使用HTML5 Audio，您可以将其设置为'metadata'，仅预加载文件的元数据（例如，仅获取其持续时间而不下载整个文件）。</p>
</li>
<li>
<p>autoplay <code v-pre>Boolean</code> <code v-pre>false</code></p>
<p>设置为true以在声音加载后自动开始播放。</p>
</li>
<li>
<p>mute <code v-pre>Boolean</code> <code v-pre>false</code></p>
<p>设置为true以加载时静音。</p>
</li>
<li>
<p>sprite <code v-pre>Object</code> <code v-pre>{}</code></p>
<p>为声音定义声音精灵。偏移和持续时间以毫秒为单位定义。可选的第三个参数可用于设置精灵循环。使用audiosprite生成兼容的声音精灵是一个简单的方法。</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">new</span> <span class="token class-name">Howl</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">sprite</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">key1</span><span class="token operator">:</span> <span class="token punctuation">[</span>offset<span class="token punctuation">,</span> duration<span class="token punctuation">,</span> <span class="token punctuation">(</span>loop<span class="token punctuation">)</span><span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>rate <code v-pre>Number</code> <code v-pre>1.0</code></p>
<p>播放速率。0.5到4.0，1.0为正常速度。</p>
</li>
<li>
<p>pool <code v-pre>Number</code> <code v-pre>5</code></p>
<p>非活动声音池的大小。一旦声音停止或播放完毕，它们被标记为结束并准备好清理。我们保持这些声音的池以便回收，以提高性能。通常不需要更改此设置。需要注意的是，当声音被暂停时，它不会被从池中移除，并且仍被视为活动，以便以后可以恢复。</p>
</li>
<li>
<p>format <code v-pre>Array</code> <code v-pre>[]</code></p>
<p>howler.js自动从扩展名检测文件格式，但您也可以在提取无法工作的情况下（例如，与SoundCloud流一起使用时）指定格式。</p>
</li>
<li>
<p>xhr <code v-pre>Object</code> <code v-pre>null</code></p>
<p>使用Web Audio时，howler.js使用XHR请求加载音频文件。如果您需要发送自定义头部，设置HTTP方法或启用withCredentials（参考），请使用此参数包含它们。每个都是可选的（方法默认为GET，头部默认为null，withCredentials默认为false）。例如：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 使用每个属性。</span></span>
<span class="line"><span class="token keyword">new</span> <span class="token class-name">Howl</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">xhr</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">'POST'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">Authorization</span><span class="token operator">:</span> <span class="token string">'Bearer:'</span> <span class="token operator">+</span> token<span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">withCredentials</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 只更改方法。</span></span>
<span class="line"><span class="token keyword">new</span> <span class="token class-name">Howl</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">xhr</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">'POST'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>onload <code v-pre>Function</code></p>
<p>声音加载时触发。</p>
</li>
<li>
<p>onloaderror <code v-pre>Function</code></p>
<p>声音无法加载时触发。第一个参数是声音的ID（如果存在），第二个是错误消息/代码。</p>
<p>加载错误代码在规范中定义：
<br/> 1 - 用户代理在用户的请求下终止了媒体资源的获取过程。
<br/> 2 - 某种网络错误导致用户代理停止获取媒体资源，在资源被确定为可用后。
<br/> 3 - 在媒体资源被确定为可用后，解码媒体资源时发生某种错误。
<br/> 4 - src属性指示的媒体资源或分配的媒体提供者对象不适合。</p>
</li>
<li>
<p>onplayerror <code v-pre>Function</code></p>
<p>声音无法播放时触发。第一个参数是声音的ID，第二个是错误消息/代码。</p>
</li>
<li>
<p>onplay <code v-pre>Function</code></p>
<p>声音开始播放时触发。第一个参数是声音的ID。</p>
</li>
<li>
<p>onend <code v-pre>Function</code></p>
<p>声音播放结束时触发（如果是循环，它将在每次循环结束时触发）。第一个参数是声音的ID。</p>
</li>
<li>
<p>onpause <code v-pre>Function</code></p>
<p>声音已暂停时触发。第一个参数是声音的ID。</p>
</li>
<li>
<p>onstop <code v-pre>Function</code></p>
<p>声音已停止时触发。第一个参数是声音的ID。</p>
</li>
<li>
<p>onmute <code v-pre>Function</code></p>
<p>声音已静音/取消静音时触发。第一个参数是声音的ID。</p>
</li>
<li>
<p>onvolume <code v-pre>Function</code></p>
<p>声音音量已更改时触发。第一个参数是声音的ID。</p>
</li>
<li>
<p>onrate <code v-pre>Function</code></p>
<p>声音播放速率已更改时触发。第一个参数是声音的ID。</p>
</li>
<li>
<p>onseek <code v-pre>Function</code></p>
<p>声音已寻址时触发。第一个参数是声音的ID。</p>
</li>
<li>
<p>onfade <code v-pre>Function</code></p>
<p>当前声音完成淡入/淡出时触发。第一个参数是声音的ID。</p>
</li>
<li>
<p>onunlock <code v-pre>Function</code></p>
<p>通过触摸/点击事件自动解锁音频时触发。</p>
</li>
</ul>
<h2 id="_2-2-方法" tabindex="-1"><a class="header-anchor" href="#_2-2-方法"><span>2.2 方法</span></a></h2>
<ul>
<li>
<p>play([sprite/id])</p>
<p>开始播放声音。返回声音ID，以便用于其他方法。唯一不能链式调用的方法。</p>
<ul>
<li><code v-pre>sprite/id：String/Number</code> <code v-pre>可选</code> 可以传递一个精灵或声音ID作为参数。如果传递了精灵，则根据精灵的定义播放新声音。如果传递了声音ID，则播放先前播放的声音（例如，在暂停之后）。但是，如果传递了从池中排出的声音ID，则不会播放任何声音。</li>
</ul>
</li>
<li>
<p>pause([id])</p>
<p>暂停声音或组的播放，保存播放的seek位置。</p>
<ul>
<li><code v-pre>id：Number</code> <code v-pre>可选</code> 声音ID。如果不传递，则暂停组中的所有声音。</li>
</ul>
</li>
<li>
<p>stop([id])</p>
<p>停止声音的播放，将seek重置为0。</p>
<ul>
<li><code v-pre>id：Number</code> <code v-pre>可选</code> 声音ID。如果不传递，则组中的所有声音都将停止。</li>
</ul>
</li>
<li>
<p>mute([muted], [id])</p>
<p>静音声音，但不暂停播放。</p>
<ul>
<li>muted：Boolean 可选  静音为true，取消静音为false。</li>
<li><code v-pre>id：Number</code> <code v-pre>可选</code>  声音ID。如果不传递，则组中的所有声音都将静音。</li>
</ul>
</li>
<li>
<p>volume([volume], [id])</p>
<p>获取/设置此声音或组的音量。此方法可选地接受0、1或2个参数。</p>
<ul>
<li><code v-pre>volume：Number</code> <code v-pre>可选</code> 音量从0.0到1.0。</li>
<li><code v-pre>id：Number</code> <code v-pre>可选</code> 声音ID。如果不传递，则组中的所有声音的音量将相对于它们自己的音量进行调整。</li>
</ul>
</li>
<li>
<p>fade(from, to, duration, [id])</p>
<p>淡入/淡出一个正在播放的声音。完成后触发fade事件。</p>
<ul>
<li><code v-pre>from：Number</code> 淡入的起始音量（0.0到1.0）。</li>
<li><code v-pre>to：Number</code> 淡入的结束音量（0.0到1.0）。</li>
<li><code v-pre>duration：Number</code> 淡入时间，以毫秒为单位。</li>
<li><code v-pre>id：Number</code> <code v-pre>可选</code> 声音ID。如果不传递，则组中的所有声音将淡入。</li>
</ul>
</li>
<li>
<p>rate([rate], [id])</p>
<p>获取/设置声音的播放速率。此方法可选地接受0、1或2个参数。</p>
<ul>
<li><code v-pre>rate：Number</code> <code v-pre>可选</code> 播放速率。0.5到4.0，1.0为正常速度。</li>
<li><code v-pre>id：Number</code> <code v-pre>可选</code> 声音ID。如果不传递，则组中所有声音的播放速率将更改。</li>
</ul>
</li>
<li>
<p>seek([seek], [id])</p>
<p>获取/设置声音的播放位置。此方法可选地接受0、1或2个参数。</p>
<ul>
<li><code v-pre>seek：Number</code> <code v-pre>可选</code> 要移动当前播放到的位置（以秒为单位）。</li>
<li><code v-pre>id：Number</code> <code v-pre>可选</code> 声音ID。如果不传递，则第一个声音将寻址。</li>
</ul>
</li>
<li>
<p>loop([loop], [id])</p>
<p>获取/设置是否循环声音或组。此方法可以可选地接受0、1或2个参数。</p>
<ul>
<li><code v-pre>loop：Boolean</code> <code v-pre>可选</code> 是否循环。</li>
<li><code v-pre>id：Number</code> <code v-pre>可选</code> 声音ID。如果不传递，则组中所有声音的loop属性将更新。</li>
</ul>
</li>
<li>
<p>state()</p>
<p>检查Howl的加载状态，返回unloaded、loading或loaded。</p>
</li>
<li>
<p>playing([id])</p>
<p>检查声音是否正在播放，返回Boolean。如果不传递声音ID，则检查Howl组中的任何声音是否正在播放。</p>
<ul>
<li><code v-pre>id：Number</code> <code v-pre>可选</code> 要检查的声音ID。</li>
</ul>
</li>
<li>
<p>duration([id])</p>
<p>获取音频源的持续时间（以秒为单位）。在load事件触发之前将返回0。</p>
<ul>
<li><code v-pre>id：Number</code> <code v-pre>可选</code> 要检查的声音ID。传递ID将返回在此实例上播放的精灵的持续时间；否则，返回完整的源持续时间。</li>
</ul>
</li>
<li>
<p>on(event, function, [id])</p>
<p>监听事件。可以通过多次调用此方法添加多个事件。</p>
<ul>
<li><code v-pre>event：String</code> 要触发/设置的事件名称（load, loaderror, playerror, play, end, pause, stop, mute, volume, rate, seek, fade, unlock）。</li>
<li><code v-pre>function：Function</code> 定义要在事件上触发的函数。</li>
<li><code v-pre>id：Number</code> <code v-pre>可选</code> 仅监听此声音ID的事件。</li>
</ul>
</li>
<li>
<p>once(event, function, [id])</p>
<p>与on相同，但在回调触发后自身会被移除。</p>
<ul>
<li><code v-pre>event：String</code> 要触发/设置的事件名称（load, loaderror, playerror, play, end, pause, stop, mute, volume, rate, seek, fade, unlock）。</li>
<li><code v-pre>function：Function</code> 定义要在事件上触发的函数。</li>
<li><code v-pre>id：Number</code> <code v-pre>可选</code> 仅监听此声音ID的事件。</li>
</ul>
</li>
<li>
<p>off(event, [function], [id])</p>
<p>移除已设置的事件监听器。不传递参数以移除所有事件。</p>
<ul>
<li><code v-pre>event：String</code> 事件名称（load, loaderror, playerror, play, end, pause, stop, mute, volume, rate, seek, fade, unlock）。</li>
<li><code v-pre>function：Function</code> 可选 要移除的监听器。省略此参数以移除所有事件类型。</li>
<li><code v-pre>id：Number</code> <code v-pre>可选</code> 仅移除此声音ID的事件。</li>
</ul>
</li>
<li>
<p>load()
默认会被调用，但如果将preload设置为false，则必须在可以播放任何声音之前调用load。</p>
</li>
<li>
<p>unload()
卸载并销毁一个Howl对象。这将立即停止所有附加到此声音的声音，并将其从缓存中移除。</p>
</li>
</ul>
<h2 id="_2-3-全局选项" tabindex="-1"><a class="header-anchor" href="#_2-3-全局选项"><span>2.3 全局选项</span></a></h2>
<ul>
<li>
<p>usingWebAudio <code v-pre>Boolean</code></p>
<p>如果Web Audio API可用，则为true。</p>
</li>
<li>
<p>noAudio <code v-pre>Boolean</code></p>
<p>如果没有音频可用，则为true。</p>
</li>
<li>
<p>autoUnlock <code v-pre>Boolean</code> <code v-pre>true</code></p>
<p>自动尝试在移动设备（iOS、Android等）和桌面Chrome/Safari上启用音频。</p>
</li>
<li>
<p>html5PoolSize <code v-pre>Number</code> <code v-pre>10</code></p>
<p>每个HTML5 Audio对象必须单独解锁，因此我们保持一个全局池的解锁节点，以便在所有Howl实例之间共享。此池在第一次用户交互时创建，并设置为此属性的大小。</p>
</li>
<li>
<p>autoSuspend <code v-pre>Boolean</code> <code v-pre>true</code></p>
<p>在30秒不活动后自动暂停Web Audio AudioContext，以减少处理和能源使用。新的播放会自动恢复。将此属性设置为false以禁用此行为。</p>
</li>
<li>
<p>ctx <code v-pre>Boolean</code> <code v-pre>Web Audio Only</code></p>
<p>暴露Web Audio API中的AudioContext。</p>
</li>
<li>
<p>masterGain <code v-pre>Boolean</code> <code v-pre>Web Audio Only</code></p>
<p>暴露Web Audio API中的主GainNode。这对于编写插件或高级使用非常有用。</p>
</li>
</ul>
<h2 id="_2-4-全局方法" tabindex="-1"><a class="header-anchor" href="#_2-4-全局方法"><span>2.4 全局方法</span></a></h2>
<p>以下方法用于全局修改所有声音，并从Howler对象调用。</p>
<ul>
<li>
<p>mute(muted)</p>
<p>静音或取消静音所有声音。</p>
<ul>
<li><code v-pre>muted：Boolean</code> 静音为true，取消静音为false。</li>
</ul>
</li>
<li>
<p>volume([volume])</p>
<p>获取/设置所有声音的全局音量，相对于它们自己的音量。</p>
<ul>
<li><code v-pre>volume：Number</code> 可选 音量从0.0到1.0。</li>
</ul>
</li>
<li>
<p>stop()</p>
<p>停止所有声音并将它们的寻址位置重置为开始。</p>
</li>
<li>
<p>codecs(ext)</p>
<p>检查支持的音频编解码器。如果编解码器在当前浏览器中受支持，则返回true。</p>
<ul>
<li><code v-pre>ext：String</code> 文件扩展名。其中一个：“mp3”, “mpeg”, “opus”, “ogg”, “oga”, “wav”, “aac”, “caf”, “m4a”, “m4b”, “mp4”, “weba”, “webm”, “dolby”, “flac”。</li>
</ul>
</li>
<li>
<p>unload()</p>
<p>卸载并销毁所有当前加载的Howl对象。这将立即停止所有声音并将其从缓存中移除。</p>
</li>
</ul>
</div></template>


