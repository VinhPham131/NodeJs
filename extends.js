class House {
    constructor(address) {
        this.address = address;
    }
}

class Mainson extends House {
    constructor(address, room) {
        super(address);
        this.room = room;
    }

    showAddress() {
        console.log(`Dia chi cua Mainson la: ${this.address}`);
    }
    showRoom() {
        console.log(`So phong cua Mainson la: ${this.room}`);
    }
}

let myMainson = new Mainson("Dong Da", 5);
myMainson.showAddress();
myMainson.showRoom();