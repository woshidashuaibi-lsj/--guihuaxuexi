function tsdemo(data: { x: number; y: number }) {
  return Math.sqrt(data.x ** 2 + data.y ** 2);
}
// tsdemo();//会给我们报错提示
type Point = { x: number; y: number };

function tsdemo2(data: Point) {
  return Math.sqrt(data.x ** 2 + data.y ** 2);
}
interface Point2 {
  x: number;
  y: number;
}

function tsdemo3(data: Point) {
  return Math.sqrt(data.x ** 2 + data.y ** 2);
}
