/*Crie um programa que receba o nome de duas pessoas e exiba qual delas possui o maior número
de caracteres em seu nome.*/

let primeiroNome:String = String(prompt("Digite um nome"))
let segundoNome:String = String(prompt("Digite outro nome"))
let primeiroNomeCaracteres = primeiroNome.length
let segundoNomeCaracteres = segundoNome.length
if (primeiroNomeCaracteres > segundoNomeCaracteres){
    console.log("O primeiro nome possui mais caracteres")
    }else if (segundoNomeCaracteres > primeiroNomeCaracteres){
        console.log("O segundo nome possui mais caracteres")
        }else{
            console.log("Os nomes possuem o mesmo número de caracteres")
            }