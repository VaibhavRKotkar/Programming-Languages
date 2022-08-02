#include<stdio.h>

int main()
{
    const int a = 10;
    const int * const p = &a;
     int const * const q= &a;
     
    printf("%d\n", *p);
    printf("%d\n", *q);
    return 0;
}
