// alert('hi');

// lien pratique pour mieux comprendre: https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Expressions_et_Op%C3%A9rateurs#Op%C3%A9rateurs_de_comparaison

/* L'opérateur ET : && ou AND
*/
// l'opérateur && et AND permet de cumuler deux conditions

if ((prenomBDD === prenomPrompt) && (ageBDD === agePrompt)){
    // code si les 2 conditions sont validées
}

=> si A est FAUX et B est VRAI => FAUX
=> si A est VRAI et B est FAUX => FAUX
=> si A est FAUX et B est FAUX => FAUX
=> si A est VRAI et B est VRAI => VRAI 


/* L'opérateur OU : || ou OR
*/
// l'opérateur || et OR permet de rentrer dans la condition si au moins une des deux est vraie.

if ((prenomBDD === prenomPrompt) || (ageBDD === agePrompt)){
    // code si une des 2 conditions sont validées
}

=> si A est FAUX et B est VRAI => VRAI
=> si A est VRAI et B est FAUX => VRAI
=> si A est FAUX et B est FAUX => FAUX
=> si A est VRAI et B est VRAI => VRAI 


/* L'opérateur contraire: ! 
*/

var utilisateurLog = true; // utilisateur connecté : oui

if(!utilisateurLog){
    // code si l'utilisateur n'est pas connecté
}
// ce qui revient à écrire : 
if(utilisateurLog == false){
    //code si l'utilisateur n'est pas connecté
}


