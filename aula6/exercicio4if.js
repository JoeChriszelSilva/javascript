const leia = require("readline-sync");

let reino, classe, dieta;

console.log(" digite o reino do animal: ");
console.log("Vertebrado", " Invertebrado");
reino = leia.question("");

console.log("digite a classe do animal:");
console.log("Ave", " Mamifero", " Inseto", " Anelideo");
classe = leia.question("");

console.log("digite a dieta do animal:");
console.log("Carnivoro", " Onivoro", " Herbivoro", " Hematofago");
dieta = leia.question();

if (reino == "vertebrado" && classe == "ave" && dieta == "carnivoro") {
  console.log("Águia");
} else if (reino == "vertebrado" && classe == "ave" && dieta == "onivoro") {
  console.log("Pomba");
} else if (
  reino == "vertebrado" &&
  classe == "mamifero" &&
  dieta == "onivoro"
) {
  console.log("Homem");
} else if (
  reino == "vertebrado" &&
  classe == "mamifero" &&
  dieta == "Oviparo"
) {
  console.log("Vaca");
} else if (
  reino == "invertebrado" &&
  classe == "inseto" &&
  dieta == "hematofago"
) {
  console.log("Pulga");
} else if (
  reino == "invertebrado" &&
  classe == "inseto" &&
  dieta == "herbivoro"
) {
  console.log("Lagarta");
} else if (
  reino == "invertebrado" &&
  classe == "Analideo" &&
  dieta == "hematofago"
) {
  confirm.log("Sanguessuga");
} else if (
  reino == "invertebrado" &&
  classe == "Analideo" &&
  dieta == "onivoro"
) {
  console.log("Minhoca");
} else {
  console.log("Opção inválida");
}
