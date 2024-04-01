function comprar() {
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let quantidadeCompra = parseInt(document.getElementById('qtd').value);

    if(tipoIngresso == 'pista'){
        comprarPista(quantidadeCompra);
    }

}

function comprarPista(quantidadeCompra){
    let quantidadePista = parseInt(document.getElementById('qtd-pista').textContent);
    if (quantidadeCompra > quantidadePista){
        alert('Quantidade indisponível para compra no tipo PISTA.');
    } else {
        quantidadePista = quantidadePista - quantidadeCompra;
        document.getElementById('qtd-pista').textContent = quantidadePista;
        alert('Compra realizada com sucesso!');
    }
}

//recuperar elementos ingresso e quantidade - ok
//botao comprar - ok
//limite na quantidade de compra com alerta de nao poder
//subtrair depois de comprado e mostrar