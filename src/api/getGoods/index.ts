import axios from 'axios';
import {BASE_URL} from "../index";
import {Product} from "../../types/Product";

export const getProducts =  (): Promise<Product[]> => {
  return axios.get(`${BASE_URL}/products`)
    .then(res => res.data)
    .catch((e) => {
      throw new Error(e);
    });
};
