let total;
limpar();

function adicionar() {
    let produto = document.getElementById('produto').value;
    let quantidade = document.getElementById('quantidade').value;

    if(!produto || produto.trim() === ""){
        alert('Selecione um produto válido.');
        return;
    }

    if(isNaN(quantidade) || quantidade <=0) {
        alert('Insira uma quantidade válida.');
        return;
    }

    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let subtotal = quantidade * valorUnitario;

    let listaCarrinho = document.getElementById('lista-produtos');
    listaCarrinho.innerHTML = listaCarrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${subtotal}</span>
    </section>`

    total = total + subtotal;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$${total}`;

    document.getElementById('quantidade').value = '';

}

function limpar() {
    total = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').innerHTML = 'R$0,00';
}