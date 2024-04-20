import LoginPage from "../../Pages/Login/LoginPage"
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import RegisterPage from "../../Pages/Register/RegisterPage";
import AboutUs from "../../Pages/AboutUs/AboutUs";
import HomePage from "../../Pages/Home/HomePage";
import CartPage from "../../Pages/Cart/CartPage";
import CategoriesPage from "../../Pages/Categories/CategoriesPage";
import CourseListPage from "../../Pages/CourseList/CourseListPage";

function App() {
    return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/courses" element={<CategoriesPage />} />
        <Route path="/courses/:category" element={<CourseListPage />} />
      </Routes>
    </BrowserRouter>
    );
  }

export default App;
