//Crie um programa com uma função que receba três números como argumentos e os retorne em ordem crescente. Exiba os números ordenados.

function ordenarNumeros(a, b, c){
    const numerosEmOrdem = [a,b,c].sort((a, b) => a - b);
    console.log(`Segue os números em ordem crescente: ${numerosEmOrdem.join(', ')}`);
}

ordenarNumeros(29, 40, 5);