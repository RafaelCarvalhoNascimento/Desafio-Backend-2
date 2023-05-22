import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import { authRouter } from './authRoutes';

const router = Router();

router.get('/v1', (_, res) => {
  return res.status(StatusCodes.ACCEPTED).json({ message: 'Bem vindo a API GeoPoly!' });
});

router.use('/v1/auth', authRouter);

export default router;
