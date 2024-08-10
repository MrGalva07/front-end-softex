/*Crie um programa que leia uma sequência de números inteiros do usuário e exiba o maior e o
menor valor digitado. O programa deve parar de ler quando o usuário digitar o número 0
utilizando o while. */

let numeroDigitado = -1;
let numerosDigitados: number[] = [];
let maiorNumero = Number(" ");
let menorNumero = Number(" ");

do {
  numeroDigitado = Number(prompt("Digite números.Digite 0 se quiser parar"));
  numerosDigitados.push(numeroDigitado);

  if (numeroDigitado == 0) {
    numerosDigitados.pop();
  }
  
  console.log(numerosDigitados);


  maiorNumero = Math.max(...numerosDigitados);
  menorNumero = Math.min(...numerosDigitados);


} while (numeroDigitado !== 0);

console.log(`O maior número é ${maiorNumero} e o menor é ${menorNumero} `);
