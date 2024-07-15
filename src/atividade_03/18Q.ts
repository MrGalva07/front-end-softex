//Peça ao usuário que insira dois números e exiba o maior deles.

let primeiroNumero = Number(prompt("Escreva um número : "))
let segundoNumero = Number(prompt("Escreva outro número : "))
if( primeiroNumero > segundoNumero){
    alert(primeiroNumero)
}else if(primeiroNumero === segundoNumero){
    alert("São iguais")
}else{
    alert(segundoNumero)
}