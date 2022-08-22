let fatorial = 1

for (let index = 10 ;index > 0 ;index -= 1){
    fatorial *= index
}
console.log(fatorial) 


//exercicio 2


let palavra = "Flamengo";
let invertida ="";

for (let index = 0; index < palavra.length; index += 1 ){
    invertida += palavra[palavra.length - 1 - index]
}
console.log (invertida)


//exercicio 3


let array = ['java', 'javascript', 'python', 'html', 'css'];

let maior = array[0] ;
let menor = array[0] ;

for (let index =0 ;index < array.length ;index += 1){
    if (array[index].length > maior.length){
        maior = array[index]
    }
}
for (let index =0; index < array.length ;index += 1){
    if (array[index].length < menor.length){
        menor = array[index]
    }
}

console.log (maior)
console.log (menor)

//exercicio 4

let maiorNumero = 0 ;

for (let numero =2 ;numero <= 50 ;numero += 1){
    let primo = true ;
    for (let divisor = 2 ; divisor < numero ;divisor += 1){
       if (numero  % divisor === 0){
        primo = false;
       }
    }
    if (primo) {    
        maiorNumero = numero ;
    }
}
console.log (maiorNumero)