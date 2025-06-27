"use strict";
class Device {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
class Tree {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
    sum(a, b) {
        return a + b;
    }
}
;
// class Test extends Tree{
//     constructor(public arr:number[]){}
// }
let d1 = new Device("milton", 1200);
console.log(d1);
