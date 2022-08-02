#include<stdio.h>

int main()
{
    int a=2;
    int b=90;
    int c=0;
    int d=0;

    c = ++a;
    printf("%d\n", c);
    printf("%d\n", a);

     d = a++;
     printf("%d\n", d);
    printf("%d\n", a);
    return 0;
}