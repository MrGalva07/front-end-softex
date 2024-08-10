/* Elabore um programa que leia uma sequência de números inteiros do usuário

e determine quantos números pares foram digitados antes do primeiro número ímpar.

O programa deve pararde ler quando o usuário digitar o número 0 utilizando o while.*/

let inteiro = -1
let contaPar = 0

do{
    inteiro=Number(prompt("Digite um número.Digite 0 se quiser parar"))

    if (inteiro === 0) {
        break;
    }

    if(inteiro %2==0){
        contaPar++
    }else{
        
        break
    }


}
while( inteiro != 0 )

    console.log(`Digitou ${contaPar} pares antes do primeiro ímpar`)