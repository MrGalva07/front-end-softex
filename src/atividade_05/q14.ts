/*Faça um programa que calcule o produto dos números de 1 a 5.*/

function produto() {
  let produto = 0;

  for (let numero = 0; numero <= 5; numero++) {
    produto += numero;
  }
  return produto;
}

let result = produto();
console.log(`o produto dos números de 1 a 5 é :${result}`);
