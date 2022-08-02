#include<stdio.h>
#include<stdlib.h>

int main()
{
    int size = 0;
    int *p = NULL;
    int icnt = 0;

    printf("Enter the number of elements:\t");
    scanf("%d", &size);

    p = (int*)malloc(size*sizeof(int));

      printf("Please enter elements:");

            for(icnt = 0; icnt < size; icnt++);
             {

            scanf("%d", &icnt[]);
             }

        printf("enter elements are:");

             for(icnt = 0; icnt < size; icnt++);
              {

             printf("%d", icnt);
             }

        free(p);

        return 0;
        }