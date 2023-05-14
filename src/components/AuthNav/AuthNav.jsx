import { NavLink } from 'react-router-dom';

const AuthNav = () => {
  return (
    <>
      <NavLink to="/registration">Sign up</NavLink>
      <NavLink to="/login">Log in</NavLink>
    </>
  );
};

export default AuthNav;
