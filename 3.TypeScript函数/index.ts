// Typescript函数

// 1.函数的定义

// 定义函数有函数声明和函数表达式

// 法一：函数声明法
function run(x:number, y: number): number {
    return x + y;
}
// 法二：函数表达式法
var run2 = function(x: number, y: number): string {
    return 'run2'
}
console.log(run(1, 2))
console.log(run2(1, 2))

// 函数表达式法另外一种写法：当给变量run3指定类型的时候，应该是函数的参数和返回值的约束类型
var run3: (x: number, y: number) => string = function(x: number, y: number): string{
    return 'run3';
}
// 根据类型推论，简写为：
var run4: (x: number, y: number) => string = function(x, y){
    return 'run4';
}
console.log(run3(1, 2))
console.log(run4(1, 2))

// 函数没有返回值用void类型指定返回值类型
function voidFnc():void{
    console.log('没有返回值的方法用void')
}
voidFnc();

// 2.可选参数

// es5里面方法的实参和行参可以不一样，但是ts中必须一样，如果不一样就需要在可选参数后加?

function electParam(name:string, age?:number):string {
    // 这里的age可传可不传，age就是可选参数
    if(age){
        return `${name} --- ${age}`
    }else{
        return `${name} --- 年龄保密`
    }
}
console.log('可选参数', electParam('dz'))

// 注意: 可选参数必须配置到参数的最后面

// 错误写法：可选参数不在最后面
// function electParam2(name?: string, age: number): string {
//     ...
// }

// 3. 默认参数

// es5里面没法设置默认参数，es6和ts中都可以设置默认参数

function defaultParam(name:string, age:number = 20):String {
    return `${name} --- ${age}`
}

console.log('默认参数', defaultParam('dz'))

// 4. 剩余参数

// 当有很多参数时候或参数个数不确定，可以用三点运算符

// sum参数传过来的是一个数组
function sum(...result: number[]): number {
    var sum = 0;

    for (var i = 0; i < result.length; i++) {

        sum += result[i];
    }

    return sum;
}
console.log('剩余参数', sum(1, 2, 3, 4, 5, 6));

// a=1 b=2 其他参数为剩余参数
function sum2(a: number, b: number, ...result: number[]): number {
    var sum = a * b;

    for (var i = 0; i < result.length; i++) {

        sum += result[i];
    }

    return sum;
}
console.log('剩余参数2', sum2(1, 2, 3, 4, 5, 6));

// 5. ts函数重载

// 同名函数，传入不同的参数，实现不同的功能

// es5中同名函数，后面会覆盖前面的函数，ts中则不会 => 函数重载

function overloadingFn(x: number, y: number): number;
function overloadingFn(x: string, y: string): string;
// 上面定义函数的格式，下面定义函数的具体实现
function overloadingFn(x: any, y: any): any {
    return x + y;
}

console.log(overloadingFn(1, 2));
console.log(overloadingFn('a', 'b'));

// 6. 箭头函数

setTimeout(() => {
    console.log('箭头函数')
}, 1000);