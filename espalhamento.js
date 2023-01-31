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

function ligaParaCliente (telefoneComencial, telefoneResidencial) {
    console.log(`Ligando para ${telefoneComencial}`);
    console.log(`Ligando para ${telefoneResidencial}`);
}

//ligaParaCliente(cliente.telefone[0], cliente.telefone[1]);
ligaParaCliente(...cliente.telefone);

const encomenda = {
    destinario: cliente.nome,
    //rua: cliente.enderecos[0]. rua,
    //numero: cliente.enderecos[0].numero,
    ...cliente.enderecos[0],
}

console.log(encomenda)