var n = 10;
n = 20;
var num = 12;
num = 100;
num = 'abc';
var ar = [];
ar.push('abc');
var ar1 = [undefined, 10];
ar1[0] = 'lmn';
var ar2 = [];
var map1 = new Map([['abs', 40]]);
console.log(map1.get('abs'));
console.log(map1.entries());
Array.from(map1.entries()).forEach(function (e) { return console.log("".concat(e[0], " -> ").concat(e[1], "}")); });
var at = [];
at[0] = 'kuku';
at[1] = '2';
function f(a) {
    return typeof a == 'number' ? a * 2 : +(a + 2);
}
//# sourceMappingURL=main.js.map