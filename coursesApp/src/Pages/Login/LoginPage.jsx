import React from 'react';
import LoginForm from '../../Components/Login/LoginForm';

const LoginPage = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="w-full md:w-1/2 flex items-center justify-center md:pb-0 pb-8">
        <LoginForm />
      </div>
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <img src="../../../public/placeholder.svg" alt="Your Image" className="max-h-full max-w-full" />
      </div>
    </div>
  );
};

export default LoginPage;
