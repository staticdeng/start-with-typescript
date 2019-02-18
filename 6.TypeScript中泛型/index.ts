/**
 * typescript泛型
 * 泛型定义：泛型就是解决类、接口、方法的复用性，以及对不特定数据类型的支持(类型校验)。ts中用T表示泛型
 * 软件工程中，我们不仅要创建一致的定义良好的API，同时也要考虑可重用性。 组件不仅能够支持当前的数据类型，同时也能支持未来的数据类型，这在创建大型系统时为你提供了十分灵活的功能。
   在像C#和Java这样的语言中，可以使用泛型来创建可重用的组件，一个组件可以支持多种类型的数据。 这样用户就可以以自己的数据类型来使用组件。
 * 内容概述：函数的泛型、类的泛型、泛型接口
 */

// 泛型公式: <T>表示泛型，调用的时候指定T的数据类型

/**
 * 1. 函数的泛型
 * 传入的参数类型和返回的参数类型可以指定
*/

// 我们来看看函数用ts数据类型，想要同时返回string类型和number类型
function getData1(value:string):string{
    return value;
}
function getData2(value:number):number{
    return value;
}
// 这样要写不同的函数，不能按照需求返回不同类型数据，造成代码冗余 => 由此引入泛型

// <T>表示泛型，调用的时候指定T的数据类型
function dataT<T>(value:T):T{
    // 传入参数为T 返回值为T
    return value
}
dataT<number>(1) // 调用指定泛型为number类型，则传入参数也必须为number类型
dataT<string>('string')

function dataAny<T>(value:T):any{
    return '传入参数为T，任意类型返回值';
}
dataAny<number>(123); // 参数必须是number
dataAny<string>('这是一个泛型');


/**
 * 2. 类的泛型
 * 也是用<T>来实现类的泛型，new的时候指定T的数据类型
*/

// 有个最小堆算法，需要同时支持返回数字和字符串两种类型

// 使用泛型之前：只能在类的类部指定数据类型，实现需求还要写一套string类型的类
class MinClass{
    public list:number[]=[];
    add(num:number){
        this.list.push(num)
    }
    min():number{
        var minNum=this.list[0];
        for(var i=0;i<this.list.length;i++){
            if(minNum>this.list[i]){
                minNum=this.list[i];
            }
        }
        return minNum;
    }
}

var m=new MinClass();
m.add(1);
m.add(2);
alert(m.min());

// 使用泛型之后：只用一套类来实现
class MinClassT<T>{
    public list:T[]=[];
    add(value:T):void{
        this.list.push(value);
    }
    min():T{        
        var minNum=this.list[0];
        for(var i=0;i<this.list.length;i++){
            if(minNum>this.list[i]){
                minNum=this.list[i];
            }
        }
        return minNum;
    }
}
var m1=new MinClassT<number>();   /*实例化类 并且指定了类的T代表的类型是number*/
m.add(1);
m.add(2);
alert(m1.min())

var m2=new MinClassT<string>();   /*实例化类 并且指定了类的T代表的类型是string*/
m2.add('c');
m2.add('a');
alert(m2.min())

/**
 * 3. 泛型接口
 */

// 有一个函数类型接口
interface ConfigFn{
    (value:string):string;
}
var setData:ConfigFn = function(value:string):string{
    return value
}
setData('name');
// setData(20); // 想要传入number类型的参数又要写一个函数类型接口 => 用泛型接口


// 泛型接口定义方式一
interface ConfigFnOne{
    <T>(value:T):T;
}
var setDataOne:ConfigFnOne = function<T>(value:T):T{
    return value
}
// 既可以传入string也可以传入number类型参数
setDataOne<string>('name');
setDataOne<number>(20);


// 泛型接口定义方式二
interface ConfigFnTwo<T>{
    (value:T):T;
}
function setDataTwo<T>(value:T):T{
    return value
}
var setDataTwoFn:ConfigFnTwo<string> = setDataTwo
setDataTwoFn('name');