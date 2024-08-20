function verificarPropriedade(obj: object, propriedade: string): boolean {
    return propriedade in obj;
}

// Exemplo de uso
const pessoa = {
    nome: "João",
    idade: 30,
    cidade: "São Paulo"
};

console.log(verificarPropriedade(pessoa, "nome")); 
console.log(verificarPropriedade(pessoa, "altura"));  
