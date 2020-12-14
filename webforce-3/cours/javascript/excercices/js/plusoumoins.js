// Demander au joueur 1 de saisir un nombre entre 1 et 100 et le nombre d'essais

// Demander au joueur 2 de trouver la solution

// SI le nombre est trouvé, le jeu s'arrête
// SINON le programme indique SI le nombre magique est plus grand OU plus petit que la saisie 

// SI l'entrée n'est pas un nombre, un message d'erreur s'affiche

// à chaque essais le nombre d'essais restant s'affiche

// Lorsque l'utilisateur n'a plus d'essais, le jeu s'arrête et affiche la solution

            // var solution = parseInt(prompt('joueur 1 : veuillez saisir un nombre entier entre 1 et 100'));
            // console.log( 'le nombre magique est ' + solution );

            // var essais = parseInt(prompt('solution joueur 1 : Combien d\'essais permets tu pour trouver la solution ?'));
            // console.log( 'le nombre d\'essais est ' + essais);

            // var joueur2 = parseInt(prompt(' joueur 2 : Trouve le nombre magique : il est compris entre 1 et 100 :'));
            // console.log( 'la réponse joueur2 est ' + joueur2 );

             
            // for( var i = 10; i > essais; i--){
            //     if(!isNaN(joueur2)){
            //         if(solution === joueur2){
            //             alert('bravo, tu as trouvé le nombre magique'); 
                        
            //         }
            //             else{ 
            //                 if(joueur2 > solution){
            //                     alert('le nombre magique est plus grand. Il vous reste ' + i + ' essais');
            //                 } else{
            //                     alert('le nombre magique est plus petit.  Il vous reste ' + i + ' essais');
            //                 } 
            //             }
            //         } 
            //                 else if(isNaN(joueur2)) {
            //                     alert('la saisie n\'est pas nombre ! Recommencez');
            //                 }       
            //     }   
            //     document.write('Tu n\'as plus d\'essais. La solution était ' + solution);


                // CORRECTION
                var nbre ;
                
                do{
                    nbre = parseInt(prompt("Joueur 1 veuillez saisir un nombre entre 1 et 100"));
                    if(nbre >= 1 && nbre <= 100){
                        var compteur = parseInt(prompt("Joueur 1 veuillir saisir le nombre d'essais"));
                        alert("le nombre que vous avez choisi est " + nbre);
                       break;
                     } else{
                        alert("Veuillez saisir un nombre compris entre 1 et 100 svp !");
                     }
                   }while(true) 

                  
                while(true)
                {
                    var reponse = parseInt(prompt("Joueur 2 veuillez saisir votre réponse vous avez " + compteur + " essais"));

                    if(!isNaN(reponse)){
                        if(reponse >= 1 && reponse <= 100)
                        {
                            compteur--;
                            if(nbre === reponse){
                                alert("felicitation vous avez gagnez !");
                                break;
                            }  else {
                                if(nbre < reponse)
                                {
                                    alert("Moins il vous restes " + compteur + " essais." );
                                } else {
                                    alert("Plus il vous restes " + compteur + " essais." );
                                }
                                if(compteur === 0)
                                {
                                    alert("vous avez perdu ! la solution est : "  + nbre);
                                    break;
                                }
                            }
                        } else {
                            alert("Veuillez saisir un nombre compris entre 1 et 100 svp !");
                        }
                    } else {
                        alert("Veuillez saisir un nombre svp !");
                    }
                }


                                        
                    
              
 

             