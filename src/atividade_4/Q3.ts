/*Desenvolva um programa que leia dois números inteiros e mostre qual deles é o maior, ou se são
iguais.*/

let nbr1 = Number(prompt("Insira um número"));
let nbr2 = Number(prompt("Insira outro número"));
if (nbr1 > nbr2) {
  alert(nbr1 + "é maior que" + nbr2);
} else if (nbr2 === nbr1) {
  alert("São iguais");
} else if (nbr2 > nbr1) {
  alert(nbr2 + "é maior que" + nbr1);
} else {
  alert("necessário inserir valor");
}
