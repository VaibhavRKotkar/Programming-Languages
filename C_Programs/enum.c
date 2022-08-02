#include<stdio.h>

int main()
{
    enum demo
    {
        alto,
        cars,
        swift,
        dzire ,
        sega,
        nippo =1,
        varac

    };
    printf("%d %d %d %d %d %d %d", alto, cars, swift, dzire, sega, nippo, varac);
    return 0;
}