function DisplayFactor(No:number):boolean
{
    var iCnt:number= 0;
    var iCount:number= 0;

    for(iCnt=2; iCnt <=(No/2);iCnt++)
    {
        if((No % iCnt) == 0)
        {
            iCount++;
        }
    }
    if(iCount == 0)
    {     
        return true;
    }
    else
    {    
        return false;
    }
}

function main():void
{
    var Value:number = 11;
    var bRet:boolean;
    bRet = DisplayFactor(Value);

    if(bRet == true)
    {
        console.log("11 is Prime Number");
    }
    else
    {
        console.log("11 is NOT a Prime Number");
    }
}

main();