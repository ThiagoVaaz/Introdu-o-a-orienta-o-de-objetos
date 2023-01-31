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


const chavesDoObjeto = Object.keys(cliente);
console.log(chavesDoObjeto)


if(!chavesDoObjeto.includes("enderecos")){
    console.console.error("Erro. É necessário ter um endereço cadastrado");
}





