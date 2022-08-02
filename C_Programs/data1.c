#include<stdio.h>

int main()
{
    int number1, number2, number3;
    printf("enter numbers:");
    scanf("%d %d",&number1, &number2);

    number3 = number1 + number2;

    printf("The sum is :%d\n", number3);

    return 0;

 }