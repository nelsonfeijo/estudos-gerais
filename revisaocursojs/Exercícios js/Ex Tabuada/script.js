function tabuada() {
    var numero = parseInt(document.getElementById('num').value);
    var res = document.getElementById('res');
    res.innerHTML = '';
    if (numero == 0) {
        res.innerHTML = 'A resposta de todos os valores é 0';
    }else {
        for (var c = 0; c <= 10; c += 1) {
            var nume = numero*c
            res.innerHTML += `${numero} X ${c} = ${nume} <br>`;
    }
    }
}