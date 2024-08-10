/*Faça um programa que leia uma sequência de números inteiros do usuário
 e exiba quantos números são divisíveis por 2, quantos são divisíveis por 3 e quantos são divisíveis por 5.
O programa deve parar de ler quando o usuário digitar o número 0 utilizando o while. */

let numDig = -1
let div2 = 0
let div3 = 0
let div5 = 0

while(numDig !== 0){
    numDig = Number(prompt('Digite uma sequencia de números inteiros.0 para encerrar execução'))
    if(numDig==0){
        break

    }else if(numDig %2 == 0){
        div2++
    }
     if(numDig%3 == 0){
        div3++
    }
    if(numDig%5 == 0){
        div5++
    }

}

alert(div2 + "  divisível(is) por 2 ," +div3+ " divisível(is) por 3 ,"+ div5 +" São divisível(is) por 5")