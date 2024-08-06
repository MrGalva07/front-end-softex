/*Elabore um programa que leia um número inteiro e exiba todos os seus divisores. */
// Solicita ao usuário que digite um número inteiro
let nmr = Number(prompt("Digite um número inteiro:"));


for (let i = 1; i <= numero; i++) {
    if (numero % i === 0) {
        console.log(i); // Exibe os divisores
    }
}
