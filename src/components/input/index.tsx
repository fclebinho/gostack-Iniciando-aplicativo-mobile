import React from 'react';
import { TextInputProperties } from 'react-native';

import { Container, TextInput, Icon } from './styles';

export interface InputProperties extends TextInputProperties {
  name: string;
  icon: string;
}

export const Input: React.FC<InputProperties> = ({ name, icon, ...rest }) => {
  return (
    <Container>
      <Icon name={icon} size={20} color="#666360" />
      <TextInput
        keyboardAppearance="dark"
        placeholderTextColor="#666360"
        {...rest}
      />
    </Container>
  );
};

export default Input;
