using System;
namespace Application
{
    class Typecast
    {
        static void Main(string[] ag)
        {
            int iNo = 90;
            double iNo2 = 23.36D;
            bool bl = true;
            Console.WriteLine(Convert.ToInt32(iNo2));
            Console.WriteLine(Convert.ToString(bl));
            Console.WriteLine(Convert.ToDouble(iNo));
            int ivalue = (int)iNo2;
            Console.WriteLine(ivalue);
            double ivalue2 = iNo;
            Console.WriteLine(ivalue2);
        }
    }
}