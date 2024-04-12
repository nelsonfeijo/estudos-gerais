function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.querySelector('div#res');

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[erro]');
    } else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');

        if (fsex[0].checked) {
            genero = 'Homem';
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'homem_criança.jpg');
            } else if (idade < 21) {
                img.setAttribute('src', 'homem_adulto.jpg');
            } else if (idade < 50) {
                img.setAttribute('src', 'homem_adulto.jpg');
            } else {
                img.setAttribute('src', 'homem_velho.jpg');
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher';
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'mulher_criança.jpg');
            } else if (idade < 21) {
                img.setAttribute('src', 'mulher_adolecente.jpg');
            } else if (idade < 50) {
                img.setAttribute('src', 'mulher_adulta.jpg');
            } else {
                img.setAttribute('src', 'mulher_idosa.jpg');
            }
        }
        
        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`;
        res.appendChild(img);
    }
}
