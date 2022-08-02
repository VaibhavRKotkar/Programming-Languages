#include<stdio.h>

struct demo
{
     char ch;
     int i;
     float f;
     double d;
     char a;
};

int main()
{
struct demo obj;
   obj.ch = 'as';
     obj.i = 12;
     obj.f = 665;
     obj.d = 65 ;
     obj.a = 'df';
    printf("%d\n", sizeof(demo));

    return 0;

}

