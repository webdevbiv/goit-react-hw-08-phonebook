import { useDispatch } from 'react-redux';
import { userLogoutThunk } from 'redux/auth/operations';

const UserMenu = () => {
  const distpatch = useDispatch();

  return (
    <div>
      <p>email</p>
      <button onClick={() => distpatch(userLogoutThunk())}>Logout</button>
    </div>
  );
};

export default UserMenu;
