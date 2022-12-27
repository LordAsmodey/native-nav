import React, {useEffect} from "react";
// TODO: Add custom loader
// @ts-ignore
import AnimatedLoader from 'react-native-animated-loader';
import {
  firebaseAuth} from "../../../utils/Firebase/firebaseConfig";
import {LoginForm} from "../../../components/LoginForm";
import {SafeAreaView} from "react-native";
import {useFonts} from "expo-font";

export const LoginScreen: React.FC = () => {

  const [isFontsLoaded] = useFonts({
    'Lato-Thin': require('../../../../src/assets/fonts/Lato-Thin.ttf'),
    'Lato-Light': require('../../../../src/assets/fonts/Lato-Light.ttf'),
    'Lato-Regular': require('../../../../src/assets/fonts/Lato-Regular.ttf'),
    'Lato-Medium': require('../../../../src/assets/fonts/Lato-Medium.ttf'),
    'Lato-Semibold': require('../../../../src/assets/fonts/Lato-Semibold.ttf'),
    'Lato-Bold': require('../../../../src/assets/fonts/Lato-Bold.ttf'),
    'Lato-Heavy': require('../../../../src/assets/fonts/Lato-Heavy.ttf'),
    'Lato-Black': require('../../../../src/assets/fonts/Lato-Black.ttf'),
  });

  useEffect(() => {
    if (firebaseAuth.currentUser) {
      // @ts-ignore
      //navigation.navigate('MainScreen');
    }
  }, []);

  if (!isFontsLoaded) {
    return (
      <AnimatedLoader
      visible={true}
      overlayColor="rgba(255,255,255,0.75)"
      animationStyle={{width: 100, height: 100}}
      speed={1} />
    );
  }

  return (
    <SafeAreaView>
      <LoginForm />
    </SafeAreaView>
  );
};
