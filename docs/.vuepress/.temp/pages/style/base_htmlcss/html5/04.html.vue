<template><div><h1 id="四、新增多媒体标签" tabindex="-1"><a class="header-anchor" href="#四、新增多媒体标签"><span>四、新增多媒体标签</span></a></h1>
<h2 id="_4-1-视频标签-标签用来定义视频-它是双标签。" tabindex="-1"><a class="header-anchor" href="#_4-1-视频标签-标签用来定义视频-它是双标签。"><span>4.1 视频标签 标签用来定义视频，它是双标签。</span></a></h2>
<p><code v-pre>&lt;video&gt;</code> 标签用来定义视频，它是双标签。</p>
<table>
<thead>
<tr>
<th>属性</th>
<th>值</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>src</td>
<td>URL地址</td>
<td>视频地址</td>
</tr>
<tr>
<td>width</td>
<td>像素值</td>
<td>设置视频播放器的宽度</td>
</tr>
<tr>
<td>height</td>
<td>像素值</td>
<td>设置视频播放器的高度</td>
</tr>
<tr>
<td>controls</td>
<td>-</td>
<td>向用户显示视频控件（比如播放/暂停按钮）</td>
</tr>
<tr>
<td>muted</td>
<td>-</td>
<td>视频静音</td>
</tr>
<tr>
<td>autoplay</td>
<td>-</td>
<td>视频自动播放</td>
</tr>
<tr>
<td>loop</td>
<td>-</td>
<td>循环播放</td>
</tr>
<tr>
<td>poster</td>
<td>URL地址</td>
<td>视频封面</td>
</tr>
<tr>
<td>preload</td>
<td>auto/metadata/none</td>
<td>视频预加载，如果使用 autoplay ，则忽略该属性。<br>none : 不预加载视频。<br>metadata : 仅预先获取视频的元数据（例如长度）。<br>auto : 可以下载整个视频文件，即使用户不希望使用它。</td>
</tr>
</tbody>
</table>
<p>媒体参与度比较高时，解除静音播放</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">chrome://media-engagement/</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="_4-2-音频标签" tabindex="-1"><a class="header-anchor" href="#_4-2-音频标签"><span>4.2 音频标签</span></a></h2>
<p><code v-pre>&lt;audio&gt;</code>标签用来定义音频，它是双标签。</p>
<table>
<thead>
<tr>
<th>属性</th>
<th>值</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>src</td>
<td>URL地址</td>
<td>音频地址</td>
</tr>
<tr>
<td>controls</td>
<td>-</td>
<td>向用户显示音频控件（比如播放/暂停按钮）</td>
</tr>
<tr>
<td>autoplay</td>
<td>-</td>
<td>音频自动播放</td>
</tr>
<tr>
<td>muted</td>
<td>-</td>
<td>音频静音</td>
</tr>
<tr>
<td>loop</td>
<td>-</td>
<td>循环播放</td>
</tr>
<tr>
<td>preload</td>
<td>auto/metadata/none</td>
<td>none : 不预加载音频。<br>metadata : 仅预先获取音频的元数据（例如长度）。<br>auto : 可以下载整个音频文件，即使用户不希望使用它。</td>
</tr>
</tbody>
</table>
</div></template>


