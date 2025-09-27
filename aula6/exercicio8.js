const leia = require("readline-sync");

let contaBancaria, saldo, valor;

console.log("1 - Saldo");
console.log("2 - Saque");
console.log("3 - Depósito");

contaBancaria = leia.questionInt("Escolha a operação desejada: ");
saldo = 1000;

switch (contaBancaria) {
  case 1:
    console.log("Seu saldo é de R$ " + saldo);
    break;
  case 2:
    valor = leia.questionFloat("Qual o valor do saque? R$ ");
    if (valor > saldo) {
      console.log("Saldo insuficiente para saque.");
    } else {
      saldo -= valor;
      console.log(
        "Saque de R$ " +
          valor +
          " realizado com sucesso. Novo saldo: R$ " +
          saldo
      );
    }
    break;
  case 3:
    valor = leia.questionFloat("Qual o valor do depósito? R$ ");
    saldo += valor;
    console.log(
      "Depósito de R$ " +
        valor +
        " realizado com sucesso. Novo saldo: R$ " +
        saldo
    );
    break;
  default:
    console.log("Operação inválida.");
    break;
}
