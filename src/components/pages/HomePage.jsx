import Container from 'components/Container/Container';

const { default: Home } = require('components/Home/Home');

const HomePage = () => {
  return (
    <Container>
      <Home />
    </Container>
  );
};

export default HomePage;
