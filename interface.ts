interface user{
    name:string,
    email:string,
    age:number
}

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