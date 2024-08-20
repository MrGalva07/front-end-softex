function calcularIdade(anoNascimento: number): number {
    const anoAtual = new Date().getFullYear();
    return anoAtual - anoNascimento;
}


const anoNascimento = 1990;
const idade = calcularIdade(anoNascimento);
console.log(idade); 
