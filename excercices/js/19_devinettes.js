// console.log('Bienvenue !');

// function getRandomInt(max) {
//         return Math.floor(Math.random() * Math.floor(max));
//   }
//   console.log(getRandomInt(100));

//   var utilisateur = parseInt(prompt('Petite devinette ! Trouvez le nombre entre 1 et 100 que l\'ordinateur a choisi pour vous :'));

//   for( i = 1; i <= 6; i++){
//     if( utilisateur >= Math.floor ||  utilisateur <= Math.floor ){
      
//     }
//      else {
//      prompt('');
//    } 
//   } 




//       /* ************************ test MAISON ************************* */
// //  message de bienvenue sur la console     
//     console.log('Bienvenue !');
//     // générer un nombre aléatoire entre 1 et 100
//         var nbr = Math.floor(Math.random() * 100) + 1;
//         // TEST pour mieux vérifier le programme
//         console.log("(La solution est " + nbr + ")");
//     // faire apparaitre une boite de saisie
     
//       // Si le nombre est trouvé, le jeu s'arrête
//       for( i = 1; i <= 6; i++){
//         var utilisateur = parseInt(prompt('Petite devinette ! Trouvez le nombre entre 1 et 100 que l\'ordinateur a choisi pour vous :'));
//          if( utilisateur == nbr){
//             alert('Bravo, vous avez trouvé !');
//             break;
//           }
//             else if(nbr < utilisateur){
//               alert('Votre nombre est plus grand que le nombre magique !' + i + ' essai sur 6');
//             } else if(nbr > utilisateur){
//               alert('Votre nombre est plus petit que le nombre magique' + i + ' essai sur 6');
//             } else if(isNaN) {
//               alert('ceci n\'est pas un nombre');
//             }
//             if(i == 6) {
//               document.write("Perdu ! La solution était : " + random);
//           } 
//       }


/* ************************ CORRECTON SONIA ************************* */
          alert("Hello et bienvenue !");
          // Cette ligne génère aléatoirement un nombre entre 1 et 100
          var solution = Math.floor(Math.random() * 100) + 1;
          // TEST pour mieux vérifier le programme
          console.log("(La solution est " + solution + ")");
          for (var i = 1; i <= 6; i++) {
              nbJoueur = parseInt(prompt("Le but du jeu est simple. Je pense à un nombre entre 0 et 100. A ton avis, quel est ce nombre ? Notes le dans la zone ci-dessous, tu as 6 essais."));
              if (!isNaN(nbJoueur)) {
                  if (solution === nbJoueur) {
                      alert("Bravo vous avez trouvé !");
                      i = 6;
                  } else {
                      if (solution < nbJoueur) {
                          alert("Le nombre est plus petit, essai " + i + " sur 6");
                      } else {
                          alert("Le nombre est plus grand, essai " + i + " sur 6");
                      }
                  }
              } else {
                  alert("Vous n'avez pas saisi un nombre !");
              }
          }        


          
alert(' Bienvenue');

// générer un nombre aléatoire
var nbre = Math.floor(Math.random() * 100) + 1;
console.log(nbre);

// boîte de saisie

//Pour Nbr trouvé, le jeu s\arrête
// Sinon, il continue

   for ( var i = 0; i < 6; i++){
    var utilisateur = parseInt(prompt('Entrez un nombre entier entre 1 et 100'));
    if (!isNaN(nbre)){
        if (utilisateur === nbre){
        alert(' vous avez trouvé le nombre ! Bravo');
        i = 6;
      } else if(nbre < utilisateur){
        alert(utilisateur + ' est plus grand que le nombre magique');
        
      } else(nbre > utilisateur){
        alert( utilisateur + ' est plus petit que le nombre magique');
      
      } else{
        alert('votre réponse n\'est un nombre');
      }
      }
    }