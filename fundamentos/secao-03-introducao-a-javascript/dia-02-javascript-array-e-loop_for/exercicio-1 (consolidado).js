// ------------LIDANDO COM ARRAYS (ROCKET)------------------


// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1. Percorra o array imprimindo todos os valores contidos nele com a função console.log().

/*
for (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index]);
}
*/

// ===============================================

// 2. Some todos os valores contidos no array e imprima o resultado.

/*
let sum = 0;

for (let index = 0; index < numbers.length; index += 1) {
    sum += numbers[index];
    //console.log(sum);
}

console.log(sum);
*/

// ===============================================

// 3. Calcule e imprima a média aritmética dos valores contidos no array. A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos.
// Decomposição de passos (pseudocódigo): somar todos os elementos do array; armazenar este resultado em uma variável simples; e depois dividir esse valor pelo comprimento do array ('.length');

/*
let sum = 0;
let arithmeticAverage;

for (let index = 0; index < numbers.length; index += 1) {
    sum += numbers[index];
}

arithmeticAverage = sum / numbers.length;
console.log(arithmeticAverage);
*/

// ===============================================

// 4. Com base no código que acabou de gerar, faça com que: caso o valor final seja maior que 20, imprima a mensagem “Valor maior que 20”; e, caso não seja maior que 20, imprima a mensagem “Valor menor ou igual a 20”.

/*
let sum = 0;
let arithmeticAverage;

for (let index = 0; index < numbers.length; index += 1) {
    sum += numbers[index];
}

arithmeticAverage = sum / numbers.length;
console.log(arithmeticAverage);

if (arithmeticAverage > 20) {
    console.log('Valor maior que 20');
} else {
    console.log('Valor menor ou igual a 20');
}
*/

// ===============================================

// 5. Utilizando for, descubra o maior valor contido no array e imprima-o.

// ***confesso que tive que olhar o começo do gabarito (variável nova com o number[0] e for a partir do index=1) pra desempacar depois de passar uma cara tentando soluções mirabolantes envolventos dois FOR com um IF e até '.shift()'; realmente, o mais difícil é quebrar o problema em pedacinhos mais fáceis de resolver, pensar simples, simplificar o raciocício antes de sair 'codando', como o Gus falou em vários momentos...#lessons_learned

/*let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let greatestNumber = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
    if (numbers[index] > greatestNumber) {
        greatestNumber = numbers[index];
    }
}

console.log(greatestNumber);
*/

// ===============================================

// 6. Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “Nenhum valor ímpar encontrado”.

/*
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let oddNumbers = [];

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 !== 0) {
        oddNumbers.push(numbers[index]);
    }
}

if (oddNumbers.length > 0) {
    console.log('Odd numbers found: ' + oddNumbers + '. Total count: ' + oddNumbers.length + '.');
} else {
    console.log('Nenhum número ímpar encontrado.');
}
*/

// ===============================================

// 7. Utilizando for, descubra o menor valor contido no array e imprima-o.

/*
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let lowestNumber = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
    if (numbers[index] < numbers[0]) {
        lowestNumber = numbers[index];
    }
}

console.log(lowestNumber);
*/

// ===============================================

// 8. Utilizando for, crie um array que vá de 1 a 25 e imprima o resultado.

/*
let numbers = [];

for (let index = 1; index < 26; index += 1) {
    numbers.push(index);
}

console.log(numbers);
*/

// ===============================================

// 9. Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.

/*
let numbers = [];
let numbersBy2 = [];

for (let index = 1; index < 26; index += 1) {
    numbers.push(index);
}

for (let index = 0; index < numbers.length; index += 1) {
    numbersBy2.push(numbers[index] / 2);
}

console.log(numbersBy2);
*/

// ====================================LÓGICA DE PROGRAMAÇÃO E ALGORITMOS==============================

/*
// 1. Com base nessas informações, crie um algoritmo que imprima na tela o fatorial de 10.
// diminuir um a um e multiplicar o índice pela variável, parecido com o somatório;

let factorial = 1;

for (let index = 5; index > 0; index -= 1) {
    factorial *= index;
}

console.log(factorial);
*/

// =========================

/*
// 2. Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra, como a palavra “banana” para “ananab”.

let word = 'ananab';
let reverseWord = '';

for (let index = 0; index - word.length; index += 1) {
    reverseWord += word[word.length - 1 - index]
}

console.log(reverseWord);
*/

// =========================

/*
// 3. Utilize a estrutura de repetição for para escrever dois algoritmos: um que imprima no console a maior palavra desse array e outro que imprima a menor. Considere o número de caracteres de cada palavra.

let array = ['java', 'javascript', 'python', 'html', 'css', 'ij'];
let longestWord = array[0];

for (let index = 1; index < array.length; index += 1) {
    if (array[index].length > longestWord.length) {
        longestWord = array[index];
    }
}
console.log(longestWord);
//
let shortestWord = array[0];

for (let index = 1; index < array.length; index += 1) {
    if (array[index].length < shortestWord.length) {
        shortestWord = array[index];
    }
}
console.log(shortestWord);
*/