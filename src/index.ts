//interface는 ts에서만 적용.
// interface Human {
//     name: string,
//     age: number,
//     gender: string
// }

class Human {
    public name: string;
    public age: number;
    public gender: string;
    constructor(name: string, age: number, gender?: string){
        this.name = name;
        this.age = age;
        this.gender = gender;
    };
}

const lynn = new Human("Lynn", 18, "female");

const sayHi = (person: Human): string => {
    return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}!`;
};
// arg? -> 선택적 변수. 없으면 undefined

console.log(sayHi(person));

export {};



