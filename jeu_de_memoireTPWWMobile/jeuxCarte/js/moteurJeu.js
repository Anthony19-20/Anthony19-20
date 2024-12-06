var Gagner     = 0;
var Count      = 0;
var LastCarte  = null;
var ModeDebug  = false;

console.log("entree ds js");

// 4 valeurs * 2 = 8 Cartes, 5 valeurs * 2 = 10 Cartes etc...
var ArrayCartes = new Array("A", "B", "C", "D");
var ValueCarte  = ArrayCartes.concat(ArrayCartes);
var NbrValeur   = ValueCarte.length;
var ArrayDonne  = new Array(NbrValeur);
var Tirage      = true;
var Tentative   = 0;
var PairesOk    = 0;

// Temporisateur en secondes
var Tempor      = 1000;

// Retourne toutes les Cartes (Coté Back)
function InitCarte()
{
  objColTr = document.getElementById('TabCarte').rows;

  for(i=0; i < objColTr.length; i++)
  {
    colTd = objColTr[i].cells
    for(x=0; x < colTd.length; x++)
    {
    	colTd[x].style.backgroundImage = "";
      colTd[x].className = "Back";
    }
  }
  Count = 0;
  document.getElementById('Rejouer').disabled = true;
  Donne();
}

// Tirage Al�atoire des Cartes
function Donne()
{
    console.log("passage dans donne");
  var objMSG    = document.getElementById("MSG");
  var objColTr  = document.getElementById('TabCarte').rows;
  var NbrCartes = (objColTr[0].cells.length * objColTr.length);
  var objDebug  = document.getElementById("DivDebug");

  var OK        = true;
  var Buffer    = "";
  var Compteur  = 0;
  
  // Affiche Masque les infos de debuguage
  objDebug.style.display = (ModeDebug) ? "block" : "none";

  // Le Nbr de Cartes(TD) doit etre egale au Nbr de Valeurs
  // Et doit être un Nbr Paire
  if(NbrValeur == NbrCartes)
  {
    while(OK)
    {
      var Tirage = Math.floor(Math.random() * NbrCartes);
      // arg1=ens de valeurs arg2=marqueur de recherche g=toute occurence i=case insensitive
      var reg    = new RegExp("#"+Tirage+":", "gi") ;
      //reg est donc un chiffre tiré aléatoirement et encadré par # et :
      if (!reg.test(Buffer)) // test non présence de reg dans Buffer
      {
        ArrayDonne[Compteur] = ValueCarte[Tirage];
        Buffer += "#" + Tirage+ ":"; 
        console.log(" buffer : ",Buffer);

        // Affiche le Buffer pour Debug Infos
        objMSG.innerHTML = Buffer;
        Compteur ++;
        if(Compteur == NbrCartes) OK = false;
      }
    }
  }
}

// Temporisateur Reset
function ResetChoix(objID, objLast)
{
  objID   = document.getElementById(objID);
  objLast = document.getElementById(objLast);
  
  // Images Vide
  objID.style.backgroundImage   = "";
  objLast.style.backgroundImage = "";

  // Classe Back
  objID.className   = "Back";
  objLast.className = "Back";
  Tirage            = true;
}

// Click sur une Carte
function Jouer(objID)
{
	// La Carte ne doit pas �tre retourn�e
  if(Tirage && objID.className != "Front")
  {
    Tirage = false;

    if(LastCarte == null)
    {
      objID.className = "Front";
      console.log(ArrayDonne[objID.id]);
      objID.style.backgroundImage = "url(./img/"+ArrayDonne[objID.id]+".jpg)";
      LastCarte       = objID;
      Tirage          = true;
    }
    else
    {
      if(LastCarte.id != objID.id && objID.className != "Front")
      {
        // Retourne la Carte et Affiche sa Valeur/Image
        objID.className = "Front";
        objID.style.backgroundImage = "url(./img/"+ArrayDonne[objID.id]+".jpg)";

        // Si les deux Cartes sont DIFFERENTE
        if(ArrayDonne[objID.id] != ArrayDonne[LastCarte.id])
        {
          // Declenche le Temporisateur
          a = setTimeout( "ResetChoix(" + objID.id + ", "+ LastCarte.id + ")", Tempor);
          LastCarte       = null;
        }
        else
        {
          // Les Deux Cartes sont EGALE
          LastCarte       = null;
          Count ++;
          PairesOk ++;
          document.getElementById('paires').innerHTML = PairesOk;

          // Si Tout Gagner (nbr de paires)
          if(Count == (NbrValeur/2))
          {
            Gagner++;
            document.getElementById('NbrGagner').innerHTML = Gagner;
            document.getElementById('Rejouer').disabled = false;
          }
          Tirage = true;
        }

        Tentative ++;
        document.getElementById('Try').innerHTML = Tentative;

      }
    }
  }
}

// 1ere Donne des Cartes
window.onload = function(){

console.log("entree ds onload");

var objL1C0=document.getElementById("0");
objL1C0.onclick=function(){
  Jouer(objL1C0);
}
var objL1C1=document.getElementById("1");
objL1C1.onclick=function(){
  Jouer(objL1C1);
}
var objL1C2=document.getElementById("2");
objL1C2.onclick=function(){
  Jouer(objL1C2);
}
var objL1C3=document.getElementById("3");
objL1C3.onclick=function(){
  Jouer(objL1C3);
}
var objL1C4=document.getElementById("4");
objL1C4.onclick=function(){
  Jouer(objL1C4);
}
var objL1C5=document.getElementById("5");
objL1C5.onclick=function(){
  Jouer(objL1C5);
}
var objL1C6=document.getElementById("6");
objL1C6.onclick=function(){
  Jouer(objL1C6);
}
var objL1C7=document.getElementById("7");
objL1C7.onclick=function(){
  Jouer(objL1C7);
}

Donne();

}