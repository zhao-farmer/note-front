import { Container, Graphics, Sprite } from "../../js/pixi.mjs";
import { intersect } from "./intersect.js";

/* ---------------------------------
Spinner 4. 围绕正方形的边
------------------------------- */
export function generateSpinner4(app, position) {
  //新建一个容器
  const container = new Container();

  //容器的位置
  container.position = position;
  app.stage.addChild(container);

  const size = 100;
  //圆弧半径
  const arcRadius = 15;

  //初始化精灵
  const base = Sprite.from("../images/bg_scene_rotate.jpg");

  //宽度与高度
  base.width = size;
  base.height = size;

  // 为了获得更好的性能，预先对资产进行设定比遮罩要好。
  const roundingMask = new Graphics();

  // 围绕的遮罩 这个遮罩有颜色 会一直展示
  roundingMask.roundRect(0, 0, size, size, arcRadius).fill({ color: 0x0 });
  base.mask = roundingMask;

  // 边缘也可以用图像代替
  const lineSize = 5;
  const edge = new Graphics();

  //创建一个圆角边 是边框(stroke)类型的，外部是红色
  edge.roundRect(0, 0, size, size, arcRadius).stroke({ width: lineSize, color: 0xff0000 });

  //此示例中的Mask的工作方式与示例1基本相同。
  //除了它被反转并在边缘中以直线计算遮罩。
  const mask = new Graphics();

  //内部的遮罩
  mask.position.set(size / 2, size / 2);
  edge.mask = mask;

  container.addChild(base);
  container.addChild(roundingMask);
  container.addChild(edge);
  container.addChild(mask);

  let phase = 0;

  return (delta) => {
    // 更新阶段
    // 除以160 需要更长的时间去获取
    phase += delta / 160;
    phase %= Math.PI * 2;

    // 随时间变化 通过余弦与正弦确认x y变化 计算目标点
    const x = Math.cos(phase - Math.PI / 2) * size;
    const y = Math.sin(phase - Math.PI / 2) * size;
    // 线段计算 四个边
    const segments = [
      [-size / 2 + lineSize, -size / 2 + lineSize, size / 2 - lineSize, -size / 2 + lineSize], // 上边
      [size / 2 - lineSize, -size / 2 + lineSize, size / 2 - lineSize, size / 2 - lineSize], // 右边
      [-size / 2 + lineSize, size / 2 - lineSize, size / 2 - lineSize, size / 2 - lineSize], // 下边
      [-size / 2 + lineSize, -size / 2 + lineSize, -size / 2 + lineSize, size / 2 - lineSize], // 左边
    ];
    // 在每个分段处，应屏蔽到哪个目录继续
    let outDir = [
      [0, -1],
      [1, 0],
      [0, 1],
      [-1, 0],
    ];

    // 找到线段相交的点
    let intersection = null;
    let winding = 0;
    //在找到撞击后，在撞击线尺寸之前，线应该继续朝哪个方向前进
    for (let i = 0; i < segments.length; i++) {
      const segment = segments[i];
      //相交的点
      const hit = intersect(0, 0, x, y, segment[0], segment[1], segment[2], segment[3]);

      if (hit) {
        intersection = hit;
        if (i === 0) winding = hit.x < 0 ? 0 : 4;
        else winding = 4 - i; //这里发生了变动 1与3调换位置
        //判断 屏蔽目录
        outDir = outDir[i];
        break;
      }
    }

    //角度
    const corners = [
      -size / 2 - lineSize,
      -size / 2 - lineSize, // 左上角,
      -size / 2 - lineSize,
      size / 2 + lineSize, // 左下角
      size / 2 + lineSize,
      size / 2 + lineSize, // 右下角
      size / 2 + lineSize,
      -size / 2 - lineSize, // 左上角
    ];

    // 重绘遮罩
    // 这些形成一条直线，是竖着的一条线
    mask
      .clear()
      .moveTo(0, 0)
      .moveTo(0, -size / 2 - lineSize);

    // 填充角度
    for (let i = 0; i < winding; i++) {
      //循环中连接不同的角
      mask.lineTo(corners[i * 2], corners[i * 2 + 1]);
    }

    //首先连接短线的上边与下边
    //然后连接到原点
    //最后填充颜色
    mask
      .lineTo(intersection.x + outDir[0] * lineSize * 2, intersection.y + outDir[1] * lineSize * 2)
      .lineTo(intersection.x, intersection.y)
      .lineTo(0, 0)
      .fill({ color: 0xff0000 });
  };
}
