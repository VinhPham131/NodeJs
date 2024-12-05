title = function(){
    console.log("Let's Rank Students");
}

var Calculate = class {
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }
    calAverage() {
        console.log(`Average: ${(this.num1 + this.num2) / 2}`)
    }
    calSum() {
        console.log(`Sum: ${this.num1 + this.num2}`); 
    }
    calMinus(){
        console.log(`Minus: ${this.num1 - this.num2}`); 
    }
    calMulti(){
        console.log(`Multi: ${this.num1 * this.num2}`); 
    }
};


module.exports = {
    Calculate,
     title
};