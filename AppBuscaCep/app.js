function exibicao(dados) {
    console.log(dados)
    document.querySelector(".cep").value = dados.cep
    document.querySelector(".endereco").value = dados.logradouro
    document.querySelector(".bairro").value = dados.bairro
    document.querySelector(".cidade").value = dados.localidade

}



async function PesquisaCep(cep) 
{
    const dados = await fetch (`https://viacep.com.br/ws/${cep}/json/`).then(Response => Response.json())
    exibicao(dados)
    

}

function button() 
{
    const cep = document.querySelector('.cep').value
    PesquisaCep(cep)

}

function limpa() {
    document.querySelector(".cep").value=("");
    document.querySelector(".endereco").value=("");
    document.querySelector(".bairro").value=("");
    document.querySelector(".cidade").value=("");

}