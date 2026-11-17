const { produtos, cadastrarProduto } = require("../src/index");

test("Deve existir pelo menos um produto cadastrado", () => {
    expect(produtos.length).toBeGreaterThan(0);
});

test("O preço dos produtos deve ser maior que zero", () => {
    produtos.forEach((produto) => {
        expect(produto.preco).toBeGreaterThan(0);
    });
});

test("Deve cadastrar um novo produto", () => {
    cadastrarProduto("Fone de ouvido", 120);

    expect(produtos).toContainEqual({
        nome: "Fone de ouvido",
        preco: 120
    });
});