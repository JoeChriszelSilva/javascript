import { Queue } from "./queue.ts";
import * as readlineSync from "readline-sync";

const fila = new Queue<string>();
let continuar: boolean = true;
let escolha: number;

do {
  console.log("*****************************************\n");
  console.log("    1 - Adicionar Cliente na Fila");
  console.log("    2 - Listar todos os Clientes");
  console.log("    3 - Retirar Cliente da Fila");
  console.log("    0 - Sair");
  console.log("\n*****************************************\n");

  escolha = readlineSync.questionInt("Entre com a opcao desejada: ");

  switch (escolha) {
    case 1:
      console.clear();
      let nome: string = readlineSync.question("\nDigite o nome do cliente: ");
      fila.enqueue(nome);
      console.log("**********************************************");
      console.log("\nFila: \n");
      fila.printQueue();
      console.log("\nCliente Adicionado!\n");
      break;

    case 2:
      console.log("Lista de Clientes: ");
      fila.printQueue();
      break;

    case 3:
      fila.dequeue();
      if (!fila.isEmpty()) {
        console.log("Fila: ");
        fila.printQueue();
        console.log("O Cliente foi Chamado!\n");
      }
      break;

    case 0:
      console.log("Programa Finalizado!");
      break;

    default:
      console.log("Dado invalido!");
  }
} while (escolha !== 0);
