/*Faça um programa que leia uma sequência de números inteiros do usuário
 e exiba quantos números possuem mais de três dígitos. 
 O programa deve parar de ler quando o usuário digitar o número 0 utilizando o while. */


 let numberDigitado = -1;
let ct = 0;

while (numberDigitado !== 0) {

    numberDigitado = Number(prompt('Digite números. Digite 0 para encerrar a execução'));
    
    if (numberDigitado !== 0 && Math.abs(numberDigitado) > 999) {
        ct++;
    }
}

console.log(`Quantidade de números com mais de três dígitos: ${ct}`);
