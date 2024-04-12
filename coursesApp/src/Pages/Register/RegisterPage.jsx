import React from 'react';
import RegisterForm from '../../Components/Register/RegisterForm';

const RegisterPage = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center md:pb-0 pb-8">
        <div className="w-full max-w-md"> 
          <h1 className="mb-3 text-blue-500 font-bold text-3xl">
            <span className="block">Сo SkillSphere до ново и</span>
            <span className="block">поголемо знаење!</span>
          </h1>
          <RegisterForm />
        </div>
      </div>
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <img src="../../../public/placeholder.svg" alt="placeholder-image" className="max-h-full max-w-full" />
      </div>
    </div>
  );
};

export default RegisterPage;
