function gerarTabuada(numero: number): void {
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}

// Exemplo de uso
gerarTabuada(5);
