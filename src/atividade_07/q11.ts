function calcularMediaArredondada(numeros: number[]): number {
    const soma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
    const media = soma / numeros.length;
    return Math.round(media);
}

// Exemplo de uso
const numeros = [10, 20, 30, 40, 50];
const mediaArredondada = calcularMediaArredondada(numeros);
console.log(mediaArredondada); 
