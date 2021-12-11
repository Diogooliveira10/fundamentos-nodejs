# Conceitos do Node

## O que é Node.js?
  * Plataforma open-source que permite a execução da linguagem JavaScript do lado do servido
  * Composto pela v8 + libuv + conjunto de módulos

## O que o Node.js veio resolver?
  * Criado pelo Ryan Dahl
  * Barra de progresso do flickr
  * Tecnologias da época não davam um bom suporte ao processo de I/O

## Características do Node.js
  * Arquitetura Event Loop
    * Call Stack
  * Single - Thread
  * Non-blocking I/O
  * Módulos próprios
    * HTTP
    * DNS
    * File System
    * Buffer
    * entre outros...

## Gerenciadores de Pacotes
  * NPM e Yarn
  * Yarn é utilizado nesse projeto por ser mais rápido do que o NPM, dando mais benefício ao projeto.

## Frameworks
  * Express: utilizado no projeto.
  * Egg.js
  * Nest.js
  * Adonis.js

# Conceitos sobre API Rest

## O que é API?
  * Application Programming Interface (Interface de Programação de Aplicativos)
  * Conjuntos de requisitos que determina como um aplicativo vai se comunicar com outro
  * Documentação para desenvolvedor

## O que é REST?
  * Representation State Transfer (Transferência Representacional de Estado)
  * Modelo de arquitetura
  * 6 Regras
    * 1 - Client-Server: Restrição básica da arquitetura Rest. De um lado tem o servidor e do outro tem o cliente, essa divisão tem objetivo de separar as responsabilidades, o cliente não presisa conhecer ou se preocupar o que está sendo implementado no serve, e da mesma forma o serve não precisa conhecer ou se preocupar com o que está acontecendo do lado do cliente.
    * 2 - Stateless: O cliente pode realizar quantas requisições ele quiser para o servidor, porém o servidor não armazena nenhum estado acessando as requisições. Cada requisição que fizermos, precisamos passar todas as informações necessárias para que a requisição seja processada.
    * 3 - Cache: Aplicação precisa ser contruída de uma forma que o cache possa ser feito, garantir que API tenha suporte para o cache.
    * 4 - Interface Uniforme: Como o cliente e o servido vão compartilhar essa interface (como se fosse um contrato).
      * Indentificação dos recursos
        * http://enderecodoservidor.com.br/products
        * http://enderecodoservidor.com.br/clients
      * Representação dos recursos: Significa que o servidor pode integrar a solicitações tanto de uma forma JSON, XML, HTML ou de qualquer outra forma.
      * Mensagens auto-descritivas: Importante que retorne para o cliente mensagens descritivas.
      * HATEOAS (Hypertext As The Engine Of Application State): Poder retornar links dentro da requisição.
    * 5 - Camadas: Aplicação deve permitir que exista camadas entre o Client-Server.
    * 6 - Códigos Sob Demanda (Opcional): Permite que as funcionalidades do client sejam estendidas na forma de script ou mini aplicativos.
 
 #  Métodos de Requisições
 
 ## HTTP Verbs
    * GET - Leitura
    * POST - Criação
    * PUT - Atualização
    * DELETE - Deleção
    * PATCH - Atualização parcial
    
 ## HTTP Codes
  * 1XX: Informativo: A solicitação foi aceita ou o processo continua em andamento.
  
  * 2XX: Confirmação
    * 200 - Requisição bem sucedida
    * 201 - Created: Geralmente usado para POST após um inserção.
    
  * 3XX: Redirecionamento
    * 301 - Moved Permanently
    * 302 - Moved
  
  * 4XX: Erro do cliente
    * 400 - Bad Request
    * 401 - Unauthorized
    * 403 - Forbidden
    * 404 - Not Found
    * 422 - Unprocessable Entity
   
  * 5XX: Erro no servidor: O servidor falhou ao concluir a solicitação. 
    * 500 - Internal Server Error
    * 502 - Bad Gateway

## Parâmetros das Requisições

   * Header Params: Parâmetros que vão no cabeçalho.
    Ex: Token, Controle de Seção, etc...
   ![image](https://user-images.githubusercontent.com/55243757/145676610-9093a882-2d43-420e-9d50-ccce4b4b3701.png)
   
   * Query Params: Parâmetros inseridos no final de uma URL.
     * http://enderecodoservidor.com.br/v1/users?page=2&limit=50
     * Chave - page / limit
     * Valor - 2 / 50
     * Separação - &
    
   * Route Params: Parâmetros que vão no meio da rota.
     * http://enderecodoservidor.com.br/v1/users/{id}
   
   * Body Params: Parâmetros no corpo da requisição, quando enviamos o parâmetro dentro do nosso Body.                                                                            
   ![image](https://user-images.githubusercontent.com/55243757/145676930-c94a0e0d-1e0a-40a0-9422-701784d6d24d.png)

# Boas práticas API Rest
   *  A utilização correta dos métodos HTTP
   *  A utilização correta dos status no retorno das respostas
   *  Padrão de nomenclatura
      *   Busca de usuários - GET
          * http://enderecodoservidor.com.br/v1/users
      *   Busca de usuários por id  - GET
          * http://enderecodoservidor.com.br/v1/users/1
      *   Busca de endereço do usuário - GET
          * http://enderecodoservidor.com.br/v1/users/1/address
      *   Deleção de um usuário - DELETE
          * http://enderecodoservidor.com.br/v1/users/1
      *   Atualização do status do usuário - PATCH
          * http://enderecodoservidor.com.br/v1/users/1/status
     
