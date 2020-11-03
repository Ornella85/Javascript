//alert("Hello World"); commentaire pour une ligne
/* Plusieurs lignes comme pour css*/

/* --- La concaténation --- */

/* Variable
c'est un espace de stockage variable 
plusieurs types :*/

/* var prenom = "ornella"  prenom est une variable de type string
var age = 35 
var chomage = false  variable type bouléen 
console.log(prenom)
var prenom = "amine"
console.log(prenom) écrase la première commande */ 

var annee = 2020;
var futur = 3;
var calcul = annee + futur;
// console.log(calcul);

document.write(calcul + "<br>"); /* visible ds le html qd on examine le navigateur 2023 */

var mois = "7";
var calcul2 = annee + mois;
console.log(calcul2 + "<br>") 
/*document.write(calcul2 + "<br>"); -> 20207
 ne fait pas de calcul avec une string donc il colle 2020 et 7 ensemble. il le considère comme une chaîne de caractère et non comme un nombre calculable */

 var DebutPhrase = "Aujourd'hui ";                /* 1ere lettre en majuscule, on appelle cela du camlecase */
 var NbrStagiaires = 11;

 var SuitePhrase = " stagiaires";
 var FinPhrase = "sont présents.";

 // Affichez la phrase en un seul morceau en utilisant la concaténation (console et document)

 /* var Phrase = DebutPhrase + NbrStagiaires + SuitePhrase + FinPhrase;
 console.log(Phrase) non isible dans le html, uniquement dans examiner */

 document.write(DebutPhrase + NbrStagiaires + SuitePhrase + " " + FinPhrase); /* les " " crée un espace */

 

