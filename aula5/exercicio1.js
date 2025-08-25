const leia = require('readline-sync');

let salario, Abono, novoSalario;

salario = leia.questionInt('Digite o Salario:');
Abono = leia.questionInt('Digite o Abono:');
novoSalario = salario + Abono;
console.log('O novo salario e ' +  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(novoSalario));