class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get radius() {
        return this._radius;
    }

    set radius(newRadius) {
        if(newRadius > 0) {
            this._radius = newRadius;
        }else{
            console.log("Ban kinh phai lon hon 0");
        }
    }

    calculateArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }
}

let circle = new Circle(5);
console.log("Ban kinh hien tai la: " + circle.radius);

circle._radius = 10;
console.log("Ban kinh moi la: " + circle._radius);

circle.radius = -5;