function calcularDesconto(valorProduto: number, percentualDesconto: number): number {
    const desconto = valorProduto * (percentualDesconto / 100);
    const valorComDesconto = valorProduto - desconto;
    return valorComDesconto;
}

// Exemplo de uso
const valorProduto = 100;
const percentualDesconto = 20; // 20%
const valorFinal = calcularDesconto(valorProduto, percentualDesconto);
console.log(valorFinal);  // Saída: 80
