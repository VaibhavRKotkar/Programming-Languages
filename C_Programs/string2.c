#include<stdio.h>

int main()
{
    char line[23];
    printf("Enter line:\n");

          scanf("%[^\n]",line);    // ^ is called inverted search.

    printf("your line is %s",line);


return 0;

}
