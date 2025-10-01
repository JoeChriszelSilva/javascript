import * as readlineSync from "readline-sync";

let numeros: Set<number> = new Set<number>();

for (let i = 0; i <= 9; i++) {
  let addNumero: number = readlineSync.questionInt("Digite um numero: ");
  numeros.add(addNumero);
}

console.log("Listar dados do Set: ");

for (const numero of numeros) {
  console.log(numero);
}
