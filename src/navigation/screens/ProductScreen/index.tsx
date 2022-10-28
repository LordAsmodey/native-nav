import React from 'react';
import { Text, View } from 'react-native';

export const ProductScreen: React.FC = (props) => {
  // @ts-ignore
  const { route } = props;
  console.log(route);
  return (
    <View>
      <Text>ProductScreen</Text>
    </View>
  );
};
