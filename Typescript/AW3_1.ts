// 1. Arithmatic operations on numbers.

class Arithematic
{
    No1:number;
    No2:number;

    constructor(a:number, b:number)
    {
        this.No1 = a;
        this.No2 = b;

    }

    Addition()
    {
        var Ans = 0;   
        var Ans = this.No1 + this.No2;
        return Ans;
    }

    Substraction()
    {
        var Ans = 0;        
        var Ans = this.No1 - this.No2;
        return Ans;
    }

    Multiplication()
    {
        var Ans = 0;   
        var Ans = this.No1 * this.No2;
        return Ans;
    }

   Division()
    {
        var Ans = 0;        
        var Ans = this.No1 / this.No2;
        return Ans;
    }
}

    var obj1 = new Arithematic(10,11);  
    var obj2 = new Arithematic(240,237); 

   var Ret:number = 0;

   Ret = obj1.Addition();
   console.log("Addition is: "+Ret)

   Ret = obj1.Substraction();
   console.log("Substraction is: "+Ret)

   Ret = obj1.Multiplication();
   console.log("Multiplication is: "+Ret)

   Ret = obj1.Division();
   console.log("Division is: "+Ret)
   
   Ret = obj2.Addition();
   console.log("Addition is: "+Ret)

   Ret = obj2.Substraction();
   console.log("Substraction is: "+Ret)

   Ret = obj2.Multiplication();
   console.log("Multiplication is: "+Ret)

   Ret = obj2.Division();
   console.log("Division is: "+Ret)



