var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Age(v) {
    // 这个返回的函数才是真正的装饰器要执行的函数，作用是传参
    return function (constructor) {
        var Animal = /** @class */ (function (_super) {
            __extends(Animal, _super);
            function Animal() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.age = v;
                return _this;
            }
            return Animal;
        }(constructor));
        return Animal;
    };
}
var Cat = /** @class */ (function () {
    function Cat() {
        this.name = '小猫咪';
    }
    Cat = __decorate([
        Age(1)
    ], Cat);
    return Cat;
}());
var Dog = /** @class */ (function () {
    function Dog() {
        this.name = '小奶狗';
    }
    Dog = __decorate([
        Age(2)
    ], Dog);
    return Dog;
}());
var c1 = new Cat();
console.log(c1); // Animal {name: "小猫咪", age: 1}
var d1 = new Dog();
console.log(d1); // Animal {name: "小奶狗", age: 2}
