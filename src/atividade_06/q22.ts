/* Desenvolva um programa que leia uma sequência de números inteiros do usuário e
 exiba a média dos números que estão entre 50 e 100. 
 O programa deve parar de ler quando o usuário digitar o número 0 utilizando o while.*/

 let insertNumber = -1
 let intervalSum = 0
 let intervalAvg = 0
 let intervalArray:number[] = [] 
 

 while(insertNumber !== 0){
    insertNumber = Number(prompt('Digite números. Digite 0 para encerrar a execução'))
    if(insertNumber == 0){break}
    else if(insertNumber > 50 && insertNumber <100){
        intervalArray.push(insertNumber)
        console.log("Digitou entre 50 e 100")
        intervalSum += insertNumber
        
    }
    intervalAvg = intervalSum/intervalArray.length



 }

 console.log(`a média dos números digitados que estão entre 50 e 100 é :  ${intervalAvg}`)