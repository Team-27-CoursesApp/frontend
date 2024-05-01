import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import color_logo_no_background from "../../assets/LogoInfo/Logo Files/For Web/png/color_logo_no_background.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import Search from "../Search/Search";
import { Store } from "../../Store";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Header = (props) => {
  const navigate = useNavigate("/");
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo, cart } = state;
  const [showHeader, setShowHeader] = useState(false);

  const dropdown = () => {
    const dropdownMenu = document.getElementById("dropdown");
    dropdownMenu.classList.toggle("hidden");
  };

  const signoutHandler = () => {
    ctxDispatch({ type: "USER_SIGNOUT" });
    localStorage.removeItem("userInfo");
    navigate("/");
  };

  return (
    <header>
      <nav className="bg-white light:bg-gray-900 w-full z-20 top-0 start-0 border-b border-gray-200 light:border-gray-600">
        <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
          <div className="flex items-center space-x-3">
            <a href="/" className="flex items-center space-x-3">
              <img
                src={color_logo_no_background}
                className="h-8"
                alt="SkillSphere logo"
              />
            </a>
            <button
              type="button"
              className="text-gray-900 block flex items-center justify-center lg:hidden"
              onClick={() => setShowHeader(!showHeader)}
            >
              <FormatAlignJustifyIcon />
            </button>
          </div>

          <div
            className={`lg:flex lg:order-2 space-x-3 lg:space-x-0 rtl:space-x-reverse ${
              showHeader ? "flex" : "hidden"
            }`}
          >
            <ul className="flex flex-col p-4 lg:p-0 font-medium border border-gray-100 rounded-lg bg-light-50 lg:space-x-8 rtl:space-x-reverse lg:flex-row md:mt-0 lg:border-0 lg:bg-white light:bg-gray-800 lg:light:bg-gray-900 light:border-gray-700">
              <li
                className={`${
                  props.page === "Home" ? "text-blue-500" : "text-gray-900"
                }`}
              >
                <a
                  href="/"
                  className="block py-2 px-3  rounded hover:bg-gray-100 lg:hover:bg-transparent  lg:hover:text-blue-700 lg:p-0 lg:dark:hover:text-blue-500 text-transform uppercase"
                >
                  Почетна
                </a>
              </li>
              <li
                className={`${
                  props.page === "AboutUs" ? "text-blue-500" : "text-gray-900"
                }`}
              >
                <a
                  href="/aboutus"
                  className="block py-2 px-3  rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-700 lg:p-0 lg:dark:hover:text-blue-500 text-transform uppercase"
                >
                  За нас
                </a>
              </li>
              <li
                className={`${
                  props.page === "Courses" ? "text-blue-500" : "text-gray-900"
                }`}
              >
                <a
                  href="/courses"
                  className="block py-2 px-3  rounded hover:bg-gray-100 lg:hover:bg-transparent  lg:hover:text-blue-700 lg:p-0 lg:dark:hover:text-blue-500 text-transform uppercase"
                >
                  Курсеви
                </a>
              </li>
              <li
                className={`${
                  props.page === "Lecturers" ? "text-blue-500" : "text-gray-900"
                }`}
              >
                <a
                  href="/lecturers"
                  className="block py-2 px-3  rounded hover:bg-gray-100 lg:hover:bg-transparent  lg:hover:text-blue-700 lg:p-0 lg:dark:hover:text-blue-500 text-transform uppercase"
                >
                  Предавачи
                </a>
              </li>
            </ul>
          </div>

          <div
            className={`md:flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse`}
          >
            <Search />

            <div className="flex space-x-3 align-center items-center pl-5">
              {userInfo ? (
                <div className="relative inline-block">
                  <AccountCircleIcon
                    className="cursor-pointer"
                    sx={{ color: "#1560BD" }}
                    onClick={dropdown}
                    id="dropdownDefaultButton"
                    type="button"
                  />

                  <div
                    style={{ marginLeft: "-40px" }}
                    id="dropdown"
                    className="absolute z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                  >
                    <ul
                      className="py-2 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="dropdownDefaultButton"
                    >
                      <li>
                        <a
                          href="/profile"
                          className="block  px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Профил
                        </a>
                      </li>

                      <li>
                        <button
                          onClick={signoutHandler}
                          style={{ width: "100%" }}
                          className="block text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Одјави се
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              ) : (
                <Link to="/login">
                  <button
                    type="button"
                    className="text-white bg-gradient-to-r from-blue-800 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2"
                  >
                    Login
                  </button>
                </Link>
              )}
              {userInfo && userInfo.role == "student" && (
                <Link to="/cart">
                  <ShoppingCartIcon sx={{ color: "#1560BD" }} />
                  {cart.cartItems.length > 0 && (
                    <span className="inline-flex items-center justify-center w-4 h-4 ms-2 text-xs font-semibold text-white bg-red-600 rounded-full">
                      {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                    </span>
                  )}
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
