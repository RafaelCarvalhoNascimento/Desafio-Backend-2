import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

class AuthController {
  public login(req: Request, res: Response): Response {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(StatusCodes.BAD_REQUEST).json({ message: 'Requisição inválida' });
    }

    // Verificar as credenciais e retornar a resposta adequada
    if (email === 'admin@exemplo.com.br' && password === 'abcd1234') {
      return res.status(StatusCodes.OK).json({ message: 'Autenticado com sucesso' });
    } else {
      return res.status(StatusCodes.UNAUTHORIZED).json({ message: 'Credenciais inválidas' });
    }
  }
}

export default AuthController;