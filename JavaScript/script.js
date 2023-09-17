

let Nome = "Lúcio José Cradoso"

console.log("Ola MUNDO!")
//Aterando o nome
console.log(Nome.replace("Cradoso","Cardoso"))
//Transformando em maiúsculas
let NOME = Nome.toUpperCase()
console.log(NOME)


var marcas = ["Adidas", "NIKE", "JORDAN", "UXER"]

//MOSTRAR TODOS ELEMENTOS DO ARRAY
console.log(marcas)

//MOSTRAR QUANTIDADE DE ELEMENTOS DO ARRAY
console.log(marcas.length)

//Eliminar o último elemento do ARRAY
marcas.pop()
console.log(marcas)

//Adicionar elemento na última posição do ARRAY
marcas.push("LEXUS")
console.log(marcas)

//Reverter elementos do ARRAY
console.log(marcas.reverse())

//Transformar ARRAY em String
console.log(marcas.toString())
//Separar String com -
console.log(marcas.join("-"))

// --------

let frutas = [{nome:"Banana", cor:"Amarela"},{nome:"Maçã", cor:"Verde"}]
console.log(frutas)

//Condicionais
/*
let idade=prompt("Qual é a sua idade")
if(idade>=18){
    console.log("Maior de idade")
}else{
    console.log("Menor de idade")
}*/

//REPETIÇÃO
numero =0;
while(numero<=idade){
    console.log(numero)
    numero ++ //Ou numero = numero +1
}

for(numero=0; numero<=idade; numero++){
    console.log(numero," idade")
}

//Buscar data
var data = new Date()
console.log(data)
let dia = data.getUTCDay()+3
var mes = data.getMonth()+1
var ano = data.getFullYear()+1
console.log("Dia:",dia," Mes:", mes, " Ano:", ano)

//Funcões

function Somar(numero1, numero2){
    return numero1 + numero2;
}

console.log("Resultado da soma: ",Somar(4,7))

//Validar idade usando funcão
let Validar;
function validarIdade(idade){
if(idade>=18){
    Validar = true;
    return Validar;
}else{
    Validar=false;
    return Validar
}
}

/*var idadee = prompt("Digite a sua idade")
validarIdade(idadee)
console.log(Validar)*/

//

function btn(){
    let n1= document.querySelector("#number1")
let n2= document.querySelector("#number2")
let setic = document.querySelector("section")
    setic.innerHTML= `<b>Resultado da soma:</b> ${Number(n1.value)+ Number(n2.value)} <br/>`
}
function subtracao(){
    let n1= document.querySelector("#number1")
let n2= document.querySelector("#number2")
let setic = document.querySelector("section")
    setic.innerHTML= `<b>Resultado Da Subtração:</b> ${Number(n1.value)- Number(n2.value)} <br/>`
}
function multiplicacao(){
    let n1= document.querySelector("#number1")
let n2= document.querySelector("#number2")
let setic = document.querySelector("section")
    setic.innerHTML= `<b>Resultado da multiplicação:</b> ${Number(n1.value)* Number(n2.value)} <br/>`
}
function divisao(){
    let n1= document.querySelector("#number1")
let n2= document.querySelector("#number2")
let setic = document.querySelector("section")
    setic.innerHTML= `<b>Resultado da divisão:</b> ${Number(n1.value)/ Number(n2.value)} <br/>`
}
function github(){
    window.open("https://github.com/Lucio-jose/") // Abre outro ABA
   // window.location.href="https://github.com/Lucio-jose/"   ACESSAR NO MESMO ABA
}
function linkedin(){
    window.open("https://www.linkedin.com/in/lucio-jose-7c2002c7") // Abre outro ABA
   // window.location.href="https://github.com/Lucio-jose/"   ACESSAR NO MESMO ABA
}
function instagram(){
    window.open("https://www.instagram.com/lucio_jose7") // Abre outro ABA
   // window.location.href="https://github.com/Lucio-jose/"   ACESSAR NO MESMO ABA
}
//Enventos com funcçoes
function mousemove(){
    alert("Seja bem-vindo/a")
}