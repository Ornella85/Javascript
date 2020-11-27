// alert('hi');

/* var janvier = 1;
var fevrier = 2;
var mars = 3;
var avril = 4;
var mai = 5;
var juin = 6;
var juillet = 7;
var aout = 8;
var septembre = 9;
var octobre = 10;
var novembre = 11;
var decembre = 12;

var mois = prompt('Entrez le mois que vous souhaitez (un nombre entre 1 et 12, janvier = 1, février = 2, ... :');


if( (mois === 1) || (mois === 3) || (mois === 5) || (mois === 7) || (mois === septembre) || (mois === novembre)){
   document.write('Ce mois comporte 31 jours');
}else{
    document.write('Ce mois comporte 30 jours');
}
*/

var mois = parseInt(prompt("Quel mois choisissez-vous", "<saisir un chiffre entre 1 et 12>"));

if (mois === 2) { // si on a choisi février => chiffre 2
    document.write("Le mois numéro " + mois + " fait 28 jours.");
} else if ((mois === 4) || (mois === 6) || (mois === 9) || (mois === 11)){ // si on a choisi un mois qui fait 30 jours
    document.write("Le mois numéro " + mois + " fait 30 jours.");
} else if ((mois === 1) || (mois === 3) || (mois === 5) || (mois === 7) || (mois === 8) || (mois === 10) || (mois === 12)) { // si on a choisi un mois qui fait 31 jours
    document.write("Le mois numéro " + mois + " fait 31 jours.");
} else {
    document.write("Votre choix " + mois + " n'est pas dans le calendrier.");
}

