/*Solicite ao usuário dois números inteiros e, usando a estrutura switch/case, exiba o resultado da
operação escolhida pelo usuário (1 - soma, 2 - subtração, 3 - multiplicação, 4 - divisão). */
let numero1 = Number(prompt("Introduza um número inteiro"));
let numero2 = Number(prompt("Introduza outro número inteiro"));
type Opereção = 1 | 2 | 3 | 4;
let operação: Opereção | number = Number(
  prompt(
    "Escolha a operação: 1-( +soma), 2-( -subtração), 3-(*multiplicação), 4-( /divisão)"
  )
);

switch (operação) {
  case 1:
    let sum = numero1 + numero2;
    alert(sum);
    break;
  case 2:
    let subt = numero1 - numero2;
    alert(subt);
    break;
  case 3:
    let multip = numero1 * numero2;
    alert(multip);
    break;
  case 4:
    let div = numero1 / numero2;
    alert(div);
    break;
  default:
    alert("Não foi possível realizar a operação");
    break;
}
