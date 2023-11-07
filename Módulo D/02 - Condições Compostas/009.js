function nacionalidade(){
  var txtpais = window.document.querySelector('input#txtpais')
  var res = window.document.querySelector('div#res')
  var pais = String(txtpais.value)
  if(pais == 'Brasil'){
    res.innerHTML = `Você nasceu no país ${pais}, portanto você é brasileiro!`
  }else{
    res.innerHTML = `Você nasceu no país ${pais}, portanto você é estrangeiro!`
  }
}










//var pais = 'EUA'
//console.log(`Vivendo em ${pais}`)
//if(pais == 'Brasil'){
  //  console.log('Brasileiro')
//}else{
  //  console.log('estrangeiro')
//}