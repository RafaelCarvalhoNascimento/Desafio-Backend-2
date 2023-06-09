import { placesData } from '../controllers/data/placesData';
import fs from 'fs';

interface Location {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
}

function findNextId(): number {
  let maxId = 0;
  for (const place of placesData) {
    if (place.id > maxId) {
      maxId = place.id;
    }
  }
  return maxId + 1;
}

function savePlacesData(): void {
  const data = JSON.stringify(placesData, null, 2);

  try {
    fs.writeFileSync('src/server/controllers/data/placesData.json', data, 'utf8');
    console.log('Dados salvos com sucesso!');
  } catch (error) {
    console.error('Erro ao salvar os dados:', error);
  }
}

export function getAllLocations(): Location[] {
  return placesData;
}

export function getLocationById(id: number): Location | undefined {
  return placesData.find(place => place.id === id);
}

export function createLocation(name: string, latitude: number, longitude: number): Location | null {
  if (!name || !latitude || !longitude) {
    return null;
  }

  const id = findNextId();
  const location: Location = { id, name, latitude, longitude };
  placesData.push(location);
  savePlacesData(); // Salvar os dados após a modificação
  return location;
}

export function updateLocation(id: number, name: string, latitude: number, longitude: number): Location | null {
  const locationIndex = placesData.findIndex(place => place.id === id);
  if (locationIndex !== -1) {
    placesData[locationIndex] = { id, name, latitude, longitude };
    savePlacesData(); // Salvar os dados após a modificação
    return placesData[locationIndex];
  }
  return null;
}

export function deleteLocation(id: number): boolean {
  const locationIndex = placesData.findIndex(place => place.id === id);
  if (locationIndex !== -1) {
    placesData.splice(locationIndex, 1);
    savePlacesData(); // Salvar os dados após a modificação
    return true;
  }
  return false;
}