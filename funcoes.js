const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@dominio.com",
    telefone: ["11 222223333", "11 444444444"],
    saldo: 200,
    efetuaPagamento: function(valor){
        if (valor > this.saldo){
        console.log("Saldo insuficiente")
         } else {
        this.saldo -= valor;
            console.log(`Pagamento realizado. Novo Saldo: ${this.saldo}`)
         }
    },
};


cliente.efetuaPagamento(25)


const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20"
   }
   
   const objPersonagem2 = Object.create(objPersonagem)
   objPersonagem2.nome = "Gandalf, o Cinzento"
   
   console.log(objPersonagem.nome) //Gandalf
   console.log(objPersonagem2.nome) //Gandalf, o Cinzento   