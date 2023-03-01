// let numero = 8;

// console.log(numero * 1);

/* for (inicialização; condição de repetição; incremento/decremento) {} */

/* for (let contador = 1; contador <= 10; contador += 1) {
    console.log(numero * contador)
} */

// ======================================================

/* let nomes = ['Paula', 'Roberto', 'Amanda', 'Cleide', 'Daniel', 'Rods', 'Rogério', 'Joana'];

for (let indice = 0; indice < nomes.length; indice += 1) {
    console.log('Olá, ' + nomes[indice]);
} */

// ======================================================

/* let counter = 0;

while (counter !== 5) {
    counter += 1;
} */
/*
let d1 = Math.ceil(Math.random() * 6);
console.log('resultado d1:', d1);
let d2 = Math.ceil(Math.random() * 6);

while (d1 !== d2) {
    d2 = Math.ceil(Math.random() * 6);
    console.log('resultado d2:', d2);
}
*/
// ======================================================

// AULA AO VIVO =========================================

// sorteio dos numeros:
let lotteryNumbers = [];
let firstGame = [12, 47, 2, 31, 58, 8];

for (let index = 0; index < 6; index += 1) {
    let randomNumber = Math.ceil(Math.random() * 60)
    if (!lotteryNumbers.includes(randomNumber)) {
        lotteryNumbers.push(randomNumber);
    } else {
        index -= 1;
    }
}

console.log(lotteryNumbers);

// comparação do sorteio com o meu jogo:
let numberOfHits = 0;
let hits = [];

for (let indexLottery = 0; indexLottery < lotteryNumbers.length; indexLottery += 1) {
    for (let indexGame = 0; indexGame < firstGame.length; indexGame += 1) {
        if (lotteryNumbers[indexLottery] === firstGame[indexGame]) {
            numberOfHits += 1;
            hits.push(lotteryNumbers[indexLottery]);
        }
    }
}
// mostra os resultados:
console.log('Números sorteados: ' + lotteryNumbers);
console.log('Jogo: ' + firstGame);
console.log('Quantidade de acertos: ' + hits);
console.log('Números acertados: ' + numberOfHits);