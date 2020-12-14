/* 
    document.getElementById('div1').onClick = div1; ===> evenemtn sur l'objet sur l'objet. la fonction  
    déclarée plus loin 

    document.getElementById('div1').onblur = function() {monScript}
    
    document.getElementById('div1').addEventListener("blur", fonctionName);
    
    document.getElementById('div1').addEventListener("click", function(){monScript});

*/

document.getElementById('div1').addEventListener("click", div1);  
function div1(){
    alert('div 1 - clic sur la div1');
};

document.getElementById('div5').addEventListener("dblclick", div5); //dbl = doubleclick
function div5(){
    alert('div 5 - dblclick sur la div5');
};

// on peut aussi le noter de cette manière :
// document.getElementById('div1').addEventListener("click", div1); 
// document.getElementById('div5').addEventListener("dblclick", div5);
// function div1(){alert('div 1 - clic sur la div1');};
// function div5(){alert('div 5 - dblclick sur la div5');};

document.getElementById('div10').addEventListener("mouseover", div10); 
function div10(){alert('div 10 - mouseover sur la div10');}; 
// l'alert se déclenche au survol de la souris sur la div10

document.getElementById('div11').addEventListener("mouseout", div11); 
function div11(){ alert('div 11 - mouseout sur la div11');}; 
// l'alert se déclenche quand la souris  au survol sort de la div 11

document.getElementById('div15').addEventListener("mousedown", div15); 
function div15(){alert('div 15 - mousedown sur la div15');};
 // l'alert se déclenche lorsqu'on appuie sur le bouton de la souris sur la div

// document.getElementById('div15Bis').addEventListener("mouseup", div15Bis); 
// function div15Bis(){alert('div 15 Bis - mouseup sur la div15Bis');}; 
// // l'alert se déclenche lorsqu'on relache le bouton de la souris sur la div



// # blur & // # focus
document.getElementById('div2').addEventListener("blur", div2); 
// je cible et je click en sortant de mon élément

document.getElementById('div3').addEventListener("focus", div3); 
// je cible et je click dans mon élément pour déclencher l'alert
function div2(){alert('div2 - blur sur la div2');}; 
function div3(){alert('div3- focus sur la div3');}; 


// # submit
document.getElementById('div14').addEventListener("submit", function(event){
    event.preventDefault();  // stoppe le comportement par défaut qu'à un élément html
    alert('div14 - submit');
}); 



// # KEY

document.getElementById('div7').addEventListener("keydown", function(){
    var r = document.getElementById('div7');
    alert('div7- keydown' + r.Value);
});

document.getElementById('div8').addEventListener("keypress", function(){
    var r = document.getElementById('div8');
    alert('div8- keypress' + r.Value);
}); // s'active quand on appuie sur une touche


// le reste du code est à faire dans le même système



// Changer de style 
// document.getElementById('div1').style.background = "#08FF00"; // on passe au vert fluo

 //  et avec un événement
 document.getElementById('div1').addEventListener ('click',function(){
     var color = document.getElementById('div1');
    document.getElementById('div1').style.background = "#000";
 });

 