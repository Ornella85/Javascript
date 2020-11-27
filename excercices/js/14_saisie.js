// while s'utilise quand on ne connait pas le nombre tour
// on connait juste la condition

// l'incrémentation dans while se place à la fin 



var i = prompt("saisir un nombre");

while ( (i <= 50) || (i >= 100)) {
        var i = prompt("saisir un nombre");
        // continue;
}



// CORRECTION
 var nombre = 0;

while (( nombre < 50 ) || ( nombre > 100)){
        nombre = Number(prompt('entrez un nombre entre 50 et 100'));
}




// SARA ne fonctionne pas avec la consigne
var nombre = parseInt(prompt('entrez un nombre netre 50 et 100'));
while (nombre >= 50 && nombre <= 100){
        alert(' Le nombre :' + nombre + "que vous avez saisie est compris entre 50 et 100");
        nombre = prompt('entrez un nombre entre 50 et 100 :');
}

// ce code répond à l'énoncé et rajouter une alert
while (nombre < 50 || > 100){
        alert("vous avez saisie" + nombre + "il n'est pas entre 50 et 100");
        nombre = prompt('entrez un nombre entre 50 et 100 :');
}

// quitter permet de sortir de la boucle mais, redemande un nombre même si on a bien répondu entre 50 et 100

var nombre = parseInt(prompt('entrez un nombre netre 50 et 100'));
while (nombre != 'quitter'){
        if(nombre >= 50 && nombre <= 100);
                alert("vous avez saisie" + nombre + "il est entre 50 et 100");
                 nombre = prompt('entrez un nombre entre 50 et 100 :');
        }
        else if(nombre < 50 || nombre > 100){
                alert("vous avez saisie" + nombre + "il n'est pas entre 50 et 100");
                nombre = prompt('entrez un nombre entre 50 et 100 :');
        }
        else{
                alert("erreur ! entrz un nombre correcte");
        }
}