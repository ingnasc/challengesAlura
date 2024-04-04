//Receba, no mínimo, duas sentenças como uma string e utilize split() para quebrá-la em frases menores com base em um ponto e vírgula como delimitador.

let frases = 'Essa é a primeira frase; Essa é a segunda frase.';
let frasesSeparadas = frases.split(';');

console.log(frasesSeparadas);