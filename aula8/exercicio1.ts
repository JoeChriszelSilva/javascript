import * as readlineSync from "readline-sync";

let listaCores: Array<string> = new Array<string>();

for (let i = 0; i < 5; i++) {
  let adicionarCores: string = readlineSync.question(
    `Digite o nome da ${i + 1}ª cor:`
  );
  listaCores.push(adicionarCores);
}

console.log("\n listar todas as cores:\n");

for (const cor of listaCores) {
  console.log(cor);
}

listaCores.sort();

console.log("\nOrdenar as cores:\n");

for (const cor of listaCores) {
  console.log(cor);
}
