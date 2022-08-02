import java.lang.*;
import java.util.*;

class A32_10
{
    public static void main(String a[])
    {
        int i = 0;
         int j = 0;

        Scanner sobj = new Scanner(System.in);
        int size = 0;

        System.out.println("Enter size of array for jagged array:");
         size = sobj.nextInt();

        int arr[][] = new int[size][];

        System.out.println("Enter the no of columns for each row in jagged array");
        for( i = 0; i < size; i++)
            {
                arr[i] = new int[sobj.nextInt()];
            }

        System.out.println("Enter the elements");
        for (i = 0; i < arr.length; i++)   //For Rows
        {
            for ( j = 0; j < arr[i].length; j++)   //For Columns
            {
                arr[i][j] = sobj.nextInt();
            }
        }
           // Displaying the values of 2D Jagged array
        System.out.println("Elements of 2D Jagged Array");
        for ( i = 0; i < arr.length; i++)     //For Rows
        {
            for ( j = 0; j < arr[i].length; j++)    //For Columns
            {
                System.out.print(arr[i][j] + " ");
            }
            System.out.println();
        }
    }
}



