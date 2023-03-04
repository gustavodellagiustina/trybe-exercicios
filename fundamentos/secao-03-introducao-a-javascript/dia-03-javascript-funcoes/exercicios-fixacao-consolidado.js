// ======================================================

// FIXAÇÃO-1:

// Considere a variável saldo, que representa a quantia em conta de determinada(o) cliente do TrybeBank e escreva quatro programas que:

// ======================================================

/*
---> Adicione um valor ao saldo.
- Subtraia um valor do saldo.
- Multiplique o valor do saldo por uma taxa.
- Divida o valor do saldo.


let balance = 161;
let deposit;
let updatedBalance;

function addToBalance(deposit) {
    updatedBalance = (balance += deposit);
    return updatedBalance;
}
console.log(addToBalance(259));
*/

// ======================================================

/*
- Adicione um valor ao saldo.
---> Subtraia um valor do saldo.
- Multiplique o valor do saldo por uma taxa.
- Divida o valor do saldo.


let balance = 2921;
let withdrawal;
let updatedBalance;

function removeFromBalance(withdrawal) {
    updatedBalance = (balance -= withdrawal);
    return updatedBalance;
}
console.log(removeFromBalance(4289));
*/

// ======================================================

/*
- Adicione um valor ao saldo.
- Subtraia um valor do saldo.
---> Multiplique o valor do saldo por uma taxa.
- Divida o valor do saldo.


let balance = 1000;
let rate;
let updatedBalance;

function balanceTimesRate(rate) {
    updatedBalance = (balance * rate);
    return updatedBalance;
}
console.log(balanceTimesRate(0.5));
*/

// ======================================================

/*
- Adicione um valor ao saldo.
- Subtraia um valor do saldo.
- Multiplique o valor do saldo por uma taxa.
---> Divida o valor do saldo.


let balance = 3200;
let balanceDivider;
let updatedBalance;

function divideBalanceBy(balanceDivider) {
    updatedBalance = (balance / balanceDivider);
    return updatedBalance;
}
console.log(divideBalanceBy(2));
*/

// ======================================================

// FIXAÇÃO-2:

// ======================================================

// Faça um programa para adicionar clientes ao array de clientes do TrybeBank. Certifique-se de que a função deve receber um parâmetro do tipo string e imprimir uma mensagem de erro caso o parâmetro não seja do tipo string.

/*requisitos:
1. clientesTrybeBank.push(); 2. typeOf 'parameter' === 'string'; 3. if 'parameter' !== 'string' {console.log('Erro: parâmetro deve er uma string')}


let clientesTrybeBank = ['Ada', 'John', 'Gus'];
let newClient;
let errorMessage = 'Error: invalid value; type a string instead.';

function addClients(newClient) {
    if (typeof newClient === 'string') {
        clientesTrybeBank.push(newClient);
        return clientesTrybeBank;
    } else {
        return console.log(errorMessage);
    }
}

console.log(addClients('Lea'));
console.log(addClients(161));
console.log(addClients(true));
console.log(addClients(undefined));
console.log(addClients(null));
*/

// ======================================================

// Agora iremos escrever um programa que irá excluir um(a) cliente já existente do array de clientes do TrybeBank. Certifique-se de que a função deve receber um parâmetro do tipo string e imprimir uma mensagem de erro, caso o parâmetro não seja do tipo string e caso o(a) cliente não exista dentro do array.

// usar o metodo de array '.includes';
/*
function removeThisClient(client) {
    let clientesTrybeBank = ['Ada', 'John', 'Gus'];
    let clientIndex;
    let errorMessage = 'Error: not a string value OR client not found in the database.';

    if ((typeof client === 'string') && (clientesTrybeBank.includes(client) === true)) {
        clientIndex = clientesTrybeBank.indexOf(client);
        clientesTrybeBank.splice(clientIndex, 1)
    } else {
        return errorMessage;
    }
    return clientesTrybeBank;
}
console.log(removeThisClient('xabalu'));
*/