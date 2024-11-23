import { Pepper } from '../types/Pepper';

export const peppers: Pepper[] = [
  {
    id: '1',
    name: 'Bell Pepper',
    scientificName: 'Capsicum annuum',
    scovilleHeatUnits: 0,
    image: 'https://example.com/bell-pepper.jpg',
    description: 'Sweet pepper with no heat, commonly used in cooking.',
    origin: 'Central and South America'
  },
  {
    id: '2',
    name: 'Jalapeño',
    scientificName: 'Capsicum annuum',
    scovilleHeatUnits: 5000,
    image: 'https://example.com/jalapeno.jpg',
    description: 'Medium-hot pepper, popular in Mexican cuisine.',
    origin: 'Mexico'
  },
  {
    id: '3',
    name: 'Carolina Reaper',
    scientificName: 'Capsicum chinense',
    scovilleHeatUnits: 1500000,
    image: 'https://example.com/carolina-reaper.jpg',
    description: 'Currently the hottest pepper in the world.',
    origin: 'South Carolina, United States'