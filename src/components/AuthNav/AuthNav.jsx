import { Button } from '@mui/material';
import { ButtonComponent } from 'components/ButtonComponent/ButtonComponent';

const AuthNav = () => {
  return (
    <>
      <ButtonComponent
        component={Button}
        text={'Log in'}
        to={'/login'}
        marginRight={'20px'}
      />
      <ButtonComponent
        component={Button}
        text={'Sign up'}
        to={'/registration'}
      />
    </>
  );
};

export default AuthNav;
