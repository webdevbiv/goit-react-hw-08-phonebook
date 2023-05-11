import { useDispatch } from 'react-redux';
import { lazy, useEffect } from 'react';
import { getContactsThunk } from 'redux/contacts/thunk';
import { Route, Routes } from 'react-router-dom';

import Layout from './Layout/Layout';

const RegistrationPage = lazy(() => import('./pages/RegistrationPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage'));

export const App = () => {
  const distpatch = useDispatch();

  useEffect(() => {
    distpatch(getContactsThunk());
  }, [distpatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<RegistrationPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="contacts" element={<ContactsPage />} />
        </Route>
      </Routes>
    </>
  );
};
