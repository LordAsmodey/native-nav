import React from 'react';
import { Image, Text, View } from 'react-native';
import { Product } from '../../types/Product';
import { styles } from './styles';

type Props = {
  product: Product,
};

export const ProductItem: React.FC<Props> = (props) => {
  const { product } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {product.title}
      </Text>
      <Image
        source={{uri: `${product.image}`}}
        style={styles.image} />
    </View>
  );
};
