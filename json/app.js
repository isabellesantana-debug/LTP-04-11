const produtos = require("./produto.json");
console.log("======CATÁLOGO DE PRODUTOS======");

produtos.forEach((produto) => {
    console.log("-------------------------------");
    console.log("Produto: " + produto.nome);
    console.log("Preço: R$ " + produto.preco);
    console.log("Quantidade: " + produto.quantidade);
    console.log("Lote: " + produto.lote);
    console.log("Data de Validade: " + produto.data_validade);

    if (produto.quantidade > 0) {
        console.log("Estoque disponível");
    } else {
        console.log("Repor estoque");
    }

    try {
        console.log("Verificação concluída com sucesso!");
    } catch (error) {
        console.log("Erro ao verificar estoque: " + error.message);
    }
});
