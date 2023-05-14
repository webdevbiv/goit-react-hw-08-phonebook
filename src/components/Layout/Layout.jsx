import AppBar from 'components/AppBarComponent/AppBarComponent';
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
