#include<stdio.h>
#include<stdlib.h>
struct hello
{
     float f;
     int i;
};
int main()
{
struct hello arr[5];
struct hello *ptr = NULL;

ptr = (struct hello*)malloc(5*sizeof(struct hello));

if(ptr == NULL)
{
    printf("unable to allocate memory");
}
   else
   {
    printf("memory gets allocated");
   }

   free(ptr);

    return 0;
}