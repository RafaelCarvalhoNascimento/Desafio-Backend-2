import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import { authRouter } from './authRoutes';
import { placesRouter } from './placesRoutes';

const router = Router();

router.get('/v1', (_, res) => {
  return res.status(StatusCodes.ACCEPTED).json({ message: 'Bem vindo a API GeoPoly!' });
});

router.use('/v1/auth', authRouter);

router.use('/v2/places', placesRouter);

router.use('/v2/places/id', placesRouter);

export default router;
