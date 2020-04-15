// https://viacep.com.br/ws/04888100/json/
var cep = document.querySelector("#cep")
var botao = document.querySelector("#buscar")

// cep.addEventListener("input", function(){
//     cepDigitado = cep.value
// })

botao.addEventListener("click", function(){
    consultaApi(cep.value)
})

function consultaApi(cep){
    var xhr = new XMLHttpRequest()
    endereco = "https://viacep.com.br/ws/" + cep +"/json/"

    xhr.open("GET", endereco)
    xhr.addEventListener("load", function(){
            var resposta = xhr.responseText
            var dado = JSON.parse(resposta)
            adicionaDadosNaSection(dado)
            adicionaEnderecoCompleto(dado)
    })
    xhr.send()
}

function adicionaDadosNaSection(dado){
    var campoLogradouro = document.querySelector("#logradouro")
    var campoComplemento = document.querySelector("#complemento")
    var campoBairro = document.querySelector("#bairro")
    var campoLocalidade = document.querySelector("#localidade")
    var campoUf = document.querySelector("#uf")

    campoLogradouro.value = dado.logradouro
    campoComplemento.value = dado.complemento
    campoBairro.value = dado.bairro
    campoLocalidade.value = dado.localidade
    campoUf.value = dado.uf
}

function adicionaEnderecoCompleto(dado){
    var enderecoCompleto = document.querySelector("#endereco-completo")
    enderecoCompleto.textContent = `${dado.logradouro}, ${dado.bairro}, ${dado.localidade}, ${dado.uf}`
}