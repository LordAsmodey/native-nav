import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';
import { ProductList } from '../../../components/ProductList';

export const MainScreen: React.FC = () => {

  return (
    <View style={styles.container}>
      <Text>MainScreen</Text>
      <ProductList />
    </View>
  );
};
