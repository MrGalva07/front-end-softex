/*Elabore um programa que leia três notas de um aluno e calcule a média. Em seguida, exiba se o
aluno está aprovado (média maior ou igual a 7) ou reprovado. */

let nota1 = Number(prompt("Digite sua primeira nota"));
let nota2 = Number(prompt("Digite sua segunda nota"));
let nota3 = Number(prompt("Digite sua terceira nota"));
let avg = (nota1 + nota2 + nota3) / 3;
if (avg >= 7) {
  alert("Aluno aprovado");
} else {
  alert("Aluno reprovado");
}
