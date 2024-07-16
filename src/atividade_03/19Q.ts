// 19. Receba a altura e o peso de uma pessoa digitados pelo usuário. Em seguida, calcule o seu índice de massa corporal (IMC) utilizando a fórmula: IMC = peso / (altura * altura) e exiba o resultado. 20. Peça ao usuário que digite o seu nome e verifique se ele contém mais de 5 caracteres.

let peso = Number(prompt('Digite o seu peso: '));
let altura = Number(prompt('Digite o seu altura: '));
let imc: number = peso/(altura**2);
console.log(`O seu IMC é: ${imc.toFixed(2)}`);