/* ON DESIRE CREER UN OBJET de la classe CLassPRODUIT (de magasin) */

/*-----------------------------*/
/*        ClassPRODUIT         */
/*-----------------------------*/
/* proprietes:                 */
/* nom : string                */
/* ht  : int                   */
/* ttc : float                 */
/*-----------------------------*/
/* methode:                    */
/* ttc(prixHT)                 */
/*-----------------------------*/

function ClassPRODUIT (name, ht) { 
    
    function ttc(ht) {
        var tva = 19.6;
        var tvaTot = (ht * 19.6) / 100;
        return tvaTot + ht;
    }

    this.nom = name;
    this.ht = ht;
    this.ttc = ttc(this.ht);
}
// produits est un tableau vide
// tout nouvel objet produitx est placé en fin de produits
var produits = [];
var produit1 = new ClassPRODUIT("Robe", 100);
produits[produits.length] = produit1;
var produit2 = new ClassPRODUIT("Pantalon", 200);
produits[produits.length] = produit2;

var chaine=produits[0].nom + ' prix ht=' + produits[0].ht + ' prix ttc=' + produits[0].ttc;

for (i in produits) {
    chaine=produits[i].nom + ' prix ht=' + produits[i].ht + ' prix ttc=' + produits[i].ttc;
    console.log(chaine);   
}


console.log(produit1);
