//adicionar nomes numa lista, receber os nomes, recuperar os nomes
function adicionar() {
    let nomeAmigo = document.getElementById('nome-amigo');
    let listaAmigos = document.getElementById('lista-amigos');
    
    if(listaAmigos.textContent == '') {
        listaAmigos.textContent = nomeAmigo.value;
    } else {
        listaAmigos.textContent = listaAmigos.textContent + ', ' + nomeAmigo.value;
    }

    nomeAmigo.value = '';
    
}

//sortear os nomes da lista e apresentar na tela
function sortear() {
    let listaSorteio = document.getElementById('lista-sorteio');
}

//zerar todas as informações
function reiniciar() {

}