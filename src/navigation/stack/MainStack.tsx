import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainScreen } from '../screens/MainScreen';
import { ProductScreen } from '../screens/ProductScreen';

const Stack = createNativeStackNavigator();

export const MainStack: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={MainScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="ProductScreen" component={ProductScreen}/>
    </Stack.Navigator>
  );
};
