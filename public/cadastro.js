const produtoPost = {
    "descricao": document.querySelector('#descricao').value,
    "preco": document.querySelector('#preco').value
}

function cadastraProduto(produtoPost){
    const requisicao = new Request('http://localhost:3000/produtos',{
        "method": "POST",
        "headers":{
            "Content-type": "application/json"
        },
        "body": JSON.stringify(produtoPost)
    })

    fetch(requisicao)

}

document.querySelector('#btAdd').addEventListener('click', cadastraProduto(produtoPost));
