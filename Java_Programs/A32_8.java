import java.lang.*;
import java.util.*;

class A32_8
{
    public static void main(String a[])
    {
        int iCnt = 0;

        Scanner sobj = new Scanner(System.in);

        System.out.println("Enter no of elements:");
        int size = sobj.nextInt();

        int arr[] = new int[size];

        System.out.println("Enter the elements of array");
        for(iCnt = 0; iCnt < arr.length; iCnt++)
            {
                arr[iCnt] = sobj.nextInt();
            }
              System.out.println("Entered elements of array are:-");
        for(iCnt = 0; iCnt < arr.length; iCnt++)
            {
                  System.out.println(arr[iCnt]);
            }
                int length = arr.length;
                int iSum = 0;
                double average = 0;
    for(iCnt = 0; iCnt < arr.length; iCnt++)
            {
              iSum = iSum + arr[iCnt];
              average = iSum / length;
            }
      System.out.println("Average is: "+average);
    }
}



