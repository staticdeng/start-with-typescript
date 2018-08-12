// Typescript数据类型

//布尔类型（boolean）
{
    var flag:boolean = true

    flag = false // 正确

    // flag=123;  // 错误
}

// 数字类型（number）
{
    var num:number = 123;

    num = 456; // 正确 

    // num='str';    //错误
}

// 字符串类型(string)
{
    var str:string = 'this is ts';

    str = 'haha';  //正确

    // str=true;  //错误
}

// 数组类型（array）  ts中定义数组有两种方式
{
    // 第一种
    var arr:number[] = [1, 2, 3]

    // 第二种
    var arr2:Array<number> = [1, 2, 3]
}

// 元组类型（tuple）元素的类型不必相同，写法和数组一样
{
    let arr:[number,string] = [123,'this is ts']
}

// 枚举类型（enum）
/**
 * 用法：
 * enum 枚举名{ 
    标识符[=整型常数], 
    标识符[=整型常数], 
    ... 
    标识符[=整型常数], 
}
 */
{
    enum Flag {success = 1,error = 2};

    let s:Flag = Flag.success // 使用枚举类型中的值
    console.log('正确状态',s)
    let f:Flag = Flag.error
    console.log('错误状态',f)
}

// 任意类型（any）
{
    var number:any = 123
    number = 'str'
    number = true
    console.log(num)
}

// null 和 undefined
{
    // 在js中，变量已声明但未初始化为undefined
    var undefinedTest:number
    // console.log(undefinedTest) // 错误写法，typescript报错，赋值了才正确

    // 在typescript中，已声明未初始化的值要直接访问的话类型需要定义为undefined
    var undefinedTest2:undefined
    console.log(undefinedTest2) // 正确写法，输出undefined 
}
{
    // 可能是number类型 可能是undefined
    var undefinedTest3:number | undefined;
    console.log(num);
}
{
    // null是一个空指针对象，undefined是未初始化的变量。因此，可以把undefined看作是空的变量，而null看作是空的对象
    var nullTest:null
    nullTest = null
    // nullTest = {} // 错误，定义了类型是null，值必须为null
}


// void类型 :typescript中的void表示没有任何类型，一般用于定义方法的时候方法没有返回值。

    // 表示方法没有返回任何类型
    function run(): void {
        console.log('run')
    }

    run()


// never类型: 表示的是那些永不存在的值的类型，例如异常

    var a:never

    // a = 123 //错误写法
    a = (() => {
        throw new Error('错误');
    })()
