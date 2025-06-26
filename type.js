"use strict";
var a = 12;
console.log(a);
let arr1 = [];
arr1.push(1, 2, 3, 4, 5);
let tuple1 = ["kartik", "verma"];
var status_codes;
(function (status_codes) {
    status_codes[status_codes["success"] = 200] = "success";
    status_codes[status_codes["notfound"] = 404] = "notfound";
    status_codes[status_codes["internalerror"] = 500] = "internalerror";
})(status_codes || (status_codes = {}));
// status_codes.success
let mycode = status_codes.success;
console.log("mycode val is ", mycode);
function greet(name) {
    console.log("hey wassup ", name);
}
greet("kartik");
let fruits;
function addfruit(fruitname) {
    fruits.push(fruitname);
    console.log('updated arr is', fruits);
}
