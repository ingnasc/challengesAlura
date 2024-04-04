//Implemente uma função que aceite um número como parâmetro e utilize um bloco condicional para determinar se o número é par ou ímpar.

function evenOrOdd(numero){
    if(numero % 2 === 0) {
        return 'O número é par.';
    } else {
        return 'O número é ímpar.';
    }
}

let numero = 10;
let resultadoNumero = evenOrOdd(numero);

console.log(resultadoNumero);