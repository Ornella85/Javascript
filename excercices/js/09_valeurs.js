// alert('hi');

var nb1 = Number(prompt("Entrez nb1 :"));

var nb2 = Number(prompt("Entrez nb2 :"));

var nb3 = Number(prompt("Entrez nb3 :"));


if (nb1 > nb2) { // non

nb1 = nb3 * 2; 

} else {

nb1++;

if (nb2 > nb3) {

nb1 = nb1 + nb3 * 3;

} else {

nb1 = 0;

nb3 = nb3 * 2 + nb2;

}

}

document.write(" Le nombre 1 vaut au final : " + nb1);
document.write(" Le nombre 2 vaut au final : " + nb2);
document.write(" Le nombre 3 vaut au final : " + nb3);

// Si les conditions sont respectées, la boucle se poursuit. Si elles ne sont respectées, la boucle s'arrête.

// 4 4 4
// Le nombre 1 vaut au final : 0  Le nombre 2 vaut au final : 4  Le nombre 1 vaut au final : 12

// 4 3 2
// Le nombre 1 vaut au final : 4  Le nombre 2 vaut au final : 3  Le nombre 3 vaut au final : 2

// 2 4 0
// Le nombre 1 vaut au final : 3  Le nombre 2 vaut au final : 4  Le nombre 3 vaut au final : 0