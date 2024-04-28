import LoginPage from "../../Pages/Login/LoginPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "../../Pages/Register/RegisterPage";
import AboutUs from "../../Pages/AboutUs/AboutUs";
import HomePage from "../../Pages/Home/HomePage";
import CourseDetails from "../../Pages/CourseDetails/CourseDetails";
import CartPage from "../../Pages/Cart/CartPage";
import CategoriesPage from "../../Pages/Categories/CategoriesPage";
import CourseListPage from "../../Pages/CourseList/CourseListPage";
import CheckoutPage from "../../Pages/Checkout/CheckoutPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer position="bottom-center" limit={1} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/courseDetails" element={<CourseDetails />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/courses" element={<CategoriesPage />} />
        <Route path="/courses/:category" element={<CourseListPage />} />
        <Route path="/payment" element={<CheckoutPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
