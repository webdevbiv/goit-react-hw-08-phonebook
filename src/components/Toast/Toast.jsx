import React from 'react';
import { ToastContainer } from 'react-toastify';

function Toast() {
  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        theme="light"
      />
    </div>
  );
}

export default Toast;
