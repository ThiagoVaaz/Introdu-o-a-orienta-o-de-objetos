const cliente = {
    nome: "Thiago",
    idade: 22,
    cpf: "11122233345",
    email: "thiago@dominio.com"
}


console.log(`O nome do cliente é ${cliente["nome"]} e essa pessoa tem ${cliente["idade"]} anos`)


const chaves = ["nome", "idade", "cpf", "email", "altura"]

chaves.forEach((chave)=>
    console.log(`A chave ${chave} tem o valor de ${cliente[chave]}`)
);