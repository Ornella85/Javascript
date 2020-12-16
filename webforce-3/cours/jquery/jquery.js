/* ****** JQUERY ****** */

// est une bibliothèque Javascript
// ensemble de fonctions qui permettent d'écrire de manière condensée les lignes de code les + utilisées.

// JS : document.getElementByTagName('li')[0}.innerHTML = "Lait";
// JQuery : $("li:first").text('lait');

// "write less do more"


// Intégrer Jquery
// copie locale : <script scr ='chemeint_vers_votre_fichier_jquery.js' type="text/javascript"></script>
// serveur public (google) :          (   https://developers.google.com/speed/libraries   )
//                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>


// Emplamcent pour l'appel à JQuery
// voir page html liée

//Manipulations possibles à faire en jQuery
// https://api.jquery.com/category/manipulation/

// Les effets 
// https://learn.jquery.com/effects/intro-to-effects/

// les méthode peuvent être utilisées les unes à la suite des autres

btn.click(function(){
    $('#monImage').attr('src', 'screen-corrections/chat-161132.jpg');
});