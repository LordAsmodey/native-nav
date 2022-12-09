import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainScreen } from '../screens/MainScreen';
import { ProductScreen } from '../screens/ProductScreen';

const Stack = createNativeStackNavigator();

export const MainStack: React.FC = () => {
    return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainScreen"
        component={MainScreen}
        options={{ headerShown: false }}
      />
        {/* @ts-ignore*/}
      <Stack.Screen name="ProductScreen" component={ProductScreen}/>
    </Stack.Navigator>
  );
};
