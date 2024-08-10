/* Desenvolva um programa que leia uma sequência de números inteiros do usuário

e exiba a média dos números divisíveis por 3.

O programa deve parar de ler quando o usuário digitar o número 0 utilizando o while.*/

let nd = -1
let divisiveis3:number[] =[]
let somad3 = 0
let mediad3 = 0

while(nd !== 0 ){
    nd = Number(prompt('Digite números.Digite 0 para encerrar a execução'))
    if(nd == 0){break} 
    else if(nd %3 == 0 ){
        divisiveis3.push(nd)
        somad3 += nd
    }


}
mediad3 = somad3/divisiveis3.length
console.log(mediad3)