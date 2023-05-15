import { ButtonComponent } from 'components/ButtonComponent/ButtonComponent';
import { useAuth } from 'components/hooks';
import { useDispatch } from 'react-redux';
import { userLogoutThunk } from 'redux/auth/operations';
import { BoxStyled } from './UserMenu.style';
import { Typography } from '@mui/material';

const UserMenu = () => {
  const distpatch = useDispatch();
  const { user } = useAuth();

  const handleClick = () => {
    distpatch(userLogoutThunk());
  };

  return (
    <BoxStyled>
      <Typography
        sx={{
          fontWeight: 'bold',
          fontSize: '16px',
          '@media (min-width: 660px)': {
            fontSize: '20px',
          },
        }}
      >
        Welcome, {user.name}
      </Typography>
      <ButtonComponent
        text={'Logout'}
        to={'/'}
        onClick={handleClick}
        marginLeft={'30px'}
      />
    </BoxStyled>
  );
};

export default UserMenu;
