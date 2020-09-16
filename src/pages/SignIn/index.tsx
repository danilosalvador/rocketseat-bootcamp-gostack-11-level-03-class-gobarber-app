import React from 'react';
import { Image } from 'react-native';

import { Container, Title } from './styles';

import imgLogo from '../../assets/logo.png';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Image source={imgLogo} />
      <Title>Faça seu logon</Title>
    </Container>
  );
};

export default SignIn;
