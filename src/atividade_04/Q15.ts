/*Peça ao usuário que digite um número entre 1 e 7 e exiba o dia da semana correspondente (1 -
Domingo, 2 - Segunda-feira, etc.). */

type Day = 1 | 2 | 3 | 4 | 5 | 6 | 7;

let nDigitado: Day | number = Number(prompt("Digite um número"));

switch (nDigitado) {
  case 1:
    alert("Monday");
    break;
  case 2:
    alert("Sunday");
    break;
  case 3:
    alert("Tuesday");
    break;
  case 4:
    alert("Wednesday");
    break;
  case 5:
    alert("Thursday");
    break;
  case 6:
    alert("Friday");
    break;
  case 7:
    alert("Saturday");
    break;
  default:
    alert("unidentified day");
    break;
}
