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

cliente.enderecos.push({
    rua: "R. Alatorio 2",
    numero: 456,
    apartamento: false,
})

console.log(cliente.enderecos);



const listaAPenasApartamentos = cliente.enderecos.filter(
    (endereco) => endereco.apartamento === true
); 

console.log(listaAPenasApartamentos);