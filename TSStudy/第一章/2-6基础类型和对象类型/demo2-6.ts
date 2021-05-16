// 基础类型  null , undefined,symbol boolean void
const count: number = 123;
const teacherName: string = "lsj";

// 对象类型

class Person {}

const teacher: {
  name: string;
  age: number;
} = {
  name: "lsj",
  age: 18,
};

const number: number[] = [1, 2, 3, 4];

const dell: Person = new Person();

const getTotal: () => number = () => {
  // 返回值是一个number类型
  return 123;
};
