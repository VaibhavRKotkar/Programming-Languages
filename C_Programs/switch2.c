#include<stdio.h>

 int main()
 {
    int exp = 1;
    int j=2;
 switch(exp)
 {

    case 1:
    // int j=2;    not allowed.
        printf("the value of j in case 1 is: %d\n", j);

    case 2:
      // int j=2;    not allowed.
        printf("the value of j in case 1 is :%d\n", j);
}
 return 0;
 }
 /*
 return 0  successful termination
 return 1  abnormal termination
 return -1 erronious termination