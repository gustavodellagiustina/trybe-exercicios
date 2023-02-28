//lucro = venda - custoTotal (custo + imposto 20%);
//imposto de 20% sobre o custo: custo*0.2;
//qnt produtos vendidos: 1000;

//variáveis de setar:
let valorCustoUnidade = 10;
let valorVendaUnidade = 20;
let quantidadeVendida = 1000;
//variáveis de armazenar:
let valorCustoTotalUnidade = valorCustoUnidade + (valorCustoUnidade * 0.2); //10 + 2 = 12
let lucroUnidade = valorVendaUnidade - valorCustoTotalUnidade; //20 - 12 = 8
let lucroFinalGeral = lucroUnidade * quantidadeVendida;

if (valorCustoUnidade < 0 || valorVendaUnidade < 0) {
    console.log('Erro: proibido valor menor que zero.');
} else if (valorCustoUnidade >= 0 || valorVendaUnidade >= 0) {
    console.log(lucroFinalGeral);
}