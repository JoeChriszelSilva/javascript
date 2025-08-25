let leia = require('readline-sync');
let n1, n2, n3, n4, diferenca;  

n1 = leia.questionFloat("Digite a primeira numero: ");
n2 = leia.questionFloat("Digite a segunda numero: ");
n3 = leia.questionFloat("Digite a terceira numero: ");
n4 = leia.questionFloat("Digite a quarta numero: ");
diferenca = (n1 + n2) - (n3 + n4);
console.log("A diferenca entre a soma das duas primeiras notas com a soma das duas ultimas notas é: " + diferenca);