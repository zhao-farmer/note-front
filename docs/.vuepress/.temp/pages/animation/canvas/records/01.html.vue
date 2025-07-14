<template><div><h1 id="canvas-api总结" tabindex="-1"><a class="header-anchor" href="#canvas-api总结"><span>canvas API总结</span></a></h1>
<h2 id="基本图形绘制" tabindex="-1"><a class="header-anchor" href="#基本图形绘制"><span>基本图形绘制</span></a></h2>
<p>用于绘制基本图形。</p>
<h3 id="矩形绘制-不需要路径" tabindex="-1"><a class="header-anchor" href="#矩形绘制-不需要路径"><span>矩形绘制（不需要路径）</span></a></h3>
<ul>
<li><code v-pre>void ctx.fillRect(x, y, width, height);</code>
<ul>
<li>绘制填充矩形，矩形的起点在 (x, y) 位置，矩形的尺寸是 width 和 height</li>
</ul>
</li>
<li><code v-pre>void ctx.strokeRect(x, y, width, height);</code>
<ul>
<li>在 canvas 中，使用当前的绘画样式，描绘一个起点在 (x, y) 、宽度为 w 、高度为 h 的矩形</li>
</ul>
</li>
<li><code v-pre>void ctx.clearRect(x, y, width, height);</code>
<ul>
<li>设置指定矩形区域内（以点 (x, y) 为起点，范围是(width, height) ）所有像素变成透明，并擦除之前绘制的所有内容</li>
</ul>
</li>
</ul>
<p>以上API参数说明如下：</p>
<ul>
<li><code v-pre>x</code>矩形起始点（左上角定点）的 x 轴坐标</li>
<li><code v-pre>y</code>矩形起始点的 y 轴坐标</li>
<li><code v-pre>width</code>矩形的宽度</li>
<li><code v-pre>height</code>矩形的高度</li>
</ul>
<h3 id="绘制文本" tabindex="-1"><a class="header-anchor" href="#绘制文本"><span>绘制文本</span></a></h3>
<ul>
<li><code v-pre>void ctx.fillText(text, x, y [, maxWidth]);</code>
<ul>
<li>在(x,y)位置绘制（填充）文本</li>
</ul>
</li>
<li><code v-pre>void ctx.strokeText(text, x, y [, maxWidth]);</code>
<ul>
<li>在(x,y)位置绘制（描边）文本</li>
</ul>
</li>
<li><code v-pre>ctx.measureText(text);</code>
<ul>
<li>返回一个 TextMetrics 对象，包含关于文本尺寸的信息（例如文本的宽度）</li>
</ul>
</li>
</ul>
<p>以上API参数说明如下：</p>
<ul>
<li><code v-pre>x</code>文本起点的 x 轴坐标</li>
<li><code v-pre>y</code>文本起点的 y 轴坐标</li>
<li><code v-pre>text</code>需要绘制的文本</li>
<li><code v-pre>maxWidth</code>可选，绘制的最大宽度</li>
</ul>
<h3 id="路径图形" tabindex="-1"><a class="header-anchor" href="#路径图形"><span>路径图形</span></a></h3>
<ul>
<li><code v-pre>void ctx.beginPath();</code>
<ul>
<li>通过清空子路径列表开始一个新路径</li>
</ul>
</li>
<li><code v-pre>void ctx.closePath();</code>
<ul>
<li>使笔点返回到当前子路径的起始点。它尝试从当前点到起始点绘制一条直线。如果图形已经是封闭的或者只有一个点，那么此方法不会做任何操作</li>
</ul>
</li>
<li><code v-pre>void ctx.moveTo(x, y);</code>
<ul>
<li>将一个新的子路径的起始点移动到(x，y)坐标</li>
</ul>
</li>
<li><code v-pre>void ctx.lineTo(x, y);</code>
<ul>
<li>使用直线连接子路径的最后的点到x,y坐标</li>
</ul>
</li>
<li><code v-pre>void ctx.quadraticCurveTo(cpx, cpy, x, y);</code>
<ul>
<li>添加一个2次贝赛尔曲线路径</li>
<li><code v-pre>cpx, cpy</code>第一个控制点(x,y)坐标</li>
<li><code v-pre>x,y</code>为结束点坐标</li>
</ul>
</li>
<li><code v-pre>void ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);</code>
<ul>
<li>添加一个3次贝赛尔曲线路径。该方法需要三个点。 第一、第二个点是控制点，第三个点是结束点。起始点是当前路径的最后一个点，绘制贝赛尔曲线前，可以通过调用 moveTo() 进行修改。</li>
<li><code v-pre>cp1x, cp1y</code>第一个控制点(x,y)坐标</li>
<li><code v-pre>cp2x, cp2y</code>第二个控制点(x,y)坐标</li>
<li><code v-pre>x,y</code>结束点坐标</li>
</ul>
</li>
<li><code v-pre>void ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);</code>
<ul>
<li>绘制一段圆弧路径， 圆弧路径的圆心在 (x, y) 位置，半径为 r ，根据anticlockwise （默认为顺时针）指定的方向从 startAngle 开始绘制，到 endAngle 结束。</li>
<li><code v-pre>x,y</code>为绘制圆弧所在圆上的圆心坐标</li>
<li><code v-pre>radius</code>为半径</li>
<li><code v-pre>startAngle</code>以及<code v-pre>endAngle</code>参数用以x轴为基准弧度定义了开始以及结束的弧度</li>
<li><code v-pre>anticlockwise</code>为一个布尔值，指定绘制反向，默认为false表示顺时针方向。true表示逆时针方向。</li>
</ul>
</li>
<li><code v-pre>void ctx.arcTo(x1, y1, x2, y2, radius);</code>
<ul>
<li>根据控制点和半径绘制圆弧路径，使用当前的描点(前一个moveTo或lineTo等函数的止点)。根据当前描点与给定的控制点1连接的直线，和控制点1与控制点2连接的直线，作为使用指定半径的圆的切线，画出两条切线之间的弧线路径</li>
<li><code v-pre>x1,y1</code>指定第一个控制点的坐标</li>
<li><code v-pre>x2,y2</code>指定第二个控制点的坐标</li>
<li><code v-pre>radius</code>指定圆弧的半径</li>
</ul>
</li>
<li><code v-pre>void ctx.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle, anticlockwise);</code>
<ul>
<li>添加一个椭圆路径，椭圆的圆心在（x,y）位置，半径分别是radiusX 和 radiusY ，按照anticlockwise （默认顺时针）指定的方向，从 startAngle 开始绘制，到 endAngle 结束。</li>
<li><code v-pre>x,y</code>椭圆圆心的(x,y)坐标</li>
<li><code v-pre>radiusX</code>椭圆长轴的半径</li>
<li><code v-pre>radiusY</code>椭圆短轴的半径</li>
<li><code v-pre>rotation</code>椭圆的旋转角度，以弧度表示(非角度度数)</li>
<li><code v-pre>startAngle</code>将要绘制的起始点角度，从 x 轴测量，以弧度表示(非角度度数)</li>
<li><code v-pre>endAngle</code>椭圆将要绘制的结束点角度，以弧度表示(非角度度数)</li>
<li><code v-pre>anticlockwise</code>为一个布尔值，指定绘制反向，默认为false表示顺时针方向。true表示逆时针方向。</li>
</ul>
</li>
<li><code v-pre>void ctx.rect(x, y, width, height);</code>
<ul>
<li>创建一个矩形路径，矩形的起点位置是 (x, y) ，尺寸为 width 和 height</li>
</ul>
</li>
</ul>
<h3 id="路径" tabindex="-1"><a class="header-anchor" href="#路径"><span>路径</span></a></h3>
<ul>
<li><code v-pre>void ctx.fill();</code> <code v-pre>void ctx.fill(fillRule);</code> <code v-pre>void ctx.fill(path, fillRule);</code>
<ul>
<li>使用当前的样式填充子路径</li>
<li><code v-pre>path</code>需要填充的<code v-pre>Path2D</code>路径</li>
<li><code v-pre>fillRule</code>一种算法，决定点是在路径内还是在路径外:&quot;nonzero&quot;,&quot;evenodd&quot;</li>
</ul>
</li>
<li><code v-pre>void ctx.stroke();</code> <code v-pre>void ctx.stroke(path);</code>
<ul>
<li>使用当前的样式描边子路径</li>
</ul>
</li>
<li><code v-pre>void ctx.clip();</code> <code v-pre>void ctx.clip(fillRule);</code> <code v-pre>void ctx.clip(path, fillRule);</code>
<ul>
<li>从当前路径创建一个剪切路径。在<code v-pre>clip()</code>调用之后，绘制的所有信息只会出现在剪切路径内部</li>
</ul>
</li>
<li><code v-pre>boolean ctx.isPointInPath(x, y);</code> <code v-pre>boolean ctx.isPointInPath(x, y, fillRule);</code> <code v-pre>boolean ctx.isPointInPath(path, x, y);</code> <code v-pre>boolean ctx.isPointInPath(path, x, y, fillRule);</code>
<ul>
<li>判断当前路径是否包含检测点</li>
</ul>
</li>
<li><code v-pre>boolean ctx.isPointInStroke(x, y);</code> <code v-pre>boolean ctx.isPointInStroke(path, x, y);</code>
<ul>
<li>判断检测点是否在路径的描边线上</li>
</ul>
</li>
</ul>
<h2 id="颜色和样式" tabindex="-1"><a class="header-anchor" href="#颜色和样式"><span>颜色和样式</span></a></h2>
<p>控制绘制图形的颜色以及样式。</p>
<h3 id="线型" tabindex="-1"><a class="header-anchor" href="#线型"><span>线型</span></a></h3>
<ul>
<li><code v-pre>ctx.lineWidth = value;</code>
<ul>
<li>线的宽度。默认 1.0</li>
</ul>
</li>
<li><code v-pre>ctx.lineCap = &quot;butt&quot; || &quot;round&quot; || &quot;square&quot;;</code>
<ul>
<li>线末端的类型。 允许的值： butt (默认), round, square</li>
</ul>
</li>
<li><code v-pre>ctx.lineJoin = &quot;miter&quot; || &quot;round&quot; || &quot;bevel&quot;;</code>
<ul>
<li>定义两线相交拐点的类型。允许的值：round, bevel, miter(默认)</li>
</ul>
</li>
<li><code v-pre>ctx.miterLimit = value;</code>
<ul>
<li>斜接面限制比例。默认 10</li>
</ul>
</li>
<li><code v-pre>Array ctx.getLineDash();</code>
<ul>
<li>返回一组描述交替绘制线段和间距（坐标空间单位）长度的数字。如果数组元素的数量是奇数，数组元素会被复制并重复。 例如， 设置线段为 <code v-pre>[5, 15, 25]</code> 将会得到以下返回值 <code v-pre>[5, 15, 25, 5, 15, 25]</code>。</li>
</ul>
</li>
<li><code v-pre>void ctx.setLineDash(segments);</code>
<ul>
<li>设置当前的线段样式</li>
</ul>
</li>
<li><code v-pre>ctx.lineDashOffset = value;</code>
<ul>
<li>设置虚线偏移量的属性，偏移量是float精度的数字。 初始值为 0.0。</li>
</ul>
</li>
</ul>
<h3 id="文本样式" tabindex="-1"><a class="header-anchor" href="#文本样式"><span>文本样式</span></a></h3>
<ul>
<li><code v-pre>ctx.font = value;</code>
<ul>
<li>设置绘制文字时，当前字体样式的属性</li>
<li><code v-pre>value</code>符合CSS font 语法的DOMString 字符串。默认字体是 10px sans-serif.</li>
</ul>
</li>
<li><code v-pre>ctx.textAlign = &quot;left&quot; || &quot;right&quot; || &quot;center&quot; || &quot;start&quot; || &quot;end&quot;;</code>
<ul>
<li>文本对齐设置</li>
</ul>
</li>
<li><code v-pre>ctx.textBaseline = &quot;top&quot; || &quot;hanging&quot; || &quot;middle&quot; || &quot;alphabetic&quot; || &quot;ideographic&quot; || &quot;bottom&quot;;</code>
<ul>
<li>基线对齐设置</li>
</ul>
</li>
<li><code v-pre>ctx.direction = &quot;ltr&quot; || &quot;rtl&quot; || &quot;inherit&quot;;</code>
<ul>
<li>文本的方向</li>
</ul>
</li>
</ul>
<h3 id="填充和描边样式" tabindex="-1"><a class="header-anchor" href="#填充和描边样式"><span>填充和描边样式</span></a></h3>
<ul>
<li><code v-pre>ctx.fillStyle = color || gradient || pattern</code>
<ul>
<li>图形内部的颜色和样式。 默认 #000 (黑色).</li>
<li><code v-pre>color</code>DOMString 字符串，被转换成 CSS color 颜色值</li>
<li><code v-pre>gradient</code>CanvasGradient 对象 （线性渐变或者放射性渐变）</li>
<li><code v-pre>pattern</code> CanvasPattern 对象 （可重复图像）</li>
</ul>
</li>
<li><code v-pre>ctx.strokeStyle = color || gradient || pattern</code>
<ul>
<li>图形边线的颜色和样式。 默认 #000 (黑色)</li>
</ul>
</li>
</ul>
<h3 id="渐变和图案" tabindex="-1"><a class="header-anchor" href="#渐变和图案"><span>渐变和图案</span></a></h3>
<ul>
<li><code v-pre>CanvasGradient ctx.createLinearGradient(x0, y0, x1, y1);</code>
<ul>
<li>创建一个沿参数坐标指定的直线的渐变</li>
</ul>
</li>
<li><code v-pre>CanvasGradient ctx.createRadialGradient(x0, y0, r0, x1, y1, r1);</code>
<ul>
<li>创建一个沿着参数坐标指定的线的放射性性渐变</li>
</ul>
</li>
<li><code v-pre>CanvasPattern ctx.createPattern(image, repetition);</code>
<ul>
<li>使用指定的图片 (a CanvasImageSource)创建图案</li>
<li><code v-pre>image</code>作为重复图像源的<code v-pre>CanvasImageSource</code>对象</li>
<li><code v-pre>repetition</code> DOMString，指定如何重复图像。允许的值有：&quot;repeat&quot; (both directions),&quot;repeat-x&quot; (horizontal only),&quot;repeat-y&quot; (vertical only), &quot;no-repeat&quot; (neither).</li>
</ul>
</li>
</ul>
<h3 id="阴影" tabindex="-1"><a class="header-anchor" href="#阴影"><span>阴影</span></a></h3>
<ul>
<li><code v-pre>ctx.shadowBlur = level;</code>
<ul>
<li>描述模糊效果。 默认 0</li>
</ul>
</li>
<li><code v-pre>ctx.shadowColor = color;</code>
<ul>
<li>阴影的颜色。 默认fully-transparent black</li>
</ul>
</li>
<li><code v-pre>ctx.shadowOffsetX = offset;</code>
<ul>
<li>阴影水平方向的偏移量。 默认 0</li>
</ul>
</li>
<li><code v-pre>ctx.shadowOffsetY = offset;</code>
<ul>
<li>阴影垂直方向的偏移量。 默认 0</li>
</ul>
</li>
</ul>
<h2 id="变换" tabindex="-1"><a class="header-anchor" href="#变换"><span>变换</span></a></h2>
<p>在<code v-pre>CanvasRenderingContext2D</code>渲染背景中的对象会有一个当前的变换矩阵，一些方法可以对其进行控制。当创建当前的默认路径，绘制文本、图形和Path2D对象的时候，会应用此变换矩阵。</p>
<ul>
<li><code v-pre>void ctx.rotate(angle);</code>
<ul>
<li>在变换矩阵中增加旋转，角度变量表示一个顺时针旋转角度并且用弧度表示</li>
<li><code v-pre>angle</code> 顺时针旋转的弧度。如果你想通过角度值计算，可以使用公式： degree * Math.PI / 180</li>
</ul>
</li>
<li><code v-pre>void ctx.scale(x, y);</code>
<ul>
<li>根据 x 水平方向和 y 垂直方向，为canvas 单位添加缩放变换</li>
</ul>
</li>
<li><code v-pre>void ctx.translate(x, y);</code>
<ul>
<li>通过在网格中移动 canvas 和 canvas 原点 x 水平方向、原点 y 垂直方向，添加平移变换</li>
</ul>
</li>
<li><code v-pre>void ctx.transform(m11, m12, m21, m22, dx, dy);</code>
<ul>
<li>使用方法参数描述的矩阵多次叠加当前的变换矩阵。</li>
<li><code v-pre>m11</code> 水平方向的缩放</li>
<li><code v-pre>m12</code> 水平方向的倾斜</li>
<li><code v-pre>m21</code> 竖直方向的倾斜</li>
<li><code v-pre>m22</code> 竖直方向的缩放</li>
<li><code v-pre>dx</code> 水平方向的移动</li>
<li><code v-pre>dy</code> 竖直方向的移动</li>
</ul>
</li>
<li><code v-pre>void ctx.setTtransform(m11, m12, m21, m22, dx, dy);</code>
<ul>
<li>重新设置当前的变换为单位矩阵，并使用同样的变量调用<code v-pre>transform()</code>方法</li>
</ul>
</li>
<li><code v-pre>void ctx.resetTransform();</code>
<ul>
<li>使用单位矩阵重新设置当前的变换</li>
</ul>
</li>
</ul>
<h2 id="合成" tabindex="-1"><a class="header-anchor" href="#合成"><span>合成</span></a></h2>
<p>规定两个前后绘制的两个图形之间的组合方式。</p>
<ul>
<li><code v-pre>ctx.globalAlpha = value;</code>
<ul>
<li>在合成到 canvas 之前，设置图形和图像透明度的值。默认 1.0 (不透明)。</li>
</ul>
</li>
<li><code v-pre>ctx.globalCompositeOperation = type;</code>
<ul>
<li>通过<code v-pre>globalAlpha</code>应用，设置如何在已经存在的位图上绘制图形和图像</li>
</ul>
</li>
</ul>
<h2 id="图像相关" tabindex="-1"><a class="header-anchor" href="#图像相关"><span>图像相关</span></a></h2>
<p>设置图片和canvas的交互方式</p>
<h3 id="绘制图像" tabindex="-1"><a class="header-anchor" href="#绘制图像"><span>绘制图像</span></a></h3>
<p><code v-pre>drawImage</code>方法用于在canvas上绘制图像，有下面三种形式：</p>
<ul>
<li><code v-pre>void ctx.drawImage(image, dx, dy);</code></li>
<li><code v-pre>void ctx.drawImage(image, dx, dy, dWidth, dHeight);</code></li>
<li><code v-pre>void ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);</code></li>
</ul>
<p>以上方法的参数含义如下：</p>
<ul>
<li><code v-pre>image</code>绘制到上下文的元素。允许任何的 canvas 图像源(CanvasImageSource)，例如：HTMLImageElement，HTMLVideoElement，或者 HTMLCanvasElement</li>
<li><code v-pre>dx</code>目标画布的左上角在目标canvas上 X 轴的位置</li>
<li><code v-pre>dy</code>目标画布的左上角在目标canvas上 Y 轴的位置</li>
<li><code v-pre>dWidth</code>在目标画布上绘制图像的宽度。 允许对绘制的图像进行缩放。 如果不说明， 在绘制时图片宽度不会缩放</li>
<li><code v-pre>dHeight</code>在目标画布上绘制图像的高度。 允许对绘制的图像进行缩放。 如果不说明， 在绘制时图片高度不会缩放</li>
<li><code v-pre>sx</code>需要绘制到目标上下文中的，源图像的矩形选择框的左上角 X 坐标</li>
<li><code v-pre>sy</code>需要绘制到目标上下文中的，源图像的矩形选择框的左上角 Y 坐标</li>
<li><code v-pre>sWidth</code>需要绘制到目标上下文中的，源图像的矩形选择框的宽度。如果不说明，整个矩形从坐标的sx和sy开始，到图像的右下角结束</li>
<li><code v-pre>sHeight</code>需要绘制到目标上下文中的，源图像的矩形选择框的高度</li>
</ul>
<h3 id="像素控制" tabindex="-1"><a class="header-anchor" href="#像素控制"><span>像素控制</span></a></h3>
<ul>
<li><code v-pre>ImageData ctx.createImageData(width, height);</code> <code v-pre>ImageData ctx.createImageData(imagedata);</code>
<ul>
<li>创建一个 新的、空白的、指定大小的 ImageData 对象。 所有的像素在新对象中都是透明的。</li>
<li><code v-pre>width</code> <code v-pre>ImageData</code>新对象的宽度</li>
<li><code v-pre>height</code> <code v-pre>ImageData</code>新对象的高度</li>
<li><code v-pre>imagedata</code> 从现有的 ImageData 对象中，复制一个和其宽度和高度相同的对象。图像自身不允许被复制。</li>
</ul>
</li>
<li><code v-pre>ImageData ctx.getImageData(sx, sy, sw, sh);</code>
<ul>
<li>返回一个 ImageData 对象，用来描述canvas区域隐含的像素数据，这个区域通过矩形表示，起始点为(sx, sy)、宽为sw、高为sh</li>
</ul>
</li>
<li><code v-pre>void ctx.putImageData(imagedata, dx, dy, [ dirtyX, dirtyY, dirtyWidth, dirtyHeight ]);</code>
<ul>
<li>将数据从已有的 ImageData 绘制到位图上。 如果提供了脏矩形，只能绘制矩形的像素</li>
<li><code v-pre>dx</code> 源图像数据在目标画布中的位置偏移量（x 轴方向的偏移量）</li>
<li><code v-pre>dy</code> 源图像数据在目标画布中的位置偏移量（y 轴方向的偏移量）</li>
<li><code v-pre>dirtyX</code> 可选，在源图像数据中，矩形区域左上角的位置。默认是整个图像数据的左上角（x 坐标）</li>
<li><code v-pre>dirtyY</code> 可选，在源图像数据中，矩形区域左上角的位置。默认是整个图像数据的左上角（y 坐标）</li>
<li><code v-pre>dirtyWidth</code> 可选，在源图像数据中，矩形区域的宽度。默认是图像数据的宽度</li>
<li><code v-pre>dirtyHeight</code> 可选，在源图像数据中，矩形区域的高度。默认是图像数据的高度</li>
</ul>
</li>
</ul>
<h2 id="canvas-状态" tabindex="-1"><a class="header-anchor" href="#canvas-状态"><span>canvas 状态</span></a></h2>
<p>CanvasRenderingContext2D渲染环境包含了多种绘图的样式状态（属性有线的样式、填充样式、阴影样式、文本样式）。下面的方法会帮助你使用这些状态：</p>
<ul>
<li><code v-pre>void ctx.save();</code>
<ul>
<li>使用栈保存当前的绘画样式状态，你可以使用<code v-pre>restore()</code>恢复任何改变</li>
</ul>
</li>
<li><code v-pre>void ctx.restore();</code>
<ul>
<li>恢复到最近的绘制样式状态，此状态是通过<code v-pre>save()</code>保存到”状态栈“中最新的元素</li>
</ul>
</li>
<li><code v-pre>ctx.canvas;</code>
<ul>
<li>对<code v-pre>HTMLCanvasElement</code>只读的反向引用。如果和<code v-pre>canvas</code>元素没有联系，可能为<code v-pre>null</code>。</li>
</ul>
</li>
</ul>
<p>以上保存和恢复的canvas状态包括：</p>
<ul>
<li>当前的变换矩阵</li>
<li>当前的剪切区域</li>
<li>当前的虚线列表</li>
<li>以下属性当前的值：
<ul>
<li><code v-pre>strokeStyle</code>线框填充样式</li>
<li><code v-pre>fillStyle</code>图形填充样式</li>
<li><code v-pre>globalAlpha</code>全局透明度</li>
<li><code v-pre>lineWidth</code>线宽</li>
<li><code v-pre>lineCap</code>线头（线帽）</li>
<li><code v-pre>lineJoin</code>线交方式</li>
<li><code v-pre>miterLimit</code>斜接面限制比例</li>
<li><code v-pre>lineDashOffset</code>虚线偏移</li>
<li><code v-pre>shadowOffsetX</code>阴影X偏移</li>
<li><code v-pre>shadowOffsetY</code>阴影Y偏移</li>
<li><code v-pre>shadowBlur</code>阴影模糊程度</li>
<li><code v-pre>shadowColor</code>阴影颜色</li>
<li><code v-pre>globalCompositeOperation</code>图形组合方式</li>
<li><code v-pre>font</code>字体样式</li>
<li><code v-pre>textAlign</code>文本的对齐方式</li>
<li><code v-pre>textBaseline</code>文本基线</li>
<li><code v-pre>direction</code>文本方向</li>
<li><code v-pre>imageSmoothingEnabled</code>图形缩放是否平滑</li>
</ul>
</li>
</ul>
</div></template>


