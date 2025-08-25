let leia = require('readline-sync');

let not1, not2, not3, not4, media;  

not1 = leia.questionInt('Digite a primeira nota:');
not2 = leia.questionInt('Digite a segunda nota:');
not3 = leia.questionInt('Digite a terceira nota:');
not4 = leia.questionInt('Digite a quarta nota:');
media = (not1 + not2 + not3 + not4)/4;
console.log('A media do participante é  ' + media);
