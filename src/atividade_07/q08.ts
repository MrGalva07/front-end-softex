function imc(peso: number, altura: number): number {
    return peso / (altura * altura);
}

// Exemplo de uso
const peso = 70; // em kg
const altura = 1.75; // em metros
const indiceIMC = imc(peso, altura);
console.log(indiceIMC);  
