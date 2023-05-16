import React from 'react';
import RegistrationForm from 'components/RegistrationForm/RegistrationForm';
import Container from 'components/Container/Container';
import { Helmet } from 'react-helmet';

const RegistrationPage = () => {
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
