import React from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';

const UserMenu = () => {
  const distpatch = useDispatch();

  return (
    <div>
      <p>email</p>
      <button onClick={() => distpatch(logOut())}>Logout</button>
    </div>
  );
};

export default UserMenu;
