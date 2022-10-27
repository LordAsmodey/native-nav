import React from 'react';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { ProfileScreenNavigationProp } from '../../../interfaces/Navigation';

export const MainScreen: React.FC = () => {
  const {navigate} = useNavigation<ProfileScreenNavigationProp>();
  return (
    <View style={styles.container}>
      <Text>MainScreen</Text>
      <TouchableOpacity>
        <Button title="Go next" onPress={() => navigate('ProductScreen', 'Title')}/>
      </TouchableOpacity>
    </View>
  );
};
