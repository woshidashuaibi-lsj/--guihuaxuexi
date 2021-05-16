// type annotation 类型注解,我们来告诉ts变量是什么类型
// type interence 类型推断 当我们把鼠标放上去的时候他会帮我们判断数据是什么类型?
// 如果 ts 能够自动分析变量类型，就不需要我们做什么了
// 如果 TS 无法分析变量类型的话，我们就需要使用类型注解

// let counts: number;
// counts = 123;

// let countInterence = 123;

// const firstNumber = 1;
// const secondNumber = 2;
// const total = firstNumber + secondNumber; //这里已经帮我们推断出数据的类型

function getTotal2(firstNumber: number, secondNumber: number) {
  // 这里已经是无法判断数据类型的，就需要我们增加类型注解，这里显示的是any
  return firstNumber + secondNumber;
}

const total = getTotal2(1, 2); // 这里就已经帮我们定义好了total类型,这里就是类型推断


