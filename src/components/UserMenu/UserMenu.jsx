import { useAuth } from 'components/hooks';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userLogoutThunk } from 'redux/auth/operations';
import { Box, Button, Typography } from '@mui/material';

const UserMenu = () => {
  const distpatch = useDispatch();
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleClick = () => {
    distpatch(userLogoutThunk());
    navigate('/');
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
      <Typography variant="h6" component="div" sx={{ mr: 2 }}>
        Welcome, {user.name}
      </Typography>
      <Button
        sx={{
          width: '100px',
          height: '50px',
          backgroundColor: '#0A57CA',
          '&:hover': {
            backgroundColor: '#084197', // Set the hover background color
          },
        }}
        onClick={handleClick}
      >
        <Typography
          variant="button"
          sx={{
            fontSize: '1.20rem',
            lineHeight: '1.6',
            letterSpacing: '0.0075em',
            textTransform: 'capitalize',
            color: 'white',
            backgroundColor: '0D6EFD',
          }}
        >
          Logout
        </Typography>
      </Button>
    </Box>
  );

  // return (
  //   <div>
  //     <p>Welcome, {user.name}</p>
  //     <button onClick={handleClick}>Logout</button>
  //   </div>
  // );
};

export default UserMenu;
