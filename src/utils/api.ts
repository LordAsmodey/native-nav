import axios from 'axios';
import { Product } from '../types/Product';

export const getProducts =  (): Promise<Product[]> => {
  return axios.get('https://fakestoreapi.com/products').then(res => res.data);
};
