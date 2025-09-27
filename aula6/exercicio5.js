const leia = require("readline-sync");

let produto, quantidade, total;

produto = leia.questionInt(
  "nDigite o codigo do protudo: \n 1 - cachorro quente \n 2- x salada \n 3 - x bacon \n 4 - bauru \n 5 - refrigerante \n 6 - suco de laranja:"
);
quantidade = leia.questionInt("Digite a quantidade: ");

switch (produto) {
  case 1:
    total = quantidade * 10.0;
    console.log(
      "n preço total do cachorro quente é " +
        new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(total)
    );
    break;
  case 2:
    total = quantidade * 15.0;
    console.log(
      "n preço total do x salada é" +
        new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(total)
    );
    break;
  case 3:
    total = quantidade * 18.0;
    console.log(
      "n preço total do x bacon é " +
        new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(total)
    );
    break;
  case 4:
    total = quantidade * 12.0;
    console.log(
      "n preço total do bauru é " +
        new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(total)
    );
    break;
  case 5:
    total = quantidade * 8.0;
    console.log(
      "n preço total do refrigerante é " +
        new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(total)
    );
    break;
  case 6:
    total = quantidade * 13.0;
    console.log(
      "n preço total do suco de laranja é " +
        new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(total)
    );
    break;
  default:
    console.log("Produto não existente");
    break;
}
