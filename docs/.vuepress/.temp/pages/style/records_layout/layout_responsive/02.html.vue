<template><div><h1 id="二、响应式应用架构" tabindex="-1"><a class="header-anchor" href="#二、响应式应用架构"><span>二、响应式应用架构</span></a></h1>
<p>响应式布局方法也用于应用导航，当应用窗口发生变化时，应用导航方式也会随着窗口达到对应断点值而发生变化，通过导航方式的调整提高交互的易用性。</p>
<h2 id="_2-1-侧边tab" tabindex="-1"><a class="header-anchor" href="#_2-1-侧边tab"><span>2.1 侧边Tab</span></a></h2>
<p>当窗口宽度达到对应的断点值，底部 Tab 可以结合挪移布局的方法，把 Tab 组件挪移到左侧。在大尺寸设备上提高交互易用性。</p>
<p>适用于导航结构简单的内容型应用，例如音乐、视频等。</p>
<p>窗口宽度 ≥ 840vp，建议使用侧边 Tab，侧边 Tab 的导航选项继承底部 Tab 。</p>
<p><img src="/style/records_layout/layout_responsive/012.png" alt=""></p>
<h2 id="_2-2-分栏" tabindex="-1"><a class="header-anchor" href="#_2-2-分栏"><span>2.2 分栏</span></a></h2>
<p>当窗口宽度达到对应的断点值，原来父子关系的层级页面可拆分后平行显示，在大尺寸设备上充分发挥屏幕的显示优势，例如设置、短信等。</p>
<p>窗口宽度 ≥ 600vp，建议使用分栏布局。默认两栏宽度比例为 4:6，特定场景下可支持配置为 5:5 或 6:4</p>
<p><img src="/style/records_layout/layout_responsive/013.png" alt=""></p>
<h2 id="_2-3-侧边导航栏" tabindex="-1"><a class="header-anchor" href="#_2-3-侧边导航栏"><span>2.3 侧边导航栏</span></a></h2>
<p>侧边导航栏是大屏设备上常用的一种导航方式，使用侧边导航栏，通过切换导航页签或入口提高操作效率。</p>
<h2 id="_2-3-1-底部-tab-切换侧边导航栏" tabindex="-1"><a class="header-anchor" href="#_2-3-1-底部-tab-切换侧边导航栏"><span>2.3.1 底部 Tab 切换侧边导航栏</span></a></h2>
<p>窗口宽度≥840 底部 Tab 可切换为侧边导航栏，默认侧边导航栏在窗口容器内嵌入显示。</p>
<p>底部 Tab 可切换为侧边导航栏必须针对导航栏做一定的拓展，例如拓展导航的层级、增加导航的选项、增加高频功能等，若导航选项保持不变仅位置变化则使用侧边 Tab。</p>
<p><img src="/style/records_layout/layout_responsive/014.png" alt=""></p>
<h2 id="_2-3-2-侧边导航栏显示与收起" tabindex="-1"><a class="header-anchor" href="#_2-3-2-侧边导航栏显示与收起"><span>2.3.2 侧边导航栏显示与收起</span></a></h2>
<p>侧边导航栏默认显示，点击导航栏上的图标可临时收起侧边导航栏，在大尺寸设备上通过收起导航栏可以获得更多的内容显示空间。</p>
<p>特殊场景下可选择侧边导航栏固定显示，固定显示时侧边导航栏固定显示在页面左侧，导航栏不显示收起图标，固定显示方式不支持悬浮显示，需要满足窗口最小宽度 ≥ 840。</p>
<p><img src="/style/records_layout/layout_responsive/015.png" alt=""></p>
<p>侧边导航栏显示</p>
<p><img src="/style/records_layout/layout_responsive/016.png" alt=""></p>
<p>侧边导航栏收起</p>
<h2 id="_2-3-3-侧边导航栏嵌入和悬浮" tabindex="-1"><a class="header-anchor" href="#_2-3-3-侧边导航栏嵌入和悬浮"><span>2.3.3 侧边导航栏嵌入和悬浮</span></a></h2>
<p>侧边导航栏支持嵌入和悬浮两种显示方式，在支持窗口自由缩放的大尺寸设备上，根据窗口的宽度变化在达到对应断点值后切换显示方式。</p>
<p><img src="/style/records_layout/layout_responsive/017.png" alt=""></p>
<p>窗口宽度 ≥ 840</p>
<p><img src="/style/records_layout/layout_responsive/018.png" alt=""></p>
<p>窗口宽度 ≤ 840</p>
</div></template>


