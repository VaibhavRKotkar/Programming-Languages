#include<stdio.h>

int main()
{
    int add(int,int),a,b;

    a=b=12;
    printf("the addition is: %d\n",add(a,b));
  return 0;
}
/* void add fun not allowed bcz we want to return addition integer, void means return nothing.*/
 int add(int x, int y)
 {
    int addition = 0;
    addition = x+y;

    return addition;
  }
