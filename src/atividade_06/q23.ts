/*Elabore um programa que leia uma sequência de números inteiros do usuário

 e exiba o menor valor digitado que seja positivo e ímpar. 

 O programa deve parar de ler quando o usuário digitar o número 0 utilizando o while. */

 let numero_usuario = -1
 let array:number[] = []
 let menor_valor = 0


 while(numero_usuario !== 0){
    numero_usuario = Number(prompt('Digite números. Digite 0 para encerrar a execução'))
    if(numero_usuario == 0){break}
    else if(numero_usuario > 0 && numero_usuario%2 !== 0){
        array.push(numero_usuario)
    }
}

menor_valor = Math.min(...array)
console.log(`O menor valor digitado positivo e ímpar é: ${menor_valor}`)

