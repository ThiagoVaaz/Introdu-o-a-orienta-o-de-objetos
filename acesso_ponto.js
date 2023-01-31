const cliente = {
    nome: "Thiago",
    idade: 22,
    cpf: "11122233345",
    email: "thiago@dominio.com"
}


console.log(`O nome do cliente é ${cliente.nome} e essa pessoa tem ${cliente.idade} anos`)
//simn um "." é um operador 


console.log(`Os tres primeiros dígitos do CPF são: ${cliente.cpf.substring(0, 3)}`);