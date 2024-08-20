function contarDigitosParesImpares(numero: number): { pares: number, impares: number } {
    const digitos = numero.toString().split('');
    let pares = 0;
    let impares = 0;

    digitos.forEach(digito => {
        const num = parseInt(digito, 10);
        if (num % 2 === 0) {
            pares++;
        } else {
            impares++;
        }
    });

    return { pares, impares };
}

// Exemplo de uso
const numero = 123456789;
const result = contarDigitosParesImpares(numero);
console.log(`Pares: ${result.pares}, Ímpares: ${result.impares}`);  
// Saída: Pares: 4, Ímpares: 5
