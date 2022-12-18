import {Text, View, StyleSheet, TextInput, Button} from "react-native";
import React, {useEffect, useState} from "react";
import {
  firebaseAuth,
  loginWithEmailAndPassword, regNewUserFirebase,
} from "../../../utils/Firebase/firebaseConfig";
import {useNavigation} from "@react-navigation/native";
import {ProfileScreenNavigationProp} from "../../../types/Navigation";
import {useDispatch} from "react-redux";
import {SIGN_IN_EMAIL} from "../../../store/modules/Account/actions";

export const LoginScreen: React.FC = () => {
  const [userName, setUserName] = useState<string>('');
  const [userPassword, setUserPassword] = useState<string>('');
  const dispatch = useDispatch();

  const navigation = useNavigation<ProfileScreenNavigationProp>();

  const loginHandler = () => {
    loginWithEmailAndPassword(userName, userPassword).then(() => {
      dispatch({type: SIGN_IN_EMAIL});

      // TODO fix types in navigate stack
      // @ts-ignore
      navigation.navigate('MainScreen');
    }).catch(() => {
      console.log('FAILED login!');
    });
  };

  const regNewUserHandler = () => {
    regNewUserFirebase(userName, userPassword)
      .then(() => {
        dispatch({type: SIGN_IN_EMAIL});

        // @ts-ignore
        navigation.navigate('MainScreen');
      })
      .catch(() => {
        console.log('FAILED registration!');
      });
  };

  useEffect(() => {
    if (firebaseAuth.currentUser) {
      // @ts-ignore
      navigation.navigate('MainScreen');
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text>
        Login app
      </Text>
      <TextInput
        autoCapitalize='none'
        value={userName}
        onChangeText={(userName) => setUserName(userName)}
        placeholder='Enter email'
        style={styles.input}
      />
      <TextInput
        autoCapitalize='none'
        secureTextEntry={true}
        value={userPassword}
        onChangeText={(userName) => setUserPassword(userName)}
        placeholder='Enter password'
        style={styles.input}
      />
      <Button
        title={'Sign in'}
        onPress={() => loginHandler()}
      />
      <Button
        title={'Register new user'}
        onPress={() => regNewUserHandler()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: 250,
    height: 44,
    padding: 10,
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: '#e8e8e8'
  },
});
