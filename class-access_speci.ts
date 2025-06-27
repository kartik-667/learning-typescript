class User{
    protected count:number=0;
    constructor(public name:string, private password:string,public readonly email:string){}
    getpassword():string{
        return this.password
        
    }

    setpassword(pass:string):void{
        this.password=pass
    }
}


class childUser extends User{
    constructor(public name:string,pass:string,email:string){
        super(name,pass,email)
        this.count+=1
    }

    getcount():number{
        return this.count
    }

}


let user1:childUser=new childUser("Kartik","kv@123","gmail.com")
let res:string=user1.getpassword()
let cnt=user1.getcount()
console.log(res,"count is" ,cnt);

//using getter and setter-

class student{
    constructor(public _name:string,public age:number,public altno?:number){} // _var se get set use kr skte hai

    get name():string{ //have return type
        return this._name
    }

    set name(newval:string){ //setter doesnt have a return type
        this._name=newval
    }
}

let st1=new student("kartik",21)
st1.name="rishabh"
console.log(st1);



