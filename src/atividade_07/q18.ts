function calcularPrecoProduto(valorCusto: number, margemLucro: number, valorFrete: number): number {
    const lucro = valorCusto * (margemLucro / 100);
    const precoVenda = valorCusto + lucro + valorFrete;
    return precoVenda;
}


const valorCusto = 100;
const margemLucro = 20; 
const valorFrete = 15;

const precoVenda = calcularPrecoProduto(valorCusto, margemLucro, valorFrete);
console.log(precoVenda); 