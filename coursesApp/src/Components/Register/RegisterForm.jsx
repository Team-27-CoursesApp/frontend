import React from 'react';
import { Link } from 'react-router-dom';

const RegisterForm = () => {
  return (
    <form className="max-w-md mx-auto">
      <div className="flex justify-between">
        <div className="w-1/2 mr-2">
          <div className="relative mt-8 mb-3">
            <input
              type="text"
              id="fname"
              name="fname"
              className="peer h-10 w-full border border-gray-300 placeholder-transparent focus:outline-none focus:border-indigo-500 pl-2 focus:border-l-4 focus:border-indigo-500 mb-4"
              placeholder=" "
            />
            <label htmlFor="fname" className="absolute left-2 -top-5 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 peer-placeholder-shown:top-1 peer-focus:-top-5 peer-focus:text-sm peer-focus:text-indigo-500">Име</label>
          </div>
        </div>
        <div className="w-1/2 ml-2">
          <div className="relative mt-8 mb-3">
            <input
              type="text"
              id="lname"
              name="lname"
              className="peer h-10 w-full border border-gray-300 placeholder-transparent focus:outline-none focus:border-indigo-500 pl-2 focus:border-l-4 focus:border-indigo-500 mb-4"
              placeholder=" "
            />
            <label htmlFor="lname" className="absolute left-2 -top-5 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 peer-placeholder-shown:top-1 peer-focus:-top-5 peer-focus:text-sm peer-focus:text-indigo-500">Презиме</label>
          </div>
        </div>
      </div>
      <div className="relative mb-3">
        <input
          type="text"
          id="username"
          name="username"
          className="peer h-10 w-full border border-gray-300 placeholder-transparent focus:outline-none focus:border-indigo-500 pl-2 focus:border-l-4 focus:border-indigo-500 mb-4"
          placeholder=" "
        />
        <label htmlFor="username" className="absolute left-2 -top-5 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 peer-placeholder-shown:top-1 peer-focus:-top-5 peer-focus:text-sm peer-focus:text-indigo-500">Email Адреса</label>
      </div>

      <div className="relative">
        <input
          type="password"
          id="password"
          name="password"
          className="peer h-10 w-full border border-gray-300 placeholder-transparent focus:outline-none focus:border-indigo-500 pl-2 focus:border-l-4 focus:border-indigo-500"
          placeholder=" "
        />
        <label htmlFor="password" className="absolute left-2 -top-5 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 peer-placeholder-shown:top-1 peer-focus:-top-5 peer-focus:text-sm peer-focus:text-indigo-500">Лозинка</label>
      </div>

      <div className="mt-6 flex justify-between">
        <button type="submit" className="bg-indigo-500 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline">Регистрирај се</button>
        <Link to="/login" className="border border-indigo-500 text-indigo-500 py-2 px-4 rounded focus:outline-none focus:shadow-outline">Логирај се</Link>
      </div>
    </form>
  );
};

export default RegisterForm;
