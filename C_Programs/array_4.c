#include<stdio.h>
int main()
{
    int a=10, b=20,c=0;

    c=add(a,b);
    printf("the addition is:%d\n", c);
return 0;

}
int add(int x, int y)
  {
       int ans=0;
       ans= x+y;

       return ans;
    }