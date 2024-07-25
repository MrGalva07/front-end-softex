/*Elabore um programa que calcule o IMC (Índice de Massa Corporal) de uma pessoa, dado o peso e
a altura. Em seguida, exiba se a pessoa está abaixo do peso, com peso normal, com sobrepeso,
obesa ou muito obesa. */

let altura = Number(prompt("Digite sua altura"));
let peso = Number(prompt("Digite seu peso"));
let imc = peso / (altura * altura);
let resultado = imc.toFixed(2);
alert(resultado)
if (imc < 18.4) {
    alert("Abaixo do peso");
} else if (imc >= 18.5 && imc < 24.9) {
    alert("Peso normal");
} else if (imc >= 25 && imc < 29.9) {
    alert("Sobrepeso");
} else if (imc >= 30 && imc < 34.9) {
    alert("Obesidade");
} else if (imc >= 35) {
    alert("Muito obeso");
} else {
    alert("Erro");
}