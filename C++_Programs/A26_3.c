#include<stdio.h>
#include<stdlib.h>
int main()
{
    int arr[5];
    int brr[10];
    int *iptr = NULL;
    int *iptr1 = NULL;

  iptr = (int*)malloc(5*sizeof(int));

    iptr1 = (int*)realloc(iptr, 10*sizeof(int));

if(iptr1 == NULL)
{
    printf("unable to allocate memory");
}
   else
   {
    printf("memory gets allocated");
   }

   free(iptr);

    return 0;

}