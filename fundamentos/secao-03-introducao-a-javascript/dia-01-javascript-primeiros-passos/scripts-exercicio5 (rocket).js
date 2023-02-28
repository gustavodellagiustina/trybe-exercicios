// definir tres variaveis;
// anguloUm + anguloDois + anguloTres === 180;

let anguloUm = -50;
let anguloDois = 60;
let anguloTres = 170;
let somaDosAngulos;

if ((anguloUm > 0 && anguloDois > 0 && anguloTres > 0) && (anguloUm + anguloDois + anguloTres === 180)) {
    somaDosAngulos = anguloUm + anguloDois + anguloTres;
    console.log(true, ': a soma dos ângulos deste triângulo corresponde a', somaDosAngulos);
}
else {
    console.log(false, ': isto não é um triângulo pois a soma dos três ângulos não corresponde a 180 ou há ângulo(s) com valor(es) negativo(s)');
}