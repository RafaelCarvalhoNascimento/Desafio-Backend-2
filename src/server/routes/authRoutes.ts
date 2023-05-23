import { Router } from 'express';
import AuthController from '../controllers/authController';


const authRouter = Router();
const authController = new AuthController();

authRouter.post('/v1/auth', authController.login.bind(authController));

export { authRouter };