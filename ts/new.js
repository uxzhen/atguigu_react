// ES5构造函数
let Parent = function (name, age) {
    this.name = name;
    this.age = age;
};
Parent.prototype.sayName = function () {
    console.log(this.name);
};
const child = new Parent('一晌贪欢', 25);
child.sayName() //'一晌贪欢'


//ES6 class类
class Parent {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayName() {
        console.log(this.name);
    }
};
const child = new Parent('echo', 25);
child.sayName() //echo