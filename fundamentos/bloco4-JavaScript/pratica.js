let a = 10
let b = 5

let adicao = a + b
let subtração = a - b
let multiplicacao = a * b
let divisao = a / b
let modulo = a % b



const numero1 = 100
const numero2 = 200

if (numero1 > numero2){
    console.log (numero1)
} else {
    console.log (numero2)
}


const n1 = 300
const n2 = 150
const n3 = 155645

if (n1>n2 && n1 > n3) {
    console.log (n1)
    } else if (n2>n1 && n2 > n3) {
    console.log (n2)
    } else {
        console.log (n3)
    }


let valor = true 

if (valor === true){
    console.log ("positivo")
} else {
    console.log ("negativo")
}


let angulo1 = 90
let angulo2 = 30
let angulo3 = 150

let somaDosAngulos = angulo1 + angulo2 + angulo3
let positivos = angulo1 > 0 && angulo2 > 0 && angulo3 > 0

if (positivos){
    if (somaDosAngulos === 180) {
        console.log (true)
    }else {
        console.log (false)
    }
} else {
    console.log ("Erro")
}



const nu1 = 1
const nu2 = 2
const nu3 = 3

let resultado = false

if ((nu1 % 2 === 0 || nu2 % 2 === 0 || nu3 % 2 === 0)) {
  resultado = true
}
console.log(resultado)