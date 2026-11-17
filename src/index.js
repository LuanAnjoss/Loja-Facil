
const produtos = [
    { nome: "Notebook", preco: 2500 },
    { nome: "Mouse", preco: 80 },
    { nome: "Teclado", preco: 150 }
];

console.log("=== LOJA FÁCIL ===");
console.log("Produtos disponíveis:");

produtos.forEach((produto) => {
    console.log(`${produto.nome} - R$ ${produto.preco}`);
});
