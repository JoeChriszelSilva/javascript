const leia = require("readline-sync");
let numero, tipoPositivoNegativo, tipoParImpar;
tipoPositivoNegativo = "";
tipoParImpar = "";

numero = leia.questionInt("Digite um numero:");

if (numero % 2 == 0) {
  tipoParImpar = "par";
} else {
  tipoParImpar = "impar";
}
if (numero >= 0) {
  tipoPositivoNegativo = "positivo";
} else {
  tipoPositivoNegativo = "negativo";
}

console.log(
  "O numero " + numero + " e " + tipoParImpar + " e " + tipoPositivoNegativo
);
