const sayHi = (name:string, age:number, gender:string): string => {
    return `Hello ${name}, you are ${age}, you are a ${gender}!`;
};
// arg? -> 선택적 변수. 없으면 undefined

console.log(sayHi("jeongseop", 30, "male"));

export {};



