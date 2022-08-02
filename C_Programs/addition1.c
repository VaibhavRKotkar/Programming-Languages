#include<stdio.h>

int addition(int, int);

int main()
{
   printf("inside main\n");
     int no = 45;
     int mo = 46;
     int ret = 0;

     ret = addition(no, mo);

     printf("%d\n", ret);


 return 0;
}


int addition(int no1, int no2)
{
    int ans = 0;
    ans = no1 +no2;
    printf("inside function\n");
     return ans;

}