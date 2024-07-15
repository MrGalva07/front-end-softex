/*Receba dois números inteiros do usuário e exiba a soma, a diferença, o produto e o quociente
(divisão inteira) entre eles. */

const firstNumber = Number(prompt("Escreva o primeiro número"))
const secondNumber = Number(prompt("Escreva o segundo número"))
const sum = firstNumber + secondNumber
const difference = firstNumber - secondNumber
const product = firstNumber * secondNumber
const quotient = firstNumber / secondNumber
alert("A soma é" +sum+ ",a diferença é" +difference+ ", o produto é" +product+ " e o quociente é "+ quotient)
