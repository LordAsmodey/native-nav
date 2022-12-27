import React from 'react';
import {COLORS} from "../../../utils/COLORS";
import {MainInput, MainInputProps} from "../MainInput";
import {PasswordIcon} from "../../../assets/svg/PasswordIcon";

export const PasswordInput = (props: Omit<MainInputProps, 'label'>) => {
  return (
    <MainInput
      label={'Password'}
      icon={<PasswordIcon color={COLORS.secondary} />}
      keyboardType={'visible-password'}
      textContentType={'password'}
      autoComplete={'password'}
      autoCapitalize={'none'}
      autoCorrect={false}
      secureTextEntry={true}
      {...props}
    />
  );
};
