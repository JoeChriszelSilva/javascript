let leia = require('readline-sync');

let cargo, reajuste, salario, novoSalario;

cargo = leia.questionInt('n\ Digite o seu cargo: \n 1 - Gerente \n 2 - Vendendor \n 3 - Supervisor \n 4 - Motorista \n 5 - Estoquista \n 6 - Técnico de TI: ');
salario = leia.questionFloat('Digite o seu salário atual: R$ ');

switch(cargo){
    case 1:
        reajuste = salario + (reajuste *salario);
        console.log('n\ O seu novo salario' + new Intl.NumberFormat('pt-BR', {style: 'currency',currency: 'BRL',}).format(reajuste));
        break;
}