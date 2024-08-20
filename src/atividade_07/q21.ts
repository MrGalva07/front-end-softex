function filtrarStringsPorTamanho(strings: string[]): string[] {
    return strings.filter(str => str.length > 5);
}

// Exemplo de uso
const palavras: string[] = ["apple", "banana", "cherry", "date", "fig", "grape"];
const palavrasLongas = filtrarStringsPorTamanho(palavras);
console.log(palavrasLongas);  
// Saída: ["banana", "cherry"]
