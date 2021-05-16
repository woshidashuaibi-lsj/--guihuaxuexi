interface Point2 {
  x: number;
  y: number;
}

function tsdemo6(data: Point2) {
  console.log("123");
  return Math.sqrt(data.x ** 2 + data.y ** 2);
}

tsdemo6({ x: 1, y: 123 });
