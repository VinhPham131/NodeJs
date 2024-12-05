var a = 12;
var b = 20;

if (a < b) {
    let tmp = a;
    a = b;
    b = tmp;
}

console.log("a: " + a);
console.log("b: " + b);
console.log("tmp: " + tmp);