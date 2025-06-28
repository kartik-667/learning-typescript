"use strict";
function sum2() { }
//to declare a callback as parameter
function abcd(name, callback) {
    callback();
    console.log(name);
    //  name
}
abcd("kartik", () => {
    console.log("this is callback fnc");
});
let details = [];
function addperson(name, age, gender) {
    details.push({
        name, age, gender
    });
    prindetails(details);
    // console.log(details);
}
function prindetails(details) {
    details.forEach((ele) => {
        console.log(ele);
        console.log("\n");
    });
}
addperson("kartik", 21, "M");
addperson("rishabh", 17, "M");
//rest/spread operator - ...args 2 meaning, hai iske bhai 
// using  as rest para
function findmulti(...args) {
    let sm = 0;
    args.forEach((ele) => {
        sm += ele;
    });
    return sm;
}
// console.log("the sum is",findmulti(1,2,3,4,2,2,3,32,423,42,34,23,4));
//using as spread
let arr1 = [1, 2, 3, 4];
let arr2 = [...arr1, 5, 6]; //this adds 5 6 as additional value
console.log(arr2);
