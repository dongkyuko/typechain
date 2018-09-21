import * as CryptoJS from "crypto-js";

class Block  {
    public index: number;
    public hash: string;
    public previousHash: string;
    public data: string;
    public timestamp: number;

    static calculateBlockHash = (
        index:number, 
        previousHash:string, 
        timestamp:number,
        data: string 
        ): string => 
        CryptoJS.SHA256(index + previousHash + timestamp + data).toString;

    constructor(index: number, hash: string, previousHash: string, data: string, timestamp: number) 
    {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}

const genesisBlock:Block = new Block(0, "202020", "", "Hello", 123456)

let blockchain:Block[] = [genesisBlock];

const getBlockchain = () : Block[] => blockchain;

const getLatestBlock = () : Block => getBlockchain[blockchain.length -1];

const getNewTimeStamp = () : number => Math.round(new Date().getTime() / 1000);

//console.log(blockchain);

export {};

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