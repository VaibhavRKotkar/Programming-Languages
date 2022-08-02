class Circle
{
    Radius:number;
    PI:number;

    constructor(a:number, PI:number = 3.14)
    {
        this.Radius = a;
        this.PI = PI;
    }

    Area()
    {
        var Ans = 0;
        var Ans = (this.Radius) * (this.Radius) * (this.PI);
        return Ans;
    }
}

class CircleX extends Circle
{
    Circumference()
    {
        var Ans = 0;
        var Ans = (2)*(this.PI)*(this.Radius);
        return Ans;

    }

}

var obj1 = new Circle(10.4);
var obj2 = new Circle(12.2,2.65);

var obj3 = new Circle(12);
var obj4 = new Circle(8,2.4);

var Ret:number = 0;

Ret = obj1.Area();
console.log("Area of circle is: "+Ret);

Ret = obj2.Area();
console.log("Area of circle is: "+Ret);

Ret = obj3.Area();
console.log("Circumference of circle is: "+Ret);

Ret = obj4.Area();
console.log("Circumference of circle is: "+Ret);