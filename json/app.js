const produtos = require("./proutos.json");
consoe.log("===CATÁLOGO DE PRODUTOS===");

produtos.forEach((produtos) => {
    console.log("-------------------------");
    console.log("Produto:" + produto.nome);
    console.log("Preço: R$" + produto.preco);
    console.log("Quantidade:" + produto.quantidade);

});
