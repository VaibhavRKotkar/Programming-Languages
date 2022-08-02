#include<stdio.h>

int main()
{
    char name[8];
    printf("Enter your name:");
    // scanf("%[abcd]",name);    // find similar words from starting gives similar words o/p and then stop.
     //  scanf("%[vaav]", name);
      //  scanf("%[vbfh]", name);   //  find non similar words and print as similar words found stop execution.
          scanf("%[^vbfh]", name);    // ^ is called inverted search.

    printf("your name is %s",name);


return 0;

}
