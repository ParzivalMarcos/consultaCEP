objeto = {
cep: "04888-100",
logradouro: "Rua Amélia Casal",
complemento: "",
bairro: "Chácara São Silvestre",
localidade: "São Paulo",
uf: "SP",
unidade: "",
ibge: "3550308",
gia: "1004"
}

var campoLogradouro = document.querySelector("#logradouro")
var campoBairro = document.querySelector("#bairro")
var campoLocalidade = document.querySelector("#localidade")
var campoUf = document.querySelector("uf")

campoLogradouro.textContent = objeto.logradouro
campoBairro.textContent = objeto.bairro