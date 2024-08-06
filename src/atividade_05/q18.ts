/* Crie um programa que leia 10 números do usuário e exiba o maior e o menor valor digitado.*/
let maior = 0;
let menor = 0;

for (let i = 0; i < 10; i++) {
    let num = Number(prompt("Digite um número:"));
    if (!isNaN(num)) {
        maior = Math.max(maior, num);
        menor = Math.min(menor, num);
    }
}

console.log(`O maior número é ${maior} e o menor número é ${menor}.`);
