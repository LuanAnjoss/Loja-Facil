const { execSync } = require("child_process");

test("A aplicação deve executar sem erros", () => {
    const resultado = execSync("node src/index.js", {
        encoding: "utf-8"
    });

    expect(resultado).toContain("LOJA FÁCIL");
    expect(resultado).toContain("Notebook");
});