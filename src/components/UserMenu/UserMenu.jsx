import { useAuth } from 'components/hooks';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userLogoutThunk } from 'redux/auth/operations';

const UserMenu = () => {
  const distpatch = useDispatch();
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleClick = () => {
    distpatch(userLogoutThunk());
    navigate('/');
  };
  return (
    <div>
      <p>Welcome, {user.name}</p>
      <button onClick={handleClick}>Logout</button>
    </div>
  );
};

export default UserMenu;
