import { useState } from 'react';

interface EmailState {
  email: string;
  setEmail: (mail: string) => void;
  errorEmailMessage: string | null;
  validateEmail: () => void;
  isEmailValid: boolean;
}

export const useEmailValidation = (): EmailState => {
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [
    errorEmailMessage,
    setErrorEmailMessage
  ] = useState<string | null>(null);

  function validateEmail() {
    // eslint-disable-next-line max-len
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (emailRegex.test(email)) {
      setEmail(email);
      setErrorEmailMessage(null);
      setIsEmailValid(true);
    } else {
      setErrorEmailMessage('Please enter a valid email address');
      setIsEmailValid(false);
    }
  }

  return {
    email,
    setEmail,
    errorEmailMessage,
    validateEmail,
    isEmailValid,
  };
};
