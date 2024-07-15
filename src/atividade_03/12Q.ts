//Solicite ao usuário uma sequência de números separados por espaço e exiba quantos números foram digitados.

const numbers = prompt("Digite qualquer quantidade de números separados por espaço")
const numerosSeparados = numbers?.split(" ")
console.log(numerosSeparados)
alert("Foram digitados " + numerosSeparados?.length + " números")
