class House {
    constructor() {
        this.address = "Dong Da";
        this.floor = 2;
        this.garage = false;
    }
}

let myHouse1 = new House();
let add = myHouse1.address;
let fl = myHouse1.floor;
let gar = myHouse1.garage;

add = "Cau Giay";
console.log(add);

let myHouse2 = new House("Dien Bien Phu", 3, true);
console.log(myHouse2);

