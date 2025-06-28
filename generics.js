"use strict";
//if we want to make a fnc that can be of any type
//use this- this is like template of c++
function abcde(args) {
    console.log(args);
}
//make ur own print
function print(args) {
    console.log(args);
}
abcde("abcd"); //we can avoid wring T here
abcde(123);
print("halaw");
class test {
    constructor(key) {
        this.key = key;
    }
    getdata() {
        console.log(this.key);
    }
}
let t1 = new test(123234234);
t1.getdata();
