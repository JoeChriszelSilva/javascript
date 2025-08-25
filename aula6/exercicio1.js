const leia = require('readline-sync');

let numA, numB, numC
numA = leia.questionInt('Digite o numero A:');
numB = leia.questionInt('Digite o numero B:');
numC = leia.questionInt('Digite o numero C:');

if (numA + numB > numC)
    console.log('A soma de ' + numA + ' com ' + numB + ' e maior que ' + numC);
else
    console.log('A soma de ' + numA + ' com ' + numB + ' nao e maior que ' + numC);
if (numA + numC < numB)
    console.log('A soma de ' + numA + ' com ' + numB + ' e menor que ' + numC);
else
    console.log('A soma de ' + numA + ' com ' + numB + ' não é menor que ' + numC);
if (numA + numB == numC)
    console.log('A soma de ' + numA + ' com ' + numB + ' e igual a ' + numC);
else
    console.log('A soma de ' + numA + ' com ' + numB + ' nao e igual a ' + numC);