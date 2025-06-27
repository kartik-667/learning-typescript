

class Device{
    constructor(public name:string,public price:number){}
}

class Tree{
    public val:number;
    public left:Tree | null; // this or is called union
    public right:Tree | null;

    constructor(val:number){
        this.val=val;
        this.left=null;
        this.right=null;
    }
     sum(a:number, b:number):number{
        return a+b

    }


};

// class Test extends Tree{
//     constructor(public arr:number[]){}

// }

let d1:Device=new Device("milton",1200)
console.log(d1);
