
const produtos = [
    { nome: "Notebook", preco: 2500 },
    { nome: "Mouse", preco: 80 },
    { nome: "Teclado", preco: 150 }
];

function cadastrarProduto(nome, preco) {
    produtos.push({ nome, preco });
    console.log("Produto cadastrado com sucesso!");
}

cadastrarProduto("Fone de ouvido", 120);

console.log("=== LOJA FÁCIL ===");
console.log("Produtos disponíveis:");

produtos.forEach((produto) => {
    console.log(`${produto.nome} - R$ ${produto.preco}`);
});
