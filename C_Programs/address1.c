#include<stdio.h>

void demo();

int main()
{
    printf("inside main\n");

   demo();
    return 0;

}
void demo()

{
   int no = 78;
   float a = 45;
   printf("%f\n", a);
   printf("%p\n", &demo);
 }