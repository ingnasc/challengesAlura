//Crie uma função que converta a temperatura de Celsius para Fahrenheit e vice-versa. Utilize uma variável para indicar a escala desejada e um bloco condicional para determinar qual conversão realizar


function conversao(escala, valor){
    if(escala.toLowerCase() === 'celsius'){
        return (valor * 9/5) + 32;
    } else if(escala.toLowerCase() === 'fahrenheit') {
        return (valor - 32) * 5/9;
    } else {
        return 'Escala Inválida.';
    }
}
