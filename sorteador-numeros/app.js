function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    let numerosSorteados = [];
    let numero;

    for(let i = 0; i < quantidade; i++) {
    numero = sorteioNumeroAleatorio(de, ate);

    while(numerosSorteados.includes(numero)){
        numero = sorteioNumeroAleatorio(de, ate);
    }

    numerosSorteados.push(numero);
    }

    let imprimirResultado = document.getElementById('resultado');
    imprimirResultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${numerosSorteados}</label>`;

    ativarReiniciar();
}

function sorteioNumeroAleatorio(minimo, maximo) {
    return Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
}

function ativarReiniciar() {
    let botao = document.getElementById('btn-reiniciar');

    if(botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>';

    ativarReiniciar();

}