const numerosPares = [2, 4, 6];
const numerosImpares = [2, 4, 5];

const numeros = [...numerosPares, ...numerosImpares];


const [num1, num2, ...outrosNum] = [1, 2, 3, 4, 5, 6, 7];


const pessoa = {
    nome: 'Thiago',
    idade: 22,
}

const pessoaComTelefone = {
    ...pessoa, telefone: 2321361651}

//console.log(pessoa, pessoaComTelefone)

//const nome = pessoa.nome;

const { idade } = pessoa;

//console.log(idade)

//function impreimeDados(dados) {
//    const { nome, idade} = dados
//    console.log(nome, idade)
//}

function impreimeDados({nome,idade}) {
    console.log(nome, idade)
}



impreimeDados(pessoa)