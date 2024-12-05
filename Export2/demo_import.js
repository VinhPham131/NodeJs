var {Calculate, title} = require("./demo.js");
title();

// Class con cua Calculate
class XepLoai extends Calculate {
    constructor(num1, num2, num3) {
        super(num1, num2);
        this.num3 = num3;
    }
    calSum(){
        console.log(super.calSum());
    }
    calMinus(){
        console.log(super.calMinus());
    }
    calMulti(){
        console.log(super.calMulti());
    }
    calAverage(){
        console.log(super.calAverage());
    }
    xepLoai(){
        this.num3 = (this.num1 + this.num2) / 2;
        if(this.num3 >= 8){
            console.log("Xep Loai: Xuat sac");
        }else if(this.num3 >= 6.5){
            console.log("Xep Loai: Gioi");
        }else if(this.num3 >= 5){
            console.log("Xep Loai: Kha");
        }else if(this.num3 >= 3.5){
            console.log("Xep Loai: Trung binh");
        }else{
            console.log("Xep Loai: Yeu");
        }
    }
}
var calculated = new XepLoai(10, 2);

calculated.calSum();
calculated.calMinus();
calculated.calMulti();
calculated.calAverage();
calculated.xepLoai();