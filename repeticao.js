const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@dominio.com",
    telefone: ["11 222223333", "11 444444444"],

};

cliente.enderecos = [{
    rua: "R. Alatorio 1",
    numero: 123,
    apartamento: true,
    complemento: "Ap 321",
}];

for (let chave in cliente){
    //console.log(cliente[chave]);
    let tipo = typeof cliente[chave];
    if (tipo !== 'object' && tipo !== 'function'){
    console.log(`A chave ${chave} tem o valor ${cliente[chave]}`)
}
}