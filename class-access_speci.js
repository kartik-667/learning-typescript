"use strict";
class User {
    constructor(name, password, email) {
        this.name = name;
        this.password = password;
        this.email = email;
        this.count = 0;
    }
    getpassword() {
        return this.password;
    }
    setpassword(pass) {
        this.password = pass;
    }
}
class childUser extends User {
    constructor(name, pass, email) {
        super(name, pass, email);
        this.name = name;
        this.count += 1;
    }
    getcount() {
        return this.count;
    }
}
let user1 = new childUser("Kartik", "kv@123", "gmail.com");
let res = user1.getpassword();
let cnt = user1.getcount();
console.log(res, "count is", cnt);
//using getter and setter-
class student {
    static version=1.0 //can be used without any object of it

    constructor(_name, age, altno) {
        this._name = _name;
        this.age = age;
        this.altno = altno;
    } // _var se get set use kr skte hai
    get name() {
        return this._name;
    }
    set name(newval) {
        this._name = newval;
    }
}
let st1 = new student("kartik", 21);
st1.name = "rishabh";
console.log(st1);


