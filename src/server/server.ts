// importa tudo que tiver que ser importado do express para nossa aplicação
import express from 'express';

//instância básica do servidor
const server = express();




//Rota GET/v1 - Rota que retorna uma mensagem padrão de Boas Vindas
server.get('/v1', (req, res)=> {
  return res.send('Bem vindo a API GeoPoly!');
});




//exportando o servidor
export { server};