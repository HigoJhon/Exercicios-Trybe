let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

console.log(numbers) 

let resultado = 0;

for (let index = 0 ; index < numbers.length; index += 1){
    resultado += numbers[index]
}
console.log(resultado)

let maiorNumero = numbers[0]

for (let index = 1; index < numbers.length; index += 1){
    if (numbers[index] > maiorNumero) {
        maiorNumero = numbers[index]
    }
}

console.log(maiorNumero)

let valoresImpa = 0

for (index = 0 ;index < numbers.length ;index += 1){
    if (numbers[index] % 2 !== 0 ){
        valoresImpa += 1;
    }
} if (maiorNumero === 0){
    console.log("nenhum valor impa encontrado")
} else {
    console.log(valoresImpa)
}

let menorNumero = numbers[0]

for (let index = 1; index < numbers.length; index += 1){
    if (numbers[index] < menorNumero) {
        menorNumero = numbers[index]
    }
}

console.log(menorNumero)

let numero1a25 = []

for (let index = 1; index <= 25 ; index += 1) {
    numero1a25.push(index)
}
console.log(numero1a25)

for (let index = 0 ;index < numero1a25.length ;index += 1){
    console.log(numero1a25[index] /2)
}