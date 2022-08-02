function DisplayFactor(No:number):void
{
    var iCnt:number= 0;

    for(iCnt=1; iCnt<=(No/2);iCnt++)
    {
        if((No % iCnt)==0)
        {
            console.log("Factors are:"+iCnt);
        }
    }
}

function main():void
{
    var Value:number = 20;
    var Ret:number = 0;
    DisplayFactor(Value);
   
}
main();