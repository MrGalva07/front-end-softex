//Faça um programa que receba três números e os imprima em ordem crescente.

let firstNumber = Number(prompt("Insira um número"))
let secondNumber = Number(prompt("Insira um número"))
let thirdNumber = Number(prompt("Insira um número"))
if (firstNumber <= secondNumber && firstNumber <= thirdNumber) {
    console.log(firstNumber, secondNumber, thirdNumber);
} else if (secondNumber <= firstNumber && secondNumber <= thirdNumber) {
    console.log(secondNumber, firstNumber, thirdNumber);
} else {
    console.log(thirdNumber, firstNumber, secondNumber);
}
