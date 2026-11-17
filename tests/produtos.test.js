const produtos = [
    { nome: "Notebook", preco: 2500 },
    { nome: "Mouse", preco: 80 },
    { nome: "Teclado", preco: 150 }
];

test("Deve existir pelo menos um produto cadastrado", () => {
    expect(produtos.length).toBeGreaterThan(0);
});

test("O preço dos produtos deve ser maior que zero", () => {
    produtos.forEach((produto) => {
        expect(produto.preco).toBeGreaterThan(0);
    });
});