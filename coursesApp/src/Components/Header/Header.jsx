import { Link } from "react-router-dom";
import color_logo_no_background from "../../assets/LogoInfo/Logo Files/For Web/png/color_logo_no_background.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useContext } from "react";
import { Store } from "../../Store";

const Header = () => {
  const { state } = useContext(Store);
  const { cart, userInfo } = state;
  return (
    <header>
      <nav className="bg-white light:bg-gray-900 w-full z-20 top-0 start-0 border-b border-gray-200 light:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" className="flex items-center space-x-3 ">
            <img
              src={color_logo_no_background}
              className="h-8"
              alt="SkillSphere logo"
            />
          </a>

          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            {userInfo && (
              <Link to="/profile" className="me-5">
                <AccountCircleIcon href="/" sx={{ color: "#1560BD" }} />
              </Link>
            )}

            <Link to="/cart">
              <ShoppingCartIcon href="/" sx={{ color: "#1560BD" }} />
              <span className="inline-flex items-center justify-center w-4 h-4 ms-2 text-xs font-semibold text-white bg-red-800 rounded-full">
                {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
              </span>
            </Link>
          </div>
          {!userInfo && (
            <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              <Link to="/login">
                <button
                  type="button"
                  className="text-white bg-gradient-to-r from-blue-800 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                  Login
                </button>
              </Link>
            </div>
          )}
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-light-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white light:bg-gray-800 md:light:bg-gray-900 light:border-gray-700">
              <li>
                <a
                  href="/"
                  className="block py-2 px-3 bg-light-700 rounded md:bg-transparent md:text-blue-700 text-transform uppercase md:p-0 md:dark:text-blue-500"
                >
                  Почетна
                </a>
              </li>
              <li>
                <a
                  href="/aboutus"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-transform uppercase"
                >
                  За нас
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-transform uppercase"
                >
                  Курсеви
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-transform uppercase"
                >
                  Предавачи
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-transform uppercase"
                >
                  Контакт
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
