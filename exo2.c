#include <stdio.h>

int main() {
int nombre1,nombre2,nombre3,nombre4;
printf("choisir un nombre:"); scanf("%d",& nombre1);
printf("choisir un deuxieme nombre:"); scanf("%d",& nombre2);
printf("avant echange a: %d et b:%d",nombre1,nombre2);
nombre3 = nombre1;
nombre1 = nombre2;
nombre2 = nombre3;
printf(" puis voici les nombre apres l'échange : a = %d et b = %d",nombre1,nombre2);

return (0);
}
