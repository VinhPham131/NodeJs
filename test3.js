var introduction = ["Hello", "I am", "a", "developer"];
var [greeting,...intro] = introduction;

console.log(greeting); // Hello
console.log(intro); // ["I am", "a", "developer"]