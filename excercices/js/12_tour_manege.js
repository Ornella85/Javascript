// alert('hi');


/* ************** Exercice 1 ************** 
var tour = 0;

for( var manege = 1; manege < 10; manege += 1 ){
    document.write(" <p>C'est le tour de manège n°" + manege + "</p>");
    tour++;
}
    document.write(" <p>C'est le tour de manège n°" + manege + "</p>");

*/

/* ************** Exercice 2 ************** 

 var utilisateur = parseInt(prompt('Saisissez le nombre de tour que vous souhaitez : ') );

 if(utilisateur <= 10){
     document.write("<p> Le tour de manège choisi est le n° " + utilisateur + "</p>");
 }else{
    document.write("<p> Le tour de manège choisi n\'a pas été correctement saisi "+ "</p>");
 }
*/

/* ************** Exercice 3 ************** 

var manege = parseInt(prompt('Saisissez le nombre de tour que vous souhaitez : ') );
var tour = 0;

for( var manege = 1; manege < 10; manege += 10){
    document.write(" <p>C'est le tour de manège n°" + manege + "</p>");
    tour++;
}
    document.write(" <p>C'est le tour de manège n°" + manege + "</p>"); */


/* ************** CORRECTION **************  */  

/* ****WHILE****  */  
var manege = 0;
while(manege <= 10) {
    document.write("C'est le tour n°" + manege + "<br />");
    manege++;
}
document.write("<hr>");

// FOR
for(var i = 1; i <= 10; i++) {
    document.write("C'est le tour n°" + manege + "<br />");
}
document.write("<hr>");

// Prompt WHILE 
var question = parseInt(prompt("Combien de tour voulez-vous faire ?"));
var compteur = 1;
while(compteur <= question) {
    document.write("C'est le tour n°" + compteur + "<br />");
    compteur++;
}

document.write("<hr>");

// PROMPT FOR 
var nbTours = parseInt(prompt("Combien de tour à faire ?"));
for(var tour = 1; tour <= nbTours; tour++) {
    document.write("C'est le tour n°" + tour + "<br />");
}