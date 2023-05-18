import Container from 'components/Container/Container';
import { useEffect } from 'react';

const { default: Home } = require('components/Home/Home');

const HomePage = () => {
  useEffect(() => {
    document.title = 'Phone book';
  }, []);
  return (
    <Container>
      <Home />
    </Container>
  );
};

export default HomePage;
