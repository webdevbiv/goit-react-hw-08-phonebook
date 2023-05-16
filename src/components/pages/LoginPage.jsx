import Container from 'components/Container/Container';
import LoginForm from 'components/LoginForm/LoginForm';
import React from 'react';
import { Helmet } from 'react-helmet';

const LoginPage = () => {
  return (
    <Container>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm />
    </Container>
  );
};

export default LoginPage;
