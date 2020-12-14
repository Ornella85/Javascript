// EXERCICE
            // Etape 1 : création d'un personnage
            // Créé un objet Personnage avec les propriétés suivantes : nom (string), sante (int) et force(int).

            // var Personnage = {
            //    nom : 'Aslan', 
            //    sante : 36, 
            //    force : 12    
            // };
            // document.write("<br>" + Personnage.nom);
            // document.write("<br>" + Personnage.sante);
            // document.write("<br>" + Personnage.force);

            // Etape 2 : Créer une fonction (à l'intérieur de mon objet) qui présente mon personnage (je suis le valeureux guerrier du monde de Narnia. J'ai "x" de sante et ma force de combat est de "x")

            // var Personnage = {
            //    nom : 'Aslan', 
            //    sante : 100, 
            //    force : 12,  
    
            //    presentation : function(){
            //       document.write(' Je suis ' + this.nom +' le valeureux guerrier du monde de Narnia. J\'ai ' + this.sante + ' de sante et ma force de combat est de ' + this.force);
            //    }
            // }; 

             // Etape 3 : Créer une fonction "attaquer" qui permet d'attaquer une cible lorsque le personnage attaque la cible, celle-ci perd 10 points de santé

             
            //  this.attaquer = function(cible){ 
            //          cible.sante = cible.sante -10;
            //           return cible.sante;
            //    };

             // Etape 4 : Lorsque les points de vie arrivent à 0 Afficher un message qui indique que le personnage ciblé est mort.

            //  this.attaquer = function(cible){ // Etape 3
            //    //this.sante = this.sante - 10;
            //       if(cible.sante <= 0){ // Etape 4
            //          document.write('<br> + La cible est morte. Fin du game mon ami');
            //          cible.sante = 0;
            //       } else {
            //         cible.sante = cible.sante - 10; 
            //       }
            //       return cible.sante;
            //    };

             // Etape 5 : Modifier la fonction d'attaque pour que les dégats soit proportionnel (équivalent à) à la force d'attaque de l'attaquant.

            //  this.attaquer = function (cible){
            //    cible.sante = cible.sante - this.force;
            //    if(cible.sante <= 0)
            //    {
            //        document.write("La cible est morte <br>");
            //        cible.sante = 0;
            //        return cible.sante;
            //    };

            // Etape 6 : Ajouter un attribut experience, un hero commence avec une experience de jeu  à 0, lorsqu'il tue un méchant il gagne 15 points d'expériences.
               //             this.attaquer = function (cible){
               //           cible.sante = cible.sante - this.force;
               //           if(cible.sante <= 0){
               //               document.write(cible.pseudo  +" est mort <br>");
               //               this.experience += 15;
               //               cible.sante = 0;
               //           }
               //           return cible.sante;
               //       };
               //   }

               // Etape 7 : Lorsque le héro obtient 100points d'expériences il gagne un niveau supplémentaire.
                            
               

               // CORRECTION
               function Personnage(pseudo, sante, force){
                this.pseudo = pseudo;
                this.sante = sante;
                this.force = force;
                this.experience = 85;
                this.level = 1;
                this.decrire =  function (){
                    document.write("je suis le valeureux guerrier " + this.pseudo +
                        " niveau " + this.level + " du monde de Narnia j'ai " + this.sante +
                        " de sante et ma force de combat est de " + this.force + "<br>");
                };
                this.attaquer = function (cible){
                    if(cible.sante <= 0){
                        document.write(cible.pseudo  +" est mort <br>");
                        this.experience += 15;
                        cible.sante = 0;
                    } else {
                        document.write(this.pseudo + " attaque " + cible.pseudo + " et lui inflige " + this.force + " de dégâts <br>");
                        cible.sante = cible.sante - this.force;
                    }
                    if(this.experience >= 100){
                        this.level += 1;
                        this.experience = 0;
                        document.write("Super notre héro a pris un level supplémentaire il est maintenant niveau : " + this.level + " son experience revient à 0<br>");
                    }
                    return cible.sante;
                };
            }
            var hero = new Personnage('Conan', 100, 85);
            var mechant = new Personnage('Troll', 30, 20);
            hero.decrire();
            document.write("au début de l'aventure le hero : " + hero.pseudo + " a " + hero.experience + "xp<br>");
            mechant.decrire();
            mechant.attaquer(hero);
            hero.attaquer(mechant);
            hero.attaquer(mechant);
            mechant.decrire();
            hero.decrire();
            
            
          






         