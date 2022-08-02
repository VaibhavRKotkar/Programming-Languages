#include<stdio.h>

int main()
{
    char Z = '\0';
    printf("Enter vowel:");
    scanf("%c",&Z);

    printf("your vowel is:%c\n",Z);
    switch(Z)
    {
    case'a':
    case'e':
    case'i':
    case'o':
    case'u':
    printf("Your vowel is :lower case vowel\n");
    break;
    case'A':
    case'E':
    case'I':
    case'O':
    case'U':
    printf("Your vowel is :upper case vowel\n");

    default:
    printf("not a vowel");

    }
    return 0;
}