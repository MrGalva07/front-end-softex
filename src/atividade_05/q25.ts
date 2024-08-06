/* Elabore um programa que leia um número inteiro e exiba a soma dos dígitos pares desse número.*/

let numeroInserido = Number(prompt('Digite um número inteiro:'));
let soma = 0;
let numeroString = numeroInserido.toString(); // Converte o número para uma string

for (let i = 0; i < numeroString.length; i++) {
    const digito = Number(numeroString[i]); // Converte cada dígito para um número inteiro
    if (digito % 2 === 0) {
        soma += digito; // Adiciona o dígito à soma se for par
    }
}

console.log(`A soma dos dígitos pares de ${numeroInserido} é ${soma}.`);
