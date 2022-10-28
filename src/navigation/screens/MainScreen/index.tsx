import React, { useEffect, useState } from 'react';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { ProfileScreenNavigationProp } from '../../../types/Navigation';
import { Product } from '../../../types/Product';
import { getProducts } from '../../../utils/api';
import { ProductList } from '../../../components/ProductList';

export const MainScreen: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const { navigate } = useNavigation<ProfileScreenNavigationProp>();

  useEffect(() => {
     getProducts()
       .then((data) => setProducts(data) );
  }, []);

  return (
    <View style={styles.container}>
      <Text>MainScreen</Text>
      <ProductList products={products}/>
      <TouchableOpacity>
        <Button
          title="Go next"
          onPress={() => navigate('ProductScreen', { productId: '2' })}
        />
      </TouchableOpacity>
    </View>
  );
};
