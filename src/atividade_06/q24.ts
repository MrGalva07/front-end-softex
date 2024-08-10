/* Faça um programa que leia uma sequência de números inteiros do usuário e

 exiba quantos números são pares e quantos números são ímpares entre o primeiro e o último número digitado.

O programa deve parar de ler quando o usuário digitar o número 0 utilizando o while.*/

let iDgit = -1 
let Par= 0
let Impar=0



while (iDgit !== 0) {

    if(iDgit == 0){break}
    else if(iDgit %2==0){
       Par++

    }else{
        Impar++
    }

}


console.log(`Foram digitados ${Par} pares e ${Impar} ímpares`)