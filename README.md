# consumo-de-API
Práticas em consumo de API


## Consultas

Intermediação entre o front-end e o back-end;
Enviar para a api requisições (Request), para receber respostas (Response)

Obtenção com sucesso (200...)

Obtenção com redirecionamentos// ou erros de permissões (300...)

Erro de requisição (400...)

Erro de respostas (500...)


## Swagger

Framework que cria APIs, fornece também a documentação de como fazer a requisição normalmente em XML ou JSON.

## Método GET

Obter respostas para leitura // consultas da API
Necessário Recursos(após a barra /)
Pode ser utilizado também parametros com '?' (/id/deputados?nome=exemplo)


<!-- Anotações do Professor -->

As APIs possuem alguns elementos que servem a sua utilização:

- **Ponto de entrada:** é o endereço do serviço hospedado que pode ser acessado através de um navegador ou ferramenta de consumo de APIs.

Exemplo: <https://dadosabertos.camara.leg.br/api/v2>.

- **Recursos:** são serviços de dados disponiveis para consumo.

Exemplo: */deputados* -> <https://dadosabertos.camara.leg.br/api/v2/deputados>.

- **Parâmetros:** são informações ou filtros que servem para enviar dados de consulta ou para serem processados pela API.

Os parâmetros podem ser passados para a API através da URL ou no corpo (body) da requisção.

Exemplo: *?nome=bebeto* -> <https://dadosabertos.camara.leg.br/api/v2/deputados?nome=bebeto>.

- **Métodos:** são os modos de consumo de uma API, que podem ser:
    POST|GET|PUT|DELETE
    :---------------:|:---------------------:|:------------------:|:--------------:|
    inserção (CREATE)|consulta/leitura (READ)|atualização (PUT)| deleção (DELETE)

<hr>


Para esse projeto iremos utilizar o Node.js e o NPM (Node Package Manager):
- NPM -> (gerenciador de pacotes do node)
- Node.js v20.13.0(LTS) -> Long Term Suport (versão estável)
- NPX -> Node Package eXecuter (executor de pacotes do node)
- Intalação do json-server:
~~~bash
npm install json-server
~~~

<https://github.com/typicode/json-server>
Após a instalação é possivel utilizar através do localhost, e através do ThunderClient; 

- Instalação das extensões para formatação de arquivo .json5:
Foi feiito a intalação da extensão `JSON5 syntax extended` para que fosse reconhecido e formatado o script JSON5;

- Criação do script "start" no package.json:
No arquivo package.json foi criado um novo script para automatizar a inicialização do json-server, através do código:
~~~json5
  "scripts": {
    "start": "npx json-server data/db.json5"
  }
~~~ 

Após a criação do script, pode ser executado no terminal o seguinte comando:
~~~bash
npm start
~~~

- JSON5 vs. JSON <https://github.com/json5/json5>
Utilizamos JSON5 como forma experimental, devido muitos aplicativos ainda utilizar o JSON convensional pode ocorrer conflitos de requisições.

- Criação do arquivo `.gitignore`:
~~~bash
touch .gitignore
~~~
Foi criado esse arquivo justamente para ignorar todos os arquivos do node, no qual não fazemos versionamento.

No arquivo `.gitignore` foi selecionado a pasta `node_modules` da seguinte forma:
`/node_modules`

<!-- segunda aula de API -->

- Instalação de dependencias de projeto com o comando:
~~~bash
npm install
~~~

<!-- Terceira Aula 24/05-->

- Instalação das dependências;
- git pull and git fetch;
- npm start

<!-- cases -->
Pascalcas -> Classes ou interface
camelCase -> Funções

Instanciar 

const a = new Request()

<!-- Documentado arquivo js -->

### Requisição

Para criar uma nova requisição , podemos utilizar a função `fetch` API.

~~~js
const requisicao = new Request('http://localhost:3000/produtos', {
    "method": "GET",
    "headers": {
        "Content-Type": "application/json"
        
    }
});
~~~

Utilizamos `new Request()` para _instanciar_ a interface `Request()` na variável `requisicao`, de forma que ela se torna um objeto com os métodos exigidos por ssa interface.

A requisição é constituida por duas partes: uma URL e um objeto JSON contendo as opções da requisição.
A URL é o endereço do recurso que desejamos acessar. No caso, estamos acessando o recurso `produtos` em
`http://localhost:3000/produtos`.

O objeto JSON contém as opções da requisição. Nesse caso, estamos especificando o método HTTP (`"method": "GET"`) e o tipo de conteúdo (`"Content-Type": "application/json"`).
-> `headers` define os cabeçalhos da requisição.

~~~js
fetch(requisicao)
  .then(response => resposta.json())
  .then(resposta => { ... });
~~~

Agora, para enviar essa requisição, utilizamos a função `fetch()` que é uma função _assíncrona_ que retorna uma Promise. Essa Promisse é _resolvida_ (ou cumprida -- fullfilled) com o objeto `Response` que representa a resposta do servidor.
A função `then()` é utilizada para lidar com a resposta do servidor. Nesse caso, estamos utilizando `then()` duas vezes: uma vez para converter a resposta em JSON, como o método `json()` do objeto `resposta`, e outra vez para lidar com a resposta em si, já que o retorno do primeiro `then()` é o parâmetro de entrada do segundo `then()`.

O parâmetro de entrada de uma função `then()` é chamado de _função de callback_.