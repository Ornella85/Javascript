
 /* var utilisateur = prompt('Saisissez un jour de la semaine :');

switch (utilisateur) {
    case "lundi":
      document.write("Demain nous serons Mardi");
      break;
    case "mardi":
        document.write("Demain nous serons Mecredi");
      break;
    case "mercredi":
        document.write("Demain nous serons jeudi");
      break;
    case "jeudi":
        document.write("Demain nous serons vendredi");
      break;
      case "samedi":
        document.write("Demain nous serons samedi");
      break;
      case "dimanche":
        document.write("Demain nous serons Dimanche");
      break;
    default:
        document.write("Je ne comprends pas votre saisie");
  }
   */


/* var utilisateur = prompt('Saisissez un jour de la semaine :');

var jour = [0,1,2,3,5,6,7]
var jour1 = ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi','samedi','dimanche'];
 
  if (utilisateur === jour1[0]){
     alert("Demain nous serons " + jour1[1]);
  } else if (utilisateur === jour1[1]){
    alert("Demain nous serons " + jour1[2]);
  } else if (utilisateur === jour1[2]){
    alert("Demain nous serons " + jour1[3]);
  } else if (utilisateur === jour1[3]){
    alert("Demain nous serons " + jour1[4]);
  } else if (utilisateur === jour1[4]){
    alert("Demain nous serons " + jour1[5]);
  } else if (utilisateur === jour1[5]){
    alert("Demain nous serons " + jour1[6]);
  } else if (utilisateur === jour1[6]){
        alert("Demain nous serons " + jour1[7]);
  }
  else{
    alert("je ne comprends pas votre saisie");
  }
   */

var jour = prompt(' Quel jour sommes-nous ?');
if(jour === "lundi"){
    document.write("Demain nous serons Mardi");
} else if(jour === "mardi"){
    document.write("Demain nous serons Mercredi");
} else if(jour === "mercredi"){
    document.write("Demain nous serons jeudi");
}  else if(jour === "jeudi"){
    document.write("Demain nous serons vendredi");
}  else if(jour === "vendredi"){
    document.write("Bon week end");
}  else if(jour === "samedi"){
    document.write("Demain nous serons dimanche");
}  else if(jour === "dimanche"){
        document.write("Bon Dimanche")
} else{
    document.write("jour inconnu.. veuillez entrer un jour de la semaine en minuscule");
}

