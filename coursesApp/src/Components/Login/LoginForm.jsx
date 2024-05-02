import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Store } from "../../Store";
import { toast } from "react-toastify";
import { CircularProgress } from "@mui/material";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const loginHandler = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/user/login", {
        email,
        password,
      });
      setIsLoading(false);
      ctxDispatch({ type: "USER_SIGNIN", payload: data });
      localStorage.setItem("userInfo", JSON.stringify(data));
      navigate("/");
    } catch (error) {
      toast.error("Неуспешна најава");
    }
  };

  return (
    <form className="max-w-md mx-auto" onSubmit={loginHandler}>
      <div className="relative mt-8 mb-3">
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
          Email Адреса
        </label>
      </div>

      <div className="relative">
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          id="password"
          name="password"
          className="peer h-10 w-full border border-gray-300 placeholder-transparent focus:outline-none focus:border-indigo-500 pl-2 focus:border-l-4 "
          placeholder=" "
        />
        <label
          htmlFor="password"
          className="absolute left-2 -top-5 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 peer-placeholder-shown:top-1 peer-focus:-top-5 peer-focus:text-sm peer-focus:text-indigo-500"
        >
          Лозинка
        </label>
      </div>

      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center">
          <input type="checkbox" id="remember-me" className="mr-2" />
          <label htmlFor="remember-me">Запамти ме</label>
        </div>
        <a href="#" className="text-indigo-500 ml-4">
          Ја заборави лозинката?
        </a>
      </div>

      <div className="mt-6 flex justify-between">
        <button
          type="submit"
          className="bg-indigo-500 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          {isLoading ? (
            <CircularProgress color="inherit" size="1rem" />
          ) : (
            "Логирај се"
          )}
        </button>
        <Link
          to="/register"
          className="border border-indigo-500 text-indigo-500 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Регистрација
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
