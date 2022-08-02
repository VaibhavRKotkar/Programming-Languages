function Area(radius:number):any
{
    var Area:number= 0;
    var PI:number = 3.14;

    Area = PI * radius *radius;

    return Area;
}

function main():void
{
    var Value:number = 5;
    var Ret:number = 0;
    Ret = Area(Value);
    console.log("Area of circle is: "+Ret);
}
main();