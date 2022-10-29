import React from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import { styles } from './styles';
import { Product } from '../../types/Product';
import { ProductItem } from '../ProductItem';

type Props = {
  products: Product[],
};

export const ProductList: React.FC<Props> = (props) => {
  const { products } = props;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={products}
        renderItem={({item}) => <ProductItem product={item} />}
        keyExtractor={({id}) => id.toString()}
      />
    </SafeAreaView>
  );
};
