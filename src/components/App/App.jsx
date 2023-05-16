import LoadingSpinner from 'components/LoadingSpinner/LoadingSpinner';
import AppRoutes from 'components/AppRoutes/AppRoutes';
import { useAuth } from 'components/hooks';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { userRefreshThunk } from 'redux/auth/operations';

export const App = () => {
  const { loading } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userRefreshThunk());
  }, [dispatch]);

  return loading ? (
    <>
      <LoadingSpinner />
    </>
  ) : (
    <AppRoutes />
  );
};
