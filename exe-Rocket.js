//Some todos os valores contidos no array e imprima o resultado;
//Calcule e imprima a média aritmética dos valores contidos no array;

let numbers = [1, 5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0; //criei variavel para receber a soma 

console.log(numbers);

//percorre o array
for (let index = 0; index < numbers.length; index += 1) {
    soma += numbers[index] //realiza a soma
}
console.log(soma) //Retorna o svalores somandos

//média aritimética
let media = soma / numbers.length;

//faça com que, caso o valor final seja maior que 20, imprima a mensagem: “valor maior que 20”.
// Caso não seja, imprima a mensagem: “valor menor ou igual a 20”;
if (soma > 20) {  // console.log('valor maior que 20');
} else if (soma <= 20) {
    console.log('valor menor ou igual a 20');
}

//Utilizando for, descubra qual o maior valor contido no array e imprima-o;
let numbers1 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let max = Math.max(...numbers1); //Método Math.max para achar maior valor
console.log(max);


//Descubra quantos valores ímpares existem no array e imprima o resultado. 
//Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”;

let impar = 0
for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index[0]] % 2 === 0) {
        impar = numbers;
        console.log(impar);
    } else {
        console.log('nenhum valor ímpar encontrado');
    }
}



// Utilizando for,
// crie um array que vá de 1 até 25 e imprima o resultado;
// Utilizando o array que acabou de criar,
// imprima o resultado da divisão de cada um dos elementos por 2.

let array = [];
let size = 25;

for (let index = 1; index <= size; index += 1) {
    array.push(index);
    console.log(index / 2);
} console.log(array);


//Um número primo é inteiro maior do que 1 que
//possui somente dois divisores, ou seja, é divisílvel por 1
//por ele mesmo.
//Sabendo disso escreva um algoritimo que retorne o "maior número primo entre 2 e 50".
let primo = false

for (let index = 50; primo == false; 1 -= 1) {
    if ((index % 2 !== 0) && (index % 3 !== 0) && (index % 5 !== 0) && (index % 7 !== 0)) {
        primo = true
        console.log(index);
    }
}

let nPrimo = 1;

for (let index = 2; index < 50; index += 1) {
    let ePrimo = true;

    for (let index2 = 2; index2 < index; index2 += 1) {
        if (index % index2 === 0) {
            ePrimo = false;
        }
        if (ePrimo) {
            nPrimo = index;
        }
    }
} console.log(nPrimo)


function mode(nRepetido) {
    if (nRepetido.length == 0)
        return null;
    var map = {};
    var posicao = array[0], count = 1;
    for (var i = 0; i < array.length; i++) {
        var obj = array[i];
        if (map[obj] == null)
            map[obj] = 1;
        else
            map[obj]++;
        if (map[obj] > count) {
            posicao = obj;
            count = map[obj];
        }
    }
    return posicao;
}