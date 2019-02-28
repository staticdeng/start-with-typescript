function Age(v: number) {
    // 这个返回的函数才是真正的装饰器要执行的函数，作用是传参
    return function<T extends {new(...args: any[]): {}}>(constructor: T): T {
        class Animal extends constructor {
            age: number = v;
        }
        return Animal;
    }
}

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