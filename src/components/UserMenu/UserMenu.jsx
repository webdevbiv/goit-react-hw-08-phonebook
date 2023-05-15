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
      <Button color="inherit" onClick={handleClick}>
        Logout
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
