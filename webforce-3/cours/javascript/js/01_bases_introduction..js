
// ************   Commentaire, affichage, concaténation

/* Commentaire sur plusieurs lignes */
// Et sur une ligne

/* Se laisser des notes
   pour le partage d'informations
   structurer le code par ex
   ne pas en abuser
*/

// affichage 
   document.write("<h2>Commentaire, Affichage, Concaténation</h2>");

   // j'appel la méthode write de mon objet document pour écrire du h2
   // une méthode = une fonction
   // Objet = document ici
   // document.write = j'écris dans mon document html
   
   // il existe plusieurs "méthodes"

   console.log('Hello world');

   // console = j'écris dans la console
   // sert quand besoin de débugage ou en test de fonction


// Concaténation

    document.write('Bonjour ' + ' tout le monde');
    // '+' on concaténe

    // on va le voir également en php



// ************  Variables, constantes, type de données

document.write("<h2>Variables, Constantes, type de données</h2>");

// Variables 
     //qu'est ce qu'une variable ?
     // est un espace nommé, appelé mémoire, qui permet de conserver une valeur

     var monText = "Ornella";
     var monTableau = ["bateau","avion"];
     var age = 12;

     // valeur peut être une chaîne de caractère, un booléen, un tableau. Conserver une valeur
     // lorsqu'on la déclarer avec une variable, cette info va être garder en mémoire le temps de l'excution du script.

     // déclarer = var
     // on doit respecter la syntaxe : camelCase ou snake_case
     // OUI =  monAge, mon_age, age, age1
     // NON = MONage, Monage, MonAge, 1age, mon-age, /age, mon.age

     // on peut déclarer plusieurs variables
     var nom = "LALLIER", prenom = "Ornella", age = 15;

     document.write(nom);


     // ajouter un valeur sans écraser une valeur
     // prenom += "jack";

     //ex
     var fruits = "pomme";
     document.write('<br>' + fruits);
     fruits += "fraise";
     document.write('<br>' + fruits); //pommefraise


// Variable Constante
document.write("<h2>Variable Constante</h2>");
    // valeur qu'on ne peut pas modifier

    // on la déclare const MA_VARIABLE (convention de nommage)
    // elle est toute en majuscule

    // const MA_VARIABLE = 20;
    // const MAX = 199;

    // //ex modifier la constante MAX et l'afficher
    // MAX = 99;
    // document.write(MAX);
    // // message d'erreur dans la console à l'examination


    // Le type de données = une chaîne de caractère, un booléen, un tableau
    // Pour connaître le type de données :
    
    console.log(typeof age);
    console.log(typeof monText);
    console.log(typeof monTableau);

    // une constante n'est pas modifiable




// ************   LES OPERATEURS ARYTHMETIQUES
document.write("<h2>ES OPERATEURS ARYTHMETIQUE</h2>");

    // ADDITION
    var resultat = 10 + 5;
    document.write('<br>' + resultat); //15

    // SOUSTRACTION
    var resultat = 10 - 5;
    document.write('<br>' + resultat); //10

    // DIVISION
    var resultat = 10 / 5;
    document.write('<br>' + resultat); //2

    // MUTLPLICATION
    var resultat = 10 * 5;
    document.write('<br>' + resultat); //50


    // fruits += "fraise";
    // écriture simplifiée
    var a = 5;

    a += 9;
    // a = a + 9;
    // 5 = 5 + 9;
    document.write('<br>' + a); //14

      //  a *= 10;
      //  a -= 10;
      //  a /= 2;


// ************   LES OPERATEURS DE COMPARAISON
    document.write("<h2>LES OPERATEURS DE COMPARAISON</h2>");

    // > strict. supérieur
    // < strict. inférieur
    // >= sup. ou égal
    // <= inf ou égal
    // = affectation

    // == comparaison de VALEUR
    // === comparaison de VALEUR et de TYPE
    // != différent de.

    // && ET
    // || OU


    // CONDITIONS
    document.write("<h2>Conditions</h2>");
    // déclaration de 3 variables a, b, c, et dans un premier temps

    // je vais demander SI a est SUPERIEUR à b.
    var a = 99, b = 43, c = 22;

    if (a > b){
       //instruction (fait quelque chose) si a > b alors tu écris
       document.write('oui a est supérieur')
    }

   // SI a est SUP à b ET si b est SUP à c
    if(a > b && b > c){
      document.write('<br>' + 'VRAI');
     }

   // CONTRE EX à partir du moment que l'instruction est fausse, on n'a pas d'affichage
   //   if(a > b && b < c){
   //    document.write('VRAI');   ne fonctionne pas
   //   } 

   // SI a est SUP à b ou si b est INF à c
     if(a > b || b < c){
      document.write('<br>' + 'VRAI'); 
     }

   // CONTRE EX à partir du moment que l'instruction est fausse, on n'a pas d'affichage.
   //pour que ce soit le cas :
     if(a > b && b < c){
         document.write('<br>' + 'VRAI');   
        }  else{            // sinon
         document.write('<br>' + 'FAUX'); 
        }

// LES OPERATEURS DE COMPARAISON
       document.write("<h2>COMPARAISON DE VALEUR</h2>");

      var maVariable = 1, maVariable2 = "1";

      if(maVariable == maVariable2){
         document.write('<br>' + 'VRAI');   // même valeur 
      }

      if(maVariable === maVariable2){
         document.write('<br>' + 'VRAI');   // même valeur mais, ce n'est pas le même type
      } else{
         document.write('<br>' + 'FAUX' + '<br>');
      }

// CONDITION TERNAIRE
      var voiture = "bmw";
      document.write((voiture == 'bmw') ? 'oui' : 'non');
      // ? = if , : = else

// NaN = Not a Number
       var nombre = "toto";  // je déclare une variable dont la valeur est toto

       resultat = parseInt(nombre) + age;  // parseInt(nombre) force nombre a être un nombre ce qui n'est pas le cas. force le changement de type
       document.write('<br>'+ resultat);
       
       if(isNaN(nombre)){   // SI nombre n'est pas un nombre
          document.write('<br>'+'VRAI'); // alors écrit vrai
       } else {              // sinon tu affiches faux
          document.write('FAUX');
       }

       
       if(!isNaN(nombre)){   // SI ce n'est pas nombre n'est pas un nombre. Je demande en fait si c'est un nombre
          document.write('<br>'+'VRAI'); // alors écrit vrai
       } else {              // sinon tu affiches faux
          document.write('<br>'+'FAUX');
       }

       // !isNaN le contraire si nombre est un nombre. SI c'est un nombre affiche vrai


// Déclarer une variable age ensuite verifier SI l'âge saisi de l'utilisateur (vous) est majeur OU mineur
       
       var age = 35;
      
       if(age > 18){
         document.write('<br>'+'Tu es majeur'); 
       } else{
         document.write('<br>'+'Tu es mineur'); 
       }

// Déclarer et afficher une constante
       const MAVARIABLE = 99;
       document.write('<br>'+ MAVARIABLE);

// Déclarer une variable de type string et afficher son type dans la console
      var prenom = 'Juliette';
      document.write('<br>'+ typeof prenom);

// Écrire une condition ternaire qui vérifie SI 2 est plus petit que 4

        var a = 2;
        var b = 4;
        document.write((a < b) ? '<br>'+ 'oui' : 'non');

        document.write((2 < 4) ? '<br>'+ 'oui' : 'non');

//  Écrire une variable nombre qui a pour valeur 10 et vérifier que nombre est bien "number"
// deux solutions possible
         var nombre = 10;
         document.write('<br>'+ typeof nombre);
         
         var nombre = 10;
         if(typeof nombre == 'number'){
            document.write('<br> nombre est de type number');
         }

         if(!isNaN (nombre)){
            document.write('<br>'+ 'VRAI' + '<br>');
         } else{
            document.write('<br>'+ 'FAUX' + '<br>');
         }

// calculer le prix HT de ma PS5 à 499.99€ et afficher le resultat (la TVA est à 19.6%) (le prix est 597.98€ TTC)
           var prixHt = 499.99;
           var ttc = prixHt * 0.196; // 97.99
           var resultat = ttc + prixHt;
           document.write('<br>Le prix HT de la PS5 est de ' + prixHt + '€  et de ' + resultat + '€ en TTC ');

           var prix = 499.99;
           var tva = 19.6;
           var ttc = 0;

           tva = prix * (tva / 100);
           ttc = prix + tva;
           document.write('<br>Le prix HT de la PS5 est de ' + prix + '€  et de ' + resultat + '€ en TTC ');

// condition Switch
           var couleur = "jaune";

           switch(couleur)
           {
              case 'bleu':
                 document.write('Vous aimez le bleu');
                 break;

                 case 'rouge':
                 document.write('Vous aimez le rouge');
                 break;

                 case 'rose':
                 document.write('Vous aimez le rose');
                 break;

                 case 'jaune':
                 document.write('<br>Vous aimez le jaune');
                 break;

                 default:
                 document.write('Vous aimez aucune couleur');
                 break;
           }


           var age = 19;
           switch(age)
           {
              case age >= 18:
                 document.write('Vous êtes majeur');
                 break;

                 case age < 18:
                 document.write('Vous êtes mineur');
                 break;

                 default:
                 document.write('Troll');
                 break;
           }

            // var age = prompt("veuillez saisir un age");
            // console.log("le type d'age est : " + typeof age);

            // var age = parseInt(prompt("veuillez saisir un age"));
            // console.log("le type d'age est : " + typeof age);

// SI le nombre saisie est bien un "number"
// vérifier si l'utilisateur est majeur ou mineur

            if(!isNaN(age)){
               if(age >= 18){
                  document.write('<br>'+ 'majeur');
               } else {
                     document.write('<br>'+ 'mineur');
                  }  
               } 
             
            
            if(!isNaN(age)){
               if(age >= 18){
                  document.write('<br>'+ 'majeur');
               } else {
                  if(age < 18){
                     document.write('<br>'+ 'mineur');
                  }  
               } 
            }  else {
               document.write('<br>'+ 'n\'est pas un nombre');
            }



// LES BOUCLES
document.write("<h2>LES BOUCLES</h2>");
          var a = 10;
          for (var i = 0; i < a; i++){  
             // i = indice de départ, à combien je commence.
             // i < a condition, tant qu'elle est vrai la boucle se poursuit
             // i++ = incrémentation c à d ajout 1 à chaque tour
            document.write('<br> Je suis le tour n°' + i + '<br>');
          }

          var b = 0;
          for (var i = 10; i > b; i--){ 
            // i-- = décrémentation c à d ajout 1 à chaque tour
           document.write('<br> Je suis le tour n°' + i + '<br>');
         }

         var j = 0;
         while(j < a){
            document.write('<hr><br> Je suis le tour n°' + j + '<br>');
            j++;
         }

         var k = 0;
         do{
            document.write('<hr><br> Je suis le tour K n°' + k + '<br>');
            k++;
         } while(k > a);     // fait tant que K est sup a il excute une fois et verifie la condition ensuite



// LES TABLEAUX
document.write("<h2>LES TABLEAUX / ARRAY</h2>");
      
           var liste_fruits = ['banane', 'orange', 'framboise', 'fraise','poire', 'kiwi', 'cerise'];
         //   document.write(liste_fruits.join(" ") + "<br>");

         //   document.write(liste_fruits[0]);
         //   console.log(liste_fruits);

           for (var i = 0; i < liste_fruits.length; i++){
            document.write(liste_fruits[i] + '<br>');
           }


           document.write('Boucle while <br>');
           var k = 0;
           while (k < liste_fruits.length){
            document.write(liste_fruits[k] + '<br>');
            k++;
           }



// Tableau multi-dimensionnel
document.write("<h2>TABLEAU multi-dimensionnel</h2>");

         var liste_fruits2 = [['fraise','pomme', 'kiwi'],['tomate','mangue'], ['Pierre', 'Paul', 'Jack']];
         document.write(liste_fruits2[0]); // correspond au 1er au tableau
         document.write(liste_fruits2[0][0]); // fraise le second zero va chercher dans le second tableau
         document.write(liste_fruits2[0][1]); //pomme
         document.write(liste_fruits2[1][0]); //tomate
         document.write(liste_fruits2[1][1]); //mangue

         for(var i = 0; i < liste_fruits2.length; i++) // i parcourt tout le tableau
         {
            for (var j = 0; j < liste_fruits2[i].length; j++) // j parcourt les éléments du tableau
            {
               document.write('<br>' + liste_fruits2[i][j]);
            }
         }

// Déclarer une liste de prénom minimum 10 prénoms
// 1er exercice : afficher un message de bienvenue lorsque vous avez un 'Pierre' dans votre liste de contact
// 2eme étape : afficher le nombre de 'Pierre' présent dans votre tableau

         var prenom = ['Charles','Pierre','George','Marc','Pierre','Antoine','Julia','Marine','Laura','Étienne','Pierre','Paula'];
         var compteur = 0; // 2sd excercice

          for(var m = 0; m < prenom.length; m++)
          {    
             if(prenom[m] == 'Pierre'){
               document.write('<br> Bienvenue ' + prenom[m]);
               compteur++; // 2sd excercice
             }
          } 
          document.write('<br>' + ' J\'ai ' + compteur + " Pierre dans mon tableau"); // 2sd excercice



          // Exercice Sonia
         //  alert("Hello et bienvenue !");
         //  // Cette ligne génère aléatoirement un nombre entre 1 et 100
         //  var solution = Math.floor(Math.random() * 100) + 1;
         //  // TEST pour mieux vérifier le programme
         //  console.log("(La solution est " + solution + ")");
         //  for (var i = 1; i <= 6; i++) {
         //      nbJoueur = parseInt(prompt("Le but du jeu est simple. Je pense à un nombre entre 0 et 100. A ton avis, quel est ce nombre ? Notes le dans la zone ci-dessous, tu as 6 essais."));

         //      if (!isNaN(nbJoueur)) { // si c'est bien un  nombre

         //          if (solution === nbJoueur) { // 1ere condition si elle est trouvée :
         //              alert("Bravo vous avez trouvé !");
         //              i = 6; // donc la boucle s'arrête au bout de 6 tours

         //          } else {  // sinon
         //              if (solution < nbJoueur) { // s'il n'a pas trouvé la solution 
         //                  alert("Le nombre est plus petit, essai " + i + " sur 6");
         //              } else {
         //                  alert("Le nombre est plus grand, essai " + i + " sur 6");
         //              }
         //          }
         //      } else { // si l'utilisateur saisie une chaine de caractere
         //          alert("Vous n'avez pas saisi un nombre !");
         //      }
         //  }


// Boucle FOR demandez l'âge de l'utilisateur tant que celui-ci n'est pas majeur
         //    var i;
         //    for (i = 0; i < 1 ; i++) // ne fonctionne qu'à condition d'enlever l'incrémentation
         //    {
         //    age = prompt('Veuillez saisir votre âge');

         //    if(age >= 18){
         //       document.write('<br>'+ 'majeur');
         //       break;
         //   } 
         // }
            
           
// Boucle WHILE demandez l'âge de l'utilisateur tant que celui-ci n'est pas majeur
            //  var age;
            //  while (true)
            //  {
            //    age = prompt('Veuillez saisir votre âge');
            //     if(age >= 18){
            //       document.write('<br>'+ 'je suis majeur');
            //       break;
            //   } 
            //  } 
            

// Boucle DO WHILE demandez l'âge de l'utilisateur tant que celui-ci n'est pas majeur
               // do{
               //    age = prompt('Veuillez saisir votre âge');
               //    if(age >= 18){
               //       document.write('<br>'+ ' je suis majeur');
               //       break;
               //     }
               //   }while(true) // pour que la condition s'excute , il faut que la condition soit vrai.


// FONCTIONS UTILISATEURS ET PREDEFINIES
document.write("<h2>FONCTIONS UTILISATEURS ET PREDEFINIES</h2>");
    
    // FONCTION sans paramètre
         // document = objet  et write le methode est la fonction

         var phrase = "BONSOIR";
         document.write(phrase.toLowerCase() + "<br>"); //bonsoir
         // j'appelle une fonction à travers ma variable phrase . toLowerCase()
         // phrase est une variable qui posséde des propriétés
         // phrase est un objet type string

         // le . appelle la fonction

         // Fonction utilisateur = nous la créons. elle va faire quelque chose : exécuter une fonction

         // pour déclarer une fonction et je donne un nom/ variable :
         function afficher(){ 
         return document.write('Hello World' + "<br>");
         }
         // pour afficher, il faut appeller la fonction
         afficher();
         // est une fonction sans paramètres

   // FONCTION avec un paramètre
         function d(arg){  //la fonction d attend un argument
         document.write(arg + "<br>");
         }
         d("Salut Ya"); // l'argument est entre " "
         d("Salut Rachid");
         d(2);
         d("salut " + "salut");
      
   // RETURN
         function toto(){ // renvoi d'une fonction vide
         var a = 1;
         return a; // retour de la valeur
      }
      document.write(toto());
      
      var b = toto();
      document.write("<br>" + b);

      function plusieursParam(prenom , nom, age){  // renvoi d'une fonction avec des paramètres
         document.write("<br> bonjour" + prenom + " " + nom+ " Tu as " + age);
      }
       plusieursParam(" YaYa", "JuJu", 32);
       plusieursParam(" Sam", "JO", 22);

// Déclarer une fonction qui calcule le prix d'un article
// TVA = 19.6
// prixTtc (399)  ---> 477,204

// prixTtc (14.99) ---> 14.99 + TVA = 17.92804

//Afficher le prix arrondi à 2 chiffres après la virgule. Il existe une fonction prédéfinie (à chercher sur google)   Math.round()

         // function prixArticle(){
         //    var tva = 19.6;
         //    var prixHt = 399;
         //    var tvaTaxe = prixHt * 19.6 / 100;
         //    var prixTtc = tvaTaxe + prixHt;
         //    prixTtc = Math.round(prixTtc * 100) / 100;
         //    return prixTtc;
         // }
         // document.write("<br>" + prixArticle());

         // //CORRECTION
         // function prixTTC(prix)
         // {
         //    var prixTTC = prix * 1.196;
         //    return Math.round(prixTTC * 100) / 100;
         // }
         // document.write("<br>" + prixTTC(399));
         // document.write("<br>" + prixTTC(14.99));




         //  var maFonction = function() {
         //     document.write('nous sommes jeudi');
         //  }
         //  maFunction();

// Autre façon de déclarer : IIFE Immediately Invoked Function Expressions
          (function(){
             document.write('<br> cette fonction est anonyme et automatiquement executé');
          })();

// Locale ou Globale : Portée des variables
           var animal = "chien";  // portée de la variable en locale
           function test(){
              document.write(animal + "<br>");
           }
           test();
           

           function test2(){ // sans var, ici portée globale
              animal2 = "chat"; // variable dans la fonction
              document.write(animal2 + "<br>");
           }
           test2();
           document.write(animal2 + "<br>");




// Les objets
document.write("<h2>OBJECT</h2>");

// En js, tout est objet

      var monObjet = {}; // déclaration de l'objet
      monObjet.prenom =  'Ya';// Insérer des valeurs à mon objet a qui j'assigne l' attribut prenom
      monObjet.nom =  'YA';

      document.write(monObjet.prenom + "<br>"); //pour afficher le prenom


      var Homme = {
         nom : 'Winter', // virgules pour séparer les propriétés/ Attributs
         prenom : 'Thomas', // : pour affecter une valeur à ma variable
         age : 35     // pas de virgule
      }; 

      document.write(Homme.prenom); // première lettre de l'objet Masjuscule

      // Déclaration d'une class
      function MaClass(){};


      // Exemple
       var Voiture ={
          marque : 'mercedes',
          modele : 'classe A',
          couleur : 'noir',
          changeDeCouleur : function(nouvelle){ // j'ajoute une couleur grâce à une fonction
             return this.couleur = nouvelle; // this représente voiture, . couleur représente la variable couleur
          },

          optionsDeSerie : ['clim', 'autoradio', 'park-assist'], // on peut insérer un tableau
          annee : 2020,
          motorisation : {   // et un objet dans un objet
             energie : 'diesel',
             puissance : '110cv'
          }
       };  // {} déclarer un objet

       document.write(Voiture.couleur + "<br>"); //noir

       Voiture.changeDeCouleur('rose'); 
       document.write(Voiture.couleur + "<br>"); //rose
       document.write(Voiture.optionsDeSerie[0]); //clim
       document.write(Voiture.motorisation.energie + "<br>"); //diesel

       //afficher toutes les proprietes de mon objet, on utilise une boucle

       // element : Element est la classe de base la plus générale à partir de laquelle tous les objets d'un Document héritent. Il n'a que des méthodes et des propriétés communes à tous les types d'éléments. Les classes plus spécifiques héritent d'Element.
       for (var element in Voiture){
          document.write(element + ":" + Voiture[element] + "<br>");

          if(typeof Voiture[element] === "object"){
             for(var elementB in Voiture.motorisation){
                document.write(elementB + ":" + Voiture.motorisation[elementB] + "<br>");
             }
          }
       }


        function Animal(nom, espece, categorie, age){
           this.nom = nom;
           this.espece = espece;
           this.categorie = categorie;
           this.age = age;
        }

        var dauphin = new Animal('Flipper', 'Dauphin', 'Mammifere', '3'); // dans l'ordre indiqué dans la fonction.
        document.write(dauphin.nom); //Flipper


        function Contact(nom, prenom, adresse, age){
         this.nom = nom;
         this.prenom = prenom;
         this.adresse = adresse;
         this.age = age;
        }
      var contact1 = new Contact('Ya', 'YAya', '36 rue corneille', 32 );
        document.write("<br>" + contact1.adresse);


// PROTOTYPAGE : ajouter une fonction à un objet

       function Vehicule(marque){
          this.marque = marque;
       }

       var megane = new Vehicule('renault'); // j'ajoute une fonction

       megane.demarrer = function(){ // j'utilise cette fonction
          document.write('<br> vroom vroom je démarre <br>')
       }

       megane.demarrer(); 
      




            
































    










