/*Crie um programa que exiba a tabuada do 9 utilizando o while. */

let count:number = 0
const tab:number = 9
let r:number = 0

while(count<=10){
    r = count*tab
    console.log(`9x${count}=${r}`)
    count++
}