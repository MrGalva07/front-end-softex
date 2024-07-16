// 39. Peça ao usuário para digitar a sua idade e, em seguida, informe quantos meses e quantos dias ele já viveu (considerando um ano com 365 dias).
let idade = Number(prompt("Digite a sua idade: "));
let meses = idade * 12;
let dias = 365 * idade;

console.log(`Você já viveu ${meses} meses.`);
console.log(`Você já viveu ${dias} dias.`);