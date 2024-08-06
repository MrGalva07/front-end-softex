/*Desenvolva um programa que leia o salário de um funcionário e calcule o valor do seu aumento.
Para salários superiores a R$ 1.500,00, o aumento deve ser de 10%. Caso contrário, o aumento é de
15%. */

let salario = Number(prompt("Insira aqui o seu salário"))
if (salario > 1.500){
    let aumento1 = salario * 0.10
    let salarioAumentado1 = aumento1 + salario
    alert(salarioAumentado1)
}else{
    let aumento2 = salario * 0.15
    let salarioAumentado2 = aumento2 + salario
    alert(salarioAumentado2)
}