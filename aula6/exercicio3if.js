const leia = require('readline-sync');

let nome, idade, doador
nome = leia.question('Digite o nome: ');
idade = leia.questionInt('Digite a idade: ');
doador = leia.questionInt('E a primeira doação? (1-Sim/2-Nao): ');

if ( idade >= 18 && idade <= 69  && doador == 2){
    console.log(nome + ' está apto a doar sangue.');
}else if( idade >= 18 && idade <= 60 && doador == 1){
    console.log(nome + ' está apto a doar sangue.');
}else if ( idade >= 60 && idade <= 69 && doador == 1){
    console.log(nome + ' Não está apto para doar sangue.');
}else if ( idade < 18) {
    console.log(nome + ' Não está apto para doar sangue');
};