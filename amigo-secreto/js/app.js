let listaArray = [];

function adicionar() {
    let nomeAmigo = document.getElementById('nome-amigo');

    if(nomeAmigo.value == '') {
        alert('Informe o nome do amigo!');
        return; //vai parar e voltar para o inicio da função
    }

    if(listaArray.includes(nomeAmigo.value)) {
        alert('Nome já adicionado!');
        return; 
    }

    let listaAmigos = document.getElementById('lista-amigos');
    listaArray.push(nomeAmigo.value);
    
    if(listaAmigos.textContent == '') {
       listaAmigos.textContent = nomeAmigo.value;
    } else {
        listaAmigos.textContent = listaAmigos.textContent + ', ' + nomeAmigo.value;
    }

    nomeAmigo.value = '';
    
}

function sortear() {
    if(listaArray.length < 4) {
        alert('Adicione pelo menos 4 amigos.');
        return;
    }
    embaralha(listaArray);
    let sorteio = document.getElementById('lista-sorteio');

    for(let i = 0; i < listaArray.length; i++) {
        if(i == listaArray.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + listaArray[i] + ' ---> ' + listaArray[0];
        } else {
            sorteio.innerHTML = sorteio.innerHTML + listaArray[i] + ' ---> ' + listaArray[i + 1] + '<br>';
        }
    }

}

//Fisher–Yates
function embaralha(lista) { 
    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}


function reiniciar() {
    listaArray = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}