import React from 'react';
import { Product } from '../../../types/Product';
import { ProductInfo } from '../../../components/ProductInfo';

type Props = {
  route: {
    params: {
      product: Product,
    },
  }
};

export const ProductScreen: React.FC<Props> = (props) => {
  const { product } = props.route.params;

  return (
    <ProductInfo product={product} />
  );
};
