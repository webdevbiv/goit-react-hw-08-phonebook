import { useSelector } from 'react-redux';
import {
  selectUserAuth,
  selectTokenAuth,
  selectIsRefreshingAuth,
  selectIsLoggedInAuth,
  selectIsLoadingAuth,
  selectErrorAuth,
} from 'redux/auth/selectors';

export const useAuth = () => {
  const user = useSelector(selectUserAuth);
  const token = useSelector(selectTokenAuth);
  const refreshing = useSelector(selectIsRefreshingAuth);
  const logged = useSelector(selectIsLoggedInAuth);
  const loading = useSelector(selectIsLoadingAuth);
  const error = useSelector(selectErrorAuth);
  return {
    user,
    token,
    error,
    logged,
    loading,
    refreshing,
  };
};
