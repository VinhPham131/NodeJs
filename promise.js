function sumNumbers(a, b) {
  return new Promise((resolve, reject) => {
    if(typeof a !== 'number' || typeof b !== 'number') {
      reject('a and b must be numbers');
    }else {
        const sum = a + b;
        resolve(sum);
    }
  });
}

const a = 5;
const b = 10;
sumNumbers(a, b)
    .then(sum => {
        console.log("Sum of", a, "and", b, "is:", sum);
    })
    .catch(error => {
        console.log("Error: ", error);
    });