import { Stack } from "./stack.ts";
import * as readlineSync from "readline-sync";

const livros = new Stack<string>();
let escolha: number;

do {
  console.log("*****************************************\n");
  console.log("    1 - Adicionar Livro na pilha");
  console.log("    2 - Listar todos os Livros");
  console.log("    3 - Retirar Livro da Pilha");
  console.log("    0 - Sair");
  console.log("\n*****************************************\n");

  escolha = readlineSync.questionInt("Entre com a opcao desejada: ");

  switch (escolha) {
    case 1:
      let nome: string = readlineSync.question("\nDigite o nome do Livro: ");
      livros.push(nome);
      console.log("\n*****************************************\n");
      console.log("\n      Livro adicionado!\n");
      console.log("\n*****************************************\n");
      livros.printStack();
      console.log("\n*****************************************\n");
      break;

    case 2:
      console.log("\n*****************************************\n");
      console.log("      Pilha de livros: ");
      console.log("\n*****************************************\n");
      livros.printStack();
      console.log("\n*****************************************\n");
      break;

    case 3:
      livros.pop();
      if (!livros.isEmpty()) {
        console.log("\n*****************************************\n");
        console.log("\n      Livros: \n");
        console.log("\n*****************************************\n");
        livros.printStack();
        console.log("\n*****************************************\n");
        console.log("\n    O Livro foi retirado da pilha!\n");
        console.log("\n*****************************************\n");
      }

      break;

    case 0:
      console.log("Programa Finalizado!");
      break;

    default:
      console.log("Dado invalido!");
  }
} while (escolha !== 0);
