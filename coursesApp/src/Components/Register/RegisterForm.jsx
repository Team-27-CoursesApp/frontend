import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { CircularProgress } from "@mui/material";

const RegisterForm = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");
  const [isLoading, setIsLoading] = useState(false);

  const registerHandler = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/user", {
        username,
        email,
        password,
        name,
        surname,
        role,
      });
      toast.success("Успешна регистрација");
      setIsLoading(false);
      navigate("/login");
    } catch (error) {
      toast.error("Неуспешна регистрација");
    }
  };

  return (
    <form className="max-w-md mx-auto" onSubmit={registerHandler}>
      <div className="flex justify-between">
        <div className="w-1/2 mr-2">
          <div className="relative mt-8 mb-3">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              id="fname"
              name="name"
              required
              className="peer h-10 w-full border border-gray-300 placeholder-transparent focus:outline-none focus:border-indigo-500 pl-2 focus:border-l-4 mb-4"
              placeholder=" "
            />
            <label
              htmlFor="fname"
              className="absolute left-2 -top-5 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 peer-placeholder-shown:top-1 peer-focus:-top-5 peer-focus:text-sm peer-focus:text-indigo-500"
            >
              Име
            </label>
          </div>
        </div>
        <div className="w-1/2 ml-2">
          <div className="relative mt-8 mb-3">
            <input
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              required
              type="text"
              id="lname"
              name="surname"
              className="peer h-10 w-full border border-gray-300 placeholder-transparent focus:outline-none pl-2 focus:border-l-4 focus:border-indigo-500 mb-4"
              placeholder=" "
            />
            <label
              htmlFor="lname"
              className="absolute left-2 -top-5 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 peer-placeholder-shown:top-1 peer-focus:-top-5 peer-focus:text-sm peer-focus:text-indigo-500"
            >
              Презиме
            </label>
          </div>
        </div>
      </div>
      <div className="relative mb-3">
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          id="username"
          name="username"
          className="peer h-10 w-full border border-gray-300 placeholder-transparent focus:outline-none focus:border-indigo-500 pl-2 focus:border-l-4  mb-4"
          placeholder=" "
        />
        <label
          htmlFor="username"
          className="absolute left-2 -top-5 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 peer-placeholder-shown:top-1 peer-focus:-top-5 peer-focus:text-sm peer-focus:text-indigo-500"
        >
          Корисничко име
        </label>
      </div>
      <div className="relative mb-3">
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          id="email"
          name="email"
          className="peer h-10 w-full border border-gray-300 placeholder-transparent focus:outline-none pl-2 focus:border-l-4 focus:border-indigo-500 mb-4"
          placeholder=" "
        />
        <label
          htmlFor="email"
          className="absolute left-2 -top-5 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 peer-placeholder-shown:top-1 peer-focus:-top-5 peer-focus:text-sm peer-focus:text-indigo-500"
        >
          Email Адреса
        </label>
      </div>
      <div className="flex mb-3 justify-between items-center gap-10">
        <div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700 w-1/2">
          <input
            id="bordered-radio-student"
            type="radio"
            value="student"
            checked={role === "student"}
            onChange={() => setRole("student")}
            name="bordered-radio"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Студент
          </label>
        </div>
        <div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700 w-1/2">
          <input
            id="bordered-radio-lecturer"
            type="radio"
            value="lecturer"
            checked={role === "lecturer"}
            onChange={() => setRole("lecturer")}
            name="bordered-radio"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Предавач
          </label>
        </div>
      </div>

      <div className="mt-7 relative">
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          id="password"
          name="password"
          className="peer h-10 w-full border border-gray-300 placeholder-transparent focus:outline-none focus:border-indigo-500 pl-2 focus:border-l-4"
          placeholder=" "
        />
        <label
          htmlFor="password"
          className="absolute left-2 -top-5 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 peer-placeholder-shown:top-1 peer-focus:-top-5 peer-focus:text-sm peer-focus:text-indigo-500"
        >
          Лозинка
        </label>
      </div>

      <div className="mt-6 flex justify-between">
        <button
          type="submit"
          className="bg-indigo-500 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          {isLoading ? (
            <CircularProgress color="inherit" size="1rem" />
          ) : (
            "Регистрирај се"
          )}
        </button>
        <Link
          to="/login"
          className="border border-indigo-500 text-indigo-500 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Логирај се
        </Link>
      </div>
    </form>
  );
};

export default RegisterForm;
