//if we want to make a fnc that can be of any type
//use this- this is like template of c++


function abcde<T>(args:T){
    console.log(args);
     

}

//make ur own print
function print<T>(args:T){
    console.log(args);
    
    
}

abcde<string>("abcd") //we can avoid wring T here
abcde(123)

print("halaw")

class test<T>{
    constructor(public key:T){}

    getdata():void{
        console.log(this.key);
        
    }


}

let t1=new test(123234234)
t1.getdata()