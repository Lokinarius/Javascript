let num = document.getElementById('fnum')
let lista = document.querySelector('select#flista')
let res = document.getElementById('res')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{

    }
}

function inLista(n){
if(Number(n) >= 1 && Number(n) <= 100){
    return true
}else{
    return false
}
}

function adicionar(){
    if(isNumero(num.value) && inLista(num.value, valores)){
       
    }else{
        window.alert("Valor inválido ou já encontrado na lista.")
    }
}