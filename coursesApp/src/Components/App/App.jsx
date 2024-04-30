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
import ProfilePage from "../../Pages/Profile/ProfilePage";
import LecturerPage from "../../Pages/Lecturers/LecturersPage";
import CourseDetailsOfABoughtCoursePage from "../../Pages/CourseDetailsOfABoughtCourse/CourseDetailsOfABoughtCoursePage";

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
        <Route
          path="/courseDetails/:courseId"
          element={<CourseDetailsOfABoughtCoursePage />}
        />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/courses" element={<CategoriesPage />} />
        <Route path="/courses/:category" element={<CourseListPage />} />
        <Route path="/payment" element={<CheckoutPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/lecturers" element={<LecturerPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
