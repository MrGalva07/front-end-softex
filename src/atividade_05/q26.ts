/*Faça um programa que leia um número inteiro e exiba o número invertido. Por exemplo, se o
número lido for 123, o programa deve exibir 321.*/


const numero = Number(prompt("Digite um número inteiro:"));

// Converte o número para uma string e inverte a ordem dos caracteres
const numeroInvertido = Number(numero.toString().split("").reverse().join(""));


console.log(`O número invertido é: ${numeroInvertido}`);
