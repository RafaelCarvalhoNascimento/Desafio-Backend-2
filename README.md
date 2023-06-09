<!DOCTYPE html>
<html>

<body>
  <h1>Desafio Backend</h1>

  <p>O Desafio foi criar uma REST API para resolver problemas de processamento e manipulação de dados geográficos.</p>

  <h2>Primeira Parte</h2>
  <ol>
    <li>
      <h3>GET /v1/</h3>
      <p>Retornar uma mensagem padrão com status 200 OK. </p>
      <p>URL para teste: http://localhost:3000/v1</p>
      <pre><code>{"message": "Bem vindo a API GeoPoly!"}</code></pre>
    </li>
    <li>
      <h3>POST /v1/auth</h3>
      <p>Simular uma rota de autenticação. Retornar uma das possíveis respostas dependendo do corpo da requisição.</p>
      <p>URL para teste: http://localhost:3000/v1/auth </p>
      <p>Exemplo de requisição:</p>
      <pre><code>{
  "email": "admin@exemplo.com.br",
  "password": "abcd1234"
}</code></pre>
      <p>Exemplo de resposta (200 OK) para caso as credenciais estejam corretas:</p>
      <pre><code>{
  "message": "Autenticado com sucesso!"
}</code></pre>
      <p>Exemplo de resposta (401 Unauthorized) para caso as credenciais estejam incorretas:</p>
      <pre><code>{
  "message": "Falha ao autenticar!"
}</code></pre>
      <p>Exemplo de resposta (400 Bad Request) para caso o formato do corpo da requisição (nome dos atributos errados e/ou atributos a mais ou a menos) esteja incorreto:</p>
      <pre><code>{
  "message": "Formato da requisição inválido!"
}</code></pre>
    </li>
  </ol>

  <h2>Segunda Parte</h2>
  <ol start="3">
    <li>
      <h3>GET /v2/places</h3>
      <p>Retornar uma lista de lugares com informações geográficas em formato JSON.</p>
      <p>URL para teste: http://localhost:3000/v2/places</p>
      <p>Exemplo de resposta (lugares em São José dos Campos - SP):</p>
      <pre><code>[
  {
    "id": 1,
    "name": "Parque da Cidade",
    "latitude": -23.221112,
    "longitude": -45.899678
  },
  {
    "id": 2,
    "name": "Praça Ulisses Guimarães",
    "latitude": -23.180038,
    "longitude": -45.884357
  },
]</code></pre>
    </li>
    <li>
      <h3>GET /v2/places/:id</h3>
      <p>Retornar um lugar específico da lista acima pelo seu ID em formato JSON.</p>
      <p>URL para teste: http://localhost:3000/v2/places/{id}</p>
      <p>Exemplo de resposta:</p>
      <pre><code>{
  "id": 1,
  "name": "Parque da Cidade",
  "latitude": -23.221112,
  "longitude": -45.899678
}</code></pre>
    </li>
  </ol>

  <h2>Terceira Parte</h2>
  <ol start="5">
    <li>
      <h3>POST /v3/places</h3>
      <p>Criar um novo lugar com informações geográficas a partir de um objeto JSON.</p>
      <p>URL para teste: http://localhost:3000/v3/places</p>
      <p>Exemplo de requisição:</p>
      <pre><code>{
  "name": "Lago do Vale",
  "latitude": -23.200443,
  "longitude": -45.896235
}</code></pre>
      <p>Exemplo de resposta:</p>
      <pre><code>{
  "id": 5,
  "name": "Lago do Vale",
  "latitude": -23.200443,
  "longitude": -45.896235
}</code></pre>
    </li>
    <li>
      <h3>PUT /places/:id</h3>
      <p>Atualizar um lugar específico pelo seu ID a partir de um objeto JSON com as informações a serem atualizadas.</p>
      <p>URL para teste: http://localhost:3000/v3/places/{id}</p>
      <p>Exemplo de requisição:</p>
      <pre><code>{
  "name": "Parque da Cidade - São José dos Campos",
  "latitude": -23.221112,
  "longitude": -45.899678
}</code></pre>
      <p>Exemplo de resposta:</p>
      <pre><code>{
  "id": 1,
  "name": "Parque da Cidade - São José dos Campos",
  "latitude": -23.221112,
  "longitude": -45.899678
}</code></pre>
    </li>
    <li>
      <h3>DELETE /places/:id</h3>
      <p>Deletar um lugar específico pelo seu ID.</p>
      <p>URL para teste: URL para teste: http://localhost:3000/v3/places/{id}</p>
      <p>Exemplo de resposta:</p>
      <pre><code>{
  "message": "Lugar removido com sucesso!"
}</code></pre>
    </li>
  </ol>

</body>
</html>
