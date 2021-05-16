// 基础类型 ， boolean , number ,string, void,underfined,symbol.null

// 对象类型 ， {} , class ,function, []
const func = (str: string): number => {
  return parseInt(str, 10);
};

const func1: (str: string) => number = (str) => {
  return parseInt(str, 10);
};

// 两种写法
const data = new Date();

// 其他的case
interface Person {
  name: "string";
}

const rawData = '{"name":"lsj"}';
const newData: Person = JSON.parse(rawData);

let temp: number | string = 123;
temp = "123";
