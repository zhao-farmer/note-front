import { Container, Graphics } from "../../js/pixi.mjs";

/* ---------------------
Spinner 5. 圆矩形定长旋转器
-------------------- */
export function generateSpinner5(app, position) {
  //创建应用程序
  const container = new Container();

  //设置位置
  container.position = position;
  app.stage.addChild(container);

  //设置半个圆 颜色红色
  const halfCircle = new Graphics().arc(0, 0, 100, 0, Math.PI).fill({ color: 0xff0000 });

  //设置位置的中心点
  halfCircle.position.set(50, 50);

  //设置圆角矩形 白色
  const rectangle = new Graphics().roundRect(0, 0, 100, 100, 16).stroke({ width: 2, color: 0xffffff });

  //圆角矩形的遮罩使用半圆
  rectangle.mask = halfCircle;

  //再容器中添加圆角矩形与半圆遮罩
  container.addChild(rectangle);
  container.addChild(halfCircle);

  //阶段
  let phase = 0;

  return (delta) => {
    // 更新阶段
    phase += delta / 6;
    phase %= Math.PI * 2;

    //设置旋转角度，每次角度变化 都会将数据改变
    halfCircle.rotation = phase;
  };
}
