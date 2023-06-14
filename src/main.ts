// const f = () => console.log('Hello world');
// f();

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

let at: string[] = [];
at[0] = 'kuku';
at[1] = '2';
// console.log(at);
function f(a: string | number): number {
    return typeof a == 'number' ? a * 2 : +(a + 2);
}
