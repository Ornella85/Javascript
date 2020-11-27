// alert('hi');


/* for (var i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
    console.log(i + " est pair");
    }
    }

    
    console.log(10 % 2); // Affiche 0 car 10 = 5 * 2 + 0
    console.log(11 % 2); // Affiche 1 car 11 = 5 * 2 + 1
    console.log(18 % 3); // Affiche 0 car 18 = 3 * 6 + 0
    console.log(19 % 3); // Affiche 1 car 19 = 3 * 6 + 1
    console.log(20 % 3); // Affiche 2 car 20 = 3 * 6 + 2

*/


/* Modifiez le programme parite.js pour qu'il affiche aussi les nombres impairs. */


/* for (var i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
    document.write("<p>" + i + " est pair </p>");
    }
    if (i % 2 !== 0) {
        document.write("<p>" + i + " est impair </p>");
    } 
} 

document.write("<hr>"); 


/*  améliorez le programme pour que le nombre initial soit saisi par l'utilisateur. */


 /*  var pair = parseInt(prompt("saisir un nombre"));
if ( (pair === 2) || (pair === 4) || (pair === 6) || (pair === 8) || (pair === 10) ) {
    document.write("<p>" + pair + " est pair </p>");
    }
    else {
        document.write("<p>" + pair + " est impair </p>");
    } 

document.write("<hr>"); 

var nbr = parseInt(prompt("saisir un nombre"));

for (var i = 1; i <= nbr ; i++){
    if (i % 2 === 0) {
        document.write("<p>" + i + " est pair </p>");
        }
        if (i % 2 !== 0) {
            document.write("<p>" + i + " est impair </p>");
        } 
}
document.write("<hr>");


/*  CORRECTION */
/*  var chiffre = parseInt(prompt("saisir un nombre entier"));
var chiffreMax = (chiffre + 10); ici on part de 10 pr ex

while(chiffre <= chiffreMax) {
     if(chiffre % 2 === 0){
         document.write("<p>" + chiffre + " est pair </p>")
     }else{
        document.write("<p>" + chiffre + " est impair </p>")
     }
     chiffre++;
} */

var nbUser = parseInt(prompt("saisir un nombre entier"));
var nbUserMax = (nbUser + 5); // on part ici de 5

for (var tour = nbUser; tour <= nbUserMax; tour++) {
    if (tour % 2 === 0){
        document.write("<p>" + tour + " est pair </p>");
    }else if (tour % 2 != 0){
       document.write("<p>" + tour + " est impair </p>");
    } 
}
