// Crie uma variável player e atribua a ela um objeto que contenha as variáveis listadas na sequência.
/*
let name = 'Marta';
let lastName = 'Silva';
let age = 34;
let medals = { golden: 2, silver: 3 };


const player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: {
        golden: 2,
        silver: 3,
    }
};

// Acesse as chaves name, lastName e age por meio da sintaxe meuObjeto.chave e concatene as informações para imprimir no console uma mensagem no seguinte formato: “A jogadora Marta Silva tem 34 anos de idade”.
// console.log('A jogadora ' + player.name + ' ' + player.lastName + ' tem ' + player.age + ' anos de idade.');

// Adicione ao objeto a chave bestInTheWorld por meio da sintaxe meuObjeto.chave = valor e atribua a essa chave um array que contenha as datas em que a jogadora Marta foi considerada a melhor do mundo. [2006, 2007, 2008, 2009, 2010, 2018]
player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];
// console.log(player);

// Acesse a chave bestInTheWorld por meio da sintaxe meuObjeto['chave'] e faça um console.log no seguinte formato: “A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes”.
// console.log('A jogadora Marta Silva foi eleita a melhor do mundo por ' + player['bestInTheWorld'].length + ' vezes');

// Acesse a chave medals por meio da sintaxe meuObjeto.chave e faça um console.log no seguinte formato: “A jogadora possui 2 medalhas de ouro e 3 medalhas de prata”.
// console.log('A jogadora possui ' + player.medals.golden + ' medalhas de ouro' + ' e ' + player.medals.silver + ' medalhas de prata.');
*/

// ============================================

// Com base no objeto a seguir, utilize for/in e imprima no console a mensagem 'Olá, xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.
/*
let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
};

for (let index in names) {
    console.log('Olá, ' + names[index] + '.');
}
*/

// Usando o objeto abaixo, utilize for/in e imprima um console.log com as chaves e valores desse objeto.
/*
let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
};

for (let index in car) {
    console.log(index + ': ' + car[index]);
}
*/

// ============================================

// Após ter conhecido diferentes maneiras de associar chaves e valores a um objeto, que tal praticar? Adicione suas informações ao objeto student = {}, como nome, e-mail, telefone, GitHub e LinkedIn, usando os métodos abordados no conteúdo.
/*
const student = {};
let newKey;

function addProperty(object, key, value) {
    object[key] = value;
};

newKey = 'firstName';
let firsName = 'Gustavo';
addProperty(student, newKey, firsName);
console.log(student);

newKey = 'lastName';
let lastName = 'Della Giustina';
addProperty(student, newKey, lastName);
console.log(student);

newKey = 'age';
let age = 27;
addProperty(student, newKey, age);
console.log(student);

newKey = 'human';
let human = true;
addProperty(student, newKey, human);
console.log(student);

newKey = 'country';
let country = 'Brazil';
addProperty(student, newKey, country);
console.log(student);
*/