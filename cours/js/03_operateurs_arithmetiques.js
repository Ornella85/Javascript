// alert("test");

/* 1. Addition
    (je peux déclarer plusieurs variables à la suite)
*/

/* Je déclare mes variables */
var nbr1, nbr2, resultat;

nbr1 = 10;
nbr2 = 5; /* = affecte, on donne une valeur à la suite. pas de liens avec le = des maths*/

/* J'utilise mes variables avec un calcul */
resultat = nbr1 + nbr2;

/* J'affiche mon résultat dans la console */
console.log('Le résultat de "nbr1 + nbr2;" est égal à ' + resultat);


/* 2. soustraction
*/

var nbr1, nbr2, resultat;

nbr1 = 10;
nbr2 = 5;
resultat = nbr1 - nbr2;
console.log('Le résultat de "nbr1 - nbr2;" est égal à ' + resultat);

/* 3. Multiplication
*/

var nbr1, nbr2, resultat;

nbr1 = 10;
nbr2 = 5;
resultat = nbr1 * nbr2;
console.log('Le résultat de "nbr1 * nbr2;" est égal à ' + resultat);


/* 4. Division
*/

var nbr1, nbr2, resultat;

nbr1 = 10;
nbr2 = 5;
resultat = nbr1 / nbr2;
console.log('Le résultat de "nbr1 / nbr2;" est égal à ' + resultat);

/* 4. Modulo %
Le modulo retourne le reste d'une division
est une opération binaire qui associe à deux entiers naturels le reste de la division euclidienne du premier par le second, le reste de la division de a par n (n ≠ 0) est noté a mod n (a % n dans certains langages informatiques).
*/

resultat = nbr1 % nbr2;
console.log('Le résultat de "nbr1 + nbr2;" est égal à ' + resultat);

// Je ré affecte une valeur à nbr1
nbr1 = 15;
nbr1 = nbr1 + 5;
console.log('Le résultat de "nbr1 + nbr2;" est égal à ' + nbr1);


// Je ré affecte une valeur à nbr1
nbr1 = 11;
resultat = nbr1 % nbr2;
console.log("Le reste de la division de " + nbr1 + " par " + nbr2 + " est égal à: " + resultat);


/* 6. Écritures simplifiées 
*/

nbr1 = 15;
nbr1 = nbr1 + 5; // égal à 20

nbr1 += 10; // = nbr1 = nbr1 + 10
console.log('Le résultat de "nbr1 += 10;" est égal à ' + nbr1); /* égale à 30 Alternance de guillemets simples et doubles pour ne pas casser ma chaine de caractères */

/* Si j'utilise un ' (apostrophe) dans une phrase concaténée, je peux échapper le caractère à l'aide d'un anti-slash / (altgr + 8 )
*/




