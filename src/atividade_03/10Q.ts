//Peça ao usuário que insira o seu ano de nascimento e, em seguida, exiba a sua idade.

const ANOATUAL = 2024;
var anoNasc = Number(prompt("Digite aqui o ano em que você nasceu"));
var idade:number = ANOATUAL - anoNasc;
alert("Você tem " + idade + "anos.")