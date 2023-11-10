function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 5 && hora < 12){
        img.src = '../Imagens/manha.jpg'
        document.body.style.background = '#d6c67f'
    } else if(hora >= 12 && hora < 18){
        img.src = '../Imagens/tarde.jpg'
        document.body.style.background = '#e48360'
    }else{
        img.src ='../Imagens/noite.jpg'
        document.body.style.background = '#380a38'
    }
}