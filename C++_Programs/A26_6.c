#include<stdio.h>
#include<stdlib.h>

int main()
{
    float N = 0;
    float *ptr = NULL;

    printf("Enter the number of elements:\t");
    scanf("%d", &N);

    ptr = (float*)malloc(N*sizeof(float));

    if(ptr==NULL)
    {
        printf("unable to allocate memory");
    }
    else
    {
    printf("Memory gets allocated");
    }
    free(ptr);
    return 0;
}
