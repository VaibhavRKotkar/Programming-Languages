import java.lang.*;
import java.util.*;

public class A33_9
{

     public static void main(String args[])
     {
        Scanner sobj = new Scanner(System.in);

        System.out.println("Enter the sentence");
        String str = sobj.nextLine();

       String word = "", lWord = "";

       for (int iCnt = 0; iCnt < str.length(); iCnt++)
        {
           char ch = str.charAt(iCnt);
           if (ch == ' ')
           {

                if (word.length() > lWord.length())
                    lWord = word;

                word = "";
           }
           else
           {
               word += ch;
           }
       }

       System.out.println("The longest word is: " + lWord);
        System.out.println( "length of the word is: " + lWord.length());
    }

}





