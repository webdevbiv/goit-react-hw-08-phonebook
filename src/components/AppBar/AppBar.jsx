import AuthNav from 'components/AuthNav/AuthNav';
import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import { useAuth } from 'components/hooks';
import { AppBarStyled, ToolbarStyled, BoxStyled } from './AppBar.style';

const AppBarComponent = () => {
  const { loggedin } = useAuth();

  return (
    <BoxStyled>
      <AppBarStyled sx={{ position: 'static' }}>
        <ToolbarStyled>
          <Navigation />
          {loggedin ? <UserMenu /> : <AuthNav />}
        </ToolbarStyled>
      </AppBarStyled>
    </BoxStyled>
  );
};

export default AppBarComponent;
