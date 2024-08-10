/*Crie um programa que leia uma sequência de números inteiros do usuário
 e exiba quantos números pares e quantos números ímpares foram digitados.
  O programa deve parar de ler quando o usuário digitar o número 0 utilizando o while. */

  let nDigitado = -1  
  let numerosPares = 0
  let numerosImpares = 0

  while(nDigitado !== 0 ){
    nDigitado = Number(prompt('Digite uma sequencia de números inteiros.Envie "0" para encerrar a exec.')) 

    if(nDigitado%2==0){
        numerosPares++
    }else{
        numerosImpares++
    }

  }

  alert("Foram digitados "+numerosPares+" numeros pares e "+numerosImpares+"numeros impares")