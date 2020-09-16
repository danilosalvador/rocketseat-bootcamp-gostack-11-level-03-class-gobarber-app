import React from 'react';
import { Image } from 'react-native';

import { Container } from './styles';

import imgLogo from '../../assets/logo.png';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Image source={imgLogo} />
    </Container>
  );
};

export default SignIn;
