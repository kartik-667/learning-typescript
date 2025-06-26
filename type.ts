var a=12
console.log(a);
 

let arr1:Number[]=[]
arr1.push(1,2,3,4,5);

let tuple1: [string, string]=["kartik","verma"]

enum status_codes{
    success=200,
    notfound=404,
    internalerror=500,
    
}
// status_codes.success
let mycode:Number=status_codes.success
console.log("mycode val is ",mycode);

function greet(name:string):void {
    console.log("hey wassup ", name);
    

}
greet("kartik")


