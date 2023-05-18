import Container from 'components/Container/Container';
import LoginForm from 'components/LoginForm/LoginForm';
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

const LoginPage = () => {
  useEffect(() => {
    document.title = 'Log in';
  }, []);
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
