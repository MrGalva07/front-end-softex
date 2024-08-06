/*Crie um programa que leia 5 notas de alunos e exiba quantos deles foram aprovados (nota maior
ou igual a 7). */

let notas = [];

for (let c = 0; c <= 4; c++) {
    let notaInserida = Number(prompt('Digite sua nota'));
    if(notaInserida >=7 ){
    notas.push(notaInserida);
    }  
   
}

console.log(`somente ${notas.length} aluno(s) foram aprovados `);


