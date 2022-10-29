import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';
import { Product } from '../../../types/Product';
import { getProducts } from '../../../utils/api';
import { ProductList } from '../../../components/ProductList';

export const MainScreen: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
     getProducts()
       .then((data) => setProducts(data) );
  }, []);

  return (
    <View style={styles.container}>
      <Text>MainScreen</Text>
      <ProductList products={products}/>
    </View>
  );
};
