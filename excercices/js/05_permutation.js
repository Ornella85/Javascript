// alert("hi");

/* var nombre1 = 5;

var nombre2 = 3;

nombre3 = nombre1;

nombre1 = nombre2;

nombre2 = nombre3;

console.log(nombre1);

console.log(nombre2);

*/


/* var nombre1 = 5;

var nombre2 = 3;

[nombre1, nombre2] = [nombre2, nombre1];

console.log(nombre1);
console.log(nombre2);

*/

/* var nombre1 = 5;

var nombre2 = 3;

nombre2 = [nombre1, nombre1 = nombre2][0];

console.log(nombre1);
console.log(nombre2);

*/

/* var nombre1 = 5;
var nombre2 = 3;

nombre1 = nombre2 + nombre1;
nombre2 = nombre1 - nombre2;
nombre1 = nombre1 - nombre2;

console.log(nombre1);
console.log(nombre2);
*/

/* let nombre1 = 5;

if (nombre1 === 5){
    let nombre1 = 3;
    console.log(nombre1);
}

let nombre2 = 3;

if (nombre2 === 3){
    let nombre2 = 5;
    console.log(nombre2);
}
*/

// correction

var nombre1 = 5;
var nombre2 = 3;
document.write("<h2>nombre1 = " + nombre1 + ".</h2>");
document.write("<h2>nombre2 = " + nombre2 + ".</h2>");

var temp = nombre1;
nombre1 = nombre2;
nombre2 = temp;

document.write("<h2>nombre1 = " + nombre1 + ".</h2>");
document.write("<h2>nombre2 = " + nombre2 + ".</h2>");