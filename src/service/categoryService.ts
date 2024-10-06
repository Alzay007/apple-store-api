import { Phone, Tablet, Watch, Laptop } from '../models/Categories.js';
import { Model } from 'mongoose';

export const getModelByCategory = (category: string): Model<any> => {
  switch (category.toLowerCase()) {
    case 'laptops':
      return Laptop;
    case 'phones':
      return Phone;
    case 'tablets':
      return Tablet;
    case 'watches':
      return Watch;
    default:
      throw new Error('Category not supported');
  }
};
