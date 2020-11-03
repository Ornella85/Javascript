// alert("test")

var a = 2;
a = a - 1; // le résultat devrait être 1
console.log("var a doit être égal à 1: " + a);


a++; // on ajoute 1 au précédent
console.log('Le résultat de "a = a - 1;" est égale à ' + a);
     // document.write(a++);

var b = 8;
b += 2;
console.log('Le résultat de "b += 2;" est égale à ' + b);
    // document.write(b);

var a = 2;
var b = 10;
var c = a + b * b;  
console.log('le résultat de "var c = a + b * b;" est égale à '+ c);

var a = 2;
var b = 10;
var d = a * b + b;
console.log('le résultat de "var c = a * b + b;" est égale à '+ d);


var a = 2;
var b = 10;
var e = a * (b + b);
console.log('le résultat de "var e = a * (b + b);" est égale à '+ e);


var a = 2;
var b = 10;
var f = a * b / a;
console.log('le résultat de "var f = a * b / a;" est égale à '+ f);


var a = 2;
var b = 10;
var g = b / a * a;
console.log('le résultat de "var g = b / a * a;" est égale à '+ g);
