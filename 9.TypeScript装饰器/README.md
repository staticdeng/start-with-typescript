# TypeScript装饰器

随着TypeScript和ES6里引入了类，在一些场景下我们需要额外的特性来支持标注或修改类及其成员。 装饰器（Decorators）为我们在类的声明及成员上通过元编程语法添加标注提供了一种方式。 Javascript里的装饰器目前处在 建议征集的第二阶段，但在TypeScript里已做为一项实验性特性予以支持。

若要启用实验性的装饰器特性，你必须在命令行或tsconfig.json里启用experimentalDecorators编译器选项：

* 命令行:

```ts
tsc --target ES5 --experimentalDecorators
```

* tsconfig.json:

```ts
{
    "compilerOptions": {
        "target": "ES5",
        "experimentalDecorators": true
    }
}
```

## 装饰器

装饰器是一种特殊类型的声明，它能够被附加到类声明，方法， 访问符，属性或参数上。

语法：

* 首先定义装饰器函数：

定义装饰器函数，里面写一些扩展功能，这个函数会在该装饰器被使用的时候调用。

* 使用装饰器：

在需要被装饰的类或方法前通过`@expression`这种形式，也就是`@装饰器函数`来调用装饰器。

下面是使用类装饰器(@Age)的例子，应用在Cat和Dog类上：

定义@Age装饰器函数：

```ts
function Age(v: number) {
    // 这个返回的函数才是真正的装饰器要执行的函数，作用是传参
    return function<T extends {new(...args: any[]): {}}>(constructor: T): T {
        class PersonAge extends constructor {
            age: number = v;
        }
        return PersonAge;
    }
}
```
在Cat和Dog类上都可以使用装饰器，本来Cat和Dog都没有age属性的，加上装饰器传入参数调用后，就有了age了。

```ts
@Age(1)
class Cat {
    name = '小猫咪'
}
@Age(2)
class Dog {
    name = '小奶狗'
}

let c1 = new Cat();
console.log(c1); // Animal {name: "小猫咪", age: 1}

let d1 = new Dog();
console.log(d1); // Animal {name: "小奶狗", age: 2}
```
