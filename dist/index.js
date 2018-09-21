"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CryptoJS = require("crypto-js");
class Block {
    constructor(index, hash, previousHash, data, timestamp) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}
Block.calculateBlockHash = (index, previousHash, timestamp, data) => CryptoJS.SHA256(index + previousHash + timestamp + data).toString;
const genesisBlock = new Block(0, "202020", "", "Hello", 123456);
let blockchain = [genesisBlock];
const getBlockchain = () => blockchain;
const getLatestBlock = () => getBlockchain[blockchain.length - 1];
const getNewTimeStamp = () => Math.round(new Date().getTime() / 1000);
// //class를 활용한 타입 정의
// class Human {
//     public name: string;
//     public age: number;
//     public gender: string;
//     constructor(name:string, age:number, gender:string){
//         this.name = name;
//         this.age = age;
//         this.gender = gender;
//     }
// }
// const dongkyu = new Human("Dongkyu", 29, "male");
// // Interface를 활용한 타입 정의
// // interface Human {
// //     name:string;
// //     age: number;
// //     gender: string;
// // }
// // const person = {
// //     name: "Jaeeun",
// //     age: 27,
// //     gender: "female"
// // }
// // const sayHi = (name:string, age:number, gender:string): string => {
// //     //console.log(`Hello ${name}, you are ${age}, you are a ${gender} `);
// //     return `Hello ${name}, you are ${age}, you are a ${gender} `;
// // }
// const sayHi = (person:Human): string => {
//     return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}!`;
// };
// console.log(sayHi(dongkyu));
//# sourceMappingURL=index.js.map