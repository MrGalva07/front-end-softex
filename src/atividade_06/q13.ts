/* Faça um programa que leia um número inteiro e exiba a soma dos seus dígitos elevados ao cubo
utilizando o while.*/

let digitos = String(prompt("digite um número inteiro com no mínimo dois digitos"))
let digitosDivididos = digitos.split('')
let somaDigitos = 0
let contando = 0


while(contando<digitosDivididos.length){
    let digitosConvertidos = Number(digitosDivididos[contando])
    somaDigitos += digitosConvertidos * digitosConvertidos * digitosConvertidos
    contando++
}

console.log(somaDigitos)