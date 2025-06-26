
interface user{
    name:string,
    email:string,
    age:number,
    gender?:string, // ? means optional field hagi 
}

interface Animal{
    name:string,
    type:string,
}
//these 2 will merge bcoz of same name, NOT OVERRIDE
interface Animal{
    value:number
}

interface dog extends Animal{ //we can use inhertiance also
    dogbreed:string

}

let doggy:Animal;



function fnc1(obj :user):void{
    obj.age=20
    obj.name="sheriyans"
    obj.email="test@gmail.com"

    console.log(obj);
    
}

let obj1: user = {
    name: "kartik",
    email: "psych",
    age: 20
};

fnc1(obj1)