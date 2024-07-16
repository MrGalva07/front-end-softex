// 29. Solicite ao usuário que insira seu ano de nascimento e concatene-o com uma mensagem de boas-vindas, como "Bem-vindo ao nosso programa, nascido em [ano de nascimento]!".

const anoNascimento = prompt("Digite o ano do seu nascimento com 4 dígitos: ")
const salute = `Bem vindo ao nosso programa, nascido em ${anoNascimento}`;
console.log(salute);