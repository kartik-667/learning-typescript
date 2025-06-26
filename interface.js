"use strict";
let doggy;
function fnc1(obj) {
    obj.age = 20;
    obj.name = "sheriyans";
    obj.email = "test@gmail.com";
    console.log(obj);
}
let obj1 = {
    name: "kartik",
    email: "psych",
    age: 20
};
fnc1(obj1);
