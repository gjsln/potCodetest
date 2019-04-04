import { ModelEntity } from '../../model';
import { destinations } from './mockData';

let mockDestinations = destinations;

const fetchDestinations = (): Promise<ModelEntity[]> => {
  return Promise.resolve(mockDestinations);
};

const mapToDestinations = (listDestinations: any[]): ModelEntity[] => {
  return listDestinations.map(mapToDestination);
};

const mapToDestination = (listDestination): ModelEntity => {
  return {
    text: listDestination.text,
    url: listDestination.url,
  };
};

export const destinationAPI = {
  fetchDestinations
};
