## 静态代码类型

ts 是 js 的超类型语言，不能在浏览器环境下运行。（需要经过编译为 js 后才能在浏览器的环境下运行）

## ts 的优势

ts 在写代码过程就会给我们定位错误，开发编写代码过程中帮我们发现一些潜在的问题。
并且还会个我们相关有好的代码提示。
代码语义更清晰

nodeTLS 长期稳定版本
Prettier - Code formatter 格式化代码的插件 setting 里面设置

直接运行 node 1.ts 是无法跑动起来的

tsc 命令行是我们用来编译 ts 文件的

运行方式 1: tsc demo.ts
运行方式 2: npm install -g ts-node 然后运行 ts-node demo.ts

全局安装 ts npm install typescript -g

npm -S 写入 dependencies
npm -D 写入 devDependencies
npm -g 全局安装

当我们用一个静态类型语言去定义一个数据的时候不仅是给把它的数据类型定义好，他的方法也基本定义好。

## 爬虫操作

需要通过一个工具帮助我们获取页面的内容， npm install superagent --save
但是 superagent 是 js 语法写的，ts 引入 js 语法无法使用，
ts-->.d.ts(翻译文件) --> js
所以需要安装 npm install @types/superagent -D

当我们获取到 html 的信息以后我们就可以分析页面的信息，这个时候我们就可以使用一个库
npm install cheerio --save
同时也需要翻译文件
npm install @types/cheerio -D

我们用 tsc 打包编译文件的时候（ "bulid": "tsc",）会把文件直接打包在和 ts 相同的文件夹下，我们可以在 tsconfig.json 中设置参数变量 （"outDir": "./build",） 这样打包后的文件就会在 build 文件中
当 ts 文件发生改变时我们不想每次都启用 npm run build 去打包代码,这样我们可以配置（"bulid": "tsc -w",）他会监听文件的变化每次发生变化的时候都会帮我们去重新打包代码

"bulid": "tsc -w",
"start": "nodemon node ./build/crowller.js",

下载 npm i nodemon -D 可以帮助我们监听问文件变化 同时可以运行 "run": "nodemon node ./build/crowller.js",
// "dev": "ts-node ./src/crowller.ts",
"dev:bulid": "tsc -w",
"dev:start": "nodemon node ./build/crowller.js",
"dev":"concurrently npm run dev:build & npm run dev:start",
"dev":"concurrently npm:dev:\*",
concurrently 会帮我们并行的运行一些命令 npm i concurrently -D

TS 的配置文件
tsc --init 生成配置文件 tsconfig.json

如果我们想打包某个文件我们可以在 tsconfig.json 中配置  
"include": ["./demo.ts"], // 只编译这个文件
"exclude": ["./demo.ts"], // 除了这个文件都能编译
直接跑 tsc 是所有文件都给你打包并且会使用 tsconfig.json 里面的配置
我们只用 tsc + 文件名这样是不会使用 tsconfig.json 的配置
ts-node + 文件名 这样是会使用 tsconfig.json 的配置

// "outDir": "./", 出口文件
// "rootDir": "./", 入口文件
"allowJs": true,帮助我们把 es6 的 js 编译成 es6
"checkJs": true,检测 js 语法错误

联合类型是指一个变量可能有两种情况的变量 类似: first: string | number, second: string | number
这个时候我们直接操作变量的时候我们就有可能会导致出错，因为他有两种变量的可能，所以我们需要对这个做类型保护
第一种是使用 animal as Bird 类型断言
第二种是使用 if ("sing" in animal) {
animal.sing();
} else {
animal.bark();
} 用 in 来做
第三种 用 typeof 来做类型保护
function add(first: string | number, second: string | number) {
if (typeof first === "string" || typeof second === "string") {
return `${first}${second}`;
}
return first + second;
}
第四种 用 instanceof 来做类型保护
class NumberObj {
count: number;
}
function addSecond(first: object | NumberObj, second: object | NumberObj) {
if (first instanceof NumberObj && second instanceof NumberObj) {
return first.count + second.count;
}
return 0;
}

枚举类型
enum Status {
OFFLINE, //初始值为 0
ONLINE,
DELETED,
}  
console.log(Status.OFFLINE);//0
console.log(Status.ONLINE);//1
console.log(Status.DELETED);//2

// 泛型 generic 泛指的类型
你写的时候不知道这个类型，你用的时候才知道这个数据类型所以我们可以用一个函数泛型来表示。
function join<T>(first: T, second: T) {
return `${first}${second}`;
}
function join2<T, P>(first: T, second: P) {
return `${first}${second}`;
}
function map<T>(params: T[]) {
// function map<ABC>(params: Array<ABC>)
return params;
}
join<string>("1", "1");
join2<string, number>("1", 1);
map<string>(["132"]);

parcel 类似 webpack 的打包工具不我需要我们去配置
npm install parcel@next
配置"dev": "parcel ./src/index.html",
直接跑 npm run dev

泛型结合 keyof 来判断类型断言
interface Person {
name: string;
age: number;
gender: string;
}

class Teacher {
constructor(private info: Person) {}
getInfo<T extends keyof Person>(key: T):Person[T] {
// if (key === "name" || key === "age" || key === "gender") {
// return this.info[key];
// }
return this.info[key];
}
}

登陆使用 cookie-session 中间件 npm i cookie-session --save https://github.com/expressjs/cookie-session

app.get("/login", (req: Request, res: Response) => {
const isLogin = req.session ? req.session.login : false;
if (isLogin) {
res.send("已经登陆过了");
} else {
if (password === "123") {
if (res.session) {
req.session.login = true;
res.send("登陆成功");
}
} else {
res.send("登陆失败");
}
}
});

JSON Formatter chrom 插件便于观看 json 数据

类的装饰器
装饰器本身是一个函数
类装饰器接受的参数是一个函数
装饰器通过 @ 符号来使用
function testDecrorator(constructor: any) {
constructor.prototype.getName = () => {
console.log("dell");
};
}
function testDecrorator1(flag: boolean) {
if (flag) {
return function (constructor: any) {
constructor.prototype.getName = () => {
console.log("dell1");
};
};
} else {
return function (constructor: any) {};
}
}

@testDecrorator
@testDecrorator1(true)
class Test {}
const test = new Test();
// (test as any).getName();

方法装饰器
// 普通方法,target 对应的是类 prototype
//静态方法，target 对应的是类的构造函数
function getnameDecrorator(
target: any,
key: string,
descriptor: PropertyDescriptor
) {
console.log(target, key);
descriptor.writable = false; // 不能被重写
descriptor.value = function () {
return "456";
};
}
class Test1 {
name = "lee";
constructor(name: string) {
this.name = name;
}
@getnameDecrorator
getName() {
return this.name;
}
}
const test1 = new Test1("dell");
// (test as any).getName();

访问器装饰器
function visitDecrorator(
target: any,
key: string,
descriptor: PropertyDescriptor
) {}
class Test4 {
private \_name: string;
constructor(name: string) {
this.\_name = name;
}
// @getnameDecrorator
get name() {
//访问器
return this.\_name;
}
@visitDecrorator
set name(name: string) {
this.\_name = name;
}
}
const test4 = new Test4("lsj");
test4.name = "231321";
console.log(test.name);

属性访问器
function nameDecrorator(target: any, key: string):any {

<!-- const descriptor: PropertyDescriptor = {
writable: false,
};
return descriptor; -->

target[key]='lee' // 这样子直接修改属性是改变原型上的属性，实例上的属性是不会发生修改的
}
class Test4 {
@nameDecrorator
name = "dell";
}

const test4 = new Test4();
console.log(test.name);

参数装饰器
function paramDecrorator(target: any, key: string, paramIndex: number) {
// paramIndex:number 参数在第几个位置 原型 方法名
console.log(target, key, paramIndex);
}
class Test5 {
getInfo(@paramDecrorator name: string, age: number) {
console.log(name, age);
}
}
const test5 = new Test5();
test5.getInfo("lsh", 18);
console.log(test.name);

