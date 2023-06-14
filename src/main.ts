// const f = () => console.log('Hello world');
// f();

import Rectangle from "./Rectangle";
import Shape from "./Shape";

// for (let i = 0; i < 3; i++) {
//     setTimeout(() => console.log(`kuku ${i}`));
// }

let n = 10;
n = 20;
let num: number | 'abc' = 12;
num = 100;
num = 'abc';
const ar: string[] = [];
ar.push('abc');
const ar1: [string?, number?] = [undefined, 10];
ar1[0] = 'lmn';
const ar2: Array<string> = [];
const map1: Map<string, number> = new Map([['abs', 40]]);
console.log(map1.get('abs'));
console.log(map1.entries());
Array.from(map1.entries()).forEach((e) => console.log(`${e[0]} -> ${e[1]}}`));

// let comparator: <T> (num1: T, num2: T) => number
// comparator = function  (num1: number, num2: number): number {
//     return str - num;
// }

// let comparator: <T extends number>(num1: T, num2: T) => number;
// comparator = function <T extends number>(num1: T, num2: T): number {
//     return num1 - num2;
// }

// type Comparator<T = number> = (p1: T, p2: T) => number;
// let comp: Comparator<string> = function (num1: string, num2: string): number {
//     return num1 > num2 ? 1: -1;
// };

type Comparator<T> = (p1: T, p2: T) => number;
let comp: Comparator<number> = function (num1: number, num2: number): number {
    return num1 > num2 ? 1 : -1;
};

type Person = { id: number; date: Date | string; name: string; gender?: 'male' | 'female' };
displayPerson({ id: 123, date: '2000-10-10', name: 'Vasya', gender: 'female'});
function displayPerson(prs: Person): void {
    prs.gender && console.log(prs.gender.substring(0, 3));
    // console.log(prs.gender.substring(0, 3))
}
// Функция принимает какуюто стрроку и какойто ключ. функция будет делать некое кодирование(очень простое)
// каждый код аске будет круговым сдвигом на некий сдвиг на размер ключа
// 

function cipher(text: string, key:number) : string {
    let result = '';
    for(let i = 0; i < text.length; i++) {
        let ascii = text.charCodeAt(i);
        ascii += key;
        if(ascii > 126) {
            ascii = ascii - 95;
        }
        result += String.fromCharCode(ascii);
    }
    return result;
}

let a = cipher('yz', 6);
console.log(a);

//decipher(" !", 6) => "yz"  
function decipher(text: string, key:number) : string {
    let result = '';
    for(let i = 0; i < text.length; i++) {
        let ascii = text.charCodeAt(i);
        ascii -= key;
        if(ascii < 126) {
            ascii = ascii + 95;
        }
        result += String.fromCharCode(ascii);
    }
    return result;
}
let b = decipher(' !', 6);
console.log(b);

const shape: Rectangle = new Rectangle(3, 4);
let width = shape.width;


