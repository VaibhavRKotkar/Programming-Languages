
// not a proper output

function CheckArmstrong(iNo):boolean
{
    var iTemp:number = 0, iCnt:number = 0, iMult:number = 1;
    var iCount:number = 0, iDigit:number = 0, iSum:number = 0;

    if(iNo < 0)
    {
        iNo = -iNo;
    }

    iTemp = iNo;

    // Calculate number of digits:

    while(iNo != 0)
    {
        iCount++;
        iNo = iNo / 10;
   }
   
   console.log(iCount);
    iNo = iTemp;
    while(iNo != 0)
    {
        iMult = 1;
        iDigit = iNo % 10;

        for(iCnt = 1; iCnt <= iCount; iCnt++)
        {
            iMult = iMult * iDigit;      
        }

         iSum = iSum + iMult;
        iNo = iNo / 10;
    }
   
    if(iSum == iTemp)
    {
        return true;
    }
    else
    {
        
        return false;
    }
}

function main():any
{
    var iValue:number = 153;
    var bRet:boolean;

    bRet = CheckArmstrong(iValue);

    if(bRet == true)
    {
        console.log(iValue+" is armstrong number");
    }
    else
    {
        console.log(iValue+" is NOT a armstrong number");
    }
}
main();