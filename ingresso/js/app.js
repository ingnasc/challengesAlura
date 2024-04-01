function comprar() {
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let quantidadeCompra = parseInt(document.getElementById('qtd').value);

    if(tipoIngresso == 'pista'){
        comprarPista(quantidadeCompra);
    } else if(tipoIngresso == 'superior') {
        comprarSuperior(quantidadeCompra);
    } else {
        comprarInferior(quantidadeCompra);
    }
}

function comprarPista(quantidadeCompra){
    let quantidadePista = parseInt(document.getElementById('qtd-pista').textContent);
    if (quantidadeCompra > quantidadePista){
        alert('Quantidade indisponível para compra no tipo PISTA.');
    } else if(quantidadeCompra <= 0){
        alert('Digite uma quantidade válida!');
    } else {
        quantidadePista = quantidadePista - quantidadeCompra;
        document.getElementById('qtd-pista').textContent = quantidadePista;
        alert('Compra realizada com sucesso!');
    }
}

function comprarSuperior(quantidadeCompra){
    let quantidadeSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if (quantidadeCompra > quantidadeSuperior){
        alert('Quantidade indisponível para compra no tipo SUPERIOR.');
    } else if(quantidadeCompra <= 0){
        alert('Digite uma quantidade válida!');
    } else {
        quantidadeSuperior = quantidadeSuperior - quantidadeCompra;
        document.getElementById('qtd-superior').textContent = quantidadeSuperior;
        alert('Compra realizada com sucesso!');
    }
}

function comprarInferior(quantidadeCompra){
    let quantidadeInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if (quantidadeCompra > quantidadeInferior){
        alert('Quantidade indisponível para compra no tipo INFERIOR.');
    } else if(quantidadeCompra <= 0){
        alert('Digite uma quantidade válida!');
    } else {
        quantidadeInferior = quantidadeInferior - quantidadeCompra;
        document.getElementById('qtd-inferior').textContent = quantidadeInferior;
        alert('Compra realizada com sucesso!');
    }
}