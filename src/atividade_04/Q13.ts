/*Peça ao usuário que insira o dia da semana (por extenso) e, em seguida, exiba uma mensagem
informando se é um dia útil ou um fim de semana. */

type Dia = "domingo" | "segunda" | "terça" | "quarta" | "quinta" | "sexta";

let insertDay: Dia | any = prompt("Escreva o dia da semana por extenso");

switch (insertDay) {
  case "domingo":
    alert("Final de semana");
    break;
  case "segunda":
    alert("Dia útil");
    break;
  case "terça":
    alert("Dia útil");
    break;
  case "quarta":
    alert("Dia útil");
    break;
  case "quinta":
    alert("Dia útil");
    break;
  case "sexta":
    alert("Dia útil");
    break;
  case "sabado":
    alert("Final de semana");
    break;

  default:
    alert("Dia não identificado");
    break;
}
