/*Desenvolva um programa que calcule a média de altura de 5 pessoas. */
let alturas:number[] = []

for(let counter = 0;counter<=4;counter++){
    let alturaInserida = Number(prompt('Digite a sua altura(ex:1.90)'))
    alturas.push(alturaInserida)
   
}

let average = (alturas[0]+alturas[1]+alturas[2]+alturas[3]+alturas[4]) / 5
console.log(alturas[0])
console.log(alturas[1])
console.log(alturas[2])
console.log(alturas[3])
console.log(alturas[4])
console.log(average)
