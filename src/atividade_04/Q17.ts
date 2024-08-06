/*Peça ao usuário que insira a sua idade e verifique se ele é um bebê (0 a 1 ano), criança (1 a 12
anos), adolescente (13 a 18 anos) ou adulto (mais de 18 anos). */
let idade = Number(prompt("Digite sua idade"))
if(idade >= 0 && idade <=1  ){
    alert("Bebê")
}else if(idade > 1 && idade <= 12){
    alert("Criança")
}else if(idade >= 13 && idade <= 18){
    alert("Adolescente")
}else if(idade > 18){
    alert("Adulto")
}else{
    alert("Não foi possível detectar sua faixa etária")
}