
var nome = window.prompt('Qual o seu nome?')
window.alert('Olá, ' + nome + ', é um prazer lhe conhecer!')
document.write(`Hello, ${nome} ! <br/> `)
document.write(`Seu nome tem ${nome.length} letras <br/>`)
//.length = quantos caracteres uma string tem
document.write(`Seu nome em maisculo é ${nome.toUpperCase()} <br/>`)
//.toUpperCase() = tudo em maisculo
//.toLowerCase() = tudo em minusculo
var n1 = Number(window.prompt('Digite um número:'))
var n2 = Number(window.prompt('Digite outro número:'))
//Adição = (number + number)
//Concatenação = (string + string)
var s = n1 + n2
//Number.parseInt converte uma "string" para um "inteiro"
//Number.parseFloat converte uma "string" para "real"
//Number sozinho também funciona, mas o que define  se é real ou inteiro são os dados fornecidos 
// Para converter outro tipo para string se utiliza um dos comandos abaixo:
//String(n) ou n.toString()
window.alert(`A soma entre ${n1} e ${n2} é igual a ${s}`)
// outra forma de concatenar é ulizando o ${}
// mas para utilizar o ${} a saída deve estar entre ``(crases)

//n.toFixed().replace --> modificar casas decimais de um number
//n1.toLocaleString('pt-BR',{style:'currency', currency:'BRL'})