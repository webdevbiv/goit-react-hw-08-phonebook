import { useAuth } from 'components/hooks';
import { NavLink } from 'react-router-dom';
// import Button from '@mui/material/Button';

const Navigation = () => {
  const { loggedin } = useAuth();

  // return (
  //   <div>
  //     <Button component={Link} to="/">
  //       Home
  //     </Button>
  //     {loggedin && (
  //       <Button component={Link} to="/contacts">
  //         Contacts
  //       </Button>
  //     )}
  //   </div>
  // );
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      {loggedin && <NavLink to="contacts">Contacts</NavLink>}
    </nav>
  );
};

export default Navigation;
