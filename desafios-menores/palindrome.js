verificarPalindromo('árvore');

function verificarPalindromo(palavra) {
    let separandoAsLetras = palavra.split(''); //quebrar em lista de caracteres
    let palavraInvertida = separandoAsLetras.reverse(); //inverter a ordem da lista de array
    palavraInvertida = palavraInvertida.join(''); //para unir a lista de arrays

    if(palavra == palavraInvertida) {
    console.log(`A palavra "${palavra}" é um palíndromo.`);
    } else {
    console.log(`A palavra "${palavra}" não é um palíndromo.`);
    };
};

