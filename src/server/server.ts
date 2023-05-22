// importa tudo que tiver que ser importado do express para nossa aplicação
import express from 'express';

//importa as rotas de Routes
import router from './routes';

//instância básica do servidor
const server = express();

//Resolve o problema para receber dados na Rota v1/auth
server.use(express.json());


server.use(router);

//exportando o servidor
export { server};