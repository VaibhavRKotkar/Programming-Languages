function Maximum():void
{
    var Max:number =0;
    var iCnt:number = 0;
   let arr:number[];  
   arr = [23, 89, 6] ; 

    for(iCnt = 0; iCnt < arr[iCnt]; iCnt++)
    {
        if(arr[iCnt] > Max)
        {
            Max = arr[iCnt];
        }
    }
    console.log("Maximum Number is: "+Max);
}

function main():void
{
Maximum();
}
main();