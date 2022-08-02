#include<stdio.h>

int main()
{
    const int a = 10;
    const int * const p = &a;
     int const * const p = &a;

    printf("%d\n", *p);
    printf("%d\n", *q)
    return 0;
}
