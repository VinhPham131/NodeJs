class Shape {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    calArea () {
        console.log(`Dien tich voi chieu rong ${this.width} va chieu dai ${this.height} la: ${this.width * this.height}`);
    }
    calPeri() {
        console.log(`Chu vi voi chieu rong ${this.width} va chieu dai ${this.height} la: ${(this.width + this.height) * 2}`);
    }
}

let myShape1 = new Shape(10, 20);
let myShape2 = new Shape(30, 40);

myShape1.calArea();
myShape1.calPeri();
myShape2.calArea();
myShape2.calPeri();

myShape2.width = 50;
console.log(myShape2.width);