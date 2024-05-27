// Busque algo "fetch"
// fetch(requisicao) // retornar uma resposta

const reqGet = new Request('http://localhost:3000/produtos', {
    "method": "GET",
    "headers": {
        "Content-Type": "application/json"
        
    }
});



// Fetch retorna uma promessa de resposta
// fetch(requisicao).then((resposta) => {console.log(resposta)})
// Quando possui um parametro posso eliminar os parentes, se tiver uma linha de função, posso eliminar as chaves
                    // (parametro)  (return)
fetch(reqGet)
    .then(resposta => resposta.json())
    .then(resposta => {

        const ul = document.createElement('ul');

        resposta.forEach(produto => {
            const liId = document.createElement('li');
            liId.innerHTML = produto.id;
            
            const liDescricao = document.createElement('li');
            liDescricao.innerHTML = produto.descricao;
            
            const liPreco = document.createElement('li');
            liPreco.innerHTML = produto.preco;


            ul.append(liId,liDescricao, liPreco);
            
        })
        document.body.appendChild(ul)
    });


