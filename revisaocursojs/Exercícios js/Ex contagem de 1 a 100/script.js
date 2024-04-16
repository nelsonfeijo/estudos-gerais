let numeros = [];
let analise = document.getElementById('analise')
let tabela = document.getElementById('tabela');
tabela.innerHTML = ''
analise.innerHTML = ''

function adicionar (n) {
    let valor = parseInt(document.getElementById('num').value);
    if (valor < 1 || valor > 100){
        alert("Valor inválido.")
    } else if (numeros.includes(valor)){
        alert("Este valor já foi adicionado.")
    } else {
        numeros.push(valor);
        document.getElementById('tabela').innerHTML += `Valor ${valor} adicionado. <br>`
    }
}

function analisar() {
    let tamanho = numeros.length;
    let numCad = tamanho++
    let maior = Math.max(...numeros);
    let menor = Math.min(...numeros);
    let soma = 0
    let media = soma / tamanho
    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i];
    }
    
    document.getElementById('analise').innerHTML += `Ao todo, temos ${numCad} números cadastrados <br>`
    document.getElementById('analise').innerHTML += `O maior valor é: ${maior} <br>`
    document.getElementById('analise').innerHTML += `O menor valor é: ${menor} <br>`
    document.getElementById('analise').innerHTML += `Somando todos os valores temos ${soma} <br>`
    document.getElementById('analise').innerHTML += `A média é ${media} <br>`
}