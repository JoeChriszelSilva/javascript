const leia = require("readline-sync");

let numero1, numero2, operacao;

numero1 = leia.questionInt("Digite o primeiro numero: ");
numero2 = leia.questionInt("Digite o segundo numero: ");

console.log(" 1 - soma ");
console.log(" 2 - subtracâo ");
console.log(" 3 - multiplicacão ");
console.log(" 4 - diviso ");
operacao = leia.questionInt("operacão: ");

switch (operacao) {
  case 1:
    console.log(numero1 + " + " + numero2 + " = " + (numero1 + numero2));
    break;
  case 2:
    console.log(numero1 + " - " + numero2 + " = " + (numero1 - numero2));
    break;
  case 3:
    console.log(numero1 + " * " + numero2 + " = " + numero1 * numero2);
    break;
  case 4:
    console.log(numero1 + " / " + numero2 + " = " + numero1 / numero2);
    break;
  default:
    console.log("operação inválida");
}
