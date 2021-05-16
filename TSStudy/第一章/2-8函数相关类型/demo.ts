// function add(first: number, second: number): number {
//   return first + second;
// }

// const total = add(1, 2);

// function sayhello(): void {
//   // 函数返回值为空 void
//   console.log("13");
// }

// function errorEmitter(): never {
//   // 函数返回值永远都不可能为空
//   throw new Error();
//   console.log(123);
// }

function add({ first, second }: { first: number; second: number }): number {
  return first + second;
}
const total = add({ first: 1, second: 2 });
