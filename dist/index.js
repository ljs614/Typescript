"use strict";
//interface는 ts에서만 적용.
// interface Human {
//     name: string,
//     age: number,
//     gender: string
// }
Object.defineProperty(exports, "__esModule", { value: true });
class Human {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    ;
}
const lynn = new Human("Lynn", 18, "female");
const sayHi = (person) => {
    return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}!`;
};
// arg? -> 선택적 변수. 없으면 undefined
console.log(sayHi(person));
//# sourceMappingURL=index.js.map