function calcular(){
    var txtv = window.document.querySelector('input#txtvel')
    var res = window.document.querySelector('div#res')
    var vel = Number(txtv.value)
    res.innerHTML = `Sua velocidade atual é de <strong>${vel}</strong> km/h.`
    if( vel > 80){
        res.innerHTML += ' Você foi <strong>MULTADO</strong> por excesso de velocidade'
    }
}
