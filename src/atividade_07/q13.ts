interface Aluno {
    nome: string;
    nota: number;
}

function calcularMediaAlunos(alunos: Aluno[]): number {
    const somaNotas = alunos.reduce((soma, aluno) => soma + aluno.nota, 0);
    return somaNotas / alunos.length;
}

// Exemplo de uso
const alunos: Aluno[] = [
    { nome: "Ana", nota: 8.5 },
    { nome: "João", nota: 7.0 },
    { nome: "Maria", nota: 9.0 },
    { nome: "Pedro", nota: 6.5 }
];

const media = calcularMediaAlunos(alunos);
console.log(media); 
