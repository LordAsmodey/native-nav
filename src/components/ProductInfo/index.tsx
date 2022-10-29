import React from 'react';
import { Button, Image, ScrollView, Text, View } from 'react-native';
import { Product } from '../../types/Product';
import { styles } from './styles';

type Props = {
  product: Product
};

export const ProductInfo: React.FC<Props> = (props) => {
  const {product} = props;

  return (
    <View style={styles.container}>
      <ScrollView style={styles.content}>
        <Text style={styles.title}>{product.title}</Text>
        <Image
          source={{uri: `${product.image}`}}
          style={styles.image} />
        <Text style={styles.description}>{product.description}</Text>
      </ScrollView>
      <View style={styles.btn}>
        <Button title='Add cart'/>
      </View>
    </View>
  );
};
