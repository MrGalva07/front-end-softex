// 27. Solicite ao usuário que digite uma data no formato "dd/mm/aaaa" e extraia o dia, o mês e o ano separadamente, convertendo-os em números inteiros.
const dataString: string = prompt("Digite uma data no formato dd/mm/aaaa: ");

// Validar se data esta correta
if (dataString.length !== 10 || dataString[2] !== "/" || dataString[5] !== "/") {
  console.error("Erro: Formato de data inválido.");
  
}

// Separar os componentes da data em um array
const dataComponentes: string[] = dataString.split("/");
console.log(dataComponentes);

const dia: number = parseInt(dataComponentes[0]);
const mes: number = parseInt(dataComponentes[1]);
const ano: number = parseInt(dataComponentes[2]);
console.log(dia + ' ' + typeof(dia));
console.log(mes + ' ' + typeof(mes));
console.log(ano + ' ' + typeof(ano));