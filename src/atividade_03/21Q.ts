// 21. Solicite ao usuário que insira o seu estado civil e exiba uma mensagem apropriada (por exemplo: "Você é casado(a)", "Você é solteiro(a)", etc.).

let estadoCivil = prompt(`Qual é o seu estado civil?
  a) Solteiro(a)
  b) Casado(a)
  c) Viúvo(a)`
);

if (estadoCivil === 'a' || estadoCivil === 'A'){
  alert('Você é solteiro aproveite a vida!');

} else if (estadoCivil === 'b' || estadoCivil === 'B'){
  alert('Você é casado, tá lascado!');

} else if (estadoCivil === 'c' || estadoCivil === 'C'){
  alert('Você é viúvo, vê se não vai errar denovo!')

} else {
  alert('Digite somente uma das opções.')

}