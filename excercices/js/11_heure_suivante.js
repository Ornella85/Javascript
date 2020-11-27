// alert('hi');

/* var heure = prompt(" Tapez l'heure sous cette forme heures, minutes,secondes");
var heure1 = '14h17m59s';
var heure2 = '6h59m59s';
var heure3 = '23h59m59s';


if( heure === heure1){
    document.write('il est 14h18m0s');
}else if(heure === heure2){
    document.write('il est 7h00m0s');
}else if(heure === heure3){
    document.write('il est minuit');
}else{
    document.write('votre saisie n\'est pas correcte')
} */


/*
var utilisateur = prompt(" Tapez l'heure sous cette forme heures, minutes,secondes");
var heure = getHours();
var minute = getMinutes();
var seconde = getSeconds();

if ( (heure.getHours()) && (minute.getMinutes()) && (seconde.getSeconds()) ){
    //code
    if ( heure.getHours() ){
        //code
        if (minute.getMinutes()){
            //code
           if (seconde.getSeconds()){
             //code
           }
        }
    }
    //code
}else{
    //code
}
*/


/* *********************   CORRECTION   *********************  */
var heure = prompt("Entrez une heure");
var minutes = prompt("Entrez des minutes");
var secondes = prompt("Entrez des secondes");

if ( (heure >= 0) && (heure <= 23) && (minutes >= 0) && (minutes <= 59) && (secondes >= 0) && (secondes <= 59) ){
    secondes++;
    if (secondes === 60){
        secondes = 0
        minutes++;
         if(minutes === 60){
         minutes = 0;
         heure++;
           if(heure === 24){
               heure = 0;
           }
         }
    }
    document.write(" <p> Dans une seconde il sera " + heure + "h"+ minutes + "min"+ secondes + "sec. </p>");
}else{
    document.write('Heure incorrecte !')
}
     

                
/* *********************   CORRECTION SARA  *********************  */
var heure = prompt("Entrez une heure");
var minute = prompt("Entrez des minutes");
var seconde = prompt("Entrez des secondes");

var time = new date ();
time.setHours(heure);
time.setMinutes(minute);
time.setSeconds(seconde);
time.setSeconds( time.getSeconds() +1 );
document.write( time.getHours() +" h " +time.getMinutes() +" min " +time.getSeconds() +" s ");


