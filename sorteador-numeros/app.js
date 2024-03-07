function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    let numerosSorteados = [];
    let numero;

    for(let i = 0; i < quantidade; i++) {
    numero = sorteioNumeroAleatorio(de, ate);
    numerosSorteados.push(numero);
    }

    let imprimirResultado = document.getElementById('resultado');
    imprimirResultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${numerosSorteados}</label>`
}

function sorteioNumeroAleatorio(minimo, maximo) {
    return Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
}