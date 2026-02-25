/**
 * Helper functions

Paul Bourke的线截距数学http://paulbourke.net/geometry/pointlineplane/
确定两条线段的交点
如果线条不相交，则返回FALSE
对原始代码进行了修改，以匹配pixi示例的linting规则。

前四个参数与后四个参数都代表 一条线
每两个参数代表一个点 
*/
export function intersect(x1, y1, x2, y2, x3, y3, x4, y4) {
  // 检查每条线的起始位置是否相同 如果相同是个点 不符合判断 直接返回false
  if ((x1 === x2 && y1 === y2) || (x3 === x4 && y3 === y4)) {
    return false;
  }

  // 分母
  const denominator = (y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1);

  // 线条是平行的
  if (denominator === 0) {
    return false;
  }

  const ua = ((x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3)) / denominator;
  const ub = ((x2 - x1) * (y1 - y3) - (y2 - y1) * (x1 - x3)) / denominator;

  // 是沿线段的交点
  if (ua < 0 || ua > 1 || ub < 0 || ub > 1) {
    return false;
  }

  // 返回一个具有交点x和y坐标的对象
  const x = x1 + ua * (x2 - x1);
  const y = y1 + ua * (y2 - y1);

  return { x, y };
}
