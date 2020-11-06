// alert("Hello");

//Structure de base IF (= si )

if(true){ // (la condition à vérifier)
    // code
}

// Exemple
/* var nbr = 10;
if(nbr1 < 50){
    console.log('nbr1 est inférieur à 50.');
}


if(true){
    // code pour true
}else{
    // code pour faux
} */ 


// Exemple
/* if(nbr1 >= 50){
    console.log('nbr1 est supérieur à 50.');
}else{
    console.log('nbr1 est inférieur à 50.');
}
*/

// Exercice on vérifie l'âge d'un internaute s'il est majeur, je lui souhaite la bienvenue
// sinon: je lui signale(1) et je le renvoie sur un autre site(2) ->Document.Location


/* var age = prompt('Quel est âge ?');

if(age > 18){
    console.log('Je vous souhaite la bienvenue sur notre site.');
}
else if(age < 18){
    console.log(document.location ='https://twitter.com/home?lang=fr');
} */ 


// Correction

var majorite = 18;
var age = parseInt(prompt("Indiquez votre age"));// force le type de variable à être un entier
if (age >= majorite){
    alert("Bienvenu gros !");
}else{
    alert("Allez voir un autre site ...");
    document.location = "https://www.darty.com"; // .href n'est pas obligatoire
}







