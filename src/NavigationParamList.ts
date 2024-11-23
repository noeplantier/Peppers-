import { Pepper } from './types/Pepper';

export type MainStackParamList = {
  Home: undefined;
  PepperDetail: {
    pepper: Pepper;
  };
};