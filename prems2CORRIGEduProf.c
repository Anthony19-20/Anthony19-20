#include  <stdio.h> // inclus une librairie
// 1 librairie = 1 ensemble de fonctions
// 1 fonction = 1 bloc d'instructions C
int main(void){
// void : aucun paramètre en entrée
// int main : main return une valeur entiere
//            à LINUX ici c est zéro
//            voir la fin de main
	int a ; // réserve 2 cellules mémoires
	int b ; // réserve 2 autres cellules
	int c ; // idem
	// 1 cellule memoire = 8 bits
	// 2 cellule 16 ET CA TOMBE BIEN
	// le type INT utilise 16 bits
	
	printf("Veuillez écrire le premier nombre : " );
	scanf("%d",&a);
	//& signifie "adresse de ce qui suit"
	// &a signifie "adresse memoire de la 
	// cellule a"
	printf("Veuiller écrire le deuxieme nombre:");
	scanf("%d", &b);
	// on fait la multiplication
	c = a*b;
	printf("a %d fois b %d égale %d ",a,b,c);
	return 0;
//printf fonctionne
//affichage de la chaine "VOici la valeur %d"
//%d indique la place de la valeur de i
} 
