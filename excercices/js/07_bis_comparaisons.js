// alert('hi');

var candidat = parseInt(prompt('veuillez saisir la moyenne que vous avez obtenu après avoir passé votre examen :'));

if(candidat < 10){
    document.write('Votre moyenne n\'est pas suffisante. Vous n\'êtes pas admis.');
} else if(candidat < 12){
    document.write('Félicitations ! Vous êtes reçu !');
} else if (candidat >= 12){
    document.write('Félicitations ! Vous êtes reçu avec mention !');
}


//CORRECTION

var moyenne = parseFloat(prompt('Quelle a été ta moyenne au bac :'));

if(moyenne<10){
    document.write('Recalé');
} else if ((moyenne >= 10) && (moyenne < 12)){
    document.write('Tu passes');
} else if((moyenne >= 12) && (moyenne <= 20)){
    document.write('Bravo pour la mention');
}else{
    document.write('Et de 0 à 20 ça donne ...');
}