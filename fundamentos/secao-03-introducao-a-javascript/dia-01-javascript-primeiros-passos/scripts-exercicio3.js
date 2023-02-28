let numeroUm = 50;
let numeroDois = 40;
let numeroTres = 60;

if (numeroUm > numeroDois && numeroUm > numeroTres) {
    console.log(numeroUm);
}
else if (numeroDois > numeroUm && numeroDois > numeroTres) {
    console.log(numeroDois);
}
else if (numeroTres > numeroUm && numeroTres > numeroDois) {
    console.log(numeroTres);
}
else {
    console.log('valor inválido');
}