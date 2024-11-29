function ttc(ht) {
    var tva = 19.6;
    var tvaTot = (ht * 19.6) / 100;
    return tvaTot + ht;
}
//console.debug('La tva est de ' + tva);
var prixTTC = ttc(100);
console.debug('Le prix TTC est de ' + prixTTC);