// alert('hi');

// Exercice 1
var utilisateur = parseInt(prompt('veuillez saisir un nombre compris entre 1 à 10 :'));
var utilisateur1 = parseInt(prompt('Puis, un second toujours compris entre 1 à 10 :'));


if (utilisateur == utilisateur1){
    document.write('Vos deux nombres sont égaux');
} else if (utilisateur <= utilisateur1){
    document.write('Le nombre ' + utilisateur + ' est inférieur à ' + utilisateur1 +'.');
} else if(utilisateur >= utilisateur1){
    document.write('Le nombre ' + utilisateur + ' est supérieur à ' + utilisateur1 +'.');
}

// CORRECTION 
var nbr1 = parseInt(prompt('Entrez un premier nombre afin de le caomparer à un deuxième.'));
var nbr2 = parseInt(prompt('Entrez un deuxième nombre.'));

if ((!isNaN(nbr1)) && (!isNaN(nbr2))){ // isNAN a utilisé sans le parseInt(prompt( , juste avec le prompt seul
    if(nbr1<nbr2){
        document.write('Votre premier :' + nbr1 + ' est plus petit que votre 2nd' + nbr2);
    }else if(nbr1>nbr2){
        document.write('Votre premier :' + nbr1 + ' est plus grand que votre 2nd' + nbr2);
    }
    else{
        document.write('Votre premier :' + nbr1 + ' est égal à votre 2nd' + nbr2);
    }
}else{
    alert('Vous n\'avez pas saisi de chiffre(s)');
}


/// isNAN is not a number -> n'est pas un nombre
// !isNAN est un nombre car négation de not a number

