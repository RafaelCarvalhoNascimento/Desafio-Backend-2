//importa o router que nos permite criar um middleware onde podemos especificar todas as nossas rotas
import { Router } from 'express';
import {StatusCodes} from 'http-status-codes';


const router = Router();

//Rota GET/v1 - Rota que retorna uma mensagem padrão de Boas Vindas
router.get('/v1', (_, res) => {
  return res.status(StatusCodes.ACCEPTED).json({ message: 'Bem vindo a API GeoPoly!' });
});



// Rota POST /v1/auth
router.post('/v1/auth', (req, res) => {
  const { email, password } = req.body;

  // Verifica se o formato da requisição está correto
  if (!email || !password) {
    
    return res.status(StatusCodes.BAD_REQUEST).json({ message: 'Requisição inválida' });
  }

  // Verifica as credenciais e retorna a resposta adequada
  if (email === 'admin@exemplo.com.br' && password === 'abcd1234') {
    return res.status(StatusCodes.ACCEPTED).json({ message: 'Autenticado com sucesso' });
    
  } else {
    return res.status(StatusCodes.UNAUTHORIZED).json({ message: 'Credenciais inválidas' });
    
  }
});




export {router};