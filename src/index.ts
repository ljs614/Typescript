// //interface는 ts에서만 적용.
// // interface Human {
// //     name: string,
// //     age: number,
// //     gender: string
// // }

// class Human {
//     public name: string;
//     public age: number;
//     public gender: string;
//     constructor(name: string, age: number, gender?: string){
//         this.name = name;
//         this.age = age;
//         this.gender = gender;
//     };
// }

// const lynn = new Human("Lynn", 18, "female");

// const sayHi = (person: Human): string => {
//     return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}!`;
// };
// // arg? -> 선택적 변수. 없으면 undefined

// console.log(sayHi(person));
import * as CryptoJS from "crypto-js";

class Block {
    public index: number;
    public hash: string;
    public previousHash: string;
    public data: string;
    public timestamp: number;

    static calculateBlockHash = (
        index: number, 
        previousHash: string, 
        timestamp: number, 
        data: string
    ): string => CryptoJS.SHA256(index + previousHash + timestamp + data).toString();

    constructor(
        index: number,
        hash: string,
        previousHash: string,
        data: string,
        timestamp: number
    ){
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}



const genesisBlock:Block = new Block(0, "2020202020", "", "Hello", 12345);

let blockchain: Block[] = [genesisBlock];

const getBlockchain = (): Block[] => blockchain;

const getLatestBlock = (): Block => blockchain[blockchain.length - 1];

const getNewTimStamp = (): number => Math.round(new Date().getTime() / 1000);

const createNewBlock = (data: string) : Block => {
    const previousBlock: Block = getLatestBlock();
    const newIndex: number = previousBlock.index + 1;
    const newTimestamp: number = getNewTimStamp();
    const newHash: string = Block.calculateBlockHash(newIndex, previousBlock.hash, newTimestamp, data);
    const newBlock: Block = new Block(newIndex, newHash, previousBlock.hash, data, newTimestamp);
    return newBlock;

}

console.log(createNewBlock("hello"), createNewBlock("byebye"));
export {};



