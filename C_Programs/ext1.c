#include<stdio.h>
extern int no;
extern int value;

int main()
{
no++;
printf("%d\n", no);

value++;
printf("%d\n", value);

  extern void demo();

   demo();

    return 0;

}