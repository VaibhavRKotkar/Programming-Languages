class Circle
{
    Radius:number;
    PI:number;

    constructor(a:number, b:number = 3.14)
    {
        this.Radius = a;
        this.PI = b;
    }

    Area()
    {
        var Ans = 0;
        var Ans = (this.Radius) * (this.Radius) * (this.PI);
        return Ans;
    }
}

var obj3 = new Circle(10.8);
var obj4 = new Circle(12.3,2.65);

var Ret:number = 0;

Ret = obj3.Area();
console.log("Area of circle is: "+Ret);

Ret = obj4.Area();
console.log("Area of circle is: "+Ret);