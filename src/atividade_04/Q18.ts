/*18. Peça ao usuário que insira o seu estado civil e, usando a estrutura switch/case, exiba uma
mensagem informando se é solteiro, casado, divorciado ou viúvo.*/

let ec = String(prompt("Insira seu estado civil"))
switch (ec) {
    case "solteiro":
        console.log("Você é solteiro")
        break;
    case "casado":
        console.log("Você é casado")
        break;
    case "divorciado":
        console.log("Você é divorciado")
        break;
    case "viúvo":
        console.log("Você é viúvo")
        break;
    default:
        console.log("Estado civil inválido")
        break;
}
