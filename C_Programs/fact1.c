#include<stdio.h>

int main()
{
     int num=0, lc = 1, fact = 1;
      printf ("enter value:");
      scanf("%d", &num);
      printf("your entered value is:%d\n", num);

      while(lc<=num)
      {
        fact = fact * lc;
        lc = ++lc;

      }
      printf("the factorial is: %d\n", fact);

return 0;

}