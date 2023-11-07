function calcular(){
    var txtv = window.document.querySelector('input#txtvel')
    var res = window.document.querySelector('div#res')
    var vel = Number(txtv.value)
    res.innerHTML = `Sua velocidade atual é de <strong>${vel}</strong> km/h.`
    if( vel > 80){
        res.innerHTML += ' Você foi <strong>MULTADO</strong> por excesso de velocidade'
    }
}





//console.log('Olá, mundo!')
//var vel = 60.5
//console.log(`A velocidade do seu carro é ${vel}km/h`)
//if(vel > 60){
    //console.log(`Você ultrapassou a velocidade permitida. MULTADO!`)
//}