function Summation():any
{
    var iSum:number =0;
    var iCnt:number = 0;
   var arr:number[];  
   arr = [23, 6, 7, 4, 5, 7] ; 

    for(iCnt = 0; iCnt < arr[iCnt]; iCnt++)
    {
        iSum = iSum + arr[iCnt];
    }
    return iSum;
} 

function main():void
{
    var Ret = 0;
    Ret = Summation();
    console.log("Addition is:"+Ret);
}

main();