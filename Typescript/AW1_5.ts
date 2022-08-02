function DisplayFactor(No:number):void
{
    var iCnt:number= 0;
    var Ft:number= 0, St:number = 1, Nt:number=Ft +St;

    for(iCnt=1; iCnt <=Nt;iCnt++)
    {
       
        console.log(Nt);
        Ft = St;
        St = Nt;
        Nt = Ft + St;
        if(Nt == No)
        {
            console.log(Nt);
            return;
        }
    }

}

function main():void
{
    var Value:number = 21;
    var Ret:number;
    DisplayFactor(Value);
}

main();