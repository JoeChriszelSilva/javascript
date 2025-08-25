let leia = require('readline-sync');

let salarioBruto, adicionalNoturno, horasExtras, descontos, salarioLiquido;

salarioBruto = leia.questionFloat("Digite o valor do salario bruto: ");
adicionalNoturno = leia.questionFloat("Digite o valor do adicional noturno: "); 
horasExtras = leia.questionFloat("Digite o valor das horas extras: ");
descontos = leia.questionFloat("Digite o valor dos descontos: ");
salarioLiquido = (salarioBruto + adicionalNoturno + (horasExtras*5) - descontos);
console.log("O valor do salario liquido é: " + salarioLiquido);