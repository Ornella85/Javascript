// alert("hi");

var nbr1 = 123; // variable de type number et plus précisément interger (Int)
var nbr2 = "123"; // " " variable de type string

console.log(nbr1 == nbr2); /* Doit nous renvoyer un booleen vrai ou faux */
// == signifie égal à : " 

console.log(nbr1 === nbr2); // retourne un boolean (false) compare en type et en valeur ===
// === signifie "égal en type et en valeur"

console.log(nbr1 != nbr2); 
// signifie différent le retour booleen est false

console.log(nbr1 !== nbr2);  
// signifie différent le retour booleen est true
// !== signifie strictement different en valeur et en type 

//Excercice

/* var prenomUtilisateur, ageUtilisateur;
prenomUtilisateur = "sonia"; // de type string
ageUtilisateur = 99; */

/* var prenomb, ageb;

var prenomb = "sonia";
var ageb = 99;

var utilisateur = prompt("Quel est ton prénom ? ");
var utilisateur = parseInt(prompt("Quel est ton âge ?"))

  if (utilisateur == prenomb){
    alert("Bienvenu dans ton interface");
  } else if(utilisateur !== ageb) {
    alert("Tu n'es pas Sonia !");
  } */

  // correction
  var prenomBDD, ageBDD;
prenomBDD = "Sonia";
ageBDD = 99;
var prenonPrompt = prompt("Quel est votre prénom ?");
if(prenomBDD === prenonPrompt){
    var agePrompt = parseInt(prompt("Votre age ?"));
    if(ageBDD === agePrompt){
        alert("Bienvenue " + prenomBDD);
    }else{
        alert("erreur d'age !");
    }
}else{
    alert("Attention, prénom non preconnu !");
}


  /* 
  Égalité ==
  Inégalité !=

  Égalité stricte ===
  Inégalité stricte !==

  supériorité stricte >
  supériorité ou égale >=
  infériorité stricte <
  infériorité ou égalité <=

  */
