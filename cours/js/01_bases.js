// Syntaxe de base

// commentaire sur une ligne


/* 
    Commentaire sur plusieurs lignes comme en css
*/


// Déclarer une variable JS
var prenom; // on peut remplacer par Let au lieu de var dans la dernière version de js

// Affecter une valeur
prenom = "Sonia"; // "Sonia" est une chaîne de caractère. On affecte une valeur à prénom

// Déclarer et Affecter
var prenom = "Sonia";

// On essaie de finir toutes les instructions par un point virgule ';'

// On peut déclarer plusieurs variables à la suite 
inst_1;
inst_2; inst_3;

// Afficher une boîte de dialogue :
alert('Bienvenu sur mon site');
window.alert('Hello world');

// fonctionne aussi avec prompt()

// Afficher dans la console
console.log(prenom)
// On ouvre la console avec la touche F12 dans le navigateur


// Afficher dans la page web
document.write('Bientôt la pause repas');

// Demander une valeur à l'utilisateur
prompt('Veuillez entrer votre âge.');
window.prompt('pareil');

// Pour manipuler la valeur d'un prompt
var age = prompt('Quel avez-vous ?');
console.log(age);

// /!\ Attention le JS est sensible à la case ('case sensitive' en anglais)
// mavariable != ( est différent de) maVariable (camelCase) !=  ma_variable (snake case)

// Une variable ne peut pas commencer par un chiffre, ne doit pas contenir de caractères alphanumériques, ne peut pas être un mot réservé (var, for, else, if)
// Lien d'une doc : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Mots_r%C3%A9serv%C3%A9s



/* 
Les Types de variable
*/

// Les chaînes de caractère (string)
var vacances = "2025";
var destination = "Australie";

// Les nombres entiers (integer ou Int)
var annee = 2025;

// Les nombres décimaux (ou float)
var nombre_a_virgule = -5.35;

// Les Booléens (boolean ou vraie/faux ou true/false)
var anBoolean = false; // ou à l'inverse true


// Les CONSTANTES
/* 
La déclaration de constante permet de rendre la variable accessible uniquemet en lecture
Variable != (est différent de) constante
Contrairement à une variable après affectation de valeur, on ne pourra plus la modifier.
*/

// Par convention les constantes sont en majuscules.
const PAYS = "France"; // type string
const AN = '2020'; // type string
const BIRTH = 2020;  // est une integer / Int

// Connaître le type d'une variable
console.log(vacances);
console.log(typeof vacances); // il va me donner le type de ma variable
console.log(annee);
console.log(typeof annee); // il va me donner le type de ma variable

// En JS les variables sont auto-typées
// On peut convertir une valeur de type number en string et aussi string en number
// On utilisera les fonctions natives de JS  parseInt(), parseFloat et toString()

var unChiffre = "12"; // type string
console.log(unChiffre); // renvoie sa valeur
console.log(typeof unChiffre); // renvoie son type

// STRING -> NUMBER
unChiffre = parseInt(unChiffre);
console.log(typeof unChiffre); // son type à changer

unChiffre = "12.22";

// STRING -> FLOAT
unChiffre = parseFloat(unChiffre);
console.log(typeof unChiffre); // devenu un float


// NUMBER-> STRING
var nb_en_lettres = 258; // est un 'integer'
nb_en_lettres = nb_en_lettres.toString(); // On la modifie en string
console.log(typeof unChiffre); // renvoie son type nouveau type


//Les fonctions natives de js : on les reconnait par les parenthèses. même fonction de calc dans css. code déjà pré-enregistrer et déjà interprété par le programme js.



