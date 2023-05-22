import { Request, Response } from 'express';
import { placesData } from './data/placesData';

class PlacesController {
  public getAllPlaces(req: Request, res: Response): Response {
    return res.json(placesData);
  }

  public getPlaceById(req: Request, res: Response): Response {
    const { id } = req.params;
    const place = placesData.find(place => place.id.toString() === id);

    if (place) {
      return res.json(place);
    } else {
      return res.status(404).json({ message: 'Lugar não encontrado' });
    }
  }
}

export const placesController = new PlacesController();