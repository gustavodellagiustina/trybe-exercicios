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

function addProperty(example, key, value) {
    example[key] = value;
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

// ============================================

// Tente criar uma função que exiba as habilidades do objeto student. Nesse caso, cada habilidade deve ser exibida no formato “Nome da habilidade, Nível: valor da chave referente à habilidade”. Após desenvolver a função, observe a sugestão de resposta a seguir e compare-a com sua solução.
/*
let student3 = {
    html: 'Muito Bom',
    css: 'Bom',
    javascript: 'Ótimo',
    softskills: 'Ótimo',
};

function listSkills(student) {
    let skillsArray = example.keys(student3);
    for (let index in skillsArray) {
        console.log(skillsArray[index] + ', Nível: ' + student[skillsArray[index]]);
    }
}
console.log(listSkills(student3));
*/

// ============================================

// 🚀 Exercícios - objetos e for/in

// ============================================

/*
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
*/

// ============================================

// Imprima no console uma mensagem de boas-vindas para a personagem acima, na qual tenha o nome dela. Para isso, utilize a sintaxe meuObjeto.chave.
// console.log('Bem-vinda, ' + info.personagem);

// ============================================

// Insira no objeto uma nova propriedade com o nome de chave ‘recorrente’ e o valor ‘Sim’ e, em seguida, imprima o objeto no console. Para isso, use a sintaxe meuObjeto['chave'] = valor.

/*
info['recorrente'] = 'Sim';
// console.log(info);
*/

// ============================================

// Faça um for/in que mostre todas as chaves do objeto.

/*
for (let key in info) {
    console.log(key);
}
*/

// ============================================

// Faça um novo for/in, mas agora mostre todos os valores das propriedades do objeto.

/*
for (let value in info) {
    console.log(info[value]);
}
*/

// ============================================

// Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: “Tio Patinhas”, “Christmas on Bear Mountain, Dell’s Four Color Comics #178”, “O último MacPatinhas”, “Sim”. Então, imprima os valores de cada objeto juntos, de acordo com cada uma das chaves.

/*
let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
};

infoValues = Object.values(info);
info2Values = Object.values(info2);

function verificaRecorrentes() {
    let mensagem;
    if (infoValues[3] === info2Values[3]) {
        mensagem = 'Ambos recorrentes';
    }
    return mensagem;
}

console.log(`${infoValues[0]} e ${info2Values[0]}
${infoValues[1]} e ${info2Values[1]}
${infoValues[2]} e ${info2Values[2]}
${verificaRecorrentes()}`);

// ---> retorno esperado <---
// Margarida e Tio Patinhas
// Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178
// Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas
// Ambos recorrentes // Atenção para essa última linha
*/

// ============================================

// 🚀 Leitura de Objetos

let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
        {
            titulo: 'O Pior Dia de Todos',
            autor: 'Daniela Kopsch',
            editora: 'Tordesilhas',
        },
    ],
};

