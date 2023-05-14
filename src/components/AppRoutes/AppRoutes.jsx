import Layout from 'components/Layout/Layout';
import { PrivateRoute } from 'components/PrivateRoute';
import { PublicRoute } from 'components/PublicRoute';
import HomePage from 'components/pages/HomePage';
import React, { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const AppRoutes = () => {
  const RegistrationPage = lazy(() => import('../pages/RegistrationPage'));
  const LoginPage = lazy(() => import('../pages/LoginPage'));
  const ContactsPage = lazy(() => import('../pages/ContactsPage'));

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="registration"
            element={
              <PublicRoute
                component={RegistrationPage}
                redirectTo="/contacts"
              />
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute component={LoginPage} redirectTo="/contacts" />
            }
          />
          <Route
            path="contacts"
            element={
              <PrivateRoute
                component={ContactsPage}
                redirectTo="/registration"
              />
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  );
};

export default AppRoutes;
