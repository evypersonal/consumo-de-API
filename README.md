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
    POST|GET|UPDATE|DELETE
    :---------------:|:---------------------:|:------------------:|:--------------:|
    inserção (CREATE)|consulta/leitura (READ)|atualização (UPDATE)| deleção (DELETE)

<hr>


Para esse projeto iremos utilizar o Node.js e o NPM (Node Package Manager):
- Node.js v20.13.0(LTS) -> Long Term Suport (versão estável)