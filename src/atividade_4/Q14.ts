/*Elabore um programa que leia um número inteiro de 1 a 5 e exiba a mensagem "Muito bom",
"Bom", "Regular", "Insuficiente" ou "Muito insuficiente", de acordo com o valor lido, utilizando
switch/case.*/
let ni = Number(prompt('Escreva um número inteiro de 1 a 5'))
switch (ni) {
    case 1:
        console.log('Muito bom')
        break
    case 2:
        console.log('Bom')
        break
    case 3:
        console.log('Regular')
        break
    case 4:
        console.log('Insuficiente')
        break
    case 5:
        console.log('Muito insuficiente')
        break
        default:
        break;
}

