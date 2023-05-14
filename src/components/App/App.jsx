import { useAuth } from 'components/hooks';
import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { userRefreshThunk } from 'redux/auth/operations';
import Layout from '../Layout/Layout';
import HomePage from 'components/pages/HomePage';

const RegistrationPage = lazy(() => import('../pages/RegistrationPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage'));

export const App = () => {
  const distpatch = useDispatch();
  const { refreshing } = useAuth();
  console.log(refreshing);

  useEffect(() => {
    distpatch(userRefreshThunk());
  }, [distpatch]);

  return refreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="registration" element={<RegistrationPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="contacts" element={<ContactsPage />} />
      </Route>
    </Routes>
  );
};
