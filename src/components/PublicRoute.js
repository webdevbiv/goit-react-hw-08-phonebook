import { Navigate } from 'react-router-dom';
import { useAuth } from './hooks';

export const PublicRoute = ({ component: Component, redirectTo = '/' }) => {
  const { loggedin } = useAuth();
  return loggedin ? <Navigate to={redirectTo} /> : <Component />;
};
