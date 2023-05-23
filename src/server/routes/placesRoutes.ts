import express, { Request, Response } from 'express';
import {
  getAllLocations,
  getLocationById,
  createLocation,
  updateLocation,
  deleteLocation,
} from '../controllers/placesController';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  const locations = getAllLocations();
  res.json(locations);
});

router.get('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  const location = getLocationById(Number(id));
  if (location) {
    res.json(location);
  } else {
    res.status(404).json({ error: 'Location not found' });
  }
});

router.post('/', (req: Request, res: Response) => {
  const { name, latitude, longitude } = req.body;
  const newLocation = createLocation(name, latitude, longitude);
  if (newLocation) {
    res.json(newLocation);
  } else {
    res.status(400).json({ error: 'Invalid location data' });
  }
});

router.put('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, latitude, longitude } = req.body;
  const updatedLocation = updateLocation(Number(id), name, latitude, longitude);
  if (updatedLocation) {
    res.json(updatedLocation);
  } else {
    res.status(404).json({ error: 'Location not found' });
  }
});

router.delete('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  const result = deleteLocation(Number(id));
  if (result) {
    res.json({ message: 'Location deleted successfully' });
  } else {
    res.status(404).json({ error: 'Location not found' });
  }
});

export default router;