// alert('hi');

/* var utilisateur = prompt('Dis oui ou non !');

while (( utilisateur === 'peut-être' ) || ( utilisateur === 'pourquoi pas') || ( utilisateur === 'nope') || ( utilisateur === 'bon ok') || ( utilisateur === 'nul') || ( utilisateur === 'je ne sais pas')){
       if ((utilisateur !== 'oui') ||(utilisateur !== 'non')){
            alert('On joue ! allez Dis oui ou non !');
            utilisateur = prompt('allez, dis ou non ! ?');
        } else if(utilisateur === 'oui' || utilisateur === 'non'){
            document.write('<p> fini ;-) </p>');
        }
} */



/* var utilisateur = prompt('on joue à ni oui ni non. c\'est parti !');
var fois = 0;

while ( utilisateur === oui || utilisateur === non){
    document.write("Fini ;-) !");
}   if(utilisateur === 'peut-être'){
    document.write('<p>Peut être pour la fois n°" + fois + </p> ');
    utilisateur = prompt('on joue à ni oui ni non. c\'est parti !');
} else if(){
   
}

 */

/* var utilisateur = prompt('Dis oui ou non !');

while ((utilisateur !== 'oui') ||(utilisateur !== 'non')){
            alert('On joue ! allez Dis oui ou non !');
            utilisateur = prompt('allez, dis ou non ! ?');
        } if( (utilisateur === 'peut-être') || ( utilisateur === 'pourquoi pas') || ( utilisateur === 'nope') || ( utilisateur === 'bon ok') || ( utilisateur === 'nul') || ( utilisateur === 'je ne sais pas')){
            alert('On joue ! allez Dis oui ou non !');
        } else if( utilisateur === 'oui' || utilisateur === 'non'){
            document.write('<p> fini ;-) </p>');
        } */


       /*  var utilisateur = prompt('Dis oui ou non !');
        var fois = 0;

        while ((utilisateur !== 'oui') ||(utilisateur !== 'non')){
                    alert('On joue ! allez Dis oui ou non !');
                    utilisateur = prompt('allez, dis ou non ! ?');
                } if(utilisateur === 'peut-être'){
                    document.write("<p> peut-être n°" + fois + "</p>");
                    utilisateur = prompt('peut-être mais, dis ou non ! ?');
                } else if(utilisateur === 'pourquoi pas'){
                    document.write("<p> pourquoi pas n°" + fois + "</p>");
                    utilisateur = prompt('pourquoi pas mais, dis ou non ! ?');
                } else if(utilisateur === 'nope'){
                    document.write("<p> nope n°" + fois + "</p>");
                    utilisateur = prompt('nope mais, dis ou non ! ?');
                } fois++;
                 */
                

/* ***********CORRECTION*********** */
 
var i = 1;
var reponse ='';

while( (reponse !== "oui") && (reponse !== "non") && (reponse !== "Oui") && (reponse !== "Non") && (reponse !== "OUI") && (reponse !== "NON") ){
    reponse = prompt("Alors on joue à ni oui ni  non ?");
    document.write(reponse + " pour la " + i + " ° fois, dis mois oui ou non ! <br>");
    i++;
}
document.write( "<h2 style='background-color:cyan; text-align: center;'> Fini ;-) </h2>"); 




/* ***********CORRECTION  sara *********** */
var jeux = prompt(" Aller on va jouer ensemble :");
var compteur = 0;

while (jeux != "oui" && jeux != "non") {
    if (compteur === 0) {
        document.write("Peut-être pour la " + compteur + " dis moi oui ou non !" + "<br />");
    } else if (compteur === 1) {
        document.write("Pourquoi pas pour la " + compteur + " fois, dis moi oui ou non !" + "<br />");
    } else if (compteur === 2) {
        document.write("Nope pour la  " + compteur + " fois, dis moi oui ou non !" + "<br />");
    } else if (compteur === 3) {
        document.write("Bon ok pour la " + compteur + " fois, dis moi oui ou non !" + "<br />");
    } else if (compteur === 4) {
        document.write("Null pour la  " + compteur + " fois, dis moi oui ou non !" + "<br />");
    } else if (compteur === 5) {
        document.write("Pour  la " + compteur + " fois, dis moi oui ou non !" + "<br />");
    }
    jeux = prompt(" Aller on va jouer ensemble :");
    compteur++;
}

                
      