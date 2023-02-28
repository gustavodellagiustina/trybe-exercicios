// dado um BRUTO, calcula os DESCONTOS e informa o LÍQUIDO;
// salario-base (INSS) = BRUTO - (BRUTO * alíquota_INSS);
// desconto_IR = (salario-base * alíquota_IR) - dedução_no_valor_do_imposto;
// LÍQUIDO = salario-base - desconto_IR;
// =========================================================================================================;


let salarioBruto = 2500; //setado por mim;
let valorAliquotaINSS;
let salarioBase;
let valorDoIR;
let salarioLiquido;


// ===================================== abaixo define o salario-base =====================================;


if (salarioBruto <= 1556.94) {
    valorAliquotaINSS = salarioBruto * 0.08;
    salarioBase = salarioBruto - valorAliquotaINSS;
    console.log(salarioBase);
}

else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
    valorAliquotaINSS = salarioBruto * 0.09;
    salarioBase = salarioBruto - valorAliquotaINSS;
    console.log(salarioBase);
}

else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
    valorAliquotaINSS = salarioBruto * 0.11;
    salarioBase = salarioBruto - valorAliquotaINSS;
    console.log(salarioBase);
}

else if (salarioBruto > 5189.82) {
    valorAliquotaINSS = 570.88;
    salarioBase = salarioBruto - valorAliquotaINSS;
    console.log(salarioBase);
}


// ===================================== abaixo define o valor do IR =====================================;


if (salarioBase <= 1903.98) {
    salarioLiquido = salarioBase;
    console.log(salarioLiquido);
}

else if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {
    valorDoIR = (salarioBase * 0.075) - 142.80;
    salarioLiquido = salarioBase - valorDoIR;
    console.log(salarioLiquido);
}

else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
    valorDoIR = (salarioBase * 0.15) - 354.80;
    salarioLiquido = salarioBase - valorDoIR;
    console.log(salarioLiquido);
}

else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
    valorDoIR = (salarioBase * 0.225) - 636.13;
    salarioLiquido = salarioBase - valorDoIR;
    console.log(salarioLiquido);
}

else if (salarioBase > 4664.68) {
    valorDoIR = (salarioBase * 0.275) - 869.36;
    salarioLiquido = salarioBase - valorDoIR;
    console.log(salarioLiquido);
}