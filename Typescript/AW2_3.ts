function Maximum():void
{
    var Max:number =0, SecondMax:number =0;
    var iCnt:number = 0;
   var arr:number[];  
   arr = [23, 89, 6,29, 56, 45, 77, 32] ; 

    for(iCnt = 0; iCnt < arr[iCnt]; iCnt++)
    {
        if(arr[iCnt] > Max)
        {
            SecondMax = Max;
            Max = arr[iCnt];
        }
        else if((arr[iCnt]) < Max && (arr[iCnt])> SecondMax)
        {
                SecondMax = arr[iCnt];

        }
    }
    console.log("Second Maximum Number is: "+SecondMax);
    console.log("Maximum Number is: "+Max);
}

function main():void
{
Maximum();
}
main();