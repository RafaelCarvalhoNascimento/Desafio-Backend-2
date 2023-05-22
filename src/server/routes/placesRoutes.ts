import express from 'express';
import { placesController } from '../controllers/placesController';

const placesRouter = express.Router();

placesRouter.get('/', placesController.getAllPlaces);
placesRouter.get('/:id', placesController.getPlaceById);

export { placesRouter };