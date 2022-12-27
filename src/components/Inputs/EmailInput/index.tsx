import React from 'react';
import {COLORS} from "../../../utils/COLORS";
import {MainInput, MainInputProps} from "../MainInput";
import {EmailIcon} from "../../../assets/svg/EmailIcon";

export const EmailInput = (props: Omit<MainInputProps, 'label'>) => {
  return (
    <MainInput
      label={'Email address'}
      icon={<EmailIcon color={COLORS.secondary} />}
      keyboardType={'email-address'}
      textContentType={'emailAddress'}
      autoComplete={'email'}
      autoCapitalize={'none'}
      autoCorrect={true}
      {...props}
    />
  );
};
