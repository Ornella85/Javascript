// alert("hello");

/* var prix = prompt("Entrez votre montant en HT");
var ht = Number(prix);
var tva = ht * 1.2;
console.log('Votre montant en TTC est de = ' + tva + '€');


document.write('Votre montant en TTC est de = '+ tva + "€"); */

// correction
var horsTaxe = prompt("Entrez votre montant Hors Taxes : ");

ttc = horsTaxe * 1.2;

document.write('<h2>Le prix ttc de ' + horsTaxe + ' est de : ' + ttc + '€ </h2>');

