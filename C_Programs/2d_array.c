#include<stdio.h>
int main()
{
     int a[10][10],olc=0,ilc=0,rows=0,cols=0;

     printf("Enter the no of rows(<10): \t");
     scanf("%d",&rows);

     printf("Enter the no of columns(<10): \t");
     scanf("%d",&cols);

     printf("Enter the elements:\n");

     for(olc=0;olc<rows;olc++)
            for(ilc=0;ilc<cols;ilc++)
                scanf("%d",&a[olc][ilc]);
        printf("the entered elements were:\n");
         for(olc=0;olc<rows;olc++)

             {
                for(ilc=0;ilc<cols;ilc++)
                    printf(" %d", a[olc][ilc]);
         printf("\n");

             }




return 0;

}