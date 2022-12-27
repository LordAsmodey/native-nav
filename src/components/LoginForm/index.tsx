import React from "react";
import {useDispatch} from "react-redux";
import {useNavigation} from "@react-navigation/native";
import {ProfileScreenNavigationProp} from "../../types/Navigation";
import {
  loginWithEmailAndPassword,
  regNewUserFirebase
} from "../../utils/Firebase/firebaseConfig";
import {SIGN_IN_EMAIL} from "../../store/modules/Account/actions";
import {Button, StyleSheet, Text, View} from "react-native";
import {EmailInput} from "../Inputs/EmailInput";
import {PasswordInput} from "../Inputs/PasswordInput";
import {COLORS} from "../../utils/COLORS";
import {rem} from "rn-units";
import {
  useEmailValidation
} from "../Inputs/EmailInput/hooks/useEmailValidation";
import {
  usePasswordValidation
} from "../Inputs/PasswordInput/hooks/usePasswordValidation";

export const LoginForm: React.FC = () => {
  const {
    email,
    setEmail,
    errorEmailMessage,
    validateEmail,
    isEmailValid
  } = useEmailValidation();

  const {
    password,
    setPassword,
    isPasswordValid,
    validatePassword,
    passwordErrorMessage
  } = usePasswordValidation('');

  const dispatch = useDispatch();
  const navigation = useNavigation<ProfileScreenNavigationProp>();

  const loginHandler = () => {
    validateEmail();
    validatePassword();

    if (isEmailValid && isPasswordValid) {
      loginWithEmailAndPassword(email, password).then(() => {
        dispatch({type: SIGN_IN_EMAIL});

        // TODO fix types in navigate stack
        // @ts-ignore
        navigation.navigate('MainScreen');
      }).catch(() => {
        console.log('FAILED login!');
      });
    }
  };

  const regNewUserHandler = () => {
    validateEmail();
    validatePassword();

    if (isEmailValid && isPasswordValid) {
      regNewUserFirebase(email, password)
        .then(() => {
          dispatch({type: SIGN_IN_EMAIL});

          // @ts-ignore
          navigation.navigate('MainScreen');
        })
        .catch(() => {
          console.log('FAILED registration!');
        });
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.loginForm}>
        <Text style={styles.textContainer}>
          Login app
        </Text>
        <EmailInput
          value={email}
          onChangeText={setEmail}
          errorText={errorEmailMessage}
          validated={isEmailValid}
        />
        <PasswordInput
          value={password}
          onChangeText={setPassword}
          errorText={passwordErrorMessage}
          validated={isPasswordValid}
        />
        <Button
          title={'Sign In'}
          onPress={() => loginHandler()}
        />
        <Button
          title={'Sign Up'}
          onPress={() => regNewUserHandler()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: rem(300),
    alignItems: 'center',
    backgroundColor: COLORS.mischka,
  },
  textContainer: {
    marginBottom: 16,
  },
  loginForm: {
    flex: 1,
    width: '90%',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
