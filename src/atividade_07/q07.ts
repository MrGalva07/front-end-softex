function avg(nota1: number, nota2: number, nota3: number): number {
    const soma = nota1 + nota2 + nota3;
    const mediaAritmetica = soma / 3;
    return Math.round(mediaAritmetica);
}

// Exemplo de uso
const nota1 = 8;
const nota2 = 7.5;
const nota3 = 9;
const mediaFinal = avg(nota1, nota2, nota3);
console.log(mediaFinal);  // Saída: 8
