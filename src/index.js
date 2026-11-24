
const http = require("http");

const produtos = [
    { nome: "Notebook", preco: 2500 },
    { nome: "Mouse", preco: 80 },
    { nome: "Teclado", preco: 150 }
];

function cadastrarProduto(nome, preco) {
    produtos.push({ nome, preco });
}

const PORT = process.env.PORT || 3000;

if (require.main === module) {
    const server = http.createServer((req, res) => {
        res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });

        res.end(JSON.stringify({
            mensagem: "Loja Fácil funcionando!",
            produtos
        }));
    });

    server.listen(PORT, "0.0.0.0", () => {
        console.log(`Loja Fácil rodando na porta ${PORT}`);
    });
}

module.exports = { produtos, cadastrarProduto };
