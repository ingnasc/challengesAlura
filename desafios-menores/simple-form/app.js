//Crie um formulário simples com campos de entrada e utilize JavaScript para recuperar os valores digitados nos campos usando a propriedade value. Exiba os valores no console e na tela.

function capturarDados() {
    let nome = document.getElementById('campoNome').value;
    let idade = document.getElementById('campoIdade').value;
    
    document.getElementById('mostraDados').textContent = `Seu nome é ${nome} e sua idade é ${idade}!`;
    console.log(`Seu nome é ${nome} e sua idade é ${idade}`);
}
