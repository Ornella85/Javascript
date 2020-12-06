/* utilisateur = parseInt(prompt("Entrez un chiffre"));

for (i = 1; i <= 10; i++) {
document.write(utilisateur + " x " + i + " = "+ utilisateur*i +"<br>");
} 


// MOI
utilisateur = parseInt(prompt("Entrez un chiffre"));

for (i = 1; i <= 10i++) {
document.write(utilisateur + " x " + i + " = "+ utilisateur*i +"<br>");
} if((i<=2) || (i >=9)){
    utilisateur = parseInt(prompt("Entrez un chiffre"));
} */




// CORRECTION
// boucle pour faire une table

var choix = prompt('entrez un nombre à multiplier par 10');
for (var i = 1; i <= 10; i++){
    var multiplication = i * choix;
    document.write(choix + "x" + i + " = " + multiplication + "<br />")
}

// exercice entre 2 et 9 boucle + condition

var choix = prompt('entrez un nombre à multiplier par 10 ... entre 2 et 9');

if ((choix >= 2) && (choix <= 9)){
for (var i = 1; i <= 10; i++){
    var multiplication = i * choix;
    document.write(choix + "x" + i + " = " + multiplication + "<br />")
} else {
    document.write(" ce doit être un nombre compris entre 2 et 9 (inclus) ");
}
} 


//jordan
var nombre = prompt("Entrer un nombre à multiplier");         
                 
if ((nombre >= 2) && (nombre <= 9)) {                                   
    for (var i = 1; i <= 10; i++) {
        var resultat = nombre * i;
        document.write(nombre + " x " + i + " = "+ resultat + "<br>");
    }
} else if( nombre >= 2) && (nombre <= 9){
    prompt("Entrez un nombre à multiplier");
} else{
    alert("erreur. Entre un nombre entre 2 et 9");
} 




// exercice entre 2 et 9 boucle WHILE 

var choix = prompt('entrez un nombre à multiplier par 10 ... entre 2 et 9');
 
while( choix < 2 || choix > 10){  // tandis que
    choix = prompt("Entrez UNIQUEMENT un nombre à multiplier entre 2 et 9");
    } if ((choix >= 2) && (choix <= 9)){ // et si
    for (var i = 1; i <= 10; i++){  // boucle et condition
    var multiplication = i * choix;
    document.write(choix + "x" + i + " = " + multiplication + "<br />");
    }
} else {   // sinon
    document.write(" ce doit être un nombre compris entre 2 et 9 (inclus) ");
}


// CORRECTION SONIA
var choix = prompt('Entrez un nombre entre 2 et 9');

while ((choix >1)|| (choix < 10)) {
    if ((choix >= 2) && (choix <= 9)) {
        for (var i = 1; i <= 10; i++) {
            var resultat = choix * i;
            document.write(choix + "x" + i + " = " + resultat + "<br />");
        } 
        break;
    } else {
        choix = prompt('entrez un nombre à multiplier par 10 ... entre 2 et 9');
        }
}

