import AppBar from 'components/AppBar/AppBar';
import LoadingSpinner from 'components/LoadingSpinner/LoadingSpinner';
import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <header>
        <AppBar />
      </header>
      <main>
        <Suspense fallback={<LoadingSpinner />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
