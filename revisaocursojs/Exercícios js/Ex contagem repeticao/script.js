function contar() {
    var inicio = parseInt(document.getElementById('txtinicio').value);
    var fim = parseInt(document.getElementById('txtfim').value);
    var passo = parseInt(document.getElementById('txtpasso').value);
    var res = document.getElementById('res');

    res.innerHTML = '';

    if (inicio < fim && passo > 0) {
        for (var i = inicio; i <= fim; i += passo) {
            res.innerHTML += `\u{1F449} ${i} `;
        }
    } else {
        res.innerHTML = 'Valores inválidos! Por favor, verifique.';
    }
}
