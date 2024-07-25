/*Receba um número inteiro do usuário e verifique se ele é divisível por 3 e por 5 ao mesmo tempo,
exibindo uma mensagem apropriada.*/
let numeroInteiro = Number(prompt("Escreva um número inteiro"))
let restoDivisao = numeroInteiro % 3
let restoDivisao2 = numeroInteiro % 5
if (restoDivisao == 0 && restoDivisao2 == 0)    
    {
        alert("O número é divisível por 3 e por 5 ao mesmo tempo")
        }
        else
        {
            alert("O número não é divisível por 3 e por 5 ao mesmo tempo")
            }
            