interface Pessoa {
    nome: string;
    idade: number;
}

function encontrarPessoaMaisVelha(pessoas: Pessoa[]): string {
    return pessoas.reduce((maisVelha, pessoaAtual) => {
        return (pessoaAtual.idade > maisVelha.idade) ? pessoaAtual : maisVelha;
    }).nome;
}


const pessoas: Pessoa[] = [
    { nome: "Ana", idade: 29 },
    { nome: "João", idade: 35 },
    { nome: "Maria", idade: 42 },
    { nome: "Pedro", idade: 31 }
];

const nomeMaisVelha = encontrarPessoaMaisVelha(pessoas);
console.log(nomeMaisVelha);  
