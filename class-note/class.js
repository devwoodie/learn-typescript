// ES2015(ES6)
function Person(name, age){
    this.name = name;
    this.age = age;
}
let capt = new Person('captain', 100);
console.log(capt);

class Person{
    //클래스 로직
    constructor(name, age) {
        console.log('생성 완');
        this.name = name;
        this.age = age;
    };
};
let seho = new Person('seho', 30);
console.log(seho);