import { useAuth } from './hooks';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { loggedin, refreshing } = useAuth();
  const shouldRedirect = !refreshing && !loggedin;
  return shouldRedirect ? <Navigate to={redirectTo} /> : <Component />;
};
