function loadin(){
    var msg = document.getElementById('hora')
    var imga = document.getElementById('foto')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora > 0 && hora <=11) {
        //bom dia
        imga.src = 'imagens/manha.png'
        document.body.style.backgroundColor = '#ecc1a1'
    } else if (hora >= 12 && hora < 18) {
        //boa tarde
        imga.src = 'imagens/tarde.png'
        document.body.style.backgroundColor ='#593f32'
    } else {
        //boa noite
        imga.src = 'imagens/noite.png'
        document.body.style.backgroundColor = '#204067'
    }
}
