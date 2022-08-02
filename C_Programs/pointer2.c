#include<stdio.h>
     int main()
     {
        int val = 10;
        float *iptr = (float*)&val;
         printf("value of variable is:%d\n",val);
         printf("the pointer value is :%d\n",iptr);

        return 0;

     }