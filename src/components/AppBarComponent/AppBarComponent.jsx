import AuthNav from 'components/AuthNav/AuthNav';
import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import { useAuth } from 'components/hooks';
import { AppBar, Toolbar } from '@mui/material';

const AppBarComponent = () => {
  const { loggedin } = useAuth();
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Navigation />
        {loggedin ? <UserMenu /> : <AuthNav />}
      </Toolbar>
    </AppBar>
  );

  // return (
  //   <header>
  //     <Navigation />
  //     {loggedin ? <UserMenu /> : <AuthNav />}
  //   </header>
  // );
};

export default AppBarComponent;
