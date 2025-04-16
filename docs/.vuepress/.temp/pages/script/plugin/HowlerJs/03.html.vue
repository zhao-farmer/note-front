<template><div><h1 id="三、插件-空间音效-howler-spatial" tabindex="-1"><a class="header-anchor" href="#三、插件-空间音效-howler-spatial"><span>三、插件：空间音效(howler.spatial)</span></a></h1>
<h2 id="_3-1-选项" tabindex="-1"><a class="header-anchor" href="#_3-1-选项"><span>3.1 选项</span></a></h2>
<ul>
<li>
<p>orientation Array [1, 0, 0]</p>
<p>设置音频源在3D笛卡尔坐标空间中指向的方向。根据cone属性，声音指向远离监听器时可能会很安静或无声。</p>
</li>
<li>
<p>stereo Number null</p>
<p>设置此声音或组的音频源的立体声平移值。这使得设置左右平移非常容易，-1.0为远左，1.0为远右。</p>
</li>
<li>
<p>pos Array null</p>
<p>设置此声音或组的音频源相对于全局监听器的3D空间位置。</p>
</li>
<li>
<p>pannerAttr Object</p>
<p>设置声音或组的声音源的panner节点属性。查看pannerAttr方法了解所有可用选项。</p>
</li>
<li>
<p>onstereo Function</p>
<p>当当前声音的立体声平移更改时触发。第一个参数是声音的ID。</p>
</li>
<li>
<p>onpos Function</p>
<p>当当前声音的监听器位置更改时触发。第一个参数是声音的ID。</p>
</li>
<li>
<p>onorientation Function</p>
<p>当当前声音的监听器方向更改时触发。第一个参数是声音的ID。</p>
</li>
</ul>
<h2 id="_3-2-方法" tabindex="-1"><a class="header-anchor" href="#_3-2-方法"><span>3.2 方法</span></a></h2>
<ul>
<li>
<p>stereo(pan, [id])</p>
<p>获取/设置此声音或组的音频源的立体声平移。</p>
<ul>
<li>pan：Number -1.0为全左，1.0为全右。</li>
<li>id：Number 可选 声音ID。如果不传递，则组中的所有声音将更新。</li>
</ul>
</li>
<li>
<p>pos(x, y, z, [id])</p>
<p>获取/设置此声音或组的音频源相对于全局监听器的3D空间位置。</p>
<ul>
<li>x：Number 音频源的x位置。</li>
<li>y：Number 音频源的y位置。</li>
<li>z：Number 音频源的z位置。</li>
<li>id：Number 可选 声音ID。如果不传递，则组中的所有声音将更新。</li>
</ul>
</li>
<li>
<p>orientation(x, y, z, [id])</p>
<p>获取/设置音频源在3D笛卡尔坐标空间中指向的方向。根据cone属性，声音指向远离监听器时可能会很安静或无声。</p>
<ul>
<li>x：Number 源的x方向。</li>
<li>y：Number 源的y方向。</li>
<li>z：Number 源的z方向。</li>
<li>id：Number 可选 声音ID。如果不传递，则组中的所有声音将更新。</li>
</ul>
</li>
<li>
<p>pannerAttr(o, [id])</p>
<p>获取/设置声音或组的panner节点属性。</p>
<ul>
<li>o：Object 要更新的所有值。</li>
<li>coneInnerAngle 360 定向音频源的参数，这是内部角度，在该角度内不会有音量降低。</li>
<li>coneOuterAngle 360 定向音频源的参数，这是外部角度，超出该角度音量将降低到coneOuterGain的恒定值。</li>
<li>coneOuterGain 0 定向音频源的参数，这是在coneOuterAngle之外的增益。它是一个线性值，在[0, 1]范围内。</li>
<li>distanceModel inverse 确定用于降低音量的算法，音频远离监听器时。可以是linear、inverse或exponential。您可以在规范中找到每种实现。</li>
<li>maxDistance 10000 源和监听器之间的最大距离，超过这个距离后音量不再降低。</li>
<li>refDistance 1 降低音量的参考距离，作为距离模型的一个变量。这在不同的模型中有不同的效果，取决于您的坐标比例。通常，在此距离处音量将等于1。</li>
<li>rolloffFactor 1 音量降低的速度，随着源从监听器移动。这只是距离模型的一个变量，可以是linear时的[0, 1]范围，以及inverse和exponential时的[0, ∞]范围。</li>
<li>panningModel HRTF 确定用于定位音频的空间化算法。可以是HRTF或equalpower。</li>
<li>id：Number 可选 声音ID。如果不传递，则组中的所有声音将更新。</li>
</ul>
</li>
</ul>
<h2 id="_3-3-全局方法" tabindex="-1"><a class="header-anchor" href="#_3-3-全局方法"><span>3.3 全局方法</span></a></h2>
<ul>
<li>
<p>stereo(pan)</p>
<p>辅助方法，更新所有当前Howls的立体声平移位置。未来的Howls除非显式设置，否则不会使用此值。</p>
<ul>
<li>
<p>pan：Number -1.0为全左，1.0为全右。</p>
</li>
<li>
<p>pos(x, y, z)</p>
<p>获取/设置监听器在3D笛卡尔空间中的位置。使用3D位置的声音将相对于监听器的位置。</p>
<ul>
<li>x：Number 监听器的x位置。</li>
<li>y：Number 监听器的y位置。</li>
<li>z：Number 监听器的z位置。</li>
</ul>
</li>
</ul>
</li>
<li>
<p>orientation(x, y, z, xUp, yUp, zUp)</p>
<p>获取/设置监听器在3D笛卡尔空间中指向的方向。必须提供前向和向上向量。前向是监听器脸部指向的方向，向上是监听器顶部指向的方向。因此，这些值预期是彼此垂直的。</p>
<ul>
<li>x：Number 监听器的x方向。</li>
<li>y：Number 监听器的y方向。</li>
<li>z：Number 监听器的z方向。</li>
<li>xUp：Number 监听器顶部的x方向。</li>
<li>yUp：Number 监听器顶部的y方向。</li>
<li>zUp：Number 监听器顶部的z方向。</li>
</ul>
</li>
</ul>
</div></template>


