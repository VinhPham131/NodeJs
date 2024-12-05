function greet(name, callback) {
    console.log('Hi ' + name);
    callback();
}
function sayGoodBye() {
    console.log('Goodbye!');
}
greet('Vinh', sayGoodBye);

function A(callback) {
    const kq = 5+6;
    callback(kq);
}
function B(kq) {
    console.log("Ket qua la: " + kq);
}
A(B);