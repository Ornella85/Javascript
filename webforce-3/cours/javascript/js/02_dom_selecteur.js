
/* 
 *********   DOM ********* 

 Document Object Model
 c'est la page HTML
 l'idee est de manipuler ou modifier le document
 pour le faire: 
 1 - apprentissage du sélecteur (cmt sélectionner un élément
 2- l'événement (sur quel événement on va déclencher cette sélection
 3- la manipulation (cmt faire des opérations, modifications etc.
*/


// # SELECTION ById

var monId = document.getElementById('maSection'); // attention à la casse bien vérifier l'orthographe
console.log('monId :  ' + monId); // affiche le type de Id : on accède à l'object html
console.log('monId : ' + monId.innerHTML); // correspond au contenu de ma section. InnerHtml est un attribut qui permet d'afficher le contenu de ma balise.


// # SELECTION ByTagName

var maBalise = document.getElementsByTagName('span'); // attention il y a un S à element de cette fonction
console.log('maBalise:  ' + maBalise); // pour le span c'est un objet de la collection html
console.log('maBalise: ' + maBalise[0].innerHTML);  // collection html => il peut y avoir plusieurs éléments span

// # SELECTION ByClasseName
var mesClasses = document.getElementsByClassName('avion');
console.log("typeof : " + typeof mesClasses); // type de classes mon élément     /object
console.log("mes classes : " + mesClasses); // affiche l'ensemble de mesClasses     /html collection
console.log('mes classe[0] : ' + mesClasses[0].innerHTML); // affiche seulement le 1er élément /AirBus1

var i;
for(i = 0; i < mesClasses.length; i++)
{
    console.log(" boucle " + i + " : " + mesClasses[i].innerHTML);
}

// # SELECTION querySelector
var p = document.querySelector('p');
console.log('querySelector : ' + p.innerHTML); // affiche et a sélectionné le 1er paragraphe

// # SELECTION querySelectorAll
var lesP = document.querySelectorAll('p');
console.log('querySelectorAll : ' + lesP[0].innerHTML); // affiche et a sélectionné tous les paragraphes
console.log('querySelectorAll : ' + lesP[1].innerHTML); // récupére les éléments de tout le tableau

                                 
