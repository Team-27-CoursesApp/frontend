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
import ContactPage from "../../Pages/Contact/ContactPage";
import ProfilePage from "../../Pages/Profile/ProfilePage";
import LecturerPage from "../../Pages/Lecturers/LecturersPage";
import CourseDetailsOfABoughtCoursePage from "../../Pages/CourseDetailsOfABoughtCourse/CourseDetailsOfABoughtCoursePage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

axios.defaults.baseURL =
  "https://skillsphere-app-springboot-app.azuremicroservices.io/";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer position="bottom-center" limit={1} autoClose={1000} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/course/:courseId" element={<CourseDetails />} />
        <Route
          path="/my-courses/:courseId"
          element={<CourseDetailsOfABoughtCoursePage />}
        />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/courses" element={<CategoriesPage />} />
        <Route path="/courses/:category" element={<CourseListPage />} />
        <Route path="/payment" element={<CheckoutPage />} />
        <Route path="/contactus" element={<ContactPage />} />
        <Route path="/profile/:username" element={<ProfilePage />} />
        <Route path="/lecturers" element={<LecturerPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
