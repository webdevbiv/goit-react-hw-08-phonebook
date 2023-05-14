import { useSelector } from 'react-redux';
import {
  selectUserAuth,
  selectTokenAuth,
  selectIsRefreshingAuth,
  selectIsLoggedInAuth,
  selectIsLoadingAuth,
  selectErrorAuth,
  selectImageIsLoading,
} from 'redux/auth/selectors';

export const useAuth = () => {
  const user = useSelector(selectUserAuth);
  const token = useSelector(selectTokenAuth);
  const refreshing = useSelector(selectIsRefreshingAuth);
  const loggedin = useSelector(selectIsLoggedInAuth);
  const loading = useSelector(selectIsLoadingAuth);
  const error = useSelector(selectErrorAuth);
  const image = useSelector(selectImageIsLoading);
  return {
    user,
    token,
    error,
    loggedin,
    loading,
    refreshing,
    image,
  };
};
