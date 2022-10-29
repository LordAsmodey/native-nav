import React from 'react';
import { Button, Image, Text, View } from 'react-native';
import { Product } from '../../types/Product';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { ProfileScreenNavigationProp } from '../../types/Navigation';

type Props = {
  product: Product,
};

export const ProductItem: React.FC<Props> = (props) => {
  const { product } = props;
  const { navigate } = useNavigation<ProfileScreenNavigationProp>();


  return (
    <View style={styles.cardContainer}>
      <Text style={styles.title}>
        {product.title}
      </Text>
      <View style={styles.wrapper}>
        <Image
          source={{uri: `${product.image}`}}
          style={styles.image} />
        <View style={styles.priseAndButton}>
          <Text style={styles.price}>
            {product.price}$
          </Text>
          <Button
            title="More info"
            onPress={() => navigate('ProductScreen', { product: product })}
          />
        </View>
      </View>
    </View>
  );
};
