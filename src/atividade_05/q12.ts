/* Elabore um programa que calcule a soma dos números de 1 a 100.*/

function soma1a100() {
  let soma = 0;
  for (let i = 1; i <= 100; i++) {
    soma += i;
  }
  return soma;
}

let resultado = soma1a100();
console.log(`A soma dos números de 1 a 100 é: ${resultado}`);
