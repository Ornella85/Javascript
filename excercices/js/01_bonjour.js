// alert(" Bonjour ! ");
// var nom = prompt("Écrivez votre nom ");
// var prenom = prompt("et votre prénom s'il vous plait");

// // Correction
// alert("Bonjour, " + nom + " " + prenom + "." );

/* 
On peut forcer le type d'une donnée en utilisant, pour les nombres, number()
exemple: 
   var age = pNumber(prompt(" quel est votre age ?"));
Il existe aussi parseInt() et parseFloat(), Int pour un nombre entier, flot pour un nombre à virgule.

https://stackoverflow.com/questions/48227631/specify-the-variable-type-in-the-prompt

*/

alert('Bonjour');
var nom = prompt('Inscrivez votre nom');
var prenom = prompt('inscrivez votre prénom');

alert('votre nom est ' + nom + " " + ' et votre prénom est ' + prenom);