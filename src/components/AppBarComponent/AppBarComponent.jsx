import AuthNav from 'components/AuthNav/AuthNav';
import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import { useAuth } from 'components/hooks';
import { Box, Flex } from '@chakra-ui/react';

const AppBarComponent = () => {
  const { loggedin } = useAuth();
  return (
    <Box bg="gray.100">
      <Flex justify="space-between" align="center" p={4}>
        <Navigation />
        {loggedin ? <UserMenu /> : <AuthNav />}
      </Flex>
    </Box>
  );

  // return (
  //   <header>
  //     <Navigation />
  //     {loggedin ? <UserMenu /> : <AuthNav />}
  //   </header>
  // );
};

export default AppBarComponent;
