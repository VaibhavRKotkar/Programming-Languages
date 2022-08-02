using System;
namespace Application
{
class UserInput
{
    static void Main(string[]nh)
    {
        Console.WriteLine("enter Your Name:");
        string str = Console.ReadLine();
        Console.WriteLine("Username is:"+str);

        Console.WriteLine("enter Your Age:");
         int age = Convert.ToInt32(Console.ReadLine());
        Console.WriteLine("Age is:"+ age);

        Console.WriteLine("enter Your Marks:");
        double marks  = Convert.ToDouble(Console.ReadLine());
        Console.WriteLine("Your marks are:"+ marks);

        Console.WriteLine("enter Your first letter:");
        char ch =Convert.ToChar(Console.ReadLine());
        Console.WriteLine("Name first Letter is:"+ ch);

        Console.WriteLine("enter true/false:");
        bool bl = Convert.ToBoolean(Console.ReadLine());
        Console.WriteLine(bl);
    }
}

}