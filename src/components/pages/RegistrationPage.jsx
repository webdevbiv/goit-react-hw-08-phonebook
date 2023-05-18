import React, { useEffect } from 'react';
import RegistrationForm from 'components/RegistrationForm/RegistrationForm';
import Container from 'components/Container/Container';
import { Helmet } from 'react-helmet';

const RegistrationPage = () => {
  useEffect(() => {
    document.title = 'Sing in';
  }, []);
  return (
    <Container>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegistrationForm />
    </Container>
  );
};

export default RegistrationPage;
