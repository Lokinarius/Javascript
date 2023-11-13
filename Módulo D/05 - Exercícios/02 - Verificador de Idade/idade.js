function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value.length == 0 || fano.value > ano){
        window.alert("[ERRO] Verifique os dados novamente!")
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 4){
                //bebe m
                img.setAttribute('src', '00bebemenino.jpg')
            }else if(idade >= 4 && idade < 12){
                //menino
                img.setAttribute('src', '01menino.jpg')

            }else if(idade >= 12 && idade < 20){
                //garoto
                img.setAttribute('src', '02garoto.jpg')

            }else if(idade >= 20 && idade < 40){
                //homem
                img.setAttribute('src', '03homem.jpg')

            }else if(idade >= 40 && idade < 60){
                //senhor
                img.setAttribute('src', '04senhor.jpg')

            }else{
                //velho
                img.setAttribute('src', '05velho.jpg')

            }
        }else{
            genero = 'Mulher'
            if(idade >= 0 && idade < 4){
                //bebe f
                img.setAttribute('src', '00bebemenina.jpg')

            }else if(idade >= 4 && idade < 12){
                //menina
                img.setAttribute('src', '01menina.jpg')

            }else if(idade >= 12 && idade < 20){
                //garota
                img.setAttribute('src', '02garota.jpg')

            }else if(idade >= 20 && idade < 40){
                //mulher
                img.setAttribute('src', '03mulher.jpg')

            }else if(idade >= 40 && idade < 60){
                //senhora
                img.setAttribute('src', '04senhora.jpg')

            }else{
                //velha
                img.setAttribute('src', '05velha.jpg')
            }
        }
        res.style.textAlign = ' center'
        res.style.alignContent = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        document.getElementById("res").style.display = "block";
        res.appendChild(img)
    }
}