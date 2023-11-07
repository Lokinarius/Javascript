
var div = window.document.getElementById('area')
div.addEventListener('click', clicar)
div.addEventListener('mouseenter', entrar)
div.addEventListener('mouseout', sair)
function clicar(){
    div.innerText = 'clicou!'
}
function entrar(){
    div.innerText = 'entrou!'
    div.style.background = 'green'
}
function sair(){
    div.innerText = 'saiu!'
    div.style.background = 'gray'
}