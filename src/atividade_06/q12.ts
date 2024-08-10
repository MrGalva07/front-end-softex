/*Crie um programa que leia uma sequência de números inteiros do usuário e exiba a média dos
números digitados. O programa deve parar de ler quando o usuário digitar o número -1 utilizando
o while. */
let digitados:number[]=[]
let digitado:number = -2
let sum:number = 0
let avg:number = 0

do{

    digitado = Number(prompt('Digite quantos números inteiros quiser.Digite "-1" para encerrar'))
    if(digitado !== -1){
       digitados.push(digitado)
       sum += digitado
    }else {
        digitado = 0
        digitados.push(digitado)
        digitados.pop()
        sum += digitado
        digitado = -1
    }
         
    avg = sum / digitados.length
    


}while(digitado !== -1)



console.log(avg)