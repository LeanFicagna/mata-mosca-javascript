var largura = 0
var altura = 0

var vidas = 1
var tempo = 10

function ajusteImage() {
    largura = window.innerWidth
    altura = window.innerHeight
}

ajusteImage()

var cronometro = setInterval( function() { 
    document.getElementById('cronometro').innerHTML = --tempo
    if(tempo == 0) window.location.href = 'vitoria.html'
}, 1000)


function positionRandom() {

    if(document.getElementById('mosca')) {
        document.getElementById('mosca').remove()
        if(vidas == 3)
            window.location.href = 'fim_de_jogo.html'
        else
            document.getElementById('v' + vidas++).src = "imagens/coracao_vazio.png"
    }

    var x = Math.floor(Math.random() * (largura - 90))
    var y = Math.floor(Math.random() * (altura - 90))

    var mosca = document.createElement('img')
    mosca.src = 'imagens/mosca.png'
    mosca.className = tamanhoMosca()
    mosca.style.left = x + 'px'
    mosca.style.top = y + 'px'
    mosca.style.position = 'absolute'
    mosca.id = 'mosca'
    mosca.onclick = function () { this.remove() }

    document.body.appendChild(mosca)
}

function tamanhoMosca() {
    var numbRand = Math.floor(Math.random() * 3)
    return numbRand == 0? 'mosquito1': numbRand == 1? 'mosquito2': 'mosquito3'
}