// 31. Receba o nome de um produto digitado pelo usuário e concatene-o com o preço do produto, adicionando o símbolo de moeda da sua escolha.
const nomeDoProduto = prompt('Digite o nome um produto: ')
const precoDoProduto: string = '15,10';
const produtoTotal: string = nomeDoProduto + ' R$ '+ precoDoProduto

console.log(produtoTotal);