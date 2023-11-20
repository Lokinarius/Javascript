let  num = [5,6,8,1,4,7,3]
//vetor
num[7] = 2
//adicionar um valor em um elemento especifico
num.push(9)
//adicionar um novo elemento na ultima posição
num.length
//comprimento do vetor
num.sort()
//coloca todos os elemento em ordem crescente
console.log(`Nosso vetor é o ${num}`)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor de vetor é ${num[0]}`)

//for(let pos=0; pos<num.length; pos++)
for(let pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

let pos = num.indexOf(8)
console.log(`O valor estána posição ${pos}`)