import { NavLink } from 'react-router-dom';
import { Link } from '@mui/material';

const AuthNav = () => {
  return (
    <>
      <Link
        component={NavLink}
        to="/registration"
        underline="none"
        color="inherit"
        variant="h6"
        sx={{ mr: 2 }}
      >
        Sign up
      </Link>
      <Link
        component={NavLink}
        to="/login"
        underline="none"
        color="inherit"
        variant="h6"
      >
        Log in
      </Link>
    </>
  );

  // return (
  //   <>
  //     <NavLink to="/registration">Sign up</NavLink>
  //     <NavLink to="/login">Log in</NavLink>
  //   </>
  // );
};

export default AuthNav;
