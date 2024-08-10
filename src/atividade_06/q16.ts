/*Crie um programa que leia 5 notas de alunos e exiba quantos deles foram aprovados (nota maior
ou igual a 7) utilizando o while. */

let qalunos = 5
let notassAprovadas:number[] =[]
let notassReprovadas:number[] =[]
let notaadigitada = 0

while(qalunos<5){
    notaadigitada = Number(prompt("Digite a nota"))
    
    if(notaadigitada>=7){
        notassAprovadas.push(notaadigitada)
    }else{
        notassReprovadas.push(notaadigitada)
    }
}

console.log(`Foram aprovadas ${notassAprovadas.length}:${notassAprovadas} notas e foram reprovadas ${notassReprovadas.length}:${notassReprovadas} notas`)