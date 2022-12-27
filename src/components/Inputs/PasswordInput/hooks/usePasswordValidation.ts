import { useState } from 'react';

interface PasswordState {
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  isPasswordValid: boolean;
  validatePassword: () => void;
  passwordErrorMessage: string | null;
}

export const usePasswordValidation = (initialValue: string): PasswordState => {
  const [password, setPassword] = useState(initialValue);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [
    passwordErrorMessage,
    setPasswordErrorMessage
  ] = useState<string | null>(null);

  function validatePassword() {
    // Check that password is at least 6 characters long
    if (password.length < 6) {
      setIsPasswordValid(false);
      setPasswordErrorMessage('Minimum password length 6 characters');
      return;
    }

    // Check that password contains at least one letter and one number
    const regExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    // TODO: delete test password 111111
    if (regExp.test(password) || password === '111111') {
      setIsPasswordValid(true);
      setPasswordErrorMessage(null);
      return;
    }

    setIsPasswordValid(false);
    setPasswordErrorMessage('Password must contains min one letter'
                    + ' and one number');
  }

  return {
    password,
    setPassword,
    isPasswordValid,
    validatePassword,
    passwordErrorMessage
  };
};
