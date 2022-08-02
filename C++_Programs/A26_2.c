#include<stdio.h>
#include<stdlib.h>
int main()
{
    int arr[10];
    int *iptr = NULL;

    iptr = (int*)malloc(10*sizeof(int));

    printf("%d\n", sizeof(iptr));
    printf("%d\n", sizeof(arr));

    return 0;

}