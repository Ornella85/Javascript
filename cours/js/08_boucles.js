// alert("hi");

/* LES BOUCLES */

// La boucle FOR

/* for(3 arguments){
    code
}
*/

/* Les arguments 
1. Initialisation du compteur, à partir de combien je compte (par défaut, on utilise i pour stocker la valeur)
2. La condition à vérifier (elle doit être vrai / true)
3. Le " pas " d'incrémentation (combien on ajoute chaque tour, généralement 1 donc 1++)

*/

for ( var i = 1; i <= 10; i++){
    document.write("<p> Instruction exécutée : " + i + "</p>")
}


// La boucle WHILE
// très utilisée qu'on ne connait pas le nombre de tour à l'avance

var j = 1;
while(j <= 10){
    document.write("<hr /> <p> Instruction exécutée : " + j + "</p>");
    j++; // incrémentation après l'execution
}

/* EXERCICE 
   J'ai 1000€ sur mon compte
   chaque mois, j'ajoute 50€
   combien de temps faut-il pour avoir 2000€ ?
*/

/* var k = 1000;
var l = 50;

document.write('Je gagne 1000e tous les mois.' +' Pour faire des économies, je place 50€ tous les mois '+' jusqu\' à avoir 2000€');

for ( var k = 1000; k <= 1950; ){
     k = k + l;
}
document.write("<p> Ce mois ci, le montant de mon économie est de  : " + k + "</p>")


/*  var k = 1000;
var mois = 0; 

while( k <= 1999){
    k = k + 50;
    mois++;
}
document.write("il me faut " + mois + ' mois pour avoir 2000€')
*/

// WHILE
var monCompte = 1000;
var temps = 0;
while(monCompte < 2000){
    monCompte += 50;
    temps ++;
}
document.write("<p>Sous sur mon compte " + monCompte + ".</p>");
document.write("<p>Il faut " + temps + " mois pour avoir 2000€ sur mon compte.</p>");

// FOR
var tps = 0;
for( var mesSous = 1000; mesSous < 2000; mesSous += 50){
    document.write(" <p>Le mois suivant j'aurais : " + mesSous + "€.</p>");
    tps++;
}
    document.write("<p>Il aura fallu " + tps + "mois pour avoir 2000€ sur mon compte");

